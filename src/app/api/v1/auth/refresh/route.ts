import { cookies } from 'next/headers'
import prisma from '@/lib/db'
import { verifyRefreshToken, signAccessToken, signRefreshToken } from '@/lib/utils/jwt'
import { setAuthCookies } from '@/lib/utils/cookies'
import { successResponse, unauthorizedError, serverError } from '@/lib/utils/api-response'

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

    const newAccessToken = signAccessToken({
      userId: user.id,
      email: user.email,
    })
    const newRefreshToken = signRefreshToken({
      userId: user.id,
      email: user.email,
    })
    await setAuthCookies(newAccessToken, newRefreshToken)

    return successResponse({
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      createdAt: user.created_at.toISOString(),
      lastLoginAt: user.last_login_at?.toISOString() ?? null,
    })
  } catch (error) {
    console.error('Refresh error:', error)
    return serverError()
  }
}
