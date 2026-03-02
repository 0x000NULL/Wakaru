'use client'

import { useEffect, useCallback, useMemo } from 'react'
import { cn } from '@/lib/utils/cn'
import { AudioPlayButton } from '@/components/hiragana/audio-play-button'
import type { QuizQuestion } from '@/types/quiz'

interface RecognitionQuestionProps {
  question: QuizQuestion
  onAnswer: (answer: string) => void
  showingFeedback: boolean
  userAnswer?: string
}

export function RecognitionQuestion({
  question,
  onAnswer,
  showingFeedback,
  userAnswer,
}: RecognitionQuestionProps) {
  const options = useMemo(() => question.options ?? [], [question.options])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (showingFeedback) return
      const index = parseInt(e.key) - 1
      if (index >= 0 && index < options.length) {
        onAnswer(options[index])
      }
    },
    [options, onAnswer, showingFeedback],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-7xl font-medium sm:text-8xl">{question.prompt}</span>
        <AudioPlayButton text={question.character.character} size="md" />
      </div>

      <p className="text-sm text-muted-foreground">What is the romaji for this character?</p>

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
                'rounded-lg border px-4 py-3 text-center text-lg font-medium transition-colors',
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
              <span className="mr-2 text-xs text-muted-foreground">{index + 1}</span>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
