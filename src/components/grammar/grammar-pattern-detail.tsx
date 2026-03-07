'use client'

import Link from 'next/link'
import type { GrammarPatternDetailItem } from '@/types/grammar'
import { GrammarExampleList } from '@/components/grammar/grammar-example-list'
import { GRAMMAR_COMPARISONS } from '@/lib/constants/grammar-comparisons'

interface GrammarPatternDetailProps {
  pattern: GrammarPatternDetailItem
}

export function GrammarPatternDetail({ pattern }: GrammarPatternDetailProps) {
  const relatedComparisons = GRAMMAR_COMPARISONS.filter((c) =>
    c.patterns.includes(pattern.pattern),
  )

  return (
    <div className="space-y-6">
      {/* Formation */}
      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Formation
        </p>
        <p className="mt-1 text-lg font-medium text-foreground">{pattern.formation}</p>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">Explanation</h2>
        <p className="leading-relaxed text-foreground/90">{pattern.explanation}</p>
      </div>

      {/* Examples */}
      <GrammarExampleList examples={pattern.examples} />

      {/* Notes */}
      {pattern.notes && (
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
          <p className="text-xs font-medium uppercase tracking-wide text-blue-700 dark:text-blue-400">
            Notes
          </p>
          <p className="mt-1 leading-relaxed text-blue-900 dark:text-blue-200">{pattern.notes}</p>
        </div>
      )}

      {/* Common Mistakes */}
      {pattern.common_mistakes && (
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
          <p className="text-xs font-medium uppercase tracking-wide text-amber-700 dark:text-amber-400">
            Common Mistakes
          </p>
          <p className="mt-1 leading-relaxed text-amber-900 dark:text-amber-200">
            {pattern.common_mistakes}
          </p>
        </div>
      )}

      {/* Related Comparisons */}
      {relatedComparisons.length > 0 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Related Comparisons</h2>
          <div className="space-y-2">
            {relatedComparisons.map((comparison) => (
              <Link
                key={comparison.id}
                href={`/grammar/compare/${comparison.id}`}
                className="block rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
              >
                <p className="font-medium text-foreground">{comparison.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{comparison.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* SRS Status */}
      {pattern.srs && (
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Your Progress
          </p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            <span className="text-foreground">
              Status: <span className="font-medium capitalize">{pattern.srs.status}</span>
            </span>
            {pattern.srs.totalReviews > 0 && (
              <span className="text-foreground">
                Accuracy: <span className="font-medium">{pattern.srs.accuracy}%</span>
              </span>
            )}
            <span className="text-foreground">
              Reviews: <span className="font-medium">{pattern.srs.totalReviews}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
