'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { GRAMMAR_COMPARISONS } from '@/lib/constants/grammar-comparisons'

export default function GrammarComparisonDetailPage() {
  const params = useParams()
  const comparisonId = params.comparisonId as string
  const comparison = GRAMMAR_COMPARISONS.find((c) => c.id === comparisonId)

  if (!comparison) {
    return (
      <div className="space-y-4 py-12 text-center">
        <p className="text-muted-foreground">Comparison not found</p>
        <Link href="/grammar/compare" className="text-sm font-medium text-primary hover:underline">
          Back to Comparisons
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/grammar/compare"
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
          Back to Comparisons
        </Link>
        <h1 className="text-2xl font-bold text-foreground">{comparison.title}</h1>
        <p className="mt-1 text-muted-foreground">{comparison.summary}</p>
      </div>

      {/* Differences table */}
      <Card>
        <CardContent className="py-4">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Key Differences</h2>
          <div className="space-y-4">
            {comparison.differences.map((diff, i) => (
              <div key={i}>
                <h3 className="mb-2 text-sm font-medium text-primary">{diff.dimension}</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {Object.entries(diff.descriptions).map(([pattern, desc]) => (
                    <div key={pattern} className="rounded-lg bg-muted/50 p-3">
                      <span className="text-xs font-semibold text-foreground">{pattern}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage examples */}
      <Card>
        <CardContent className="py-4">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Usage Examples</h2>
          <div className="space-y-6">
            {comparison.usageExamples.map((example, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-sm font-medium text-primary">{example.context}</h3>
                <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950/30">
                  <p className="text-sm font-medium text-foreground">
                    {example.correct.japanese}
                  </p>
                  {example.correct.furigana && (
                    <p className="text-xs text-muted-foreground">{example.correct.furigana}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">{example.correct.english}</p>
                </div>
                {example.incorrect && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
                    <p className="text-sm font-medium text-foreground">
                      {example.incorrect.japanese}
                    </p>
                    {example.incorrect.furigana && (
                      <p className="text-xs text-muted-foreground">
                        {example.incorrect.furigana}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">
                      {example.incorrect.english}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
