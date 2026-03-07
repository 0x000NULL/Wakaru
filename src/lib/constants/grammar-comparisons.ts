export interface GrammarComparisonExample {
  japanese: string
  english: string
  furigana?: string
}

export interface GrammarComparison {
  id: string
  title: string
  patterns: string[]
  summary: string
  differences: {
    dimension: string
    descriptions: Record<string, string>
  }[]
  usageExamples: {
    context: string
    correct: GrammarComparisonExample
    incorrect?: GrammarComparisonExample
  }[]
}

export const GRAMMAR_COMPARISONS: GrammarComparison[] = [
  {
    id: 'wa-vs-ga',
    title: 'は vs が',
    patterns: ['は', 'が'],
    summary:
      'は marks the topic (known information), while が marks the subject (new information or emphasis). は sets the stage; が highlights the actor.',
    differences: [
      {
        dimension: 'Information type',
        descriptions: {
          'は': 'Marks known/old information as the topic',
          'が': 'Marks new information or emphasizes the subject',
        },
      },
      {
        dimension: 'Usage with questions',
        descriptions: {
          'は': 'Used in the answer: 田中さんは先生です',
          'が': 'Used in the question word: 誰が先生ですか',
        },
      },
      {
        dimension: 'Subordinate clauses',
        descriptions: {
          'は': 'Rarely used inside subordinate clauses',
          'が': 'Used as the subject marker inside subordinate clauses',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Introducing new information',
        correct: {
          japanese: '昨日、猫が庭にいました。',
          english: 'Yesterday, a cat was in the garden. (new info)',
          furigana: 'きのう、ねこがにわにいました。',
        },
      },
      {
        context: 'Talking about the topic',
        correct: {
          japanese: 'その猫は白かったです。',
          english: 'That cat was white. (known topic)',
          furigana: 'そのねこはしろかったです。',
        },
      },
    ],
  },
  {
    id: 'tara-vs-ba-vs-to-vs-nara',
    title: 'たら vs ば vs と vs なら',
    patterns: ['たら', 'ば-form'],
    summary:
      'Japanese has four main conditionals. たら is the most versatile (if/when), ば is for hypothetical/general conditions, と is for natural consequences, and なら is for contextual assumptions.',
    differences: [
      {
        dimension: 'Versatility',
        descriptions: {
          'たら': 'Most versatile — works for hypothetical, temporal, and discovered results',
          'ば': 'General/hypothetical conditions — "if X were the case"',
        },
      },
      {
        dimension: 'Past events',
        descriptions: {
          'たら': 'Can describe past one-time events: 家に帰ったら、手紙が来ていた',
          'ば': 'Not used for past one-time events',
        },
      },
      {
        dimension: 'Commands/requests',
        descriptions: {
          'たら': 'Can be followed by commands: 終わったら、連絡してください',
          'ば': 'Usually not followed by commands in modern usage',
        },
      },
    ],
    usageExamples: [
      {
        context: 'General condition (both work)',
        correct: {
          japanese: '安かったら買います。/ 安ければ買います。',
          english: 'If it is cheap, I will buy it.',
          furigana: 'やすかったらかいます。/ やすければかいます。',
        },
      },
      {
        context: 'Past discovery (only たら)',
        correct: {
          japanese: '窓を開けたら、雪が降っていた。',
          english: 'When I opened the window, it was snowing.',
          furigana: 'まどをあけたら、ゆきがふっていた。',
        },
        incorrect: {
          japanese: '×窓を開ければ、雪が降っていた。',
          english: '(ば is unnatural for past discoveries)',
          furigana: 'まどをあければ、ゆきがふっていた。',
        },
      },
    ],
  },
  {
    id: 'kara-vs-node',
    title: 'から vs ので',
    patterns: ['から'],
    summary:
      'Both express "because," but から is more subjective and assertive, while ので is softer and more objective. ので is preferred in polite or formal contexts.',
    differences: [
      {
        dimension: 'Tone',
        descriptions: {
          'から': 'Subjective, assertive — strong personal reason',
          'ので': 'Objective, softer — presents a natural consequence',
        },
      },
      {
        dimension: 'Formality',
        descriptions: {
          'から': 'More casual, can sound pushy in formal contexts',
          'ので': 'More polite, preferred in business and formal speech',
        },
      },
      {
        dimension: 'With requests',
        descriptions: {
          'から': 'Can precede commands: 危ないから、触らないで',
          'ので': 'Softer with requests: 忙しいので、また明日お願いします',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Giving a reason politely',
        correct: {
          japanese: '体調が悪いので、今日は休みます。',
          english: 'Because I am not feeling well, I will take the day off.',
          furigana: 'たいちょうがわるいので、きょうはやすみます。',
        },
      },
      {
        context: 'Strong personal assertion',
        correct: {
          japanese: '嫌だから、行かない。',
          english: 'Because I don\'t want to, I won\'t go.',
          furigana: 'いやだから、いかない。',
        },
      },
    ],
  },
  {
    id: 'youda-vs-mitaida-vs-rashii',
    title: 'ようだ vs みたいだ vs らしい',
    patterns: ['ようだ・みたいだ', 'らしい'],
    summary:
      'All express "seems like," but differ in evidence and formality. ようだ is based on the speaker\'s observation (formal), みたいだ is the casual equivalent, and らしい is based on hearsay or reputation.',
    differences: [
      {
        dimension: 'Evidence source',
        descriptions: {
          'ようだ': 'Speaker\'s own observation or judgment',
          'みたいだ': 'Speaker\'s own observation (casual)',
          'らしい': 'Based on hearsay, reputation, or indirect evidence',
        },
      },
      {
        dimension: 'Formality',
        descriptions: {
          'ようだ': 'Formal/written',
          'みたいだ': 'Casual/spoken',
          'らしい': 'Neutral — can be formal or casual',
        },
      },
      {
        dimension: 'As suffix meaning "-like"',
        descriptions: {
          'ようだ': 'Used for similes: 花のような人 (a person like a flower)',
          'みたいだ': 'Casual simile: 花みたいな人',
          'らしい': 'Means "typical of": 男らしい (manly), 子供らしい (childlike)',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Observation-based judgment',
        correct: {
          japanese: '彼は疲れているようだ。/ 彼は疲れているみたいだ。',
          english: 'He seems tired. (I can see it)',
          furigana: 'かれはつかれているようだ。/ かれはつかれているみたいだ。',
        },
      },
      {
        context: 'Hearsay-based',
        correct: {
          japanese: '彼は病気らしい。',
          english: 'Apparently he is sick. (I heard)',
          furigana: 'かれはびょうきらしい。',
        },
      },
    ],
  },
  {
    id: 'ni-vs-de',
    title: 'に vs で',
    patterns: ['に', 'で'],
    summary:
      'に marks a static location (existence), destination, time, or indirect object. で marks the location of an action, means/method, or cause.',
    differences: [
      {
        dimension: 'Location',
        descriptions: {
          'に': 'Static existence: 猫が部屋にいる (the cat is in the room)',
          'で': 'Location of activity: 部屋で勉強する (study in the room)',
        },
      },
      {
        dimension: 'Core meaning',
        descriptions: {
          'に': 'Point: destination, target, time point, recipient',
          'で': 'Scope/means: place of action, tool, material, cause',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Existence vs action',
        correct: {
          japanese: '公園に子供がいる。公園で子供が遊んでいる。',
          english: 'Children are at the park. Children are playing at the park.',
          furigana: 'こうえんにこどもがいる。こうえんでこどもがあそんでいる。',
        },
      },
    ],
  },
  {
    id: 'teiru-vs-tearu',
    title: 'ている vs てある',
    patterns: ['ている', 'てある'],
    summary:
      'ている describes an ongoing action or resultant state (intransitive). てある describes a state resulting from an intentional action (transitive verb + ある).',
    differences: [
      {
        dimension: 'Verb type',
        descriptions: {
          'ている': 'Works with any verb — describes ongoing state or action',
          'てある': 'Only with transitive verbs — emphasizes someone did it on purpose',
        },
      },
      {
        dimension: 'Intentionality',
        descriptions: {
          'ている': 'Neutral about how the state came about',
          'てある': 'Implies someone deliberately created this state',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Window is open',
        correct: {
          japanese: '窓が開いている。(state) / 窓が開けてある。(someone opened it on purpose)',
          english: 'The window is open. / The window has been (deliberately) opened.',
          furigana: 'まどがあいている。/ まどがあけてある。',
        },
      },
    ],
  },
  {
    id: 'teageru-vs-tekureru-vs-temorau',
    title: 'てあげる vs てくれる vs てもらう',
    patterns: ['てあげる・てくれる・てもらう'],
    summary:
      'Three ways to express doing favors. てあげる: I do for someone. てくれる: someone does for me. てもらう: I receive the favor of someone doing.',
    differences: [
      {
        dimension: 'Direction of favor',
        descriptions: {
          'てあげる': 'Speaker (or in-group) → others',
          'てくれる': 'Others → speaker (or in-group)',
          'てもらう': 'Speaker receives the benefit (can imply requesting)',
        },
      },
      {
        dimension: 'Subject',
        descriptions: {
          'てあげる': 'Subject is the giver: 私が友達に教えてあげた',
          'てくれる': 'Subject is the giver: 友達が私に教えてくれた',
          'てもらう': 'Subject is the receiver: 私は友達に教えてもらった',
        },
      },
    ],
    usageExamples: [
      {
        context: 'A friend helped me study',
        correct: {
          japanese: '友達が手伝ってくれた。/ 友達に手伝ってもらった。',
          english: 'My friend helped me. / I had my friend help me.',
          furigana: 'ともだちがてつだってくれた。/ ともだちにてつだってもらった。',
        },
      },
    ],
  },
  {
    id: 'noni-vs-kedo',
    title: 'のに vs けど',
    patterns: ['のに', 'けど / が'],
    summary:
      'Both express contrast ("although"), but のに carries emotional weight (surprise, disappointment, frustration), while けど is neutral.',
    differences: [
      {
        dimension: 'Emotion',
        descriptions: {
          'のに': 'Carries emotion — frustration, surprise, or disappointment',
          'けど': 'Neutral contrast — just stating two facts',
        },
      },
      {
        dimension: 'With requests',
        descriptions: {
          'のに': 'Cannot precede requests or commands',
          'けど': 'Can precede requests: すみませんけど、手伝ってください',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Frustration about effort vs result',
        correct: {
          japanese: 'たくさん勉強したのに、テストに落ちた。',
          english: 'Even though I studied a lot, I failed. (frustrating!)',
          furigana: 'たくさんべんきょうしたのに、テストにおちた。',
        },
      },
      {
        context: 'Neutral contrast',
        correct: {
          japanese: '高かったけど、買った。',
          english: 'It was expensive, but I bought it. (neutral)',
          furigana: 'たかかったけど、かった。',
        },
      },
    ],
  },
  {
    id: 'koto-vs-no',
    title: 'こと vs の (nominalization)',
    patterns: ['の'],
    summary:
      'Both nominalize verbs (turn them into nouns), but こと is more abstract/general, while の is more personal/emotional/specific.',
    differences: [
      {
        dimension: 'Abstraction',
        descriptions: {
          'こと': 'Abstract, factual: 日本語を話すことは大切だ (speaking Japanese is important)',
          'の': 'Personal, emotional, specific: 歌うのが好き (I like singing)',
        },
      },
      {
        dimension: 'Fixed expressions',
        descriptions: {
          'こと': 'Required with: ことがある, ことができる, ことにする',
          'の': 'Required with: のを見る, のが聞こえる, のを待つ',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Expressing a hobby (の preferred)',
        correct: {
          japanese: '本を読むのが好きです。',
          english: 'I like reading books.',
          furigana: 'ほんをよむのがすきです。',
        },
      },
      {
        context: 'Expressing ability (こと required)',
        correct: {
          japanese: '泳ぐことができます。',
          english: 'I can swim.',
          furigana: 'およぐことができます。',
        },
      },
    ],
  },
  {
    id: 'sugiru-vs-yasui-vs-nikui',
    title: 'すぎる vs やすい vs にくい',
    patterns: ['すぎる', 'やすい', 'にくい'],
    summary:
      'Three suffixes that attach to verb/adjective stems. すぎる means "too much/excessively." やすい means "easy to do." にくい means "hard to do."',
    differences: [
      {
        dimension: 'Meaning',
        descriptions: {
          'すぎる': 'Excess: 食べすぎる (eat too much)',
          'やすい': 'Ease/tendency: 壊れやすい (easy to break / fragile)',
          'にくい': 'Difficulty: 読みにくい (hard to read)',
        },
      },
      {
        dimension: 'Nuance',
        descriptions: {
          'すぎる': 'Always negative — something is excessive',
          'やすい': 'Can be positive or negative depending on context',
          'にくい': 'Usually describes inherent difficulty of the action',
        },
      },
    ],
    usageExamples: [
      {
        context: 'Describing a pen',
        correct: {
          japanese: 'このペンは書きやすい。/ このペンは書きにくい。',
          english: 'This pen is easy to write with. / This pen is hard to write with.',
          furigana: 'このペンはかきやすい。/ このペンはかきにくい。',
        },
      },
    ],
  },
]
