'use client'

import { memo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ReviewRatingButtons } from '@/components/vocabulary/review-rating-buttons'
import { StrokeOrderViewer } from '@/components/kanji/stroke-order-viewer'
import { ReadingsDisplay } from '@/components/kanji/readings-display'
import { KanjiVocabList } from '@/components/kanji/kanji-vocab-list'
import { parseJsonArray } from '@/lib/utils/kanji'
import type { Rating } from '@/types/progress'
import type { DueKanjiReviewItem } from '@/types/kanji'

interface KanjiReviewCardProps {
  item: DueKanjiReviewItem
  isRevealed: boolean
  onReveal: () => void
  onRate: (rating: Rating) => void
  isSubmitting: boolean
}

export const KanjiReviewCard = memo(function KanjiReviewCard({
  item,
  isRevealed,
  onReveal,
  onRate,
  isSubmitting,
}: KanjiReviewCardProps) {
  const meanings =
    typeof item.meanings === 'string' ? parseJsonArray(item.meanings) : [item.meanings]
  const onYomi = parseJsonArray(item.on_yomi)
  const kunYomi = parseJsonArray(item.kun_yomi)

  return (
    <Card className="mx-auto max-w-lg">
      <CardContent className="space-y-6">
        {/* Front: always visible */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <span className="text-7xl font-medium">{item.character}</span>
        </div>

        {/* Reveal prompt */}
        {!isRevealed && (
          <div className="flex flex-col items-center gap-2">
            <Button onClick={onReveal} size="lg" className="w-full">
              Show Answer
            </Button>
            <span className="text-xs text-muted-foreground">Press Space</span>
          </div>
        )}

        {/* Back: visible after reveal */}
        {isRevealed && (
          <div className="space-y-4">
            {/* Stroke order */}
            <div className="flex justify-center">
              <StrokeOrderViewer character={item.character} />
            </div>

            {/* Readings */}
            <ReadingsDisplay onYomi={onYomi} kunYomi={kunYomi} />

            {/* Meanings */}
            <div className="space-y-1 text-center">
              <p className="text-xl font-medium text-foreground">{meanings.join(', ')}</p>
              <div className="flex items-center justify-center gap-2">
                {item.jlpt_level && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {item.jlpt_level}
                  </span>
                )}
                {item.grade && (
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    Grade {item.grade}
                  </span>
                )}
              </div>
            </div>

            {/* Mnemonic */}
            {item.mnemonic && (
              <div className="space-y-1 border-t border-border pt-4">
                <h3 className="text-sm font-medium text-foreground">Mnemonic</h3>
                <p className="text-sm text-muted-foreground">{item.mnemonic}</p>
              </div>
            )}

            {/* Vocabulary */}
            {item.vocabulary.length > 0 && (
              <div className="border-t border-border pt-4">
                <KanjiVocabList vocabulary={item.vocabulary} />
              </div>
            )}

            {/* Rating buttons */}
            <div className="border-t border-border pt-4">
              <ReviewRatingButtons onRate={onRate} isSubmitting={isSubmitting} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
})
