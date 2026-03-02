'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { forgotPasswordSchema } from '@/lib/validations/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

interface ResetForm {
  email: string
}

export default function ResetPasswordPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFieldError,
  } = useForm<ResetForm>()

  const onSubmit = async (data: ResetForm) => {
    const result = forgotPasswordSchema.safeParse(data)
    if (!result.success) {
      for (const issue of result.error.issues) {
        setFieldError('email', { message: issue.message })
      }
      return
    }

    setIsLoading(true)
    try {
      await fetch('/api/v1/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email }),
      })
      setSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="mb-2 text-center">
          <span className="text-2xl font-bold text-primary">Wakaru</span>
          <span className="ml-2 text-muted-foreground">分かる</span>
        </div>
        <CardTitle className="text-center">Reset Password</CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="space-y-4 text-center">
            <p className="text-sm text-muted-foreground">
              If an account with that email exists, a password reset link has been sent.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
            <Input
              label="Email"
              type="email"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email', { required: 'Email is required' })}
            />
            <Button type="submit" className="w-full" loading={isLoading}>
              Send Reset Link
            </Button>
          </form>
        )}
      </CardContent>
      <CardFooter>
        <p className="w-full text-center text-sm">
          <Link
            href="/login"
            className="text-muted-foreground hover:text-foreground hover:underline"
          >
            Back to login
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
