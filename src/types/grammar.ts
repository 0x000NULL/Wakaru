export type GrammarDifficulty = 'beginner' | 'intermediate' | 'advanced'

export type GrammarCategoryId =
  | 'particles'
  | 'copula-existence'
  | 'verbs'
  | 'adjectives'
  | 'sentence-patterns'
  | 'connectors'
  | 'giving-receiving'
  | 'expressions'
  | 'modality'
  | 'formal-language'
  | 'conjunctions'

export interface GrammarCategory {
  id: GrammarCategoryId
  name: string
  description: string
}

export const GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    id: 'particles',
    name: 'Particles',
    description: 'Small words that mark grammatical relationships between words in a sentence.',
  },
  {
    id: 'copula-existence',
    name: 'Copula & Existence',
    description: 'Patterns for stating what things are and expressing existence.',
  },
  {
    id: 'verbs',
    name: 'Verbs',
    description: 'Verb conjugation forms for tense, politeness, and aspect.',
  },
  {
    id: 'adjectives',
    name: 'Adjectives',
    description: 'How to use and conjugate い-adjectives and な-adjectives.',
  },
  {
    id: 'sentence-patterns',
    name: 'Sentence Patterns',
    description: 'Sentence-ending particles and structural patterns.',
  },
  {
    id: 'connectors',
    name: 'Connectors',
    description: 'Words and forms that connect clauses and express reasons, desires, and suggestions.',
  },
  {
    id: 'giving-receiving',
    name: 'Giving & Receiving',
    description: 'Expressions for doing favors and receiving help from others.',
  },
  {
    id: 'expressions',
    name: 'Expressions',
    description: 'Set phrases and idiomatic expressions for nuanced communication.',
  },
  {
    id: 'modality',
    name: 'Modality',
    description: 'Patterns expressing possibility, obligation, permission, and tendency.',
  },
  {
    id: 'formal-language',
    name: 'Formal Language',
    description: 'Formal and written patterns used in business, academic, and official contexts.',
  },
  {
    id: 'conjunctions',
    name: 'Conjunctions',
    description: 'Advanced clause connectors for complex sentences and arguments.',
  },
]

export const PATTERN_CATEGORY_MAP: Record<string, GrammarCategoryId> = {
  // Particles
  'は': 'particles',
  'が': 'particles',
  'を': 'particles',
  'に': 'particles',
  'で': 'particles',
  'へ': 'particles',
  'と': 'particles',
  'も': 'particles',
  // Copula & Existence
  'です': 'copula-existence',
  'じゃないです': 'copula-existence',
  'があります': 'copula-existence',
  'がいます': 'copula-existence',
  // Verbs
  'ます': 'verbs',
  'ません': 'verbs',
  'ました': 'verbs',
  'ませんでした': 'verbs',
  'て-form': 'verbs',
  'ている': 'verbs',
  // Adjectives
  'い-adjective': 'adjectives',
  'な-adjective': 'adjectives',
  'くない': 'adjectives',
  'じゃない': 'adjectives',
  // Sentence Patterns
  'か': 'sentence-patterns',
  'の': 'sentence-patterns',
  'ね': 'sentence-patterns',
  'よ': 'sentence-patterns',
  // Connectors
  'から': 'connectors',
  'けど / が': 'connectors',
  'たい': 'connectors',
  'ましょう': 'connectors',
  // N4 — Verbs
  '辞書形': 'verbs',
  'ない-form': 'verbs',
  'た-form': 'verbs',
  'たことがある': 'verbs',
  'たり〜たりする': 'verbs',
  'てある': 'verbs',
  'てしまう': 'verbs',
  '受身形': 'verbs',
  '使役形': 'verbs',
  // N4 — Connectors
  'なければならない': 'connectors',
  'なくてもいい': 'connectors',
  'たら': 'connectors',
  'ば-form': 'connectors',
  'のに': 'connectors',
  // N4 — Sentence Patterns
  'ことができる': 'sentence-patterns',
  'と思う': 'sentence-patterns',
  'そうだ': 'sentence-patterns',
  '方がいい': 'sentence-patterns',
  // N4 — Giving & Receiving
  'てあげる・てくれる・てもらう': 'giving-receiving',
  // N4 — Adjectives
  'すぎる': 'adjectives',
  // N4 Extended — Verbs
  'てみる': 'verbs',
  'ておく': 'verbs',
  'ていく': 'verbs',
  'てくる': 'verbs',
  '意向形': 'verbs',
  '可能形': 'verbs',
  '命令形': 'verbs',
  'てほしい': 'verbs',
  // N4 Extended — Connectors
  'し': 'connectors',
  'ために': 'connectors',
  'ように': 'connectors',
  'ようにする': 'connectors',
  'ようになる': 'connectors',
  'ことにする': 'connectors',
  'ことになる': 'connectors',
  'について': 'connectors',
  'によって': 'connectors',
  // N4 Extended — Sentence Patterns
  'ようだ・みたいだ': 'sentence-patterns',
  'らしい': 'sentence-patterns',
  'はずだ': 'sentence-patterns',
  'つもり': 'sentence-patterns',
  'ところだ': 'sentence-patterns',
  'かもしれない': 'sentence-patterns',
  'にちがいない': 'sentence-patterns',
  // N4 Extended — Adjectives
  'やすい': 'adjectives',
  'にくい': 'adjectives',
  // N4 Extended — Particles
  'ばかり': 'particles',
  'だけ': 'particles',
  'しか...ない': 'particles',
  'ても': 'connectors',
  // N3 — Expressions
  'わけだ': 'expressions',
  'わけがない': 'expressions',
  'わけにはいかない': 'expressions',
  'わけではない': 'expressions',
  'ものだ': 'expressions',
  'ものだから': 'expressions',
  'ことがある': 'expressions',
  'ことは...が': 'expressions',
  'というのは': 'expressions',
  'とは限らない': 'expressions',
  'さえ...ば': 'expressions',
  '以上': 'expressions',
  '上で': 'expressions',
  // N3 — Modality
  'べきだ': 'modality',
  'おそれがある': 'modality',
  'ことはない': 'modality',
  'ないわけにはいかない': 'modality',
  'ざるを得ない': 'modality',
  'てたまらない': 'modality',
  'てならない': 'modality',
  'ようがない': 'modality',
  'っぽい': 'modality',
  'がちだ': 'modality',
  '気味': 'modality',
  'きる': 'modality',
  'かけ': 'modality',
  // N3 — Conjunctions
  '一方で': 'conjunctions',
  'にもかかわらず': 'conjunctions',
  'それにしても': 'conjunctions',
  'としたら': 'conjunctions',
  'にしても': 'conjunctions',
  'として': 'conjunctions',
  'に対して': 'conjunctions',
  'に関して': 'conjunctions',
  'をもとに': 'conjunctions',
  'に沿って': 'conjunctions',
  'を通じて': 'conjunctions',
  'につれて': 'conjunctions',
  'にしたがって': 'conjunctions',
  'に伴って': 'conjunctions',
  '上に': 'conjunctions',
  // N3 — Sentence Patterns
  'ことにしている': 'sentence-patterns',
  'ことになっている': 'sentence-patterns',
  'たびに': 'sentence-patterns',
  '最中に': 'sentence-patterns',
  '際に': 'sentence-patterns',
  'ついでに': 'sentence-patterns',
  'っけ': 'sentence-patterns',
  'かける': 'sentence-patterns',
  'ふりをする': 'sentence-patterns',
  '向け': 'sentence-patterns',
  '向き': 'sentence-patterns',
  // N3 — Verbs
  'させられる': 'verbs',
  'ずに': 'verbs',
  'っぱなし': 'verbs',
  'てからでないと': 'verbs',
  'たとたんに': 'verbs',
  '次第': 'verbs',
  'てはじめて': 'verbs',
  '限り': 'verbs',
  'かわりに': 'verbs',
  'どころか': 'verbs',
  // N3 — Formal Language
  'において': 'formal-language',
  'にとって': 'formal-language',
  'に加えて': 'formal-language',
  'をはじめ': 'formal-language',
  'にわたって': 'formal-language',
  'に基づいて': 'formal-language',
  '末に': 'formal-language',
  '以来': 'formal-language',
  'を問わず': 'formal-language',
  'ものの': 'formal-language',
  // N2 — Formal Expressions
  'に際して': 'formal-language',
  'をめぐって': 'formal-language',
  'に先立って': 'formal-language',
  'を踏まえて': 'formal-language',
  'にあたって': 'formal-language',
  'を余儀なくされる': 'formal-language',
  'に至るまで': 'formal-language',
  'をもって': 'formal-language',
  // N2 — Conjunctions
  'からこそ': 'conjunctions',
  'ばかりか': 'conjunctions',
  'としても': 'conjunctions',
  'たところで': 'conjunctions',
  'ないことには': 'conjunctions',
  // N2 — Degree/Extent
  'ほど...ない': 'expressions',
  'くらい・ぐらい': 'expressions',
  'に至る': 'expressions',
  'に限らず': 'expressions',
  'はもとより': 'expressions',
  'のみならず': 'expressions',
  'に至っては': 'expressions',
  // N2 — Tendency/State
  'つつある': 'modality',
  '一方だ': 'modality',
  'がたい': 'modality',
  '得る・得ない': 'modality',
  'かねる': 'modality',
  'かねない': 'modality',
  '抜く': 'modality',
  // N2 — Reasoning
  '以上は': 'connectors',
  '上は': 'connectors',
  'からには': 'connectors',
  'ことから': 'connectors',
  'だけに': 'connectors',
  // N2 — Other
  'っこない': 'expressions',
  'まい': 'expressions',
  'ものか': 'expressions',
  'ずにはいられない': 'modality',
  'てはいられない': 'modality',
}

export interface GrammarProgressStats {
  total: number
  learned: number
  mastered: number
}

export interface GrammarExampleItem {
  japanese: string
  english: string
  furigana?: string
}

/** Shape used in the constants file for seeding */
export interface GrammarPatternData {
  pattern: string
  meaning: string
  formation: string
  jlpt_level: string
  difficulty: GrammarDifficulty
  explanation: string
  notes?: string
  common_mistakes?: string
  examples: GrammarExampleItem[]
}

/** API list response item — pattern with limited examples */
export interface GrammarPatternListItem {
  id: string
  pattern: string
  meaning: string
  formation: string
  jlpt_level: string | null
  difficulty: string | null
  explanation: string
  notes: string | null
  common_mistakes: string | null
  examples: {
    id: string
    japanese: string
    english: string
    furigana: string | null
  }[]
}

/** SRS status returned by grammar detail endpoint */
export interface GrammarSrsStatus {
  id: string
  repetitions: number
  easeFactor: number
  interval: number
  status: string
  nextReviewAt: string | null
  lastReviewedAt: string | null
  totalReviews: number
  correctReviews: number
  accuracy: number
}

/** Detail item — full pattern with all examples + optional SRS */
export interface GrammarPatternDetailItem extends GrammarPatternListItem {
  srs: GrammarSrsStatus | null
}
