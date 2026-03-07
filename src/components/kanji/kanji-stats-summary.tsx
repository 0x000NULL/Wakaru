'use client'

import { Card, CardContent } from '@/components/ui/card'

interface KanjiStatsSummaryProps {
  dueCount: number
  learnedToday: number
  totalLearned: number
  dailyLimit: number
  masteredCount: number
}

export function KanjiStatsSummary({
  dueCount,
  learnedToday,
  totalLearned,
  dailyLimit,
  masteredCount,
}: KanjiStatsSummaryProps) {
  const items = [
    { label: 'Due for Review', value: dueCount },
    { label: 'Learned Today', value: `${learnedToday} / ${dailyLimit}` },
    { label: 'Total Learned', value: totalLearned },
    { label: 'Mastered', value: masteredCount },
  ]

  return (
    <Card>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
