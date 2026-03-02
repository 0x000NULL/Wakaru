'use client'

import { cn } from '@/lib/utils/cn'
import { AudioPlayButton } from '@/components/hiragana/audio-play-button'
import type { KanaExampleWord } from '@/types/kana'

interface ExampleWordsListProps {
  words: KanaExampleWord[]
  highlightCharacter?: string
  className?: string
}

function highlightText(text: string, highlight?: string) {
  if (!highlight) return text
  const parts = text.split(highlight)
  if (parts.length === 1) return text
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <strong className="text-primary">{highlight}</strong>}
    </span>
  ))
}

export function ExampleWordsList({ words, highlightCharacter, className }: ExampleWordsListProps) {
  if (words.length === 0) return null

  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-medium text-foreground">Example Words</h4>
      <ul className="space-y-2">
        {words.map(word => (
          <li key={word.word} className="flex items-center gap-2 rounded-md bg-muted/40 px-3 py-2">
            <AudioPlayButton text={word.word} size="sm" />
            <div className="min-w-0 flex-1">
              <span className="text-base font-medium">
                {highlightText(word.word, highlightCharacter)}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">{word.reading}</span>
              <span className="ml-2 text-sm text-muted-foreground">— {word.meaning}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
