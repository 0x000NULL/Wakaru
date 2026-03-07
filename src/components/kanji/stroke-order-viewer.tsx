'use client'

import { useState } from 'react'
import { getKanjiStrokeOrderSvgPath } from '@/lib/utils/kanji'

interface StrokeOrderViewerProps {
  character: string
}

export function StrokeOrderViewer({ character }: StrokeOrderViewerProps) {
  const [hasError, setHasError] = useState(false)
  const svgPath = getKanjiStrokeOrderSvgPath(character)

  if (hasError) {
    return (
      <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-border bg-muted">
        <span className="text-6xl text-foreground">{character}</span>
      </div>
    )
  }

  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-border bg-muted">
      <img
        src={svgPath}
        alt={`Stroke order for ${character}`}
        className="h-28 w-28"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
