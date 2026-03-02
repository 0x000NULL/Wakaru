'use client'

import { useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { getStrokeOrderSvgPath } from '@/lib/utils/kana'

interface StrokeOrderViewerProps {
  character: string
  className?: string
}

export function StrokeOrderViewer({ character, className }: StrokeOrderViewerProps) {
  const objectRef = useRef<HTMLObjectElement>(null)
  const isCombination = character.length > 1

  const handleReplay = useCallback(() => {
    if (objectRef.current) {
      const src = objectRef.current.data
      objectRef.current.data = ''
      requestAnimationFrame(() => {
        if (objectRef.current) {
          objectRef.current.data = src
        }
      })
    }
  }, [])

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <div className="relative flex h-40 w-40 items-center justify-center rounded-lg border border-border bg-muted/30 sm:h-48 sm:w-48">
        <object
          ref={objectRef}
          data={getStrokeOrderSvgPath(character)}
          type="image/svg+xml"
          className="h-32 w-32 dark:invert sm:h-40 sm:w-40"
          aria-label={`Stroke order for ${character}`}
        >
          <span className="text-6xl">{character}</span>
        </object>
      </div>
      <Button variant="outline" size="sm" onClick={handleReplay}>
        <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Replay
      </Button>
      {isCombination && (
        <p className="text-center text-xs text-muted-foreground">
          Combination of {character.charAt(0)} + small {character.charAt(1)}
        </p>
      )}
    </div>
  )
}
