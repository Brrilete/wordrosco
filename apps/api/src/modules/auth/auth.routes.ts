import { FastifyInstance } from 'fastify'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { prisma } from '../../lib/prisma.js'

// ── Zod schemas (validation) ─────────────────────────────────────────────────

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  displayName: z.string().min(2).max(40),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

// ── Route handler ─────────────────────────────────────────────────────────────

export async function authRoutes(app: FastifyInstance) {

  // POST /auth/register
  app.post('/register', async (request, reply) => {
    const body = registerSchema.parse(request.body)

    const existing = await prisma.user.findUnique({
      where: { email: body.email },
    })

    if (existing) {
      return reply.status(409).send({ error: 'Email already in use' })
    }

    const passwordHash = await bcrypt.hash(body.password, 12)

    const user = await prisma.user.create({
      data: {
        email: body.email,
        passwordHash,
        displayName: body.displayName,
      },
      select: {
        id: true,
        email: true,
        displayName: true,
        currentLevel: true,
        totalGames: true,
        totalCorrect: true,
        createdAt: true,
      },
    })

    const accessToken = app.jwt.sign(
      { sub: user.id, email: user.email },
      { expiresIn: process.env.JWT_EXPIRES_IN ?? '15m' }
    )

    return reply.status(201).send({ accessToken, user })
  })

  // POST /auth/login
  app.post('/login', async (request, reply) => {
    const body = loginSchema.parse(request.body)

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    })

    if (!user) {
      // Same error for wrong email or wrong password — don't reveal which
      return reply.status(401).send({ error: 'Invalid credentials' })
    }

    const passwordMatch = await bcrypt.compare(body.password, user.passwordHash)

    if (!passwordMatch) {
      return reply.status(401).send({ error: 'Invalid credentials' })
    }

    const accessToken = app.jwt.sign(
      { sub: user.id, email: user.email },
      { expiresIn: process.env.JWT_EXPIRES_IN ?? '15m' }
    )

    return reply.send({
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        currentLevel: user.currentLevel,
        totalGames: user.totalGames,
        totalCorrect: user.totalCorrect,
        createdAt: user.createdAt,
      },
    })
  })

  // GET /auth/me  (protected)
  app.get('/me', {
    preHandler: [app.authenticate],
  }, async (request, reply) => {
    const payload = request.user as { sub: string }

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        displayName: true,
        currentLevel: true,
        totalGames: true,
        totalCorrect: true,
        createdAt: true,
      },
    })

    if (!user) return reply.status(404).send({ error: 'User not found' })

    return reply.send({ user })
  })
}
