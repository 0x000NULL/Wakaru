import type { GrammarExercise, GrammarQuizQuestion, GrammarQuizSessionConfig } from '@/types/grammar-quiz'
import { shuffleArray } from '@/lib/utils/quiz-engine'

export interface PatternProgress {
  patternId: string
  pattern: string
  accuracy: number
  totalReviews: number
  status: string
  nextReviewAt: string | null
}

interface WeightedPattern {
  pattern: string
  patternId: string
  weight: number
}

function calculateWeight(progress: PatternProgress | undefined): number {
  if (!progress) return 3 // Never practiced

  if (progress.accuracy < 60) return 5 // Low accuracy (highest)

  const now = new Date()
  const nextReview = progress.nextReviewAt ? new Date(progress.nextReviewAt) : null
  if (nextReview && nextReview <= now) return 4 // Due for review

  if (progress.accuracy < 80) return 2 // Medium accuracy

  if (progress.status === 'mastered') return 0.5 // Mastered

  return 1 // High accuracy
}

export function selectAdaptiveExercises(
  exercises: GrammarExercise[],
  progressMap: Map<string, PatternProgress>,
  patternIdMap: Map<string, string>,
  count: number,
): GrammarExercise[] {
  // Build pattern weights
  const patternWeights = new Map<string, number>()
  const uniquePatterns = [...new Set(exercises.map((e) => e.pattern))]

  for (const pattern of uniquePatterns) {
    const patternId = patternIdMap.get(pattern)
    const progress = patternId ? progressMap.get(patternId) : undefined
    patternWeights.set(pattern, calculateWeight(progress))
  }

  // Build weighted selection pool
  const weighted: WeightedPattern[] = uniquePatterns.map((pattern) => ({
    pattern,
    patternId: patternIdMap.get(pattern) ?? '',
    weight: patternWeights.get(pattern) ?? 1,
  }))

  // Weighted random selection of patterns
  const selectedPatterns: string[] = []
  const maxPerPattern = 3

  while (selectedPatterns.length < count && weighted.length > 0) {
    const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0)
    if (totalWeight <= 0) break

    let random = Math.random() * totalWeight
    let selectedIdx = 0

    for (let i = 0; i < weighted.length; i++) {
      random -= weighted[i].weight
      if (random <= 0) {
        selectedIdx = i
        break
      }
    }

    const selected = weighted[selectedIdx]
    selectedPatterns.push(selected.pattern)

    // Cap at maxPerPattern exercises per pattern
    const count_for_pattern = selectedPatterns.filter((p) => p === selected.pattern).length
    if (count_for_pattern >= maxPerPattern) {
      weighted.splice(selectedIdx, 1)
    }
  }

  // For each selected pattern, pick a random exercise
  const result: GrammarExercise[] = []
  const usedExerciseIds = new Set<string>()

  for (const pattern of selectedPatterns) {
    const available = exercises.filter(
      (e) => e.pattern === pattern && !usedExerciseIds.has(e.id),
    )
    if (available.length === 0) continue

    const shuffled = shuffleArray(available)
    const exercise = shuffled[0]
    result.push(exercise)
    usedExerciseIds.add(exercise.id)
  }

  return shuffleArray(result)
}

export function buildAdaptiveQuizQuestions(
  exercises: GrammarExercise[],
  progressMap: Map<string, PatternProgress>,
  patternIdMap: Map<string, string>,
  config: GrammarQuizSessionConfig,
): GrammarQuizQuestion[] {
  // Filter exercises to only those matching patterns in the patternIdMap (JLPT-filtered)
  const filteredExercises = exercises.filter((e) => patternIdMap.has(e.pattern))

  const selected = selectAdaptiveExercises(
    filteredExercises,
    progressMap,
    patternIdMap,
    config.questionCount,
  )

  return selected.map((exercise) => ({
    id: exercise.id,
    type: exercise.type,
    patternId: patternIdMap.get(exercise.pattern) ?? '',
    pattern: exercise.pattern,
    sentence: exercise.sentence,
    english: exercise.english,
    correctAnswer: exercise.correctAnswer,
    options: exercise.options,
    explanation: exercise.explanation,
  }))
}
