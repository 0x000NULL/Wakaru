import { describe, it, expect, beforeAll, beforeEach, afterEach, vi } from 'vitest'
import prisma from '@/lib/db'

// Set env vars before any module imports that depend on them
beforeAll(() => {
  process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing'
  process.env.JWT_REFRESH_SECRET = 'test-jwt-refresh-secret-key-for-testing'
  process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000'
})

// Mock cookie store used across the test
let mockCookieStore: Map<string, { name: string; value: string; [key: string]: unknown }>

// Mock next/headers so cookies() works outside Next.js runtime
vi.mock('next/headers', () => ({
  cookies: async () => ({
    get: (name: string) => {
      const entry = mockCookieStore.get(name)
      return entry ? { name: entry.name, value: entry.value } : undefined
    },
    set: (name: string, value: string, options?: Record<string, unknown>) => {
      mockCookieStore.set(name, { name, value, ...options })
    },
    delete: (name: string) => {
      mockCookieStore.delete(name)
    },
  }),
}))

// Unique email per test run to avoid collisions
const testEmail = () => `test-${Date.now()}-${Math.random().toString(36).slice(2)}@example.com`

// Helper: invoke a route handler directly
async function callRoute(
  routePath: string,
  options: {
    method?: string
    body?: unknown
    cookies?: Record<string, string>
  } = {}
) {
  const { method = 'POST', body, cookies = {} } = options

  // Set mock cookies before calling the handler
  for (const [k, v] of Object.entries(cookies)) {
    mockCookieStore.set(k, { name: k, value: v })
  }

  const url = `http://localhost:3000${routePath}`
  const headers = new Headers({ 'Content-Type': 'application/json' })

  const request = new Request(url, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  // Dynamically import the route handler
  const mod = await import(`@/app/api/v1${routePath}/route`)
  const handler = mod[method.toUpperCase()] || mod.POST

  const response = await handler(request)
  const data = await response.json()

  return { status: response.status, data }
}

describe('Auth API Integration Tests', () => {
  const createdEmails: string[] = []

  beforeEach(() => {
    mockCookieStore = new Map()
  })

  afterEach(async () => {
    if (createdEmails.length > 0) {
      await prisma.user.deleteMany({
        where: { email: { in: createdEmails } },
      })
      createdEmails.length = 0
    }
  })

  describe('POST /api/v1/auth/register', () => {
    it('registers a new user successfully', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { status, data } = await callRoute('/auth/register', {
        body: { email, password: 'testpassword123' },
      })

      expect(status).toBe(201)
      expect(data.success).toBe(true)
      expect(data.data.email).toBe(email)
      expect(data.data.id).toBeDefined()

      // Verify cookies were set
      expect(mockCookieStore.has('access_token')).toBe(true)
      expect(mockCookieStore.has('refresh_token')).toBe(true)
    })

    it('rejects duplicate email', async () => {
      const email = testEmail()
      createdEmails.push(email)

      await callRoute('/auth/register', {
        body: { email, password: 'testpassword123' },
      })

      // Clear cookies between calls
      mockCookieStore.clear()

      const { status, data } = await callRoute('/auth/register', {
        body: { email, password: 'anotherpassword123' },
      })

      expect(status).toBe(409)
      expect(data.success).toBe(false)
      expect(data.error.code).toBe('EMAIL_EXISTS')
    })

    it('rejects invalid input', async () => {
      const { status, data } = await callRoute('/auth/register', {
        body: { email: 'not-an-email', password: 'short' },
      })

      expect(status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error.code).toBe('VALIDATION_ERROR')
    })
  })

  describe('POST /api/v1/auth/login', () => {
    let loginEmail: string

    beforeEach(async () => {
      loginEmail = testEmail()
      createdEmails.push(loginEmail)
      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('loginpassword123')
      await prisma.user.upsert({
        where: { email: loginEmail },
        update: {},
        create: {
          email: loginEmail,
          password_hash: hash,
        },
      })
    })

    it('logs in with correct credentials', async () => {
      const { status, data } = await callRoute('/auth/login', {
        body: { email: loginEmail, password: 'loginpassword123' },
      })

      expect(status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.email).toBe(loginEmail)
      expect(mockCookieStore.has('access_token')).toBe(true)
      expect(mockCookieStore.has('refresh_token')).toBe(true)
    })

    it('rejects wrong password', async () => {
      const { status, data } = await callRoute('/auth/login', {
        body: { email: loginEmail, password: 'wrongpassword' },
      })

      expect(status).toBe(401)
      expect(data.success).toBe(false)
      expect(data.error.code).toBe('UNAUTHORIZED')
    })

    it('rejects nonexistent email', async () => {
      const { status, data } = await callRoute('/auth/login', {
        body: {
          email: 'nonexistent@example.com',
          password: 'anypassword123',
        },
      })

      expect(status).toBe(401)
      expect(data.success).toBe(false)
    })
  })

  describe('POST /api/v1/auth/logout', () => {
    it('clears auth cookies', async () => {
      // Simulate being logged in
      mockCookieStore.set('access_token', {
        name: 'access_token',
        value: 'some-token',
      })
      mockCookieStore.set('refresh_token', {
        name: 'refresh_token',
        value: 'some-refresh',
      })

      const { status, data } = await callRoute('/auth/logout')

      expect(status).toBe(200)
      expect(data.success).toBe(true)

      // Cookies should be set to empty with maxAge 0
      const accessCookie = mockCookieStore.get('access_token')
      expect(accessCookie?.value).toBe('')
    })
  })

  describe('POST /api/v1/auth/refresh', () => {
    it('refreshes tokens with valid refresh token', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('testpassword')
      const user = await prisma.user.create({
        data: { email, password_hash: hash },
      })

      const { signRefreshToken } = await import('@/lib/utils/jwt')
      const refreshToken = signRefreshToken({
        userId: user.id,
        email: user.email,
      })

      const { status, data } = await callRoute('/auth/refresh', {
        cookies: { refresh_token: refreshToken },
      })

      expect(status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.email).toBe(email)
    })

    it('rejects invalid refresh token', async () => {
      const { status, data } = await callRoute('/auth/refresh', {
        cookies: { refresh_token: 'invalid-token' },
      })

      expect(status).toBe(401)
      expect(data.success).toBe(false)
    })

    it('rejects missing refresh token', async () => {
      const { status, data } = await callRoute('/auth/refresh')

      expect(status).toBe(401)
      expect(data.success).toBe(false)
    })
  })

  describe('POST /api/v1/auth/forgot-password', () => {
    it('returns success for existing email', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('testpassword')
      await prisma.user.create({
        data: { email, password_hash: hash },
      })

      const { status, data } = await callRoute('/auth/forgot-password', {
        body: { email },
      })

      expect(status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.message).toContain('reset link')

      // Verify a token was created
      const user = await prisma.user.findUnique({ where: { email } })
      const token = await prisma.passwordResetToken.findFirst({
        where: { user_id: user!.id, used: false },
      })
      expect(token).not.toBeNull()
    })

    it('returns success for nonexistent email (enumeration prevention)', async () => {
      const { status, data } = await callRoute('/auth/forgot-password', {
        body: { email: 'doesnotexist@example.com' },
      })

      expect(status).toBe(200)
      expect(data.success).toBe(true)
    })

    it('rejects invalid email format', async () => {
      const { status, data } = await callRoute('/auth/forgot-password', {
        body: { email: 'not-an-email' },
      })

      expect(status).toBe(400)
      expect(data.success).toBe(false)
    })
  })

  describe('POST /api/v1/auth/reset-password', () => {
    it('resets password with valid token', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('oldpassword123')
      const user = await prisma.user.create({
        data: { email, password_hash: hash },
      })

      const crypto = await import('crypto')
      const token = crypto.randomUUID()
      await prisma.passwordResetToken.create({
        data: {
          user_id: user.id,
          token,
          expires_at: new Date(Date.now() + 60 * 60 * 1000),
        },
      })

      const { status, data } = await callRoute('/auth/reset-password', {
        body: { token, password: 'newpassword123' },
      })

      expect(status).toBe(200)
      expect(data.success).toBe(true)

      // Verify the password was changed
      const { verifyPassword } = await import('@/lib/utils/password')
      const updatedUser = await prisma.user.findUnique({
        where: { id: user.id },
      })
      const valid = await verifyPassword('newpassword123', updatedUser!.password_hash)
      expect(valid).toBe(true)
    })

    it('rejects invalid token', async () => {
      const { status, data } = await callRoute('/auth/reset-password', {
        body: { token: 'invalid-token', password: 'newpassword123' },
      })

      expect(status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error.code).toBe('INVALID_TOKEN')
    })

    it('rejects expired token', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('testpassword')
      const user = await prisma.user.create({
        data: { email, password_hash: hash },
      })

      const crypto = await import('crypto')
      const token = crypto.randomUUID()
      await prisma.passwordResetToken.create({
        data: {
          user_id: user.id,
          token,
          expires_at: new Date(Date.now() - 1000), // Already expired
        },
      })

      const { status, data } = await callRoute('/auth/reset-password', {
        body: { token, password: 'newpassword123' },
      })

      expect(status).toBe(400)
      expect(data.error.code).toBe('TOKEN_EXPIRED')
    })

    it('rejects used token', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('testpassword')
      const user = await prisma.user.create({
        data: { email, password_hash: hash },
      })

      const crypto = await import('crypto')
      const token = crypto.randomUUID()
      await prisma.passwordResetToken.create({
        data: {
          user_id: user.id,
          token,
          expires_at: new Date(Date.now() + 60 * 60 * 1000),
          used: true,
        },
      })

      const { status, data } = await callRoute('/auth/reset-password', {
        body: { token, password: 'newpassword123' },
      })

      expect(status).toBe(400)
      expect(data.error.code).toBe('TOKEN_USED')
    })
  })

  describe('GET /api/v1/user/profile', () => {
    it('returns user data when authenticated', async () => {
      const email = testEmail()
      createdEmails.push(email)

      const { hashPassword } = await import('@/lib/utils/password')
      const hash = await hashPassword('testpassword')
      const user = await prisma.user.create({
        data: { email, password_hash: hash },
      })

      const { signAccessToken } = await import('@/lib/utils/jwt')
      const accessToken = signAccessToken({
        userId: user.id,
        email: user.email,
      })

      const { status, data } = await callRoute('/user/profile', {
        method: 'GET',
        cookies: { access_token: accessToken },
      })

      expect(status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.email).toBe(email)
    })

    it('returns 401 when not authenticated', async () => {
      const { status, data } = await callRoute('/user/profile', {
        method: 'GET',
      })

      expect(status).toBe(401)
      expect(data.success).toBe(false)
    })
  })
})
