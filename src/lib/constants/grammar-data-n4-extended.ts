import type { GrammarPatternData } from '@/types/grammar'

export const N4_EXTENDED_GRAMMAR_PATTERNS: GrammarPatternData[] = [
  // ===========================================================================
  // VERBS (8)
  // ===========================================================================
  {
    pattern: 'てみる',
    meaning: 'try doing something',
    formation: 'Verb て-form + みる',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'てみる expresses trying something to see what it is like or what happens. It implies doing something as an experiment or for the first time. The みる conjugates as a regular る-verb: てみます, てみた, てみたい.',
    notes:
      'てみる focuses on the experience of trying, not on attempting something difficult. For "try hard to do," use ようとする instead. てみる is very common in everyday speech: 食べてみて！ (Try eating it!)',
    common_mistakes:
      'Confusing てみる with ようとする. てみる means "try doing (to see what happens)," while ようとする means "attempt/try to do (with effort)." 寿司を食べてみた (I tried eating sushi) vs 寿司を食べようとした (I tried/attempted to eat sushi).',
    examples: [
      {
        japanese: 'この料理を食べてみてください。',
        english: 'Please try eating this dish.',
        furigana: 'このりょうりをたべてみてください。',
      },
      {
        japanese: '新しいアプリを使ってみた。',
        english: 'I tried using the new app.',
        furigana: 'あたらしいアプリをつかってみた。',
      },
      {
        japanese: '一度日本に行ってみたいです。',
        english: 'I want to try going to Japan once.',
        furigana: 'いちどにほんにいってみたいです。',
      },
      {
        japanese: '自分で作ってみたけど、難しかった。',
        english: 'I tried making it myself, but it was difficult.',
        furigana: 'じぶんでつくってみたけど、むずかしかった。',
      },
    ],
  },
  {
    pattern: 'ておく',
    meaning: 'do something in advance / for preparation',
    formation: 'Verb て-form + おく',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ておく expresses doing something in advance as preparation for a future situation, or leaving something in a certain state intentionally. It implies forethought and planning. おく conjugates as an う-verb: ておきます, ておいた.',
    notes:
      'In casual speech, ておく contracts to とく: 買っておく → 買っとく, 調べておいた → 調べといた. It can also mean "leave as is": 窓を開けておく (leave the window open).',
    common_mistakes:
      'Forgetting the preparatory nuance. ておく is not just "do" — it implies purpose. ホテルを予約しておいた means "I booked a hotel (in advance, in preparation)," not just "I booked a hotel."',
    examples: [
      {
        japanese: '旅行の前にホテルを予約しておいた。',
        english: 'I booked a hotel in advance before the trip.',
        furigana: 'りょこうのまえにホテルをよやくしておいた。',
      },
      {
        japanese: '明日のために資料を準備しておきます。',
        english: 'I will prepare the materials in advance for tomorrow.',
        furigana: 'あしたのためにしりょうをじゅんびしておきます。',
      },
      {
        japanese: 'エアコンをつけておいてください。',
        english: 'Please leave the air conditioner on.',
        furigana: 'エアコンをつけておいてください。',
      },
      {
        japanese: '試験の前に復習しとこう。',
        english: 'Let\'s review beforehand before the exam.',
        furigana: 'しけんのまえにふくしゅうしとこう。',
      },
    ],
  },
  {
    pattern: 'ていく',
    meaning: 'gradual change going forward / continue into the future',
    formation: 'Verb て-form + いく',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ていく expresses a change or action that progresses from now into the future, or movement away from the speaker. It describes trends, gradual changes, or actions that continue forward. It can also mean physically going somewhere after doing something.',
    notes:
      'Compare with てくる (change up to now) and ていく (change from now on). 人口が減ってきた (population has been decreasing) vs 人口が減っていく (population will keep decreasing).',
    common_mistakes:
      'Confusing ていく and てくる direction. ていく = away from the present/speaker (forward in time or space). てくる = toward the present/speaker. Think of いく as "going away" and くる as "coming here."',
    examples: [
      {
        japanese: 'これからもっと暑くなっていくでしょう。',
        english: 'It will probably keep getting hotter from now on.',
        furigana: 'これからもっとあつくなっていくでしょう。',
      },
      {
        japanese: '日本語を勉強していきたいです。',
        english: 'I want to continue studying Japanese (going forward).',
        furigana: 'にほんごをべんきょうしていきたいです。',
      },
      {
        japanese: 'お弁当を持っていく。',
        english: 'I will take a lunch box (with me).',
        furigana: 'おべんとうをもっていく。',
      },
      {
        japanese: '技術はどんどん進歩していくだろう。',
        english: 'Technology will probably keep advancing more and more.',
        furigana: 'ぎじゅつはどんどんしんぽしていくだろう。',
      },
    ],
  },
  {
    pattern: 'てくる',
    meaning: 'gradual change up to now / begin to emerge',
    formation: 'Verb て-form + くる',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'てくる expresses a change that has been developing from the past up to the present, something beginning to emerge, or movement toward the speaker. It describes trends that have led to the current moment. It can also mean physically coming back after doing something.',
    notes:
      'Three main uses: (1) change up to now: 暖かくなってきた (it has gotten warmer), (2) emergence: 雨が降ってきた (it started raining), (3) going and coming back: コーヒーを買ってくる (I\'ll go buy coffee and come back).',
    common_mistakes:
      'Using てくる for future changes. For changes continuing into the future, use ていく: これから寒くなっていく (it will get colder). てくる is for changes that have happened up to the present moment.',
    examples: [
      {
        japanese: '最近、日本語が分かるようになってきた。',
        english: 'Recently, I have come to understand Japanese.',
        furigana: 'さいきん、にほんごがわかるようになってきた。',
      },
      {
        japanese: '雨が降ってきたから、帰ろう。',
        english: 'It started raining, so let\'s go home.',
        furigana: 'あめがふってきたから、かえろう。',
      },
      {
        japanese: 'ちょっとコンビニで飲み物を買ってくる。',
        english: 'I\'ll go buy a drink at the convenience store (and come back).',
        furigana: 'ちょっとコンビニでのみものをかってくる。',
      },
      {
        japanese: 'お腹が空いてきました。',
        english: 'I\'ve started to get hungry.',
        furigana: 'おなかがすいてきました。',
      },
    ],
  },
  {
    pattern: 'よう/おう（意向形）',
    meaning: 'let\'s / I shall / volitional form',
    formation:
      'る-verbs: drop る + よう / う-verbs: change う to おう / する → しよう / 来る → 来よう',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'The volitional form expresses the speaker\'s intention or will ("I shall"), or an invitation to do something together ("let\'s"). It is the plain equivalent of ましょう. It is also used in patterns like ようと思う (I\'m thinking of doing) and ようとする (try to do).',
    notes:
      'Formation: 食べる → 食べよう, 行く → 行こう, 読む → 読もう, する → しよう, 来る → 来よう (こよう). Used alone as casual "let\'s" or inside grammar patterns.',
    common_mistakes:
      'Confusing the volitional with ましょう in formality. よう/おう is casual: 行こう (let\'s go). ましょう is polite: 行きましょう. Do not mix them in the same sentence.',
    examples: [
      {
        japanese: '一緒に映画を見よう。',
        english: 'Let\'s watch a movie together.',
        furigana: 'いっしょにえいがをみよう。',
      },
      {
        japanese: '来年日本に行こうと思っている。',
        english: 'I\'m thinking of going to Japan next year.',
        furigana: 'らいねんにほんにいこうとおもっている。',
      },
      {
        japanese: 'もう寝よう。明日は早いから。',
        english: 'Let\'s go to sleep now. Tomorrow is early.',
        furigana: 'もうねよう。あしたははやいから。',
      },
      {
        japanese: '何を食べようか迷っている。',
        english: 'I\'m wondering what I should eat.',
        furigana: 'なにをたべようかまよっている。',
      },
    ],
  },
  {
    pattern: '可能形',
    meaning: 'potential form: can do / be able to',
    formation:
      'る-verbs: drop る + られる / う-verbs: change う to える / する → できる / 来る → 来られる',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'The potential form expresses ability — "can do" or "be able to." It is a verb conjugation that is more natural in conversation than ことができる. The object of potential verbs is often marked with が instead of を.',
    notes:
      'For る-verbs, the potential form is the same as the passive form (食べられる). In casual speech, る-verbs often drop ら: 食べられる → 食べれる (ら抜き言葉). This is common but considered informal.',
    common_mistakes:
      'Forgetting the particle change. With potential form, the object often takes が instead of を: 漢字が読める (can read kanji), not ×漢字を読める. However, を is increasingly accepted in modern Japanese.',
    examples: [
      {
        japanese: '漢字が読めますか。',
        english: 'Can you read kanji?',
        furigana: 'かんじがよめますか。',
      },
      {
        japanese: '明日は早く起きられない。',
        english: 'I can\'t wake up early tomorrow.',
        furigana: 'あしたははやくおきられない。',
      },
      {
        japanese: 'この店ではカードで払える。',
        english: 'You can pay by card at this store.',
        furigana: 'このみせではカードではらえる。',
      },
      {
        japanese: '日本料理が作れるようになりたい。',
        english: 'I want to become able to make Japanese food.',
        furigana: 'にほんりょうりがつくれるようになりたい。',
      },
    ],
  },
  {
    pattern: '命令形',
    meaning: 'imperative form: commands',
    formation:
      'る-verbs: drop る + ろ / う-verbs: change う to え / する → しろ / 来る → 来い（こい）',
    jlpt_level: 'N4',
    difficulty: 'advanced',
    explanation:
      'The imperative form is used for direct commands. It is very strong and is typically used by men in casual or urgent situations — by superiors to subordinates, in sports cheering, in emergencies, or in anime/manga. It is rarely appropriate in polite conversation.',
    notes:
      'Negative command uses な after the dictionary form: 行くな (don\'t go!), 食べるな (don\'t eat!). For polite requests, use てください instead. The imperative is also seen on signs: 止まれ (Stop!).',
    common_mistakes:
      'Overusing the imperative form. It sounds very aggressive in daily conversation. Use てください for polite requests and て form for casual requests among friends: 見て (look) vs 見ろ (look! — commanding).',
    examples: [
      {
        japanese: '早く走れ！',
        english: 'Run faster!',
        furigana: 'はやくはしれ！',
      },
      {
        japanese: '静かにしろ。',
        english: 'Be quiet.',
        furigana: 'しずかにしろ。',
      },
      {
        japanese: 'あきらめるな！',
        english: 'Don\'t give up!',
        furigana: 'あきらめるな！',
      },
      {
        japanese: 'ここに名前を書け。',
        english: 'Write your name here.',
        furigana: 'ここになまえをかけ。',
      },
    ],
  },
  {
    pattern: 'てほしい',
    meaning: 'want someone to do something',
    formation: 'Verb て-form + ほしい',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'てほしい expresses the speaker\'s desire for someone else to do something — "I want (someone) to do." The person you want to act is marked with に. The negative form ないでほしい means "I want someone not to do."',
    notes:
      'てほしい is used for personal wishes and can sound demanding. For polite requests, てもらえませんか or てくれませんか are softer. てほしい is more about expressing your desire than directly requesting.',
    common_mistakes:
      'Confusing てほしい with たい. たい is "I want to do" (self), while てほしい is "I want someone else to do." 行きたい (I want to go) vs 行ってほしい (I want you/them to go).',
    examples: [
      {
        japanese: '早く帰ってきてほしい。',
        english: 'I want you to come home early.',
        furigana: 'はやくかえってきてほしい。',
      },
      {
        japanese: '先生にもう一度説明してほしいです。',
        english: 'I want the teacher to explain it one more time.',
        furigana: 'せんせいにもういちどせつめいしてほしいです。',
      },
      {
        japanese: 'ここで写真を撮らないでほしい。',
        english: 'I don\'t want you to take photos here.',
        furigana: 'ここでしゃしんをとらないでほしい。',
      },
      {
        japanese: '彼に本当のことを話してほしかった。',
        english: 'I wanted him to tell the truth.',
        furigana: 'かれにほんとうのことをはなしてほしかった。',
      },
    ],
  },

  // ===========================================================================
  // CONNECTORS (9)
  // ===========================================================================
  {
    pattern: 'し',
    meaning: 'and / moreover / listing reasons',
    formation: 'Sentence (plain form) + し',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'し is used to list multiple reasons or qualities, often to support a conclusion. It implies that there are additional reasons beyond those stated. It can connect two or more clauses, each ending with し.',
    notes:
      'し can also be used with a single reason for emphasis: おいしいし (it\'s delicious, so...). In casual speech, the final predicate is sometimes omitted: 安いし、おいしいし (it\'s cheap and delicious, [so let\'s go there]).',
    common_mistakes:
      'Using し in formal writing. し is conversational. In formal contexts, use それに or また instead. Also, し requires plain form before it: おいしいし, not ×おいしいですし.',
    examples: [
      {
        japanese: 'この店は安いし、おいしいし、よく行きます。',
        english: 'This restaurant is cheap and delicious, so I go there often.',
        furigana: 'このみせはやすいし、おいしいし、よくいきます。',
      },
      {
        japanese: '今日は天気もいいし、散歩しよう。',
        english: 'The weather is nice today, so let\'s go for a walk.',
        furigana: 'きょうはてんきもいいし、さんぽしよう。',
      },
      {
        japanese: '時間もないし、お金もないし、旅行に行けない。',
        english: 'I have no time and no money, so I can\'t travel.',
        furigana: 'じかんもないし、おかねもないし、りょこうにいけない。',
      },
      {
        japanese: '彼は頭もいいし、スポーツもできるし、人気がある。',
        english: 'He\'s smart and good at sports, so he\'s popular.',
        furigana: 'かれはあたまもいいし、スポーツもできるし、にんきがある。',
      },
    ],
  },
  {
    pattern: 'ために',
    meaning: 'in order to / because of',
    formation:
      'Verb dictionary form + ために (purpose) / Noun + の + ために (purpose) / Verb た-form + ために (cause)',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ために has two main uses: (1) purpose — "in order to" do something, and (2) cause — "because of" something. For purpose, use the dictionary form or noun + の. For cause, use the た-form or noun + の. Context determines the meaning.',
    notes:
      'For purpose, the subject of both clauses must be the same. If different subjects, use ように instead. Compare: 合格するために勉強する (I study to pass) vs 子供が寝るように静かにする (I\'m quiet so that the child sleeps).',
    common_mistakes:
      'Using ために with potential or intransitive verbs for purpose. Use ように instead: 日本語が話せるように勉強する (I study so that I can speak Japanese), not ×日本語が話せるために勉強する.',
    examples: [
      {
        japanese: '日本語を勉強するために日本に来ました。',
        english: 'I came to Japan in order to study Japanese.',
        furigana: 'にほんごをべんきょうするためににほんにきました。',
      },
      {
        japanese: '健康のために毎日運動しています。',
        english: 'I exercise every day for my health.',
        furigana: 'けんこうのためにまいにちうんどうしています。',
      },
      {
        japanese: '台風のために電車が止まった。',
        english: 'The train stopped because of the typhoon.',
        furigana: 'たいふうのためにでんしゃがとまった。',
      },
      {
        japanese: '試験に受かるためにたくさん勉強した。',
        english: 'I studied a lot in order to pass the exam.',
        furigana: 'しけんにうかるためにたくさんべんきょうした。',
      },
    ],
  },
  {
    pattern: 'ように',
    meaning: 'so that / in such a way that',
    formation:
      'Verb dictionary form + ように / Verb ない-form + ように / Verb potential form + ように',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ように expresses a goal or desired state — "so that" something happens. It is used when the goal involves an intransitive verb, potential verb, or a situation the speaker cannot directly control. It focuses on the result rather than the action.',
    notes:
      'Use ように when the two clauses have different subjects, or when the goal is a state rather than an action. Compare: 買うために行く (I go to buy — same subject, action) vs 聞こえるように大きい声で話す (I speak loudly so that it can be heard — different focus).',
    common_mistakes:
      'Confusing ように with ために. Use ために for direct, volitional actions with the same subject. Use ように when the outcome is indirect, involves a state change, or different subjects.',
    examples: [
      {
        japanese: '遅れないように早く出かけた。',
        english: 'I left early so as not to be late.',
        furigana: 'おくれないようにはやくでかけた。',
      },
      {
        japanese: '日本語が上手になるように毎日練習している。',
        english: 'I practice every day so that my Japanese gets better.',
        furigana: 'にほんごがじょうずになるようにまいにちれんしゅうしている。',
      },
      {
        japanese: '忘れないようにメモを書いた。',
        english: 'I wrote a memo so that I wouldn\'t forget.',
        furigana: 'わすれないようにメモをかいた。',
      },
      {
        japanese: '皆に聞こえるように大きな声で話してください。',
        english: 'Please speak in a loud voice so that everyone can hear.',
        furigana: 'みんなにきこえるようにおおきなこえではなしてください。',
      },
    ],
  },
  {
    pattern: 'ようにする',
    meaning: 'make effort to / try to / make sure to',
    formation: 'Verb dictionary form + ようにする / Verb ない-form + ようにする',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ようにする expresses making a conscious effort or habit of doing (or not doing) something. It implies an ongoing effort to change behavior or maintain a practice. ようにしている means "I make it a habit to."',
    notes:
      'ようにする = start making the effort. ようにしている = have been making the effort (habitual). 野菜を食べるようにする (I will try to eat vegetables) vs 野菜を食べるようにしている (I make it a habit to eat vegetables).',
    common_mistakes:
      'Confusing ようにする with ことにする. ようにする is about ongoing effort toward a goal. ことにする is a one-time decision: 毎日走るようにしている (I try to run every day — effort) vs 毎日走ることにした (I decided to run every day — decision).',
    examples: [
      {
        japanese: '毎日野菜を食べるようにしている。',
        english: 'I try to eat vegetables every day.',
        furigana: 'まいにちやさいをたべるようにしている。',
      },
      {
        japanese: '夜遅く食べないようにしています。',
        english: 'I try not to eat late at night.',
        furigana: 'よるおそくたべないようにしています。',
      },
      {
        japanese: 'もっと早く寝るようにします。',
        english: 'I will try to go to sleep earlier.',
        furigana: 'もっとはやくねるようにします。',
      },
      {
        japanese: '毎朝ストレッチをするようにしている。',
        english: 'I make it a habit to stretch every morning.',
        furigana: 'まいあさストレッチをするようにしている。',
      },
    ],
  },
  {
    pattern: 'ようになる',
    meaning: 'come to be able to / reach a state where',
    formation: 'Verb dictionary form + ようになる / Verb ない-form + ようになる',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ようになる expresses a gradual change in ability or state — "come to be able to" or "reach a point where." It describes the transition from one state to another over time. It is often used with potential verbs to describe acquired abilities.',
    notes:
      'Often used with potential forms: 読めるようになった (I came to be able to read). The negative form (なくなる) means the ability or habit was lost: 食べられなくなった (I can no longer eat it).',
    common_mistakes:
      'Using ようになる for sudden changes. It implies gradual change over time. For sudden realization or change, use ことになる or just なる.',
    examples: [
      {
        japanese: '日本語が少し話せるようになりました。',
        english: 'I\'ve come to be able to speak a little Japanese.',
        furigana: 'にほんごがすこしはなせるようになりました。',
      },
      {
        japanese: '毎日練習して、泳げるようになった。',
        english: 'I practiced every day and became able to swim.',
        furigana: 'まいにちれんしゅうして、およげるようになった。',
      },
      {
        japanese: '子供が一人で着替えられるようになった。',
        english: 'The child has come to be able to change clothes by themselves.',
        furigana: 'こどもがひとりできがえられるようになった。',
      },
      {
        japanese: '最近、朝早く起きられるようになってきた。',
        english: 'Recently, I\'ve been becoming able to wake up early in the morning.',
        furigana: 'さいきん、あさはやくおきられるようになってきた。',
      },
    ],
  },
  {
    pattern: 'ことにする',
    meaning: 'decide to do',
    formation: 'Verb dictionary form + ことにする / Verb ない-form + ことにする',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ことにする expresses a personal decision to do (or not do) something. It emphasizes the speaker\'s active choice. ことにした means "I decided to," and ことにしている means "I have made it my policy to" (a standing decision).',
    notes:
      'Compare with ことになる (it has been decided — external/passive). ことにする is the speaker\'s own decision. 来月引っ越すことにした (I decided to move next month) vs 来月引っ越すことになった (It has been decided that I will move next month).',
    common_mistakes:
      'Confusing ことにする with ようにする. ことにする is a clear, one-time decision. ようにする is an ongoing effort. 毎朝走ることにした (I decided to run every morning — decision) vs 毎朝走るようにしている (I make an effort to run every morning — effort).',
    examples: [
      {
        japanese: '来月から日本語の学校に通うことにした。',
        english: 'I decided to attend a Japanese language school starting next month.',
        furigana: 'らいげつからにほんごのがっこうにかようことにした。',
      },
      {
        japanese: '甘いものを食べないことにしている。',
        english: 'I have made it a rule not to eat sweets.',
        furigana: 'あまいものをたべないことにしている。',
      },
      {
        japanese: '今年は海外旅行に行くことにしました。',
        english: 'I have decided to go on a trip abroad this year.',
        furigana: 'ことしはかいがいりょこうにいくことにしました。',
      },
      {
        japanese: 'あの店にはもう行かないことにした。',
        english: 'I decided not to go to that restaurant anymore.',
        furigana: 'あのみせにはもういかないことにした。',
      },
    ],
  },
  {
    pattern: 'ことになる',
    meaning: 'it has been decided that / it turns out that',
    formation: 'Verb dictionary form + ことになる / Verb ない-form + ことになる',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ことになる expresses that something has been decided by external circumstances, an organization, or fate — not by the speaker\'s own will. It presents the decision as something that happened to the speaker. ことになった means "it has been decided that."',
    notes:
      'Often used for company decisions, life changes beyond one\'s control, or arrangements made by others. 転勤することになった (I\'m being transferred — company decided) implies less personal agency than 転勤することにした (I decided to transfer).',
    common_mistakes:
      'Using ことになる for personal decisions. If you decided yourself, use ことにする. ことになる implies the decision was external or beyond your control.',
    examples: [
      {
        japanese: '来月大阪に転勤することになりました。',
        english: 'It has been decided that I will transfer to Osaka next month.',
        furigana: 'らいげつおおさかにてんきんすることになりました。',
      },
      {
        japanese: '会議は来週に延期することになった。',
        english: 'It has been decided that the meeting will be postponed to next week.',
        furigana: 'かいぎはらいしゅうにえんきすることになった。',
      },
      {
        japanese: '日本で働くことになりました。',
        english: 'It has turned out that I will work in Japan.',
        furigana: 'にほんではたらくことになりました。',
      },
      {
        japanese: '今年のパーティーは中止することになった。',
        english: 'It has been decided that this year\'s party will be canceled.',
        furigana: 'ことしのパーティーはちゅうしすることになった。',
      },
    ],
  },
  {
    pattern: 'について',
    meaning: 'about / concerning / regarding',
    formation: 'Noun + について',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'について indicates the topic of discussion, investigation, or thought — "about" or "concerning." It is used when specifying what something is about. The form についての can modify a noun directly.',
    notes:
      'について can be replaced with に関して (more formal). Before a noun, use についての: 日本についての本 (a book about Japan). Also used in questions: 何について話しますか (What will you talk about?).',
    common_mistakes:
      'Confusing について with に対して. について means "about/regarding a topic." に対して means "toward/against" and expresses attitude or comparison: 先生に対する態度 (attitude toward the teacher).',
    examples: [
      {
        japanese: '日本の文化について調べています。',
        english: 'I am researching about Japanese culture.',
        furigana: 'にほんのぶんかについてしらべています。',
      },
      {
        japanese: 'この問題について話し合いましょう。',
        english: 'Let\'s discuss this problem.',
        furigana: 'このもんだいについてはなしあいましょう。',
      },
      {
        japanese: '環境についての本を読んだ。',
        english: 'I read a book about the environment.',
        furigana: 'かんきょうについてのほんをよんだ。',
      },
      {
        japanese: '将来について考えなければならない。',
        english: 'I have to think about the future.',
        furigana: 'しょうらいについてかんがえなければならない。',
      },
    ],
  },
  {
    pattern: 'によって',
    meaning: 'by means of / depending on / due to',
    formation: 'Noun + によって / Noun + により / Noun + による + Noun',
    jlpt_level: 'N4',
    difficulty: 'advanced',
    explanation:
      'によって has several meanings: (1) "by" (agent in passive), (2) "depending on" (variation), (3) "by means of" (method), and (4) "due to" (cause). It is more formal than で and used in written language and formal speech.',
    notes:
      'Before a noun, use による: 地震による被害 (damage due to earthquake). The meaning depends on context: 国によって文化が違う (culture differs depending on the country) vs この本は田中先生によって書かれた (this book was written by Professor Tanaka).',
    common_mistakes:
      'Overusing によって in casual conversation. It is formal. In casual speech, で is usually sufficient: バスで行く (go by bus), not ×バスによって行く.',
    examples: [
      {
        japanese: '国によって習慣が違います。',
        english: 'Customs differ depending on the country.',
        furigana: 'くにによってしゅうかんがちがいます。',
      },
      {
        japanese: 'この建物は有名な建築家によって設計された。',
        english: 'This building was designed by a famous architect.',
        furigana: 'このたてものはゆうめいなけんちくかによってせっけいされた。',
      },
      {
        japanese: '人によって意見が異なる。',
        english: 'Opinions vary depending on the person.',
        furigana: 'ひとによっていけんがことなる。',
      },
      {
        japanese: '台風による被害が大きかった。',
        english: 'The damage due to the typhoon was significant.',
        furigana: 'たいふうによるひがいがおおきかった。',
      },
    ],
  },

  // ===========================================================================
  // SENTENCE PATTERNS (7)
  // ===========================================================================
  {
    pattern: 'ようだ/みたいだ',
    meaning: 'seems like / appears to be',
    formation:
      'Verb plain form + ようだ / い-Adj + ようだ / な-Adj + な + ようだ / Noun + の + ようだ (みたいだ follows same pattern but without な/の)',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ようだ and みたいだ express the speaker\'s judgment based on evidence — "it seems like" or "it appears that." ようだ is more formal and literary, while みたいだ is casual. Both indicate a subjective assessment based on what the speaker observes.',
    notes:
      'ようだ can also mean "like/similar to" for comparisons: まるで夢のようだ (it\'s just like a dream). みたいだ is the casual equivalent: 夢みたいだ. Both are different from そうだ (appearance based on how something looks).',
    common_mistakes:
      'Confusing ようだ with そうだ. そうだ (appearance) is based on visual impression: おいしそう (looks delicious — looking at it). ようだ is based on broader evidence: おいしいようだ (it seems delicious — based on reviews, others\' reactions, etc.).',
    examples: [
      {
        japanese: '彼は疲れているようだ。',
        english: 'He seems to be tired.',
        furigana: 'かれはつかれているようだ。',
      },
      {
        japanese: '外は寒いみたいだよ。',
        english: 'It seems like it\'s cold outside.',
        furigana: 'そとはさむいみたいだよ。',
      },
      {
        japanese: 'この問題は簡単なようで、実は難しい。',
        english: 'This problem seems easy, but is actually difficult.',
        furigana: 'このもんだいはかんたんなようで、じつはむずかしい。',
      },
      {
        japanese: 'まるで映画みたいな話だね。',
        english: 'That\'s a story like something from a movie.',
        furigana: 'まるでえいがみたいなはなしだね。',
      },
    ],
  },
  {
    pattern: 'らしい',
    meaning: 'seems / apparently / -like',
    formation:
      'Verb plain form + らしい / い-Adj + らしい / な-Adj + らしい / Noun + らしい',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'らしい has two main uses: (1) conjecture based on information — "apparently" or "it seems" (hearsay or evidence-based), and (2) typicality — "like a" or "typical of" when attached directly to a noun. For conjecture, it conveys less certainty than ようだ.',
    notes:
      'Conjecture: 明日は雨らしい (apparently it will rain tomorrow — based on what I heard or saw). Typicality: 彼は男らしい (he is manly / like a man). These are distinct meanings determined by context.',
    common_mistakes:
      'Confusing らしい (conjecture) with そうだ (hearsay). Both can mean "I heard," but らしい suggests the speaker processed the information and offers it as a deduction, while そうだ simply reports what was heard.',
    examples: [
      {
        japanese: '来週テストがあるらしい。',
        english: 'Apparently there is a test next week.',
        furigana: 'らいしゅうテストがあるらしい。',
      },
      {
        japanese: 'あの店のラーメンはおいしいらしいよ。',
        english: 'I hear the ramen at that shop is delicious.',
        furigana: 'あのみせのラーメンはおいしいらしいよ。',
      },
      {
        japanese: '今日は彼女は来ないらしい。',
        english: 'Apparently she isn\'t coming today.',
        furigana: 'きょうはかのじょはこないらしい。',
      },
      {
        japanese: '春らしい暖かい日が続いている。',
        english: 'The warm, spring-like days have been continuing.',
        furigana: 'はるらしいあたたかいひがつづいている。',
      },
    ],
  },
  {
    pattern: 'はずだ',
    meaning: 'should be / expected to be',
    formation:
      'Verb plain form + はずだ / い-Adj + はずだ / な-Adj + な + はずだ / Noun + の + はずだ',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'はずだ expresses a strong expectation based on logic, evidence, or prior knowledge — "should be" or "is expected to." It conveys the speaker\'s confidence that something is true or will happen. The negative はずがない means "there is no way that."',
    notes:
      'はずだ is based on the speaker\'s reasoning: 彼は来るはずだ (he should come — I have reason to believe so). はずがない expresses strong disbelief: そんなはずがない (that can\'t be / no way).',
    common_mistakes:
      'Using はずだ for things you are uncertain about. はずだ implies confidence. For uncertainty, use かもしれない (might). 電車は来るはずだ (the train should come — I\'m confident) vs 電車は来るかもしれない (the train might come — uncertain).',
    examples: [
      {
        japanese: '彼はもう着いているはずです。',
        english: 'He should have arrived by now.',
        furigana: 'かれはもうついているはずです。',
      },
      {
        japanese: 'この薬を飲めば治るはずだ。',
        english: 'If you take this medicine, you should get better.',
        furigana: 'このくすりをのめばなおるはずだ。',
      },
      {
        japanese: '鍵はポケットにあるはずなのに、見つからない。',
        english: 'The key should be in my pocket, but I can\'t find it.',
        furigana: 'かぎはポケットにあるはずなのに、みつからない。',
      },
      {
        japanese: 'そんなに高いはずがない。',
        english: 'There\'s no way it\'s that expensive.',
        furigana: 'そんなにたかいはずがない。',
      },
    ],
  },
  {
    pattern: 'つもり',
    meaning: 'intend to / plan to',
    formation: 'Verb dictionary form + つもりだ / Verb ない-form + つもりだ',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'つもり expresses the speaker\'s intention or plan — "I intend to" or "I plan to." It indicates a firm personal intention that has already been considered. The negative ないつもりだ means "I intend not to."',
    notes:
      'つもりだった (past) means "I had intended to (but didn\'t)." It implies the plan was not carried out: 行くつもりだったけど、行けなかった (I had intended to go, but I couldn\'t). つもり is only used for first person in statements.',
    common_mistakes:
      'Using つもり for third person statements. For others\' intentions, add a reporting structure: 彼は行くつもりらしい (apparently he intends to go). Directly saying ×彼は行くつもりだ sounds unnatural.',
    examples: [
      {
        japanese: '来年日本に留学するつもりです。',
        english: 'I intend to study abroad in Japan next year.',
        furigana: 'らいねんにほんにりゅうがくするつもりです。',
      },
      {
        japanese: '週末は何をするつもりですか。',
        english: 'What do you plan to do on the weekend?',
        furigana: 'しゅうまつはなにをするつもりですか。',
      },
      {
        japanese: 'もうお酒は飲まないつもりだ。',
        english: 'I intend not to drink alcohol anymore.',
        furigana: 'もうおさけはのまないつもりだ。',
      },
      {
        japanese: '早く帰るつもりだったけど、仕事が終わらなかった。',
        english: 'I had intended to go home early, but my work wasn\'t finished.',
        furigana: 'はやくかえるつもりだったけど、しごとがおわらなかった。',
      },
    ],
  },
  {
    pattern: 'ところだ',
    meaning: 'about to / in the middle of / just finished',
    formation:
      'Verb dictionary form + ところだ / Verb ている + ところだ / Verb た-form + ところだ',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ところだ describes the temporal phase of an action. With the dictionary form, it means "about to do." With ている, it means "in the middle of doing." With the た-form, it means "just finished doing." ところ literally means "point/place" and here refers to a point in time.',
    notes:
      'The three phases: 食べるところだ (about to eat), 食べているところだ (in the middle of eating), 食べたところだ (just finished eating). ちょうど (just/exactly) is often used together: ちょうど食べたところだ (I just now finished eating).',
    common_mistakes:
      'Confusing たところだ with たばかりだ. たところだ means "just now finished" (very immediate). たばかりだ means "just did" (recent, but less immediate). 今食べたところだ (I just finished eating — seconds ago) vs さっき食べたばかりだ (I just ate — a short while ago).',
    examples: [
      {
        japanese: '今から出かけるところです。',
        english: 'I am just about to go out now.',
        furigana: 'いまからでかけるところです。',
      },
      {
        japanese: 'ちょうど晩ご飯を食べているところだ。',
        english: 'I am right in the middle of eating dinner.',
        furigana: 'ちょうどばんごはんをたべているところだ。',
      },
      {
        japanese: '今帰ってきたところです。',
        english: 'I just got home.',
        furigana: 'いまかえってきたところです。',
      },
      {
        japanese: 'お風呂に入ろうとしていたところに電話が来た。',
        english: 'Just when I was about to take a bath, the phone rang.',
        furigana: 'おふろにはいろうとしていたところにでんわがきた。',
      },
    ],
  },
  {
    pattern: 'かもしれない',
    meaning: 'might / maybe / perhaps',
    formation:
      'Verb plain form + かもしれない / い-Adj + かもしれない / な-Adj + かもしれない / Noun + かもしれない',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'かもしれない expresses possibility or uncertainty — "might" or "maybe." It indicates that the speaker considers something possible but is not sure. The polite form is かもしれません. In casual speech, it is often shortened to かも.',
    notes:
      'かもしれない is weaker than だろう/でしょう (probably). It simply acknowledges a possibility without asserting likelihood. Casual: かも alone is very common: 雨かも (it might rain).',
    common_mistakes:
      'Using だ before かもしれない with な-adjectives and nouns. Say 静かかもしれない, not ×静かだかもしれない. Similarly, 学生かもしれない, not ×学生だかもしれない.',
    examples: [
      {
        japanese: '明日は雨が降るかもしれない。',
        english: 'It might rain tomorrow.',
        furigana: 'あしたはあめがふるかもしれない。',
      },
      {
        japanese: 'この問題は難しいかもしれません。',
        english: 'This problem might be difficult.',
        furigana: 'このもんだいはむずかしいかもしれません。',
      },
      {
        japanese: '彼はもう帰ったかもしれない。',
        english: 'He might have already gone home.',
        furigana: 'かれはもうかえったかもしれない。',
      },
      {
        japanese: '遅れるかも。先に行ってて。',
        english: 'I might be late. Go ahead without me.',
        furigana: 'おくれるかも。さきにいってて。',
      },
    ],
  },
  {
    pattern: 'にちがいない',
    meaning: 'must be / no doubt / certainly',
    formation:
      'Verb plain form + にちがいない / い-Adj + にちがいない / な-Adj + にちがいない / Noun + にちがいない',
    jlpt_level: 'N4',
    difficulty: 'advanced',
    explanation:
      'にちがいない expresses a strong conviction — "must be" or "there is no doubt that." It indicates the speaker is almost certain about something based on evidence or reasoning. It is stronger than はずだ and much stronger than かもしれない.',
    notes:
      'Strength of certainty: かもしれない (might) < だろう (probably) < はずだ (should be) < にちがいない (must be / no doubt). にちがいない is often used when drawing a conclusion from observed evidence.',
    common_mistakes:
      'Using だ before にちがいない with な-adjectives and nouns. Say 彼は日本人にちがいない, not ×彼は日本人だにちがいない. Similarly, 静かにちがいない, not ×静かだにちがいない.',
    examples: [
      {
        japanese: 'こんなに上手なら、毎日練習しているにちがいない。',
        english: 'If they\'re this good, they must practice every day.',
        furigana: 'こんなにじょうずなら、まいにちれんしゅうしているにちがいない。',
      },
      {
        japanese: 'あの人は日本人にちがいない。',
        english: 'That person must be Japanese.',
        furigana: 'あのひとはにほんじんにちがいない。',
      },
      {
        japanese: '財布を電車に忘れたにちがいない。',
        english: 'I must have left my wallet on the train.',
        furigana: 'さいふをでんしゃにわすれたにちがいない。',
      },
      {
        japanese: 'このケーキはおいしいにちがいない。',
        english: 'This cake must be delicious.',
        furigana: 'このケーキはおいしいにちがいない。',
      },
    ],
  },

  // ===========================================================================
  // ADJECTIVES (2)
  // ===========================================================================
  {
    pattern: 'やすい',
    meaning: 'easy to do / tends to',
    formation: 'Verb stem (ます-form without ます) + やすい',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'やすい attaches to verb stems to express that an action is easy to do, or that something has a tendency to happen. The resulting word conjugates as an い-adjective: やすくない (not easy to), やすかった (was easy to).',
    notes:
      'やすい can describe both ease and tendency: 分かりやすい (easy to understand), 壊れやすい (easy to break / fragile / breaks easily). The nuance depends on whether the action is intentional or natural.',
    common_mistakes:
      'Attaching やすい to the dictionary form instead of the verb stem. Say 読みやすい (easy to read), not ×読むやすい. Use the ます-form stem: 読みます → 読み + やすい.',
    examples: [
      {
        japanese: 'この本は読みやすいです。',
        english: 'This book is easy to read.',
        furigana: 'このほんはよみやすいです。',
      },
      {
        japanese: '先生の説明は分かりやすかった。',
        english: 'The teacher\'s explanation was easy to understand.',
        furigana: 'せんせいのせつめいはわかりやすかった。',
      },
      {
        japanese: 'このグラスは割れやすいから気をつけて。',
        english: 'This glass breaks easily, so be careful.',
        furigana: 'このグラスはわれやすいからきをつけて。',
      },
      {
        japanese: '白い服は汚れやすい。',
        english: 'White clothes get dirty easily.',
        furigana: 'しろいふくはよごれやすい。',
      },
    ],
  },
  {
    pattern: 'にくい',
    meaning: 'hard to do / difficult to',
    formation: 'Verb stem (ます-form without ます) + にくい',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'にくい attaches to verb stems to express that an action is difficult to do. It is the opposite of やすい. The resulting word conjugates as an い-adjective: にくくない (not hard to), にくかった (was hard to).',
    notes:
      'にくい focuses on inherent difficulty, not impossibility. Compare: 食べにくい (hard to eat — awkward shape, chopsticks) vs 食べられない (cannot eat — allergy, prohibition). Also compare with づらい, which implies physical or psychological discomfort.',
    common_mistakes:
      'Confusing にくい with づらい. にくい is about inherent difficulty: この字は読みにくい (this character is hard to read — small, messy). づらい implies discomfort: 言いづらい (hard to say — emotionally difficult).',
    examples: [
      {
        japanese: 'この漢字は覚えにくい。',
        english: 'This kanji is hard to memorize.',
        furigana: 'このかんじはおぼえにくい。',
      },
      {
        japanese: '箸では食べにくい料理もあります。',
        english: 'There are dishes that are hard to eat with chopsticks.',
        furigana: 'はしではたべにくいりょうりもあります。',
      },
      {
        japanese: 'このペンは書きにくい。',
        english: 'This pen is hard to write with.',
        furigana: 'このペンはかきにくい。',
      },
      {
        japanese: '彼の話は分かりにくかった。',
        english: 'His story was hard to understand.',
        furigana: 'かれのはなしはわかりにくかった。',
      },
    ],
  },

  // ===========================================================================
  // PARTICLES (4)
  // ===========================================================================
  {
    pattern: 'ばかり',
    meaning: 'just / only / nothing but',
    formation:
      'Verb た-form + ばかり / Noun + ばかり / Verb て-form + ばかりいる',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ばかり has several uses: (1) with た-form, it means "just did" (recency): 起きたばかり (I just woke up). (2) With nouns or て-form + いる, it means "nothing but" or "always doing": ゲームばかりしている (does nothing but play games). It often carries a negative nuance of excess.',
    notes:
      'たばかり indicates something happened very recently. Compare with たところ (even more immediate). ばかり for "nothing but" implies criticism: 文句ばかり言う (always complaining). Casual form: ばっかり or ばっか.',
    common_mistakes:
      'Confusing たばかり with たところ. たばかり means "just recently": 来たばかりだ (I just arrived — minutes to hours ago). たところだ means "just this moment": 来たところだ (I arrived just now — seconds ago).',
    examples: [
      {
        japanese: '日本に来たばかりで、まだ何も分からない。',
        english: 'I just came to Japan and don\'t understand anything yet.',
        furigana: 'にほんにきたばかりで、まだなにもわからない。',
      },
      {
        japanese: '彼はゲームばかりしている。',
        english: 'He does nothing but play games.',
        furigana: 'かれはゲームばかりしている。',
      },
      {
        japanese: '甘いものばかり食べないでください。',
        english: 'Please don\'t eat nothing but sweets.',
        furigana: 'あまいものばかりたべないでください。',
      },
      {
        japanese: '起きたばかりだから、まだ眠い。',
        english: 'I just woke up, so I\'m still sleepy.',
        furigana: 'おきたばかりだから、まだねむい。',
      },
    ],
  },
  {
    pattern: 'だけ',
    meaning: 'only / just / as much as',
    formation: 'Noun + だけ / Verb plain form + だけ / い-Adj + だけ / な-Adj + な + だけ',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'だけ indicates a limit or restriction — "only" or "just." It can follow nouns, verbs, and adjectives. Unlike しか, だけ is neutral and does not require a negative verb. It can also mean "as much as" in the pattern できるだけ (as much as possible).',
    notes:
      'だけ is versatile: 一つだけ (just one), 見るだけ (just look), できるだけ早く (as early as possible). Particles after だけ are often optional: 水だけ（を）飲む (drink only water).',
    common_mistakes:
      'Confusing だけ with しか. だけ is neutral: 水だけ飲む (I drink only water). しか requires a negative verb and implies insufficiency: 水しか飲まない (I drink nothing but water). The nuance differs.',
    examples: [
      {
        japanese: 'コーヒーだけでいいです。',
        english: 'Just coffee is fine.',
        furigana: 'コーヒーだけでいいです。',
      },
      {
        japanese: '見るだけで買いません。',
        english: 'I\'m just looking, I\'m not buying.',
        furigana: 'みるだけでかいません。',
      },
      {
        japanese: 'できるだけ早く来てください。',
        english: 'Please come as early as possible.',
        furigana: 'できるだけはやくきてください。',
      },
      {
        japanese: '今日は漢字を十個だけ覚えた。',
        english: 'Today I memorized just ten kanji.',
        furigana: 'きょうはかんじをじゅっこだけおぼえた。',
      },
    ],
  },
  {
    pattern: 'しか...ない',
    meaning: 'nothing but / only (with negative nuance)',
    formation: 'Noun + しか + Negative verb / Counter + しか + Negative verb',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'しか...ない restricts to "only" or "nothing but" with a negative nuance — implying the amount is insufficient or less than expected. The verb must always be negative. It emphasizes that the quantity or scope is limited and possibly disappointing.',
    notes:
      'しか always requires a negative verb ending. Compare: お金が千円だけある (I have just 1000 yen — neutral) vs お金が千円しかない (I only have 1000 yen — not enough). しか replaces particles を and が.',
    common_mistakes:
      'Using a positive verb with しか. The verb must be negative: 水しか飲まない (I drink nothing but water), not ×水しか飲む. しか always pairs with ない/ません.',
    examples: [
      {
        japanese: '財布に千円しかない。',
        english: 'I only have 1000 yen in my wallet.',
        furigana: 'さいふにせんえんしかない。',
      },
      {
        japanese: '今日は三時間しか寝なかった。',
        english: 'I only slept three hours today.',
        furigana: 'きょうはさんじかんしかねなかった。',
      },
      {
        japanese: 'この町にはコンビニしかありません。',
        english: 'There is nothing but a convenience store in this town.',
        furigana: 'このまちにはコンビニしかありません。',
      },
      {
        japanese: '日本語は少ししか話せません。',
        english: 'I can only speak a little Japanese.',
        furigana: 'にほんごはすこししかはなせません。',
      },
    ],
  },
  {
    pattern: 'ても',
    meaning: 'even if / even though',
    formation:
      'Verb て-form + も / い-Adj (drop い) + くても / な-Adj + でも / Noun + でも',
    jlpt_level: 'N4',
    difficulty: 'intermediate',
    explanation:
      'ても expresses a concessive condition — "even if" or "even though." It indicates that the result in the main clause holds true regardless of the condition. For い-adjectives, the form is くても. For な-adjectives and nouns, でも is used.',
    notes:
      'ても can be used for both hypothetical and factual situations: 雨が降っても行く (I will go even if it rains — hypothetical) or 説明しても分からなかった (even though I explained, they didn\'t understand — factual). いくら...ても means "no matter how much."',
    common_mistakes:
      'Confusing ても with のに. Both can translate to "even though," but のに expresses frustration about a specific past/present situation, while ても is a broader concessive: 勉強しても分からない (even if I study, I don\'t understand — general) vs 勉強したのに分からなかった (even though I studied, I didn\'t understand — specific frustration).',
    examples: [
      {
        japanese: '雨が降っても、サッカーをします。',
        english: 'Even if it rains, I will play soccer.',
        furigana: 'あめがふっても、サッカーをします。',
      },
      {
        japanese: 'いくら食べても太らない人がいる。',
        english: 'There are people who don\'t gain weight no matter how much they eat.',
        furigana: 'いくらたべてもふとらないひとがいる。',
      },
      {
        japanese: '高くてもこの靴が欲しい。',
        english: 'Even if it\'s expensive, I want these shoes.',
        furigana: 'たかくてもこのくつがほしい。',
      },
      {
        japanese: '何度聞いても覚えられない。',
        english: 'No matter how many times I hear it, I can\'t remember it.',
        furigana: 'なんどきいてもおぼえられない。',
      },
    ],
  },
]
