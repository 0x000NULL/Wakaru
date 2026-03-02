'use client'

import { cn } from '@/lib/utils/cn'
import type { KanaCharacter } from '@/types/kana'

interface GroupProgressBarProps {
  currentIndex: number
  totalCount: number
  characters: KanaCharacter[]
  onCharacterClick: (index: number) => void
  className?: string
}

export function GroupProgressBar({
  currentIndex,
  characters,
  onCharacterClick,
  className,
}: GroupProgressBarProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <div className="flex gap-1.5 pb-1">
        {characters.map((char, index) => (
          <button
            key={char.character}
            onClick={() => onCharacterClick(index)}
            className={cn(
              'flex shrink-0 flex-col items-center rounded-md px-2.5 py-1.5 text-xs transition-colors',
              index === currentIndex
                ? 'bg-primary text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            )}
            aria-label={`Go to ${char.character} (${char.romaji})`}
            aria-current={index === currentIndex ? 'step' : undefined}
          >
            <span className="text-sm font-medium">{char.character}</span>
            <span className="text-[10px] opacity-70">{char.romaji}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
