import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma.js'
import { Level } from '@wordrosco/types'

// ── Constants ─────────────────────────────────────────────────────────────────

const TIME_BY_LEVEL: Record<Level, number> = {
  A2: 150,
  B1: 130,
  B2: 110,
  C1: 90,
  C2: 75,
}

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// ── Zod schemas ───────────────────────────────────────────────────────────────

const startSessionSchema = z.object({
  level: z.enum(['A2', 'B1', 'B2', 'C1', 'C2']),
})

const submitAnswerSchema = z.object({
  answer: z.string().min(1).max(100).trim(),
})

// ── Helper: normalise answer for comparison ───────────────────────────────────
// Strips accents, lowercases, trims extra spaces
// So "café" matches "cafe", "  Cat  " matches "cat"

function normalise(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

// ── Routes ────────────────────────────────────────────────────────────────────

export async function gameRoutes(app: FastifyInstance) {

  // Every game route requires authentication
  app.addHook('preHandler', app.authenticate)

  // POST /game/sessions  — start a new rosco session
  app.post('/sessions', async (request, reply) => {
    const { level } = startSessionSchema.parse(request.body)
    const userId = (request.user as { sub: string }).sub
    const timeLimitSec = TIME_BY_LEVEL[level]

    // Pick one random word per letter for this level
    // Using a raw query to get DISTINCT ON letter with random ORDER
    const words = await prisma.$queryRaw<Array<{
      id: string
      letter: string
      definition: string
      answer: string
      hint: string
    }>>`
      SELECT DISTINCT ON (letter) id, letter, definition, answer, hint
      FROM words
      WHERE level = ${level}::"Level"
        AND is_active = true
      ORDER BY letter, RANDOM()
    `

    if (words.length < ALPHABET.length) {
      return reply.status(422).send({
        error: 'Not enough words in database for this level',
        found: words.length,
        required: ALPHABET.length,
      })
    }

    // Create session + all session_answer placeholders in one transaction
    const session = await prisma.$transaction(async (tx:any) => {
      const session = await tx.session.create({
        data: {
          userId,
          level,
          timeLimitSec,
        },
      })

      await tx.sessionAnswer.createMany({
        data: words.map((w:any) => ({
          sessionId: session.id,
          wordId: w.id,
          wasPassed: false,
          isCorrect: false,
        })),
      })

      return session
    })

    return reply.status(201).send({
      sessionId: session.id,
      level,
      timeLimitSec,
      firstLetter: ALPHABET[0],
    })
  })

  // GET /game/sessions/:sessionId/question  — get the current question
  app.get('/sessions/:sessionId/question', async (request, reply) => {
    const { sessionId } = request.params as { sessionId: string }
    const userId = (request.user as { sub: string }).sub

    const session = await prisma.session.findFirst({
      where: { id: sessionId, userId, status: 'IN_PROGRESS' },
    })

    if (!session) {
      return reply.status(404).send({ error: 'Session not found or already ended' })
    }

    // Find the next unanswered letter in alphabetical order
    const nextAnswer = await prisma.sessionAnswer.findFirst({
      where: {
        sessionId,
        userAnswer: null,
        wasPassed: false,
      },
      include: { word: true },
      orderBy: { word: { letter: 'asc' } },
    })

    if (!nextAnswer) {
      return reply.status(200).send({ finished: true })
    }

    const remaining = await prisma.sessionAnswer.count({
      where: { sessionId, userAnswer: null, wasPassed: false },
    })

    // IMPORTANT: we never send the answer to the client
    return reply.send({
      letter: nextAnswer.word.letter,
      definition: nextAnswer.word.definition,
      hint: nextAnswer.word.hint,
      remaining,
    })
  })

  // POST /game/sessions/:sessionId/answer  — submit an answer
  app.post('/sessions/:sessionId/answer', async (request, reply) => {
    const { sessionId } = request.params as { sessionId: string }
    const userId = (request.user as { sub: string }).sub
    const { answer } = submitAnswerSchema.parse(request.body)

    const session = await prisma.session.findFirst({
      where: { id: sessionId, userId, status: 'IN_PROGRESS' },
    })

    if (!session) {
      return reply.status(404).send({ error: 'Session not found or already ended' })
    }

    // Find the current unanswered word (server decides, not the client)
    const currentAnswer = await prisma.sessionAnswer.findFirst({
      where: { sessionId, userAnswer: null, wasPassed: false },
      include: { word: true },
      orderBy: { word: { letter: 'asc' } },
    })

    if (!currentAnswer) {
      return reply.status(400).send({ error: 'No pending question found' })
    }

    // Validate server-side — the answer never left the server
    const isCorrect = normalise(answer) === normalise(currentAnswer.word.answer)

    await prisma.$transaction([
      prisma.sessionAnswer.update({
        where: { id: currentAnswer.id },
        data: { userAnswer: answer, isCorrect },
      }),
      prisma.session.update({
        where: { id: sessionId },
        data: isCorrect
          ? { correctCount: { increment: 1 } }
          : { wrongCount: { increment: 1 } },
      }),
    ])

    // Find next unanswered letter
    const next = await prisma.sessionAnswer.findFirst({
      where: { sessionId, userAnswer: null, wasPassed: false },
      include: { word: true },
      orderBy: { word: { letter: 'asc' } },
    })

    const remaining = await prisma.sessionAnswer.count({
      where: { sessionId, userAnswer: null, wasPassed: false },
    })

    return reply.send({
      correct: isCorrect,
      correctAnswer: isCorrect ? undefined : currentAnswer.word.answer,
      nextLetter: next?.word.letter ?? null,
      remaining,
    })
  })

  // PATCH /game/sessions/:sessionId/pass  — skip current word
  app.patch('/sessions/:sessionId/pass', async (request, reply) => {
    const { sessionId } = request.params as { sessionId: string }
    const userId = (request.user as { sub: string }).sub

    const session = await prisma.session.findFirst({
      where: { id: sessionId, userId, status: 'IN_PROGRESS' },
    })

    if (!session) {
      return reply.status(404).send({ error: 'Session not found or already ended' })
    }

    const current = await prisma.sessionAnswer.findFirst({
      where: { sessionId, userAnswer: null, wasPassed: false },
      include: { word: true },
      orderBy: { word: { letter: 'asc' } },
    })

    if (!current) {
      return reply.status(400).send({ error: 'No pending question to pass' })
    }

    await prisma.$transaction([
      prisma.sessionAnswer.update({
        where: { id: current.id },
        data: { wasPassed: true },
      }),
      prisma.session.update({
        where: { id: sessionId },
        data: { passedCount: { increment: 1 } },
      }),
    ])

    const next = await prisma.sessionAnswer.findFirst({
      where: { sessionId, userAnswer: null, wasPassed: false },
      include: { word: true },
      orderBy: { word: { letter: 'asc' } },
    })

    return reply.send({ nextLetter: next?.word.letter ?? null })
  })

  // POST /game/sessions/:sessionId/end  — end the session, get full results
  app.post('/sessions/:sessionId/end', async (request, reply) => {
    const { sessionId } = request.params as { sessionId: string }
    const userId = (request.user as { sub: string }).sub

    const session = await prisma.session.findFirst({
      where: { id: sessionId, userId },
      include: {
        answers: {
          include: { word: true },
          orderBy: { word: { letter: 'asc' } },
        },
      },
    })

    if (!session) {
      return reply.status(404).send({ error: 'Session not found' })
    }

    if (session.status !== 'IN_PROGRESS') {
      return reply.status(400).send({ error: 'Session already ended' })
    }

    const endedAt = new Date()
    const timeUsedSec = Math.round(
      (endedAt.getTime() - session.startedAt.getTime()) / 1000
    )
    const score = Math.round((session.correctCount / ALPHABET.length) * 100)

    await prisma.$transaction([
      prisma.session.update({
        where: { id: sessionId },
        data: { status: 'COMPLETED', endedAt, timeUsedSec },
      }),
      prisma.user.update({
        where: { id: userId },
        data: {
          totalGames: { increment: 1 },
          totalCorrect: { increment: session.correctCount },
        },
      }),
    ])

    const review = session.answers.map((a:any) => ({
      letter: a.word.letter,
      definition: a.word.definition,
      correctAnswer: a.word.answer,      // safe to reveal after the game ends
      userAnswer: a.userAnswer,
      status: a.isCorrect ? 'correct'
        : a.wasPassed ? 'passed'
          : a.userAnswer ? 'wrong'
            : 'unanswered',
    }))

    return reply.send({
      correctCount: session.correctCount,
      wrongCount: session.wrongCount,
      passedCount: session.passedCount,
      timeUsedSec,
      score,
      review,
    })
  })
}
