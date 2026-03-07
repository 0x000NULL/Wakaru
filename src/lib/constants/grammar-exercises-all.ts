import type { GrammarExercise } from '@/types/grammar-quiz'
import { GRAMMAR_EXERCISES } from '@/lib/constants/grammar-exercises'
import { N4_EXT_GRAMMAR_EXERCISES } from '@/lib/constants/grammar-exercises-n4-ext'
import { N3_GRAMMAR_EXERCISES } from '@/lib/constants/grammar-exercises-n3'
import { N2_GRAMMAR_EXERCISES } from '@/lib/constants/grammar-exercises-n2'

export const ALL_GRAMMAR_EXERCISES: GrammarExercise[] = [
  ...GRAMMAR_EXERCISES,
  ...N4_EXT_GRAMMAR_EXERCISES,
  ...N3_GRAMMAR_EXERCISES,
  ...N2_GRAMMAR_EXERCISES,
]

export function getExercisesByPatterns(patterns: string[]): GrammarExercise[] {
  const patternSet = new Set(patterns)
  return ALL_GRAMMAR_EXERCISES.filter((ex) => patternSet.has(ex.pattern))
}
