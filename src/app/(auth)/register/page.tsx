'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/lib/validations/auth'
import { useAuthStore } from '@/store/auth-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

interface RegisterForm {
  email: string
  password: string
  confirmPassword: string
  displayName: string
}

export default function RegisterPage() {
  const router = useRouter()
  const { register: registerUser, isLoading } = useAuthStore()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFieldError,
  } = useForm<RegisterForm>()

  const onSubmit = async (data: RegisterForm) => {
    setError('')

    if (data.password !== data.confirmPassword) {
      setFieldError('confirmPassword', { message: 'Passwords do not match' })
      return
    }

    const result = registerSchema.safeParse({
      email: data.email,
      password: data.password,
      displayName: data.displayName || undefined,
    })

    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegisterForm
        setFieldError(field, { message: issue.message })
      }
      return
    }

    try {
      await registerUser(data.email, data.password, data.displayName || undefined)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed')
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="mb-2 text-center">
          <span className="text-2xl font-bold text-primary">Wakaru</span>
          <span className="ml-2 text-muted-foreground">分かる</span>
        </div>
        <CardTitle className="text-center">Create your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}
          <Input
            label="Display Name"
            type="text"
            autoComplete="name"
            placeholder="Optional"
            error={errors.displayName?.message}
            {...register('displayName')}
          />
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email', { required: 'Email is required' })}
          />
          <Input
            label="Password"
            type="password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          <Input
            label="Confirm Password"
            type="password"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Please confirm your password',
            })}
          />
          <Button type="submit" className="w-full" loading={isLoading}>
            Create Account
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="w-full text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
