'use client'

import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AudioPlayButton } from '@/components/hiragana/audio-play-button'
import { useQuizStore } from '@/store/quiz-store'
import Link from 'next/link'

export function QuizResults() {
  const stats = useQuizStore((s) => s.stats())
  const restartSession = useQuizStore((s) => s.restartSession)
  const practiceMissed = useQuizStore((s) => s.practiceMissed)
  const resetToSetup = useQuizStore((s) => s.resetToSetup)

  const accuracyColor =
    stats.accuracy >= 80
      ? 'text-green-600 dark:text-green-400'
      : stats.accuracy >= 60
        ? 'text-yellow-600 dark:text-yellow-400'
        : 'text-red-600 dark:text-red-400'

  const totalSeconds = Math.round(stats.totalTimeMs / 1000)
  const avgSeconds = (stats.averageTimeMs / 1000).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Score */}
      <div className="text-center">
        <p className={cn('text-5xl font-bold', accuracyColor)}>
          {stats.correctCount}/{stats.totalQuestions}
        </p>
        <p className={cn('mt-1 text-2xl font-semibold', accuracyColor)}>
          {stats.accuracy}%
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {totalSeconds}s total &middot; {avgSeconds}s per question
        </p>
      </div>

      {/* Missed characters */}
      {stats.missedCharacters.length > 0 && (
        <section>
          <h3 className="mb-3 text-lg font-semibold text-foreground">Characters to Review</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {stats.missedCharacters.map((char) => (
              <Card key={char.character} className="border-red-200 dark:border-red-800">
                <CardContent className="flex items-center gap-3 py-3">
                  <span className="text-2xl font-medium">{char.character}</span>
                  <span className="text-sm text-muted-foreground">{char.romaji}</span>
                  <AudioPlayButton text={char.character} size="sm" className="ml-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={restartSession}>Practice Again</Button>
        {stats.missedCharacters.length > 0 && (
          <Button variant="outline" onClick={practiceMissed}>
            Practice Missed ({stats.missedCharacters.length})
          </Button>
        )}
        <Button variant="ghost" onClick={resetToSetup}>
          Change Settings
        </Button>
        <Link href="/hiragana">
          <Button variant="ghost" className="w-full sm:w-auto">Back to Hiragana</Button>
        </Link>
      </div>
    </div>
  )
}
