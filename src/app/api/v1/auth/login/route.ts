import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { loginSchema } from '@/lib/validations/auth'
import { verifyPassword } from '@/lib/utils/password'
import { signAccessToken, signRefreshToken } from '@/lib/utils/jwt'
import { setAuthCookies } from '@/lib/utils/cookies'
import { rateLimit } from '@/lib/utils/rate-limit'
import {
  successResponse,
  validationError,
  unauthorizedError,
  rateLimitError,
  serverError,
} from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    const { success: withinLimit } = rateLimit(`login:${ip}`, 10, 15 * 60 * 1000)
    if (!withinLimit) {
      return rateLimitError()
    }

    const body = await request.json()
    const result = loginSchema.safeParse(body)

    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid input', details)
    }

    const { email, password } = result.data

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password_hash: true,
        display_name: true,
        created_at: true,
        last_login_at: true,
      },
    })

    if (!user) {
      return unauthorizedError('Invalid email or password')
    }

    const valid = await verifyPassword(password, user.password_hash)
    if (!valid) {
      return unauthorizedError('Invalid email or password')
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() },
    })

    const accessToken = signAccessToken({ userId: user.id, email: user.email })
    const refreshToken = signRefreshToken({
      userId: user.id,
      email: user.email,
    })
    await setAuthCookies(accessToken, refreshToken)

    return successResponse({
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      createdAt: user.created_at.toISOString(),
      lastLoginAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Login error:', error)
    return serverError()
  }
}
