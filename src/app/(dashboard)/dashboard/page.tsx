'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useProgressStore } from '@/store/progress-store'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function HiraganaStatus() {
  const hiragana = useProgressStore((s) => s.hiragana)
  const fetchHiraganaProgress = useProgressStore((s) => s.fetchHiraganaProgress)

  useEffect(() => {
    fetchHiraganaProgress()
  }, [fetchHiraganaProgress])

  if (!hiragana || hiragana.learnedCount === 0) {
    return <p className="mt-3 text-xs font-medium text-primary">Start Learning</p>
  }

  if (hiragana.dueCount > 0) {
    return (
      <p className="mt-3 text-xs font-medium text-amber-600 dark:text-amber-400">
        {hiragana.dueCount} review{hiragana.dueCount !== 1 ? 's' : ''} due
      </p>
    )
  }

  return (
    <p className="mt-3 text-xs font-medium text-primary">
      Continue ({hiragana.completionPercent}% complete)
    </p>
  )
}

const comingSoonSections = [
  {
    title: 'Vocabulary',
    description: 'Build your word bank with 3000+ essential words using spaced repetition.',
  },
  {
    title: 'Grammar',
    description: 'Learn grammar patterns from N5 to N1 with clear explanations and examples.',
  },
  {
    title: 'Immersion',
    description: 'Practice with real Japanese media, interactive subtitles, and sentence mining.',
  },
]

export default function DashboardPage() {
  const { user } = useAuthStore()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Welcome{user?.displayName ? `, ${user.displayName}` : ''}
        </h1>
        <p className="mt-1 text-muted-foreground">Your Japanese learning journey starts here.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/hiragana" className="transition-opacity hover:opacity-80">
          <Card>
            <CardHeader>
              <CardTitle>Hiragana & Katakana</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Master the Japanese writing systems — your first step to reading Japanese.
              </p>
              <HiraganaStatus />
            </CardContent>
          </Card>
        </Link>

        {comingSoonSections.map(section => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{section.description}</p>
              <p className="mt-3 text-xs font-medium text-primary">Coming soon</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
