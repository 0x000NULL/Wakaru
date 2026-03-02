'use client'

import { cn } from '@/lib/utils/cn'
import { AudioPlayButton } from '@/components/hiragana/audio-play-button'
import type { KanaCharacter } from '@/types/kana'

interface CharacterDisplayProps {
  character: KanaCharacter
  className?: string
}

export function CharacterDisplay({ character, className }: CharacterDisplayProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="flex items-start gap-2">
        <span className="text-[120px] leading-none sm:text-[160px]">{character.character}</span>
        <AudioPlayButton text={character.character} size="lg" />
      </div>
      <p className="text-2xl font-medium text-muted-foreground sm:text-3xl">{character.romaji}</p>
      <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
        {character.stroke_count} stroke{character.stroke_count !== 1 && 's'}
      </span>
    </div>
  )
}
