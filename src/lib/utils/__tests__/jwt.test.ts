import { describe, it, expect, beforeAll } from 'vitest'

// Set env vars before importing jwt module
beforeAll(() => {
  process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing'
  process.env.JWT_REFRESH_SECRET = 'test-jwt-refresh-secret-key-for-testing'
})

describe('JWT utilities', () => {
  it('signAccessToken returns a string', async () => {
    const { signAccessToken } = await import('@/lib/utils/jwt')
    const token = signAccessToken({ userId: 'user1', email: 'test@test.com' })
    expect(typeof token).toBe('string')
    expect(token.split('.')).toHaveLength(3)
  })

  it('verifyAccessToken round-trips correctly', async () => {
    const { signAccessToken, verifyAccessToken } = await import('@/lib/utils/jwt')
    const payload = { userId: 'user1', email: 'test@test.com' }
    const token = signAccessToken(payload)
    const decoded = verifyAccessToken(token)

    expect(decoded).not.toBeNull()
    expect(decoded!.userId).toBe('user1')
    expect(decoded!.email).toBe('test@test.com')
  })

  it('verifyAccessToken rejects invalid tokens', async () => {
    const { verifyAccessToken } = await import('@/lib/utils/jwt')
    const result = verifyAccessToken('invalid.token.here')
    expect(result).toBeNull()
  })

  it('signRefreshToken returns a string', async () => {
    const { signRefreshToken } = await import('@/lib/utils/jwt')
    const token = signRefreshToken({
      userId: 'user1',
      email: 'test@test.com',
    })
    expect(typeof token).toBe('string')
    expect(token.split('.')).toHaveLength(3)
  })

  it('verifyRefreshToken round-trips correctly', async () => {
    const { signRefreshToken, verifyRefreshToken } = await import('@/lib/utils/jwt')
    const payload = { userId: 'user1', email: 'test@test.com' }
    const token = signRefreshToken(payload)
    const decoded = verifyRefreshToken(token)

    expect(decoded).not.toBeNull()
    expect(decoded!.userId).toBe('user1')
    expect(decoded!.email).toBe('test@test.com')
  })

  it('verifyRefreshToken rejects access tokens', async () => {
    const { signAccessToken, verifyRefreshToken } = await import('@/lib/utils/jwt')
    const token = signAccessToken({ userId: 'user1', email: 'test@test.com' })
    const result = verifyRefreshToken(token)
    expect(result).toBeNull()
  })
})
