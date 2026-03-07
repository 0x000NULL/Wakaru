'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

type LevelStats = { total: number; learned: number; mastered: number }

const LEVELS = ['N5', 'N4', 'N3', 'N2'] as const

export default function GrammarChecklistPage() {
  const [activeTab, setActiveTab] = useState<string>('N5')
  const [levelData, setLevelData] = useState<Record<string, LevelStats> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/v1/grammar/progress/by-level')
        if (res.ok) {
          const json = await res.json()
          setLevelData(json.data as Record<string, LevelStats>)
        }
      } catch {
        // silently fail
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/grammar"
          className="mb-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Grammar
        </Link>
        <h1 className="text-2xl font-bold text-foreground">JLPT Grammar Checklist</h1>
        <p className="mt-1 text-muted-foreground">
          Track your grammar progress across JLPT levels.
        </p>
      </div>

      {/* Level tabs */}
      <div className="flex gap-2">
        {LEVELS.map((level) => (
          <button
            key={level}
            onClick={() => setActiveTab(level)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === level
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Active level stats */}
      {levelData && (
        <div className="space-y-4">
          {LEVELS.filter((l) => l === activeTab).map((level) => {
            const stats = levelData[level]
            if (!stats) {
              return (
                <Card key={level}>
                  <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground">
                      No {level} grammar patterns available yet.
                    </p>
                  </CardContent>
                </Card>
              )
            }

            const learnedPercent =
              stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0
            const masteredPercent =
              stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0

            return (
              <div key={level} className="space-y-4">
                <Card>
                  <CardContent className="py-4">
                    <h2 className="text-lg font-semibold text-foreground">{level} Progress</h2>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                        <p className="text-xs text-muted-foreground">Total Patterns</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {stats.learned}
                        </p>
                        <p className="text-xs text-muted-foreground">Learned</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{stats.mastered}</p>
                        <p className="text-xs text-muted-foreground">Mastered</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Learned</span>
                        <span className="font-medium text-foreground">{learnedPercent}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-green-500 transition-all duration-300"
                          style={{ width: `${learnedPercent}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Mastered</span>
                        <span className="font-medium text-foreground">{masteredPercent}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-300"
                          style={{ width: `${masteredPercent}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
