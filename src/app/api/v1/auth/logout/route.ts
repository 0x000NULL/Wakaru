import crypto from 'crypto'
import { cookies } from 'next/headers'
import prisma from '@/lib/db'
import { clearAuthCookies } from '@/lib/utils/cookies'
import { successResponse, serverError } from '@/lib/utils/api-response'

export async function POST() {
  try {
    // Revoke refresh token in DB if present
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get('refresh_token')?.value

    if (refreshToken) {
      const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')
      await prisma.refreshToken
        .update({
          where: { token_hash: tokenHash },
          data: { revoked: true },
        })
        .catch(() => {
          // Token may not exist in DB (pre-migration tokens) — ignore
        })
    }

    await clearAuthCookies()
    return successResponse({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error:', error instanceof Error ? error.message : 'Unknown error')
    return serverError()
  }
}
