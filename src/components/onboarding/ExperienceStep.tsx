'use client'

import { useState, useCallback } from 'react'
import { useOnboardingStore } from '@/store/onboarding-store'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import {
  ASSESSMENT_QUESTIONS,
  SECTION_LABELS,
  LEVEL_LABELS,
  deriveLevel,
  derivePreviousStudy,
  getSectionScores,
  getTotalScore,
} from '@/lib/constants/assessment-questions'

export function ExperienceStep() {
  const { setExperience, nextStep } = useOnboardingStore()
  const [phase, setPhase] = useState<'quiz' | 'results'>('quiz')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(13).fill(null))
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const question = ASSESSMENT_QUESTIONS[currentIndex]
  const totalScore = getTotalScore(answers, ASSESSMENT_QUESTIONS)

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (showFeedback) return

      setSelectedOption(optionIndex)
      setShowFeedback(true)

      const newAnswers = [...answers]
      newAnswers[currentIndex] = optionIndex
      setAnswers(newAnswers)

      setTimeout(() => {
        setShowFeedback(false)
        setSelectedOption(null)
        if (currentIndex < ASSESSMENT_QUESTIONS.length - 1) {
          setCurrentIndex(currentIndex + 1)
        } else {
          setPhase('results')
        }
      }, 600)
    },
    [showFeedback, answers, currentIndex],
  )

  const handleSkip = () => {
    setExperience({ level: 'complete-beginner', previousStudy: ['skipped-quiz'] })
    nextStep()
  }

  const handleContinue = () => {
    const level = deriveLevel(totalScore)
    const previousStudy = derivePreviousStudy(answers, ASSESSMENT_QUESTIONS)
    setExperience({ level, previousStudy })
    nextStep()
  }

  if (phase === 'results') {
    const level = deriveLevel(totalScore)
    const sections = getSectionScores(answers, ASSESSMENT_QUESTIONS)

    return (
      <div className="space-y-6 animate-[fadeSlideUp_0.6s_ease-out]">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">Assessment Complete</h2>
          <p className="text-muted-foreground">Here&apos;s what we found</p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-center space-y-4">
          <div>
            <p className="text-4xl font-bold">{totalScore}/13</p>
            <p className="mt-1 text-sm text-muted-foreground">Questions correct</p>
          </div>

          <div className="rounded-md bg-primary/10 px-4 py-2">
            <p className="text-sm font-medium text-primary">
              Estimated Level: {LEVEL_LABELS[level]}
            </p>
          </div>

          <div className="space-y-2 text-left">
            <p className="text-sm font-medium text-muted-foreground">Breakdown</p>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Hiragana Recognition</span>
                <span className="font-medium">{sections.hiragana}/5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Vocabulary</span>
                <span className="font-medium">{sections.vocabulary}/5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sentence Comprehension</span>
                <span className="font-medium">{sections.sentence}/3</span>
              </div>
            </div>
          </div>
        </div>

        <Button size="lg" className="w-full" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    )
  }

  // Quiz phase
  const isNewSection =
    currentIndex === 0 || question.category !== ASSESSMENT_QUESTIONS[currentIndex - 1].category

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="space-y-1 animate-[fadeSlideUp_0.6s_ease-out]">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            Question {currentIndex + 1} of {ASSESSMENT_QUESTIONS.length}
          </span>
          <span>{SECTION_LABELS[question.category]}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Section label on transition */}
      {isNewSection && (
        <p className="text-center text-sm font-medium text-muted-foreground animate-[fadeSlideUp_0.4s_ease-out]">
          {SECTION_LABELS[question.category]}
        </p>
      )}

      {/* Question */}
      <div key={currentIndex} className="space-y-6 animate-[fadeSlideUp_0.4s_ease-out]">
        <div className="text-center space-y-1">
          <p
            className={cn(
              'font-bold',
              question.category === 'hiragana' ? 'text-6xl' : 'text-2xl',
            )}
          >
            {question.prompt}
          </p>
          {question.subtitle && (
            <p className="text-lg text-muted-foreground">{question.subtitle}</p>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3">
          {question.options.map((option, i) => {
            const isSelected = selectedOption === i
            const isCorrect = i === question.correctIndex

            let optionClass =
              'border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
            if (showFeedback) {
              if (isCorrect) {
                optionClass = 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400'
              } else if (isSelected && !isCorrect) {
                optionClass = 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400'
              } else {
                optionClass = 'border-border text-muted-foreground opacity-50'
              }
            }

            return (
              <button
                key={i}
                type="button"
                disabled={showFeedback}
                onClick={() => handleAnswer(i)}
                className={cn(
                  'rounded-lg border p-4 text-sm font-medium transition-all',
                  optionClass,
                )}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      {/* Skip button */}
      <div className="text-center animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]">
        <button
          type="button"
          onClick={handleSkip}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip assessment
        </button>
      </div>
    </div>
  )
}
