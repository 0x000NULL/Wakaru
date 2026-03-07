import { z } from 'zod'

export const passwordField = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Password must contain a lowercase letter')
  .regex(/[A-Z]/, 'Password must contain an uppercase letter')
  .regex(/[0-9]/, 'Password must contain a number')

export const registerSchema = z.object({
  email: z.email('Invalid email address'),
  password: passwordField,
  displayName: z.string().min(1).max(100).optional(),
})

export const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(1, 'Password is required').max(128),
})

export const forgotPasswordSchema = z.object({
  email: z.email('Invalid email address'),
})

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required').max(100),
  password: passwordField,
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
