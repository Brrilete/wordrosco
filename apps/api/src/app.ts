import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import rateLimit from '@fastify/rate-limit'
import { redis } from './lib/redis.js'
import { errorHandler } from './middleware/errorHandler.js'
import { authenticate } from './middleware/authenticate.js'
import { authRoutes } from './modules/auth/auth.routes.js'
import { gameRoutes } from './modules/game/game.routes.js'

export async function buildApp() {
  const app = Fastify({
    logger: {
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    },
  })

  // ── Plugins ────────────────────────────────────────────────────────────────

  await app.register(cors, {
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  })

  await app.register(jwt, {
    secret: process.env.JWT_SECRET ?? 'dev-secret-change-in-production',
  })

  await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
    redis,
    keyGenerator: (request) =>
      (request.user as { sub?: string } | undefined)?.sub ?? request.ip,
  })

  // ── Decorators ─────────────────────────────────────────────────────────────
  // Makes app.authenticate available in all route files

  app.decorate('authenticate', authenticate)

  // ── Error handler ──────────────────────────────────────────────────────────

  app.setErrorHandler(errorHandler)

  // ── Health check ───────────────────────────────────────────────────────────

  app.get('/health', async () => ({ status: 'ok', timestamp: new Date().toISOString() }))

  // ── Routes ─────────────────────────────────────────────────────────────────

  app.register(authRoutes, { prefix: '/auth' })
  app.register(gameRoutes, { prefix: '/game' })

  return app
}
