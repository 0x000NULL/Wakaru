'use client'

import { useCallback } from 'react'
import { useKanjiQuizStore } from '@/store/kanji-quiz-store'
import { KanjiQuizFeedback } from '@/components/kanji/kanji-quiz-feedback'
import { KanjiRecognitionQuestion } from '@/components/kanji/kanji-recognition-question'
import { KanjiReadingQuestion } from '@/components/kanji/kanji-reading-question'
import { KanjiProductionQuestion } from '@/components/kanji/kanji-production-question'

export function KanjiQuizSession() {
  const question = useKanjiQuizStore((s) => s.questions[s.currentIndex] ?? null)
  const totalQuestions = useKanjiQuizStore((s) => s.questions.length)
  const answers = useKanjiQuizStore((s) => s.answers)
  const currentIndex = useKanjiQuizStore((s) => s.currentIndex)
  const showingFeedback = useKanjiQuizStore((s) => s.showingFeedback)
  const lastAnswerCorrect = useKanjiQuizStore((s) => s.lastAnswerCorrect)
  const submitAnswer = useKanjiQuizStore((s) => s.submitAnswer)
  const nextQuestion = useKanjiQuizStore((s) => s.nextQuestion)

  const handleAnswer = useCallback(
    (answer: string) => {
      if (!showingFeedback) {
        submitAnswer(answer)
      }
    },
    [showingFeedback, submitAnswer],
  )

  const handleNext = useCallback(() => {
    nextQuestion()
  }, [nextQuestion])

  if (!question) return null

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {Math.min(currentIndex + 1, totalQuestions)} / {totalQuestions}
          </span>
          <span className="text-muted-foreground">
            {answers.filter((a) => a.isCorrect).length} correct
          </span>
        </div>
        <div className="flex h-2 gap-0.5 overflow-hidden rounded-full bg-muted">
          {Array.from({ length: totalQuestions }).map((_, i) => {
            const answer = answers[i]
            let colorClass = 'bg-transparent'
            if (answer?.isCorrect) colorClass = 'bg-green-500'
            else if (answer && !answer.isCorrect) colorClass = 'bg-red-500'
            else if (i === currentIndex) colorClass = 'bg-primary/40'

            return <div key={i} className={`h-full flex-1 transition-colors ${colorClass}`} />
          })}
        </div>
      </div>

      {/* Question */}
      <div className="py-4">
        {question.type === 'recognition' && (
          <KanjiRecognitionQuestion
            question={question}
            onAnswer={handleAnswer}
            showingFeedback={showingFeedback}
          />
        )}
        {question.type === 'reading' && (
          <KanjiReadingQuestion
            question={question}
            onAnswer={handleAnswer}
            showingFeedback={showingFeedback}
          />
        )}
        {question.type === 'production' && (
          <KanjiProductionQuestion
            question={question}
            onAnswer={handleAnswer}
            showingFeedback={showingFeedback}
          />
        )}
      </div>

      {/* Feedback */}
      {showingFeedback && lastAnswerCorrect !== null && (
        <KanjiQuizFeedback
          isCorrect={lastAnswerCorrect}
          correctAnswer={question.correctAnswer}
          onNext={handleNext}
        />
      )}
    </div>
  )
}
