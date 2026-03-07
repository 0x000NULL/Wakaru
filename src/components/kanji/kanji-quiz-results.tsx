'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'
import { useKanjiQuizStore } from '@/store/kanji-quiz-store'

export function KanjiQuizResults() {
  const stats = useKanjiQuizStore((s) => s.stats())
  const restartSession = useKanjiQuizStore((s) => s.restartSession)
  const practiceMissed = useKanjiQuizStore((s) => s.practiceMissed)
  const resetToSetup = useKanjiQuizStore((s) => s.resetToSetup)

  const accuracyColor = useMemo(() => {
    if (stats.accuracy >= 80) return 'text-green-600 dark:text-green-400'
    if (stats.accuracy >= 60) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-600 dark:text-red-400'
  }, [stats.accuracy])

  const totalSeconds = Math.round(stats.totalTimeMs / 1000)
  const avgSeconds = (stats.averageTimeMs / 1000).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Score */}
      <div className="text-center">
        <p className={cn('text-5xl font-bold', accuracyColor)}>
          {stats.correctCount}/{stats.totalQuestions}
        </p>
        <p className={cn('mt-1 text-2xl font-semibold', accuracyColor)}>{stats.accuracy}%</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {totalSeconds}s total &middot; {avgSeconds}s per question
        </p>
      </div>

      {/* Missed kanji */}
      {stats.missedKanji.length > 0 && (
        <section>
          <h3 className="mb-3 text-lg font-semibold text-foreground">Kanji to Review</h3>
          <div className="flex flex-wrap gap-2">
            {stats.missedKanji.map((item) => (
              <span
                key={item.kanjiId}
                className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-2 text-lg font-medium text-red-700 dark:border-red-800 dark:bg-red-900/10 dark:text-red-400"
              >
                {item.character}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={restartSession}>Practice Again</Button>
        {stats.missedKanji.length > 0 && (
          <Button variant="outline" onClick={practiceMissed}>
            Practice Missed ({stats.missedKanji.length})
          </Button>
        )}
        <Button variant="ghost" onClick={resetToSetup}>
          Change Settings
        </Button>
        <Link href="/kanji">
          <Button variant="ghost" className="w-full sm:w-auto">
            Back to Kanji
          </Button>
        </Link>
      </div>
    </div>
  )
}
