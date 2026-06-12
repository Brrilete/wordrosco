import { create } from 'zustand'
import type { Level, LetterStatus } from '@wordrosco/types'

interface GameState {
  sessionId: string | null
  level: Level | null
  timeLeft: number
  currentLetter: string | null
  currentDefinition: string | null
  currentHint: string | null
  remaining: number
  correct: number
  wrong: number
  letterStatus: Record<string, LetterStatus>
  phase: 'idle' | 'playing' | 'result'

  startSession: (sessionId: string, level: Level, timeLimitSec: number, firstLetter: string) => void
  setQuestion: (letter: string, definition: string, hint: string, remaining: number) => void
  markCorrect: (letter: string, nextLetter: string | null, remaining: number) => void
  markWrong: (letter: string, nextLetter: string | null, remaining: number) => void
  markPassed: (letter: string, nextLetter: string | null) => void
  tick: () => void
  endGame: () => void
  reset: () => void
}

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const defaultLetterStatus = (): Record<string, LetterStatus> =>
  Object.fromEntries(ALPHABET.map((l) => [l, 'unanswered']))

export const useGameStore = create<GameState>((set) => ({
  sessionId: null,
  level: null,
  timeLeft: 0,
  currentLetter: null,
  currentDefinition: null,
  currentHint: null,
  remaining: 0,
  correct: 0,
  wrong: 0,
  letterStatus: defaultLetterStatus(),
  phase: 'idle',

  startSession: (sessionId, level, timeLimitSec, firstLetter) =>
    set({
      sessionId,
      level,
      timeLeft: timeLimitSec,
      currentLetter: firstLetter,
      correct: 0,
      wrong: 0,
      remaining: ALPHABET.length,
      letterStatus: defaultLetterStatus(),
      phase: 'playing',
    }),

  setQuestion: (letter, definition, hint, remaining) =>
    set({ currentLetter: letter, currentDefinition: definition, currentHint: hint, remaining }),

  markCorrect: (letter, nextLetter, remaining) =>
    set((s) => ({
      letterStatus: { ...s.letterStatus, [letter]: 'correct' },
      correct: s.correct + 1,
      currentLetter: nextLetter,
      remaining,
    })),

  markWrong: (letter, nextLetter, remaining) =>
    set((s) => ({
      letterStatus: { ...s.letterStatus, [letter]: 'wrong' },
      wrong: s.wrong + 1,
      currentLetter: nextLetter,
      remaining,
    })),

  markPassed: (letter, nextLetter) =>
    set((s) => ({
      letterStatus: { ...s.letterStatus, [letter]: 'passed' },
      currentLetter: nextLetter,
    })),

  tick: () => set((s) => ({ timeLeft: Math.max(0, s.timeLeft - 1) })),

  endGame: () => set({ phase: 'result' }),

  reset: () =>
    set({
      sessionId: null,
      level: null,
      timeLeft: 0,
      currentLetter: null,
      currentDefinition: null,
      currentHint: null,
      remaining: 0,
      correct: 0,
      wrong: 0,
      letterStatus: defaultLetterStatus(),
      phase: 'idle',
    }),
}))
