import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { registerSchema } from '@/lib/validations/auth'
import { hashPassword } from '@/lib/utils/password'
import { signAccessToken, signRefreshToken } from '@/lib/utils/jwt'
import { setAuthCookies } from '@/lib/utils/cookies'
import { rateLimit } from '@/lib/utils/rate-limit'
import {
  createdResponse,
  validationError,
  rateLimitError,
  serverError,
  errorResponse,
} from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    const { success: withinLimit } = rateLimit(`register:${ip}`, 5, 15 * 60 * 1000)
    if (!withinLimit) {
      return rateLimitError()
    }

    const body = await request.json()
    const result = registerSchema.safeParse(body)

    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid input', details)
    }

    const { email, password, displayName } = result.data

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return errorResponse('EMAIL_EXISTS', 'Email already registered', 409)
    }

    const passwordHash = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        email,
        password_hash: passwordHash,
        display_name: displayName ?? null,
        settings: { onboardingCompleted: false },
      },
      select: {
        id: true,
        email: true,
        display_name: true,
        created_at: true,
        last_login_at: true,
      },
    })

    const accessToken = signAccessToken({ userId: user.id, email: user.email })
    const refreshToken = signRefreshToken({
      userId: user.id,
      email: user.email,
    })
    await setAuthCookies(accessToken, refreshToken)

    return createdResponse({
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      createdAt: user.created_at.toISOString(),
      lastLoginAt: user.last_login_at?.toISOString() ?? null,
      onboardingCompleted: false,
    })
  } catch (error) {
    console.error('Register error:', error)
    return serverError()
  }
}
