'use client'

import { useEffect, useCallback } from 'react'
import { useKanjiLearnStore } from '@/store/kanji-learn-store'
import { KanjiLearnProgressBar } from '@/components/kanji/kanji-learn-progress-bar'
import { KanjiLearnCard } from '@/components/kanji/kanji-learn-card'

export function KanjiLearnSession() {
  const kanji = useKanjiLearnStore((s) => s.queue[s.currentIndex] ?? null)
  const currentIndex = useKanjiLearnStore((s) => s.currentIndex)
  const total = useKanjiLearnStore((s) => s.queue.length)
  const learnedToday = useKanjiLearnStore((s) => s.learnedToday)
  const dailyLimit = useKanjiLearnStore((s) => s.dailyLimit)
  const isSubmitting = useKanjiLearnStore((s) => s.isSubmitting)
  const markAsLearning = useKanjiLearnStore((s) => s.markAsLearning)
  const skip = useKanjiLearnStore((s) => s.skip)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isSubmitting) return

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        markAsLearning()
        return
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        skip()
      }
    },
    [isSubmitting, markAsLearning, skip],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!kanji) return null

  return (
    <div className="space-y-6">
      <KanjiLearnProgressBar
        current={currentIndex + 1}
        total={total}
        learnedToday={learnedToday}
        dailyLimit={dailyLimit}
      />
      <KanjiLearnCard
        item={kanji}
        onMarkAsLearning={markAsLearning}
        onSkip={skip}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
