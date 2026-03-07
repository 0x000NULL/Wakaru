'use client'

import { cn } from '@/lib/utils/cn'

interface KanjiReviewAnswer {
  itemId: string
  character: string
  rating: string
}

const ratingColors: Record<string, string> = {
  again: 'bg-red-500',
  hard: 'bg-orange-500',
  good: 'bg-green-500',
  easy: 'bg-blue-500',
}

interface KanjiReviewProgressBarProps {
  current: number
  total: number
  answers: KanjiReviewAnswer[]
  className?: string
}

export function KanjiReviewProgressBar({
  current,
  total,
  answers,
  className,
}: KanjiReviewProgressBarProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          {Math.min(current, total)} / {total}
        </span>
        <span className="text-muted-foreground">
          {answers.filter((a) => a.rating === 'good' || a.rating === 'easy').length} correct
        </span>
      </div>
      <div className="flex h-2 gap-0.5 overflow-hidden rounded-full bg-muted">
        {Array.from({ length: total }).map((_, i) => {
          const answer = answers[i]
          const isCurrent = i === current - 1 && !answer
          return (
            <div
              key={i}
              className={cn(
                'h-full flex-1 transition-colors',
                isCurrent && 'bg-primary/40',
                answer && ratingColors[answer.rating],
                !answer && !isCurrent && 'bg-transparent',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
