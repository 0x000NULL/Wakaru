'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import type { VocabularyStats } from '@/types/learn'

export default function VocabularyPage() {
  const [stats, setStats] = useState<VocabularyStats | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/v1/srs/stats')
        if (!res.ok) {
          setError('Failed to load vocabulary stats')
          return
        }
        const json = await res.json()
        setStats(json.data as VocabularyStats)
      } catch {
        setError('Network error — please try again')
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Vocabulary</h1>
        <p className="mt-1 text-muted-foreground">
          Learn new words and review your vocabulary with spaced repetition.
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
          {/* Action cards */}
          <div className="grid gap-4 sm:grid-cols-2">
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
                      {stats.dueCount} {stats.dueCount === 1 ? 'word' : 'words'} to review
                    </p>
                  </div>
                </div>
                <Link href="/vocabulary/review">
                  <Button className="w-full" disabled={stats.dueCount === 0}>
                    {stats.dueCount > 0 ? 'Start Review' : 'No Reviews Due'}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Learn New Words */}
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
                    <h2 className="text-lg font-semibold text-foreground">Learn New Words</h2>
                    <p className="text-sm text-muted-foreground">
                      {stats.learnedToday} / {stats.dailyNewWordLimit} today
                    </p>
                  </div>
                </div>
                <Link href="/vocabulary/learn">
                  <Button
                    className="w-full"
                    variant={stats.learnedToday >= stats.dailyNewWordLimit ? 'outline' : 'primary'}
                  >
                    {stats.learnedToday >= stats.dailyNewWordLimit
                      ? 'Daily Limit Reached'
                      : 'Learn New Words'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Summary stats */}
          <Card>
            <CardContent className="pt-2">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalLearned}</p>
                  <p className="text-xs text-muted-foreground">Total learned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.learnedToday}</p>
                  <p className="text-xs text-muted-foreground">Learned today</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.dueCount}</p>
                  <p className="text-xs text-muted-foreground">Due for review</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
