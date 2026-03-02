export interface AuthUser {
  id: string
  email: string
  displayName: string | null
  createdAt: string
  lastLoginAt: string | null
}

export interface JWTPayload {
  userId: string
  email: string
  iat?: number
  exp?: number
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  displayName?: string
}
