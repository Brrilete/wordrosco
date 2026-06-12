import { FastifyError, FastifyRequest, FastifyReply } from 'fastify'
import { ZodError } from 'zod'

export function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Zod validation errors → 400
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: 'Validation error',
      issues: error.issues.map((i) => ({
        field: i.path.join('.'),
        message: i.message,
      })),
    })
  }

  // Fastify validation errors → 400
  if (error.validation) {
    return reply.status(400).send({
      error: 'Bad request',
      message: error.message,
    })
  }

  // Known HTTP errors
  if (error.statusCode) {
    return reply.status(error.statusCode).send({
      error: error.name,
      message: error.message,
    })
  }

  // Unexpected errors → 500 (don't leak details in production)
  console.error('[Unhandled error]', error)
  return reply.status(500).send({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
  })
}
