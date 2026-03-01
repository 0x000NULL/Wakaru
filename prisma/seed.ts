import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // ============================================================================
  // SEED HIRAGANA
  // ============================================================================
  const hiraganaData = [
    // Vowels
    { character: 'あ', romaji: 'a', type: 'hiragana', group: 'vowel' },
    { character: 'い', romaji: 'i', type: 'hiragana', group: 'vowel' },
    { character: 'う', romaji: 'u', type: 'hiragana', group: 'vowel' },
    { character: 'え', romaji: 'e', type: 'hiragana', group: 'vowel' },
    { character: 'お', romaji: 'o', type: 'hiragana', group: 'vowel' },
    // K-row
    { character: 'か', romaji: 'ka', type: 'hiragana', group: 'k-row' },
    { character: 'き', romaji: 'ki', type: 'hiragana', group: 'k-row' },
    { character: 'く', romaji: 'ku', type: 'hiragana', group: 'k-row' },
    { character: 'け', romaji: 'ke', type: 'hiragana', group: 'k-row' },
    { character: 'こ', romaji: 'ko', type: 'hiragana', group: 'k-row' },
    // S-row
    { character: 'さ', romaji: 'sa', type: 'hiragana', group: 's-row' },
    { character: 'し', romaji: 'shi', type: 'hiragana', group: 's-row' },
    { character: 'す', romaji: 'su', type: 'hiragana', group: 's-row' },
    { character: 'せ', romaji: 'se', type: 'hiragana', group: 's-row' },
    { character: 'そ', romaji: 'so', type: 'hiragana', group: 's-row' },
    // T-row
    { character: 'た', romaji: 'ta', type: 'hiragana', group: 't-row' },
    { character: 'ち', romaji: 'chi', type: 'hiragana', group: 't-row' },
    { character: 'つ', romaji: 'tsu', type: 'hiragana', group: 't-row' },
    { character: 'て', romaji: 'te', type: 'hiragana', group: 't-row' },
    { character: 'と', romaji: 'to', type: 'hiragana', group: 't-row' },
    // N-row
    { character: 'な', romaji: 'na', type: 'hiragana', group: 'n-row' },
    { character: 'に', romaji: 'ni', type: 'hiragana', group: 'n-row' },
    { character: 'ぬ', romaji: 'nu', type: 'hiragana', group: 'n-row' },
    { character: 'ね', romaji: 'ne', type: 'hiragana', group: 'n-row' },
    { character: 'の', romaji: 'no', type: 'hiragana', group: 'n-row' },
  ]

  console.log('Seeding Hiragana characters...')
  for (const kana of hiraganaData) {
    await prisma.kana.upsert({
      where: { character: kana.character },
      update: {},
      create: kana,
    })
  }
  console.log(`✓ Seeded ${hiraganaData.length} hiragana characters`)

  // ============================================================================
  // SEED SAMPLE VOCABULARY
  // ============================================================================
  const vocabData = [
    {
      word: '学ぶ',
      reading: 'まなぶ',
      meaning: 'to learn; to study',
      part_of_speech: 'verb',
      jlpt_level: 'N5',
      frequency_rank: 1250,
      tags: ['verb', 'education'],
    },
    {
      word: 'こんにちは',
      reading: 'こんにちは',
      meaning: 'hello; good afternoon',
      part_of_speech: 'expression',
      jlpt_level: 'N5',
      frequency_rank: 150,
      tags: ['greeting', 'common'],
    },
    {
      word: 'ありがとう',
      reading: 'ありがとう',
      meaning: 'thank you',
      part_of_speech: 'expression',
      jlpt_level: 'N5',
      frequency_rank: 200,
      tags: ['greeting', 'common'],
    },
    {
      word: '日本',
      reading: 'にほん',
      meaning: 'Japan',
      part_of_speech: 'noun',
      jlpt_level: 'N5',
      frequency_rank: 50,
      tags: ['country', 'geography'],
    },
    {
      word: '学生',
      reading: 'がくせい',
      meaning: 'student',
      part_of_speech: 'noun',
      jlpt_level: 'N5',
      frequency_rank: 300,
      tags: ['person', 'education'],
    },
  ]

  console.log('Seeding sample vocabulary...')
  for (const vocab of vocabData) {
    await prisma.vocabulary.upsert({
      where: { word: vocab.word },
      update: {},
      create: vocab,
    })
  }
  console.log(`✓ Seeded ${vocabData.length} vocabulary items`)

  // ============================================================================
  // SEED SAMPLE GRAMMAR PATTERNS
  // ============================================================================
  const grammarData = [
    {
      pattern: 'は',
      meaning: 'topic marker particle',
      formation: 'Noun + は',
      jlpt_level: 'N5',
      difficulty: 'beginner',
      explanation:
        'The particle は (wa) marks the topic of a sentence. It indicates what the sentence is about.',
      notes: 'Pronounced "wa" not "ha" when used as a particle.',
    },
    {
      pattern: 'です',
      meaning: 'to be (polite)',
      formation: 'Noun/Adjective + です',
      jlpt_level: 'N5',
      difficulty: 'beginner',
      explanation: 'Copula verb in polite form. Used to state that something "is" something.',
      notes: 'Used to make statements polite.',
    },
    {
      pattern: 'を',
      meaning: 'direct object marker',
      formation: 'Noun + を + Verb',
      jlpt_level: 'N5',
      difficulty: 'beginner',
      explanation: 'The particle を (wo/o) marks the direct object of an action.',
      notes: 'Usually pronounced "o" not "wo".',
    },
  ]

  console.log('Seeding grammar patterns...')
  for (const pattern of grammarData) {
    await prisma.grammarPattern.create({
      data: pattern,
    })
  }
  console.log(`✓ Seeded ${grammarData.length} grammar patterns`)

  console.log('✅ Database seed completed!')
}

main()
  .catch(e => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
