'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { loginSchema } from '@/lib/validations/auth'
import { useAuthStore } from '@/store/auth-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuthStore()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFieldError,
  } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    setError('')

    const result = loginSchema.safeParse(data)
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof LoginForm
        setFieldError(field, { message: issue.message })
      }
      return
    }

    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="mb-2 text-center">
          <span className="text-2xl font-bold text-primary">Wakaru</span>
          <span className="ml-2 text-muted-foreground">分かる</span>
        </div>
        <CardTitle className="text-center">Welcome back</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}
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
            autoComplete="current-password"
            error={errors.password?.message}
            {...register('password', { required: 'Password is required' })}
          />
          <Button type="submit" className="w-full" loading={isLoading}>
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="w-full space-y-2 text-center text-sm">
          <p className="text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
          <p>
            <Link
              href="/reset-password"
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
