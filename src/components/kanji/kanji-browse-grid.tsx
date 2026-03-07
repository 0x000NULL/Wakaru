'use client'

import { KanjiBrowseCard } from '@/components/kanji/kanji-browse-card'
import type { KanjiBrowseItem } from '@/types/kanji'

interface KanjiBrowseGridProps {
  items: KanjiBrowseItem[]
  onCardClick: (id: string) => void
}

export function KanjiBrowseGrid({ items, onCardClick }: KanjiBrowseGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <svg
          className="h-12 w-12 text-muted-foreground/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <p className="text-sm text-muted-foreground">No kanji found</p>
        <p className="text-xs text-muted-foreground">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {items.map((item) => (
        <KanjiBrowseCard key={item.id} item={item} onClick={onCardClick} />
      ))}
    </div>
  )
}
