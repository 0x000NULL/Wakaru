export type QuestionCategory = 'hiragana' | 'vocabulary' | 'sentence'

export interface QuizQuestion {
  category: QuestionCategory
  prompt: string
  subtitle?: string
  options: string[]
  correctIndex: number
}

export const ASSESSMENT_QUESTIONS: QuizQuestion[] = [
  // Hiragana Recognition (5)
  {
    category: 'hiragana',
    prompt: 'あ',
    options: ['a', 'i', 'u', 'e'],
    correctIndex: 0,
  },
  {
    category: 'hiragana',
    prompt: 'き',
    options: ['ka', 'ki', 'ku', 'ke'],
    correctIndex: 1,
  },
  {
    category: 'hiragana',
    prompt: 'す',
    options: ['sa', 'shi', 'su', 'se'],
    correctIndex: 2,
  },
  {
    category: 'hiragana',
    prompt: 'と',
    options: ['ta', 'chi', 'te', 'to'],
    correctIndex: 3,
  },
  {
    category: 'hiragana',
    prompt: 'ん',
    options: ['mu', 'n', 'nu', 'ne'],
    correctIndex: 1,
  },
  // Vocabulary Meaning (5)
  {
    category: 'vocabulary',
    prompt: '水',
    subtitle: 'みず',
    options: ['water', 'fire', 'earth', 'wind'],
    correctIndex: 0,
  },
  {
    category: 'vocabulary',
    prompt: '食べる',
    subtitle: 'たべる',
    options: ['to eat', 'to drink', 'to run', 'to sleep'],
    correctIndex: 0,
  },
  {
    category: 'vocabulary',
    prompt: '大きい',
    subtitle: 'おおきい',
    options: ['big', 'small', 'fast', 'old'],
    correctIndex: 0,
  },
  {
    category: 'vocabulary',
    prompt: '学校',
    subtitle: 'がっこう',
    options: ['school', 'hospital', 'station', 'library'],
    correctIndex: 0,
  },
  {
    category: 'vocabulary',
    prompt: '友達',
    subtitle: 'ともだち',
    options: ['friend', 'family', 'teacher', 'student'],
    correctIndex: 0,
  },
  // Sentence Comprehension (3)
  {
    category: 'sentence',
    prompt: '私は学生です。',
    options: ['I am a student.', 'I am a teacher.', 'I like students.', 'The student left.'],
    correctIndex: 0,
  },
  {
    category: 'sentence',
    prompt: 'これはいくらですか。',
    options: ['How much is this?', 'What is this?', 'Where is this?', 'Who is this?'],
    correctIndex: 0,
  },
  {
    category: 'sentence',
    prompt: '毎日日本語を勉強しています。',
    options: [
      'I study Japanese every day.',
      'I speak Japanese every day.',
      'Japanese is my favorite.',
      'I will study Japanese tomorrow.',
    ],
    correctIndex: 0,
  },
]

export const SECTION_LABELS: Record<QuestionCategory, string> = {
  hiragana: 'Hiragana Recognition',
  vocabulary: 'Vocabulary',
  sentence: 'Sentence Comprehension',
}

export const LEVEL_LABELS: Record<string, string> = {
  'complete-beginner': 'Complete Beginner',
  'some-exposure': 'Some Exposure',
  intermediate: 'Intermediate',
}

export function deriveLevel(
  score: number,
): 'complete-beginner' | 'some-exposure' | 'intermediate' {
  if (score <= 3) return 'complete-beginner'
  if (score <= 8) return 'some-exposure'
  return 'intermediate'
}

export function derivePreviousStudy(
  answers: (number | null)[],
  questions: QuizQuestion[],
): string[] {
  const study: string[] = []

  const hiraganaCorrect = answers
    .slice(0, 5)
    .filter((a, i) => a === questions[i].correctIndex).length
  if (hiraganaCorrect >= 3) study.push('hiragana')

  const vocabCorrect = answers
    .slice(5, 10)
    .filter((a, i) => a === questions[i + 5].correctIndex).length
  if (vocabCorrect >= 3) study.push('vocabulary')

  const sentenceCorrect = answers
    .slice(10, 13)
    .filter((a, i) => a === questions[i + 10].correctIndex).length
  if (sentenceCorrect >= 2) study.push('sentences')

  return study
}

export function getSectionScores(answers: (number | null)[], questions: QuizQuestion[]) {
  const hiragana = answers
    .slice(0, 5)
    .filter((a, i) => a === questions[i].correctIndex).length
  const vocabulary = answers
    .slice(5, 10)
    .filter((a, i) => a === questions[i + 5].correctIndex).length
  const sentence = answers
    .slice(10, 13)
    .filter((a, i) => a === questions[i + 10].correctIndex).length
  return { hiragana, vocabulary, sentence }
}

export function getTotalScore(answers: (number | null)[], questions: QuizQuestion[]): number {
  return answers.filter((a, i) => a === questions[i].correctIndex).length
}
