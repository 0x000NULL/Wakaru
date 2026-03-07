import type { GrammarExercise } from '@/types/grammar-quiz'

export const N4_EXT_GRAMMAR_EXERCISES: GrammarExercise[] = [
  // ===========================================================================
  // てみる (try doing)
  // ===========================================================================
  {
    id: 'temiru-fib-1',
    pattern: 'てみる',
    type: 'fill_in_blank',
    sentence: '新しいレストランに行っ＿＿＿。',
    english: 'I tried going to the new restaurant.',
    correctAnswer: 'てみた',
    options: ['てみた', 'ている', 'ておいた', 'てきた'],
    explanation:
      'てみる means "try doing something to see what it is like." 行ってみた = tried going.',
  },
  {
    id: 'temiru-fib-2',
    pattern: 'てみる',
    type: 'fill_in_blank',
    sentence: 'この靴を履い＿＿＿いいですか。',
    english: 'May I try wearing these shoes?',
    correctAnswer: 'てみても',
    options: ['てみても', 'ていても', 'ておいても', 'てきても'],
    explanation:
      'てみる means "try doing." Here てみてもいいですか asks for permission to try something.',
  },
  {
    id: 'temiru-fib-3',
    pattern: 'てみる',
    type: 'fill_in_blank',
    sentence: '日本のお菓子を食べ＿＿＿ください。',
    english: 'Please try eating Japanese sweets.',
    correctAnswer: 'てみて',
    options: ['てみて', 'ていて', 'ておいて', 'てきて'],
    explanation:
      'てみてください is a polite invitation to try doing something. 食べてみてください = please try eating.',
  },
  {
    id: 'temiru-mc-1',
    pattern: 'てみる',
    type: 'multiple_choice',
    sentence: 'What does てみる express?',
    english: 'Select the best description of てみる.',
    correctAnswer: 'Trying something to see what it is like',
    options: [
      'Trying something to see what it is like',
      'Attempting something difficult with effort',
      'Doing something in advance',
      'Continuing an action into the future',
    ],
    explanation:
      'てみる means trying something as an experiment or to experience it, not attempting with effort (ようとする).',
  },
  {
    id: 'temiru-mc-2',
    pattern: 'てみる',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses てみる?',
    english: 'Choose the grammatically correct sentence.',
    correctAnswer: 'この映画を見てみたい。',
    options: [
      'この映画を見てみたい。',
      'この映画を見るてみたい。',
      'この映画を見みたい。',
      'この映画を見てみるたい。',
    ],
    explanation:
      'てみる attaches to the て-form: 見て + みる. To say "want to try," conjugate みる with たい: 見てみたい.',
  },

  // ===========================================================================
  // ておく (do in advance / leave as is)
  // ===========================================================================
  {
    id: 'teoku-fib-1',
    pattern: 'ておく',
    type: 'fill_in_blank',
    sentence: 'パーティーの前に飲み物を買っ＿＿＿。',
    english: 'I bought drinks in advance before the party.',
    correctAnswer: 'ておいた',
    options: ['ておいた', 'てみた', 'てきた', 'ていた'],
    explanation:
      'ておく expresses doing something in advance as preparation. 買っておいた = bought in advance.',
  },
  {
    id: 'teoku-fib-2',
    pattern: 'ておく',
    type: 'fill_in_blank',
    sentence: '窓を開け＿＿＿ください。',
    english: 'Please leave the window open.',
    correctAnswer: 'ておいて',
    options: ['ておいて', 'てみて', 'ていて', 'てきて'],
    explanation:
      'ておく can mean "leave something in a state." 開けておいてください = please leave it open.',
  },
  {
    id: 'teoku-fib-3',
    pattern: 'ておく',
    type: 'fill_in_blank',
    sentence: '明日のプレゼンのためにスライドを作っ＿＿＿。',
    english: 'I will prepare the slides in advance for tomorrow\'s presentation.',
    correctAnswer: 'ておく',
    options: ['ておく', 'てみる', 'ていく', 'てくる'],
    explanation:
      'ておく expresses doing something in preparation. 作っておく = make in advance.',
  },
  {
    id: 'teoku-mc-1',
    pattern: 'ておく',
    type: 'multiple_choice',
    sentence: 'What nuance does ておく add to an action?',
    english: 'Select the meaning of ておく.',
    correctAnswer: 'Doing something in advance or for preparation',
    options: [
      'Doing something in advance or for preparation',
      'Trying something for the first time',
      'Doing something gradually over time',
      'Doing something repeatedly',
    ],
    explanation:
      'ておく expresses preparation or leaving something in a certain state intentionally.',
  },
  {
    id: 'teoku-mc-2',
    pattern: 'ておく',
    type: 'multiple_choice',
    sentence: 'What is the casual contraction of ておく?',
    english: 'Select the casual spoken form.',
    correctAnswer: 'とく',
    options: ['とく', 'てく', 'とる', 'ちゃう'],
    explanation:
      'In casual speech, ておく contracts to とく: 買っておく → 買っとく, 調べておいた → 調べといた.',
  },

  // ===========================================================================
  // ていく (gradual change going forward)
  // ===========================================================================
  {
    id: 'teiku-fib-1',
    pattern: 'ていく',
    type: 'fill_in_blank',
    sentence: '日本語の勉強をこれからも続け＿＿＿つもりだ。',
    english: 'I intend to keep continuing my Japanese studies going forward.',
    correctAnswer: 'ていく',
    options: ['ていく', 'てくる', 'ておく', 'てみる'],
    explanation:
      'ていく expresses an action or change continuing from now into the future. 続けていく = keep continuing going forward.',
  },
  {
    id: 'teiku-fib-2',
    pattern: 'ていく',
    type: 'fill_in_blank',
    sentence: '環境問題はこれからもっと深刻になっ＿＿＿だろう。',
    english: 'Environmental problems will probably keep becoming more serious.',
    correctAnswer: 'ていく',
    options: ['ていく', 'てくる', 'ておく', 'てある'],
    explanation:
      'ていく describes a change progressing from now into the future. なっていく = will keep becoming.',
  },
  {
    id: 'teiku-fib-3',
    pattern: 'ていく',
    type: 'fill_in_blank',
    sentence: '傘を持っ＿＿＿ほうがいいよ。',
    english: 'You should take an umbrella (with you).',
    correctAnswer: 'ていった',
    options: ['ていった', 'てきた', 'ておいた', 'てみた'],
    explanation:
      'ていく can mean physically taking something with you (away from current location). 持っていく = take (with you).',
  },
  {
    id: 'teiku-mc-1',
    pattern: 'ていく',
    type: 'multiple_choice',
    sentence: 'What direction does ていく indicate for changes over time?',
    english: 'Select the temporal direction of ていく.',
    correctAnswer: 'From the present into the future',
    options: [
      'From the present into the future',
      'From the past up to the present',
      'A completed past action',
      'A sudden, immediate change',
    ],
    explanation:
      'ていく describes changes or actions going forward from now, while てくる describes changes that have developed up to the present.',
  },
  {
    id: 'teiku-mc-2',
    pattern: 'ていく',
    type: 'multiple_choice',
    sentence: 'Which sentence uses ていく correctly for a future trend?',
    english: 'Choose the correct usage.',
    correctAnswer: '人口はこれから減っていくだろう。',
    options: [
      '人口はこれから減っていくだろう。',
      '人口はこれから減ってくるだろう。',
      '人口はこれから減っておくだろう。',
      '人口はこれから減ってみるだろう。',
    ],
    explanation:
      'ていく is used for trends continuing into the future. "The population will keep decreasing from now on."',
  },

  // ===========================================================================
  // てくる (gradual change up to now)
  // ===========================================================================
  {
    id: 'tekuru-fib-1',
    pattern: 'てくる',
    type: 'fill_in_blank',
    sentence: '日本語が少しずつ分かるようになっ＿＿＿。',
    english: 'I have gradually come to understand Japanese.',
    correctAnswer: 'てきた',
    options: ['てきた', 'ていった', 'ておいた', 'てみた'],
    explanation:
      'てくる describes a gradual change from the past up to the present. なってきた = has come to be.',
  },
  {
    id: 'tekuru-fib-2',
    pattern: 'てくる',
    type: 'fill_in_blank',
    sentence: '急に風が強くなっ＿＿＿。',
    english: 'The wind suddenly started to get stronger.',
    correctAnswer: 'てきた',
    options: ['てきた', 'ていった', 'ておいた', 'てある'],
    explanation:
      'てくる can express the emergence of a change. なってきた = has started to become (a change emerging up to now).',
  },
  {
    id: 'tekuru-fib-3',
    pattern: 'てくる',
    type: 'fill_in_blank',
    sentence: 'ちょっと牛乳を買っ＿＿＿ね。',
    english: 'I\'ll go buy some milk and come back.',
    correctAnswer: 'てくる',
    options: ['てくる', 'ていく', 'ておく', 'てみる'],
    explanation:
      'てくる can mean going somewhere, doing something, and coming back. 買ってくる = go buy and come back.',
  },
  {
    id: 'tekuru-mc-1',
    pattern: 'てくる',
    type: 'multiple_choice',
    sentence: 'Which meaning does てくる NOT have?',
    english: 'Select the meaning that does not apply to てくる.',
    correctAnswer: 'Doing something in advance as preparation',
    options: [
      'Doing something in advance as preparation',
      'A change developing up to the present',
      'Something beginning to emerge',
      'Going somewhere and coming back',
    ],
    explanation:
      'Doing something in advance is ておく. てくる expresses changes up to now, emergence, or going and returning.',
  },
  {
    id: 'tekuru-mc-2',
    pattern: 'てくる',
    type: 'multiple_choice',
    sentence: 'お腹が空い＿＿＿。What fills the blank?',
    english: '"I\'ve gotten hungry." Choose the correct form.',
    correctAnswer: 'てきた',
    options: ['てきた', 'ていった', 'ておいた', 'てみた'],
    explanation:
      'てくる describes a change emerging up to the present moment. "I have started to feel hungry" uses てきた.',
  },

  // ===========================================================================
  // よう/おう（意向形）(volitional form)
  // ===========================================================================
  {
    id: 'ikoukei-fib-1',
    pattern: 'よう/おう（意向形）',
    type: 'fill_in_blank',
    sentence: '今日は早く寝＿＿＿。',
    english: 'Let\'s go to sleep early today.',
    correctAnswer: 'よう',
    options: ['よう', 'ます', 'たい', 'ない'],
    explanation:
      'The volitional form of る-verbs: drop る and add よう. 寝る → 寝よう (let\'s sleep).',
  },
  {
    id: 'ikoukei-fib-2',
    pattern: 'よう/おう（意向形）',
    type: 'fill_in_blank',
    sentence: '週末はどこかに出かけ＿＿＿と思っている。',
    english: 'I\'m thinking of going out somewhere on the weekend.',
    correctAnswer: 'よう',
    options: ['よう', 'たい', 'ます', 'ない'],
    explanation:
      'ようと思う means "I\'m thinking of doing." 出かけようと思っている = I\'m thinking of going out.',
  },
  {
    id: 'ikoukei-fib-3',
    pattern: 'よう/おう（意向形）',
    type: 'fill_in_blank',
    sentence: 'みんなで一緒にカラオケに行＿＿＿。',
    english: 'Let\'s all go to karaoke together.',
    correctAnswer: 'こう',
    options: ['こう', 'きます', 'きたい', 'かない'],
    explanation:
      'The volitional form of う-verbs changes the final う to おう. 行く → 行こう (let\'s go).',
  },
  {
    id: 'ikoukei-mc-1',
    pattern: 'よう/おう（意向形）',
    type: 'multiple_choice',
    sentence: 'What is the volitional form of 食べる?',
    english: 'Choose the correct volitional form.',
    correctAnswer: '食べよう',
    options: ['食べよう', '食べおう', '食べろう', '食べらう'],
    explanation:
      'For る-verbs, drop る and add よう: 食べる → 食べよう.',
  },
  {
    id: 'ikoukei-mc-2',
    pattern: 'よう/おう（意向形）',
    type: 'multiple_choice',
    sentence: 'What is the volitional form of する?',
    english: 'Choose the correct volitional form of する.',
    correctAnswer: 'しよう',
    options: ['しよう', 'すよう', 'するよう', 'しおう'],
    explanation:
      'する is irregular: the volitional form is しよう.',
  },

  // ===========================================================================
  // 可能形 (potential form)
  // ===========================================================================
  {
    id: 'kanoukei-fib-1',
    pattern: '可能形',
    type: 'fill_in_blank',
    sentence: '日本語の新聞が＿＿＿ようになりたい。',
    english: 'I want to become able to read Japanese newspapers.',
    correctAnswer: '読める',
    options: ['読める', '読む', '読んだ', '読まない'],
    explanation:
      'The potential form of 読む (う-verb) is 読める. Change the final う to える.',
  },
  {
    id: 'kanoukei-fib-2',
    pattern: '可能形',
    type: 'fill_in_blank',
    sentence: 'あの山の上から富士山が＿＿＿。',
    english: 'You can see Mt. Fuji from the top of that mountain.',
    correctAnswer: '見える',
    options: ['見える', '見られる', '見る', '見た'],
    explanation:
      '見える is the potential/spontaneous form meaning "can be seen" (naturally visible). It differs from 見られる (ability to watch).',
  },
  {
    id: 'kanoukei-fib-3',
    pattern: '可能形',
    type: 'fill_in_blank',
    sentence: 'お箸で上手にご飯が＿＿＿ますか。',
    english: 'Can you eat rice well with chopsticks?',
    correctAnswer: '食べられ',
    options: ['食べられ', '食べ', '食べて', '食べよう'],
    explanation:
      'The potential form of 食べる (る-verb) is 食べられる. With potential verbs, the object often takes が.',
  },
  {
    id: 'kanoukei-mc-1',
    pattern: '可能形',
    type: 'multiple_choice',
    sentence: 'What is the potential form of 書く?',
    english: 'Choose the correct potential form.',
    correctAnswer: '書ける',
    options: ['書ける', '書かれる', '書こう', '書きたい'],
    explanation:
      'For う-verbs, change the final う to える: 書く → 書ける (can write). 書かれる is the passive form.',
  },
  {
    id: 'kanoukei-mc-2',
    pattern: '可能形',
    type: 'multiple_choice',
    sentence: 'Which particle often marks the object with potential verbs?',
    english: 'Select the particle commonly used.',
    correctAnswer: 'が',
    options: ['が', 'を', 'に', 'で'],
    explanation:
      'With potential verbs, the object is often marked with が instead of を: 漢字が読める (can read kanji).',
  },

  // ===========================================================================
  // 命令形 (imperative form)
  // ===========================================================================
  {
    id: 'meireikei-fib-1',
    pattern: '命令形',
    type: 'fill_in_blank',
    sentence: 'もっと速く＿＿＿！',
    english: 'Run faster!',
    correctAnswer: '走れ',
    options: ['走れ', '走って', '走ろう', '走る'],
    explanation:
      'The imperative of 走る (う-verb): change the final う to え. 走る → 走れ (run!).',
  },
  {
    id: 'meireikei-fib-2',
    pattern: '命令形',
    type: 'fill_in_blank',
    sentence: 'そこに＿＿＿！動くな！',
    english: 'Stand there! Don\'t move!',
    correctAnswer: '立て',
    options: ['立て', '立って', '立とう', '立つ'],
    explanation:
      'The imperative of 立つ (う-verb): change う to え. 立つ → 立て. Negative imperative: dictionary form + な.',
  },
  {
    id: 'meireikei-fib-3',
    pattern: '命令形',
    type: 'fill_in_blank',
    sentence: 'ここに＿＿＿！',
    english: 'Come here!',
    correctAnswer: '来い',
    options: ['来い', '来て', '来よう', '来る'],
    explanation:
      '来る is irregular. The imperative form is 来い (こい).',
  },
  {
    id: 'meireikei-mc-1',
    pattern: '命令形',
    type: 'multiple_choice',
    sentence: 'What is the imperative form of 食べる?',
    english: 'Choose the correct imperative form.',
    correctAnswer: '食べろ',
    options: ['食べろ', '食べれ', '食べよ', '食べえ'],
    explanation:
      'For る-verbs, drop る and add ろ: 食べる → 食べろ (eat!).',
  },
  {
    id: 'meireikei-mc-2',
    pattern: '命令形',
    type: 'multiple_choice',
    sentence: 'When is the imperative form most commonly used?',
    english: 'Select the most appropriate context.',
    correctAnswer: 'Emergency situations, sports cheering, or commands from superiors',
    options: [
      'Emergency situations, sports cheering, or commands from superiors',
      'Polite everyday conversation',
      'Making requests to strangers',
      'Talking to customers at a shop',
    ],
    explanation:
      'The imperative form is very strong and direct. It is used in urgent situations, sports, anime, or by superiors. For polite requests, use てください.',
  },

  // ===========================================================================
  // てほしい (want someone to do)
  // ===========================================================================
  {
    id: 'tehoshii-fib-1',
    pattern: 'てほしい',
    type: 'fill_in_blank',
    sentence: '友達に本当のことを言っ＿＿＿。',
    english: 'I want my friend to tell the truth.',
    correctAnswer: 'てほしい',
    options: ['てほしい', 'たい', 'てみたい', 'てもらう'],
    explanation:
      'てほしい expresses the speaker\'s desire for someone else to do something. 言ってほしい = I want (them) to say.',
  },
  {
    id: 'tehoshii-fib-2',
    pattern: 'てほしい',
    type: 'fill_in_blank',
    sentence: 'もう少し静かにし＿＿＿んですが。',
    english: 'I\'d like you to be a little quieter.',
    correctAnswer: 'てほしい',
    options: ['てほしい', 'たい', 'てみたい', 'てくれる'],
    explanation:
      'てほしい is used when the speaker wants another person to do something. してほしい = I want (you) to do.',
  },
  {
    id: 'tehoshii-fib-3',
    pattern: 'てほしい',
    type: 'fill_in_blank',
    sentence: 'この部屋に入ら＿＿＿。',
    english: 'I don\'t want you to enter this room.',
    correctAnswer: 'ないでほしい',
    options: ['ないでほしい', 'なくてほしい', 'ないほしい', 'てほしくない'],
    explanation:
      'The negative form is ないでほしい: verb ない-form + でほしい. 入らないでほしい = I don\'t want you to enter.',
  },
  {
    id: 'tehoshii-mc-1',
    pattern: 'てほしい',
    type: 'multiple_choice',
    sentence: 'What is the difference between たい and てほしい?',
    english: 'Select the correct distinction.',
    correctAnswer: 'たい = I want to do; てほしい = I want someone else to do',
    options: [
      'たい = I want to do; てほしい = I want someone else to do',
      'たい = past tense; てほしい = present tense',
      'たい = polite; てほしい = casual',
      'They mean the same thing',
    ],
    explanation:
      'たい is for the speaker\'s own desire to do something, while てほしい is for wanting someone else to act.',
  },
  {
    id: 'tehoshii-mc-2',
    pattern: 'てほしい',
    type: 'multiple_choice',
    sentence: 'Which particle marks the person you want to do the action in てほしい?',
    english: 'Select the correct particle.',
    correctAnswer: 'に',
    options: ['に', 'が', 'を', 'で'],
    explanation:
      'The person you want to act is marked with に: 先生に説明してほしい (I want the teacher to explain).',
  },

  // ===========================================================================
  // し (listing reasons)
  // ===========================================================================
  {
    id: 'shi-fib-1',
    pattern: 'し',
    type: 'fill_in_blank',
    sentence: 'あの映画は面白い＿＿＿、音楽もいいし、大好きだ。',
    english: 'That movie is interesting and the music is good too, so I love it.',
    correctAnswer: 'し',
    options: ['し', 'から', 'ので', 'て'],
    explanation:
      'し is used to list multiple reasons or qualities. 面白いし、音楽もいいし = it\'s interesting, the music is good, (and more).',
  },
  {
    id: 'shi-fib-2',
    pattern: 'し',
    type: 'fill_in_blank',
    sentence: '彼女は優しい＿＿＿、頭もいいし、みんなに好かれている。',
    english: 'She is kind and smart, so everyone likes her.',
    correctAnswer: 'し',
    options: ['し', 'て', 'けど', 'が'],
    explanation:
      'し lists positive qualities as reasons for the conclusion. 優しいし、頭もいいし = she\'s kind and smart (among other things).',
  },
  {
    id: 'shi-fib-3',
    pattern: 'し',
    type: 'fill_in_blank',
    sentence: '疲れた＿＿＿、もう帰ろう。',
    english: 'I\'m tired, so let\'s go home.',
    correctAnswer: 'し',
    options: ['し', 'て', 'ながら', 'まで'],
    explanation:
      'し can be used with a single reason for emphasis, implying there may be additional reasons. 疲れたし = since I\'m tired (and possibly other reasons).',
  },
  {
    id: 'shi-mc-1',
    pattern: 'し',
    type: 'multiple_choice',
    sentence: 'What does し imply when listing reasons?',
    english: 'Select the nuance of し.',
    correctAnswer: 'There may be additional reasons beyond those stated',
    options: [
      'There may be additional reasons beyond those stated',
      'The listed reason is the only one',
      'The reasons are in chronological order',
      'The reasons contradict each other',
    ],
    explanation:
      'し implies that the listed reasons are not exhaustive — there are more reasons or qualities the speaker could mention.',
  },
  {
    id: 'shi-mc-2',
    pattern: 'し',
    type: 'multiple_choice',
    sentence: 'Which form comes before し?',
    english: 'Select the correct form to use with し.',
    correctAnswer: 'Plain form',
    options: ['Plain form', 'ます form', 'て form', 'Dictionary form only'],
    explanation:
      'し follows the plain form: おいしいし, 高かったし, 静かだし, 学生だし. In casual speech, です/ます forms before し are non-standard.',
  },

  // ===========================================================================
  // ために (in order to / because of)
  // ===========================================================================
  {
    id: 'tameni-fib-1',
    pattern: 'ために',
    type: 'fill_in_blank',
    sentence: '新しい車を買う＿＿＿貯金している。',
    english: 'I am saving money in order to buy a new car.',
    correctAnswer: 'ために',
    options: ['ために', 'ように', 'から', 'ので'],
    explanation:
      'ために with the dictionary form expresses purpose: "in order to." 買うために = in order to buy.',
  },
  {
    id: 'tameni-fib-2',
    pattern: 'ために',
    type: 'fill_in_blank',
    sentence: '事故の＿＿＿電車が遅れています。',
    english: 'The train is delayed because of an accident.',
    correctAnswer: 'ために',
    options: ['ために', 'ように', 'だけ', 'まで'],
    explanation:
      'ために with nouns (noun + の + ために) can express cause: "because of." 事故のために = because of the accident.',
  },
  {
    id: 'tameni-fib-3',
    pattern: 'ために',
    type: 'fill_in_blank',
    sentence: '家族の＿＿＿一生懸命働いている。',
    english: 'I am working hard for my family.',
    correctAnswer: 'ために',
    options: ['ために', 'ように', 'について', 'によって'],
    explanation:
      'ために with nouns expresses purpose or benefit: "for the sake of." 家族のために = for my family.',
  },
  {
    id: 'tameni-mc-1',
    pattern: 'ために',
    type: 'multiple_choice',
    sentence: 'When does ために express cause (not purpose)?',
    english: 'Select the condition for the causal meaning.',
    correctAnswer: 'When used with the た-form or with nouns describing events',
    options: [
      'When used with the た-form or with nouns describing events',
      'When used with the dictionary form',
      'When the subject is first person',
      'When the sentence is negative',
    ],
    explanation:
      'ために means "because of" with the た-form (遅れたために) or event nouns (台風のために). With the dictionary form, it means "in order to."',
  },
  {
    id: 'tameni-mc-2',
    pattern: 'ために',
    type: 'multiple_choice',
    sentence: 'Which sentence uses ために for purpose correctly?',
    english: 'Choose the correct usage.',
    correctAnswer: '留学するために日本語を勉強している。',
    options: [
      '留学するために日本語を勉強している。',
      '日本語が話せるために勉強している。',
      '寝られるために薬を飲んだ。',
      '子供が食べるためにご飯を作った。',
    ],
    explanation:
      'For purpose, ために requires a volitional verb with the same subject. With potential verbs or different subjects, use ように instead.',
  },

  // ===========================================================================
  // ように (so that)
  // ===========================================================================
  {
    id: 'youni-fib-1',
    pattern: 'ように',
    type: 'fill_in_blank',
    sentence: '風邪をひかない＿＿＿暖かくしてください。',
    english: 'Please dress warmly so that you don\'t catch a cold.',
    correctAnswer: 'ように',
    options: ['ように', 'ために', 'から', 'ので'],
    explanation:
      'ように with the ない-form expresses a negative goal: "so as not to." ひかないように = so as not to catch.',
  },
  {
    id: 'youni-fib-2',
    pattern: 'ように',
    type: 'fill_in_blank',
    sentence: '子供にも分かる＿＿＿簡単に説明した。',
    english: 'I explained it simply so that even children could understand.',
    correctAnswer: 'ように',
    options: ['ように', 'ために', 'だけ', 'まで'],
    explanation:
      'ように is used when the goal involves a different subject or an indirect outcome. 分かるように = so that (they) can understand.',
  },
  {
    id: 'youni-fib-3',
    pattern: 'ように',
    type: 'fill_in_blank',
    sentence: '電車に乗り遅れない＿＿＿早めに家を出た。',
    english: 'I left home early so that I wouldn\'t miss the train.',
    correctAnswer: 'ように',
    options: ['ように', 'ために', 'から', 'し'],
    explanation:
      'ように is used with ない-form to express the goal of avoiding something. 乗り遅れないように = so as not to miss.',
  },
  {
    id: 'youni-mc-1',
    pattern: 'ように',
    type: 'multiple_choice',
    sentence: 'When should you use ように instead of ために?',
    english: 'Select the correct condition.',
    correctAnswer: 'When the goal involves a different subject or an intransitive/potential verb',
    options: [
      'When the goal involves a different subject or an intransitive/potential verb',
      'When the sentence is about purpose with the same subject',
      'When expressing a direct, volitional action',
      'When the goal is in the past tense',
    ],
    explanation:
      'ように is used with potential/intransitive verbs or when two clauses have different subjects. ために is for direct volitional actions with the same subject.',
  },
  {
    id: 'youni-mc-2',
    pattern: 'ように',
    type: 'multiple_choice',
    sentence: 'Which sentence correctly uses ように?',
    english: 'Choose the grammatically appropriate sentence.',
    correctAnswer: '漢字が読めるように毎日練習する。',
    options: [
      '漢字が読めるように毎日練習する。',
      '漢字を読むように毎日練習する。',
      '漢字が読めるために毎日練習する。',
      '漢字を読むために毎日する。',
    ],
    explanation:
      'ように is used with the potential form 読める because the goal is gaining an ability (indirect outcome). ために would be incorrect with a potential verb.',
  },

  // ===========================================================================
  // ようにする (make effort to / try to)
  // ===========================================================================
  {
    id: 'younisuru-fib-1',
    pattern: 'ようにする',
    type: 'fill_in_blank',
    sentence: '毎日水をたくさん飲む＿＿＿。',
    english: 'I make it a habit to drink a lot of water every day.',
    correctAnswer: 'ようにしている',
    options: ['ようにしている', 'ことにしている', 'ようになった', 'ことになった'],
    explanation:
      'ようにしている means "I make it a habit to / I try to." It expresses an ongoing effort.',
  },
  {
    id: 'younisuru-fib-2',
    pattern: 'ようにする',
    type: 'fill_in_blank',
    sentence: '甘いものを食べない＿＿＿。',
    english: 'I will try not to eat sweets.',
    correctAnswer: 'ようにする',
    options: ['ようにする', 'ことにする', 'ようになる', 'ことになる'],
    explanation:
      'ようにする with the ない-form means making an effort not to do something. 食べないようにする = try not to eat.',
  },
  {
    id: 'younisuru-fib-3',
    pattern: 'ようにする',
    type: 'fill_in_blank',
    sentence: 'なるべく階段を使う＿＿＿。',
    english: 'I try to use the stairs as much as possible.',
    correctAnswer: 'ようにしている',
    options: ['ようにしている', 'ようになった', 'ことにした', 'ことになった'],
    explanation:
      'ようにしている expresses an ongoing conscious effort or habit. 使うようにしている = I make an effort to use.',
  },
  {
    id: 'younisuru-mc-1',
    pattern: 'ようにする',
    type: 'multiple_choice',
    sentence: 'What is the difference between ようにする and ことにする?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ようにする = ongoing effort; ことにする = one-time decision',
    options: [
      'ようにする = ongoing effort; ことにする = one-time decision',
      'ようにする = one-time decision; ことにする = ongoing effort',
      'They mean exactly the same thing',
      'ようにする is more formal than ことにする',
    ],
    explanation:
      'ようにする is about making an ongoing effort toward a goal, while ことにする is making a definite, one-time decision.',
  },
  {
    id: 'younisuru-mc-2',
    pattern: 'ようにする',
    type: 'multiple_choice',
    sentence: 'What is the difference between ようにする and ようにしている?',
    english: 'Select the correct nuance difference.',
    correctAnswer: 'ようにする = start making the effort; ようにしている = have been making the effort',
    options: [
      'ようにする = start making the effort; ようにしている = have been making the effort',
      'ようにする = past; ようにしている = future',
      'They are identical in meaning',
      'ようにする = formal; ようにしている = casual',
    ],
    explanation:
      'ようにする indicates the start of making an effort, while ようにしている indicates an ongoing habitual effort.',
  },

  // ===========================================================================
  // ようになる (come to be able to / reach a state)
  // ===========================================================================
  {
    id: 'youninaru-fib-1',
    pattern: 'ようになる',
    type: 'fill_in_blank',
    sentence: '毎日練習して、ピアノが弾ける＿＿＿。',
    english: 'I practiced every day and became able to play the piano.',
    correctAnswer: 'ようになった',
    options: ['ようになった', 'ようにした', 'ことになった', 'ことにした'],
    explanation:
      'ようになる expresses a gradual change in ability. 弾けるようになった = came to be able to play.',
  },
  {
    id: 'youninaru-fib-2',
    pattern: 'ようになる',
    type: 'fill_in_blank',
    sentence: '最近、朝ごはんを食べる＿＿＿。',
    english: 'Recently, I\'ve started eating breakfast.',
    correctAnswer: 'ようになった',
    options: ['ようになった', 'ようにした', 'ことになった', 'ことにした'],
    explanation:
      'ようになる describes reaching a new state or habit over time. 食べるようになった = came to eat (a new habit).',
  },
  {
    id: 'youninaru-fib-3',
    pattern: 'ようになる',
    type: 'fill_in_blank',
    sentence: '赤ちゃんが歩ける＿＿＿。',
    english: 'The baby has become able to walk.',
    correctAnswer: 'ようになった',
    options: ['ようになった', 'ようにした', 'ことになった', 'ことにした'],
    explanation:
      'ようになる with potential verbs describes acquiring an ability gradually. 歩けるようになった = became able to walk.',
  },
  {
    id: 'youninaru-mc-1',
    pattern: 'ようになる',
    type: 'multiple_choice',
    sentence: 'What kind of change does ようになる describe?',
    english: 'Select the best description.',
    correctAnswer: 'A gradual change in ability or state over time',
    options: [
      'A gradual change in ability or state over time',
      'A sudden one-time decision',
      'An external decision by someone else',
      'An action done in advance',
    ],
    explanation:
      'ようになる expresses a gradual transition — becoming able to do something or reaching a new state over time.',
  },
  {
    id: 'youninaru-mc-2',
    pattern: 'ようになる',
    type: 'multiple_choice',
    sentence: 'How do you say "I can no longer eat spicy food" using ようになる?',
    english: 'Choose the correct sentence.',
    correctAnswer: '辛いものが食べられなくなった。',
    options: [
      '辛いものが食べられなくなった。',
      '辛いものが食べないようになった。',
      '辛いものが食べなくようになった。',
      '辛いものが食べられるようにならなかった。',
    ],
    explanation:
      'For losing an ability, use the potential negative + なる: 食べられなくなった (can no longer eat). This is the negative counterpart of ようになる.',
  },

  // ===========================================================================
  // ことにする (decide to do)
  // ===========================================================================
  {
    id: 'kotonisuru-fib-1',
    pattern: 'ことにする',
    type: 'fill_in_blank',
    sentence: '来月から毎朝ジョギングする＿＿＿。',
    english: 'I decided to jog every morning starting next month.',
    correctAnswer: 'ことにした',
    options: ['ことにした', 'ようにした', 'ことになった', 'ようになった'],
    explanation:
      'ことにする expresses a personal decision. ことにした = I decided to. It was the speaker\'s own choice.',
  },
  {
    id: 'kotonisuru-fib-2',
    pattern: 'ことにする',
    type: 'fill_in_blank',
    sentence: 'お酒はもう飲まない＿＿＿。',
    english: 'I have made it a rule not to drink alcohol anymore.',
    correctAnswer: 'ことにしている',
    options: ['ことにしている', 'ようにしている', 'ことになっている', 'ようになっている'],
    explanation:
      'ことにしている means "I have made it my policy/rule to." It expresses a standing personal decision.',
  },
  {
    id: 'kotonisuru-fib-3',
    pattern: 'ことにする',
    type: 'fill_in_blank',
    sentence: '今年の夏は北海道に旅行する＿＿＿。',
    english: 'I decided to travel to Hokkaido this summer.',
    correctAnswer: 'ことにした',
    options: ['ことにした', 'ことになった', 'ようにした', 'ようになった'],
    explanation:
      'ことにした emphasizes the speaker\'s active choice. The decision to travel was made personally.',
  },
  {
    id: 'kotonisuru-mc-1',
    pattern: 'ことにする',
    type: 'multiple_choice',
    sentence: 'What does ことにする express?',
    english: 'Select the meaning of ことにする.',
    correctAnswer: 'A personal decision made by the speaker',
    options: [
      'A personal decision made by the speaker',
      'A decision made by someone else or external circumstances',
      'A gradual change in ability',
      'An ongoing effort to change behavior',
    ],
    explanation:
      'ことにする is for personal decisions the speaker actively makes. For external decisions, use ことになる.',
  },
  {
    id: 'kotonisuru-mc-2',
    pattern: 'ことにする',
    type: 'multiple_choice',
    sentence: 'What is the difference between ことにした and ことにしている?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ことにした = I decided (one-time); ことにしている = I have made it a rule (ongoing)',
    options: [
      'ことにした = I decided (one-time); ことにしている = I have made it a rule (ongoing)',
      'ことにした = casual; ことにしている = polite',
      'ことにした = negative; ことにしている = positive',
      'They are interchangeable',
    ],
    explanation:
      'ことにした is a one-time decision in the past. ことにしている is a standing decision or personal rule that continues.',
  },

  // ===========================================================================
  // ことになる (it has been decided that)
  // ===========================================================================
  {
    id: 'kotoninaru-fib-1',
    pattern: 'ことになる',
    type: 'fill_in_blank',
    sentence: '来月から東京で働く＿＿＿。',
    english: 'It has been decided that I will work in Tokyo starting next month.',
    correctAnswer: 'ことになった',
    options: ['ことになった', 'ことにした', 'ようになった', 'ようにした'],
    explanation:
      'ことになる expresses an external decision or circumstance. ことになった = it was decided (not by me).',
  },
  {
    id: 'kotoninaru-fib-2',
    pattern: 'ことになる',
    type: 'fill_in_blank',
    sentence: '来週の会議は中止する＿＿＿。',
    english: 'It has been decided that next week\'s meeting will be canceled.',
    correctAnswer: 'ことになった',
    options: ['ことになった', 'ことにした', 'ようになった', 'ようにした'],
    explanation:
      'ことになる presents the decision as coming from outside — the meeting cancelation was not the speaker\'s personal choice.',
  },
  {
    id: 'kotoninaru-fib-3',
    pattern: 'ことになる',
    type: 'fill_in_blank',
    sentence: '毎週金曜日にミーティングをする＿＿＿。',
    english: 'It has been established that we have meetings every Friday.',
    correctAnswer: 'ことになっている',
    options: ['ことになっている', 'ことにしている', 'ようになっている', 'ようにしている'],
    explanation:
      'ことになっている describes an established rule or arrangement that was decided externally.',
  },
  {
    id: 'kotoninaru-mc-1',
    pattern: 'ことになる',
    type: 'multiple_choice',
    sentence: 'What is the key difference between ことにする and ことになる?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ことにする = speaker decides; ことになる = decided by external factors',
    options: [
      'ことにする = speaker decides; ことになる = decided by external factors',
      'ことにする = future; ことになる = past',
      'ことにする = formal; ことになる = casual',
      'They mean the same thing',
    ],
    explanation:
      'ことにする is the speaker\'s own decision. ことになる presents the decision as coming from outside — a company, circumstances, or fate.',
  },
  {
    id: 'kotoninaru-mc-2',
    pattern: 'ことになる',
    type: 'multiple_choice',
    sentence: 'Which situation best fits ことになった?',
    english: 'Choose the most appropriate context.',
    correctAnswer: 'A company announces your transfer to another city',
    options: [
      'A company announces your transfer to another city',
      'You personally choose to move to another city',
      'You gradually become able to speak Japanese',
      'You make a conscious effort to exercise daily',
    ],
    explanation:
      'ことになった is used when the decision is external. A company transfer is decided by the organization, not the individual.',
  },

  // ===========================================================================
  // について (about / concerning)
  // ===========================================================================
  {
    id: 'nitsuite-fib-1',
    pattern: 'について',
    type: 'fill_in_blank',
    sentence: '日本の歴史＿＿＿レポートを書いた。',
    english: 'I wrote a report about Japanese history.',
    correctAnswer: 'について',
    options: ['について', 'によって', 'に対して', 'にとって'],
    explanation:
      'について means "about" or "concerning." 歴史について = about history.',
  },
  {
    id: 'nitsuite-fib-2',
    pattern: 'について',
    type: 'fill_in_blank',
    sentence: '環境問題＿＿＿もっと知りたい。',
    english: 'I want to know more about environmental issues.',
    correctAnswer: 'について',
    options: ['について', 'によって', 'にとって', 'として'],
    explanation:
      'について specifies the topic of knowledge or inquiry. 環境問題について = about environmental issues.',
  },
  {
    id: 'nitsuite-fib-3',
    pattern: 'について',
    type: 'fill_in_blank',
    sentence: '新しいプロジェクト＿＿＿の説明がありました。',
    english: 'There was an explanation about the new project.',
    correctAnswer: 'について',
    options: ['について', 'によって', 'に対して', 'として'],
    explanation:
      'についての + noun modifies a noun directly: プロジェクトについての説明 = explanation about the project.',
  },
  {
    id: 'nitsuite-mc-1',
    pattern: 'について',
    type: 'multiple_choice',
    sentence: 'What does について mean?',
    english: 'Select the correct meaning.',
    correctAnswer: 'About / concerning / regarding',
    options: [
      'About / concerning / regarding',
      'Depending on / by means of',
      'Toward / against',
      'As / in the role of',
    ],
    explanation:
      'について indicates the topic of discussion, research, or thought — "about" or "concerning."',
  },
  {
    id: 'nitsuite-mc-2',
    pattern: 'について',
    type: 'multiple_choice',
    sentence: 'How do you use について to modify a noun directly?',
    english: 'Select the correct form.',
    correctAnswer: 'Noun + についての + Noun',
    options: [
      'Noun + についての + Noun',
      'Noun + について + Noun',
      'Noun + についてな + Noun',
      'Noun + についてで + Noun',
    ],
    explanation:
      'To modify a noun, use についての: 日本についての本 (a book about Japan).',
  },

  // ===========================================================================
  // によって (by means of / depending on)
  // ===========================================================================
  {
    id: 'niyotte-fib-1',
    pattern: 'によって',
    type: 'fill_in_blank',
    sentence: '季節＿＿＿景色が変わります。',
    english: 'The scenery changes depending on the season.',
    correctAnswer: 'によって',
    options: ['によって', 'について', 'に対して', 'にとって'],
    explanation:
      'によって meaning "depending on." 季節によって = depending on the season.',
  },
  {
    id: 'niyotte-fib-2',
    pattern: 'によって',
    type: 'fill_in_blank',
    sentence: 'この小説は有名な作家＿＿＿書かれた。',
    english: 'This novel was written by a famous author.',
    correctAnswer: 'によって',
    options: ['によって', 'について', 'として', 'に対して'],
    explanation:
      'によって marks the agent in passive sentences: "by." 作家によって書かれた = written by an author.',
  },
  {
    id: 'niyotte-fib-3',
    pattern: 'によって',
    type: 'fill_in_blank',
    sentence: '地震＿＿＿被害が広がった。',
    english: 'Damage spread due to the earthquake.',
    correctAnswer: 'による',
    options: ['による', 'について', 'にとって', 'に対する'],
    explanation:
      'による + noun means "due to" modifying a noun. 地震による被害 = damage due to the earthquake.',
  },
  {
    id: 'niyotte-mc-1',
    pattern: 'によって',
    type: 'multiple_choice',
    sentence: 'Which is NOT a meaning of によって?',
    english: 'Select the meaning that does not apply.',
    correctAnswer: 'About / concerning a topic',
    options: [
      'About / concerning a topic',
      'By (agent in passive)',
      'Depending on (variation)',
      'Due to (cause)',
    ],
    explanation:
      '"About / concerning a topic" is the meaning of について, not によって. によって means "by," "depending on," or "due to."',
  },
  {
    id: 'niyotte-mc-2',
    pattern: 'によって',
    type: 'multiple_choice',
    sentence: 'Which form is used to modify a noun with によって?',
    english: 'Select the correct form before a noun.',
    correctAnswer: 'による + Noun',
    options: ['による + Noun', 'によっての + Noun', 'によるの + Noun', 'によって + Noun'],
    explanation:
      'Before a noun, use による: 地震による被害 (damage due to the earthquake).',
  },

  // ===========================================================================
  // ようだ/みたいだ (seems like / appears to be)
  // ===========================================================================
  {
    id: 'youda-fib-1',
    pattern: 'ようだ/みたいだ',
    type: 'fill_in_blank',
    sentence: '誰もいない＿＿＿。電気が消えている。',
    english: 'It seems like nobody is here. The lights are off.',
    correctAnswer: 'ようだ',
    options: ['ようだ', 'そうだ', 'らしい', 'はずだ'],
    explanation:
      'ようだ expresses judgment based on evidence. The speaker observes the lights are off and concludes nobody is here.',
  },
  {
    id: 'youda-fib-2',
    pattern: 'ようだ/みたいだ',
    type: 'fill_in_blank',
    sentence: '彼女は風邪をひいた＿＿＿。',
    english: 'It seems like she caught a cold.',
    correctAnswer: 'みたいだ',
    options: ['みたいだ', 'そうだ', 'ことだ', 'ものだ'],
    explanation:
      'みたいだ is the casual version of ようだ. Both express judgment based on evidence.',
  },
  {
    id: 'youda-fib-3',
    pattern: 'ようだ/みたいだ',
    type: 'fill_in_blank',
    sentence: 'まるで夢の＿＿＿経験だった。',
    english: 'It was an experience like a dream.',
    correctAnswer: 'ような',
    options: ['ような', 'みたい', 'らしい', 'そうな'],
    explanation:
      'ようだ can also mean "like" for comparisons. Before a noun, use ような: 夢のような = dream-like.',
  },
  {
    id: 'youda-mc-1',
    pattern: 'ようだ/みたいだ',
    type: 'multiple_choice',
    sentence: 'What is the difference between ようだ and そうだ (appearance)?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ようだ = based on broader evidence; そうだ = based on visual impression',
    options: [
      'ようだ = based on broader evidence; そうだ = based on visual impression',
      'ようだ = formal hearsay; そうだ = casual hearsay',
      'ようだ = past tense; そうだ = present tense',
      'They are identical in meaning',
    ],
    explanation:
      'そうだ (appearance) is based on how something looks. ようだ is based on broader evidence like sounds, context, or reasoning.',
  },
  {
    id: 'youda-mc-2',
    pattern: 'ようだ/みたいだ',
    type: 'multiple_choice',
    sentence: 'What is the difference between ようだ and みたいだ?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ようだ is more formal; みたいだ is more casual',
    options: [
      'ようだ is more formal; みたいだ is more casual',
      'ようだ is about appearance; みたいだ is about hearsay',
      'ようだ is for nouns only; みたいだ is for verbs only',
      'They cannot be used interchangeably',
    ],
    explanation:
      'ようだ and みたいだ have the same meaning. ようだ is used in writing and formal speech; みたいだ is conversational.',
  },

  // ===========================================================================
  // らしい (seems / apparently / -like)
  // ===========================================================================
  {
    id: 'rashii-fib-1',
    pattern: 'らしい',
    type: 'fill_in_blank',
    sentence: '明日の試験は難しい＿＿＿。',
    english: 'Apparently tomorrow\'s exam is difficult.',
    correctAnswer: 'らしい',
    options: ['らしい', 'ようだ', 'そうだ', 'はずだ'],
    explanation:
      'らしい expresses conjecture based on information the speaker gathered. 難しいらしい = apparently difficult.',
  },
  {
    id: 'rashii-fib-2',
    pattern: 'らしい',
    type: 'fill_in_blank',
    sentence: 'あの二人は別れた＿＿＿よ。',
    english: 'I heard those two broke up.',
    correctAnswer: 'らしい',
    options: ['らしい', 'ようだ', 'はずだ', 'みたいだ'],
    explanation:
      'らしい for conjecture conveys information the speaker has processed. 別れたらしい = apparently they broke up.',
  },
  {
    id: 'rashii-fib-3',
    pattern: 'らしい',
    type: 'fill_in_blank',
    sentence: '今日は夏＿＿＿天気ですね。',
    english: 'Today\'s weather is summer-like, isn\'t it?',
    correctAnswer: 'らしい',
    options: ['らしい', 'ような', 'みたいな', 'そうな'],
    explanation:
      'らしい attached directly to a noun means "typical of" or "-like." 夏らしい = summer-like / typical of summer.',
  },
  {
    id: 'rashii-mc-1',
    pattern: 'らしい',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of らしい?',
    english: 'Select the correct pair.',
    correctAnswer: 'Conjecture based on information AND typicality ("like a")',
    options: [
      'Conjecture based on information AND typicality ("like a")',
      'Visual impression AND hearsay',
      'Certainty AND possibility',
      'Past action AND future intention',
    ],
    explanation:
      'らしい has two distinct uses: (1) conjecture/hearsay — "apparently," and (2) typicality — "like a / typical of" when attached to nouns.',
  },
  {
    id: 'rashii-mc-2',
    pattern: 'らしい',
    type: 'multiple_choice',
    sentence: 'What does 彼は男らしい mean?',
    english: 'Select the correct meaning.',
    correctAnswer: 'He is manly / like a man',
    options: [
      'He is manly / like a man',
      'He apparently is a man',
      'He should be a man',
      'He might be a man',
    ],
    explanation:
      'When らしい attaches directly to a noun, it means "typical of" or "-like." 男らしい = manly, like a man.',
  },

  // ===========================================================================
  // はずだ (should be / expected to be)
  // ===========================================================================
  {
    id: 'hazuda-fib-1',
    pattern: 'はずだ',
    type: 'fill_in_blank',
    sentence: '荷物は明日届く＿＿＿。',
    english: 'The package should arrive tomorrow.',
    correctAnswer: 'はずだ',
    options: ['はずだ', 'らしい', 'かもしれない', 'ようだ'],
    explanation:
      'はずだ expresses a confident expectation based on reason or knowledge. 届くはずだ = it should arrive.',
  },
  {
    id: 'hazuda-fib-2',
    pattern: 'はずだ',
    type: 'fill_in_blank',
    sentence: 'この店は日曜日は休みの＿＿＿。',
    english: 'This store should be closed on Sundays.',
    correctAnswer: 'はずだ',
    options: ['はずだ', 'そうだ', 'らしい', 'ようだ'],
    explanation:
      'はずだ with nouns: noun + の + はずだ. The speaker confidently expects the store is closed based on prior knowledge.',
  },
  {
    id: 'hazuda-fib-3',
    pattern: 'はずだ',
    type: 'fill_in_blank',
    sentence: 'そんなに簡単な＿＿＿。',
    english: 'There\'s no way it\'s that easy.',
    correctAnswer: 'はずがない',
    options: ['はずがない', 'はずだ', 'はずではない', 'はずもない'],
    explanation:
      'はずがない means "there is no way that" — expressing strong disbelief. 簡単なはずがない = there\'s no way it\'s easy.',
  },
  {
    id: 'hazuda-mc-1',
    pattern: 'はずだ',
    type: 'multiple_choice',
    sentence: 'What level of certainty does はずだ express?',
    english: 'Select the best description.',
    correctAnswer: 'Strong confidence based on logic or evidence',
    options: [
      'Strong confidence based on logic or evidence',
      'Low possibility or uncertainty',
      'Hearsay from someone else',
      'A guess with no basis',
    ],
    explanation:
      'はずだ implies the speaker has good reason to believe something — it is based on logic, evidence, or prior knowledge.',
  },
  {
    id: 'hazuda-mc-2',
    pattern: 'はずだ',
    type: 'multiple_choice',
    sentence: 'Which expression is stronger in certainty?',
    english: 'Rank from weakest to strongest certainty.',
    correctAnswer: 'かもしれない < だろう < はずだ < にちがいない',
    options: [
      'かもしれない < だろう < はずだ < にちがいない',
      'にちがいない < はずだ < だろう < かもしれない',
      'はずだ < かもしれない < だろう < にちがいない',
      'だろう < かもしれない < にちがいない < はずだ',
    ],
    explanation:
      'From weakest to strongest: かもしれない (might) < だろう (probably) < はずだ (should be) < にちがいない (must be).',
  },

  // ===========================================================================
  // つもり (intend to / plan to)
  // ===========================================================================
  {
    id: 'tsumori-fib-1',
    pattern: 'つもり',
    type: 'fill_in_blank',
    sentence: '大学を卒業したら海外で働く＿＿＿です。',
    english: 'I intend to work abroad after graduating from university.',
    correctAnswer: 'つもり',
    options: ['つもり', 'はず', 'よう', 'こと'],
    explanation:
      'つもり expresses firm personal intention: "I intend to." 働くつもりです = I intend to work.',
  },
  {
    id: 'tsumori-fib-2',
    pattern: 'つもり',
    type: 'fill_in_blank',
    sentence: '今日はもう何も食べない＿＿＿だ。',
    english: 'I intend not to eat anything more today.',
    correctAnswer: 'つもり',
    options: ['つもり', 'はず', 'よう', 'こと'],
    explanation:
      'Negative intention: verb ない-form + つもりだ. 食べないつもりだ = I intend not to eat.',
  },
  {
    id: 'tsumori-fib-3',
    pattern: 'つもり',
    type: 'fill_in_blank',
    sentence: '昨日買い物に行く＿＿＿だったけど、雨で行けなかった。',
    english: 'I had intended to go shopping yesterday, but I couldn\'t because of rain.',
    correctAnswer: 'つもり',
    options: ['つもり', 'はず', 'よう', 'こと'],
    explanation:
      'つもりだった (past) means "I had intended to (but didn\'t)" — the plan was not carried out.',
  },
  {
    id: 'tsumori-mc-1',
    pattern: 'つもり',
    type: 'multiple_choice',
    sentence: 'Whose intention does つもり express?',
    english: 'Select the correct usage.',
    correctAnswer: 'The speaker\'s own intention (first person in statements)',
    options: [
      'The speaker\'s own intention (first person in statements)',
      'Anyone\'s intention freely',
      'External decisions only',
      'Past completed actions only',
    ],
    explanation:
      'つもり is used for the speaker\'s own intention. For others, add a reporting structure: 彼は行くつもりらしい (apparently he intends to go).',
  },
  {
    id: 'tsumori-mc-2',
    pattern: 'つもり',
    type: 'multiple_choice',
    sentence: 'What does 行くつもりだった mean?',
    english: 'Choose the correct meaning.',
    correctAnswer: 'I had intended to go (but didn\'t)',
    options: [
      'I had intended to go (but didn\'t)',
      'I intend to go (in the future)',
      'I was forced to go',
      'I was supposed to go (by external decision)',
    ],
    explanation:
      'つもりだった is the past tense and implies the intention was not fulfilled. "I had intended to go, but..."',
  },

  // ===========================================================================
  // ところだ (about to / in the middle of / just finished)
  // ===========================================================================
  {
    id: 'tokoroda-fib-1',
    pattern: 'ところだ',
    type: 'fill_in_blank',
    sentence: '今から昼ご飯を食べる＿＿＿です。',
    english: 'I am about to eat lunch now.',
    correctAnswer: 'ところ',
    options: ['ところ', 'ばかり', 'はず', 'つもり'],
    explanation:
      'Verb dictionary form + ところだ means "about to do." 食べるところです = I\'m about to eat.',
  },
  {
    id: 'tokoroda-fib-2',
    pattern: 'ところだ',
    type: 'fill_in_blank',
    sentence: 'ちょうど報告書を書いている＿＿＿です。',
    english: 'I am right in the middle of writing the report.',
    correctAnswer: 'ところ',
    options: ['ところ', 'ばかり', 'はず', 'つもり'],
    explanation:
      'Verb ている + ところだ means "in the middle of doing." 書いているところです = I\'m in the middle of writing.',
  },
  {
    id: 'tokoroda-fib-3',
    pattern: 'ところだ',
    type: 'fill_in_blank',
    sentence: 'ちょうど駅に着いた＿＿＿です。',
    english: 'I just arrived at the station.',
    correctAnswer: 'ところ',
    options: ['ところ', 'ばかり', 'はず', 'つもり'],
    explanation:
      'Verb た-form + ところだ means "just finished doing." 着いたところです = I just arrived (moments ago).',
  },
  {
    id: 'tokoroda-mc-1',
    pattern: 'ところだ',
    type: 'multiple_choice',
    sentence: 'What does 食べるところだ mean?',
    english: 'Select the correct meaning.',
    correctAnswer: 'About to eat',
    options: [
      'About to eat',
      'In the middle of eating',
      'Just finished eating',
      'Want to eat',
    ],
    explanation:
      'Dictionary form + ところだ = "about to do." ている + ところだ = "in the middle of." た-form + ところだ = "just finished."',
  },
  {
    id: 'tokoroda-mc-2',
    pattern: 'ところだ',
    type: 'multiple_choice',
    sentence: 'What is the difference between たところだ and たばかりだ?',
    english: 'Select the correct distinction.',
    correctAnswer: 'たところだ is more immediate (seconds ago); たばかりだ is more recent (minutes to hours)',
    options: [
      'たところだ is more immediate (seconds ago); たばかりだ is more recent (minutes to hours)',
      'They are identical in meaning',
      'たところだ is past; たばかりだ is present',
      'たところだ is casual; たばかりだ is formal',
    ],
    explanation:
      'たところだ emphasizes the very moment of completion (just now). たばかりだ is recent but less immediate.',
  },

  // ===========================================================================
  // かもしれない (might / maybe)
  // ===========================================================================
  {
    id: 'kamoshirenai-fib-1',
    pattern: 'かもしれない',
    type: 'fill_in_blank',
    sentence: '明日は雪が降る＿＿＿。',
    english: 'It might snow tomorrow.',
    correctAnswer: 'かもしれない',
    options: ['かもしれない', 'にちがいない', 'はずだ', 'らしい'],
    explanation:
      'かもしれない expresses possibility: "might." 降るかもしれない = it might fall (snow).',
  },
  {
    id: 'kamoshirenai-fib-2',
    pattern: 'かもしれない',
    type: 'fill_in_blank',
    sentence: 'この計画は失敗する＿＿＿。',
    english: 'This plan might fail.',
    correctAnswer: 'かもしれない',
    options: ['かもしれない', 'にちがいない', 'はずだ', 'ようだ'],
    explanation:
      'かもしれない acknowledges a possibility without certainty. 失敗するかもしれない = might fail.',
  },
  {
    id: 'kamoshirenai-fib-3',
    pattern: 'かもしれない',
    type: 'fill_in_blank',
    sentence: '遅くなる＿＿＿から、先に食べていてください。',
    english: 'I might be late, so please go ahead and eat.',
    correctAnswer: 'かもしれない',
    options: ['かもしれない', 'にちがいない', 'はずだ', 'つもりだ'],
    explanation:
      'かもしれない is used to warn about a possibility. 遅くなるかもしれない = I might be late.',
  },
  {
    id: 'kamoshirenai-mc-1',
    pattern: 'かもしれない',
    type: 'multiple_choice',
    sentence: 'What is the casual shortened form of かもしれない?',
    english: 'Select the casual form.',
    correctAnswer: 'かも',
    options: ['かも', 'かな', 'かしら', 'かい'],
    explanation:
      'In casual speech, かもしれない is often shortened to just かも: 雨かも (it might rain).',
  },
  {
    id: 'kamoshirenai-mc-2',
    pattern: 'かもしれない',
    type: 'multiple_choice',
    sentence: 'How do you use かもしれない with な-adjectives?',
    english: 'Select the correct form.',
    correctAnswer: '静かかもしれない (without だ)',
    options: [
      '静かかもしれない (without だ)',
      '静かだかもしれない (with だ)',
      '静かなかもしれない (with な)',
      '静かのかもしれない (with の)',
    ],
    explanation:
      'Before かもしれない, な-adjectives and nouns do not use だ: 静かかもしれない, not 静かだかもしれない.',
  },

  // ===========================================================================
  // にちがいない (must be / no doubt)
  // ===========================================================================
  {
    id: 'nichigainai-fib-1',
    pattern: 'にちがいない',
    type: 'fill_in_blank',
    sentence: '彼は毎日練習している＿＿＿。あんなに上手だから。',
    english: 'He must be practicing every day. Because he\'s so skilled.',
    correctAnswer: 'にちがいない',
    options: ['にちがいない', 'かもしれない', 'らしい', 'ようだ'],
    explanation:
      'にちがいない expresses strong conviction: "must be." The speaker is almost certain based on the evidence of his skill.',
  },
  {
    id: 'nichigainai-fib-2',
    pattern: 'にちがいない',
    type: 'fill_in_blank',
    sentence: 'この料理はプロが作った＿＿＿。',
    english: 'This dish must have been made by a professional.',
    correctAnswer: 'にちがいない',
    options: ['にちがいない', 'かもしれない', 'はずだ', 'そうだ'],
    explanation:
      'にちがいない expresses strong conviction based on evidence — the quality of the food leads to this conclusion.',
  },
  {
    id: 'nichigainai-fib-3',
    pattern: 'にちがいない',
    type: 'fill_in_blank',
    sentence: 'こんなに高いバッグは本物＿＿＿。',
    english: 'A bag this expensive must be genuine.',
    correctAnswer: 'にちがいない',
    options: ['にちがいない', 'かもしれない', 'らしい', 'だろう'],
    explanation:
      'にちがいない with nouns: noun + にちがいない (without だ). 本物にちがいない = it must be genuine.',
  },
  {
    id: 'nichigainai-mc-1',
    pattern: 'にちがいない',
    type: 'multiple_choice',
    sentence: 'How does にちがいない compare to はずだ in certainty?',
    english: 'Select the correct comparison.',
    correctAnswer: 'にちがいない is stronger — it expresses near-absolute conviction',
    options: [
      'にちがいない is stronger — it expresses near-absolute conviction',
      'はずだ is stronger than にちがいない',
      'They express the same level of certainty',
      'にちがいない is weaker — it expresses mere possibility',
    ],
    explanation:
      'にちがいない (must be / no doubt) is stronger than はずだ (should be / expected). にちがいない conveys near certainty.',
  },
  {
    id: 'nichigainai-mc-2',
    pattern: 'にちがいない',
    type: 'multiple_choice',
    sentence: 'How do you connect な-adjectives to にちがいない?',
    english: 'Select the correct form.',
    correctAnswer: 'Without だ: 静かにちがいない',
    options: [
      'Without だ: 静かにちがいない',
      'With だ: 静かだにちがいない',
      'With な: 静かなにちがいない',
      'With の: 静かのにちがいない',
    ],
    explanation:
      'Before にちがいない, な-adjectives and nouns do not use だ: 静かにちがいない, 学生にちがいない.',
  },

  // ===========================================================================
  // やすい (easy to do / tends to)
  // ===========================================================================
  {
    id: 'yasui-fib-1',
    pattern: 'やすい',
    type: 'fill_in_blank',
    sentence: 'この辞書は使い＿＿＿。',
    english: 'This dictionary is easy to use.',
    correctAnswer: 'やすい',
    options: ['やすい', 'にくい', 'たい', 'すぎる'],
    explanation:
      'Verb stem + やすい means "easy to do." 使いやすい = easy to use.',
  },
  {
    id: 'yasui-fib-2',
    pattern: 'やすい',
    type: 'fill_in_blank',
    sentence: '冬は風邪をひき＿＿＿。',
    english: 'It\'s easy to catch a cold in winter.',
    correctAnswer: 'やすい',
    options: ['やすい', 'にくい', 'たい', 'がたい'],
    explanation:
      'やすい can also express tendency: "tends to." ひきやすい = easy to catch / tends to catch.',
  },
  {
    id: 'yasui-fib-3',
    pattern: 'やすい',
    type: 'fill_in_blank',
    sentence: 'あの先生の授業は分かり＿＿＿と評判だ。',
    english: 'That teacher\'s class is known for being easy to understand.',
    correctAnswer: 'やすい',
    options: ['やすい', 'にくい', 'すぎる', 'たい'],
    explanation:
      'Verb stem + やすい. 分かります → 分かり + やすい = easy to understand.',
  },
  {
    id: 'yasui-mc-1',
    pattern: 'やすい',
    type: 'multiple_choice',
    sentence: 'How do you form やすい with a verb?',
    english: 'Select the correct formation.',
    correctAnswer: 'Verb stem (ます-form without ます) + やすい',
    options: [
      'Verb stem (ます-form without ます) + やすい',
      'Verb dictionary form + やすい',
      'Verb て-form + やすい',
      'Verb ない-form + やすい',
    ],
    explanation:
      'やすい attaches to the verb stem: 読みます → 読み + やすい = 読みやすい (easy to read).',
  },
  {
    id: 'yasui-mc-2',
    pattern: 'やすい',
    type: 'multiple_choice',
    sentence: 'How does a やすい word conjugate?',
    english: 'Select the correct conjugation type.',
    correctAnswer: 'As an い-adjective',
    options: [
      'As an い-adjective',
      'As a な-adjective',
      'As a verb',
      'It does not conjugate',
    ],
    explanation:
      'Verb stem + やすい creates an い-adjective: 読みやすくない (not easy to read), 読みやすかった (was easy to read).',
  },

  // ===========================================================================
  // にくい (hard to do)
  // ===========================================================================
  {
    id: 'nikui-fib-1',
    pattern: 'にくい',
    type: 'fill_in_blank',
    sentence: 'この薬は飲み＿＿＿。',
    english: 'This medicine is hard to take.',
    correctAnswer: 'にくい',
    options: ['にくい', 'やすい', 'たい', 'すぎる'],
    explanation:
      'Verb stem + にくい means "hard to do." 飲みにくい = hard to drink/take.',
  },
  {
    id: 'nikui-fib-2',
    pattern: 'にくい',
    type: 'fill_in_blank',
    sentence: 'このフォントは小さくて見＿＿＿。',
    english: 'This font is small and hard to see.',
    correctAnswer: 'にくい',
    options: ['にくい', 'やすい', 'える', 'たい'],
    explanation:
      'Verb stem + にくい. 見ます → 見 + にくい = 見にくい (hard to see).',
  },
  {
    id: 'nikui-fib-3',
    pattern: 'にくい',
    type: 'fill_in_blank',
    sentence: 'このステーキはかたくて切り＿＿＿。',
    english: 'This steak is tough and hard to cut.',
    correctAnswer: 'にくい',
    options: ['にくい', 'やすい', 'たい', 'がたい'],
    explanation:
      'Verb stem + にくい expresses inherent difficulty. 切りにくい = hard to cut.',
  },
  {
    id: 'nikui-mc-1',
    pattern: 'にくい',
    type: 'multiple_choice',
    sentence: 'What is the difference between にくい and づらい?',
    english: 'Select the correct distinction.',
    correctAnswer: 'にくい = inherent difficulty; づらい = physical or emotional discomfort',
    options: [
      'にくい = inherent difficulty; づらい = physical or emotional discomfort',
      'にくい = casual; づらい = formal',
      'にくい = for negative things; づらい = for positive things',
      'They are identical in meaning',
    ],
    explanation:
      'にくい focuses on inherent difficulty (hard to read — small text). づらい implies discomfort (hard to say — emotionally awkward).',
  },
  {
    id: 'nikui-mc-2',
    pattern: 'にくい',
    type: 'multiple_choice',
    sentence: 'What is the opposite of にくい?',
    english: 'Select the grammar pattern with the opposite meaning.',
    correctAnswer: 'やすい (easy to do)',
    options: [
      'やすい (easy to do)',
      'すぎる (too much)',
      'たい (want to do)',
      'がたい (hard to do — literary)',
    ],
    explanation:
      'やすい is the direct opposite of にくい: 読みやすい (easy to read) vs 読みにくい (hard to read).',
  },

  // ===========================================================================
  // ばかり (just / only / nothing but)
  // ===========================================================================
  {
    id: 'bakari-fib-1',
    pattern: 'ばかり',
    type: 'fill_in_blank',
    sentence: 'さっき昼ご飯を食べた＿＿＿なのに、もうお腹が空いた。',
    english: 'I just ate lunch, but I\'m already hungry.',
    correctAnswer: 'ばかり',
    options: ['ばかり', 'だけ', 'しか', 'ところ'],
    explanation:
      'た-form + ばかり means "just did (recently)." 食べたばかり = just ate.',
  },
  {
    id: 'bakari-fib-2',
    pattern: 'ばかり',
    type: 'fill_in_blank',
    sentence: '妹はお菓子＿＿＿食べている。',
    english: 'My younger sister eats nothing but sweets.',
    correctAnswer: 'ばかり',
    options: ['ばかり', 'だけ', 'しか', 'まで'],
    explanation:
      'Noun + ばかり means "nothing but." お菓子ばかり = nothing but sweets (often with negative nuance).',
  },
  {
    id: 'bakari-fib-3',
    pattern: 'ばかり',
    type: 'fill_in_blank',
    sentence: '彼は文句＿＿＿言っている。',
    english: 'He does nothing but complain.',
    correctAnswer: 'ばかり',
    options: ['ばかり', 'だけ', 'しか', 'まで'],
    explanation:
      'ばかり with a noun or verb means "nothing but / always doing." It often implies criticism.',
  },
  {
    id: 'bakari-mc-1',
    pattern: 'ばかり',
    type: 'multiple_choice',
    sentence: 'What does た-form + ばかり express?',
    english: 'Select the correct meaning.',
    correctAnswer: 'Something happened recently ("just did")',
    options: [
      'Something happened recently ("just did")',
      'Something will happen soon',
      'Only one thing exists',
      'An intention to do something',
    ],
    explanation:
      'た-form + ばかり indicates recency: 来たばかりだ (I just came — recently). It implies the action was done not long ago.',
  },
  {
    id: 'bakari-mc-2',
    pattern: 'ばかり',
    type: 'multiple_choice',
    sentence: 'What nuance does ばかり carry when meaning "nothing but"?',
    english: 'Select the typical nuance.',
    correctAnswer: 'Criticism or negative judgment about excess',
    options: [
      'Criticism or negative judgment about excess',
      'Praise for consistency',
      'Neutral factual description',
      'Formal academic observation',
    ],
    explanation:
      'When ばかり means "nothing but," it often carries a negative nuance of excess or criticism: ゲームばかりしている (does nothing but play games).',
  },

  // ===========================================================================
  // だけ (only / just)
  // ===========================================================================
  {
    id: 'dake-fib-1',
    pattern: 'だけ',
    type: 'fill_in_blank',
    sentence: '水＿＿＿ください。',
    english: 'Just water, please.',
    correctAnswer: 'だけ',
    options: ['だけ', 'しか', 'ばかり', 'まで'],
    explanation:
      'だけ means "only" or "just" with a neutral tone. 水だけ = just water.',
  },
  {
    id: 'dake-fib-2',
    pattern: 'だけ',
    type: 'fill_in_blank',
    sentence: '聞く＿＿＿で何もしない人が嫌いだ。',
    english: 'I dislike people who only listen and do nothing.',
    correctAnswer: 'だけ',
    options: ['だけ', 'しか', 'ばかり', 'まで'],
    explanation:
      'Verb dictionary form + だけ means "only do (that)." 聞くだけ = only listen.',
  },
  {
    id: 'dake-fib-3',
    pattern: 'だけ',
    type: 'fill_in_blank',
    sentence: 'できる＿＿＿のことはやった。',
    english: 'I did as much as I could.',
    correctAnswer: 'だけ',
    options: ['だけ', 'しか', 'ばかり', 'ほど'],
    explanation:
      'できるだけ means "as much as possible." This is a common set phrase.',
  },
  {
    id: 'dake-mc-1',
    pattern: 'だけ',
    type: 'multiple_choice',
    sentence: 'What is the difference between だけ and しか?',
    english: 'Select the correct distinction.',
    correctAnswer: 'だけ is neutral; しか implies insufficiency and requires a negative verb',
    options: [
      'だけ is neutral; しか implies insufficiency and requires a negative verb',
      'だけ is negative; しか is neutral',
      'だけ requires a negative verb; しか does not',
      'They are identical in meaning and usage',
    ],
    explanation:
      'だけ is neutral: 一つだけある (there is only one). しか implies "only / not enough" and requires a negative verb: 一つしかない (there is only one — not enough).',
  },
  {
    id: 'dake-mc-2',
    pattern: 'だけ',
    type: 'multiple_choice',
    sentence: 'What does できるだけ mean?',
    english: 'Select the correct meaning.',
    correctAnswer: 'As much as possible',
    options: [
      'As much as possible',
      'Only able to',
      'Cannot do',
      'Easy to do',
    ],
    explanation:
      'できるだけ is a set expression meaning "as much as possible": できるだけ早く来てください (please come as early as possible).',
  },

  // ===========================================================================
  // しか...ない (nothing but / only with negative)
  // ===========================================================================
  {
    id: 'shikanai-fib-1',
    pattern: 'しか...ない',
    type: 'fill_in_blank',
    sentence: '今月はあと五千円＿＿＿残っていない。',
    english: 'I only have 5,000 yen left this month.',
    correctAnswer: 'しか',
    options: ['しか', 'だけ', 'ばかり', 'まで'],
    explanation:
      'しか + negative verb means "only" with a nuance of insufficiency. 五千円しか残っていない = only 5,000 yen left (not enough).',
  },
  {
    id: 'shikanai-fib-2',
    pattern: 'しか...ない',
    type: 'fill_in_blank',
    sentence: 'この町にはバス＿＿＿通っていない。',
    english: 'Only buses run through this town (nothing else).',
    correctAnswer: 'しか',
    options: ['しか', 'だけ', 'ばかり', 'でも'],
    explanation:
      'しか replaces particles を and が. バスしか通っていない = only buses run (implying it\'s insufficient).',
  },
  {
    id: 'shikanai-fib-3',
    pattern: 'しか...ない',
    type: 'fill_in_blank',
    sentence: 'ひらがな＿＿＿読めません。',
    english: 'I can only read hiragana.',
    correctAnswer: 'しか',
    options: ['しか', 'だけ', 'ばかり', 'も'],
    explanation:
      'しか + negative verb. ひらがなしか読めません = I can only read hiragana (implying limitation).',
  },
  {
    id: 'shikanai-mc-1',
    pattern: 'しか...ない',
    type: 'multiple_choice',
    sentence: 'What kind of verb must follow しか?',
    english: 'Select the required verb form.',
    correctAnswer: 'A negative verb',
    options: [
      'A negative verb',
      'A positive verb',
      'A て-form verb',
      'A potential verb',
    ],
    explanation:
      'しか always requires a negative verb: 水しか飲まない (I drink nothing but water). Using a positive verb with しか is grammatically incorrect.',
  },
  {
    id: 'shikanai-mc-2',
    pattern: 'しか...ない',
    type: 'multiple_choice',
    sentence: 'Compare: 千円だけある vs 千円しかない. What is the difference?',
    english: 'Select the correct nuance difference.',
    correctAnswer: 'だけ is neutral (I have just 1,000 yen); しか implies insufficiency (only 1,000 yen, not enough)',
    options: [
      'だけ is neutral (I have just 1,000 yen); しか implies insufficiency (only 1,000 yen, not enough)',
      'だけ is formal; しか is casual',
      'だけ is negative; しか is positive',
      'They mean exactly the same thing',
    ],
    explanation:
      'だけある is a neutral statement of fact. しかない implies the amount is insufficient or less than expected.',
  },

  // ===========================================================================
  // ても (even if / even though)
  // ===========================================================================
  {
    id: 'temo-fib-1',
    pattern: 'ても',
    type: 'fill_in_blank',
    sentence: '薬を飲ん＿＿＿熱が下がらない。',
    english: 'Even though I took medicine, my fever won\'t go down.',
    correctAnswer: 'でも',
    options: ['でも', 'ても', 'たら', 'ば'],
    explanation:
      'Verb て-form + も means "even if / even though." 飲んでも = even if/though I drink. (飲む has て-form 飲んで.)',
  },
  {
    id: 'temo-fib-2',
    pattern: 'ても',
    type: 'fill_in_blank',
    sentence: 'いくら説明し＿＿＿彼は分かってくれない。',
    english: 'No matter how much I explain, he doesn\'t understand.',
    correctAnswer: 'ても',
    options: ['ても', 'たら', 'れば', 'ながら'],
    explanation:
      'いくら + verb ても means "no matter how much." いくら説明しても = no matter how much I explain.',
  },
  {
    id: 'temo-fib-3',
    pattern: 'ても',
    type: 'fill_in_blank',
    sentence: '忙しく＿＿＿毎日運動するようにしている。',
    english: 'Even if I\'m busy, I try to exercise every day.',
    correctAnswer: 'ても',
    options: ['ても', 'たら', 'れば', 'から'],
    explanation:
      'For い-adjectives: drop い and add くても. 忙しい → 忙しくても = even if busy.',
  },
  {
    id: 'temo-mc-1',
    pattern: 'ても',
    type: 'multiple_choice',
    sentence: 'How do you form ても with な-adjectives?',
    english: 'Select the correct form for 静か (quiet).',
    correctAnswer: '静かでも',
    options: ['静かでも', '静かくても', '静かても', '静かなても'],
    explanation:
      'For な-adjectives, use でも: 静かでも (even if quiet). For nouns as well: 雨でも (even if rain).',
  },
  {
    id: 'temo-mc-2',
    pattern: 'ても',
    type: 'multiple_choice',
    sentence: 'What is the difference between ても and のに?',
    english: 'Select the correct distinction.',
    correctAnswer: 'ても is a general concessive; のに expresses frustration about a specific situation',
    options: [
      'ても is a general concessive; のに expresses frustration about a specific situation',
      'ても is past tense; のに is present tense',
      'ても is formal; のに is casual',
      'They are identical in usage',
    ],
    explanation:
      'ても is a broader concessive ("even if"). のに expresses the speaker\'s frustration or disappointment about a specific outcome.',
  },
]
