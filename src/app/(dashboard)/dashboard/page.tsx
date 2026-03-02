'use client'

import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const sections = [
  {
    title: 'Hiragana & Katakana',
    description: 'Master the Japanese writing systems — your first step to reading Japanese.',
    status: 'Start Learning',
    href: '/hiragana',
  },
  {
    title: 'Vocabulary',
    description: 'Build your word bank with 3000+ essential words using spaced repetition.',
    status: 'Coming soon',
    href: null,
  },
  {
    title: 'Grammar',
    description: 'Learn grammar patterns from N5 to N1 with clear explanations and examples.',
    status: 'Coming soon',
    href: null,
  },
  {
    title: 'Immersion',
    description: 'Practice with real Japanese media, interactive subtitles, and sentence mining.',
    status: 'Coming soon',
    href: null,
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
        {sections.map(section => {
          const card = (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{section.description}</p>
                <p className="mt-3 text-xs font-medium text-primary">{section.status}</p>
              </CardContent>
            </Card>
          )
          if (section.href) {
            return (
              <Link key={section.title} href={section.href} className="transition-opacity hover:opacity-80">
                {card}
              </Link>
            )
          }
          return card
        })}
      </div>
    </div>
  )
}
