'use client'

interface ReadingsDisplayProps {
  onYomi: string[]
  kunYomi: string[]
  nanori?: string[]
}

export function ReadingsDisplay({ onYomi, kunYomi, nanori }: ReadingsDisplayProps) {
  const hasReadings = onYomi.length > 0 || kunYomi.length > 0 || (nanori && nanori.length > 0)

  if (!hasReadings) {
    return (
      <p className="text-sm text-muted-foreground">No readings available</p>
    )
  }

  return (
    <div className="space-y-2">
      {onYomi.length > 0 && (
        <div className="flex items-baseline gap-2">
          <span className="shrink-0 text-xs font-medium text-muted-foreground">ON</span>
          <div className="flex flex-wrap gap-1.5">
            {onYomi.map((r) => (
              <span
                key={r}
                className="rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-400"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
      {kunYomi.length > 0 && (
        <div className="flex items-baseline gap-2">
          <span className="shrink-0 text-xs font-medium text-muted-foreground">KUN</span>
          <div className="flex flex-wrap gap-1.5">
            {kunYomi.map((r) => (
              <span
                key={r}
                className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
      {nanori && nanori.length > 0 && (
        <div className="flex items-baseline gap-2">
          <span className="shrink-0 text-xs font-medium text-muted-foreground">Nanori</span>
          <div className="flex flex-wrap gap-1.5">
            {nanori.map((r) => (
              <span
                key={r}
                className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
