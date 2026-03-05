'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { useAuthStore } from '@/store/auth-store'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const user = useAuthStore(s => s.user)

  const isOnboarding = pathname.startsWith('/onboarding')

  useEffect(() => {
    if (!user) return

    if (user.onboardingCompleted === false && !isOnboarding) {
      router.replace('/onboarding')
    } else if (user.onboardingCompleted !== false && isOnboarding) {
      router.replace('/dashboard')
    }
  }, [user, isOnboarding, router])

  if (isOnboarding) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header showDashboardNav />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
