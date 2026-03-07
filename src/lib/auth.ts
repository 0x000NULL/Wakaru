import { cookies } from 'next/headers'
import { verifyAccessToken } from '@/lib/utils/jwt'
import prisma from '@/lib/db'
import type { AuthUser } from '@/types/auth'

export async function getAuthUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value

  if (!token) return null

  const payload = verifyAccessToken(token)
  if (!payload) return null

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      display_name: true,
      password_changed_at: true,
      created_at: true,
      last_login_at: true,
      settings: true,
    },
  })

  if (!user) return null

  // Reject tokens issued before password was changed
  if (user.password_changed_at && payload.iat) {
    const changedAtSeconds = Math.floor(user.password_changed_at.getTime() / 1000)
    if (payload.iat < changedAtSeconds) {
      return null
    }
  }

  const settings = user.settings as Record<string, unknown> | null
  const onboardingCompleted = settings?.onboardingCompleted !== false

  return {
    id: user.id,
    email: user.email,
    displayName: user.display_name,
    createdAt: user.created_at.toISOString(),
    lastLoginAt: user.last_login_at?.toISOString() ?? null,
    onboardingCompleted,
  }
}
