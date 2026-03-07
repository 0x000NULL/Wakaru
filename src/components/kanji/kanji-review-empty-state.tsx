'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function KanjiReviewEmptyState() {
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
        <h2 className="text-2xl font-bold text-foreground">All caught up!</h2>
        <p className="mt-1 text-muted-foreground">No kanji reviews are due right now.</p>
      </div>
      <div className="flex gap-3">
        <Link href="/kanji/learn">
          <Button>Learn New Kanji</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="ghost">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
