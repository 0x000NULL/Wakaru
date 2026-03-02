import { cookies } from 'next/headers'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: IS_PRODUCTION,
  sameSite: 'strict' as const,
  path: '/',
}

export async function setAuthCookies(accessToken: string, refreshToken: string) {
  const cookieStore = await cookies()

  cookieStore.set('access_token', accessToken, {
    ...COOKIE_OPTIONS,
    maxAge: 7 * 24 * 60 * 60, // 7 days
  })

  cookieStore.set('refresh_token', refreshToken, {
    ...COOKIE_OPTIONS,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  })
}

export async function clearAuthCookies() {
  const cookieStore = await cookies()

  cookieStore.set('access_token', '', {
    ...COOKIE_OPTIONS,
    maxAge: 0,
  })

  cookieStore.set('refresh_token', '', {
    ...COOKIE_OPTIONS,
    maxAge: 0,
  })
}
