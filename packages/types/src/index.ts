export type Level = 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export type SessionStatus = 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT'

export type LetterStatus = 'unanswered' | 'correct' | 'wrong' | 'passed'

// ── User ────────────────────────────────────────────────────────────────────

export interface User {
  id: string
  email: string
  displayName: string
  currentLevel: Level
  totalGames: number
  totalCorrect: number
  createdAt: string
}

// ── Auth ────────────────────────────────────────────────────────────────────

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  displayName: string
}

export interface AuthResponse {
  accessToken: string
  user: User
}

// ── Game ────────────────────────────────────────────────────────────────────

export interface StartSessionRequest {
  level: Level
}

export interface StartSessionResponse {
  sessionId: string
  level: Level
  timeLimitSec: number
  firstLetter: string
}

export interface QuestionResponse {
  letter: string
  definition: string
  hint: string
  remaining: number
}

export interface SubmitAnswerRequest {
  answer: string
}

export interface SubmitAnswerResponse {
  correct: boolean
  nextLetter: string | null
  remaining: number
}

export interface EndSessionResponse {
  correctCount: number
  wrongCount: number
  passedCount: number
  timeUsedSec: number
  score: number
  review: LetterReview[]
}

export interface LetterReview {
  letter: string
  definition: string
  correctAnswer: string
  userAnswer: string | null
  status: LetterStatus
}

// ── Words (admin) ────────────────────────────────────────────────────────────

export interface Word {
  id: string
  letter: string
  definition: string
  answer: string
  hint: string
  level: Level
  difficultyScore: number
}
