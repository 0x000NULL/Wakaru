'use client'

import { useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils/cn'
import type { KanjiQuizQuestion } from '@/types/kanji'

interface KanjiRecognitionQuestionProps {
  question: KanjiQuizQuestion
  onAnswer: (answer: string) => void
  showingFeedback: boolean
}

export function KanjiRecognitionQuestion({
  question,
  onAnswer,
  showingFeedback,
}: KanjiRecognitionQuestionProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (showingFeedback) return
      const index = parseInt(e.key, 10)
      if (index >= 1 && index <= question.options.length) {
        onAnswer(question.options[index - 1])
      }
    },
    [showingFeedback, question.options, onAnswer],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="space-y-6">
      {/* Prompt: show kanji character */}
      <div className="text-center">
        <p className="mb-2 text-sm text-muted-foreground">What does this kanji mean?</p>
        <span className="text-7xl font-medium text-foreground">{question.kanji.character}</span>
      </div>

      {/* Options: meanings */}
      <div className="mx-auto grid max-w-md gap-2">
        {question.options.map((option, i) => {
          const isCorrect = showingFeedback && option === question.correctAnswer
          const isWrong = showingFeedback && option !== question.correctAnswer

          return (
            <button
              key={option}
              onClick={() => !showingFeedback && onAnswer(option)}
              disabled={showingFeedback}
              className={cn(
                'rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                isCorrect &&
                  'border-green-400 bg-green-50 text-green-700 dark:border-green-600 dark:bg-green-900/20 dark:text-green-400',
                isWrong && 'opacity-60',
                !showingFeedback &&
                  'border-border text-foreground hover:border-primary/40 hover:bg-muted/30',
              )}
            >
              <span className="mr-2 text-xs text-muted-foreground">{i + 1}</span>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
