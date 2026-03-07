'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useKanjiLearnStore } from '@/store/kanji-learn-store'

export function KanjiLearnLimitReached() {
  const learnedToday = useKanjiLearnStore((s) => s.learnedToday)

  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <svg
        className="h-16 w-16 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <h2 className="text-2xl font-bold text-foreground">Daily limit reached</h2>
        <p className="mt-1 text-muted-foreground">
          {learnedToday} kanji learned today. Come back tomorrow for more new kanji.
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/kanji/review">
          <Button>Review Kanji</Button>
        </Link>
        <Link href="/kanji">
          <Button variant="ghost">Back to Kanji</Button>
        </Link>
      </div>
    </div>
  )
}
