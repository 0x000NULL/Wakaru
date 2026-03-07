'use client'

import { cn } from '@/lib/utils/cn'
import type { JlptLevel } from '@/types/vocabulary'

interface KanjiBrowseFiltersProps {
  jlptLevel: JlptLevel | null
  grade: number | null
  onJlptChange: (level: JlptLevel | null) => void
  onGradeChange: (grade: number | null) => void
}

const JLPT_OPTIONS: { label: string; value: JlptLevel | null }[] = [
  { label: 'All', value: null },
  { label: 'N5', value: 'N5' },
  { label: 'N4', value: 'N4' },
  { label: 'N3', value: 'N3' },
  { label: 'N2', value: 'N2' },
  { label: 'N1', value: 'N1' },
]

const GRADE_OPTIONS: { label: string; value: number | null }[] = [
  { label: 'All', value: null },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
]

function chipClass(active: boolean): string {
  return cn(
    'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
    active
      ? 'border-primary bg-primary text-primary-foreground'
      : 'border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground',
  )
}

export function KanjiBrowseFilters({
  jlptLevel,
  grade,
  onJlptChange,
  onGradeChange,
}: KanjiBrowseFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">JLPT</span>
        <div className="flex gap-1">
          {JLPT_OPTIONS.map((opt) => (
            <button
              key={opt.label}
              onClick={() => onJlptChange(opt.value)}
              className={chipClass(jlptLevel === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">Grade</span>
        <div className="flex flex-wrap gap-1">
          {GRADE_OPTIONS.map((opt) => (
            <button
              key={opt.label}
              onClick={() => onGradeChange(opt.value)}
              className={chipClass(grade === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
