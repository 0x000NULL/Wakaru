import crypto from 'crypto'
import { cookies } from 'next/headers'
import prisma from '@/lib/db'
import { verifyRefreshToken, signAccessToken, signRefreshToken } from '@/lib/utils/jwt'
import { setAuthCookies } from '@/lib/utils/cookies'
import { rateLimit } from '@/lib/utils/rate-limit'
import { successResponse, unauthorizedError, rateLimitError, serverError } from '@/lib/utils/api-response'

export async function POST() {
  try {
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get('refresh_token')?.value

    if (!refreshToken) {
      return unauthorizedError('No refresh token')
    }

    const payload = verifyRefreshToken(refreshToken)
    if (!payload) {
      return unauthorizedError('Invalid refresh token')
    }

    // H4: Rate limit refresh requests per user
    const { success: withinLimit } = rateLimit(`refresh:${payload.userId}`, 30, 60_000)
    if (!withinLimit) {
      return rateLimitError()
    }

    // Verify token exists in DB and is not revoked
    const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    // M1: Atomically revoke the token — if another request already revoked it,
    // updateMany returns count 0 and we reject the request
    const { count: revokedCount } = await prisma.refreshToken.updateMany({
      where: { token_hash: tokenHash, revoked: false },
      data: { revoked: true },
    })

    if (revokedCount === 0) {
      return unauthorizedError('Invalid refresh token')
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        display_name: true,
        created_at: true,
        last_login_at: true,
      },
    })

    if (!user) {
      return unauthorizedError('User not found')
    }

    // Issue new tokens
    const newAccessToken = signAccessToken({
      userId: user.id,
      email: user.email,
    })
    const newRefreshToken = signRefreshToken({
      userId: user.id,
      email: user.email,
    })
    const newTokenHash = crypto.createHash('sha256').update(newRefreshToken).digest('hex')

    await prisma.refreshToken.create({
      data: {
        user_id: user.id,
        token_hash: newTokenHash,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    })

    // M6: Probabilistic cleanup of old revoked/expired tokens (1% chance)
    if (Math.random() < 0.01) {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      prisma.refreshToken
        .deleteMany({
          where: {
            OR: [
              { revoked: true, created_at: { lt: thirtyDaysAgo } },
              { expires_at: { lt: new Date() } },
            ],
          },
        })
        .catch(() => {})

      prisma.passwordResetToken
        .deleteMany({
          where: {
            OR: [
              { used: true, created_at: { lt: thirtyDaysAgo } },
              { expires_at: { lt: new Date() } },
            ],
          },
        })
        .catch(() => {})
    }

    await setAuthCookies(newAccessToken, newRefreshToken)

    return successResponse({
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      createdAt: user.created_at.toISOString(),
      lastLoginAt: user.last_login_at?.toISOString() ?? null,
    })
  } catch (error) {
    console.error('Refresh error:', error instanceof Error ? error.message : 'Unknown error')
    return serverError()
  }
}
