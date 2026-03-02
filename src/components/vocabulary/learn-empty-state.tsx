'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function LearnEmptyState() {
  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <svg
        className="h-16 w-16 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <div>
        <h2 className="text-2xl font-bold text-foreground">No new words available</h2>
        <p className="mt-1 text-muted-foreground">
          You&apos;ve gone through all available vocabulary. Check back later for more words.
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
