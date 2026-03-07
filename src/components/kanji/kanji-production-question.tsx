'use client'

import { useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils/cn'
import type { KanjiQuizQuestion } from '@/types/kanji'

interface KanjiProductionQuestionProps {
  question: KanjiQuizQuestion
  onAnswer: (answer: string) => void
  showingFeedback: boolean
}

export function KanjiProductionQuestion({
  question,
  onAnswer,
  showingFeedback,
}: KanjiProductionQuestionProps) {
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
      {/* Prompt: show meaning */}
      <div className="text-center">
        <p className="mb-2 text-sm text-muted-foreground">Which kanji means:</p>
        <span className="text-2xl font-semibold text-foreground">{question.prompt}</span>
      </div>

      {/* Options: kanji characters */}
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        {question.options.map((option, i) => {
          const isCorrect = showingFeedback && option === question.correctAnswer
          const isWrong = showingFeedback && option !== question.correctAnswer

          return (
            <button
              key={option}
              onClick={() => !showingFeedback && onAnswer(option)}
              disabled={showingFeedback}
              className={cn(
                'rounded-lg border px-4 py-6 text-center transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                isCorrect &&
                  'border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-900/20',
                isWrong && 'opacity-60',
                !showingFeedback &&
                  'border-border hover:border-primary/40 hover:bg-muted/30',
              )}
            >
              <span className="block text-xs text-muted-foreground">{i + 1}</span>
              <span className="text-4xl font-medium text-foreground">{option}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
