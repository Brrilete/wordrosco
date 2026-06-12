import { buildApp } from '../src/app'

describe('Game routes', () => {
  let app: Awaited<ReturnType<typeof buildApp>>
  let token: string

  beforeAll(async () => {
    app = await buildApp()

    // Register a test user and get a token
    const res = await app.inject({
      method: 'POST',
      url: '/auth/register',
      payload: {
        email: 'test@wordrosco.com',
        password: 'testpassword123',
        displayName: 'Test Player',
      },
    })

    token = JSON.parse(res.body).accessToken
  })

  afterAll(async () => {
    await app.close()
  })

  it('POST /game/sessions should create a session', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/game/sessions',
      headers: { authorization: `Bearer ${token}` },
      payload: { level: 'A2' },
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.body)
    expect(body).toHaveProperty('sessionId')
    expect(body.level).toBe('A2')
    expect(body.firstLetter).toBe('A')
  })

  it('POST /game/sessions should reject unauthenticated requests', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/game/sessions',
      payload: { level: 'A2' },
    })

    expect(res.statusCode).toBe(401)
  })

  it('answer validation should never expose the correct answer on wrong guess', async () => {
    const sessionRes = await app.inject({
      method: 'POST',
      url: '/game/sessions',
      headers: { authorization: `Bearer ${token}` },
      payload: { level: 'A2' },
    })

    const { sessionId } = JSON.parse(sessionRes.body)

    const answerRes = await app.inject({
      method: 'POST',
      url: `/game/sessions/${sessionId}/answer`,
      headers: { authorization: `Bearer ${token}` },
      payload: { answer: 'wronganswer' },
    })

    const body = JSON.parse(answerRes.body)
    expect(body.correct).toBe(false)
    // The correct answer must NOT be in the response
    expect(body).not.toHaveProperty('correctAnswer')
    expect(body).not.toHaveProperty('answer')
    expect(body).not.toHaveProperty('word')
  })
})
