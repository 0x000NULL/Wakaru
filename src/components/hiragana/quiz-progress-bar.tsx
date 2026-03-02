'use client'

import { cn } from '@/lib/utils/cn'
import type { QuizAnswer } from '@/types/quiz'

interface QuizProgressBarProps {
  currentIndex: number
  totalCount: number
  answers: QuizAnswer[]
  className?: string
}

export function QuizProgressBar({
  currentIndex,
  totalCount,
  answers,
  className,
}: QuizProgressBarProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          {Math.min(currentIndex + 1, totalCount)} / {totalCount}
        </span>
        <span className="text-muted-foreground">
          {answers.filter((a) => a.isCorrect).length} correct
        </span>
      </div>
      <div className="flex h-2 gap-0.5 overflow-hidden rounded-full bg-muted">
        {Array.from({ length: totalCount }).map((_, i) => {
          const answer = answers[i]
          return (
            <div
              key={i}
              className={cn(
                'h-full flex-1 transition-colors',
                i === currentIndex && !answer && 'bg-primary/40',
                answer?.isCorrect && 'bg-green-500',
                answer && !answer.isCorrect && 'bg-red-500',
                !answer && i !== currentIndex && 'bg-transparent',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
