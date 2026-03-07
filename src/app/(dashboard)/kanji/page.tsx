'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { KanjiStatsSummary } from '@/components/kanji/kanji-stats-summary'

interface KanjiStats {
  dueCount: number
  learnedToday: number
  totalLearned: number
  dailyNewWordLimit: number
  masteredCount: number
  reviewedToday: number
  retentionRate: number
}

export default function KanjiPage() {
  const [stats, setStats] = useState<KanjiStats | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/v1/srs/stats?category=kanji')
        if (!res.ok) {
          setError('Failed to load kanji stats')
          return
        }
        const json = await res.json()
        setStats(json.data as KanjiStats)
      } catch {
        setError('Network error — please try again')
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Kanji</h1>
        <p className="mt-1 text-muted-foreground">
          Learn kanji characters with stroke order, readings, and spaced repetition.
        </p>
      </div>

      {!stats && !error && (
        <div className="flex flex-col items-center gap-3 py-12">
          <LoadingSpinner size="lg" />
          <p className="text-sm text-muted-foreground">Loading stats...</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {stats && (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Due Reviews */}
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Due Reviews</h2>
                    <p className="text-sm text-muted-foreground">
                      {stats.dueCount} {stats.dueCount === 1 ? 'kanji' : 'kanji'} to review
                    </p>
                  </div>
                </div>
                <Link href="/kanji/review">
                  <Button className="w-full" disabled={stats.dueCount === 0}>
                    {stats.dueCount > 0 ? 'Start Review' : 'No Reviews Due'}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Learn New Kanji */}
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <svg
                      className="h-5 w-5 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Learn New Kanji</h2>
                    <p className="text-sm text-muted-foreground">
                      {stats.learnedToday} / {stats.dailyNewWordLimit} today
                    </p>
                  </div>
                </div>
                <Link href="/kanji/learn">
                  <Button
                    className="w-full"
                    variant={
                      stats.learnedToday >= stats.dailyNewWordLimit ? 'outline' : 'primary'
                    }
                  >
                    {stats.learnedToday >= stats.dailyNewWordLimit
                      ? 'Daily Limit Reached'
                      : 'Learn New Kanji'}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Browse Kanji */}
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                    <svg
                      className="h-5 w-5 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h7M17 14l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Browse Kanji</h2>
                    <p className="text-sm text-muted-foreground">Search and explore all kanji</p>
                  </div>
                </div>
                <Link href="/kanji/browse">
                  <Button className="w-full" variant="outline">
                    Browse Kanji
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Practice Quiz */}
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                    <svg
                      className="h-5 w-5 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Practice</h2>
                    <p className="text-sm text-muted-foreground">Quiz your kanji knowledge</p>
                  </div>
                </div>
                <Link href="/kanji/practice">
                  <Button className="w-full" variant="outline">
                    Start Practice
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <KanjiStatsSummary
            dueCount={stats.dueCount}
            learnedToday={stats.learnedToday}
            totalLearned={stats.totalLearned}
            dailyLimit={stats.dailyNewWordLimit}
            masteredCount={stats.masteredCount}
          />
        </div>
      )}
    </div>
  )
}
