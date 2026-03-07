'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useKanjiQuizStore } from '@/store/kanji-quiz-store'
import { KanjiQuizSetup } from '@/components/kanji/kanji-quiz-setup'
import { KanjiQuizSession } from '@/components/kanji/kanji-quiz-session'
import { KanjiQuizResults } from '@/components/kanji/kanji-quiz-results'

export default function KanjiPracticePage() {
  const phase = useKanjiQuizStore((s) => s.phase)
  const isLoadingKanji = useKanjiQuizStore((s) => s.isLoadingKanji)
  const loadKanji = useKanjiQuizStore((s) => s.loadKanji)
  const startSession = useKanjiQuizStore((s) => s.startSession)

  useEffect(() => {
    loadKanji()
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
        <h1 className="text-2xl font-bold text-foreground">Kanji Practice</h1>
        <p className="mt-1 text-muted-foreground">
          Test your kanji knowledge with quizzes.
        </p>
      </div>

      {phase === 'setup' && (
        <KanjiQuizSetup onStart={startSession} isLoadingKanji={isLoadingKanji} />
      )}
      {phase === 'active' && <KanjiQuizSession />}
      {phase === 'results' && <KanjiQuizResults />}
    </div>
  )
}
