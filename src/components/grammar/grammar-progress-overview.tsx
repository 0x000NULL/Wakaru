'use client'

import { useGrammarStore } from '@/store/grammar-store'

export function GrammarProgressOverview() {
  const progress = useGrammarStore((s) => s.progress)
  const patterns = useGrammarStore((s) => s.patterns)

  if (!progress || progress.total === 0) return null

  const percent = Math.round((progress.learned / progress.total) * 100)

  // Compute per-level counts from patterns
  const levels = ['N5', 'N4', 'N3', 'N2'] as const
  const levelCounts = levels
    .map((level) => ({
      level,
      count: patterns.filter((p) => p.jlpt_level === level).length,
    }))
    .filter((l) => l.count > 0)

  return (
    <div className="rounded-lg border border-border bg-background p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">
          {progress.learned} of {progress.total} patterns studied
        </p>
        {progress.mastered > 0 && (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
            {progress.mastered} mastered
          </span>
        )}
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      {levelCounts.length > 1 && (
        <div className="mt-3 flex gap-3">
          {levelCounts.map((l) => (
            <span key={l.level} className="text-xs text-muted-foreground">
              {l.level}: {l.count} patterns
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
