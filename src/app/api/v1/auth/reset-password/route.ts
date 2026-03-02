import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { resetPasswordSchema } from '@/lib/validations/auth'
import { hashPassword } from '@/lib/utils/password'
import { rateLimit } from '@/lib/utils/rate-limit'
import {
  successResponse,
  validationError,
  rateLimitError,
  serverError,
  errorResponse,
} from '@/lib/utils/api-response'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    const { success: withinLimit } = rateLimit(`reset:${ip}`, 5, 15 * 60 * 1000)
    if (!withinLimit) {
      return rateLimitError()
    }

    const body = await request.json()
    const result = resetPasswordSchema.safeParse(body)

    if (!result.success) {
      const details: Record<string, string[]> = {}
      for (const issue of result.error.issues) {
        const field = issue.path.join('.')
        if (!details[field]) details[field] = []
        details[field].push(issue.message)
      }
      return validationError('Invalid input', details)
    }

    const { token, password } = result.data

    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    })

    if (!resetToken) {
      return errorResponse('INVALID_TOKEN', 'Invalid or expired reset token', 400)
    }

    if (resetToken.used) {
      return errorResponse('TOKEN_USED', 'This reset token has already been used', 400)
    }

    if (resetToken.expires_at < new Date()) {
      return errorResponse('TOKEN_EXPIRED', 'This reset token has expired', 400)
    }

    const passwordHash = await hashPassword(password)

    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetToken.user_id },
        data: { password_hash: passwordHash },
      }),
      prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { used: true },
      }),
    ])

    return successResponse({
      message: 'Password has been reset successfully.',
    })
  } catch (error) {
    console.error('Reset password error:', error)
    return serverError()
  }
}
