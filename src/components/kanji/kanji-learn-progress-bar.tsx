'use client'

import { cn } from '@/lib/utils/cn'

interface KanjiLearnProgressBarProps {
  current: number
  total: number
  learnedToday: number
  dailyLimit: number
  className?: string
}

export function KanjiLearnProgressBar({
  current,
  total,
  learnedToday,
  dailyLimit,
  className,
}: KanjiLearnProgressBarProps) {
  const sessionPercent = total > 0 ? (Math.min(current - 1, total) / total) * 100 : 0
  const dailyPercent = dailyLimit > 0 ? Math.min((learnedToday / dailyLimit) * 100, 100) : 0

  return (
    <div className={cn('space-y-3', className)}>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {Math.min(current, total)} / {total}
          </span>
          <span className="text-muted-foreground">session progress</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${sessionPercent}%` }}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {learnedToday} / {dailyLimit}
          </span>
          <span className="text-muted-foreground">daily progress</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${dailyPercent}%` }}
          />
        </div>
      </div>
    </div>
  )
}
