'use client'

import { useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { speakKana } from '@/lib/utils/kana'

interface AudioPlayButtonProps {
  text: string
  rate?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
}

const iconSizes = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

export function AudioPlayButton({ text, rate = 0.8, size = 'md', className }: AudioPlayButtonProps) {
  const handlePlay = useCallback(() => {
    speakKana(text, rate)
  }, [text, rate])

  return (
    <Button
      variant="ghost"
      className={cn('shrink-0 rounded-full p-0', sizeClasses[size], className)}
      onClick={handlePlay}
      aria-label={`Play audio for ${text}`}
    >
      <svg
        className={iconSizes[size]}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.788v6.424a.5.5 0 00.757.429l4.986-3.212a.5.5 0 000-.858L7.257 8.359a.5.5 0 00-.757.43z"
        />
      </svg>
    </Button>
  )
}
