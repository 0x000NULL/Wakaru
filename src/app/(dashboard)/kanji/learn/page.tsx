'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useKanjiLearnStore } from '@/store/kanji-learn-store'
import { KanjiLearnSession } from '@/components/kanji/kanji-learn-session'
import { KanjiLearnCompletion } from '@/components/kanji/kanji-learn-completion'
import { KanjiLearnLimitReached } from '@/components/kanji/kanji-learn-limit-reached'
import { KanjiLearnEmptyState } from '@/components/kanji/kanji-learn-empty-state'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Button } from '@/components/ui/button'

export default function KanjiLearnPage() {
  const phase = useKanjiLearnStore((s) => s.phase)
  const error = useKanjiLearnStore((s) => s.error)
  const startSession = useKanjiLearnStore((s) => s.startSession)

  useEffect(() => {
    startSession()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/kanji"
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
          Kanji
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Learn New Kanji</h1>
        <p className="mt-1 text-muted-foreground">
          Add new kanji to your study deck.
        </p>
      </div>

      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-3 py-12">
          <LoadingSpinner size="lg" />
          <p className="text-sm text-muted-foreground">Loading new kanji...</p>
        </div>
      )}

      {phase === 'learning' && <KanjiLearnSession />}
      {phase === 'completed' && <KanjiLearnCompletion />}
      {phase === 'limit_reached' && <KanjiLearnLimitReached />}
      {phase === 'empty' && <KanjiLearnEmptyState />}

      {phase === 'error' && (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          <Button onClick={startSession}>Try Again</Button>
        </div>
      )}
    </div>
  )
}
