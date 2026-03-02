'use client'

import { useEffect, useCallback, useMemo } from 'react'
import { cn } from '@/lib/utils/cn'
import { speakKana } from '@/lib/utils/kana'
import type { QuizQuestion } from '@/types/quiz'

interface AudioQuestionProps {
  question: QuizQuestion
  onAnswer: (answer: string) => void
  showingFeedback: boolean
  userAnswer?: string
}

export function AudioQuestion({
  question,
  onAnswer,
  showingFeedback,
  userAnswer,
}: AudioQuestionProps) {
  const options = useMemo(() => question.options ?? [], [question.options])

  const playAudio = useCallback(() => {
    speakKana(question.character.character)
  }, [question.character.character])

  // Auto-play on render
  useEffect(() => {
    playAudio()
  }, [playAudio])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault()
        playAudio()
        return
      }
      if (showingFeedback) return
      const index = parseInt(e.key) - 1
      if (index >= 0 && index < options.length) {
        onAnswer(options[index])
      }
    },
    [options, onAnswer, showingFeedback, playAudio],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={playAudio}
        className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 transition-colors hover:bg-primary/20 sm:h-28 sm:w-28"
        aria-label="Play audio"
      >
        <svg
          className="h-10 w-10 text-primary sm:h-12 sm:w-12"
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
      </button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Which character makes this sound?
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Press Space to replay
        </p>
      </div>

      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        {options.map((option, index) => {
          const isSelected = userAnswer === option
          const isCorrect = option === question.correctAnswer
          const showCorrect = showingFeedback && isCorrect
          const showWrong = showingFeedback && isSelected && !isCorrect

          return (
            <button
              key={option}
              onClick={() => !showingFeedback && onAnswer(option)}
              disabled={showingFeedback}
              className={cn(
                'rounded-lg border px-4 py-4 text-center text-2xl font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                'disabled:pointer-events-none',
                showCorrect &&
                  'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400',
                showWrong &&
                  'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
                !showingFeedback &&
                  'border-border bg-background hover:border-primary/40 hover:bg-muted/50',
                showingFeedback && !showCorrect && !showWrong && 'border-border bg-background opacity-50',
              )}
            >
              <span className="mr-1 text-xs text-muted-foreground">{index + 1}</span>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
