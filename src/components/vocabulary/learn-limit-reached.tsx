'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLearnStore } from '@/store/learn-store'

export function LearnLimitReached() {
  const learnedToday = useLearnStore((s) => s.learnedToday)

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
          {learnedToday} {learnedToday === 1 ? 'word' : 'words'} learned today. Come back tomorrow
          for more new words.
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/vocabulary/review">
          <Button>Review Words</Button>
        </Link>
        <Link href="/vocabulary">
          <Button variant="ghost">Back to Vocabulary</Button>
        </Link>
      </div>
    </div>
  )
}
