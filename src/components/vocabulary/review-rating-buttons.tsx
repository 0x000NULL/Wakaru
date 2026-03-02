'use client'

import { cn } from '@/lib/utils/cn'
import type { Rating } from '@/types/progress'

const ratings: { rating: Rating; label: string; key: string; color: string }[] = [
  { rating: 'again', label: 'Again', key: '1', color: 'border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400' },
  { rating: 'hard', label: 'Hard', key: '2', color: 'border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-orange-600 dark:text-orange-400' },
  { rating: 'good', label: 'Good', key: '3', color: 'border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 dark:text-green-400' },
  { rating: 'easy', label: 'Easy', key: '4', color: 'border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400' },
]

interface ReviewRatingButtonsProps {
  onRate: (rating: Rating) => void
  isSubmitting: boolean
}

export function ReviewRatingButtons({ onRate, isSubmitting }: ReviewRatingButtonsProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {ratings.map(({ rating, label, key, color }) => (
        <button
          key={rating}
          onClick={() => onRate(rating)}
          disabled={isSubmitting}
          className={cn(
            'rounded-lg border px-3 py-3 text-center font-medium transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
            'disabled:pointer-events-none disabled:opacity-50',
            color,
          )}
        >
          <span className="block text-sm">{label}</span>
          <span className="block text-xs opacity-60">{key}</span>
        </button>
      ))}
    </div>
  )
}
