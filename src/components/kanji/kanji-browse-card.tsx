'use client'

import { memo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { parseJsonArray } from '@/lib/utils/kanji'
import type { KanjiBrowseItem } from '@/types/kanji'

interface KanjiBrowseCardProps {
  item: KanjiBrowseItem
  onClick: (id: string) => void
}

export const KanjiBrowseCard = memo(function KanjiBrowseCard({
  item,
  onClick,
}: KanjiBrowseCardProps) {
  const meanings =
    typeof item.meanings === 'string'
      ? parseJsonArray(item.meanings as unknown as string)
      : item.meanings

  return (
    <Card
      className="cursor-pointer transition-shadow hover:shadow-md"
      onClick={() => onClick(item.id)}
    >
      <CardContent className="space-y-2 pt-4">
        <div className="flex items-start justify-between gap-2">
          <span className="text-4xl font-medium text-foreground">{item.character}</span>
          {item.jlptLevel && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {item.jlptLevel}
            </span>
          )}
        </div>
        <p className="line-clamp-1 text-sm font-medium text-foreground">
          {meanings[0] ?? ''}
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {item.strokeCount} strokes
          </span>
          {item.vocabularyCount > 0 && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {item.vocabularyCount} vocab
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
})
