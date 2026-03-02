import { NextRequest } from 'next/server'
import crypto from 'crypto'
import prisma from '@/lib/db'
import { forgotPasswordSchema } from '@/lib/validations/auth'
import { rateLimit } from '@/lib/utils/rate-limit'
import { sendPasswordResetEmail } from '@/lib/utils/email'
import {
  successResponse,
  validationError,
  rateLimitError,
  serverError,
} from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    const { success: withinLimit } = rateLimit(`forgot:${ip}`, 3, 15 * 60 * 1000)
    if (!withinLimit) {
      return rateLimitError()
    }

    const body = await request.json()
    const result = forgotPasswordSchema.safeParse(body)

    if (!result.success) {
      return validationError('Invalid email address')
    }

    const { email } = result.data

    const user = await prisma.user.findUnique({ where: { email } })

    if (user) {
      // Invalidate any existing unused tokens for this user
      await prisma.passwordResetToken.updateMany({
        where: { user_id: user.id, used: false },
        data: { used: true },
      })

      // Generate a new token
      const token = crypto.randomUUID()
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

      await prisma.passwordResetToken.create({
        data: {
          user_id: user.id,
          token,
          expires_at: expiresAt,
        },
      })

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
      const resetUrl = `${baseUrl}/reset-password?token=${token}`

      await sendPasswordResetEmail(email, resetUrl)
    }

    // Always return success to prevent email enumeration
    return successResponse({
      message: 'If an account with that email exists, a reset link has been sent.',
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return serverError()
  }
}
