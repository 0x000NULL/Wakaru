'use client'

import { useEffect, useCallback } from 'react'
import { useKanjiReviewStore } from '@/store/kanji-review-store'
import { KanjiReviewProgressBar } from '@/components/kanji/kanji-review-progress-bar'
import { KanjiReviewCard } from '@/components/kanji/kanji-review-card'
import type { Rating } from '@/types/progress'

const ratingKeys: Record<string, Rating> = {
  '1': 'again',
  '2': 'hard',
  '3': 'good',
  '4': 'easy',
}

export function KanjiReviewSession() {
  const card = useKanjiReviewStore((s) => s.queue[s.currentIndex] ?? null)
  const currentIndex = useKanjiReviewStore((s) => s.currentIndex)
  const total = useKanjiReviewStore((s) => s.queue.length)
  const isRevealed = useKanjiReviewStore((s) => s.isRevealed)
  const isSubmitting = useKanjiReviewStore((s) => s.isSubmitting)
  const answers = useKanjiReviewStore((s) => s.answers)
  const reveal = useKanjiReviewStore((s) => s.reveal)
  const submitRating = useKanjiReviewStore((s) => s.submitRating)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isSubmitting) return

      if (e.key === ' ' && !isRevealed) {
        e.preventDefault()
        reveal()
        return
      }

      if (isRevealed) {
        const rating = ratingKeys[e.key]
        if (rating) {
          submitRating(rating)
        }
      }
    },
    [isRevealed, isSubmitting, reveal, submitRating],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!card) return null

  return (
    <div className="space-y-6">
      <KanjiReviewProgressBar current={currentIndex + 1} total={total} answers={answers} />
      <KanjiReviewCard
        item={card}
        isRevealed={isRevealed}
        onReveal={reveal}
        onRate={submitRating}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
