import jwt from 'jsonwebtoken'
import type { JWTPayload } from '@/types/auth'

const JWT_SECRET = process.env.JWT_SECRET!
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!

if (!JWT_SECRET || JWT_SECRET.length < 32)
  throw new Error('JWT_SECRET must be at least 32 characters')
if (!JWT_REFRESH_SECRET || JWT_REFRESH_SECRET.length < 32)
  throw new Error('JWT_REFRESH_SECRET must be at least 32 characters')

const ACCESS_TOKEN_EXPIRY = '7d'
const REFRESH_TOKEN_EXPIRY = '30d'

export function signAccessToken(payload: { userId: string; email: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY, algorithm: 'HS256' })
}

export function signRefreshToken(payload: { userId: string; email: string }): string {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
    algorithm: 'HS256',
  })
}

export function verifyAccessToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as JWTPayload
  } catch {
    return null
  }
}

export function verifyRefreshToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET, { algorithms: ['HS256'] }) as JWTPayload
  } catch {
    return null
  }
}
