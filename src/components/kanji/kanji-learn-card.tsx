'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StrokeOrderViewer } from '@/components/kanji/stroke-order-viewer'
import { ReadingsDisplay } from '@/components/kanji/readings-display'
import { KanjiVocabList } from '@/components/kanji/kanji-vocab-list'
import { parseJsonArray } from '@/lib/utils/kanji'
import type { NewKanjiItem } from '@/types/kanji'

interface KanjiLearnCardProps {
  item: NewKanjiItem
  onMarkAsLearning: () => void
  onSkip: () => void
  isSubmitting: boolean
}

export function KanjiLearnCard({
  item,
  onMarkAsLearning,
  onSkip,
  isSubmitting,
}: KanjiLearnCardProps) {
  const meanings =
    typeof item.meanings === 'string' ? parseJsonArray(item.meanings) : [item.meanings]
  const onYomi = parseJsonArray(item.on_yomi)
  const kunYomi = parseJsonArray(item.kun_yomi)

  return (
    <Card className="mx-auto max-w-lg">
      <CardContent className="space-y-6">
        {/* Kanji character */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <span className="text-7xl font-medium">{item.character}</span>
        </div>

        {/* Stroke order */}
        <div className="flex justify-center">
          <StrokeOrderViewer character={item.character} />
        </div>

        {/* Readings */}
        <div className="space-y-2">
          <ReadingsDisplay onYomi={onYomi} kunYomi={kunYomi} />
        </div>

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
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
              {item.stroke_count} strokes
            </span>
          </div>
        </div>

        {/* Mnemonic */}
        {item.mnemonic && (
          <div className="space-y-1 border-t border-border pt-4">
            <h3 className="text-sm font-medium text-foreground">Mnemonic</h3>
            <p className="text-sm text-muted-foreground">{item.mnemonic}</p>
          </div>
        )}

        {/* Example vocabulary */}
        {item.vocabulary.length > 0 && (
          <div className="border-t border-border pt-4">
            <KanjiVocabList vocabulary={item.vocabulary} />
          </div>
        )}

        {/* Action buttons */}
        <div className="space-y-2 border-t border-border pt-4">
          <Button
            onClick={onMarkAsLearning}
            size="lg"
            className="w-full"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            I Know This
          </Button>
          <Button
            onClick={onSkip}
            variant="ghost"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            Skip
          </Button>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>Space / Enter to learn</span>
            <span>&rarr; to skip</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
