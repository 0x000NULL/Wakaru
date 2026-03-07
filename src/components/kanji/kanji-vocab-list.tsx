'use client'

import type { KanjiVocabWord } from '@/types/kanji'

interface KanjiVocabListProps {
  vocabulary: KanjiVocabWord[]
}

export function KanjiVocabList({ vocabulary }: KanjiVocabListProps) {
  if (vocabulary.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No linked vocabulary</p>
    )
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-foreground">Vocabulary</h3>
      <div className="space-y-1.5">
        {vocabulary.map((v) => (
          <div
            key={v.id}
            className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-medium text-foreground">{v.word}</span>
              <span className="text-sm text-muted-foreground">{v.reading}</span>
            </div>
            <span className="text-sm text-muted-foreground">{v.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
