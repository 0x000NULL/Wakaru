import type { GrammarExercise } from '@/types/grammar-quiz'

export const N3_GRAMMAR_EXERCISES: GrammarExercise[] = [
  // ===========================================================================
  // わけだ (it means that; no wonder; naturally)
  // ===========================================================================
  {
    id: 'n3-wakeda-fib-1',
    pattern: 'わけだ',
    type: 'fill_in_blank',
    sentence: '毎日10時間も勉強しているのだから、成績がいい＿＿＿。',
    english: 'Since he studies 10 hours every day, no wonder his grades are good.',
    correctAnswer: 'わけだ',
    options: ['わけだ', 'ものだ', 'ことだ', 'はずだ'],
    explanation:
      'わけだ expresses a logical conclusion — given the premise, the result naturally follows.',
  },
  {
    id: 'n3-wakeda-fib-2',
    pattern: 'わけだ',
    type: 'fill_in_blank',
    sentence: '彼は日本に20年住んでいるから、日本語が上手な＿＿＿。',
    english: 'He has lived in Japan for 20 years, so no wonder his Japanese is good.',
    correctAnswer: 'わけだ',
    options: ['わけだ', 'ことだ', 'ものだ', 'そうだ'],
    explanation:
      'わけだ draws a natural conclusion from the fact that he has lived in Japan for 20 years.',
  },
  {
    id: 'n3-wakeda-fib-3',
    pattern: 'わけだ',
    type: 'fill_in_blank',
    sentence: 'エアコンが壊れていたのか。どうりで暑い＿＿＿。',
    english: 'The AC was broken? No wonder it was hot.',
    correctAnswer: 'わけだ',
    options: ['わけだ', 'ものだ', 'ようだ', 'らしい'],
    explanation:
      'わけだ is used with どうりで to express "no wonder" — the reason is now understood.',
  },
  {
    id: 'n3-wakeda-mc-1',
    pattern: 'わけだ',
    type: 'multiple_choice',
    sentence: 'What does わけだ primarily express?',
    english: 'Select the best description.',
    correctAnswer: 'A logical conclusion or natural result',
    options: [
      'A logical conclusion or natural result',
      'A strong obligation',
      'An uncertain guess',
      'A past habitual action',
    ],
    explanation:
      'わけだ expresses that something is a natural, logical conclusion based on given information.',
  },
  {
    id: 'n3-wakeda-mc-2',
    pattern: 'わけだ',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses わけだ?',
    english: 'Select the correct usage.',
    correctAnswer: '3年も練習したから、上手になったわけだ。',
    options: [
      '3年も練習したから、上手になったわけだ。',
      '明日は雨が降るわけだ。天気予報を見ていない。',
      'わけだから、勉強しなさい。',
      'わけだ、今日は暑い。',
    ],
    explanation:
      'わけだ follows a reason or explanation to draw a logical conclusion. The first option correctly states a reason, then concludes.',
  },

  // ===========================================================================
  // わけがない (there is no way that; it is impossible that)
  // ===========================================================================
  {
    id: 'n3-wakeganai-fib-1',
    pattern: 'わけがない',
    type: 'fill_in_blank',
    sentence: 'あんなに優しい人が嘘をつく＿＿＿。',
    english: 'There is no way such a kind person would lie.',
    correctAnswer: 'わけがない',
    options: ['わけがない', 'わけだ', 'わけではない', 'ことがない'],
    explanation:
      'わけがない expresses strong conviction that something is impossible based on reason.',
  },
  {
    id: 'n3-wakeganai-fib-2',
    pattern: 'わけがない',
    type: 'fill_in_blank',
    sentence: '準備もしていないのに、試験に受かる＿＿＿。',
    english: 'There is no way you can pass the exam without even preparing.',
    correctAnswer: 'わけがない',
    options: ['わけがない', 'はずがない', 'わけにはいかない', 'ものではない'],
    explanation:
      'わけがない logically denies the possibility — without preparation, passing is impossible.',
  },
  {
    id: 'n3-wakeganai-fib-3',
    pattern: 'わけがない',
    type: 'fill_in_blank',
    sentence: 'こんな難しい問題が子供にわかる＿＿＿。',
    english: 'There is no way a child could understand such a difficult problem.',
    correctAnswer: 'わけがない',
    options: ['わけがない', 'ことがない', 'ようがない', 'わけだ'],
    explanation:
      'わけがない strongly denies the possibility based on logical reasoning.',
  },
  {
    id: 'n3-wakeganai-mc-1',
    pattern: 'わけがない',
    type: 'multiple_choice',
    sentence: 'What nuance does わけがない carry?',
    english: 'Select the best description.',
    correctAnswer: 'Strong denial based on logical reasoning',
    options: [
      'Strong denial based on logical reasoning',
      'A polite refusal',
      'An uncertain negation',
      'A partial negation',
    ],
    explanation:
      'わけがない conveys that something is logically impossible — the speaker is strongly convinced.',
  },
  {
    id: 'n3-wakeganai-mc-2',
    pattern: 'わけがない',
    type: 'multiple_choice',
    sentence: 'How does わけがない differ from はずがない?',
    english: 'Select the most accurate distinction.',
    correctAnswer: 'わけがない is based on logic; はずがない is based on expectation',
    options: [
      'わけがない is based on logic; はずがない is based on expectation',
      'They are completely interchangeable',
      'わけがない is more polite',
      'はずがない is stronger than わけがない',
    ],
    explanation:
      'わけがない denies based on logical reasoning, while はずがない denies based on the speaker\'s expectation or belief.',
  },

  // ===========================================================================
  // わけにはいかない (cannot afford to; must not)
  // ===========================================================================
  {
    id: 'n3-wakenihaikanai-fib-1',
    pattern: 'わけにはいかない',
    type: 'fill_in_blank',
    sentence: '明日は大事な会議があるから、休む＿＿＿。',
    english: 'I have an important meeting tomorrow, so I cannot afford to take a day off.',
    correctAnswer: 'わけにはいかない',
    options: ['わけにはいかない', 'わけがない', 'ことはない', 'はずがない'],
    explanation:
      'わけにはいかない expresses that one cannot do something due to social or moral obligation.',
  },
  {
    id: 'n3-wakenihaikanai-fib-2',
    pattern: 'わけにはいかない',
    type: 'fill_in_blank',
    sentence: '友達との約束があるから、ドタキャンする＿＿＿。',
    english: 'I have a promise with my friend, so I cannot just cancel at the last minute.',
    correctAnswer: 'わけにはいかない',
    options: ['わけにはいかない', 'ことはない', 'わけではない', 'ものではない'],
    explanation:
      'わけにはいかない indicates a moral or social reason preventing the action.',
  },
  {
    id: 'n3-wakenihaikanai-fib-3',
    pattern: 'わけにはいかない',
    type: 'fill_in_blank',
    sentence: 'まだ仕事が残っているので、帰る＿＿＿。',
    english: 'There is still work left, so I cannot just go home.',
    correctAnswer: 'わけにはいかない',
    options: ['わけにはいかない', 'わけだ', 'ことがある', 'べきだ'],
    explanation:
      'わけにはいかない expresses that leaving would be irresponsible given the circumstances.',
  },
  {
    id: 'n3-wakenihaikanai-mc-1',
    pattern: 'わけにはいかない',
    type: 'multiple_choice',
    sentence: 'When is わけにはいかない typically used?',
    english: 'Select the best description.',
    correctAnswer: 'When social or moral reasons prevent an action',
    options: [
      'When social or moral reasons prevent an action',
      'When something is physically impossible',
      'When expressing a past regret',
      'When making a casual suggestion',
    ],
    explanation:
      'わけにはいかない is used when external pressures (duty, propriety, responsibility) make it impossible to do something.',
  },
  {
    id: 'n3-wakenihaikanai-mc-2',
    pattern: 'わけにはいかない',
    type: 'multiple_choice',
    sentence: 'What verb form precedes わけにはいかない?',
    english: 'Select the correct form.',
    correctAnswer: 'Dictionary form (e.g., 休むわけにはいかない)',
    options: [
      'Dictionary form (e.g., 休むわけにはいかない)',
      'て-form (e.g., 休んでわけにはいかない)',
      'ます-form (e.g., 休みますわけにはいかない)',
      'た-form (e.g., 休んだわけにはいかない)',
    ],
    explanation:
      'わけにはいかない attaches to the dictionary form of verbs.',
  },

  // ===========================================================================
  // わけではない (it does not mean that; it is not the case that)
  // ===========================================================================
  {
    id: 'n3-wakedewanai-fib-1',
    pattern: 'わけではない',
    type: 'fill_in_blank',
    sentence: '日本料理が嫌いな＿＿＿が、毎日は食べたくない。',
    english: 'It is not that I dislike Japanese food, but I do not want to eat it every day.',
    correctAnswer: 'わけではない',
    options: ['わけではない', 'わけがない', 'ことはない', 'ものではない'],
    explanation:
      'わけではない partially denies — it is not that X, but rather something more nuanced.',
  },
  {
    id: 'n3-wakedewanai-fib-2',
    pattern: 'わけではない',
    type: 'fill_in_blank',
    sentence: 'お金がない＿＿＿が、無駄遣いはしたくない。',
    english: 'It is not that I do not have money, but I do not want to waste it.',
    correctAnswer: 'わけではない',
    options: ['わけではない', 'わけにはいかない', 'はずではない', 'ものではない'],
    explanation:
      'わけではない is used for partial denial — correcting a potential misunderstanding.',
  },
  {
    id: 'n3-wakedewanai-fib-3',
    pattern: 'わけではない',
    type: 'fill_in_blank',
    sentence: '運動が好きな＿＿＿が、マラソンは苦手だ。',
    english: 'It is not that I like exercise, but I am bad at marathons.',
    correctAnswer: 'わけではない',
    options: ['わけではない', 'わけだ', 'ことがある', 'わけがない'],
    explanation:
      'わけではない qualifies the statement — it is not entirely true that the speaker likes exercise.',
  },
  {
    id: 'n3-wakedewanai-mc-1',
    pattern: 'わけではない',
    type: 'multiple_choice',
    sentence: 'What function does わけではない serve?',
    english: 'Select the best description.',
    correctAnswer: 'Partial denial or clarification of a misunderstanding',
    options: [
      'Partial denial or clarification of a misunderstanding',
      'Complete denial of a fact',
      'Expressing a strong obligation',
      'Drawing a logical conclusion',
    ],
    explanation:
      'わけではない softly denies or qualifies something — "it is not exactly the case that..."',
  },
  {
    id: 'n3-wakedewanai-mc-2',
    pattern: 'わけではない',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses わけではない?',
    english: 'Select the correct usage.',
    correctAnswer: '彼が悪いわけではないが、もう少し注意してほしい。',
    options: [
      '彼が悪いわけではないが、もう少し注意してほしい。',
      '彼が悪いわけではないから、絶対に許さない。',
      'わけではない、明日は雨だ。',
      '試験に落ちたわけではない。だから全然勉強しなかった。',
    ],
    explanation:
      'わけではない is followed by a nuanced correction or qualification, not a contradictory statement.',
  },

  // ===========================================================================
  // ものだ (used to; it is natural that; should)
  // ===========================================================================
  {
    id: 'n3-monoda-fib-1',
    pattern: 'ものだ',
    type: 'fill_in_blank',
    sentence: '子供の頃、よくこの公園で遊んだ＿＿＿。',
    english: 'When I was a child, I used to play in this park a lot.',
    correctAnswer: 'ものだ',
    options: ['ものだ', 'ことだ', 'わけだ', 'はずだ'],
    explanation:
      'ものだ with past tense expresses nostalgic recollection — "I used to..."',
  },
  {
    id: 'n3-monoda-fib-2',
    pattern: 'ものだ',
    type: 'fill_in_blank',
    sentence: '人の気持ちは時間とともに変わる＿＿＿。',
    english: 'People\'s feelings naturally change over time.',
    correctAnswer: 'ものだ',
    options: ['ものだ', 'わけだ', 'ことだ', 'そうだ'],
    explanation:
      'ものだ with present tense expresses a general truth or something that is natural.',
  },
  {
    id: 'n3-monoda-fib-3',
    pattern: 'ものだ',
    type: 'fill_in_blank',
    sentence: '学生時代は毎晩遅くまで勉強した＿＿＿。',
    english: 'During my student days, I used to study late every night.',
    correctAnswer: 'ものだ',
    options: ['ものだ', 'ことがある', 'わけだ', 'べきだ'],
    explanation:
      'ものだ with past tense recalls habitual actions from the past with a sense of nostalgia.',
  },
  {
    id: 'n3-monoda-mc-1',
    pattern: 'ものだ',
    type: 'multiple_choice',
    sentence: 'Which meaning does ものだ NOT have?',
    english: 'Select the meaning that does not apply to ものだ.',
    correctAnswer: 'Expressing a logical conclusion',
    options: [
      'Expressing a logical conclusion',
      'Nostalgic recollection of the past',
      'Stating a general truth',
      'Giving advice or expressing how things should be',
    ],
    explanation:
      'Expressing a logical conclusion is the function of わけだ, not ものだ.',
  },
  {
    id: 'n3-monoda-mc-2',
    pattern: 'ものだ',
    type: 'multiple_choice',
    sentence: '「昔はよく映画を見たものだ」— What does this sentence express?',
    english: 'Select the best interpretation.',
    correctAnswer: 'Nostalgic recollection: "I used to watch movies a lot back then."',
    options: [
      'Nostalgic recollection: "I used to watch movies a lot back then."',
      'Obligation: "I should watch movies."',
      'Logical conclusion: "No wonder I watched movies."',
      'Possibility: "It is possible that I watched movies."',
    ],
    explanation:
      'Past tense verb + ものだ expresses nostalgic recollection of past habits.',
  },

  // ===========================================================================
  // ものだから (because; since — with excuse/justification nuance)
  // ===========================================================================
  {
    id: 'n3-monodakara-fib-1',
    pattern: 'ものだから',
    type: 'fill_in_blank',
    sentence: '電車が遅れた＿＿＿、会議に間に合わなかった。',
    english: 'Because the train was delayed, I could not make it to the meeting in time.',
    correctAnswer: 'ものだから',
    options: ['ものだから', 'わけだから', 'ことだから', 'ばかりに'],
    explanation:
      'ものだから gives a reason with a nuance of excuse or justification for an undesirable result.',
  },
  {
    id: 'n3-monodakara-fib-2',
    pattern: 'ものだから',
    type: 'fill_in_blank',
    sentence: '急に雨が降ってきた＿＿＿、傘を持っていなくて濡れてしまった。',
    english: 'Because it suddenly started raining, I got wet since I did not have an umbrella.',
    correctAnswer: 'ものだから',
    options: ['ものだから', 'ものの', 'ものだ', 'ことから'],
    explanation:
      'ものだから explains the reason (sudden rain) as justification for the unfortunate outcome.',
  },
  {
    id: 'n3-monodakara-fib-3',
    pattern: 'ものだから',
    type: 'fill_in_blank',
    sentence: '初めての海外旅行だった＿＿＿、とても緊張した。',
    english: 'Because it was my first trip abroad, I was very nervous.',
    correctAnswer: 'ものだから',
    options: ['ものだから', 'ことだから', 'わけだから', 'からには'],
    explanation:
      'ものだから provides a personal reason or excuse for the emotional reaction.',
  },
  {
    id: 'n3-monodakara-mc-1',
    pattern: 'ものだから',
    type: 'multiple_choice',
    sentence: 'What nuance does ものだから add compared to simple から?',
    english: 'Select the best description.',
    correctAnswer: 'An excuse or justification for an undesirable outcome',
    options: [
      'An excuse or justification for an undesirable outcome',
      'A stronger, more formal reason',
      'A reason for a positive outcome',
      'An objective, neutral explanation',
    ],
    explanation:
      'ものだから implies the speaker is offering an excuse or justification, often for something that went wrong.',
  },
  {
    id: 'n3-monodakara-mc-2',
    pattern: 'ものだから',
    type: 'multiple_choice',
    sentence: 'Which situation is most appropriate for using ものだから?',
    english: 'Select the most fitting scenario.',
    correctAnswer: 'Explaining why you were late to a meeting',
    options: [
      'Explaining why you were late to a meeting',
      'Describing a scientific fact',
      'Making a polite request',
      'Expressing a wish for the future',
    ],
    explanation:
      'ものだから is commonly used to justify or excuse undesirable situations like being late.',
  },

  // ===========================================================================
  // ことがある (there are times when; sometimes)
  // ===========================================================================
  {
    id: 'n3-kotoganaru-fib-1',
    pattern: 'ことがある',
    type: 'fill_in_blank',
    sentence: '忙しい時は、朝ごはんを食べない＿＿＿。',
    english: 'When I am busy, there are times when I do not eat breakfast.',
    correctAnswer: 'ことがある',
    options: ['ことがある', 'ものがある', 'わけがある', 'はずがある'],
    explanation:
      'ことがある with dictionary form expresses that something occasionally happens.',
  },
  {
    id: 'n3-kotoganaru-fib-2',
    pattern: 'ことがある',
    type: 'fill_in_blank',
    sentence: '夜中に突然目が覚める＿＿＿。',
    english: 'There are times when I suddenly wake up in the middle of the night.',
    correctAnswer: 'ことがある',
    options: ['ことがある', 'ことになる', 'ことにする', 'ものだ'],
    explanation:
      'ことがある indicates that waking up at night happens occasionally.',
  },
  {
    id: 'n3-kotoganaru-fib-3',
    pattern: 'ことがある',
    type: 'fill_in_blank',
    sentence: 'このあたりは冬になると雪が降る＿＿＿。',
    english: 'In this area, there are times when it snows in winter.',
    correctAnswer: 'ことがある',
    options: ['ことがある', 'ことはない', 'わけがない', 'べきだ'],
    explanation:
      'ことがある expresses that snowfall occasionally occurs in this area during winter.',
  },
  {
    id: 'n3-kotoganaru-mc-1',
    pattern: 'ことがある',
    type: 'multiple_choice',
    sentence: 'How does dictionary form + ことがある differ from た-form + ことがある?',
    english: 'Select the best distinction.',
    correctAnswer: 'Dictionary form = sometimes happens; た-form = have experienced',
    options: [
      'Dictionary form = sometimes happens; た-form = have experienced',
      'They are completely the same',
      'Dictionary form = past experience; た-form = sometimes happens',
      'Dictionary form is more polite',
    ],
    explanation:
      'Dictionary form + ことがある means "it sometimes happens," while た-form + ことがある means "I have experienced it before."',
  },
  {
    id: 'n3-kotoganaru-mc-2',
    pattern: 'ことがある',
    type: 'multiple_choice',
    sentence: 'Which sentence means "There are times when I oversleep"?',
    english: 'Select the correct sentence.',
    correctAnswer: '寝坊することがある。',
    options: [
      '寝坊することがある。',
      '寝坊したことがある。',
      '寝坊することはない。',
      '寝坊するわけがない。',
    ],
    explanation:
      'Dictionary form する + ことがある expresses that oversleeping occasionally happens.',
  },

  // ===========================================================================
  // ことは...が (it is true that... but)
  // ===========================================================================
  {
    id: 'n3-kotowaga-fib-1',
    pattern: 'ことは...が',
    type: 'fill_in_blank',
    sentence: '読んだ＿＿＿読んだ＿＿＿、内容はあまり理解できなかった。',
    english: 'It is true that I read it, but I could not really understand the content.',
    correctAnswer: 'ことは...が',
    options: ['ことは...が', 'ものの...が', 'わけは...が', 'のは...が'],
    explanation:
      'ことは...が acknowledges something is true but introduces a contrasting or qualifying statement.',
  },
  {
    id: 'n3-kotowaga-fib-2',
    pattern: 'ことは...が',
    type: 'fill_in_blank',
    sentence: '行った＿＿＿行った＿＿＿、あまり楽しくなかった。',
    english: 'It is true that I went, but it was not very fun.',
    correctAnswer: 'ことは...が',
    options: ['ことは...が', 'わけは...が', 'ものは...が', 'ところ...が'],
    explanation:
      'ことは...が concedes the fact of going but qualifies it with a negative impression.',
  },
  {
    id: 'n3-kotowaga-fib-3',
    pattern: 'ことは...が',
    type: 'fill_in_blank',
    sentence: '安い＿＿＿安い＿＿＿、品質はあまりよくない。',
    english: 'It is true that it is cheap, but the quality is not very good.',
    correctAnswer: 'ことは...が',
    options: ['ことは...が', 'わけは...が', 'はずは...が', 'ものは...が'],
    explanation:
      'ことは...が with adjectives repeats the adjective to concede a point before adding a qualification.',
  },
  {
    id: 'n3-kotowaga-mc-1',
    pattern: 'ことは...が',
    type: 'multiple_choice',
    sentence: 'What is the function of ことは...が?',
    english: 'Select the best description.',
    correctAnswer: 'Conceding a point while adding a contrasting qualification',
    options: [
      'Conceding a point while adding a contrasting qualification',
      'Strongly agreeing with a statement',
      'Expressing complete denial',
      'Drawing a logical conclusion',
    ],
    explanation:
      'ことは...が admits that something is true, then introduces a "but" to qualify or contrast.',
  },
  {
    id: 'n3-kotowaga-mc-2',
    pattern: 'ことは...が',
    type: 'multiple_choice',
    sentence: 'What structural feature is characteristic of ことは...が?',
    english: 'Select the correct feature.',
    correctAnswer: 'The verb or adjective is repeated (e.g., 食べたことは食べたが)',
    options: [
      'The verb or adjective is repeated (e.g., 食べたことは食べたが)',
      'Only nouns can be used before ことは',
      'It is always followed by a positive statement',
      'It can only be used in formal writing',
    ],
    explanation:
      'A hallmark of ことは...が is repeating the predicate: Verb/Adj + ことは + same Verb/Adj + が.',
  },

  // ===========================================================================
  // ざるを得ない (cannot help but; have no choice but to)
  // ===========================================================================
  {
    id: 'n3-zaruwoenai-fib-1',
    pattern: 'ざるを得ない',
    type: 'fill_in_blank',
    sentence: '証拠がこれだけあれば、認め＿＿＿。',
    english: 'With this much evidence, I have no choice but to acknowledge it.',
    correctAnswer: 'ざるを得ない',
    options: ['ざるを得ない', 'なければならない', 'わけにはいかない', 'べきだ'],
    explanation:
      'ざるを得ない expresses that circumstances force the action — there is no other option.',
  },
  {
    id: 'n3-zaruwoenai-fib-2',
    pattern: 'ざるを得ない',
    type: 'fill_in_blank',
    sentence: '予算が足りないので、計画を変更せ＿＿＿。',
    english: 'Since the budget is not enough, we have no choice but to change the plan.',
    correctAnswer: 'ざるを得ない',
    options: ['ざるを得ない', 'ないわけにはいかない', 'べきではない', 'わけがない'],
    explanation:
      'ざるを得ない indicates that the budget shortage forces a plan change. Note: する becomes せざるを得ない.',
  },
  {
    id: 'n3-zaruwoenai-fib-3',
    pattern: 'ざるを得ない',
    type: 'fill_in_blank',
    sentence: '上司の命令なので、従わ＿＿＿。',
    english: 'Since it is an order from my boss, I have no choice but to comply.',
    correctAnswer: 'ざるを得ない',
    options: ['ざるを得ない', 'なければならない', 'ことはない', 'わけではない'],
    explanation:
      'ざるを得ない shows that the boss\'s order leaves no alternative but to comply.',
  },
  {
    id: 'n3-zaruwoenai-mc-1',
    pattern: 'ざるを得ない',
    type: 'multiple_choice',
    sentence: 'How does ざるを得ない differ from なければならない?',
    english: 'Select the best distinction.',
    correctAnswer: 'ざるを得ない implies reluctance; なければならない states obligation',
    options: [
      'ざるを得ない implies reluctance; なければならない states obligation',
      'They are exactly the same',
      'なければならない implies reluctance; ざるを得ない states obligation',
      'ざるを得ない is more casual',
    ],
    explanation:
      'ざるを得ない emphasizes that the speaker is forced by circumstances and may be reluctant, while なければならない simply states an obligation.',
  },
  {
    id: 'n3-zaruwoenai-mc-2',
    pattern: 'ざるを得ない',
    type: 'multiple_choice',
    sentence: 'What is the ざるを得ない form of the verb する?',
    english: 'Select the correct conjugation.',
    correctAnswer: 'せざるを得ない',
    options: ['せざるを得ない', 'しざるを得ない', 'すざるを得ない', 'さざるを得ない'],
    explanation:
      'する is an irregular verb that becomes せざるを得ない (not しざるを得ない).',
  },

  // ===========================================================================
  // に違いない (there is no doubt that; must be)
  // ===========================================================================
  {
    id: 'n3-nichigainai-fib-1',
    pattern: 'に違いない',
    type: 'fill_in_blank',
    sentence: 'あの音は隣の部屋からだ。誰かいる＿＿＿。',
    english: 'That sound is from the next room. Someone must be there.',
    correctAnswer: 'に違いない',
    options: ['に違いない', 'かもしれない', 'はずがない', 'わけがない'],
    explanation:
      'に違いない expresses a strong conviction — the speaker is certain someone is there.',
  },
  {
    id: 'n3-nichigainai-fib-2',
    pattern: 'に違いない',
    type: 'fill_in_blank',
    sentence: 'こんなにおいしい料理を作れるのは、プロの料理人＿＿＿。',
    english: 'Someone who can make such delicious food must be a professional chef.',
    correctAnswer: 'に違いない',
    options: ['に違いない', 'にすぎない', 'に決まっている', 'に限らない'],
    explanation:
      'に違いない expresses confident certainty about the chef\'s professional status.',
  },
  {
    id: 'n3-nichigainai-fib-3',
    pattern: 'に違いない',
    type: 'fill_in_blank',
    sentence: '彼女が怒っているのは、あのメールのせい＿＿＿。',
    english: 'The reason she is angry must be because of that email.',
    correctAnswer: 'に違いない',
    options: ['に違いない', 'かもしれない', 'ようだ', 'らしい'],
    explanation:
      'に違いない shows the speaker\'s strong conviction about the cause of her anger.',
  },
  {
    id: 'n3-nichigainai-mc-1',
    pattern: 'に違いない',
    type: 'multiple_choice',
    sentence: 'What level of certainty does に違いない express?',
    english: 'Select the best description.',
    correctAnswer: 'Very high certainty — the speaker is almost sure',
    options: [
      'Very high certainty — the speaker is almost sure',
      'Low certainty — just a guess',
      'Moderate uncertainty — maybe or maybe not',
      'Zero certainty — completely unknown',
    ],
    explanation:
      'に違いない expresses strong conviction — the speaker is confident in their judgment.',
  },
  {
    id: 'n3-nichigainai-mc-2',
    pattern: 'に違いない',
    type: 'multiple_choice',
    sentence: 'Which forms can precede に違いない?',
    english: 'Select the correct answer.',
    correctAnswer: 'Plain form verbs, い-adjectives, な-adjective stems, and nouns',
    options: [
      'Plain form verbs, い-adjectives, な-adjective stems, and nouns',
      'Only verbs in ます-form',
      'Only nouns',
      'Only て-form verbs',
    ],
    explanation:
      'に違いない can follow plain form verbs, い-adjectives, な-adjective stems (without な), and nouns.',
  },

  // ===========================================================================
  // というのは (the reason is; what ... means is; speaking of)
  // ===========================================================================
  {
    id: 'n3-toiunoha-fib-1',
    pattern: 'というのは',
    type: 'fill_in_blank',
    sentence: '遅刻した＿＿＿、電車が止まっていたからです。',
    english: 'The reason I was late is that the train had stopped.',
    correctAnswer: 'というのは',
    options: ['というのは', 'ということは', 'というより', 'というのに'],
    explanation:
      'というのは introduces an explanation or reason for something previously stated.',
  },
  {
    id: 'n3-toiunoha-fib-2',
    pattern: 'というのは',
    type: 'fill_in_blank',
    sentence: '「花見」＿＿＿、桜の花を見ながら楽しむ日本の習慣のことだ。',
    english: '"Hanami" means the Japanese custom of enjoying cherry blossoms.',
    correctAnswer: 'というのは',
    options: ['というのは', 'というのに', 'というより', 'ということは'],
    explanation:
      'というのは is used to define or explain the meaning of a term or concept.',
  },
  {
    id: 'n3-toiunoha-fib-3',
    pattern: 'というのは',
    type: 'fill_in_blank',
    sentence: '彼が怒った＿＿＿、約束を守らなかったからだ。',
    english: 'The reason he got angry is that I did not keep my promise.',
    correctAnswer: 'というのは',
    options: ['というのは', 'ということは', 'というものの', 'というのも'],
    explanation:
      'というのは introduces the reason behind the previously mentioned event.',
  },
  {
    id: 'n3-toiunoha-mc-1',
    pattern: 'というのは',
    type: 'multiple_choice',
    sentence: 'What are the main uses of というのは?',
    english: 'Select the best description.',
    correctAnswer: 'Defining a term or explaining a reason',
    options: [
      'Defining a term or explaining a reason',
      'Expressing a strong obligation',
      'Making a comparison',
      'Expressing a wish',
    ],
    explanation:
      'というのは is primarily used to define terms ("X means...") or explain reasons ("the reason is...").',
  },
  {
    id: 'n3-toiunoha-mc-2',
    pattern: 'というのは',
    type: 'multiple_choice',
    sentence: 'Which ending typically follows というのは when explaining a reason?',
    english: 'Select the most common pattern.',
    correctAnswer: '...からだ / ...ためだ',
    options: [
      '...からだ / ...ためだ',
      '...べきだ',
      '...に違いない',
      '...わけにはいかない',
    ],
    explanation:
      'When というのは explains a reason, the sentence typically ends with からだ or ためだ.',
  },

  // ===========================================================================
  // とは限らない (it is not necessarily the case that; not always)
  // ===========================================================================
  {
    id: 'n3-tohakagiranai-fib-1',
    pattern: 'とは限らない',
    type: 'fill_in_blank',
    sentence: '高いものがいい＿＿＿。',
    english: 'Expensive things are not necessarily good.',
    correctAnswer: 'とは限らない',
    options: ['とは限らない', 'わけではない', 'はずがない', 'わけがない'],
    explanation:
      'とは限らない denies that something is always true — expensive does not always mean good.',
  },
  {
    id: 'n3-tohakagiranai-fib-2',
    pattern: 'とは限らない',
    type: 'fill_in_blank',
    sentence: '努力すれば成功する＿＿＿。',
    english: 'It is not necessarily the case that you will succeed if you try hard.',
    correctAnswer: 'とは限らない',
    options: ['とは限らない', 'に違いない', 'わけだ', 'ものだ'],
    explanation:
      'とは限らない expresses that effort does not always guarantee success.',
  },
  {
    id: 'n3-tohakagiranai-fib-3',
    pattern: 'とは限らない',
    type: 'fill_in_blank',
    sentence: '有名なレストランがおいしい＿＿＿。',
    english: 'Famous restaurants are not necessarily delicious.',
    correctAnswer: 'とは限らない',
    options: ['とは限らない', 'わけではない', 'ことはない', 'べきではない'],
    explanation:
      'とは限らない challenges the assumption that fame equals quality.',
  },
  {
    id: 'n3-tohakagiranai-mc-1',
    pattern: 'とは限らない',
    type: 'multiple_choice',
    sentence: 'What does とは限らない express?',
    english: 'Select the best description.',
    correctAnswer: 'Something is not always or necessarily true',
    options: [
      'Something is not always or necessarily true',
      'Something is completely false',
      'Something is definitely true',
      'Something should not be done',
    ],
    explanation:
      'とは限らない expresses that a general assumption or belief is not always the case.',
  },
  {
    id: 'n3-tohakagiranai-mc-2',
    pattern: 'とは限らない',
    type: 'multiple_choice',
    sentence: 'How does とは限らない differ from わけではない?',
    english: 'Select the most accurate distinction.',
    correctAnswer: 'とは限らない challenges general assumptions; わけではない makes personal clarifications',
    options: [
      'とは限らない challenges general assumptions; わけではない makes personal clarifications',
      'They are exactly the same',
      'わけではない is stronger',
      'とは限らない is only used in formal writing',
    ],
    explanation:
      'とは限らない challenges widely held beliefs or generalizations, while わけではない clarifies that something is not entirely the case in a specific context.',
  },

  // ===========================================================================
  // さえ...ば (if only; as long as)
  // ===========================================================================
  {
    id: 'n3-saeba-fib-1',
    pattern: 'さえ...ば',
    type: 'fill_in_blank',
    sentence: 'お金＿＿＿あれ＿＿＿、世界中を旅行できるのに。',
    english: 'If only I had money, I could travel around the world.',
    correctAnswer: 'さえ...ば',
    options: ['さえ...ば', 'でも...ば', 'だけ...ば', 'こそ...ば'],
    explanation:
      'さえ...ば expresses that one single condition is sufficient — "if only X, then..."',
  },
  {
    id: 'n3-saeba-fib-2',
    pattern: 'さえ...ば',
    type: 'fill_in_blank',
    sentence: '薬を飲み＿＿＿すれ＿＿＿、すぐ元気になるよ。',
    english: 'As long as you take the medicine, you will get better quickly.',
    correctAnswer: 'さえ...ば',
    options: ['さえ...ば', 'だけ...ば', 'ても...ば', 'こそ...ば'],
    explanation:
      'さえ...ば with verb stem: 飲みさえすれば — "as long as you just take it."',
  },
  {
    id: 'n3-saeba-fib-3',
    pattern: 'さえ...ば',
    type: 'fill_in_blank',
    sentence: '天気＿＿＿よけれ＿＿＿、ピクニックに行こう。',
    english: 'As long as the weather is good, let us go on a picnic.',
    correctAnswer: 'さえ...ば',
    options: ['さえ...ば', 'でも...ば', 'しか...ば', 'だけ...ば'],
    explanation:
      'さえ...ば with adjective: 天気さえよければ — the weather being good is the only condition needed.',
  },
  {
    id: 'n3-saeba-mc-1',
    pattern: 'さえ...ば',
    type: 'multiple_choice',
    sentence: 'What does さえ...ば emphasize?',
    english: 'Select the best description.',
    correctAnswer: 'A single minimum condition that is sufficient',
    options: [
      'A single minimum condition that is sufficient',
      'Multiple conditions that must all be met',
      'A condition that is impossible to meet',
      'A condition that has already been met',
    ],
    explanation:
      'さえ...ば highlights that just one condition is enough — "if only/as long as this one thing."',
  },
  {
    id: 'n3-saeba-mc-2',
    pattern: 'さえ...ば',
    type: 'multiple_choice',
    sentence: 'Which is the correct way to use さえ...ば with a verb?',
    english: 'Select the correct structure.',
    correctAnswer: 'Verb stem + さえすれば (e.g., 食べさえすれば)',
    options: [
      'Verb stem + さえすれば (e.g., 食べさえすれば)',
      'Verb dictionary form + さえば (e.g., 食べるさえば)',
      'Verb て-form + さえば (e.g., 食べてさえば)',
      'Verb ます-form + さえば (e.g., 食べますさえば)',
    ],
    explanation:
      'With verbs, the pattern is: verb stem + さえすれば (e.g., 食べさえすれば).',
  },

  // ===========================================================================
  // 以上 (since; now that; as long as)
  // ===========================================================================
  {
    id: 'n3-ijou-fib-1',
    pattern: '以上',
    type: 'fill_in_blank',
    sentence: '約束した＿＿＿、必ず守らなければならない。',
    english: 'Now that I have made a promise, I must keep it.',
    correctAnswer: '以上',
    options: ['以上', '以下', '以外', '以内'],
    explanation:
      '以上 (いじょう) expresses "now that" — since the promise was made, keeping it is an obligation.',
  },
  {
    id: 'n3-ijou-fib-2',
    pattern: '以上',
    type: 'fill_in_blank',
    sentence: '引き受けた＿＿＿、最後までやり遂げるべきだ。',
    english: 'Now that I have taken it on, I should see it through to the end.',
    correctAnswer: '以上',
    options: ['以上', '上で', '以外', 'からには'],
    explanation:
      '以上 emphasizes that having accepted the task creates an obligation to complete it.',
  },
  {
    id: 'n3-ijou-fib-3',
    pattern: '以上',
    type: 'fill_in_blank',
    sentence: '学生である＿＿＿、勉強を最優先にするべきだ。',
    english: 'As long as you are a student, you should prioritize studying.',
    correctAnswer: '以上',
    options: ['以上', '以下', '上で', '限り'],
    explanation:
      '以上 with a state (being a student) expresses "as long as that is the case."',
  },
  {
    id: 'n3-ijou-mc-1',
    pattern: '以上',
    type: 'multiple_choice',
    sentence: 'In the grammar pattern V-た以上, what does 以上 express?',
    english: 'Select the best description.',
    correctAnswer: '"Now that..." — a commitment or obligation arising from a prior action',
    options: [
      '"Now that..." — a commitment or obligation arising from a prior action',
      '"More than" — a quantity comparison',
      '"The best" — a superlative',
      '"Before" — a temporal marker',
    ],
    explanation:
      'As a grammar pattern, 以上 means "now that" or "since" and implies a resulting obligation or determination.',
  },
  {
    id: 'n3-ijou-mc-2',
    pattern: '以上',
    type: 'multiple_choice',
    sentence: 'What typically follows a sentence using 以上 (the grammar pattern)?',
    english: 'Select the most common pattern.',
    correctAnswer: 'An expression of obligation, determination, or resolve',
    options: [
      'An expression of obligation, determination, or resolve',
      'A casual invitation',
      'An expression of uncertainty',
      'A description of a past event',
    ],
    explanation:
      '以上 as "now that" is typically followed by expressions of duty, resolve, or necessity (べきだ, なければならない, つもりだ, etc.).',
  },

  // ===========================================================================
  // 上で (after; upon; for the purpose of)
  // ===========================================================================
  {
    id: 'n3-uede-fib-1',
    pattern: '上で',
    type: 'fill_in_blank',
    sentence: 'よく考えた＿＿＿、この会社に入ることに決めた。',
    english: 'After thinking carefully, I decided to join this company.',
    correctAnswer: '上で',
    options: ['上で', '以上', 'ために', 'あとで'],
    explanation:
      '上で after past tense means "after doing X" with the nuance that X was done thoroughly before the decision.',
  },
  {
    id: 'n3-uede-fib-2',
    pattern: '上で',
    type: 'fill_in_blank',
    sentence: '契約書をよく読んだ＿＿＿、サインしてください。',
    english: 'After reading the contract carefully, please sign it.',
    correctAnswer: '上で',
    options: ['上で', '上に', '以上', 'ところで'],
    explanation:
      '上で indicates that reading the contract carefully is a prerequisite before signing.',
  },
  {
    id: 'n3-uede-fib-3',
    pattern: '上で',
    type: 'fill_in_blank',
    sentence: '日本語を学ぶ＿＿＿、漢字の知識は欠かせない。',
    english: 'For the purpose of learning Japanese, knowledge of kanji is indispensable.',
    correctAnswer: '上で',
    options: ['上で', '上に', '以上', 'ために'],
    explanation:
      '上で with dictionary form means "for the purpose of" or "in the process of."',
  },
  {
    id: 'n3-uede-mc-1',
    pattern: '上で',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of 上で as a grammar pattern?',
    english: 'Select the best description.',
    correctAnswer: '"After doing X" (with た-form) and "for the purpose of X" (with dictionary form)',
    options: [
      '"After doing X" (with た-form) and "for the purpose of X" (with dictionary form)',
      '"Above X" and "on top of X"',
      '"More than X" and "less than X"',
      '"Before X" and "during X"',
    ],
    explanation:
      '上で has two uses: た-form + 上で = "after doing"; dictionary form + 上で = "for the purpose of / when doing."',
  },
  {
    id: 'n3-uede-mc-2',
    pattern: '上で',
    type: 'multiple_choice',
    sentence: 'How does 上で differ from あとで?',
    english: 'Select the most accurate distinction.',
    correctAnswer: '上で implies the first action is a deliberate prerequisite; あとで is simply temporal',
    options: [
      '上で implies the first action is a deliberate prerequisite; あとで is simply temporal',
      'They are completely interchangeable',
      'あとで is more formal than 上で',
      '上で can only be used with nouns',
    ],
    explanation:
      '上で implies that the preceding action was done carefully and deliberately as a basis for the next, while あとで simply marks temporal sequence.',
  },

  // ===========================================================================
  // ないわけにはいかない (cannot not do; must do)
  // ===========================================================================
  {
    id: 'n3-naiwakenihaikanai-fib-1',
    pattern: 'ないわけにはいかない',
    type: 'fill_in_blank',
    sentence: '招待されたので、行か＿＿＿。',
    english: 'Since I was invited, I cannot not go (I must go).',
    correctAnswer: 'ないわけにはいかない',
    options: ['ないわけにはいかない', 'なければならない', 'ないことはない', 'なくてもいい'],
    explanation:
      'ないわけにはいかない is a double negative meaning "cannot not do" — effectively "must do" with reluctance or external pressure.',
  },
  {
    id: 'n3-naiwakenihaikanai-fib-2',
    pattern: 'ないわけにはいかない',
    type: 'fill_in_blank',
    sentence: 'みんなが残業しているので、自分だけ帰ら＿＿＿。',
    english: 'Since everyone is working overtime, I cannot just not stay (I have to stay too).',
    correctAnswer: 'ないわけにはいかない',
    options: ['ないわけにはいかない', 'ないことはない', 'なくてはいけない', 'ないものだ'],
    explanation:
      'ないわけにはいかない expresses social pressure — it would be wrong to leave when everyone else stays.',
  },
  {
    id: 'n3-naiwakenihaikanai-fib-3',
    pattern: 'ないわけにはいかない',
    type: 'fill_in_blank',
    sentence: 'お世話になった先生に、お礼を言わ＿＿＿。',
    english: 'I cannot not thank the teacher who helped me (I must thank them).',
    correctAnswer: 'ないわけにはいかない',
    options: ['ないわけにはいかない', 'なければならない', 'ないことはない', 'ないわけではない'],
    explanation:
      'ないわけにはいかない expresses that gratitude demands the action — it would be wrong not to thank them.',
  },
  {
    id: 'n3-naiwakenihaikanai-mc-1',
    pattern: 'ないわけにはいかない',
    type: 'multiple_choice',
    sentence: 'How does ないわけにはいかない relate to わけにはいかない?',
    english: 'Select the best description.',
    correctAnswer: 'わけにはいかない = "cannot do X"; ないわけにはいかない = "cannot not do X" (must do)',
    options: [
      'わけにはいかない = "cannot do X"; ないわけにはいかない = "cannot not do X" (must do)',
      'They mean exactly the same thing',
      'ないわけにはいかない is the past tense of わけにはいかない',
      'ないわけにはいかない is more casual',
    ],
    explanation:
      'They are opposite in meaning: わけにはいかない means you cannot do something, while ないわけにはいかない (double negative) means you must do it.',
  },
  {
    id: 'n3-naiwakenihaikanai-mc-2',
    pattern: 'ないわけにはいかない',
    type: 'multiple_choice',
    sentence: 'What nuance does ないわけにはいかない carry compared to なければならない?',
    english: 'Select the most accurate description.',
    correctAnswer: 'It emphasizes social or moral pressure rather than simple obligation',
    options: [
      'It emphasizes social or moral pressure rather than simple obligation',
      'It is more casual and light',
      'It expresses a weaker obligation',
      'It is only used in written Japanese',
    ],
    explanation:
      'ないわけにはいかない implies that external social or moral circumstances make the action unavoidable, adding more weight than simple なければならない.',
  },

  // ===========================================================================
  // べきだ (should; ought to)
  // ===========================================================================
  {
    id: 'n3-bekida-fib-1',
    pattern: 'べきだ',
    type: 'fill_in_blank',
    sentence: '健康のために、もっと運動する＿＿＿。',
    english: 'For your health, you should exercise more.',
    correctAnswer: 'べきだ',
    options: ['べきだ', 'ものだ', 'わけだ', 'ことだ'],
    explanation:
      'べきだ expresses a strong recommendation or moral obligation — you should exercise.',
  },
  {
    id: 'n3-bekida-fib-2',
    pattern: 'べきだ',
    type: 'fill_in_blank',
    sentence: '大事なことは、自分で決める＿＿＿。',
    english: 'You should decide important things by yourself.',
    correctAnswer: 'べきだ',
    options: ['べきだ', 'ことだ', 'ものだ', 'はずだ'],
    explanation:
      'べきだ advises that making one\'s own decisions on important matters is the right thing to do.',
  },
  {
    id: 'n3-bekida-fib-3',
    pattern: 'べきだ',
    type: 'fill_in_blank',
    sentence: '学生は授業中にスマホを使う＿＿＿。',
    english: 'Students should not use smartphones during class.',
    correctAnswer: 'べきではない',
    options: ['べきではない', 'べきだ', 'わけではない', 'ものではない'],
    explanation:
      'べきではない is the negative form — students ought not to use phones in class.',
  },
  {
    id: 'n3-bekida-mc-1',
    pattern: 'べきだ',
    type: 'multiple_choice',
    sentence: 'What type of advice does べきだ express?',
    english: 'Select the best description.',
    correctAnswer: 'Strong moral or social obligation — what one ought to do',
    options: [
      'Strong moral or social obligation — what one ought to do',
      'A casual suggestion with no pressure',
      'A physical necessity',
      'An uncertain possibility',
    ],
    explanation:
      'べきだ carries a strong sense of duty or moral obligation — it is more forceful than たほうがいい.',
  },
  {
    id: 'n3-bekida-mc-2',
    pattern: 'べきだ',
    type: 'multiple_choice',
    sentence: 'What is the べきだ form of する?',
    english: 'Select the correct form(s).',
    correctAnswer: 'Both するべきだ and すべきだ are correct',
    options: [
      'Both するべきだ and すべきだ are correct',
      'Only するべきだ is correct',
      'Only すべきだ is correct',
      'Neither — する cannot be used with べきだ',
    ],
    explanation:
      'する is special: both するべきだ and the contracted すべきだ are accepted forms.',
  },

  // ===========================================================================
  // おそれがある (there is a risk/fear that)
  // ===========================================================================
  {
    id: 'n3-osoregaaru-fib-1',
    pattern: 'おそれがある',
    type: 'fill_in_blank',
    sentence: '台風が近づいており、洪水が起こる＿＿＿。',
    english: 'A typhoon is approaching, and there is a risk of flooding.',
    correctAnswer: 'おそれがある',
    options: ['おそれがある', 'に違いない', 'かもしれない', 'はずだ'],
    explanation:
      'おそれがある formally warns about the risk of flooding due to the typhoon.',
  },
  {
    id: 'n3-osoregaaru-fib-2',
    pattern: 'おそれがある',
    type: 'fill_in_blank',
    sentence: 'この薬には副作用が出る＿＿＿。',
    english: 'There is a risk that this medicine may cause side effects.',
    correctAnswer: 'おそれがある',
    options: ['おそれがある', 'わけがある', 'ことがある', 'ものだ'],
    explanation:
      'おそれがある is used in formal/official contexts to warn about potential negative outcomes.',
  },
  {
    id: 'n3-osoregaaru-fib-3',
    pattern: 'おそれがある',
    type: 'fill_in_blank',
    sentence: '個人情報が漏れる＿＿＿ので、注意してください。',
    english: 'There is a risk of personal information being leaked, so please be careful.',
    correctAnswer: 'おそれがある',
    options: ['おそれがある', 'に違いない', 'わけだ', 'べきだ'],
    explanation:
      'おそれがある warns about the danger of a data leak in a formal tone.',
  },
  {
    id: 'n3-osoregaaru-mc-1',
    pattern: 'おそれがある',
    type: 'multiple_choice',
    sentence: 'In what context is おそれがある most commonly used?',
    english: 'Select the best description.',
    correctAnswer: 'Formal warnings about negative risks (news, official documents)',
    options: [
      'Formal warnings about negative risks (news, official documents)',
      'Casual conversation about future plans',
      'Expressing personal wishes',
      'Describing past events',
    ],
    explanation:
      'おそれがある is characteristic of formal language — news reports, official warnings, and documents about potential dangers.',
  },
  {
    id: 'n3-osoregaaru-mc-2',
    pattern: 'おそれがある',
    type: 'multiple_choice',
    sentence: 'How does おそれがある differ from かもしれない?',
    english: 'Select the most accurate distinction.',
    correctAnswer: 'おそれがある is formal and warns about negative risks; かもしれない is general possibility',
    options: [
      'おそれがある is formal and warns about negative risks; かもしれない is general possibility',
      'They are completely interchangeable',
      'かもしれない is more formal',
      'おそれがある can be used for positive things',
    ],
    explanation:
      'おそれがある is specifically for negative outcomes in formal contexts, while かもしれない is neutral and used in everyday speech for any possibility.',
  },

  // ===========================================================================
  // ことはない (there is no need to; it is not necessary to)
  // ===========================================================================
  {
    id: 'n3-kotowanai-fib-1',
    pattern: 'ことはない',
    type: 'fill_in_blank',
    sentence: 'そんなに心配する＿＿＿。きっとうまくいくよ。',
    english: 'There is no need to worry that much. It will surely go well.',
    correctAnswer: 'ことはない',
    options: ['ことはない', 'わけがない', 'はずがない', 'ものではない'],
    explanation:
      'ことはない reassures the listener that worrying is unnecessary.',
  },
  {
    id: 'n3-kotowanai-fib-2',
    pattern: 'ことはない',
    type: 'fill_in_blank',
    sentence: '簡単な手術だから、怖がる＿＿＿。',
    english: 'It is a simple surgery, so there is no need to be scared.',
    correctAnswer: 'ことはない',
    options: ['ことはない', 'わけではない', 'に違いない', 'べきではない'],
    explanation:
      'ことはない tells the listener that being afraid is unnecessary given the simple nature of the surgery.',
  },
  {
    id: 'n3-kotowanai-fib-3',
    pattern: 'ことはない',
    type: 'fill_in_blank',
    sentence: 'わざわざ買いに行く＿＿＿。ネットで注文できるよ。',
    english: 'There is no need to go out of your way to buy it. You can order it online.',
    correctAnswer: 'ことはない',
    options: ['ことはない', 'わけにはいかない', 'ものだ', 'べきだ'],
    explanation:
      'ことはない suggests that making a special trip is unnecessary since online ordering is available.',
  },
  {
    id: 'n3-kotowanai-mc-1',
    pattern: 'ことはない',
    type: 'multiple_choice',
    sentence: 'What does dictionary form + ことはない express?',
    english: 'Select the best description.',
    correctAnswer: 'There is no need to do something',
    options: [
      'There is no need to do something',
      'Something has never happened',
      'Something is impossible',
      'Something must be done',
    ],
    explanation:
      'Dictionary form + ことはない means "there is no need to." (Note: た-form + ことはない would mean "have never done.")',
  },
  {
    id: 'n3-kotowanai-mc-2',
    pattern: 'ことはない',
    type: 'multiple_choice',
    sentence: 'Which situation is ことはない most appropriate for?',
    english: 'Select the best scenario.',
    correctAnswer: 'Reassuring someone that their worry is unnecessary',
    options: [
      'Reassuring someone that their worry is unnecessary',
      'Giving a strict order',
      'Expressing anger about something',
      'Describing a past experience',
    ],
    explanation:
      'ことはない is typically used to comfort or reassure someone that they do not need to worry or make extra effort.',
  },

  // ===========================================================================
  // てたまらない (unbearably; cannot stand; extremely)
  // ===========================================================================
  {
    id: 'n3-tetamaranai-fib-1',
    pattern: 'てたまらない',
    type: 'fill_in_blank',
    sentence: '夏の暑さが厳しくて、暑く＿＿＿。',
    english: 'The summer heat is severe, and it is unbearably hot.',
    correctAnswer: 'てたまらない',
    options: ['てたまらない', 'てしかたがない', 'てならない', 'てばかりいる'],
    explanation:
      'てたまらない expresses an intense, almost unbearable feeling — the heat is overwhelming.',
  },
  {
    id: 'n3-tetamaranai-fib-2',
    pattern: 'てたまらない',
    type: 'fill_in_blank',
    sentence: '朝から何も食べていないので、おなかがすい＿＿＿。',
    english: 'I have not eaten anything since morning, so I am unbearably hungry.',
    correctAnswer: 'てたまらない',
    options: ['てたまらない', 'てならない', 'てしかたがない', 'てばかりだ'],
    explanation:
      'てたまらない conveys that the hunger is so intense it is hard to bear.',
  },
  {
    id: 'n3-tetamaranai-fib-3',
    pattern: 'てたまらない',
    type: 'fill_in_blank',
    sentence: '合格発表の前で、緊張し＿＿＿。',
    english: 'Before the results announcement, I am unbearably nervous.',
    correctAnswer: 'てたまらない',
    options: ['てたまらない', 'てならない', 'てしかたがない', 'ているところだ'],
    explanation:
      'てたまらない expresses the overwhelming, almost unbearable tension before learning the results.',
  },
  {
    id: 'n3-tetamaranai-mc-1',
    pattern: 'てたまらない',
    type: 'multiple_choice',
    sentence: 'What kind of feelings does てたまらない describe?',
    english: 'Select the best description.',
    correctAnswer: 'Intense, involuntary feelings that are hard to bear',
    options: [
      'Intense, involuntary feelings that are hard to bear',
      'Mild, passing emotions',
      'Deliberate, controlled actions',
      'Neutral observations about others',
    ],
    explanation:
      'てたまらない is used for strong, involuntary sensations or emotions that the speaker can barely stand.',
  },
  {
    id: 'n3-tetamaranai-mc-2',
    pattern: 'てたまらない',
    type: 'multiple_choice',
    sentence: 'How does てたまらない differ from てならない?',
    english: 'Select the most accurate distinction.',
    correctAnswer: 'てたまらない is for physical/emotional sensations; てならない is broader and slightly more literary',
    options: [
      'てたまらない is for physical/emotional sensations; てならない is broader and slightly more literary',
      'They are exactly the same in all contexts',
      'てならない is more casual',
      'てたまらない can only be used with verbs',
    ],
    explanation:
      'てたまらない emphasizes physical or emotional intensity (hunger, heat, nervousness), while てならない is slightly more literary and can also describe thoughts or feelings that arise spontaneously.',
  },
  // ===========================================================================
  // てならない (can't help but feel / unbearably)
  // ===========================================================================
  {
    id: 'n3-tenaranai-fib-1',
    pattern: 'てならない',
    type: 'fill_in_blank',
    sentence: '故郷のことが懐かしく＿＿＿。',
    english: 'I can\'t help but feel nostalgic about my hometown.',
    correctAnswer: 'てならない',
    options: ['てならない', 'てたまらない', 'てはいけない', 'てしかたない'],
    explanation:
      'てならない expresses an uncontrollable feeling that arises naturally. 懐かしくてならない = can\'t help feeling nostalgic.',
  },
  {
    id: 'n3-tenaranai-fib-2',
    pattern: 'てならない',
    type: 'fill_in_blank',
    sentence: '明日の試験の結果が気になっ＿＿＿。',
    english: 'I can\'t stop worrying about tomorrow\'s exam results.',
    correctAnswer: 'てならない',
    options: ['てならない', 'てはならない', 'てもいい', 'てばかりだ'],
    explanation:
      'てならない expresses an involuntary feeling. 気になってならない = can\'t help but be concerned.',
  },
  {
    id: 'n3-tenaranai-fib-3',
    pattern: 'てならない',
    type: 'fill_in_blank',
    sentence: '彼の成功がうらやましく＿＿＿。',
    english: 'I can\'t help but envy his success.',
    correctAnswer: 'てならない',
    options: ['てならない', 'てはいけない', 'ていられない', 'てもかまわない'],
    explanation:
      'てならない follows adjectives and verbs of emotion to express uncontrollable feelings. うらやましくてならない = unbearably envious.',
  },
  {
    id: 'n3-tenaranai-mc-1',
    pattern: 'てならない',
    type: 'multiple_choice',
    sentence: 'What does てならない express?',
    english: 'Select the best description of てならない.',
    correctAnswer: 'An uncontrollable feeling or sensation',
    options: [
      'An uncontrollable feeling or sensation',
      'A prohibition or rule',
      'A deliberate action',
      'A request or command',
    ],
    explanation:
      'てならない expresses feelings or sensations that arise naturally and cannot be suppressed, such as curiosity, nostalgia, or worry.',
  },
  {
    id: 'n3-tenaranai-mc-2',
    pattern: 'てならない',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses てならない?',
    english: 'Select the grammatically correct sentence.',
    correctAnswer: '子供の将来が心配でならない。',
    options: [
      '子供の将来が心配でならない。',
      'ここで走ってならない。',
      '早く帰ってならない。',
      '本を読んでならない。',
    ],
    explanation:
      'てならない attaches to emotion/sensation words. 心配でならない = can\'t help worrying. The other options misuse it as a prohibition (てはならない).',
  },

  // ===========================================================================
  // ようがない (there is no way to)
  // ===========================================================================
  {
    id: 'n3-youganai-fib-1',
    pattern: 'ようがない',
    type: 'fill_in_blank',
    sentence: '住所がわからないので、手紙の送り＿＿＿。',
    english: 'I don\'t know the address, so there\'s no way to send the letter.',
    correctAnswer: 'ようがない',
    options: ['ようがない', 'そうにない', 'わけがない', 'はずがない'],
    explanation:
      'ようがない means "there is no way to do something." 送りようがない = there is no way to send it.',
  },
  {
    id: 'n3-youganai-fib-2',
    pattern: 'ようがない',
    type: 'fill_in_blank',
    sentence: '証拠がないので、証明し＿＿＿。',
    english: 'There is no evidence, so there is no way to prove it.',
    correctAnswer: 'ようがない',
    options: ['ようがない', 'ようとする', 'ようにする', 'ようになる'],
    explanation:
      'ようがない follows the verb stem (masu-form minus ます) to express impossibility. 証明しようがない = no way to prove.',
  },
  {
    id: 'n3-youganai-fib-3',
    pattern: 'ようがない',
    type: 'fill_in_blank',
    sentence: 'パスワードを忘れたら、ログインし＿＿＿。',
    english: 'If you forget the password, there\'s no way to log in.',
    correctAnswer: 'ようがない',
    options: ['ようがない', 'ようとした', 'なくてもいい', 'ざるをえない'],
    explanation:
      'ようがない expresses that no method exists to accomplish the action. ログインしようがない = no way to log in.',
  },
  {
    id: 'n3-youganai-mc-1',
    pattern: 'ようがない',
    type: 'multiple_choice',
    sentence: 'What does ようがない express?',
    english: 'Select the best description.',
    correctAnswer: 'There is no way or method to do something',
    options: [
      'There is no way or method to do something',
      'There is no reason to do something',
      'It is not necessary to do something',
      'One should not do something',
    ],
    explanation:
      'ようがない means there is no means or method to accomplish the action, often because a prerequisite is missing.',
  },
  {
    id: 'n3-youganai-mc-2',
    pattern: 'ようがない',
    type: 'multiple_choice',
    sentence: 'How is ようがない formed?',
    english: 'Select the correct formation.',
    correctAnswer: 'Verb masu-stem + ようがない',
    options: [
      'Verb masu-stem + ようがない',
      'Verb dictionary form + ようがない',
      'Verb te-form + ようがない',
      'Verb plain past + ようがない',
    ],
    explanation:
      'ようがない attaches to the masu-stem of a verb: 送ります → 送り + ようがない.',
  },

  // ===========================================================================
  // っぽい (seems like / -ish / tends to)
  // ===========================================================================
  {
    id: 'n3-ppoi-fib-1',
    pattern: 'っぽい',
    type: 'fill_in_blank',
    sentence: 'あの人は怒り＿＿＿性格だ。',
    english: 'That person has a temperament that is prone to anger.',
    correctAnswer: 'っぽい',
    options: ['っぽい', 'らしい', 'みたいな', 'そうな'],
    explanation:
      'っぽい after a verb stem indicates a tendency. 怒りっぽい = easily angered, short-tempered.',
  },
  {
    id: 'n3-ppoi-fib-2',
    pattern: 'っぽい',
    type: 'fill_in_blank',
    sentence: 'この色は白＿＿＿ね。',
    english: 'This color is whitish, isn\'t it?',
    correctAnswer: 'っぽい',
    options: ['っぽい', 'らしい', 'みたいだ', 'そうだ'],
    explanation:
      'っぽい after a color or noun means "-ish" or "having the quality of." 白っぽい = whitish.',
  },
  {
    id: 'n3-ppoi-fib-3',
    pattern: 'っぽい',
    type: 'fill_in_blank',
    sentence: '最近、忘れ＿＿＿なっている。',
    english: 'Lately, I\'ve become forgetful.',
    correctAnswer: 'っぽく',
    options: ['っぽく', 'らしく', 'みたいに', 'そうに'],
    explanation:
      'っぽい conjugates like an い-adjective. 忘れっぽくなる = become forgetful. っぽく is the adverbial form.',
  },
  {
    id: 'n3-ppoi-mc-1',
    pattern: 'っぽい',
    type: 'multiple_choice',
    sentence: 'What nuance does っぽい add when attached to a verb stem?',
    english: 'Select the best description.',
    correctAnswer: 'A tendency to do something (often negatively)',
    options: [
      'A tendency to do something (often negatively)',
      'A desire to do something',
      'An ability to do something',
      'An obligation to do something',
    ],
    explanation:
      'When attached to a verb stem, っぽい indicates a tendency, often with a slightly negative connotation: 飽きっぽい (easily bored), 忘れっぽい (forgetful).',
  },
  {
    id: 'n3-ppoi-mc-2',
    pattern: 'っぽい',
    type: 'multiple_choice',
    sentence: 'Which of the following correctly uses っぽい?',
    english: 'Select the correct sentence.',
    correctAnswer: '彼女の服装は男っぽい。',
    options: [
      '彼女の服装は男っぽい。',
      '彼女の服装は男っぽいだ。',
      '彼女の服装は男をっぽい。',
      '彼女の服装は男なっぽい。',
    ],
    explanation:
      'っぽい attaches directly to a noun. 男っぽい = masculine, boyish. It conjugates as an い-adjective, so no だ after it.',
  },

  // ===========================================================================
  // がちだ (tend to / prone to)
  // ===========================================================================
  {
    id: 'n3-gachida-fib-1',
    pattern: 'がちだ',
    type: 'fill_in_blank',
    sentence: '冬は風邪をひき＿＿＿。',
    english: 'In winter, one tends to catch colds.',
    correctAnswer: 'がちだ',
    options: ['がちだ', 'っぽい', 'そうだ', 'らしい'],
    explanation:
      'がちだ expresses a tendency, often negative. ひきがちだ = tend to catch (colds).',
  },
  {
    id: 'n3-gachida-fib-2',
    pattern: 'がちだ',
    type: 'fill_in_blank',
    sentence: '彼は会議に遅れ＿＿＿。',
    english: 'He tends to be late to meetings.',
    correctAnswer: 'がちだ',
    options: ['がちだ', 'ぎみだ', 'かけだ', 'きりだ'],
    explanation:
      'がちだ after a verb stem indicates an undesirable tendency. 遅れがちだ = tends to be late.',
  },
  {
    id: 'n3-gachida-fib-3',
    pattern: 'がちだ',
    type: 'fill_in_blank',
    sentence: '忙しいと、食事を抜き＿＿＿になる。',
    english: 'When busy, I tend to skip meals.',
    correctAnswer: 'がち',
    options: ['がち', 'っぽく', 'そう', 'らしく'],
    explanation:
      'がち can be used as a な-adjective: 抜きがちになる = tend to start skipping.',
  },
  {
    id: 'n3-gachida-mc-1',
    pattern: 'がちだ',
    type: 'multiple_choice',
    sentence: 'What connotation does がちだ typically carry?',
    english: 'Select the best description.',
    correctAnswer: 'A negative or undesirable tendency',
    options: [
      'A negative or undesirable tendency',
      'A positive and desirable habit',
      'A completed action',
      'An impossible situation',
    ],
    explanation:
      'がちだ almost always describes negative tendencies: being absent, being late, getting sick, etc.',
  },
  {
    id: 'n3-gachida-mc-2',
    pattern: 'がちだ',
    type: 'multiple_choice',
    sentence: 'How is がちだ formed?',
    english: 'Select the correct formation.',
    correctAnswer: 'Verb masu-stem + がちだ / Noun + がちだ',
    options: [
      'Verb masu-stem + がちだ / Noun + がちだ',
      'Verb dictionary form + がちだ',
      'Verb te-form + がちだ',
      'Verb plain past + がちだ',
    ],
    explanation:
      'がちだ attaches to the masu-stem of verbs (忘れがち) or directly to nouns (病気がち).',
  },

  // ===========================================================================
  // 気味 (a touch of / slightly / -ish)
  // ===========================================================================
  {
    id: 'n3-gimi-fib-1',
    pattern: '気味',
    type: 'fill_in_blank',
    sentence: '最近、太り＿＿＿なので、運動を始めた。',
    english: 'I\'ve been gaining a bit of weight lately, so I started exercising.',
    correctAnswer: '気味',
    options: ['気味', 'がち', 'っぽい', 'そう'],
    explanation:
      '気味（ぎみ）indicates a slight tendency or condition. 太り気味 = slightly overweight / tending to gain weight.',
  },
  {
    id: 'n3-gimi-fib-2',
    pattern: '気味',
    type: 'fill_in_blank',
    sentence: '風邪＿＿＿だから、今日は早く寝よう。',
    english: 'I\'m coming down with a bit of a cold, so I\'ll go to bed early today.',
    correctAnswer: '気味',
    options: ['気味', 'がち', 'っぽい', 'みたい'],
    explanation:
      '風邪気味 = having a slight cold, feeling a bit under the weather.',
  },
  {
    id: 'n3-gimi-fib-3',
    pattern: '気味',
    type: 'fill_in_blank',
    sentence: '仕事が遅れ＿＿＿で、上司に注意された。',
    english: 'Work was running a bit behind schedule, and my boss warned me.',
    correctAnswer: '気味',
    options: ['気味', 'かけ', 'きり', 'だらけ'],
    explanation:
      '遅れ気味 = slightly behind schedule. 気味 attaches to a verb stem to indicate a mild degree.',
  },
  {
    id: 'n3-gimi-mc-1',
    pattern: '気味',
    type: 'multiple_choice',
    sentence: 'What does 気味（ぎみ）express?',
    english: 'Select the best description.',
    correctAnswer: 'A slight tendency or mild condition',
    options: [
      'A slight tendency or mild condition',
      'A strong and definite state',
      'An impossible situation',
      'A completed action',
    ],
    explanation:
      '気味 indicates something is slightly or somewhat the case — a mild degree of a condition.',
  },
  {
    id: 'n3-gimi-mc-2',
    pattern: '気味',
    type: 'multiple_choice',
    sentence: 'How does 気味 differ from がち?',
    english: 'Select the best distinction.',
    correctAnswer: '気味 describes a current mild state; がち describes a repeated tendency',
    options: [
      '気味 describes a current mild state; がち describes a repeated tendency',
      '気味 is formal; がち is casual',
      '気味 is positive; がち is negative',
      'They are completely interchangeable',
    ],
    explanation:
      '気味 focuses on the current condition being slightly X, while がち emphasizes a habitual tendency to do/be X.',
  },

  // ===========================================================================
  // きる (to do completely / to the end)
  // ===========================================================================
  {
    id: 'n3-kiru-fib-1',
    pattern: 'きる',
    type: 'fill_in_blank',
    sentence: 'マラソンを走り＿＿＿ことができた。',
    english: 'I was able to run the marathon to the very end.',
    correctAnswer: 'きる',
    options: ['きる', 'かける', 'だす', 'つづける'],
    explanation:
      'きる means to do something completely or to the end. 走りきる = run all the way through.',
  },
  {
    id: 'n3-kiru-fib-2',
    pattern: 'きる',
    type: 'fill_in_blank',
    sentence: 'この本は一日で読み＿＿＿た。',
    english: 'I read this entire book in one day.',
    correctAnswer: 'きっ',
    options: ['きっ', 'かけ', 'だし', 'つづけ'],
    explanation:
      'きる in past tense: 読みきった = finished reading completely. きる conjugates as a godan verb (きった → きっ + た).',
  },
  {
    id: 'n3-kiru-fib-3',
    pattern: 'きる',
    type: 'fill_in_blank',
    sentence: 'あまりにも多くて、食べ＿＿＿ない。',
    english: 'There\'s too much; I can\'t eat it all.',
    correctAnswer: 'きれ',
    options: ['きれ', 'かけ', 'だせ', 'つづけ'],
    explanation:
      'きれない = cannot do completely. 食べきれない = can\'t finish eating it all.',
  },
  {
    id: 'n3-kiru-mc-1',
    pattern: 'きる',
    type: 'multiple_choice',
    sentence: 'What does きる express when attached to a verb?',
    english: 'Select the best description.',
    correctAnswer: 'Doing something completely or to the limit',
    options: [
      'Doing something completely or to the limit',
      'Starting to do something',
      'Doing something halfway',
      'Doing something by accident',
    ],
    explanation:
      'きる as a compound verb suffix means to carry out an action thoroughly, completely, or to the very end.',
  },
  {
    id: 'n3-kiru-mc-2',
    pattern: 'きる',
    type: 'multiple_choice',
    sentence: 'What does 使いきる mean?',
    english: 'Select the correct meaning.',
    correctAnswer: 'To use up completely',
    options: [
      'To use up completely',
      'To start using',
      'To use halfway',
      'To stop using',
    ],
    explanation:
      '使いきる = to use something up entirely, to exhaust a supply. きる emphasizes completion.',
  },

  // ===========================================================================
  // かけ (half-done / in the middle of)
  // ===========================================================================
  {
    id: 'n3-kake-fib-1',
    pattern: 'かけ',
    type: 'fill_in_blank',
    sentence: 'テーブルの上に食べ＿＿＿のケーキがある。',
    english: 'There is a half-eaten cake on the table.',
    correctAnswer: 'かけ',
    options: ['かけ', 'きり', 'きった', 'だした'],
    explanation:
      'かけ as a noun modifier means half-done or partially completed. 食べかけ = half-eaten.',
  },
  {
    id: 'n3-kake-fib-2',
    pattern: 'かけ',
    type: 'fill_in_blank',
    sentence: '読み＿＿＿の本を本棚に戻した。',
    english: 'I put the half-read book back on the shelf.',
    correctAnswer: 'かけ',
    options: ['かけ', 'きれ', 'がち', 'っぽい'],
    explanation:
      '読みかけ = half-read, started but not finished reading. かけ attaches to the verb masu-stem.',
  },
  {
    id: 'n3-kake-fib-3',
    pattern: 'かけ',
    type: 'fill_in_blank',
    sentence: '彼女は何か言い＿＿＿て、やめた。',
    english: 'She started to say something but stopped.',
    correctAnswer: 'かけ',
    options: ['かけ', 'きっ', 'だし', 'つづけ'],
    explanation:
      'かける as a verb suffix means to be about to or start doing. 言いかけてやめた = started to say it but stopped.',
  },
  {
    id: 'n3-kake-mc-1',
    pattern: 'かけ',
    type: 'multiple_choice',
    sentence: 'What does かけ express?',
    english: 'Select the best description.',
    correctAnswer: 'An action that is half-done or just beginning',
    options: [
      'An action that is half-done or just beginning',
      'An action completed thoroughly',
      'An action done repeatedly',
      'An action done reluctantly',
    ],
    explanation:
      'かけ indicates that an action was started but not completed, or is in the middle of being done.',
  },
  {
    id: 'n3-kake-mc-2',
    pattern: 'かけ',
    type: 'multiple_choice',
    sentence: 'What does 書きかけの手紙 mean?',
    english: 'Select the correct meaning.',
    correctAnswer: 'A half-written letter',
    options: [
      'A half-written letter',
      'A letter written completely',
      'A letter about to be mailed',
      'A letter written beautifully',
    ],
    explanation:
      '書きかけ = half-written, started but not finished writing. The の makes it modify 手紙 (letter).',
  },

  // ===========================================================================
  // 一方で (on the other hand / while)
  // ===========================================================================
  {
    id: 'n3-ippoudE-fib-1',
    pattern: '一方で',
    type: 'fill_in_blank',
    sentence: '彼は厳しい＿＿＿、優しい面もある。',
    english: 'While he is strict, he also has a gentle side.',
    correctAnswer: '一方で',
    options: ['一方で', 'くせに', 'ものの', 'ところが'],
    explanation:
      '一方で presents a contrasting or additional perspective. 厳しい一方で = while being strict.',
  },
  {
    id: 'n3-ippoudE-fib-2',
    pattern: '一方で',
    type: 'fill_in_blank',
    sentence: '経済は成長している＿＿＿、格差も広がっている。',
    english: 'While the economy is growing, inequality is also widening.',
    correctAnswer: '一方で',
    options: ['一方で', 'ために', 'ことから', 'によって'],
    explanation:
      '一方で is used to present two simultaneous but contrasting situations.',
  },
  {
    id: 'n3-ippoudE-fib-3',
    pattern: '一方で',
    type: 'fill_in_blank',
    sentence: 'テクノロジーは便利な＿＿＿、危険もある。',
    english: 'While technology is convenient, it also poses risks.',
    correctAnswer: '一方で',
    options: ['一方で', 'わけで', 'ことで', 'うえで'],
    explanation:
      '一方で after な-adjective + な to contrast convenience with risk.',
  },
  {
    id: 'n3-ippoudE-mc-1',
    pattern: '一方で',
    type: 'multiple_choice',
    sentence: 'What function does 一方で serve?',
    english: 'Select the best description.',
    correctAnswer: 'Presenting a contrast or additional perspective',
    options: [
      'Presenting a contrast or additional perspective',
      'Expressing a cause and effect',
      'Making a strong demand',
      'Showing temporal sequence',
    ],
    explanation:
      '一方で means "on the other hand" or "while," used to juxtapose two facts, often contrasting.',
  },
  {
    id: 'n3-ippoudE-mc-2',
    pattern: '一方で',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses 一方で?',
    english: 'Select the correct sentence.',
    correctAnswer: '都市の人口が増える一方で、地方は減っている。',
    options: [
      '都市の人口が増える一方で、地方は減っている。',
      '雨が降った一方で、傘を持っていった。',
      '一方で、ありがとうございます。',
      '彼は一方で走っている。',
    ],
    explanation:
      '一方で connects two contrasting clauses. The first option correctly contrasts urban population growth with rural decline.',
  },

  // ===========================================================================
  // にもかかわらず (despite / in spite of)
  // ===========================================================================
  {
    id: 'n3-nimokakawarazu-fib-1',
    pattern: 'にもかかわらず',
    type: 'fill_in_blank',
    sentence: '雨が降っている＿＿＿、試合は続けられた。',
    english: 'Despite the rain, the game continued.',
    correctAnswer: 'にもかかわらず',
    options: ['にもかかわらず', 'にしたがって', 'につれて', 'において'],
    explanation:
      'にもかかわらず expresses "despite" or "in spite of." A surprising result follows a condition that would normally prevent it.',
  },
  {
    id: 'n3-nimokakawarazu-fib-2',
    pattern: 'にもかかわらず',
    type: 'fill_in_blank',
    sentence: '何度注意した＿＿＿、彼は同じ間違いをする。',
    english: 'Despite being warned many times, he makes the same mistakes.',
    correctAnswer: 'にもかかわらず',
    options: ['にもかかわらず', 'にしても', 'としたら', 'にとって'],
    explanation:
      'にもかかわらず after a clause expresses that the expected result did not follow.',
  },
  {
    id: 'n3-nimokakawarazu-fib-3',
    pattern: 'にもかかわらず',
    type: 'fill_in_blank',
    sentence: '彼女は病気＿＿＿、毎日出勤している。',
    english: 'Despite being sick, she comes to work every day.',
    correctAnswer: 'にもかかわらず',
    options: ['にもかかわらず', 'にしたがって', 'に対して', 'に関して'],
    explanation:
      'にもかかわらず after a noun expresses "despite." 病気にもかかわらず = despite being sick.',
  },
  {
    id: 'n3-nimokakawarazu-mc-1',
    pattern: 'にもかかわらず',
    type: 'multiple_choice',
    sentence: 'What does にもかかわらず express?',
    english: 'Select the best description.',
    correctAnswer: 'Something happens despite an opposing condition',
    options: [
      'Something happens despite an opposing condition',
      'Something happens because of a condition',
      'Something happens after a condition',
      'Something happens before a condition',
    ],
    explanation:
      'にもかかわらず means "despite" or "in spite of" — the result is unexpected given the condition.',
  },
  {
    id: 'n3-nimokakawarazu-mc-2',
    pattern: 'にもかかわらず',
    type: 'multiple_choice',
    sentence: 'Which is the most formal equivalent of のに?',
    english: 'Select the expression closest in meaning to のに.',
    correctAnswer: 'にもかかわらず',
    options: [
      'にもかかわらず',
      'について',
      'によると',
      'に対して',
    ],
    explanation:
      'にもかかわらず is the more formal, written equivalent of のに (despite/even though).',
  },

  // ===========================================================================
  // それにしても (even so / nevertheless)
  // ===========================================================================
  {
    id: 'n3-sorenishitemo-fib-1',
    pattern: 'それにしても',
    type: 'fill_in_blank',
    sentence: '忙しいのはわかるが、＿＿＿連絡くらいはできるだろう。',
    english: 'I understand you\'re busy, but even so, you could at least contact me.',
    correctAnswer: 'それにしても',
    options: ['それにしても', 'それなら', 'それでは', 'それから'],
    explanation:
      'それにしても acknowledges the previous point but introduces a comment or complaint that goes beyond it.',
  },
  {
    id: 'n3-sorenishitemo-fib-2',
    pattern: 'それにしても',
    type: 'fill_in_blank',
    sentence: '＿＿＿、今日は暑いね。',
    english: 'Even so, it\'s really hot today, isn\'t it?',
    correctAnswer: 'それにしても',
    options: ['それにしても', 'それとも', 'それなのに', 'それでも'],
    explanation:
      'それにしても at the start of a sentence introduces a strong impression or comment, often expressing surprise.',
  },
  {
    id: 'n3-sorenishitemo-fib-3',
    pattern: 'それにしても',
    type: 'fill_in_blank',
    sentence: '安いのは嬉しいが、＿＿＿この品質はひどい。',
    english: 'I\'m glad it\'s cheap, but even so, this quality is terrible.',
    correctAnswer: 'それにしても',
    options: ['それにしても', 'それだけに', 'それなりに', 'それでいて'],
    explanation:
      'それにしても concedes the first point (cheap is good) but emphasizes a strong reaction to the second point (quality).',
  },
  {
    id: 'n3-sorenishitemo-mc-1',
    pattern: 'それにしても',
    type: 'multiple_choice',
    sentence: 'What function does それにしても serve?',
    english: 'Select the best description.',
    correctAnswer: 'Acknowledging a point but expressing surprise or a strong comment',
    options: [
      'Acknowledging a point but expressing surprise or a strong comment',
      'Presenting a logical cause and effect',
      'Offering two alternatives',
      'Ending a conversation politely',
    ],
    explanation:
      'それにしても means "even so" or "nevertheless" and is used to express a strong impression or comment despite acknowledging the previous context.',
  },
  {
    id: 'n3-sorenishitemo-mc-2',
    pattern: 'それにしても',
    type: 'multiple_choice',
    sentence: 'Where does それにしても typically appear in a sentence?',
    english: 'Select the correct position.',
    correctAnswer: 'At the beginning of a sentence or clause',
    options: [
      'At the beginning of a sentence or clause',
      'At the end of a sentence',
      'Between a noun and a verb',
      'After a particle like を or に',
    ],
    explanation:
      'それにしても is a conjunctive expression used at the beginning of a sentence or clause to introduce a comment.',
  },

  // ===========================================================================
  // としたら・とすれば (if we assume that / supposing)
  // ===========================================================================
  {
    id: 'n3-toshitara-fib-1',
    pattern: 'としたら・とすれば',
    type: 'fill_in_blank',
    sentence: '彼が来ない＿＿＿、計画を変更しなければならない。',
    english: 'If we assume he won\'t come, we have to change the plan.',
    correctAnswer: 'としたら',
    options: ['としたら', 'にしても', 'としても', 'ところで'],
    explanation:
      'としたら introduces a hypothetical condition. 来ないとしたら = if we suppose he won\'t come.',
  },
  {
    id: 'n3-toshitara-fib-2',
    pattern: 'としたら・とすれば',
    type: 'fill_in_blank',
    sentence: '転職する＿＿＿、どんな仕事がしたいですか。',
    english: 'Supposing you change jobs, what kind of work would you want to do?',
    correctAnswer: 'とすれば',
    options: ['とすれば', 'としても', 'としては', 'とともに'],
    explanation:
      'とすれば presents a hypothetical scenario for discussion. 転職するとすれば = if you were to change jobs.',
  },
  {
    id: 'n3-toshitara-fib-3',
    pattern: 'としたら・とすれば',
    type: 'fill_in_blank',
    sentence: '一億円が当たった＿＿＿、何に使いますか。',
    english: 'If you were to win 100 million yen, what would you spend it on?',
    correctAnswer: 'としたら',
    options: ['としたら', 'にしたら', 'からしたら', 'にとったら'],
    explanation:
      'としたら sets up an imaginary scenario. 当たったとしたら = if you were to win (hypothetically).',
  },
  {
    id: 'n3-toshitara-mc-1',
    pattern: 'としたら・とすれば',
    type: 'multiple_choice',
    sentence: 'What do としたら and とすれば express?',
    english: 'Select the best description.',
    correctAnswer: 'A hypothetical assumption or supposition',
    options: [
      'A hypothetical assumption or supposition',
      'A confirmed fact',
      'A past event that actually happened',
      'A prohibition',
    ],
    explanation:
      'としたら and とすれば both introduce hypothetical scenarios: "if we assume that..." or "supposing that..."',
  },
  {
    id: 'n3-toshitara-mc-2',
    pattern: 'としたら・とすれば',
    type: 'multiple_choice',
    sentence: 'How do としたら and とすれば differ?',
    english: 'Select the best distinction.',
    correctAnswer: 'They are largely interchangeable; とすれば is slightly more formal',
    options: [
      'They are largely interchangeable; とすれば is slightly more formal',
      'としたら is for past events; とすれば is for future events',
      'としたら is positive; とすれば is negative',
      'They have completely different meanings',
    ],
    explanation:
      'Both express hypothetical assumptions and are mostly interchangeable. とすれば can sound slightly more formal or analytical.',
  },

  // ===========================================================================
  // にしても (even if / even though)
  // ===========================================================================
  {
    id: 'n3-nishitemo-fib-1',
    pattern: 'にしても',
    type: 'fill_in_blank',
    sentence: '忙しい＿＿＿、食事はちゃんと取るべきだ。',
    english: 'Even if you\'re busy, you should eat properly.',
    correctAnswer: 'にしても',
    options: ['にしても', 'にしたら', 'としたら', 'にとって'],
    explanation:
      'にしても means "even if" or "even though." It concedes a point while stating something should still apply.',
  },
  {
    id: 'n3-nishitemo-fib-2',
    pattern: 'にしても',
    type: 'fill_in_blank',
    sentence: '冗談＿＿＿、ひどいことを言った。',
    english: 'Even as a joke, that was a terrible thing to say.',
    correctAnswer: 'にしても',
    options: ['にしても', 'にしたら', 'にすれば', 'にとって'],
    explanation:
      'にしても after a noun: 冗談にしても = even if it\'s a joke / even granting that it\'s a joke.',
  },
  {
    id: 'n3-nishitemo-fib-3',
    pattern: 'にしても',
    type: 'fill_in_blank',
    sentence: '安い＿＿＿、この値段は安すぎる。',
    english: 'Even considering it\'s cheap, this price is too low.',
    correctAnswer: 'にしても',
    options: ['にしても', 'としても', 'からしても', 'にかけても'],
    explanation:
      'にしても concedes a premise (it\'s cheap) but finds the degree surprising.',
  },
  {
    id: 'n3-nishitemo-mc-1',
    pattern: 'にしても',
    type: 'multiple_choice',
    sentence: 'What does にしても express?',
    english: 'Select the best description.',
    correctAnswer: 'Conceding a point while asserting something else',
    options: [
      'Conceding a point while asserting something else',
      'Stating a direct cause',
      'Making a comparison',
      'Giving directions',
    ],
    explanation:
      'にしても means "even if" or "granting that," used to acknowledge one thing while stating another.',
  },
  {
    id: 'n3-nishitemo-mc-2',
    pattern: 'にしても',
    type: 'multiple_choice',
    sentence: 'Which pair shows the correct pattern for にしても?',
    english: 'Select the correct formation pair.',
    correctAnswer: 'Verb plain form + にしても / Noun + にしても',
    options: [
      'Verb plain form + にしても / Noun + にしても',
      'Verb te-form + にしても / Noun + のにしても',
      'Verb masu-stem + にしても / Noun + をにしても',
      'Verb passive form + にしても / Noun + がにしても',
    ],
    explanation:
      'にしても attaches to the plain form of verbs or directly to nouns: 行くにしても, 冗談にしても.',
  },

  // ===========================================================================
  // として (as / in the capacity of)
  // ===========================================================================
  {
    id: 'n3-toshite-fib-1',
    pattern: 'として',
    type: 'fill_in_blank',
    sentence: '彼は教師＿＿＿働いている。',
    english: 'He works as a teacher.',
    correctAnswer: 'として',
    options: ['として', 'にとって', 'について', 'に対して'],
    explanation:
      'として means "as" or "in the role of." 教師として = as a teacher.',
  },
  {
    id: 'n3-toshite-fib-2',
    pattern: 'として',
    type: 'fill_in_blank',
    sentence: 'この問題は例外＿＿＿扱われた。',
    english: 'This issue was treated as an exception.',
    correctAnswer: 'として',
    options: ['として', 'にして', 'からして', 'をもって'],
    explanation:
      'として indicates a role or classification. 例外として = as an exception.',
  },
  {
    id: 'n3-toshite-fib-3',
    pattern: 'として',
    type: 'fill_in_blank',
    sentence: '日本は技術大国＿＿＿知られている。',
    english: 'Japan is known as a technological powerhouse.',
    correctAnswer: 'として',
    options: ['として', 'に関して', 'について', 'にとって'],
    explanation:
      'として marks the capacity or reputation. 技術大国として知られている = known as a technology leader.',
  },
  {
    id: 'n3-toshite-mc-1',
    pattern: 'として',
    type: 'multiple_choice',
    sentence: 'What does として express?',
    english: 'Select the best description.',
    correctAnswer: 'A role, capacity, or status',
    options: [
      'A role, capacity, or status',
      'A target of an action',
      'A topic of discussion',
      'A point of view',
    ],
    explanation:
      'として means "as" and indicates the role, status, or capacity in which someone or something functions.',
  },
  {
    id: 'n3-toshite-mc-2',
    pattern: 'として',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses として?',
    english: 'Select the correct sentence.',
    correctAnswer: '彼女はリーダーとしてチームをまとめた。',
    options: [
      '彼女はリーダーとしてチームをまとめた。',
      '彼女はリーダーとして走った。',
      '彼女としてリーダーをまとめた。',
      'リーダーが彼女としてまとめた。',
    ],
    explanation:
      'リーダーとしてチームをまとめた = brought the team together as a leader. として marks the role.',
  },

  // ===========================================================================
  // に対して (toward / against / in contrast to)
  // ===========================================================================
  {
    id: 'n3-nitaishite-fib-1',
    pattern: 'に対して',
    type: 'fill_in_blank',
    sentence: '先生は生徒＿＿＿厳しい態度を取る。',
    english: 'The teacher takes a strict attitude toward the students.',
    correctAnswer: 'に対して',
    options: ['に対して', 'について', 'にとって', 'に関して'],
    explanation:
      'に対して indicates the target of an attitude or action. 生徒に対して = toward the students.',
  },
  {
    id: 'n3-nitaishite-fib-2',
    pattern: 'に対して',
    type: 'fill_in_blank',
    sentence: '兄が外向的な＿＿＿、弟は内向的だ。',
    english: 'While the older brother is extroverted, the younger brother is introverted.',
    correctAnswer: 'のに対して',
    options: ['のに対して', 'のについて', 'のにとって', 'のに関して'],
    explanation:
      'に対して can also express contrast. 外向的なのに対して = in contrast to being extroverted.',
  },
  {
    id: 'n3-nitaishite-fib-3',
    pattern: 'に対して',
    type: 'fill_in_blank',
    sentence: 'この提案＿＿＿、反対意見が多い。',
    english: 'There are many opposing opinions toward this proposal.',
    correctAnswer: 'に対して',
    options: ['に対して', 'に沿って', 'を通じて', 'をもとに'],
    explanation:
      'に対して marks the target of opposition. 提案に対して = toward/against the proposal.',
  },
  {
    id: 'n3-nitaishite-mc-1',
    pattern: 'に対して',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of に対して?',
    english: 'Select the best description.',
    correctAnswer: 'Indicating a target and expressing contrast',
    options: [
      'Indicating a target and expressing contrast',
      'Showing cause and giving advice',
      'Expressing time and location',
      'Making requests and giving permission',
    ],
    explanation:
      'に対して has two uses: (1) marking the target/recipient of an action or feeling, (2) expressing contrast between two things.',
  },
  {
    id: 'n3-nitaishite-mc-2',
    pattern: 'に対して',
    type: 'multiple_choice',
    sentence: 'How does に対して differ from について?',
    english: 'Select the best distinction.',
    correctAnswer: 'に対して targets a person/thing; について introduces a topic',
    options: [
      'に対して targets a person/thing; について introduces a topic',
      'They are completely interchangeable',
      'に対して is casual; について is formal',
      'に対して is for past; について is for present',
    ],
    explanation:
      'に対して directs an action or attitude toward a target, while について introduces a topic of discussion: "about."',
  },

  // ===========================================================================
  // に関して (regarding / concerning)
  // ===========================================================================
  {
    id: 'n3-nikanshite-fib-1',
    pattern: 'に関して',
    type: 'fill_in_blank',
    sentence: 'この問題＿＿＿、詳しく説明してください。',
    english: 'Please explain in detail regarding this issue.',
    correctAnswer: 'に関して',
    options: ['に関して', 'に対して', 'にとって', 'に沿って'],
    explanation:
      'に関して means "regarding" or "concerning." この問題に関して = regarding this issue.',
  },
  {
    id: 'n3-nikanshite-fib-2',
    pattern: 'に関して',
    type: 'fill_in_blank',
    sentence: '環境問題＿＿＿の研究が進んでいる。',
    english: 'Research concerning environmental issues is progressing.',
    correctAnswer: 'に関して',
    options: ['に関して', 'に対して', 'について', 'において'],
    explanation:
      'に関しての + noun = concerning ~. 環境問題に関しての研究 = research concerning environmental issues.',
  },
  {
    id: 'n3-nikanshite-fib-3',
    pattern: 'に関して',
    type: 'fill_in_blank',
    sentence: '新しい法律＿＿＿、市民から質問が寄せられた。',
    english: 'Regarding the new law, questions were submitted by citizens.',
    correctAnswer: 'に関して',
    options: ['に関して', 'に反して', 'に基づいて', 'に応じて'],
    explanation:
      'に関して introduces the topic under discussion. 新しい法律に関して = regarding the new law.',
  },
  {
    id: 'n3-nikanshite-mc-1',
    pattern: 'に関して',
    type: 'multiple_choice',
    sentence: 'How does に関して compare to について?',
    english: 'Select the best description.',
    correctAnswer: 'に関して is more formal than について; both mean "regarding"',
    options: [
      'に関して is more formal than について; both mean "regarding"',
      'に関して is casual; について is formal',
      'They have completely different meanings',
      'に関して is only for spoken language',
    ],
    explanation:
      'Both mean "regarding/about," but に関して is more formal and often used in writing, presentations, and official contexts.',
  },
  {
    id: 'n3-nikanshite-mc-2',
    pattern: 'に関して',
    type: 'multiple_choice',
    sentence: 'What form can に関して take when modifying a noun?',
    english: 'Select the correct modification form.',
    correctAnswer: 'に関する + Noun',
    options: [
      'に関する + Noun',
      'に関した + Noun',
      'に関しての + だ + Noun',
      'に関しいる + Noun',
    ],
    explanation:
      'When modifying a noun, に関して becomes に関する: 環境に関する問題 = issues concerning the environment.',
  },

  // ===========================================================================
  // をもとに (based on)
  // ===========================================================================
  {
    id: 'n3-womotoni-fib-1',
    pattern: 'をもとに',
    type: 'fill_in_blank',
    sentence: 'この映画は実話＿＿＿作られた。',
    english: 'This movie was made based on a true story.',
    correctAnswer: 'をもとに',
    options: ['をもとに', 'をめぐって', 'を通じて', 'にとって'],
    explanation:
      'をもとに means "based on." 実話をもとに = based on a true story.',
  },
  {
    id: 'n3-womotoni-fib-2',
    pattern: 'をもとに',
    type: 'fill_in_blank',
    sentence: 'アンケートの結果＿＿＿、新商品を開発した。',
    english: 'We developed a new product based on the survey results.',
    correctAnswer: 'をもとに',
    options: ['をもとに', 'を通して', 'に沿って', 'に対して'],
    explanation:
      'をもとに indicates the basis or source material. アンケートの結果をもとに = based on the survey results.',
  },
  {
    id: 'n3-womotoni-fib-3',
    pattern: 'をもとに',
    type: 'fill_in_blank',
    sentence: '彼の経験＿＿＿、小説が書かれた。',
    english: 'A novel was written based on his experiences.',
    correctAnswer: 'をもとに',
    options: ['をもとに', 'について', 'に関して', 'において'],
    explanation:
      'をもとに indicates the source material. 彼の経験をもとに = based on his experiences.',
  },
  {
    id: 'n3-womotoni-mc-1',
    pattern: 'をもとに',
    type: 'multiple_choice',
    sentence: 'What does をもとに express?',
    english: 'Select the best description.',
    correctAnswer: 'Using something as a basis or source material',
    options: [
      'Using something as a basis or source material',
      'Passing through something',
      'Going against something',
      'Aiming at a target',
    ],
    explanation:
      'をもとに means "based on" — using something (data, story, experience) as the foundation for creating or doing something.',
  },
  {
    id: 'n3-womotoni-mc-2',
    pattern: 'をもとに',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses をもとに?',
    english: 'Select the correct sentence.',
    correctAnswer: 'データをもとに報告書を作成した。',
    options: [
      'データをもとに報告書を作成した。',
      'データにもとに行った。',
      '報告書をもとにデータだ。',
      'をもとにデータの報告書。',
    ],
    explanation:
      'データをもとに報告書を作成した = created a report based on the data. The source comes before をもとに.',
  },

  // ===========================================================================
  // に沿って (along / in accordance with)
  // ===========================================================================
  {
    id: 'n3-nisotte-fib-1',
    pattern: 'に沿って',
    type: 'fill_in_blank',
    sentence: '川＿＿＿散歩した。',
    english: 'I took a walk along the river.',
    correctAnswer: 'に沿って',
    options: ['に沿って', 'を通じて', 'をもとに', 'に対して'],
    explanation:
      'に沿って has a physical meaning of "along." 川に沿って = along the river.',
  },
  {
    id: 'n3-nisotte-fib-2',
    pattern: 'に沿って',
    type: 'fill_in_blank',
    sentence: '計画＿＿＿、プロジェクトを進めてください。',
    english: 'Please proceed with the project in accordance with the plan.',
    correctAnswer: 'に沿って',
    options: ['に沿って', 'に対して', 'に関して', 'について'],
    explanation:
      'に沿って also means "in accordance with." 計画に沿って = in accordance with the plan.',
  },
  {
    id: 'n3-nisotte-fib-3',
    pattern: 'に沿って',
    type: 'fill_in_blank',
    sentence: '方針＿＿＿行動するべきだ。',
    english: 'You should act in accordance with the policy.',
    correctAnswer: 'に沿って',
    options: ['に沿って', 'をもとに', 'を通じて', 'に反して'],
    explanation:
      '方針に沿って = in accordance with the policy. に沿って indicates following guidelines or directions.',
  },
  {
    id: 'n3-nisotte-mc-1',
    pattern: 'に沿って',
    type: 'multiple_choice',
    sentence: 'What are the two main meanings of に沿って?',
    english: 'Select the best description.',
    correctAnswer: 'Physically "along" and figuratively "in accordance with"',
    options: [
      'Physically "along" and figuratively "in accordance with"',
      '"Against" and "in opposition to"',
      '"Through" and "by means of"',
      '"Based on" and "originating from"',
    ],
    explanation:
      'に沿って means "along" (physical: along the river) and "in accordance with" (abstract: following a plan or policy).',
  },
  {
    id: 'n3-nisotte-mc-2',
    pattern: 'に沿って',
    type: 'multiple_choice',
    sentence: 'What form does に沿って take when modifying a noun?',
    english: 'Select the correct form.',
    correctAnswer: 'に沿った + Noun',
    options: [
      'に沿った + Noun',
      'に沿っている + Noun',
      'に沿うの + Noun',
      'に沿いな + Noun',
    ],
    explanation:
      'When modifying a noun, に沿って becomes に沿った: 計画に沿った行動 = actions in accordance with the plan.',
  },

  // ===========================================================================
  // を通じて・を通して (through / throughout / by means of)
  // ===========================================================================
  {
    id: 'n3-wotsuujite-fib-1',
    pattern: 'を通じて・を通して',
    type: 'fill_in_blank',
    sentence: 'インターネット＿＿＿、世界中の情報が手に入る。',
    english: 'Through the internet, you can access information from around the world.',
    correctAnswer: 'を通じて',
    options: ['を通じて', 'をもとに', 'に沿って', 'に対して'],
    explanation:
      'を通じて means "through" or "by means of." インターネットを通じて = through the internet.',
  },
  {
    id: 'n3-wotsuujite-fib-2',
    pattern: 'を通じて・を通して',
    type: 'fill_in_blank',
    sentence: '一年＿＿＿、この地域は温暖な気候だ。',
    english: 'Throughout the year, this region has a mild climate.',
    correctAnswer: 'を通じて',
    options: ['を通じて', 'にわたって', 'にかけて', 'において'],
    explanation:
      'を通じて can mean "throughout" a time period. 一年を通じて = throughout the year.',
  },
  {
    id: 'n3-wotsuujite-fib-3',
    pattern: 'を通じて・を通して',
    type: 'fill_in_blank',
    sentence: 'ボランティア活動＿＿＿、多くのことを学んだ。',
    english: 'I learned many things through volunteer activities.',
    correctAnswer: 'を通して',
    options: ['を通して', 'をもとに', 'に関して', 'について'],
    explanation:
      'を通して means "through" (an experience). ボランティア活動を通して = through volunteer activities.',
  },
  {
    id: 'n3-wotsuujite-mc-1',
    pattern: 'を通じて・を通して',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of を通じて・を通して?',
    english: 'Select the best description.',
    correctAnswer: '"By means of" and "throughout a period"',
    options: [
      '"By means of" and "throughout a period"',
      '"Based on" and "according to"',
      '"Against" and "toward"',
      '"Despite" and "even if"',
    ],
    explanation:
      'を通じて/を通して means (1) "by means of / through" (method or medium) and (2) "throughout" (an entire time period).',
  },
  {
    id: 'n3-wotsuujite-mc-2',
    pattern: 'を通じて・を通して',
    type: 'multiple_choice',
    sentence: 'How do を通じて and を通して differ?',
    english: 'Select the best distinction.',
    correctAnswer: 'They are largely interchangeable; を通じて is slightly more formal',
    options: [
      'They are largely interchangeable; を通じて is slightly more formal',
      'を通じて is for time; を通して is for means',
      'を通じて is casual; を通して is formal',
      'They have completely different meanings',
    ],
    explanation:
      'Both forms are very similar in meaning and usage. を通じて tends to be slightly more formal and common in written language.',
  },

  // ===========================================================================
  // につれて (as ~ / in proportion to)
  // ===========================================================================
  {
    id: 'n3-nitsurete-fib-1',
    pattern: 'につれて',
    type: 'fill_in_blank',
    sentence: '年を取る＿＿＿、体力が落ちてくる。',
    english: 'As you age, your physical strength declines.',
    correctAnswer: 'につれて',
    options: ['につれて', 'にしたがって', 'に対して', 'にとって'],
    explanation:
      'につれて means "as" — when one thing changes, another changes in tandem. 年を取るにつれて = as one ages.',
  },
  {
    id: 'n3-nitsurete-fib-2',
    pattern: 'につれて',
    type: 'fill_in_blank',
    sentence: '季節が変わる＿＿＿、景色も変わる。',
    english: 'As the seasons change, the scenery also changes.',
    correctAnswer: 'につれて',
    options: ['につれて', 'について', 'に関して', 'に沿って'],
    explanation:
      'につれて expresses proportional change. 季節が変わるにつれて = as the seasons change.',
  },
  {
    id: 'n3-nitsurete-fib-3',
    pattern: 'につれて',
    type: 'fill_in_blank',
    sentence: '人口が増える＿＿＿、交通渋滞がひどくなった。',
    english: 'As the population increased, traffic congestion worsened.',
    correctAnswer: 'につれて',
    options: ['につれて', 'にしても', 'にとって', 'において'],
    explanation:
      'につれて links two changing states. 人口が増えるにつれて = as the population increased.',
  },
  {
    id: 'n3-nitsurete-mc-1',
    pattern: 'につれて',
    type: 'multiple_choice',
    sentence: 'What does につれて express?',
    english: 'Select the best description.',
    correctAnswer: 'Two things changing together proportionally',
    options: [
      'Two things changing together proportionally',
      'A sudden unexpected change',
      'A contrast between two things',
      'A cause and its direct result',
    ],
    explanation:
      'につれて means "as X changes, Y changes too" — expressing gradual, proportional change.',
  },
  {
    id: 'n3-nitsurete-mc-2',
    pattern: 'につれて',
    type: 'multiple_choice',
    sentence: 'What form precedes につれて?',
    english: 'Select the correct formation.',
    correctAnswer: 'Verb dictionary form + につれて / Noun + につれて',
    options: [
      'Verb dictionary form + につれて / Noun + につれて',
      'Verb te-form + につれて',
      'Verb past form + につれて',
      'Verb masu-stem + につれて',
    ],
    explanation:
      'につれて follows the dictionary form of verbs or nouns: 増えるにつれて, 時間につれて.',
  },

  // ===========================================================================
  // にしたがって (as / in accordance with / following)
  // ===========================================================================
  {
    id: 'n3-nishitagatte-fib-1',
    pattern: 'にしたがって',
    type: 'fill_in_blank',
    sentence: '高度が上がる＿＿＿、気温が下がる。',
    english: 'As the altitude increases, the temperature drops.',
    correctAnswer: 'にしたがって',
    options: ['にしたがって', 'に対して', 'に関して', 'について'],
    explanation:
      'にしたがって means "as" — expressing proportional change. 高度が上がるにしたがって = as the altitude rises.',
  },
  {
    id: 'n3-nishitagatte-fib-2',
    pattern: 'にしたがって',
    type: 'fill_in_blank',
    sentence: '先生の指示＿＿＿、実験を行った。',
    english: 'I conducted the experiment following the teacher\'s instructions.',
    correctAnswer: 'にしたがって',
    options: ['にしたがって', 'につれて', 'をもとに', 'を通じて'],
    explanation:
      'にしたがって also means "following" or "in accordance with." 指示にしたがって = following instructions.',
  },
  {
    id: 'n3-nishitagatte-fib-3',
    pattern: 'にしたがって',
    type: 'fill_in_blank',
    sentence: '日本語の勉強が進む＿＿＿、楽しくなってきた。',
    english: 'As my Japanese studies progressed, it became more enjoyable.',
    correctAnswer: 'にしたがって',
    options: ['にしたがって', 'にもかかわらず', 'にしても', 'に対して'],
    explanation:
      'にしたがって expresses gradual change. 勉強が進むにしたがって = as studies progressed.',
  },
  {
    id: 'n3-nishitagatte-mc-1',
    pattern: 'にしたがって',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of にしたがって?',
    english: 'Select the best description.',
    correctAnswer: 'Proportional change and following rules/instructions',
    options: [
      'Proportional change and following rules/instructions',
      'Contrast and comparison',
      'Cause and prohibition',
      'Time sequence and location',
    ],
    explanation:
      'にしたがって means (1) "as X changes, Y changes" (proportional) and (2) "in accordance with / following" (obedience to rules or instructions).',
  },
  {
    id: 'n3-nishitagatte-mc-2',
    pattern: 'にしたがって',
    type: 'multiple_choice',
    sentence: 'How does にしたがって differ from につれて in the "proportional change" meaning?',
    english: 'Select the best distinction.',
    correctAnswer: 'にしたがって implies a natural/expected progression; につれて is more neutral',
    options: [
      'にしたがって implies a natural/expected progression; につれて is more neutral',
      'They are exactly the same with no difference',
      'にしたがって is for negative changes only',
      'につれて is more formal than にしたがって',
    ],
    explanation:
      'Both express proportional change, but にしたがって often implies a natural, expected, or orderly progression, while につれて is more neutral about whether the change is expected.',
  },
  // ===========================================================================
  // に伴って (along with / as ~ happens)
  // ===========================================================================
  {
    id: 'n3-nitomonatte-fib-1',
    pattern: 'に伴って',
    type: 'fill_in_blank',
    sentence: '人口の増加＿＿＿、住宅の需要も高まっている。',
    english: 'Along with the increase in population, the demand for housing is also rising.',
    correctAnswer: 'に伴って',
    options: ['に伴って', 'について', 'に対して', 'によって'],
    explanation:
      'に伴って expresses that one change happens alongside another. The rise in housing demand accompanies population growth.',
  },
  {
    id: 'n3-nitomonatte-fib-2',
    pattern: 'に伴って',
    type: 'fill_in_blank',
    sentence: '経済の発展＿＿＿、環境問題も深刻になってきた。',
    english: 'Along with economic development, environmental problems have also become serious.',
    correctAnswer: 'に伴って',
    options: ['に伴って', 'にとって', 'に関して', 'において'],
    explanation:
      'に伴って indicates that environmental problems arose as a consequence accompanying economic growth.',
  },
  {
    id: 'n3-nitomonatte-fib-3',
    pattern: 'に伴って',
    type: 'fill_in_blank',
    sentence: '技術の進歩＿＿＿、新しい仕事が生まれている。',
    english: 'Along with advances in technology, new jobs are being created.',
    correctAnswer: 'に伴って',
    options: ['に伴って', 'をもとに', 'にわたって', 'を通じて'],
    explanation:
      'に伴って shows that new jobs emerge as a natural accompaniment to technological progress.',
  },
  {
    id: 'n3-nitomonatte-mc-1',
    pattern: 'に伴って',
    type: 'multiple_choice',
    sentence: 'What does に伴って express?',
    english: 'Select the best description.',
    correctAnswer: 'One change happens alongside another',
    options: [
      'One change happens alongside another',
      'Something happens despite another event',
      'A reason or cause for an action',
      'A comparison between two things',
    ],
    explanation:
      'に伴って means "along with" or "as ~ happens," indicating two things change together.',
  },
  {
    id: 'n3-nitomonatte-mc-2',
    pattern: 'に伴って',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses に伴って?',
    english: 'Select the correct usage.',
    correctAnswer: '気温の上昇に伴って、雪が溶け始めた。',
    options: [
      '気温の上昇に伴って、雪が溶け始めた。',
      '友達に伴って、宿題を手伝った。',
      '天気に伴って、散歩に行こう。',
      '先生に伴って、質問した。',
    ],
    explanation:
      'に伴って links two correlated changes. Rising temperature naturally accompanies melting snow.',
  },

  // ===========================================================================
  // 上に (on top of / in addition to)
  // ===========================================================================
  {
    id: 'n3-ueni-fib-1',
    pattern: '上に',
    type: 'fill_in_blank',
    sentence: 'この部屋は狭い＿＿＿、家賃も高い。',
    english: 'This room is small and, on top of that, the rent is also expensive.',
    correctAnswer: '上に',
    options: ['上に', 'ために', 'くせに', 'ばかりに'],
    explanation:
      '上に adds a second (usually negative) quality on top of the first — the room is small AND expensive.',
  },
  {
    id: 'n3-ueni-fib-2',
    pattern: '上に',
    type: 'fill_in_blank',
    sentence: '彼は頭がいい＿＿＿、スポーツも得意だ。',
    english: 'He is smart and, on top of that, good at sports too.',
    correctAnswer: '上に',
    options: ['上に', 'わりに', 'ものの', 'とはいえ'],
    explanation:
      '上に stacks positive qualities here — being smart plus being athletic.',
  },
  {
    id: 'n3-ueni-fib-3',
    pattern: '上に',
    type: 'fill_in_blank',
    sentence: '今日は風が強い＿＿＿、雨も降っている。',
    english: 'Today the wind is strong and, on top of that, it is also raining.',
    correctAnswer: '上に',
    options: ['上に', 'うちに', 'ついでに', 'かわりに'],
    explanation:
      '上に layers the bad weather: strong wind is compounded by rain.',
  },
  {
    id: 'n3-ueni-mc-1',
    pattern: '上に',
    type: 'multiple_choice',
    sentence: 'What nuance does 上に add to a sentence?',
    english: 'Select the best description.',
    correctAnswer: 'It adds another quality on top of the first one',
    options: [
      'It adds another quality on top of the first one',
      'It expresses a contrast between two facts',
      'It shows the cause of a result',
      'It indicates a time sequence',
    ],
    explanation:
      '上に means "in addition to" or "on top of," stacking qualities (positive or negative).',
  },
  {
    id: 'n3-ueni-mc-2',
    pattern: '上に',
    type: 'multiple_choice',
    sentence: 'Which pair is a natural use of 上に?',
    english: 'Select the correct usage.',
    correctAnswer: '値段が安い上に、品質もいい。',
    options: [
      '値段が安い上に、品質もいい。',
      '値段が安い上に、買わなかった。',
      '値段が安い上に、高くなった。',
      '値段が安い上に、店を閉めた。',
    ],
    explanation:
      '上に stacks qualities in the same direction. Cheap AND good quality aligns properly.',
  },

  // ===========================================================================
  // ことにしている (have made it a habit to / have decided to regularly)
  // ===========================================================================
  {
    id: 'n3-kotonishiteiru-fib-1',
    pattern: 'ことにしている',
    type: 'fill_in_blank',
    sentence: '健康のために毎朝ジョギングをする＿＿＿。',
    english: 'For my health, I make it a habit to jog every morning.',
    correctAnswer: 'ことにしている',
    options: ['ことにしている', 'ことになっている', 'ことにした', 'ことがある'],
    explanation:
      'ことにしている expresses a personal habit or routine one has decided to maintain.',
  },
  {
    id: 'n3-kotonishiteiru-fib-2',
    pattern: 'ことにしている',
    type: 'fill_in_blank',
    sentence: '寝る前にスマホを見ない＿＿＿。',
    english: 'I make it a rule not to look at my phone before bed.',
    correctAnswer: 'ことにしている',
    options: ['ことにしている', 'ことになっている', 'ようにしている', 'わけにはいかない'],
    explanation:
      'ことにしている shows a personal decision or rule one follows regularly.',
  },
  {
    id: 'n3-kotonishiteiru-fib-3',
    pattern: 'ことにしている',
    type: 'fill_in_blank',
    sentence: '毎日少なくとも三十分は日本語を勉強する＿＿＿。',
    english: 'I make it a habit to study Japanese for at least 30 minutes every day.',
    correctAnswer: 'ことにしている',
    options: ['ことにしている', 'ことになっている', 'ことにする', 'ことができる'],
    explanation:
      'ことにしている indicates an ongoing personal habit the speaker has committed to.',
  },
  {
    id: 'n3-kotonishiteiru-mc-1',
    pattern: 'ことにしている',
    type: 'multiple_choice',
    sentence: 'What does ことにしている express?',
    english: 'Select the best description.',
    correctAnswer: 'A personal habit or rule one has decided to follow',
    options: [
      'A personal habit or rule one has decided to follow',
      'A rule imposed by someone else',
      'Something that happened in the past',
      'An ability or possibility',
    ],
    explanation:
      'ことにしている conveys a habitual action based on one\'s own decision.',
  },
  {
    id: 'n3-kotonishiteiru-mc-2',
    pattern: 'ことにしている',
    type: 'multiple_choice',
    sentence: 'How does ことにしている differ from ことになっている?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ことにしている is a personal decision; ことになっている is an external rule',
    options: [
      'ことにしている is a personal decision; ことになっている is an external rule',
      'They mean exactly the same thing',
      'ことにしている is past tense; ことになっている is present tense',
      'ことにしている is formal; ことになっている is casual',
    ],
    explanation:
      'ことにしている emphasizes the speaker\'s own choice, while ことになっている refers to established rules or arrangements.',
  },

  // ===========================================================================
  // ことになっている (it is a rule / it has been decided that)
  // ===========================================================================
  {
    id: 'n3-kotoninnatteiru-fib-1',
    pattern: 'ことになっている',
    type: 'fill_in_blank',
    sentence: 'この学校では制服を着る＿＿＿。',
    english: 'It is a rule at this school that students wear uniforms.',
    correctAnswer: 'ことになっている',
    options: ['ことになっている', 'ことにしている', 'ことにした', 'ことがある'],
    explanation:
      'ことになっている indicates an established rule or regulation — wearing uniforms is required.',
  },
  {
    id: 'n3-kotoninnatteiru-fib-2',
    pattern: 'ことになっている',
    type: 'fill_in_blank',
    sentence: '来月から新しいシステムを使う＿＿＿。',
    english: 'It has been decided that we will use the new system starting next month.',
    correctAnswer: 'ことになっている',
    options: ['ことになっている', 'ことにしている', 'ようになっている', 'はずだ'],
    explanation:
      'ことになっている conveys an arrangement or decision made (typically by an organization, not oneself).',
  },
  {
    id: 'n3-kotoninnatteiru-fib-3',
    pattern: 'ことになっている',
    type: 'fill_in_blank',
    sentence: '図書館では携帯電話を使わない＿＿＿。',
    english: 'It is a rule not to use mobile phones in the library.',
    correctAnswer: 'ことになっている',
    options: ['ことになっている', 'ことにしている', 'わけではない', 'つもりだ'],
    explanation:
      'ことになっている expresses an externally imposed regulation — the library\'s phone policy.',
  },
  {
    id: 'n3-kotoninnatteiru-mc-1',
    pattern: 'ことになっている',
    type: 'multiple_choice',
    sentence: 'What does ことになっている express?',
    english: 'Select the best description.',
    correctAnswer: 'An established rule, arrangement, or scheduled plan',
    options: [
      'An established rule, arrangement, or scheduled plan',
      'A personal daily habit',
      'An ability the speaker has',
      'A past experience',
    ],
    explanation:
      'ことになっている describes rules, decisions, or arrangements that apply externally.',
  },
  {
    id: 'n3-kotoninnatteiru-mc-2',
    pattern: 'ことになっている',
    type: 'multiple_choice',
    sentence: 'Which sentence best fits ことになっている?',
    english: 'Select the most appropriate context.',
    correctAnswer: '会議は毎週月曜日に行うことになっている。',
    options: [
      '会議は毎週月曜日に行うことになっている。',
      '私は毎朝コーヒーを飲むことになっている。',
      '昨日は雨が降ることになっている。',
      '彼は日本語が上手なことになっている。',
    ],
    explanation:
      'Weekly meetings are an organizational arrangement, making ことになっている the natural fit.',
  },

  // ===========================================================================
  // たびに (every time / whenever)
  // ===========================================================================
  {
    id: 'n3-tabini-fib-1',
    pattern: 'たびに',
    type: 'fill_in_blank',
    sentence: '祖母の家に行く＿＿＿、お菓子をもらう。',
    english: 'Every time I go to my grandmother\'s house, I get sweets.',
    correctAnswer: 'たびに',
    options: ['たびに', 'ついでに', 'うちに', 'かわりに'],
    explanation:
      'たびに means "every time." Each visit to grandmother\'s house results in receiving sweets.',
  },
  {
    id: 'n3-tabini-fib-2',
    pattern: 'たびに',
    type: 'fill_in_blank',
    sentence: 'この曲を聞く＿＿＿、学生時代を思い出す。',
    english: 'Every time I hear this song, I remember my school days.',
    correctAnswer: 'たびに',
    options: ['たびに', '最中に', '際に', 'ばかりに'],
    explanation:
      'たびに links a repeated trigger (hearing the song) with its recurring result (nostalgia).',
  },
  {
    id: 'n3-tabini-fib-3',
    pattern: 'たびに',
    type: 'fill_in_blank',
    sentence: '旅行に行く＿＿＿、その土地のお土産を買う。',
    english: 'Every time I travel, I buy souvenirs from that place.',
    correctAnswer: 'たびに',
    options: ['たびに', 'ために', 'ついでに', 'に伴って'],
    explanation:
      'たびに emphasizes the repetitive nature — buying souvenirs on every single trip.',
  },
  {
    id: 'n3-tabini-mc-1',
    pattern: 'たびに',
    type: 'multiple_choice',
    sentence: 'What does たびに express?',
    english: 'Select the best description.',
    correctAnswer: 'Something that happens every time a certain event occurs',
    options: [
      'Something that happens every time a certain event occurs',
      'Something that happens only once',
      'Something that might happen in the future',
      'A contrast between two events',
    ],
    explanation:
      'たびに means "every time" or "whenever," indicating a repeated pattern.',
  },
  {
    id: 'n3-tabini-mc-2',
    pattern: 'たびに',
    type: 'multiple_choice',
    sentence: 'What form comes before たびに?',
    english: 'Select the correct form.',
    correctAnswer: 'Dictionary form of a verb or noun + の',
    options: [
      'Dictionary form of a verb or noun + の',
      'Te-form of a verb',
      'Past tense (ta-form) only',
      'Negative form only',
    ],
    explanation:
      'たびに attaches to the dictionary form of verbs (行くたびに) or noun + の (旅行のたびに).',
  },

  // ===========================================================================
  // 最中に (in the middle of)
  // ===========================================================================
  {
    id: 'n3-saichuuni-fib-1',
    pattern: '最中に',
    type: 'fill_in_blank',
    sentence: '会議の＿＿＿、突然停電になった。',
    english: 'In the middle of the meeting, there was suddenly a power outage.',
    correctAnswer: '最中に',
    options: ['最中に', '際に', 'うちに', 'ついでに'],
    explanation:
      '最中に indicates something unexpected happened right in the middle of an ongoing activity.',
  },
  {
    id: 'n3-saichuuni-fib-2',
    pattern: '最中に',
    type: 'fill_in_blank',
    sentence: '食事をしている＿＿＿、電話がかかってきた。',
    english: 'In the middle of eating, I got a phone call.',
    correctAnswer: '最中に',
    options: ['最中に', 'たびに', 'ために', 'かわりに'],
    explanation:
      '最中に emphasizes the interruption — the call came while eating was in progress.',
  },
  {
    id: 'n3-saichuuni-fib-3',
    pattern: '最中に',
    type: 'fill_in_blank',
    sentence: 'テスト勉強の＿＿＿、友達が遊びに来た。',
    english: 'In the middle of studying for a test, a friend came to hang out.',
    correctAnswer: '最中に',
    options: ['最中に', '際に', '上に', 'ついでに'],
    explanation:
      '最中に highlights the interruption during an ongoing study session.',
  },
  {
    id: 'n3-saichuuni-mc-1',
    pattern: '最中に',
    type: 'multiple_choice',
    sentence: 'What nuance does 最中に typically carry?',
    english: 'Select the best description.',
    correctAnswer: 'An unexpected interruption during an ongoing activity',
    options: [
      'An unexpected interruption during an ongoing activity',
      'A planned event at a specific time',
      'Something that happens regularly',
      'A result that was expected',
    ],
    explanation:
      '最中に often implies that something unexpected or disruptive happens during an ongoing action.',
  },
  {
    id: 'n3-saichuuni-mc-2',
    pattern: '最中に',
    type: 'multiple_choice',
    sentence: 'What forms can precede 最中に?',
    english: 'Select the correct pattern.',
    correctAnswer: 'Noun + の最中に or verb ている + 最中に',
    options: [
      'Noun + の最中に or verb ている + 最中に',
      'Dictionary form verb + 最中に only',
      'Past tense verb + 最中に only',
      'Adjective + 最中に only',
    ],
    explanation:
      '最中に follows noun + の (会議の最中に) or verb in ている form (食べている最中に).',
  },

  // ===========================================================================
  // 際に (on the occasion of / when)
  // ===========================================================================
  {
    id: 'n3-saini-fib-1',
    pattern: '際に',
    type: 'fill_in_blank',
    sentence: 'お申し込みの＿＿＿、身分証明書をお持ちください。',
    english: 'When you apply, please bring your ID.',
    correctAnswer: '際に',
    options: ['際に', '最中に', 'ついでに', 'たびに'],
    explanation:
      '際に is a formal way to say "when" or "on the occasion of." It fits polite instructions.',
  },
  {
    id: 'n3-saini-fib-2',
    pattern: '際に',
    type: 'fill_in_blank',
    sentence: '海外旅行をする＿＿＿、パスポートが必要です。',
    english: 'When traveling abroad, a passport is required.',
    correctAnswer: '際に',
    options: ['際に', 'うちに', 'かわりに', 'ために'],
    explanation:
      '際に provides a formal tone — "on the occasion of traveling abroad."',
  },
  {
    id: 'n3-saini-fib-3',
    pattern: '際に',
    type: 'fill_in_blank',
    sentence: 'ご利用の＿＿＿は、利用規約をご確認ください。',
    english: 'When using the service, please check the terms of use.',
    correctAnswer: '際に',
    options: ['際に', '最中に', 'ついでに', 'ばかりに'],
    explanation:
      '際に is common in formal notices and instructions: "at the time of use."',
  },
  {
    id: 'n3-saini-mc-1',
    pattern: '際に',
    type: 'multiple_choice',
    sentence: 'In what register is 際に typically used?',
    english: 'Select the best description.',
    correctAnswer: 'Formal or written language',
    options: [
      'Formal or written language',
      'Casual spoken language among friends',
      'Children\'s language',
      'Slang',
    ],
    explanation:
      '際に is a formal expression often found in business, announcements, and written instructions.',
  },
  {
    id: 'n3-saini-mc-2',
    pattern: '際に',
    type: 'multiple_choice',
    sentence: 'Which is the closest casual equivalent of 際に?',
    english: 'Select the best answer.',
    correctAnswer: 'とき (toki)',
    options: ['とき (toki)', 'ので (node)', 'けど (kedo)', 'から (kara)'],
    explanation:
      '際に is the formal counterpart of とき ("when"). Both express timing, but 際に is more formal.',
  },

  // ===========================================================================
  // ついでに (while you\'re at it / taking the opportunity)
  // ===========================================================================
  {
    id: 'n3-tsuideni-fib-1',
    pattern: 'ついでに',
    type: 'fill_in_blank',
    sentence: '買い物に行く＿＿＿、郵便局にも寄ってきて。',
    english: 'While you\'re going shopping, stop by the post office too.',
    correctAnswer: 'ついでに',
    options: ['ついでに', '最中に', '際に', 'たびに'],
    explanation:
      'ついでに means "while you\'re at it" — doing something extra because you\'re already doing the main task.',
  },
  {
    id: 'n3-tsuideni-fib-2',
    pattern: 'ついでに',
    type: 'fill_in_blank',
    sentence: '散歩の＿＿＿、コンビニでお茶を買った。',
    english: 'While on my walk, I bought tea at the convenience store.',
    correctAnswer: 'ついでに',
    options: ['ついでに', 'たびに', 'かわりに', '上に'],
    explanation:
      'ついでに indicates the tea purchase was a convenient side task during the walk.',
  },
  {
    id: 'n3-tsuideni-fib-3',
    pattern: 'ついでに',
    type: 'fill_in_blank',
    sentence: '大阪に出張する＿＿＿、友達にも会ってきた。',
    english: 'While on a business trip to Osaka, I also met up with a friend.',
    correctAnswer: 'ついでに',
    options: ['ついでに', '最中に', 'ために', 'に伴って'],
    explanation:
      'ついでに shows the friend visit was a bonus activity done during the business trip.',
  },
  {
    id: 'n3-tsuideni-mc-1',
    pattern: 'ついでに',
    type: 'multiple_choice',
    sentence: 'What does ついでに imply about the second action?',
    english: 'Select the best description.',
    correctAnswer: 'It is a convenient extra action done alongside the main action',
    options: [
      'It is a convenient extra action done alongside the main action',
      'It is the main purpose of the trip',
      'It is something one does reluctantly',
      'It is an action that happens unexpectedly',
    ],
    explanation:
      'ついでに presents the second action as opportunistic — done because the chance was there.',
  },
  {
    id: 'n3-tsuideni-mc-2',
    pattern: 'ついでに',
    type: 'multiple_choice',
    sentence: 'Which sentence uses ついでに correctly?',
    english: 'Select the correct usage.',
    correctAnswer: '図書館に本を返すついでに、新しい本を借りた。',
    options: [
      '図書館に本を返すついでに、新しい本を借りた。',
      '地震のついでに、建物が壊れた。',
      '病気のついでに、薬を飲んだ。',
      '事故のついでに、けがをした。',
    ],
    explanation:
      'ついでに requires a voluntary main action. Returning books and borrowing new ones is a natural pair.',
  },

  // ===========================================================================
  // っけ (wasn\'t it? / what was it again?)
  // ===========================================================================
  {
    id: 'n3-kke-fib-1',
    pattern: 'っけ',
    type: 'fill_in_blank',
    sentence: '明日の会議は何時から＿＿＿。',
    english: 'What time was tomorrow\'s meeting again?',
    correctAnswer: 'だっけ',
    options: ['だっけ', 'だろう', 'かな', 'でしょう'],
    explanation:
      'っけ is used when trying to recall something. The speaker is confirming a forgotten detail.',
  },
  {
    id: 'n3-kke-fib-2',
    pattern: 'っけ',
    type: 'fill_in_blank',
    sentence: 'あの映画、もう見た＿＿＿。',
    english: 'Did I already watch that movie? (I can\'t remember.)',
    correctAnswer: 'っけ',
    options: ['っけ', 'かな', 'よね', 'でしょう'],
    explanation:
      'っけ expresses uncertainty about one\'s own memory — "Did I watch it or not?"',
  },
  {
    id: 'n3-kke-fib-3',
    pattern: 'っけ',
    type: 'fill_in_blank',
    sentence: 'あの人の名前、何＿＿＿。思い出せない。',
    english: 'What was that person\'s name again? I can\'t remember.',
    correctAnswer: 'だっけ',
    options: ['だっけ', 'だろう', 'だった', 'ですか'],
    explanation:
      'っけ (after だ → だっけ) shows the speaker is searching their memory for the name.',
  },
  {
    id: 'n3-kke-mc-1',
    pattern: 'っけ',
    type: 'multiple_choice',
    sentence: 'When is っけ used?',
    english: 'Select the best description.',
    correctAnswer: 'When trying to recall or confirm something from memory',
    options: [
      'When trying to recall or confirm something from memory',
      'When making a polite request',
      'When expressing a strong opinion',
      'When giving someone an order',
    ],
    explanation:
      'っけ signals that the speaker is trying to remember something or asking for confirmation of a vague memory.',
  },
  {
    id: 'n3-kke-mc-2',
    pattern: 'っけ',
    type: 'multiple_choice',
    sentence: 'What register does っけ belong to?',
    english: 'Select the correct answer.',
    correctAnswer: 'Casual / conversational',
    options: [
      'Casual / conversational',
      'Formal written language',
      'Business Japanese',
      'Keigo (honorific)',
    ],
    explanation:
      'っけ is a casual sentence-ending particle used in everyday conversation.',
  },

  // ===========================================================================
  // ふりをする (to pretend to)
  // ===========================================================================
  {
    id: 'n3-furiwosuru-fib-1',
    pattern: 'ふりをする',
    type: 'fill_in_blank',
    sentence: '彼は知らない＿＿＿。',
    english: 'He pretended not to know.',
    correctAnswer: 'ふりをした',
    options: ['ふりをした', 'ようにした', 'ことにした', 'わけがない'],
    explanation:
      'ふりをする means "to pretend." 知らないふりをした = pretended not to know.',
  },
  {
    id: 'n3-furiwosuru-fib-2',
    pattern: 'ふりをする',
    type: 'fill_in_blank',
    sentence: '子供は寝ている＿＿＿が、実は起きていた。',
    english: 'The child was pretending to be asleep, but was actually awake.',
    correctAnswer: 'ふりをしていた',
    options: ['ふりをしていた', 'ようにしていた', 'ことにしていた', 'ところだった'],
    explanation:
      'ふりをする describes feigning an action. The child faked sleeping.',
  },
  {
    id: 'n3-furiwosuru-fib-3',
    pattern: 'ふりをする',
    type: 'fill_in_blank',
    sentence: '聞こえない＿＿＿、彼女は歩き続けた。',
    english: 'Pretending not to hear, she kept walking.',
    correctAnswer: 'ふりをして',
    options: ['ふりをして', 'ようにして', 'ことにして', 'ために'],
    explanation:
      'ふりをして (te-form) connects to the next clause — "pretending not to hear, she..."',
  },
  {
    id: 'n3-furiwosuru-mc-1',
    pattern: 'ふりをする',
    type: 'multiple_choice',
    sentence: 'What does ふりをする mean?',
    english: 'Select the best definition.',
    correctAnswer: 'To pretend or fake an action/state',
    options: [
      'To pretend or fake an action/state',
      'To try hard to do something',
      'To accidentally do something',
      'To plan to do something',
    ],
    explanation:
      'ふりをする means "to pretend" — acting as if something is true when it is not.',
  },
  {
    id: 'n3-furiwosuru-mc-2',
    pattern: 'ふりをする',
    type: 'multiple_choice',
    sentence: 'What form of the verb comes before ふりをする?',
    english: 'Select the correct pattern.',
    correctAnswer: 'Plain form (dictionary, nai, ta, etc.)',
    options: [
      'Plain form (dictionary, nai, ta, etc.)',
      'Masu-form only',
      'Te-form only',
      'Potential form only',
    ],
    explanation:
      'ふりをする follows the plain form: 食べるふり, 知らないふり, 寝たふり, etc.',
  },

  // ===========================================================================
  // 向け (intended for / aimed at)
  // ===========================================================================
  {
    id: 'n3-muke-fib-1',
    pattern: '向け',
    type: 'fill_in_blank',
    sentence: 'この教科書は初心者＿＿＿に作られている。',
    english: 'This textbook is made for beginners.',
    correctAnswer: '向け',
    options: ['向け', '向き', 'ため', '用'],
    explanation:
      '向け means "aimed at" or "intended for" a specific target audience — beginners in this case.',
  },
  {
    id: 'n3-muke-fib-2',
    pattern: '向け',
    type: 'fill_in_blank',
    sentence: '子供＿＿＿のアニメが人気だ。',
    english: 'Anime aimed at children is popular.',
    correctAnswer: '向け',
    options: ['向け', '向き', 'らしい', 'っぽい'],
    explanation:
      '向け indicates the anime is specifically produced targeting children as its audience.',
  },
  {
    id: 'n3-muke-fib-3',
    pattern: '向け',
    type: 'fill_in_blank',
    sentence: 'この製品は日本市場＿＿＿に開発されました。',
    english: 'This product was developed for the Japanese market.',
    correctAnswer: '向け',
    options: ['向け', '向き', 'として', 'に関して'],
    explanation:
      '向け shows the product was specifically targeted at the Japanese market.',
  },
  {
    id: 'n3-muke-mc-1',
    pattern: '向け',
    type: 'multiple_choice',
    sentence: 'What does 向け indicate?',
    english: 'Select the best description.',
    correctAnswer: 'Something is specifically targeted at or designed for a group',
    options: [
      'Something is specifically targeted at or designed for a group',
      'Something is suitable by nature for a group',
      'Someone is facing a direction',
      'Someone is turning around',
    ],
    explanation:
      '向け means "aimed at" or "for" — indicating intentional targeting of an audience or market.',
  },
  {
    id: 'n3-muke-mc-2',
    pattern: '向け',
    type: 'multiple_choice',
    sentence: 'How does 向け differ from 向き?',
    english: 'Select the correct distinction.',
    correctAnswer: '向け = intentionally targeted at; 向き = naturally suitable for',
    options: [
      '向け = intentionally targeted at; 向き = naturally suitable for',
      'They are completely interchangeable',
      '向け is casual; 向き is formal',
      '向け is for people; 向き is for things',
    ],
    explanation:
      '向け implies deliberate targeting (designed for), while 向き implies natural suitability (suits).',
  },

  // ===========================================================================
  // 向き (suitable for / suited to)
  // ===========================================================================
  {
    id: 'n3-muki-fib-1',
    pattern: '向き',
    type: 'fill_in_blank',
    sentence: 'このコースは上級者＿＿＿です。',
    english: 'This course is suited to advanced learners.',
    correctAnswer: '向き',
    options: ['向き', '向け', 'らしい', 'っぽい'],
    explanation:
      '向き indicates natural suitability — the course suits advanced learners by its nature.',
  },
  {
    id: 'n3-muki-fib-2',
    pattern: '向き',
    type: 'fill_in_blank',
    sentence: 'この料理は子供＿＿＿の味付けだ。',
    english: 'This dish has a flavor suited to children.',
    correctAnswer: '向き',
    options: ['向き', '向け', 'みたい', 'のような'],
    explanation:
      '向き describes the flavor as naturally appropriate for children\'s tastes.',
  },
  {
    id: 'n3-muki-fib-3',
    pattern: '向き',
    type: 'fill_in_blank',
    sentence: 'この仕事は几帳面な人＿＿＿だ。',
    english: 'This job is suited to meticulous people.',
    correctAnswer: '向き',
    options: ['向き', '向け', 'ため', 'として'],
    explanation:
      '向き expresses that the job\'s nature is a good fit for meticulous personalities.',
  },
  {
    id: 'n3-muki-mc-1',
    pattern: '向き',
    type: 'multiple_choice',
    sentence: 'What does 向き express?',
    english: 'Select the best description.',
    correctAnswer: 'Something is naturally suitable or fitting for someone',
    options: [
      'Something is naturally suitable or fitting for someone',
      'Something was deliberately designed for a target audience',
      'Someone is facing a particular direction',
      'Someone dislikes something',
    ],
    explanation:
      '向き conveys natural suitability — the thing inherently fits a certain type of person.',
  },
  {
    id: 'n3-muki-mc-2',
    pattern: '向き',
    type: 'multiple_choice',
    sentence: 'Which sentence uses 向き correctly?',
    english: 'Select the correct usage.',
    correctAnswer: 'この映画は家族向きだ。',
    options: [
      'この映画は家族向きだ。',
      'この映画は家族向きに作った。',
      'テレビが南向きに壊れた。',
      '彼は向きに勉強している。',
    ],
    explanation:
      '向き describes inherent suitability. "This movie is suited to families" is natural.',
  },

  // ===========================================================================
  // させられる (causative-passive / be made to do)
  // ===========================================================================
  {
    id: 'n3-saserareru-fib-1',
    pattern: 'させられる',
    type: 'fill_in_blank',
    sentence: '子供の頃、毎日ピアノを練習＿＿＿。',
    english: 'When I was a child, I was made to practice piano every day.',
    correctAnswer: 'させられた',
    options: ['させられた', 'させた', 'された', 'できた'],
    explanation:
      'させられる is the causative-passive: someone forced the speaker to practice piano.',
  },
  {
    id: 'n3-saserareru-fib-2',
    pattern: 'させられる',
    type: 'fill_in_blank',
    sentence: '部長に残業＿＿＿ことが多い。',
    english: 'I am often made to work overtime by the department head.',
    correctAnswer: 'させられる',
    options: ['させられる', 'させる', 'される', 'できる'],
    explanation:
      'させられる expresses being forced by someone in authority — the boss makes the speaker work overtime.',
  },
  {
    id: 'n3-saserareru-fib-3',
    pattern: 'させられる',
    type: 'fill_in_blank',
    sentence: '長い時間＿＿＿のは大変だった。',
    english: 'Being made to wait for a long time was tough.',
    correctAnswer: '待たされた',
    options: ['待たされた', '待たせた', '待った', '待てた'],
    explanation:
      '待たされる (contracted causative-passive of 待つ) means "to be made to wait." The speaker endured the wait.',
  },
  {
    id: 'n3-saserareru-mc-1',
    pattern: 'させられる',
    type: 'multiple_choice',
    sentence: 'What does the causative-passive させられる express?',
    english: 'Select the best description.',
    correctAnswer: 'Being forced or made to do something (often unwillingly)',
    options: [
      'Being forced or made to do something (often unwillingly)',
      'Allowing someone to do something',
      'Being able to do something',
      'Wanting to do something',
    ],
    explanation:
      'させられる combines causative (make someone do) with passive (be done to), meaning "be made to do."',
  },
  {
    id: 'n3-saserareru-mc-2',
    pattern: 'させられる',
    type: 'multiple_choice',
    sentence: 'How is the causative-passive of 飲む (to drink) formed?',
    english: 'Select the correct form.',
    correctAnswer: '飲まされる / 飲ませられる',
    options: [
      '飲まされる / 飲ませられる',
      '飲まれる',
      '飲める',
      '飲ませる',
    ],
    explanation:
      'Group 1 verbs can use the contracted form (飲まされる) or full form (飲ませられる) for causative-passive.',
  },

  // ===========================================================================
  // ずに (without doing)
  // ===========================================================================
  {
    id: 'n3-zuni-fib-1',
    pattern: 'ずに',
    type: 'fill_in_blank',
    sentence: '朝ごはんを食べ＿＿＿学校に行った。',
    english: 'I went to school without eating breakfast.',
    correctAnswer: 'ずに',
    options: ['ずに', 'ないで', 'なくて', 'ないと'],
    explanation:
      'ずに means "without doing" and is more formal than ないで. 食べずに = without eating.',
  },
  {
    id: 'n3-zuni-fib-2',
    pattern: 'ずに',
    type: 'fill_in_blank',
    sentence: '何も言わ＿＿＿、部屋を出て行った。',
    english: 'He left the room without saying anything.',
    correctAnswer: 'ずに',
    options: ['ずに', 'ないで', 'なくて', 'ないのに'],
    explanation:
      '言わずに (without saying) — ずに attaches to the negative stem (言わ-).',
  },
  {
    id: 'n3-zuni-fib-3',
    pattern: 'ずに',
    type: 'fill_in_blank',
    sentence: '辞書を使わ＿＿＿、この本を読んだ。',
    english: 'I read this book without using a dictionary.',
    correctAnswer: 'ずに',
    options: ['ずに', 'ないで', 'なくて', 'ないと'],
    explanation:
      'ずに shows the manner in which the reading was done — without dictionary aid.',
  },
  {
    id: 'n3-zuni-mc-1',
    pattern: 'ずに',
    type: 'multiple_choice',
    sentence: 'What does ずに mean?',
    english: 'Select the best definition.',
    correctAnswer: 'Without doing something',
    options: [
      'Without doing something',
      'After doing something',
      'Before doing something',
      'While doing something',
    ],
    explanation:
      'ずに means "without doing" — it negates the action. It is a more literary form of ないで.',
  },
  {
    id: 'n3-zuni-mc-2',
    pattern: 'ずに',
    type: 'multiple_choice',
    sentence: 'What is the ずに form of する (to do)?',
    english: 'Select the correct form.',
    correctAnswer: 'せずに',
    options: ['せずに', 'しずに', 'さずに', 'すずに'],
    explanation:
      'する is irregular: its ずに form is せずに (not しずに). This is a common test point.',
  },

  // ===========================================================================
  // っぱなし (left in a state / leaving something as is)
  // ===========================================================================
  {
    id: 'n3-ppanashi-fib-1',
    pattern: 'っぱなし',
    type: 'fill_in_blank',
    sentence: 'エアコンをつけ＿＿＿で寝てしまった。',
    english: 'I fell asleep leaving the AC on.',
    correctAnswer: 'っぱなし',
    options: ['っぱなし', 'ながら', 'がち', 'っぽい'],
    explanation:
      'っぱなし means leaving something in a state. The AC was left running unattended.',
  },
  {
    id: 'n3-ppanashi-fib-2',
    pattern: 'っぱなし',
    type: 'fill_in_blank',
    sentence: 'ドアを開け＿＿＿にしないでください。',
    english: 'Please don\'t leave the door open.',
    correctAnswer: 'っぱなし',
    options: ['っぱなし', 'ながら', 'がち', 'かけ'],
    explanation:
      'っぱなし indicates the door is being left in its open state, which is undesirable.',
  },
  {
    id: 'n3-ppanashi-fib-3',
    pattern: 'っぱなし',
    type: 'fill_in_blank',
    sentence: '電車で二時間立ち＿＿＿だった。',
    english: 'I was standing the entire two hours on the train.',
    correctAnswer: 'っぱなし',
    options: ['っぱなし', 'ながら', 'つづけ', 'っぽい'],
    explanation:
      'っぱなし here emphasizes the enduring, unpleasant state of standing for two whole hours.',
  },
  {
    id: 'n3-ppanashi-mc-1',
    pattern: 'っぱなし',
    type: 'multiple_choice',
    sentence: 'What nuance does っぱなし usually carry?',
    english: 'Select the best description.',
    correctAnswer: 'Negative — something was left in an undesirable state',
    options: [
      'Negative — something was left in an undesirable state',
      'Positive — something was completed properly',
      'Neutral — simple description of a state',
      'Formal — used in business language',
    ],
    explanation:
      'っぱなし typically carries a negative connotation — negligence or an undesirable ongoing state.',
  },
  {
    id: 'n3-ppanashi-mc-2',
    pattern: 'っぱなし',
    type: 'multiple_choice',
    sentence: 'What verb form attaches to っぱなし?',
    english: 'Select the correct form.',
    correctAnswer: 'Masu-stem (e.g., 開け + っぱなし)',
    options: [
      'Masu-stem (e.g., 開け + っぱなし)',
      'Dictionary form (e.g., 開ける + っぱなし)',
      'Te-form (e.g., 開けて + っぱなし)',
      'Past tense (e.g., 開けた + っぱなし)',
    ],
    explanation:
      'っぱなし attaches to the masu-stem: 開けます → 開け + っぱなし, つけます → つけ + っぱなし.',
  },

  // ===========================================================================
  // てからでないと (unless ~ first / not until after)
  // ===========================================================================
  {
    id: 'n3-tekaradenaito-fib-1',
    pattern: 'てからでないと',
    type: 'fill_in_blank',
    sentence: '予約し＿＿＿、この部屋は使えません。',
    english: 'Unless you make a reservation first, you cannot use this room.',
    correctAnswer: 'てからでないと',
    options: ['てからでないと', 'てから', 'ないと', 'なければ'],
    explanation:
      'てからでないと means "not unless you do ~ first." Reservation is a prerequisite for room use.',
  },
  {
    id: 'n3-tekaradenaito-fib-2',
    pattern: 'てからでないと',
    type: 'fill_in_blank',
    sentence: '実際に使っ＿＿＿、良さはわからない。',
    english: 'Unless you actually use it first, you won\'t understand how good it is.',
    correctAnswer: 'てからでないと',
    options: ['てからでないと', 'てから', 'たら', 'ても'],
    explanation:
      'てからでないと emphasizes that actual use must come first before understanding the quality.',
  },
  {
    id: 'n3-tekaradenaito-fib-3',
    pattern: 'てからでないと',
    type: 'fill_in_blank',
    sentence: '医者に相談し＿＿＿、この薬は飲めません。',
    english: 'Unless you consult a doctor first, you cannot take this medicine.',
    correctAnswer: 'てからでないと',
    options: ['てからでないと', 'てから', 'ないと', 'なくては'],
    explanation:
      'てからでないと establishes the doctor consultation as a mandatory first step.',
  },
  {
    id: 'n3-tekaradenaito-mc-1',
    pattern: 'てからでないと',
    type: 'multiple_choice',
    sentence: 'What does てからでないと express?',
    english: 'Select the best description.',
    correctAnswer: 'Something must be done first before another thing is possible',
    options: [
      'Something must be done first before another thing is possible',
      'Something happens after another action',
      'Two actions happen simultaneously',
      'An action is no longer possible',
    ],
    explanation:
      'てからでないと means "not unless ~ first" — the first action is a prerequisite for the second.',
  },
  {
    id: 'n3-tekaradenaito-mc-2',
    pattern: 'てからでないと',
    type: 'multiple_choice',
    sentence: 'What typically follows てからでないと?',
    english: 'Select the correct pattern.',
    correctAnswer: 'A negative statement (cannot do / will not happen)',
    options: [
      'A negative statement (cannot do / will not happen)',
      'A positive statement (will definitely happen)',
      'A request or command',
      'A question',
    ],
    explanation:
      'てからでないと is always followed by a negative result — "unless X first, Y cannot happen."',
  },

  // ===========================================================================
  // たとたんに (the moment / just as)
  // ===========================================================================
  {
    id: 'n3-tatotanni-fib-1',
    pattern: 'たとたんに',
    type: 'fill_in_blank',
    sentence: '外に出＿＿＿、雨が降り始めた。',
    english: 'The moment I stepped outside, it started to rain.',
    correctAnswer: 'たとたんに',
    options: ['たとたんに', 'てから', 'たあとで', 'たばかり'],
    explanation:
      'たとたんに indicates something happened immediately the instant another action was completed.',
  },
  {
    id: 'n3-tatotanni-fib-2',
    pattern: 'たとたんに',
    type: 'fill_in_blank',
    sentence: 'ベッドに横になっ＿＿＿、すぐ眠ってしまった。',
    english: 'The moment I lay down on the bed, I fell asleep immediately.',
    correctAnswer: 'たとたんに',
    options: ['たとたんに', 'てから', 'たあとで', 'ながら'],
    explanation:
      'たとたんに captures the instantaneous transition from lying down to falling asleep.',
  },
  {
    id: 'n3-tatotanni-fib-3',
    pattern: 'たとたんに',
    type: 'fill_in_blank',
    sentence: 'ドアを開け＿＿＿、猫が飛び出してきた。',
    english: 'The moment I opened the door, the cat jumped out.',
    correctAnswer: 'たとたんに',
    options: ['たとたんに', 'てから', 'たばかり', 'たあとで'],
    explanation:
      'たとたんに shows the cat\'s escape was instantaneous upon the door opening.',
  },
  {
    id: 'n3-tatotanni-mc-1',
    pattern: 'たとたんに',
    type: 'multiple_choice',
    sentence: 'What does たとたんに express?',
    english: 'Select the best description.',
    correctAnswer: 'Something happened immediately after a completed action',
    options: [
      'Something happened immediately after a completed action',
      'Something happened gradually over time',
      'Something happened before the action',
      'Something happened repeatedly',
    ],
    explanation:
      'たとたんに means "the very moment that" — emphasizing the immediacy of the second event.',
  },
  {
    id: 'n3-tatotanni-mc-2',
    pattern: 'たとたんに',
    type: 'multiple_choice',
    sentence: 'What verb form precedes とたんに?',
    english: 'Select the correct form.',
    correctAnswer: 'Past tense (ta-form)',
    options: [
      'Past tense (ta-form)',
      'Dictionary form',
      'Te-form',
      'Negative form',
    ],
    explanation:
      'とたんに always follows the ta-form of a verb: 出た + とたんに, 開けた + とたんに.',
  },

  // ===========================================================================
  // 次第 (as soon as / depending on)
  // ===========================================================================
  {
    id: 'n3-shidai-fib-1',
    pattern: '次第',
    type: 'fill_in_blank',
    sentence: '届き＿＿＿、ご連絡いたします。',
    english: 'As soon as it arrives, I will contact you.',
    correctAnswer: '次第',
    options: ['次第', 'たら', 'ながら', 'つつ'],
    explanation:
      '次第 after the masu-stem means "as soon as." 届き次第 = the moment it arrives.',
  },
  {
    id: 'n3-shidai-fib-2',
    pattern: '次第',
    type: 'fill_in_blank',
    sentence: '結果がわかり＿＿＿、お知らせします。',
    english: 'As soon as the results are known, I will inform you.',
    correctAnswer: '次第',
    options: ['次第', 'ながら', 'つつ', 'がち'],
    explanation:
      'わかり次第 = as soon as it becomes clear. This is common in business communication.',
  },
  {
    id: 'n3-shidai-fib-3',
    pattern: '次第',
    type: 'fill_in_blank',
    sentence: '成功するかどうかは努力＿＿＿だ。',
    english: 'Whether you succeed or not depends on your effort.',
    correctAnswer: '次第',
    options: ['次第', 'ため', 'おかげ', 'せい'],
    explanation:
      '次第 after a noun means "depending on." 努力次第 = it depends on effort.',
  },
  {
    id: 'n3-shidai-mc-1',
    pattern: '次第',
    type: 'multiple_choice',
    sentence: '次第 has two main meanings. What are they?',
    english: 'Select the correct pair.',
    correctAnswer: '"As soon as" (with masu-stem) and "depending on" (with noun)',
    options: [
      '"As soon as" (with masu-stem) and "depending on" (with noun)',
      '"Before" and "after"',
      '"Because of" and "in spite of"',
      '"While" and "during"',
    ],
    explanation:
      '次第 means "as soon as" when attached to a masu-stem, and "depending on" when attached to a noun.',
  },
  {
    id: 'n3-shidai-mc-2',
    pattern: '次第',
    type: 'multiple_choice',
    sentence: 'In which register is verb + 次第 most commonly used?',
    english: 'Select the best answer.',
    correctAnswer: 'Formal / business Japanese',
    options: [
      'Formal / business Japanese',
      'Very casual conversation',
      'Children\'s language',
      'Slang',
    ],
    explanation:
      'Verb masu-stem + 次第 is formal and frequently used in business and polite contexts.',
  },

  // ===========================================================================
  // てはじめて (only after doing ~ for the first time)
  // ===========================================================================
  {
    id: 'n3-tehajimete-fib-1',
    pattern: 'てはじめて',
    type: 'fill_in_blank',
    sentence: '親になっ＿＿＿、親のありがたさがわかった。',
    english: 'Only after becoming a parent did I understand the value of parents.',
    correctAnswer: 'てはじめて',
    options: ['てはじめて', 'てから', 'たあとで', 'たとたんに'],
    explanation:
      'てはじめて means "only after doing ~ did I realize for the first time." Parenthood brought understanding.',
  },
  {
    id: 'n3-tehajimete-fib-2',
    pattern: 'てはじめて',
    type: 'fill_in_blank',
    sentence: '日本に来＿＿＿、日本語の難しさを実感した。',
    english: 'Only after coming to Japan did I truly feel how difficult Japanese is.',
    correctAnswer: 'てはじめて',
    options: ['てはじめて', 'てから', 'たばかり', 'ながら'],
    explanation:
      'てはじめて emphasizes that the realization was only possible after the experience of living in Japan.',
  },
  {
    id: 'n3-tehajimete-fib-3',
    pattern: 'てはじめて',
    type: 'fill_in_blank',
    sentence: '病気になっ＿＿＿、健康の大切さがわかる。',
    english: 'Only after getting sick do you understand the importance of health.',
    correctAnswer: 'てはじめて',
    options: ['てはじめて', 'てから', 'たあとで', 'たとたんに'],
    explanation:
      'てはじめて highlights that the appreciation of health only comes after experiencing illness.',
  },
  {
    id: 'n3-tehajimete-mc-1',
    pattern: 'てはじめて',
    type: 'multiple_choice',
    sentence: 'What does てはじめて express?',
    english: 'Select the best description.',
    correctAnswer: 'Only after a certain experience does one realize or understand something',
    options: [
      'Only after a certain experience does one realize or understand something',
      'The first time someone does something',
      'Something that happens frequently',
      'Something that happened a long time ago',
    ],
    explanation:
      'てはじめて means "only after ~" — the experience was necessary to gain the realization.',
  },
  {
    id: 'n3-tehajimete-mc-2',
    pattern: 'てはじめて',
    type: 'multiple_choice',
    sentence: 'What kind of clause typically follows てはじめて?',
    english: 'Select the correct pattern.',
    correctAnswer: 'A realization or understanding (わかる, 気づく, etc.)',
    options: [
      'A realization or understanding (わかる, 気づく, etc.)',
      'A physical action (食べる, 走る, etc.)',
      'A request (ください, etc.)',
      'A future plan (つもり, etc.)',
    ],
    explanation:
      'てはじめて is almost always followed by verbs of realization like わかる, 気づく, or 実感する.',
  },

  // ===========================================================================
  // 限り (as long as / as far as)
  // ===========================================================================
  {
    id: 'n3-kagiri-fib-1',
    pattern: '限り',
    type: 'fill_in_blank',
    sentence: '私が知っている＿＿＿、彼は嘘をつかない人だ。',
    english: 'As far as I know, he is a person who does not lie.',
    correctAnswer: '限り',
    options: ['限り', 'ほど', 'だけ', 'まで'],
    explanation:
      '限り here means "as far as" — within the scope of the speaker\'s knowledge.',
  },
  {
    id: 'n3-kagiri-fib-2',
    pattern: '限り',
    type: 'fill_in_blank',
    sentence: '体が元気な＿＿＿、働き続けたい。',
    english: 'As long as I am healthy, I want to keep working.',
    correctAnswer: '限り',
    options: ['限り', 'うちに', 'ために', 'からには'],
    explanation:
      '限り means "as long as" — the condition (being healthy) enables the desire to continue working.',
  },
  {
    id: 'n3-kagiri-fib-3',
    pattern: '限り',
    type: 'fill_in_blank',
    sentence: '調べた＿＿＿では、問題は見つからなかった。',
    english: 'As far as I investigated, no problem was found.',
    correctAnswer: '限り',
    options: ['限り', 'ほど', 'だけ', 'ばかり'],
    explanation:
      '限りでは means "as far as (my investigation goes)" — limiting the scope of the statement.',
  },
  {
    id: 'n3-kagiri-mc-1',
    pattern: '限り',
    type: 'multiple_choice',
    sentence: 'What are the two main meanings of 限り?',
    english: 'Select the correct pair.',
    correctAnswer: '"As long as" (condition) and "as far as" (scope/extent)',
    options: [
      '"As long as" (condition) and "as far as" (scope/extent)',
      '"Because" and "therefore"',
      '"Although" and "however"',
      '"Before" and "after"',
    ],
    explanation:
      '限り expresses either a conditional ("as long as X, Y") or scope ("as far as X").',
  },
  {
    id: 'n3-kagiri-mc-2',
    pattern: '限り',
    type: 'multiple_choice',
    sentence: 'Which sentence uses 限り correctly?',
    english: 'Select the correct usage.',
    correctAnswer: '努力する限り、きっとうまくいく。',
    options: [
      '努力する限り、きっとうまくいく。',
      '限り食べて、おなかがいっぱいだ。',
      '雨が限り、試合は中止だ。',
      '電車が限り、遅刻した。',
    ],
    explanation:
      '努力する限り means "as long as you make an effort" — 限り follows a plain-form verb expressing a condition.',
  },
  // ===========================================================================
  // かわりに (instead of / in exchange for)
  // ===========================================================================
  {
    id: 'n3-kawarini-fib-1',
    pattern: 'かわりに',
    type: 'fill_in_blank',
    sentence: '電車が止まったので、バスに乗った＿＿＿タクシーで行った。',
    english: 'The train stopped, so instead of taking the bus, I went by taxi.',
    correctAnswer: 'かわりに',
    options: ['かわりに', 'ために', 'ついでに', 'とおりに'],
    explanation:
      'かわりに means "instead of." Here it indicates taking a taxi as a substitute for the bus.',
  },
  {
    id: 'n3-kawarini-fib-2',
    pattern: 'かわりに',
    type: 'fill_in_blank',
    sentence: '料理を作ってあげる＿＿＿、掃除をしてください。',
    english: 'In exchange for me cooking, please clean.',
    correctAnswer: 'かわりに',
    options: ['かわりに', 'ために', 'うちに', 'ことに'],
    explanation:
      'かわりに here expresses an exchange — doing one thing in return for another.',
  },
  {
    id: 'n3-kawarini-fib-3',
    pattern: 'かわりに',
    type: 'fill_in_blank',
    sentence: '社長の＿＿＿、部長が会議に出席した。',
    english: 'The department manager attended the meeting in place of the president.',
    correctAnswer: 'かわりに',
    options: ['かわりに', 'ために', 'せいで', 'おかげで'],
    explanation:
      'かわりに indicates substitution — the department manager went as a replacement for the president.',
  },
  {
    id: 'n3-kawarini-mc-1',
    pattern: 'かわりに',
    type: 'multiple_choice',
    sentence: 'What does かわりに express?',
    english: 'Select the best description of かわりに.',
    correctAnswer: 'Doing something instead of or in exchange for something else',
    options: [
      'Doing something instead of or in exchange for something else',
      'Doing something because of a reason',
      'Doing something while another action occurs',
      'Doing something in order to achieve a goal',
    ],
    explanation:
      'かわりに means "instead of" or "in exchange for," indicating substitution or reciprocal action.',
  },
  {
    id: 'n3-kawarini-mc-2',
    pattern: 'かわりに',
    type: 'multiple_choice',
    sentence: '映画を見るかわりに、家で本を読んだ。What did the speaker do?',
    english: 'Select what actually happened.',
    correctAnswer: 'Read a book at home instead of watching a movie',
    options: [
      'Read a book at home instead of watching a movie',
      'Watched a movie and then read a book',
      'Read a book while watching a movie',
      'Went to the movies and read a book there',
    ],
    explanation:
      'かわりに indicates the speaker chose reading a book at home as a substitute for watching a movie.',
  },

  // ===========================================================================
  // どころか (far from / not only ~ but also)
  // ===========================================================================
  {
    id: 'n3-dokoroka-fib-1',
    pattern: 'どころか',
    type: 'fill_in_blank',
    sentence: '彼は英語＿＿＿、フランス語もドイツ語も話せる。',
    english: 'Far from just English, he can also speak French and German.',
    correctAnswer: 'どころか',
    options: ['どころか', 'ばかりか', 'だけで', 'しか'],
    explanation:
      'どころか emphasizes that the reality far exceeds the initial statement — not only English but also French and German.',
  },
  {
    id: 'n3-dokoroka-fib-2',
    pattern: 'どころか',
    type: 'fill_in_blank',
    sentence: '簡単＿＿＿、この試験はとても難しかった。',
    english: 'Far from easy, this exam was very difficult.',
    correctAnswer: 'どころか',
    options: ['どころか', 'だから', 'なのに', 'にしても'],
    explanation:
      'どころか negates the initial assumption — it was not easy at all, but rather very difficult.',
  },
  {
    id: 'n3-dokoroka-fib-3',
    pattern: 'どころか',
    type: 'fill_in_blank',
    sentence: '休む＿＿＿、毎日残業している。',
    english: 'Far from resting, I work overtime every day.',
    correctAnswer: 'どころか',
    options: ['どころか', 'ことか', 'ものか', 'からには'],
    explanation:
      'どころか here strongly contrasts the expected rest with the reality of daily overtime.',
  },
  {
    id: 'n3-dokoroka-mc-1',
    pattern: 'どころか',
    type: 'multiple_choice',
    sentence: 'What nuance does どころか convey?',
    english: 'Select the best description.',
    correctAnswer: 'The reality is far from what was expected, often the opposite',
    options: [
      'The reality is far from what was expected, often the opposite',
      'Two events happened at the same time',
      'Something happened as a result of a cause',
      'A polite way to make a request',
    ],
    explanation:
      'どころか emphasizes a strong contrast — the actual situation is far from, or the extreme opposite of, the stated expectation.',
  },
  {
    id: 'n3-dokoroka-mc-2',
    pattern: 'どころか',
    type: 'multiple_choice',
    sentence: '給料が上がるどころか、下がってしまった。What happened to the salary?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'The salary decreased instead of increasing',
    options: [
      'The salary decreased instead of increasing',
      'The salary increased a lot',
      'The salary stayed the same',
      'The salary increased slightly',
    ],
    explanation:
      'どころか negates the expectation of a raise — far from going up, the salary actually went down.',
  },

  // ===========================================================================
  // において (in / at — formal location/context marker)
  // ===========================================================================
  {
    id: 'n3-nioite-fib-1',
    pattern: 'において',
    type: 'fill_in_blank',
    sentence: 'この問題は国際会議＿＿＿議論された。',
    english: 'This issue was discussed at the international conference.',
    correctAnswer: 'において',
    options: ['において', 'にとって', 'に関して', 'について'],
    explanation:
      'において indicates the formal setting or location where something takes place — in this case, the international conference.',
  },
  {
    id: 'n3-nioite-fib-2',
    pattern: 'において',
    type: 'fill_in_blank',
    sentence: '現代社会＿＿＿、情報技術は不可欠だ。',
    english: 'In modern society, information technology is indispensable.',
    correctAnswer: 'において',
    options: ['において', 'にとって', 'に対して', 'をもって'],
    explanation:
      'において marks "modern society" as the context or domain in which the statement applies.',
  },
  {
    id: 'n3-nioite-fib-3',
    pattern: 'において',
    type: 'fill_in_blank',
    sentence: '日本の歴史＿＿＿、この時代は重要な転換点だった。',
    english: 'In the history of Japan, this era was an important turning point.',
    correctAnswer: 'において',
    options: ['において', 'にかけて', 'にわたって', 'に加えて'],
    explanation:
      'において specifies the domain — within Japanese history — where this era holds significance.',
  },
  {
    id: 'n3-nioite-mc-1',
    pattern: 'において',
    type: 'multiple_choice',
    sentence: 'What register is において typically used in?',
    english: 'Select the best description.',
    correctAnswer: 'Formal or written language',
    options: [
      'Formal or written language',
      'Casual conversation among friends',
      'Children\'s speech',
      'Slang and informal texting',
    ],
    explanation:
      'において is a formal expression equivalent to で (at/in) and is primarily used in written texts, speeches, and formal contexts.',
  },
  {
    id: 'n3-nioite-mc-2',
    pattern: 'において',
    type: 'multiple_choice',
    sentence: 'Which particle is において closest in meaning to in everyday speech?',
    english: 'Select the equivalent casual particle.',
    correctAnswer: 'で',
    options: ['で', 'に', 'を', 'から'],
    explanation:
      'において is the formal equivalent of で when indicating a place, time, or context where something occurs.',
  },

  // ===========================================================================
  // にとって (for / from the standpoint of)
  // ===========================================================================
  {
    id: 'n3-nitotte-fib-1',
    pattern: 'にとって',
    type: 'fill_in_blank',
    sentence: '学生＿＿＿、この本はとても役に立つ。',
    english: 'For students, this book is very useful.',
    correctAnswer: 'にとって',
    options: ['にとって', 'において', 'に対して', 'について'],
    explanation:
      'にとって indicates the perspective — from the standpoint of students, the book is useful.',
  },
  {
    id: 'n3-nitotte-fib-2',
    pattern: 'にとって',
    type: 'fill_in_blank',
    sentence: '私＿＿＿、家族が一番大切です。',
    english: 'For me, family is the most important thing.',
    correctAnswer: 'にとって',
    options: ['にとって', 'にとっては', 'について', 'に関して'],
    explanation:
      'にとって expresses the speaker\'s personal perspective on what matters most.',
  },
  {
    id: 'n3-nitotte-fib-3',
    pattern: 'にとって',
    type: 'fill_in_blank',
    sentence: '外国人＿＿＿、敬語を使うのは難しい。',
    english: 'For foreigners, using honorific language is difficult.',
    correctAnswer: 'にとって',
    options: ['にとって', 'にかけて', 'において', 'によって'],
    explanation:
      'にとって marks "foreigners" as the perspective from which the difficulty is assessed.',
  },
  {
    id: 'n3-nitotte-mc-1',
    pattern: 'にとって',
    type: 'multiple_choice',
    sentence: 'What does にとって express?',
    english: 'Select the best description.',
    correctAnswer: 'A personal perspective or standpoint regarding something',
    options: [
      'A personal perspective or standpoint regarding something',
      'A physical location where something happens',
      'A time period during which something occurs',
      'A cause or reason for something',
    ],
    explanation:
      'にとって means "for (someone)" — it presents a judgment or evaluation from a particular person\'s or group\'s standpoint.',
  },
  {
    id: 'n3-nitotte-mc-2',
    pattern: 'にとって',
    type: 'multiple_choice',
    sentence: 'この仕事は彼にとって初めての経験だった。What does this sentence mean?',
    english: 'Select the correct translation.',
    correctAnswer: 'This job was a first experience for him',
    options: [
      'This job was a first experience for him',
      'He did this job at the beginning',
      'This job was done because of him',
      'He was experienced at this job',
    ],
    explanation:
      'にとって marks 彼 (him) as the person from whose perspective it was a first experience.',
  },

  // ===========================================================================
  // に加えて (in addition to)
  // ===========================================================================
  {
    id: 'n3-nikuwaete-fib-1',
    pattern: 'に加えて',
    type: 'fill_in_blank',
    sentence: '英語＿＿＿、中国語も勉強している。',
    english: 'In addition to English, I am also studying Chinese.',
    correctAnswer: 'に加えて',
    options: ['に加えて', 'について', 'に対して', 'にとって'],
    explanation:
      'に加えて means "in addition to" — studying Chinese on top of English.',
  },
  {
    id: 'n3-nikuwaete-fib-2',
    pattern: 'に加えて',
    type: 'fill_in_blank',
    sentence: '給料が安い＿＿＿、残業も多い。',
    english: 'In addition to the salary being low, there is also a lot of overtime.',
    correctAnswer: 'のに加えて',
    options: ['のに加えて', 'のについて', 'のに関して', 'のにとって'],
    explanation:
      'に加えて adds another negative factor — both the low salary and the heavy overtime.',
  },
  {
    id: 'n3-nikuwaete-fib-3',
    pattern: 'に加えて',
    type: 'fill_in_blank',
    sentence: '経験＿＿＿、熱意も必要だ。',
    english: 'In addition to experience, enthusiasm is also necessary.',
    correctAnswer: 'に加えて',
    options: ['に加えて', 'に関して', 'にかけて', 'において'],
    explanation:
      'に加えて indicates that enthusiasm is needed on top of experience.',
  },
  {
    id: 'n3-nikuwaete-mc-1',
    pattern: 'に加えて',
    type: 'multiple_choice',
    sentence: 'What does に加えて express?',
    english: 'Select the best description.',
    correctAnswer: 'Adding something on top of what is already mentioned',
    options: [
      'Adding something on top of what is already mentioned',
      'Comparing two contrasting things',
      'Expressing a cause and its result',
      'Stating something happened unexpectedly',
    ],
    explanation:
      'に加えて means "in addition to" — it signals that something is being added to what was already stated.',
  },
  {
    id: 'n3-nikuwaete-mc-2',
    pattern: 'に加えて',
    type: 'multiple_choice',
    sentence: '雨に加えて、風も強くなってきた。What is happening with the weather?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'In addition to rain, the wind has also gotten stronger',
    options: [
      'In addition to rain, the wind has also gotten stronger',
      'The rain stopped and the wind started',
      'The wind caused the rain to start',
      'It is raining but there is no wind',
    ],
    explanation:
      'に加えて indicates both weather conditions are present — rain plus increasingly strong wind.',
  },

  // ===========================================================================
  // をはじめ (starting with / including)
  // ===========================================================================
  {
    id: 'n3-wohajime-fib-1',
    pattern: 'をはじめ',
    type: 'fill_in_blank',
    sentence: '東京＿＿＿、日本の大都市は交通が便利だ。',
    english: 'Starting with Tokyo, major cities in Japan have convenient transportation.',
    correctAnswer: 'をはじめ',
    options: ['をはじめ', 'をもとに', 'をこめて', 'をとおして'],
    explanation:
      'をはじめ presents Tokyo as the primary example among major cities with good transportation.',
  },
  {
    id: 'n3-wohajime-fib-2',
    pattern: 'をはじめ',
    type: 'fill_in_blank',
    sentence: '社長＿＿＿、社員全員がパーティーに参加した。',
    english: 'Starting with the president, all employees participated in the party.',
    correctAnswer: 'をはじめ',
    options: ['をはじめ', 'をもって', 'をこめて', 'をとわず'],
    explanation:
      'をはじめ highlights the president as the leading example, implying everyone else also attended.',
  },
  {
    id: 'n3-wohajime-fib-3',
    pattern: 'をはじめ',
    type: 'fill_in_blank',
    sentence: '寿司＿＿＿、日本料理は世界中で人気がある。',
    english: 'Starting with sushi, Japanese cuisine is popular worldwide.',
    correctAnswer: 'をはじめ',
    options: ['をはじめ', 'をもとに', 'にかけて', 'に関して'],
    explanation:
      'をはじめ introduces sushi as the most representative example of popular Japanese food.',
  },
  {
    id: 'n3-wohajime-mc-1',
    pattern: 'をはじめ',
    type: 'multiple_choice',
    sentence: 'What function does をはじめ serve in a sentence?',
    english: 'Select the best description.',
    correctAnswer: 'Introduces a representative example from a group',
    options: [
      'Introduces a representative example from a group',
      'Marks the beginning of a time period',
      'Indicates the cause of an event',
      'Shows the purpose of an action',
    ],
    explanation:
      'をはじめ means "starting with" — it highlights one prominent example from a larger group.',
  },
  {
    id: 'n3-wohajime-mc-2',
    pattern: 'をはじめ',
    type: 'multiple_choice',
    sentence: 'サッカーをはじめ、いろいろなスポーツが好きです。What does this mean?',
    english: 'Select the correct translation.',
    correctAnswer: 'I like various sports, including soccer',
    options: [
      'I like various sports, including soccer',
      'I started playing soccer and other sports',
      'I quit soccer and tried other sports',
      'Soccer is the only sport I like',
    ],
    explanation:
      'をはじめ lists soccer as the primary example among the various sports the speaker likes.',
  },

  // ===========================================================================
  // にわたって (over / spanning / throughout)
  // ===========================================================================
  {
    id: 'n3-niwatatte-fib-1',
    pattern: 'にわたって',
    type: 'fill_in_blank',
    sentence: '三日間＿＿＿、会議が行われた。',
    english: 'The conference was held over a period of three days.',
    correctAnswer: 'にわたって',
    options: ['にわたって', 'において', 'にとって', 'にかけて'],
    explanation:
      'にわたって expresses that the conference spanned the entire three-day period.',
  },
  {
    id: 'n3-niwatatte-fib-2',
    pattern: 'にわたって',
    type: 'fill_in_blank',
    sentence: 'この道路は数キロ＿＿＿渋滞している。',
    english: 'This road is congested over several kilometers.',
    correctAnswer: 'にわたって',
    options: ['にわたって', 'にかけて', 'に関して', 'によって'],
    explanation:
      'にわたって indicates that the traffic jam spans across several kilometers.',
  },
  {
    id: 'n3-niwatatte-fib-3',
    pattern: 'にわたって',
    type: 'fill_in_blank',
    sentence: '長年＿＿＿、この地域の環境問題を研究してきた。',
    english: 'Over many years, I have been researching the environmental issues of this area.',
    correctAnswer: 'にわたって',
    options: ['にわたって', 'にかけて', 'をとおして', 'について'],
    explanation:
      'にわたって emphasizes that the research has continued throughout many years.',
  },
  {
    id: 'n3-niwatatte-mc-1',
    pattern: 'にわたって',
    type: 'multiple_choice',
    sentence: 'What does にわたって emphasize?',
    english: 'Select the best description.',
    correctAnswer: 'Something extends over a wide range or long period',
    options: [
      'Something extends over a wide range or long period',
      'Something happens at a specific point in time',
      'Something is done for someone else\'s benefit',
      'Something happens unexpectedly',
    ],
    explanation:
      'にわたって means "over" or "spanning" — it highlights the breadth or duration of something.',
  },
  {
    id: 'n3-niwatatte-mc-2',
    pattern: 'にわたって',
    type: 'multiple_choice',
    sentence: '全国にわたって大雪が降った。What happened?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'Heavy snow fell across the entire country',
    options: [
      'Heavy snow fell across the entire country',
      'Heavy snow fell in a small part of the country',
      'Heavy snow is expected tomorrow',
      'The country prepared for heavy snow',
    ],
    explanation:
      'にわたって with 全国 means the heavy snow covered the whole nation — spanning all regions.',
  },

  // ===========================================================================
  // に基づいて (based on)
  // ===========================================================================
  {
    id: 'n3-nimotoduite-fib-1',
    pattern: 'に基づいて',
    type: 'fill_in_blank',
    sentence: '調査結果＿＿＿、新しい計画を立てた。',
    english: 'Based on the survey results, we made a new plan.',
    correctAnswer: 'に基づいて',
    options: ['に基づいて', 'について', 'によって', 'に関して'],
    explanation:
      'に基づいて indicates that the new plan was created using the survey results as its foundation.',
  },
  {
    id: 'n3-nimotoduite-fib-2',
    pattern: 'に基づいて',
    type: 'fill_in_blank',
    sentence: 'この映画は実話＿＿＿作られた。',
    english: 'This movie was made based on a true story.',
    correctAnswer: 'に基づいて',
    options: ['に基づいて', 'について', 'にとって', 'をもとに'],
    explanation:
      'に基づいて shows that the true story served as the factual basis for the movie.',
  },
  {
    id: 'n3-nimotoduite-fib-3',
    pattern: 'に基づいて',
    type: 'fill_in_blank',
    sentence: '法律＿＿＿、この行為は禁止されている。',
    english: 'Based on the law, this act is prohibited.',
    correctAnswer: 'に基づいて',
    options: ['に基づいて', 'にとって', 'において', 'に対して'],
    explanation:
      'に基づいて indicates that the prohibition has its foundation in the law.',
  },
  {
    id: 'n3-nimotoduite-mc-1',
    pattern: 'に基づいて',
    type: 'multiple_choice',
    sentence: 'What does に基づいて mean?',
    english: 'Select the best description.',
    correctAnswer: 'Using something as a basis or foundation for an action or decision',
    options: [
      'Using something as a basis or foundation for an action or decision',
      'Going against something',
      'Doing something regardless of circumstances',
      'Doing something by accident',
    ],
    explanation:
      'に基づいて means "based on" — the following action or judgment relies on the preceding information as its foundation.',
  },
  {
    id: 'n3-nimotoduite-mc-2',
    pattern: 'に基づいて',
    type: 'multiple_choice',
    sentence: 'データに基づいて判断する。What does this mean?',
    english: 'Select the correct translation.',
    correctAnswer: 'To make a judgment based on data',
    options: [
      'To make a judgment based on data',
      'To judge the data',
      'To collect data for the first time',
      'To ignore the data and judge freely',
    ],
    explanation:
      'に基づいて shows that the judgment uses data as its factual basis.',
  },

  // ===========================================================================
  // 末に (after / at the end of — effort/deliberation)
  // ===========================================================================
  {
    id: 'n3-sueni-fib-1',
    pattern: '末に',
    type: 'fill_in_blank',
    sentence: '長い話し合いの＿＿＿、ようやく合意に達した。',
    english: 'After a long discussion, we finally reached an agreement.',
    correctAnswer: '末に',
    options: ['末に', '後に', '前に', '間に'],
    explanation:
      '末に implies that the agreement came after a prolonged and effortful discussion.',
  },
  {
    id: 'n3-sueni-fib-2',
    pattern: '末に',
    type: 'fill_in_blank',
    sentence: '悩んだ＿＿＿、留学することに決めた。',
    english: 'After much deliberation, I decided to study abroad.',
    correctAnswer: '末に',
    options: ['末に', '後で', 'ために', 'ついでに'],
    explanation:
      '末に conveys that the decision came at the end of a period of serious deliberation.',
  },
  {
    id: 'n3-sueni-fib-3',
    pattern: '末に',
    type: 'fill_in_blank',
    sentence: '何度も失敗した＿＿＿、やっと成功した。',
    english: 'After failing many times, I finally succeeded.',
    correctAnswer: '末に',
    options: ['末に', '後に', 'うちに', 'ばかりに'],
    explanation:
      '末に emphasizes that success came only after enduring many failures.',
  },
  {
    id: 'n3-sueni-mc-1',
    pattern: '末に',
    type: 'multiple_choice',
    sentence: 'What nuance does 末に add compared to simply saying 後に?',
    english: 'Select the best description.',
    correctAnswer: 'It implies the result came after considerable effort or a difficult process',
    options: [
      'It implies the result came after considerable effort or a difficult process',
      'It simply means "after" with no special nuance',
      'It indicates something happened quickly',
      'It marks an unexpected or accidental outcome',
    ],
    explanation:
      '末に implies that the outcome was reached at the end of a long, difficult, or deliberate process — unlike 後に which is neutral.',
  },
  {
    id: 'n3-sueni-mc-2',
    pattern: '末に',
    type: 'multiple_choice',
    sentence: '考えた末に、会社を辞めることにした。What does this sentence convey?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'After thinking it over carefully, I decided to quit the company',
    options: [
      'After thinking it over carefully, I decided to quit the company',
      'I quickly decided to quit the company',
      'I quit the company without thinking',
      'I thought about quitting but decided to stay',
    ],
    explanation:
      '末に indicates the decision to quit came after careful and prolonged deliberation.',
  },

  // ===========================================================================
  // 以来 (since / ever since)
  // ===========================================================================
  {
    id: 'n3-irai-fib-1',
    pattern: '以来',
    type: 'fill_in_blank',
    sentence: '日本に来て＿＿＿、毎日日本語を使っている。',
    english: 'Ever since coming to Japan, I use Japanese every day.',
    correctAnswer: '以来',
    options: ['以来', '以上', '以下', '以内'],
    explanation:
      '以来 indicates that the daily use of Japanese has continued from the point of arriving in Japan.',
  },
  {
    id: 'n3-irai-fib-2',
    pattern: '以来',
    type: 'fill_in_blank',
    sentence: '卒業＿＿＿、一度も会っていない。',
    english: 'Since graduation, we have not met even once.',
    correctAnswer: '以来',
    options: ['以来', '以上', '以後', '以前'],
    explanation:
      '以来 marks graduation as the starting point of the ongoing state of not having met.',
  },
  {
    id: 'n3-irai-fib-3',
    pattern: '以来',
    type: 'fill_in_blank',
    sentence: 'あの事故＿＿＿、彼は車を運転しなくなった。',
    english: 'Ever since that accident, he stopped driving.',
    correctAnswer: '以来',
    options: ['以来', '以降', '以前', '以内'],
    explanation:
      '以来 indicates that the change in behavior started from the accident and continues to the present.',
  },
  {
    id: 'n3-irai-mc-1',
    pattern: '以来',
    type: 'multiple_choice',
    sentence: 'What does 以来 express?',
    english: 'Select the best description.',
    correctAnswer: 'A state or action that has continued from a past point until now',
    options: [
      'A state or action that has continued from a past point until now',
      'Something that happened only once in the past',
      'Something that will happen in the future',
      'A repeated action with no specific starting point',
    ],
    explanation:
      '以来 means "ever since" — it marks a starting point in the past and implies the situation has continued to the present.',
  },
  {
    id: 'n3-irai-mc-2',
    pattern: '以来',
    type: 'multiple_choice',
    sentence: '結婚以来、ずっと幸せだ。What does this sentence convey?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'Ever since getting married, I have been happy continuously',
    options: [
      'Ever since getting married, I have been happy continuously',
      'I was happy before getting married',
      'I became happy right before the marriage',
      'I have been happy except during my marriage',
    ],
    explanation:
      '以来 with ずっと emphasizes that happiness has been a continuous state from the marriage until now.',
  },

  // ===========================================================================
  // を問わず (regardless of)
  // ===========================================================================
  {
    id: 'n3-wotowazu-fib-1',
    pattern: 'を問わず',
    type: 'fill_in_blank',
    sentence: '年齢＿＿＿、誰でも参加できます。',
    english: 'Regardless of age, anyone can participate.',
    correctAnswer: 'を問わず',
    options: ['を問わず', 'をもとに', 'をこめて', 'をとおして'],
    explanation:
      'を問わず means "regardless of" — age does not matter for participation.',
  },
  {
    id: 'n3-wotowazu-fib-2',
    pattern: 'を問わず',
    type: 'fill_in_blank',
    sentence: '経験の有無＿＿＿、応募を受け付けています。',
    english: 'Regardless of whether you have experience or not, applications are accepted.',
    correctAnswer: 'を問わず',
    options: ['を問わず', 'に関して', 'にとって', 'において'],
    explanation:
      'を問わず indicates that experience is not a factor in accepting applications.',
  },
  {
    id: 'n3-wotowazu-fib-3',
    pattern: 'を問わず',
    type: 'fill_in_blank',
    sentence: '天候＿＿＿、試合は予定通り行われる。',
    english: 'Regardless of the weather, the match will be held as scheduled.',
    correctAnswer: 'を問わず',
    options: ['を問わず', 'をはじめ', 'をもって', 'に加えて'],
    explanation:
      'を問わず shows that weather conditions will not affect the scheduled match.',
  },
  {
    id: 'n3-wotowazu-mc-1',
    pattern: 'を問わず',
    type: 'multiple_choice',
    sentence: 'What does を問わず mean?',
    english: 'Select the best description.',
    correctAnswer: 'It does not matter / regardless of a particular condition',
    options: [
      'It does not matter / regardless of a particular condition',
      'It depends on a particular condition',
      'Only if a condition is met',
      'Because of a condition',
    ],
    explanation:
      'を問わず literally means "without questioning" — the specified factor is irrelevant to the outcome.',
  },
  {
    id: 'n3-wotowazu-mc-2',
    pattern: 'を問わず',
    type: 'multiple_choice',
    sentence: '性別を問わず、この仕事に応募できる。What is the requirement?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'There is no gender requirement for applying to this job',
    options: [
      'There is no gender requirement for applying to this job',
      'Only men can apply to this job',
      'Only women can apply to this job',
      'Gender must be stated when applying',
    ],
    explanation:
      'を問わず means gender is not questioned or considered — anyone can apply regardless of gender.',
  },

  // ===========================================================================
  // ものの (although / even though)
  // ===========================================================================
  {
    id: 'n3-monono-fib-1',
    pattern: 'ものの',
    type: 'fill_in_blank',
    sentence: '薬を飲んだ＿＿＿、熱は下がらなかった。',
    english: 'Although I took medicine, the fever did not go down.',
    correctAnswer: 'ものの',
    options: ['ものの', 'ものだ', 'ものか', 'もので'],
    explanation:
      'ものの expresses concession — taking medicine did not produce the expected result of reducing the fever.',
  },
  {
    id: 'n3-monono-fib-2',
    pattern: 'ものの',
    type: 'fill_in_blank',
    sentence: '日本語を3年勉強した＿＿＿、まだ上手に話せない。',
    english: 'Although I studied Japanese for 3 years, I still cannot speak well.',
    correctAnswer: 'ものの',
    options: ['ものの', 'ものだ', 'ことに', 'ために'],
    explanation:
      'ものの acknowledges the effort of studying while noting the disappointing result.',
  },
  {
    id: 'n3-monono-fib-3',
    pattern: 'ものの',
    type: 'fill_in_blank',
    sentence: '新しいパソコンを買った＿＿＿、使い方がわからない。',
    english: 'Although I bought a new computer, I do not know how to use it.',
    correctAnswer: 'ものの',
    options: ['ものの', 'ものか', 'ことか', 'わけで'],
    explanation:
      'ものの creates a contrast between buying the computer and not knowing how to use it.',
  },
  {
    id: 'n3-monono-mc-1',
    pattern: 'ものの',
    type: 'multiple_choice',
    sentence: 'What does ものの express?',
    english: 'Select the best description.',
    correctAnswer: 'A concession — acknowledging one thing while stating a contrasting result',
    options: [
      'A concession — acknowledging one thing while stating a contrasting result',
      'A reason or cause for something',
      'A desire or wish',
      'A habitual action from the past',
    ],
    explanation:
      'ものの means "although" or "even though" — it presents a fact and then a result that contradicts expectations.',
  },
  {
    id: 'n3-monono-mc-2',
    pattern: 'ものの',
    type: 'multiple_choice',
    sentence: '引っ越したものの、新しい街に慣れない。What is the speaker\'s situation?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'The speaker moved but has not gotten used to the new town',
    options: [
      'The speaker moved but has not gotten used to the new town',
      'The speaker wants to move to a new town',
      'The speaker is used to the new town after moving',
      'The speaker decided not to move',
    ],
    explanation:
      'ものの indicates the speaker did move, but the expected adjustment has not happened.',
  },

  // ===========================================================================
  // からといって (just because ~ doesn't mean)
  // ===========================================================================
  {
    id: 'n3-karatoitte-fib-1',
    pattern: 'からといって',
    type: 'fill_in_blank',
    sentence: '安い＿＿＿、品質が悪いとは限らない。',
    english: 'Just because it is cheap does not necessarily mean the quality is bad.',
    correctAnswer: 'からといって',
    options: ['からといって', 'からには', 'からこそ', 'からして'],
    explanation:
      'からといって warns against assuming that cheapness automatically means poor quality.',
  },
  {
    id: 'n3-karatoitte-fib-2',
    pattern: 'からといって',
    type: 'fill_in_blank',
    sentence: '日本人だ＿＿＿、漢字が全部読めるわけではない。',
    english: 'Just because someone is Japanese does not mean they can read all kanji.',
    correctAnswer: 'からといって',
    options: ['からといって', 'からには', 'からこそ', 'だけあって'],
    explanation:
      'からといって cautions against the assumption that being Japanese guarantees full kanji literacy.',
  },
  {
    id: 'n3-karatoitte-fib-3',
    pattern: 'からといって',
    type: 'fill_in_blank',
    sentence: '有名だ＿＿＿、そのレストランがおいしいとは限らない。',
    english: 'Just because it is famous does not mean that restaurant is delicious.',
    correctAnswer: 'からといって',
    options: ['からといって', 'からして', 'からこそ', 'ことから'],
    explanation:
      'からといって challenges the assumption that fame equals good food.',
  },
  {
    id: 'n3-karatoitte-mc-1',
    pattern: 'からといって',
    type: 'multiple_choice',
    sentence: 'What does からといって typically express?',
    english: 'Select the best description.',
    correctAnswer: 'A warning that a reason alone is not sufficient to draw a conclusion',
    options: [
      'A warning that a reason alone is not sufficient to draw a conclusion',
      'A strong reason that fully justifies a conclusion',
      'An expression of gratitude',
      'A comparison between two similar things',
    ],
    explanation:
      'からといって means "just because" — it cautions that the stated reason does not guarantee the expected conclusion.',
  },
  {
    id: 'n3-karatoitte-mc-2',
    pattern: 'からといって',
    type: 'multiple_choice',
    sentence: 'お金があるからといって、幸せだとは言えない。What is the speaker saying?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'Having money does not necessarily mean you are happy',
    options: [
      'Having money does not necessarily mean you are happy',
      'Having money definitely makes you happy',
      'You need money to be happy',
      'Happy people always have money',
    ],
    explanation:
      'からといって negates the direct link between having money and being happy.',
  },

  // ===========================================================================
  // くせに (even though / despite — with criticism)
  // ===========================================================================
  {
    id: 'n3-kuseni-fib-1',
    pattern: 'くせに',
    type: 'fill_in_blank',
    sentence: '知っている＿＿＿、教えてくれない。',
    english: 'Even though he knows, he won\'t tell me.',
    correctAnswer: 'くせに',
    options: ['くせに', 'のに', 'ために', 'ばかりに'],
    explanation:
      'くせに expresses the speaker\'s frustration — despite knowing, the person refuses to share.',
  },
  {
    id: 'n3-kuseni-fib-2',
    pattern: 'くせに',
    type: 'fill_in_blank',
    sentence: '自分で料理できない＿＿＿、人の料理に文句を言う。',
    english: 'Despite not being able to cook himself, he complains about other people\'s cooking.',
    correctAnswer: 'くせに',
    options: ['くせに', 'ものの', 'ことに', 'ながら'],
    explanation:
      'くせに carries a critical tone — the speaker is annoyed that someone who cannot cook dares to criticize others.',
  },
  {
    id: 'n3-kuseni-fib-3',
    pattern: 'くせに',
    type: 'fill_in_blank',
    sentence: 'お金がない＿＿＿、高いものばかり買っている。',
    english: 'Despite having no money, he keeps buying expensive things.',
    correctAnswer: 'くせに',
    options: ['くせに', 'のに', 'ために', 'からには'],
    explanation:
      'くせに expresses criticism of the contradictory behavior — no money but buying expensive items.',
  },
  {
    id: 'n3-kuseni-mc-1',
    pattern: 'くせに',
    type: 'multiple_choice',
    sentence: 'How does くせに differ from のに?',
    english: 'Select the best distinction.',
    correctAnswer: 'くせに carries a stronger sense of blame or criticism toward someone',
    options: [
      'くせに carries a stronger sense of blame or criticism toward someone',
      'They are exactly the same with no difference',
      'のに is more critical than くせに',
      'くせに is used only in formal writing',
    ],
    explanation:
      'Both mean "even though," but くせに has a distinctly critical, accusatory, or contemptuous nuance that のに lacks.',
  },
  {
    id: 'n3-kuseni-mc-2',
    pattern: 'くせに',
    type: 'multiple_choice',
    sentence: '子供のくせに、生意気なことを言う。What tone does this sentence have?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'Critical — the speaker is annoyed that a child says cheeky things',
    options: [
      'Critical — the speaker is annoyed that a child says cheeky things',
      'Praising — the speaker is impressed by the child',
      'Neutral — the speaker is simply describing the child',
      'Sad — the speaker feels sorry for the child',
    ],
    explanation:
      'くせに shows disapproval — the speaker criticizes the child for speaking impudently despite being young.',
  },

  // ===========================================================================
  // てしょうがない (can't help but / unbearably)
  // ===========================================================================
  {
    id: 'n3-teshouganai-fib-1',
    pattern: 'てしょうがない',
    type: 'fill_in_blank',
    sentence: '試験の結果が気になっ＿＿＿。',
    english: 'I can\'t help but worry about the exam results.',
    correctAnswer: 'てしょうがない',
    options: ['てしょうがない', 'てたまらない', 'てならない', 'てはいけない'],
    explanation:
      'てしょうがない expresses an uncontrollable feeling — the worry about exam results is overwhelming.',
  },
  {
    id: 'n3-teshouganai-fib-2',
    pattern: 'てしょうがない',
    type: 'fill_in_blank',
    sentence: 'お腹が空い＿＿＿。',
    english: 'I am unbearably hungry.',
    correctAnswer: 'てしょうがない',
    options: ['てしょうがない', 'てはいけない', 'てもいい', 'てほしい'],
    explanation:
      'てしょうがない emphasizes that the hunger is extreme and impossible to ignore.',
  },
  {
    id: 'n3-teshouganai-fib-3',
    pattern: 'てしょうがない',
    type: 'fill_in_blank',
    sentence: '暑く＿＿＿から、エアコンをつけた。',
    english: 'Because it was unbearably hot, I turned on the air conditioner.',
    correctAnswer: 'てしょうがない',
    options: ['てしょうがない', 'てたまらない', 'てはいけない', 'てもいい'],
    explanation:
      'てしょうがない describes the heat as so extreme that the speaker had no choice but to use the AC.',
  },
  {
    id: 'n3-teshouganai-mc-1',
    pattern: 'てしょうがない',
    type: 'multiple_choice',
    sentence: 'What does てしょうがない express?',
    english: 'Select the best description.',
    correctAnswer: 'A feeling or sensation so strong that it cannot be suppressed',
    options: [
      'A feeling or sensation so strong that it cannot be suppressed',
      'A prohibition against doing something',
      'A polite request to someone',
      'An obligation that must be fulfilled',
    ],
    explanation:
      'てしょうがない means "can\'t help but" or "unbearably" — the emotion or sensation is beyond one\'s control.',
  },
  {
    id: 'n3-teshouganai-mc-2',
    pattern: 'てしょうがない',
    type: 'multiple_choice',
    sentence: '寂しくてしょうがない。What is the speaker feeling?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'The speaker feels overwhelmingly lonely and cannot help it',
    options: [
      'The speaker feels overwhelmingly lonely and cannot help it',
      'The speaker is not lonely at all',
      'The speaker used to be lonely but is not anymore',
      'The speaker is pretending to be lonely',
    ],
    explanation:
      'てしょうがない conveys that the loneliness is so intense the speaker cannot suppress or control it.',
  },

  // ===========================================================================
  // ほど (to the extent that / the more ~ the more)
  // ===========================================================================
  {
    id: 'n3-hodo-fib-1',
    pattern: 'ほど',
    type: 'fill_in_blank',
    sentence: '泣きたい＿＿＿悲しかった。',
    english: 'I was so sad that I wanted to cry.',
    correctAnswer: 'ほど',
    options: ['ほど', 'まで', 'くらい', 'だけ'],
    explanation:
      'ほど indicates the degree of sadness — it was sad to the extent of wanting to cry.',
  },
  {
    id: 'n3-hodo-fib-2',
    pattern: 'ほど',
    type: 'fill_in_blank',
    sentence: '練習すれば する＿＿＿上手になる。',
    english: 'The more you practice, the better you get.',
    correctAnswer: 'ほど',
    options: ['ほど', 'まで', 'だけ', 'ばかり'],
    explanation:
      'ほど in the ～ば～ほど pattern means "the more ~ the more" — more practice leads to more skill.',
  },
  {
    id: 'n3-hodo-fib-3',
    pattern: 'ほど',
    type: 'fill_in_blank',
    sentence: 'この問題は思った＿＿＿難しくなかった。',
    english: 'This problem was not as difficult as I thought.',
    correctAnswer: 'ほど',
    options: ['ほど', 'まで', 'だけ', 'より'],
    explanation:
      'ほど with a negative sentence means "not as much as" — the difficulty was less than expected.',
  },
  {
    id: 'n3-hodo-mc-1',
    pattern: 'ほど',
    type: 'multiple_choice',
    sentence: 'Which usage of ほど means "the more ~ the more"?',
    english: 'Select the correct pattern.',
    correctAnswer: 'Verb ば + Verb ほど',
    options: [
      'Verb ば + Verb ほど',
      'Verb + ほど + だ',
      'Noun + ほど + ない',
      'Adjective + ほど + する',
    ],
    explanation:
      'The ～ば～ほど construction expresses a proportional relationship — as one thing increases, so does another.',
  },
  {
    id: 'n3-hodo-mc-2',
    pattern: 'ほど',
    type: 'multiple_choice',
    sentence: '死ぬほど疲れた。What does this sentence mean?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'I am so tired I could die (extreme exaggeration)',
    options: [
      'I am so tired I could die (extreme exaggeration)',
      'I died from being tired',
      'I am slightly tired',
      'I am not tired at all',
    ],
    explanation:
      'ほど here expresses extreme degree through hyperbole — tired to the point of dying (figuratively).',
  },

  // ===========================================================================
  // とともに (together with / as well as / at the same time as)
  // ===========================================================================
  {
    id: 'n3-totomoni-fib-1',
    pattern: 'とともに',
    type: 'fill_in_blank',
    sentence: '時代の変化＿＿＿、人々の生活も変わった。',
    english: 'Along with the change of the times, people\'s lives also changed.',
    correctAnswer: 'とともに',
    options: ['とともに', 'について', 'にとって', 'に関して'],
    explanation:
      'とともに indicates that the changes in lifestyle occurred simultaneously with the changing times.',
  },
  {
    id: 'n3-totomoni-fib-2',
    pattern: 'とともに',
    type: 'fill_in_blank',
    sentence: '年をとる＿＿＿、体力が落ちてきた。',
    english: 'As I get older, my physical strength has been declining.',
    correctAnswer: 'とともに',
    options: ['とともに', 'について', 'にとって', 'において'],
    explanation:
      'とともに shows that the decline in physical strength happens in parallel with aging.',
  },
  {
    id: 'n3-totomoni-fib-3',
    pattern: 'とともに',
    type: 'fill_in_blank',
    sentence: '家族＿＿＿、新年を迎えた。',
    english: 'I welcomed the new year together with my family.',
    correctAnswer: 'とともに',
    options: ['とともに', 'について', 'に対して', 'にかけて'],
    explanation:
      'とともに here means "together with" — celebrating the new year alongside family.',
  },
  {
    id: 'n3-totomoni-mc-1',
    pattern: 'とともに',
    type: 'multiple_choice',
    sentence: 'How many main usages does とともに have?',
    english: 'Select the best answer.',
    correctAnswer: 'Two: "together with" (accompaniment) and "at the same time as" (simultaneous change)',
    options: [
      'Two: "together with" (accompaniment) and "at the same time as" (simultaneous change)',
      'One: only "together with" for physical accompaniment',
      'One: only "because of" for stating reasons',
      'Three: "instead of," "in spite of," and "because of"',
    ],
    explanation:
      'とともに has two main uses: (1) "together with" someone/something and (2) "as" or "at the same time as" a change occurs.',
  },
  {
    id: 'n3-totomoni-mc-2',
    pattern: 'とともに',
    type: 'multiple_choice',
    sentence: '経済の発展とともに、環境問題も増えた。What is being described?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'Environmental problems increased alongside economic development',
    options: [
      'Environmental problems increased alongside economic development',
      'Economic development solved the environmental problems',
      'Environmental problems caused economic development',
      'Economic development happened after environmental problems were solved',
    ],
    explanation:
      'とともに shows that both developments happened in parallel — the economy grew and environmental issues increased simultaneously.',
  },

  // ===========================================================================
  // だらけ (full of / covered with — negative connotation)
  // ===========================================================================
  {
    id: 'n3-darake-fib-1',
    pattern: 'だらけ',
    type: 'fill_in_blank',
    sentence: 'この部屋はほこり＿＿＿だ。',
    english: 'This room is full of dust.',
    correctAnswer: 'だらけ',
    options: ['だらけ', 'ばかり', 'まみれ', 'ずくめ'],
    explanation:
      'だらけ indicates the room is covered with or full of dust, carrying a negative connotation of messiness.',
  },
  {
    id: 'n3-darake-fib-2',
    pattern: 'だらけ',
    type: 'fill_in_blank',
    sentence: 'このレポートは間違い＿＿＿だ。',
    english: 'This report is full of mistakes.',
    correctAnswer: 'だらけ',
    options: ['だらけ', 'ばかり', 'だけ', 'がち'],
    explanation:
      'だらけ emphasizes that the report is riddled with mistakes throughout.',
  },
  {
    id: 'n3-darake-fib-3',
    pattern: 'だらけ',
    type: 'fill_in_blank',
    sentence: '子供たちは泥＿＿＿になって遊んでいた。',
    english: 'The children were playing covered in mud.',
    correctAnswer: 'だらけ',
    options: ['だらけ', 'ばかり', 'がち', 'っぽい'],
    explanation:
      'だらけ describes the children as covered all over with mud from playing.',
  },
  {
    id: 'n3-darake-mc-1',
    pattern: 'だらけ',
    type: 'multiple_choice',
    sentence: 'What connotation does だらけ typically carry?',
    english: 'Select the best description.',
    correctAnswer: 'Negative — something is undesirably full of or covered with something',
    options: [
      'Negative — something is undesirably full of or covered with something',
      'Positive — something is wonderfully filled with good things',
      'Neutral — simply states a quantity',
      'Formal — used only in academic writing',
    ],
    explanation:
      'だらけ almost always carries a negative connotation — the thing it describes is undesirably abundant or messy.',
  },
  {
    id: 'n3-darake-mc-2',
    pattern: 'だらけ',
    type: 'multiple_choice',
    sentence: '傷だらけの猫を見つけた。What kind of cat was found?',
    english: 'Select the correct interpretation.',
    correctAnswer: 'A cat covered in scratches and wounds',
    options: [
      'A cat covered in scratches and wounds',
      'A perfectly healthy cat',
      'A cat with beautiful fur',
      'A cat that was just groomed',
    ],
    explanation:
      'だらけ with 傷 (wounds/scratches) indicates the cat was found in a battered state, covered with injuries.',
  },
]
