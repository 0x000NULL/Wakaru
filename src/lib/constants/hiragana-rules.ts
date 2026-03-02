import type { HiraganaRule } from '@/types/kana'

export const HIRAGANA_RULES: HiraganaRule[] = [
  {
    id: 'long-vowels',
    title: 'Long Vowels',
    description:
      'Japanese vowels can be short or long, and the difference changes meaning. Long vowels are held for roughly twice the duration of short vowels. In hiragana, long vowels are written by adding the corresponding vowel character after the syllable.',
    examples: [
      {
        japanese: 'おばさん → おばあさん',
        romaji: 'obasan → obaasan',
        meaning: 'aunt → grandmother',
        explanation:
          'Adding あ (a) after ば (ba) lengthens the vowel. The meaning changes completely.',
      },
      {
        japanese: 'おじさん → おじいさん',
        romaji: 'ojisan → ojiisan',
        meaning: 'uncle → grandfather',
        explanation:
          'Adding い (i) after じ (ji) lengthens the vowel, changing the meaning.',
      },
      {
        japanese: 'ここ → こうこう',
        romaji: 'koko → koukou',
        meaning: 'here → high school',
        explanation:
          'Long vowels create entirely different words. Pronunciation matters!',
      },
    ],
  },
  {
    id: 'long-vowel-spelling',
    title: 'Long Vowel Spelling Rules',
    description:
      'Each vowel has a specific rule for how it is lengthened in hiragana. Most vowels are doubled by adding the same vowel, but the "o" sound has a special exception.',
    examples: [
      {
        japanese: 'おかあさん',
        romaji: 'okaasan',
        meaning: 'mother',
        explanation: 'Long "a" is written by adding あ: か + あ = かあ (kaa).',
      },
      {
        japanese: 'おにいさん',
        romaji: 'oniisan',
        meaning: 'older brother',
        explanation: 'Long "i" is written by adding い: に + い = にい (nii).',
      },
      {
        japanese: 'くうき',
        romaji: 'kuuki',
        meaning: 'air',
        explanation: 'Long "u" is written by adding う: く + う = くう (kuu).',
      },
      {
        japanese: 'せんせい',
        romaji: 'sensei',
        meaning: 'teacher',
        explanation:
          'Long "e" is usually written with い (not え): せ + い = せい (sei). Some words use え instead, but い is more common.',
      },
      {
        japanese: 'とうきょう',
        romaji: 'toukyou',
        meaning: 'Tokyo',
        explanation:
          'Long "o" is usually written with う (not お): きょ + う = きょう (kyou). This is the most important exception to remember.',
      },
    ],
  },
  {
    id: 'small-tsu',
    title: 'Small Tsu (っ) — Double Consonants',
    description:
      'A small っ (tsu) before a consonant indicates a double (geminate) consonant. It creates a brief pause or "catch" in pronunciation, like holding the consonant slightly longer before releasing it. The small っ is noticeably smaller than the regular つ.',
    examples: [
      {
        japanese: 'がっこう',
        romaji: 'gakkou',
        meaning: 'school',
        explanation:
          'The small っ before こ doubles the "k" sound: ga-k-kou. Hold the K briefly before releasing.',
      },
      {
        japanese: 'きって',
        romaji: 'kitte',
        meaning: 'stamp',
        explanation:
          'The small っ before て doubles the "t" sound: ki-t-te. There is a brief stop between ki and te.',
      },
      {
        japanese: 'ざっし',
        romaji: 'zasshi',
        meaning: 'magazine',
        explanation:
          'The small っ before し doubles the "sh" sound: za-s-shi.',
      },
      {
        japanese: 'いっぱい',
        romaji: 'ippai',
        meaning: 'full / a lot',
        explanation:
          'The small っ before ぱ doubles the "p" sound: i-p-pai.',
      },
    ],
  },
  {
    id: 'particle-pronunciation',
    title: 'Particle Pronunciation Exceptions',
    description:
      'Three hiragana characters are pronounced differently when used as grammatical particles. This is one of the most common sources of confusion for beginners, but the rule is simple and consistent.',
    examples: [
      {
        japanese: 'わたしは がくせい です',
        romaji: 'watashi wa gakusei desu',
        meaning: 'I am a student',
        explanation:
          'は is normally "ha" but as a topic-marking particle it is pronounced "wa." This is the most important exception.',
      },
      {
        japanese: 'がっこうへ いく',
        romaji: 'gakkou e iku',
        meaning: 'go to school',
        explanation:
          'へ is normally "he" but as a directional particle (meaning "to/toward") it is pronounced "e."',
      },
      {
        japanese: 'みずを のむ',
        romaji: 'mizu o nomu',
        meaning: 'drink water',
        explanation:
          'を is technically "wo" but as the object-marking particle it is pronounced "o." This character is almost exclusively used as a particle.',
      },
    ],
  },
  {
    id: 'commonly-confused',
    title: 'Commonly Confused Character Pairs',
    description:
      'Several hiragana characters look similar and are easily mixed up by beginners. Learning to spot the differences early will save a lot of frustration later.',
    examples: [
      {
        japanese: 'あ / お',
        romaji: 'a / o',
        meaning: 'a vs o',
        explanation:
          'Both have crossing strokes, but あ (a) has three strokes with the last one curving left, while お (o) has a shorter top and a dot at the upper right.',
      },
      {
        japanese: 'は / ほ',
        romaji: 'ha / ho',
        meaning: 'ha vs ho',
        explanation:
          'Very similar shape. は (ha) has a simple curve on the right, while ほ (ho) has an extra horizontal stroke and a more complex right side.',
      },
      {
        japanese: 'ぬ / め',
        romaji: 'nu / me',
        meaning: 'nu vs me',
        explanation:
          'Both have a loop, but ぬ (nu) has a longer tail that extends down and curves, while め (me) ends with a simple inward loop.',
      },
      {
        japanese: 'れ / ね / わ',
        romaji: 're / ne / wa',
        meaning: 're vs ne vs wa',
        explanation:
          'All three share a similar left stroke. れ (re) swoops right without looping, ね (ne) has a small loop, and わ (wa) has a larger loop.',
      },
      {
        japanese: 'る / ろ',
        romaji: 'ru / ro',
        meaning: 'ru vs ro',
        explanation:
          'Nearly identical, but る (ru) has a small loop at the bottom, while ろ (ro) ends without a loop.',
      },
    ],
  },
]
