'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { GRAMMAR_COMPARISONS } from '@/lib/constants/grammar-comparisons'

export default function GrammarComparePage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/grammar"
          className="mb-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Grammar
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Grammar Comparisons</h1>
        <p className="mt-1 text-muted-foreground">
          Side-by-side comparisons of commonly confused grammar patterns.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {GRAMMAR_COMPARISONS.map((comparison) => (
          <Link key={comparison.id} href={`/grammar/compare/${comparison.id}`}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardContent className="py-4">
                <h2 className="text-lg font-semibold text-foreground">{comparison.title}</h2>
                <div className="mt-1 flex flex-wrap gap-1">
                  {comparison.patterns.map((pattern) => (
                    <span
                      key={pattern}
                      className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {pattern}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {comparison.summary}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
