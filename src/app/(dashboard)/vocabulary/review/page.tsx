'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useReviewStore } from '@/store/review-store'
import { ReviewSession } from '@/components/vocabulary/review-session'
import { ReviewCompletion } from '@/components/vocabulary/review-completion'
import { ReviewEmptyState } from '@/components/vocabulary/review-empty-state'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Button } from '@/components/ui/button'

export default function VocabularyReviewPage() {
  const phase = useReviewStore((s) => s.phase)
  const error = useReviewStore((s) => s.error)
  const startSession = useReviewStore((s) => s.startSession)

  useEffect(() => {
    startSession()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/vocabulary"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Vocabulary
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Review</h1>
        <p className="mt-1 text-muted-foreground">
          Review your vocabulary with spaced repetition.
        </p>
      </div>

      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-3 py-12">
          <LoadingSpinner size="lg" />
          <p className="text-sm text-muted-foreground">Loading reviews...</p>
        </div>
      )}

      {phase === 'reviewing' && <ReviewSession />}
      {phase === 'completed' && <ReviewCompletion />}
      {phase === 'empty' && <ReviewEmptyState />}

      {phase === 'error' && (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          <Button onClick={startSession}>Try Again</Button>
        </div>
      )}
    </div>
  )
}
