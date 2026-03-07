'use client'

import { Modal, ModalBody, ModalFooter } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { StrokeOrderViewer } from '@/components/kanji/stroke-order-viewer'
import { ReadingsDisplay } from '@/components/kanji/readings-display'
import { KanjiVocabList } from '@/components/kanji/kanji-vocab-list'
import type { KanjiDetailItem } from '@/types/kanji'

const STATUS_LABELS: Record<string, string> = {
  new: 'New',
  learning: 'Learning',
  reviewing: 'Reviewing',
  mastered: 'Mastered',
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  learning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  reviewing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  mastered: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

interface KanjiDetailModalProps {
  open: boolean
  item: KanjiDetailItem | null
  isLoading: boolean
  isAddingToSrs: boolean
  onClose: () => void
  onAddToSrs: (itemId: string) => void
}

export function KanjiDetailModal({
  open,
  item,
  isLoading,
  isAddingToSrs,
  onClose,
  onAddToSrs,
}: KanjiDetailModalProps) {
  return (
    <Modal open={open} onClose={onClose} size="lg" title={isLoading ? 'Loading...' : undefined}>
      {isLoading && (
        <ModalBody>
          <div className="flex items-center justify-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        </ModalBody>
      )}

      {!isLoading && item && (
        <>
          <ModalBody className="space-y-5">
            {/* Character header */}
            <div className="flex items-start gap-4">
              <StrokeOrderViewer character={item.character} />
              <div className="flex-1 space-y-2">
                <span className="text-5xl font-medium text-foreground">{item.character}</span>
                <p className="text-lg text-foreground">{item.meanings.join(', ')}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {item.jlptLevel && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.jlptLevel}
                    </span>
                  )}
                  {item.grade && (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      Grade {item.grade}
                    </span>
                  )}
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    {item.strokeCount} strokes
                  </span>
                  {item.frequencyRank && (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      #{item.frequencyRank}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Readings */}
            <div className="space-y-2 border-t border-border pt-4">
              <h3 className="text-sm font-medium text-foreground">Readings</h3>
              <ReadingsDisplay
                onYomi={item.onYomi}
                kunYomi={item.kunYomi}
                nanori={item.nanori}
              />
            </div>

            {/* Mnemonic */}
            {item.mnemonic && (
              <div className="space-y-2 border-t border-border pt-4">
                <h3 className="text-sm font-medium text-foreground">Mnemonic</h3>
                <p className="text-sm text-muted-foreground">{item.mnemonic}</p>
              </div>
            )}

            {/* Linked vocabulary */}
            {item.vocabulary.length > 0 && (
              <div className="border-t border-border pt-4">
                <KanjiVocabList vocabulary={item.vocabulary} />
              </div>
            )}

            {/* SRS status */}
            {item.srs && (
              <div className="space-y-2 border-t border-border pt-4">
                <h3 className="text-sm font-medium text-foreground">SRS Status</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[item.srs.status] ?? 'bg-muted text-muted-foreground'}`}
                  >
                    {STATUS_LABELS[item.srs.status] ?? item.srs.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.srs.totalReviews} reviews &middot; {item.srs.accuracy}% accuracy
                  </span>
                </div>
                {item.srs.nextReviewAt && (
                  <p className="text-xs text-muted-foreground">
                    Next review: {new Date(item.srs.nextReviewAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            )}
          </ModalBody>

          <ModalFooter>
            {!item.srs && (
              <Button
                onClick={() => onAddToSrs(item.id)}
                loading={isAddingToSrs}
                disabled={isAddingToSrs}
              >
                Add to SRS
              </Button>
            )}
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </Modal>
  )
}
