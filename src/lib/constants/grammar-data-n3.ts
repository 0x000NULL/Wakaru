import type { GrammarPatternData } from '@/types/grammar'

export const N3_GRAMMAR_PATTERNS: GrammarPatternData[] = [
  // ===========================================================================
  // EXPRESSIONS (~15)
  // ===========================================================================
  {
    pattern: 'わけだ',
    meaning: 'that is why / no wonder / it means that',
    formation: 'Verb plain + わけだ / い-adj + わけだ / な-adj + な + わけだ / Noun + な + わけだ',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'わけだ is used to express a logical conclusion drawn from the preceding context. It conveys the speaker\'s realization or understanding of a situation — "so that\'s why" or "no wonder." It presents the result as a natural, logical consequence.',
    notes:
      'わけ literally means "reason" or "meaning." In casual speech it often becomes わけ without だ. Can be used to confirm understanding or to explain a reason.',
    common_mistakes:
      'Confusing わけだ with はずだ. わけだ states a logical conclusion from known facts, while はずだ expresses an expectation based on reasoning. わけだ looks backward at a cause; はずだ looks forward at a prediction.',
    examples: [
      {
        japanese: '毎日練習しているから、上手になったわけだ。',
        english: 'You practice every day, so no wonder you got good at it.',
        furigana: 'まいにちれんしゅうしているから、じょうずになったわけだ。',
      },
      {
        japanese: '彼は日本に10年住んでいたから、日本語が上手なわけだ。',
        english: 'He lived in Japan for 10 years, so that is why his Japanese is good.',
        furigana: 'かれはにほんに10ねんすんでいたから、にほんごがじょうずなわけだ。',
      },
      {
        japanese: 'つまり、この計画は中止になったわけですね。',
        english: 'In other words, this plan has been cancelled, right?',
        furigana: 'つまり、このけいかくはちゅうしになったわけですね。',
      },
    ],
  },
  {
    pattern: 'わけがない',
    meaning: 'there is no way that / it is impossible that',
    formation: 'Verb plain + わけがない / い-adj + わけがない / な-adj + な + わけがない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'わけがない expresses the speaker\'s strong conviction that something is impossible or cannot be true. It is a forceful denial — "there\'s no way" or "it\'s impossible that." It is stronger than はずがない.',
    notes:
      'Can also appear as わけはない. In casual speech, often shortened to わけない or わきゃない. The polite form is わけがありません.',
    common_mistakes:
      'Confusing わけがない with わけではない. わけがない means "there is no way," while わけではない means "it is not the case that" (partial denial).',
    examples: [
      {
        japanese: 'あの人が嘘をつくわけがない。',
        english: 'There is no way that person would lie.',
        furigana: 'あのひとがうそをつくわけがない。',
      },
      {
        japanese: 'こんな難しい問題が解けるわけがない。',
        english: 'There is no way I can solve such a difficult problem.',
        furigana: 'こんなむずかしいもんだいがとけるわけがない。',
      },
      {
        japanese: '彼女がそんなことを知っているわけがありません。',
        english: 'There is no way she knows about something like that.',
        furigana: 'かのじょがそんなことをしっているわけがありません。',
      },
    ],
  },
  {
    pattern: 'わけにはいかない',
    meaning: 'cannot / must not (due to circumstances)',
    formation: 'Verb dictionary form + わけにはいかない / Verb ない-form + わけにはいかない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'わけにはいかない expresses that one cannot do something due to social norms, obligations, or circumstances, even if they might want to. With the negative form (ないわけにはいかない), it means "cannot avoid doing" or "must do."',
    notes:
      'Often used when there is an external reason preventing an action. Different from できない, which implies physical inability. わけにはいかない implies social or moral constraint.',
    common_mistakes:
      'Using わけにはいかない for simple inability. It should carry a nuance of duty, social pressure, or conscience. "I can\'t swim" would be 泳げない, not 泳ぐわけにはいかない.',
    examples: [
      {
        japanese: '約束したから、行かないわけにはいかない。',
        english: 'I made a promise, so I cannot not go.',
        furigana: 'やくそくしたから、いかないわけにはいかない。',
      },
      {
        japanese: '秘密だから、誰にも話すわけにはいかない。',
        english: 'It is a secret, so I cannot tell anyone.',
        furigana: 'ひみつだから、だれにもはなすわけにはいかない。',
      },
      {
        japanese: '明日は試験だから、遊んでいるわけにはいかない。',
        english: 'The exam is tomorrow, so I cannot be goofing off.',
        furigana: 'あしたはしけんだから、あそんでいるわけにはいかない。',
      },
    ],
  },
  {
    pattern: 'わけではない',
    meaning: 'it is not the case that / it does not mean that',
    formation: 'Verb plain + わけではない / い-adj + わけではない / な-adj + な + わけではない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'わけではない is used for partial denial — it clarifies that something is not entirely or necessarily the case, even if it might appear so. It softens a statement to avoid overgeneralization.',
    notes:
      'Often paired with けど or が to add what is actually true: 嫌いなわけではないけど... (It is not that I dislike it, but...). Can also appear as わけでもない.',
    common_mistakes:
      'Confusing with わけがない. わけではない is a soft partial denial ("it is not that..."), while わけがない is a strong absolute denial ("there is no way...").',
    examples: [
      {
        japanese: '日本語が嫌いなわけではないが、難しいと思う。',
        english: 'It is not that I dislike Japanese, but I think it is difficult.',
        furigana: 'にほんごがきらいなわけではないが、むずかしいとおもう。',
      },
      {
        japanese: 'お金がないわけではないけど、無駄遣いはしたくない。',
        english: 'It is not that I do not have money, but I do not want to waste it.',
        furigana: 'おかねがないわけではないけど、むだづかいはしたくない。',
      },
      {
        japanese: '反対しているわけではありません。',
        english: 'It is not that I am opposed to it.',
        furigana: 'はんたいしているわけではありません。',
      },
    ],
  },
  {
    pattern: 'ものだ',
    meaning: 'should / it is natural to / used to (nostalgia)',
    formation: 'Verb dictionary form + ものだ (general truth) / Verb た-form + ものだ (nostalgia)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ものだ has two main uses. With the dictionary form, it expresses a general truth or how things should be ("one should..."). With the past tense, it expresses nostalgia — fond memories of things one used to do.',
    notes:
      'In the "should" sense, it conveys a widely accepted norm rather than personal opinion. In the nostalgic sense, it is often used with よく: よく〜たものだ (I used to do ... often).',
    common_mistakes:
      'Confusing the two meanings. Context makes it clear: present tense = general truth/advice, past tense = nostalgia. Also, ものだ (advice) is milder than べきだ (obligation).',
    examples: [
      {
        japanese: '年上の人には敬語を使うものだ。',
        english: 'One should use polite language with older people.',
        furigana: 'としうえのひとにはけいごをつかうものだ。',
      },
      {
        japanese: '子供のころ、よくこの川で泳いだものだ。',
        english: 'When I was a child, I used to swim in this river often.',
        furigana: 'こどものころ、よくこのかわでおよいだものだ。',
      },
      {
        japanese: '人生は思い通りにいかないものだ。',
        english: 'Life does not always go as planned.',
        furigana: 'じんせいはおもいどおりにいかないものだ。',
      },
    ],
  },
  {
    pattern: 'ものだから',
    meaning: 'because / the reason is that (excuse/explanation)',
    formation: 'Verb plain + ものだから / い-adj + ものだから / な-adj + な + ものだから',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      "ものだから provides a reason or excuse, often with the nuance that the situation was unavoidable or beyond the speaker's control. It is more emphatic and personal than から alone.",
    notes:
      "Often shortened to もんだから or もので in casual speech. It carries a tone of making an excuse or justifying one's actions. More subjective than ので.",
    common_mistakes:
      'Using ものだから in formal writing where ため or ので would be more appropriate. ものだから is conversational and carries an apologetic or excuse-making tone.',
    examples: [
      {
        japanese: '道が混んでいたものだから、遅れてしまいました。',
        english: 'The road was crowded, so I ended up being late.',
        furigana: 'みちがこんでいたものだから、おくれてしまいました。',
      },
      {
        japanese: '初めてだったものだから、やり方がわからなかった。',
        english: 'It was my first time, so I did not know how to do it.',
        furigana: 'はじめてだったものだから、やりかたがわからなかった。',
      },
      {
        japanese: 'あまりにも嬉しかったものだから、つい泣いてしまった。',
        english: 'I was so happy that I could not help but cry.',
        furigana: 'あまりにもうれしかったものだから、ついないてしまった。',
      },
    ],
  },
  {
    pattern: 'ことがある',
    meaning: 'sometimes happens / there are times when',
    formation: 'Verb dictionary form + ことがある',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'When used with the dictionary form (not た-form), ことがある means "there are times when" or "sometimes it happens that." It describes something that occasionally occurs. This is different from たことがある (N4), which means "have experienced."',
    notes:
      'Often preceded by adverbs like たまに (occasionally) or 時々 (sometimes). The frequency is typically low — for something that always happens, you would not use this pattern.',
    common_mistakes:
      'Confusing with the N4 pattern たことがある (have experienced). Dictionary form + ことがある = sometimes happens. た-form + ことがある = have the experience of having done.',
    examples: [
      {
        japanese: 'たまに電車で寝過ごすことがある。',
        english: 'Sometimes I oversleep on the train.',
        furigana: 'たまにでんしゃでねすごすことがある。',
      },
      {
        japanese: '日本では地震が起きることがある。',
        english: 'In Japan, earthquakes sometimes happen.',
        furigana: 'にほんではじしんがおきることがある。',
      },
      {
        japanese: '忙しくて朝ごはんを食べないことがある。',
        english: 'There are times when I am so busy that I skip breakfast.',
        furigana: 'いそがしくてあさごはんをたべないことがある。',
      },
    ],
  },
  {
    pattern: 'ことは...が',
    meaning: 'it is true that ... but',
    formation: 'Verb plain + ことは + same verb + が / い-adj + ことは + same adj + が',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'This pattern concedes that something is true but then introduces a contrasting point. The same verb or adjective is repeated before and after ことは, creating the sense of "sure, it is X, but...".',
    notes:
      'The repeated word can take different forms: 読むことは読むが (I do read it, but), 高いことは高いが (it is expensive, sure, but). Very natural in spoken Japanese for making concessions.',
    common_mistakes:
      'Forgetting to repeat the same word. The structure requires the verb/adjective to appear twice: once before ことは and once after. Omitting the repetition changes the meaning entirely.',
    examples: [
      {
        japanese: '食べることは食べたが、あまり美味しくなかった。',
        english: 'I did eat it, but it was not very tasty.',
        furigana: 'たべることはたべたが、あまりおいしくなかった。',
      },
      {
        japanese: '読むことは読んだけど、内容がよくわからなかった。',
        english: 'I did read it, but I did not really understand the content.',
        furigana: 'よむことはよんだけど、ないようがよくわからなかった。',
      },
      {
        japanese: '高いことは高いが、品質はとてもいい。',
        english: 'It is expensive, sure, but the quality is very good.',
        furigana: 'たかいことはたかいが、ひんしつはとてもいい。',
      },
    ],
  },
  {
    pattern: 'ざるを得ない',
    meaning: 'cannot help but / have no choice but to',
    formation: 'Verb ない-stem + ざるを得ない (する → せざるを得ない)',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'ざるを得ない expresses that one has no choice but to do something, even if they would rather not. It conveys reluctant obligation — the action is unavoidable due to circumstances.',
    notes:
      'This is a somewhat literary expression. する becomes せざるを得ない (irregular). In spoken Japanese, しないわけにはいかない carries a similar meaning but sounds less formal.',
    common_mistakes:
      'Incorrect conjugation. Remove ない from the ない-form, then add ざるを得ない: 行かない → 行かざるを得ない. Do not add ざる directly to the dictionary form.',
    examples: [
      {
        japanese: '証拠があるので、認めざるを得ない。',
        english: 'Since there is evidence, I have no choice but to admit it.',
        furigana: 'しょうこがあるので、みとめざるをえない。',
      },
      {
        japanese: '人手が足りないから、自分でやらざるを得ない。',
        english: 'Since we are short-staffed, I have no choice but to do it myself.',
        furigana: 'ひとでがたりないから、じぶんでやらざるをえない。',
      },
      {
        japanese: '予算の問題で、計画を変更せざるを得なかった。',
        english: 'Due to budget issues, we had no choice but to change the plan.',
        furigana: 'よさんのもんだいで、けいかくをへんこうせざるをえなかった。',
      },
    ],
  },
  {
    pattern: 'に違いない',
    meaning: 'must be / no doubt that / I am sure that',
    formation:
      'Verb plain + に違いない / い-adj + に違いない / な-adj + に違いない / Noun + に違いない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'に違いない expresses the speaker\'s strong conviction or certainty about something — "it must be" or "there is no doubt that." It is stronger than でしょう or だろう but is still the speaker\'s judgment, not a proven fact.',
    notes:
      'Literally means "there is no difference from" — i.e., it cannot be anything else. More emphatic than はずだ. Can be used for both present reasoning and past events.',
    common_mistakes:
      'Overusing に違いない when the evidence is weak. It implies strong certainty. For mere guesses, use かもしれない or でしょう instead.',
    examples: [
      {
        japanese: 'あの音は雷に違いない。',
        english: 'That sound must be thunder.',
        furigana: 'あのおとはかみなりにちがいない。',
      },
      {
        japanese: '彼女はきっと怒っているに違いない。',
        english: 'She must be angry for sure.',
        furigana: 'かのじょはきっとおこっているにちがいない。',
      },
      {
        japanese: 'こんなに売れているなら、面白い本に違いない。',
        english: 'If it is selling this well, it must be an interesting book.',
        furigana: 'こんなにうれているなら、おもしろいほんにちがいない。',
      },
    ],
  },
  {
    pattern: 'というのは',
    meaning: 'what ... means is / the thing called ... is',
    formation: 'Noun/Phrase + というのは + explanation',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'というのは is used to define, explain, or clarify the meaning of a word, phrase, or concept. It introduces a definition or explanation — "what X means is" or "the reason is."',
    notes:
      'Can also be used to explain a reason: 遅れたというのは、電車が止まったからだ (the reason I was late is that the train stopped). Often shortened to ってのは in casual speech.',
    common_mistakes:
      'Confusing というのは (definition/explanation) with というのに (despite the fact that). They look similar but have very different meanings.',
    examples: [
      {
        japanese: '「花見」というのは、桜の花を見ながら楽しむことです。',
        english: '"Hanami" means enjoying yourself while viewing cherry blossoms.',
        furigana: '「はなみ」というのは、さくらのはなをみながらたのしむことです。',
      },
      {
        japanese: '彼が怒ったというのは、約束を破られたからだ。',
        english: 'The reason he got angry is that his promise was broken.',
        furigana: 'かれがおこったというのは、やくそくをやぶられたからだ。',
      },
      {
        japanese: '「もったいない」というのは、日本独特の考え方です。',
        english: '"Mottainai" is a uniquely Japanese way of thinking.',
        furigana: '「もったいない」というのは、にほんどくとくのかんがえかたです。',
      },
    ],
  },
  {
    pattern: 'とは限らない',
    meaning: 'not necessarily / it is not always the case that',
    formation:
      'Verb plain + とは限らない / い-adj + とは限らない / な-adj + だ + とは限らない / Noun + だ + とは限らない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'とは限らない expresses that something is not necessarily or always the case. It challenges assumptions or generalizations, adding nuance that exceptions exist.',
    notes:
      'Often used to counter common beliefs or stereotypes. Can be combined with からといって: 高いからといって良いとは限らない (just because it is expensive does not mean it is good).',
    common_mistakes:
      'Using とは限らない for complete denial. It means "not necessarily" — it allows for the possibility. For complete denial, use わけではない or simply ない.',
    examples: [
      {
        japanese: '高いものがいいとは限らない。',
        english: 'Expensive things are not necessarily good.',
        furigana: 'たかいものがいいとはかぎらない。',
      },
      {
        japanese: '有名な店が美味しいとは限らない。',
        english: 'Famous restaurants are not necessarily delicious.',
        furigana: 'ゆうめいなみせがおいしいとはかぎらない。',
      },
      {
        japanese: '努力すれば成功するとは限らない。',
        english: 'Even if you make an effort, it does not necessarily mean you will succeed.',
        furigana: 'どりょくすればせいこうするとはかぎらない。',
      },
    ],
  },
  {
    pattern: 'さえ...ば',
    meaning: 'if only / as long as',
    formation: 'Noun + さえ + Verb ば-form / Verb stem + さえ + すれば',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'さえ...ば expresses that if one single condition is met, everything else will be fine. It emphasizes the minimum requirement — "if only X, then..." or "as long as X."',
    notes:
      'さえ replaces particles は, が, を but is added after に, で, から etc. With verbs: Verb stem + さえすれば. With adjectives: ～くさえあれば (い-adj), ～でさえあれば (な-adj).',
    common_mistakes:
      'Forgetting the conditional form (ば/たら). さえ alone is not enough — it must be paired with a conditional: 薬さえ飲めば (if only you take the medicine), not ×薬さえ飲む.',
    examples: [
      {
        japanese: 'お金さえあれば、旅行に行けるのに。',
        english: 'If only I had money, I could go on a trip.',
        furigana: 'おかねさえあれば、りょこうにいけるのに。',
      },
      {
        japanese: '練習さえすれば、上手になれる。',
        english: 'As long as you practice, you can get better.',
        furigana: 'れんしゅうさえすれば、じょうずになれる。',
      },
      {
        japanese: '健康でさえあれば、何でもできる。',
        english: 'As long as you are healthy, you can do anything.',
        furigana: 'けんこうでさえあれば、なんでもできる。',
      },
    ],
  },
  {
    pattern: '以上',
    meaning: 'since / now that / given that',
    formation: 'Verb plain + 以上(は) / Noun + である + 以上(は)',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '以上 (いじょう) used as a conjunction means "since" or "now that" — once a certain fact is established, one must accept the consequences or responsibilities that follow. It carries a sense of resolve or obligation.',
    notes:
      'Often followed by expressions of duty or determination: ～なければならない, ～べきだ, ～つもりだ. The は after 以上 is optional but common. Different from 以上 meaning "more than" (a quantity).',
    common_mistakes:
      'Confusing the conjunction 以上 with the quantity meaning. 三つ以上 = three or more (quantity). 約束した以上 = now that you promised (conjunction). Context distinguishes them.',
    examples: [
      {
        japanese: '約束した以上、守らなければならない。',
        english: 'Now that you have made a promise, you must keep it.',
        furigana: 'やくそくしたいじょう、まもらなければならない。',
      },
      {
        japanese: '引き受けた以上は、最後までやるつもりだ。',
        english: 'Since I have taken this on, I intend to see it through to the end.',
        furigana: 'ひきうけたいじょうは、さいごまでやるつもりだ。',
      },
      {
        japanese: '学生である以上、勉強するべきだ。',
        english: 'Since you are a student, you should study.',
        furigana: 'がくせいであるいじょう、べんきょうするべきだ。',
      },
    ],
  },
  {
    pattern: '上で',
    meaning: 'after doing / upon / in the process of',
    formation: 'Verb た-form + 上で / Verb dictionary form + 上で / Noun + の + 上で',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '上で (うえで) has two uses: (1) with た-form, it means "after doing" — indicating that one action is completed before the next; (2) with dictionary form or nouns, it means "in the process of" or "for the purpose of," indicating something important for a given context.',
    notes:
      'た-form + 上で emphasizes deliberateness — the first action is a necessary step. Different from てから, which simply indicates sequence. Dictionary form + 上で = "when it comes to" or "in terms of."',
    common_mistakes:
      'Using 上で for casual sequential actions. It implies careful deliberation. For simple sequences, use てから: ご飯を食べてから出かける (eat then go out). Use 上で when the first step is a prerequisite.',
    examples: [
      {
        japanese: 'よく考えた上で、決めたいと思います。',
        english: 'I would like to decide after thinking it over carefully.',
        furigana: 'よくかんがえたうえで、きめたいとおもいます。',
      },
      {
        japanese: '日本語を勉強する上で、漢字は大切です。',
        english: 'When it comes to studying Japanese, kanji is important.',
        furigana: 'にほんごをべんきょうするうえで、かんじはたいせつです。',
      },
      {
        japanese: '契約書をよく読んだ上で、サインしてください。',
        english: 'Please sign after reading the contract carefully.',
        furigana: 'けいやくしょをよくよんだうえで、サインしてください。',
      },
    ],
  },

  // ===========================================================================
  // EXPRESSIONS (continued)
  // ===========================================================================
  {
    pattern: 'ないわけにはいかない',
    meaning: 'cannot help but / must / have to',
    formation: 'Verb ない-form + わけにはいかない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ないわけにはいかない is the negative form of わけにはいかない. It creates a double negative meaning "cannot not do" — in other words, "must do" or "have no choice but to do." It expresses obligation arising from social or moral pressure.',
    notes:
      'This is a double negative: ない (not) + わけにはいかない (cannot). The result is an affirmative obligation. More nuanced than なければならない — it emphasizes external pressure rather than simple necessity.',
    common_mistakes:
      'Confusing with わけにはいかない (affirmative form). 行くわけにはいかない = cannot go. 行かないわけにはいかない = cannot not go (= must go). The ない before わけ reverses the meaning.',
    examples: [
      {
        japanese: '招待されたから、行かないわけにはいかない。',
        english: 'I was invited, so I have no choice but to go.',
        furigana: 'しょうたいされたから、いかないわけにはいかない。',
      },
      {
        japanese: '上司の命令だから、やらないわけにはいかない。',
        english: 'It is an order from my boss, so I cannot not do it.',
        furigana: 'じょうしのめいれいだから、やらないわけにはいかない。',
      },
      {
        japanese: 'お世話になった人だから、お礼を言わないわけにはいかない。',
        english: 'That person helped me, so I must express my gratitude.',
        furigana: 'おせわになったひとだから、おれいをいわないわけにはいかない。',
      },
    ],
  },

  // ===========================================================================
  // MODALITY (~15)
  // ===========================================================================
  {
    pattern: 'べきだ',
    meaning: 'should / ought to',
    formation: 'Verb dictionary form + べきだ (する → するべきだ / すべきだ)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'べきだ expresses a strong recommendation or moral obligation — "one should do." It is stronger than ほうがいい and implies that it is the right or proper thing to do. The negative form べきではない means "should not."',
    notes:
      'する can become either するべき or すべき (both correct). べきだ is not used for trivial preferences — it implies moral or social obligation. Not typically used for first-person desires.',
    common_mistakes:
      'Using べきだ with ます-form. Always use dictionary form: 行くべきだ, not ×行きますべきだ. Also, avoid using it for personal preferences — use ほうがいい for lighter suggestions.',
    examples: [
      {
        japanese: '約束は守るべきだ。',
        english: 'One should keep promises.',
        furigana: 'やくそくはまもるべきだ。',
      },
      {
        japanese: '学生はもっと本を読むべきだと思う。',
        english: 'I think students should read more books.',
        furigana: 'がくせいはもっとほんをよむべきだとおもう。',
      },
      {
        japanese: '環境のために、プラスチックの使用を減らすべきだ。',
        english: 'We should reduce plastic use for the sake of the environment.',
        furigana: 'かんきょうのために、プラスチックのしようをへらすべきだ。',
      },
    ],
  },
  {
    pattern: 'おそれがある',
    meaning: 'there is a risk/fear that',
    formation: 'Verb dictionary form + おそれがある / Noun + の + おそれがある',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'おそれがある expresses concern that something negative might happen — "there is a risk that" or "there is a danger of." It is commonly used in news reports, official statements, and formal contexts.',
    notes:
      'Written as 恐れがある or おそれがある. Almost always used for negative possibilities. For positive possibilities, use 可能性がある instead. Common in weather warnings and official announcements.',
    common_mistakes:
      'Using おそれがある for positive outcomes. This pattern is exclusively for negative, undesirable possibilities. Saying 成功するおそれがある would sound very unnatural.',
    examples: [
      {
        japanese: '台風が接近するおそれがある。',
        english: 'There is a risk that the typhoon will approach.',
        furigana: 'たいふうがせっきんするおそれがある。',
      },
      {
        japanese: 'このまま放置すると、状況が悪化するおそれがある。',
        english: 'If left as is, there is a risk that the situation will worsen.',
        furigana: 'このままほうちすると、じょうきょうがあっかするおそれがある。',
      },
      {
        japanese: '大雨による洪水のおそれがあります。',
        english: 'There is a risk of flooding due to heavy rain.',
        furigana: 'おおあめによるこうずいのおそれがあります。',
      },
    ],
  },
  {
    pattern: 'ことはない',
    meaning: 'there is no need to / do not have to',
    formation: 'Verb dictionary form + ことはない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ことはない tells someone that there is no need or reason to do something. It reassures the listener that an action is unnecessary — "you do not need to" or "there is no reason to."',
    notes:
      'Softer and more reassuring than する必要はない. Often used to comfort someone who is worried: 心配することはない (there is no need to worry). Different from ことがない (have never done).',
    common_mistakes:
      'Confusing with ことがない (have never done). ことはない = no need to. ことがない = have never. The particle は vs が makes the difference.',
    examples: [
      {
        japanese: 'そんなに心配することはないよ。',
        english: 'There is no need to worry that much.',
        furigana: 'そんなにしんぱいすることはないよ。',
      },
      {
        japanese: '急ぐことはない。ゆっくりやればいい。',
        english: 'There is no need to rush. Just take it slowly.',
        furigana: 'いそぐことはない。ゆっくりやればいい。',
      },
      {
        japanese: '小さいミスで落ち込むことはない。',
        english: 'There is no need to feel down over a small mistake.',
        furigana: 'ちいさいミスでおちこむことはない。',
      },
    ],
  },
  {
    pattern: 'てたまらない',
    meaning: 'unbearably / cannot stand / extremely',
    formation:
      'Verb て-form + たまらない / い-adj (-い → くて) + たまらない / な-adj + で + たまらない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'てたまらない expresses that a feeling or sensation is so intense that it is unbearable or uncontrollable. It is used for involuntary emotions or physical sensations — "so ... that I cannot stand it."',
    notes:
      'Only used with involuntary feelings or sensations: 嬉しくてたまらない (unbearably happy), 寂しくてたまらない (unbearably lonely). Not used with deliberate actions. Similar to てしょうがない.',
    common_mistakes:
      'Using たまらない with volitional verbs. You cannot say ×食べてたまらない. It must be an involuntary feeling: 食べたくてたまらない (want to eat so badly) is correct because the desire is involuntary.',
    examples: [
      {
        japanese: '合格して嬉しくてたまらない。',
        english: 'I passed and I am so happy I cannot stand it.',
        furigana: 'ごうかくしてうれしくてたまらない。',
      },
      {
        japanese: '暑くてたまらない。エアコンをつけてください。',
        english: 'It is unbearably hot. Please turn on the air conditioning.',
        furigana: 'あつくてたまらない。エアコンをつけてください。',
      },
      {
        japanese: '新しいゲームが楽しみでたまらない。',
        english: 'I cannot wait for the new game. I am so excited I cannot stand it.',
        furigana: 'あたらしいゲームがたのしみでたまらない。',
      },
    ],
  },
  {
    pattern: 'てならない',
    meaning: 'cannot help but feel / irresistibly',
    formation: 'Verb て-form + ならない / い-adj (-い → くて) + ならない / な-adj + で + ならない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'てならない expresses that an emotion or thought arises spontaneously and irresistibly — "I cannot help but feel..." It is slightly more literary and formal than てたまらない, and emphasizes the involuntary nature of the feeling.',
    notes:
      'Compared to てたまらない, てならない sounds more reflective and literary. Often used with feelings of curiosity, worry, or wistfulness: 気になってならない (I cannot help but be curious).',
    common_mistakes:
      'Using てならない and てたまらない interchangeably in all cases. While similar, てならない is more common with mental/emotional states (気になる, 思えてならない), while てたまらない works well with physical sensations too.',
    examples: [
      {
        japanese: '彼の安全が心配でならない。',
        english: 'I cannot help but worry about his safety.',
        furigana: 'かれのあんぜんがしんぱいでならない。',
      },
      {
        japanese: '昔のことが懐かしくてならない。',
        english: 'I cannot help but feel nostalgic about the old days.',
        furigana: 'むかしのことがなつかしくてならない。',
      },
      {
        japanese: '試験の結果が気になってならない。',
        english: 'I cannot help but be concerned about the exam results.',
        furigana: 'しけんのけっかがきになってならない。',
      },
    ],
  },
  {
    pattern: 'ようがない',
    meaning: 'there is no way to / cannot possibly',
    formation: 'Verb ます-stem + ようがない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ようがない expresses that there is absolutely no way or method to do something — it is simply impossible. The よう here means "way" or "method." Also appears as ようもない for stronger emphasis.',
    notes:
      'Attaches to the ます-stem: 直す → 直しようがない, 言う → 言いようがない. Different from できない (simple inability) — ようがない implies that no method exists at all.',
    common_mistakes:
      'Attaching to the dictionary form instead of the ます-stem. Say 直しようがない (from 直し), not ×直すようがない.',
    examples: [
      {
        japanese: '連絡先がわからないから、連絡しようがない。',
        english: 'I do not know the contact information, so there is no way to get in touch.',
        furigana: 'れんらくさきがわからないから、れんらくしようがない。',
      },
      {
        japanese: 'この景色の美しさは言いようがない。',
        english: 'There is no way to describe the beauty of this scenery.',
        furigana: 'このけしきのうつくしさはいいようがない。',
      },
      {
        japanese: '証拠がなければ、証明しようがない。',
        english: 'Without evidence, there is no way to prove it.',
        furigana: 'しょうこがなければ、しょうめいしようがない。',
      },
    ],
  },
  {
    pattern: 'っぽい',
    meaning: 'seems like / -ish / has a tendency of',
    formation: 'Noun + っぽい / Verb ます-stem + っぽい / い-adj (drop い) + っぽい',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'っぽい indicates that something has the appearance, quality, or tendency of something. With nouns, it means "-ish" or "like." With verbs, it suggests a tendency. It conjugates as an い-adjective.',
    notes:
      'Common set expressions: 忘れっぽい (forgetful), 怒りっぽい (short-tempered), 子供っぽい (childish), 大人っぽい (mature). Can carry a slightly negative nuance when describing people.',
    common_mistakes:
      'Confusing っぽい with らしい. らしい means "typical of" (in a positive/neutral sense), while っぽい often implies "seems like but is not really" or has a slightly negative nuance: 子供っぽい (childish) vs 子供らしい (child-like, natural for a child).',
    examples: [
      {
        japanese: '彼女は大人っぽい服を着ている。',
        english: 'She is wearing mature-looking clothes.',
        furigana: 'かのじょはおとなっぽいふくをきている。',
      },
      {
        japanese: '最近忘れっぽくなった。',
        english: 'I have become forgetful recently.',
        furigana: 'さいきんわすれっぽくなった。',
      },
      {
        japanese: 'この色は白っぽい。',
        english: 'This color is whitish.',
        furigana: 'このいろはしろっぽい。',
      },
    ],
  },
  {
    pattern: 'がちだ',
    meaning: 'tend to / prone to / apt to',
    formation: 'Verb ます-stem + がちだ / Noun + がちだ',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'がちだ expresses a negative tendency — that something undesirable happens frequently or that someone is prone to doing something. It almost always carries a negative connotation.',
    notes:
      'Common expressions: 遅れがち (tend to be late), 病気がち (sickly), 忘れがち (tend to forget), 曇りがち (tend to be cloudy). Can be used as an adjective before nouns: 遅れがちな電車.',
    common_mistakes:
      'Using がちだ for positive tendencies. This pattern is almost exclusively negative. For positive tendencies, use 傾向がある or other expressions.',
    examples: [
      {
        japanese: '冬は風邪を引きがちだ。',
        english: 'In winter, one tends to catch colds.',
        furigana: 'ふゆはかぜをひきがちだ。',
      },
      {
        japanese: '忙しいと食事を抜きがちになる。',
        english: 'When I am busy, I tend to skip meals.',
        furigana: 'いそがしいとしょくじをぬきがちになる。',
      },
      {
        japanese: '彼は約束を忘れがちだ。',
        english: 'He tends to forget his promises.',
        furigana: 'かれはやくそくをわすれがちだ。',
      },
    ],
  },
  {
    pattern: '気味',
    meaning: 'slightly / a touch of / a bit',
    formation: 'Verb ます-stem + 気味 / Noun + 気味',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '気味 (ぎみ) indicates a slight tendency or mild condition — "a bit of" or "slightly." It describes something that is not fully developed but is starting to manifest, often something negative.',
    notes:
      'Common expressions: 風邪気味 (coming down with a cold), 太り気味 (a bit overweight), 疲れ気味 (a bit tired), 遅れ気味 (running a bit late). Usually negative or neutral, not positive.',
    common_mistakes:
      'Confusing 気味 (ぎみ) with がちだ. 気味 describes a current slight condition, while がちだ describes a habitual tendency. 風邪気味 = I feel like I might have a cold (right now). 風邪を引きがち = I tend to catch colds (in general).',
    examples: [
      {
        japanese: '最近ちょっと太り気味だ。',
        english: 'I have been a bit overweight recently.',
        furigana: 'さいきんちょっとふとりぎみだ。',
      },
      {
        japanese: '風邪気味なので、今日は早く寝ます。',
        english: 'I feel like I am coming down with a cold, so I will go to bed early today.',
        furigana: 'かぜぎみなので、きょうははやくねます。',
      },
      {
        japanese: 'プロジェクトが遅れ気味だ。',
        english: 'The project is running a bit behind schedule.',
        furigana: 'プロジェクトがおくれぎみだ。',
      },
    ],
  },
  {
    pattern: 'きる',
    meaning: 'do completely / do to the end / utterly',
    formation: 'Verb ます-stem + きる',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'きる (切る) attached to a verb stem means to do something completely, thoroughly, or to the very end. The negative form きれない means "cannot finish" or "cannot do completely."',
    notes:
      'Common uses: 食べきる (eat it all up), 使いきる (use up completely), 走りきる (run all the way). The negative きれない is very common: 食べきれない (cannot eat it all), 数えきれない (cannot count them all).',
    common_mistakes:
      'Confusing きる (completely) with the independent verb 切る (to cut). When attached to a verb stem, it becomes a compound verb meaning "completely." Context makes the difference clear.',
    examples: [
      {
        japanese: 'マラソンを最後まで走りきった。',
        english: 'I ran the marathon all the way to the end.',
        furigana: 'マラソンをさいごまではしりきった。',
      },
      {
        japanese: '量が多すぎて食べきれない。',
        english: 'There is too much food and I cannot eat it all.',
        furigana: 'りょうがおおすぎてたべきれない。',
      },
      {
        japanese: '彼の優しさを信じきっている。',
        english: 'I completely believe in his kindness.',
        furigana: 'かれのやさしさをしんじきっている。',
      },
    ],
  },
  {
    pattern: 'かけ',
    meaning: 'half-done / in the middle of / about to',
    formation: 'Verb ます-stem + かけ(の) / Verb ます-stem + かける',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'かける/かけ indicates that an action has started but is not yet finished (half-done) or that something is on the verge of happening (about to). As a noun modifier, it becomes かけの.',
    notes:
      'As a noun: 読みかけの本 (a half-read book), 食べかけのパン (half-eaten bread). As a verb: 言いかける (be about to say), 死にかける (be on the verge of death). かけ describes an incomplete state.',
    common_mistakes:
      'Confusing かけ with ところ. While both can mean "about to," かけ emphasizes the action has begun but is incomplete: 食べかけ (started eating but did not finish). ところ is broader and depends on tense.',
    examples: [
      {
        japanese: '読みかけの本をテーブルに置いた。',
        english: 'I put the half-read book on the table.',
        furigana: 'よみかけのほんをテーブルにおいた。',
      },
      {
        japanese: '何か言いかけて、やめた。',
        english: 'I was about to say something but stopped.',
        furigana: 'なにかいいかけて、やめた。',
      },
      {
        japanese: '食べかけのケーキが冷蔵庫にある。',
        english: 'There is a half-eaten cake in the refrigerator.',
        furigana: 'たべかけのケーキがれいぞうこにある。',
      },
    ],
  },

  // ===========================================================================
  // CONJUNCTIONS (~15)
  // ===========================================================================
  {
    pattern: '一方で',
    meaning: 'on the other hand / while / at the same time',
    formation: 'Sentence A + 一方(で) + Sentence B',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      '一方で (いっぽうで) introduces a contrasting or simultaneously existing fact. It can mean "on the other hand" when presenting a contrast, or "while" when two things happen at the same time.',
    notes:
      'Can be placed at the beginning of a sentence as a conjunction: 一方で、... Or used within a sentence after a clause. The で is sometimes dropped. Also used as 一方 alone.',
    common_mistakes:
      'Confusing 一方で with 反面. While both show contrast, 一方で can also show simultaneous actions without contrast. 反面 always implies a contrasting flip side.',
    examples: [
      {
        japanese: '都会は便利な一方で、空気が悪い。',
        english: 'Cities are convenient, but on the other hand, the air quality is bad.',
        furigana: 'とかいはべんりないっぽうで、くうきがわるい。',
      },
      {
        japanese: '兄は文系だが、一方で弟は理系だ。',
        english:
          'My older brother is in humanities, while on the other hand my younger brother is in sciences.',
        furigana: 'あにはぶんけいだが、いっぽうでおとうとはりけいだ。',
      },
      {
        japanese: '人口が増える一方で、食料が不足している。',
        english: 'While the population is increasing, food is becoming scarce.',
        furigana: 'じんこうがふえるいっぽうで、しょくりょうがふそくしている。',
      },
    ],
  },
  {
    pattern: 'にもかかわらず',
    meaning: 'despite / in spite of / nevertheless',
    formation:
      'Verb plain + にもかかわらず / い-adj + にもかかわらず / な-adj + (である/な) + にもかかわらず / Noun + (である/な) + にもかかわらず',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'にもかかわらず expresses that something happens despite a condition that would normally prevent it. It is a formal way to say "despite" or "in spite of," often used in writing and formal speech.',
    notes:
      'More formal than のに. Can also be used at the start of a sentence: それにもかかわらず (nevertheless). Written as にも関わらず or にも拘わらず in kanji.',
    common_mistakes:
      'Using にもかかわらず in casual conversation where のに would be more natural. This pattern sounds stiff in everyday speech and is best reserved for formal or written contexts.',
    examples: [
      {
        japanese: '雨にもかかわらず、多くの人が来た。',
        english: 'Despite the rain, many people came.',
        furigana: 'あめにもかかわらず、おおくのひとがきた。',
      },
      {
        japanese: '何度も注意したにもかかわらず、同じミスを繰り返した。',
        english: 'Despite being warned many times, the same mistake was repeated.',
        furigana: 'なんどもちゅういしたにもかかわらず、おなじミスをくりかえした。',
      },
      {
        japanese: '努力したにもかかわらず、試験に落ちてしまった。',
        english: 'Despite my efforts, I failed the exam.',
        furigana: 'どりょくしたにもかかわらず、しけんにおちてしまった。',
      },
    ],
  },
  {
    pattern: 'それにしても',
    meaning: 'even so / nevertheless / having said that',
    formation: 'それにしても + Sentence',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'それにしても is a conjunction used at the beginning of a sentence to acknowledge a previous point while expressing surprise, dissatisfaction, or a different perspective. It means "even so" or "still, though."',
    notes:
      "More colloquial than にもかかわらず. Often expresses the speaker's emotional reaction — surprise, admiration, or complaint. Natural in conversation.",
    common_mistakes:
      'Using それにしても in formal writing where にもかかわらず or とはいえ would be more appropriate. それにしても is conversational and carries an emotional undertone.',
    examples: [
      {
        japanese: '忙しいのはわかるが、それにしても連絡ぐらいしてほしい。',
        english: 'I understand you are busy, but even so, I wish you would at least get in touch.',
        furigana: 'いそがしいのはわかるが、それにしてもれんらくぐらいしてほしい。',
      },
      {
        japanese: '安い店だとは聞いていたが、それにしても安すぎる。',
        english: 'I had heard it was a cheap shop, but even so, this is too cheap.',
        furigana: 'やすいみせだとはきいていたが、それにしてもやすすぎる。',
      },
      {
        japanese: 'それにしても、今日はいい天気ですね。',
        english: 'Having said that, it is nice weather today, is it not?',
        furigana: 'それにしても、きょうはいいてんきですね。',
      },
    ],
  },
  {
    pattern: 'としたら・とすれば',
    meaning: 'if it were the case that / supposing that',
    formation: 'Verb plain + としたら / Noun + だ + としたら',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'としたら and とすれば are used to make hypothetical assumptions — "if we suppose that" or "if it were the case that." They present a hypothetical premise and then state what would follow.',
    notes:
      'としたら is slightly more conversational; とすれば is slightly more formal; とすると implies a logical consequence. All three are largely interchangeable. Often used for hypothetical situations or thought experiments.',
    common_mistakes:
      'Confusing with たら (simple conditional). としたら specifically introduces a hypothetical assumption to reason about, while たら is a general conditional. "If it rains" = 雨が降ったら. "Supposing it rains" = 雨が降るとしたら.',
    examples: [
      {
        japanese: 'もし宝くじが当たったとしたら、何をしますか。',
        english: 'If you were to win the lottery, what would you do?',
        furigana: 'もしたからくじがあたったとしたら、なにをしますか。',
      },
      {
        japanese: '彼の話が本当だとすれば、大変なことだ。',
        english: 'If his story is true, it is a serious matter.',
        furigana: 'かれのはなしがほんとうだとすれば、たいへんなことだ。',
      },
      {
        japanese: '転職するとしたら、どんな仕事がしたいですか。',
        english: 'If you were to change jobs, what kind of work would you want to do?',
        furigana: 'てんしょくするとしたら、どんなしごとがしたいですか。',
      },
    ],
  },
  {
    pattern: 'にしても',
    meaning: 'even if / even though / granting that',
    formation:
      'Verb plain + にしても / い-adj + にしても / な-adj + (だ/である) + にしても / Noun + にしても',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'にしても concedes a point but argues that even so, something else is true. It means "even if" or "even granting that." It can also be used in pairs: AにしてもBにしても (whether A or B).',
    notes:
      'Similar to ても but slightly more emphatic and formal. The paired form AにしてもBにしても means "whether it is A or B" — i.e., in either case.',
    common_mistakes:
      'Confusing にしても with としても. They are very similar, but にしても can be used with nouns directly (雨にしても), while としても requires a clause (雨だとしても). In practice they are often interchangeable.',
    examples: [
      {
        japanese: '冗談にしても、言っていいことと悪いことがある。',
        english: 'Even if it is a joke, there are things you should and should not say.',
        furigana: 'じょうだんにしても、いっていいこととわるいことがある。',
      },
      {
        japanese: '忙しいにしても、食事はちゃんと取るべきだ。',
        english: 'Even if you are busy, you should eat your meals properly.',
        furigana: 'いそがしいにしても、しょくじはちゃんととるべきだ。',
      },
      {
        japanese: '行くにしても行かないにしても、早く決めてください。',
        english: 'Whether you go or not, please decide quickly.',
        furigana: 'いくにしてもいかないにしても、はやくきめてください。',
      },
    ],
  },
  {
    pattern: 'として',
    meaning: 'as / in the role of / in the capacity of',
    formation: 'Noun + として',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'として indicates a role, capacity, or status in which someone or something functions. It means "as" or "in the role of." It is commonly used to describe how someone participates or how something is regarded.',
    notes:
      'Very common and versatile. Can also appear as としては (in that capacity) or としても (even as). Example: 教師として (as a teacher), 例として (as an example).',
    common_mistakes:
      'Confusing として with にとって. として means "in the role of" (objective capacity), while にとって means "for" or "from the perspective of" (subjective viewpoint). 教師として = as a teacher (acting in that role). 教師にとって = for a teacher (from a teacher\'s perspective).',
    examples: [
      {
        japanese: '彼は医者として働いている。',
        english: 'He works as a doctor.',
        furigana: 'かれはいしゃとしてはたらいている。',
      },
      {
        japanese: 'この問題は例として取り上げましょう。',
        english: 'Let us take up this problem as an example.',
        furigana: 'このもんだいはれいとしてとりあげましょう。',
      },
      {
        japanese: '留学生として日本に来ました。',
        english: 'I came to Japan as an exchange student.',
        furigana: 'りゅうがくせいとしてにほんにきました。',
      },
    ],
  },
  {
    pattern: 'に対して',
    meaning: 'toward / against / in contrast to',
    formation: 'Noun + に対して / Verb plain + の + に対して',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'に対して has two main uses: (1) "toward" or "against" — indicating the target of an action or attitude; (2) "in contrast to" — showing a comparison between two things.',
    notes:
      'Can become に対する when modifying a noun: 学生に対する態度 (attitude toward students). In the contrast sense, it functions like 一方で. Formal tone.',
    common_mistakes:
      'Confusing に対して with について. に対して indicates a direction or contrast (toward / versus), while について means "about" or "regarding" a topic.',
    examples: [
      {
        japanese: '先生は学生に対して厳しい。',
        english: 'The teacher is strict toward students.',
        furigana: 'せんせいはがくせいにたいしてきびしい。',
      },
      {
        japanese: '兄が静かなのに対して、弟はうるさい。',
        english: 'In contrast to the older brother being quiet, the younger brother is noisy.',
        furigana: 'あにがしずかなのにたいして、おとうとはうるさい。',
      },
      {
        japanese: 'この提案に対して、意見はありますか。',
        english: 'Do you have any opinions regarding this proposal?',
        furigana: 'このていあんにたいして、いけんはありますか。',
      },
    ],
  },
  {
    pattern: 'に関して',
    meaning: 'regarding / concerning / about',
    formation: 'Noun + に関して',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'に関して is a formal way to say "regarding" or "concerning." It introduces the topic that is being discussed, explained, or addressed. It is more formal than について.',
    notes:
      'Can become に関する when modifying a noun: 環境に関する問題 (problems concerning the environment). Also appears as に関しては (as for ... regarding). Very common in business and academic Japanese.',
    common_mistakes:
      'Using に関して in casual conversation. It sounds overly formal for everyday speech. Use について instead in casual contexts.',
    examples: [
      {
        japanese: 'この件に関して、何かご質問はありますか。',
        english: 'Do you have any questions regarding this matter?',
        furigana: 'このけんにかんして、なにかごしつもんはありますか。',
      },
      {
        japanese: '日本の文化に関する本を読んでいる。',
        english: 'I am reading a book about Japanese culture.',
        furigana: 'にほんのぶんかにかんするほんをよんでいる。',
      },
      {
        japanese: '詳細に関しては、後日お知らせします。',
        english: 'We will inform you about the details at a later date.',
        furigana: 'しょうさいにかんしては、ごじつおしらせします。',
      },
    ],
  },
  {
    pattern: 'をもとに',
    meaning: 'based on / on the basis of',
    formation: 'Noun + をもとに(して)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'をもとに means "based on" or "on the basis of." It indicates that something is the foundation, source, or inspiration for something else. The source material is used as a starting point.',
    notes:
      'Similar to に基づいて, but をもとに is more flexible — the result can differ from the original (like a movie based on a novel). に基づいて implies closer adherence to the original. Also written as を元に or を基に.',
    common_mistakes:
      'Confusing をもとに with に基づいて. をもとに means the source is a starting point (adaptation allowed), while に基づいて means strict adherence to the basis: 事実に基づいて (based strictly on facts) vs 実話をもとに (inspired by a true story).',
    examples: [
      {
        japanese: 'この映画は実話をもとに作られた。',
        english: 'This movie was made based on a true story.',
        furigana: 'このえいがはじつわをもとにつくられた。',
      },
      {
        japanese: 'アンケートの結果をもとに、改善策を考える。',
        english: 'We will think of improvement measures based on the survey results.',
        furigana: 'アンケートのけっかをもとに、かいぜんさくをかんがえる。',
      },
      {
        japanese: '経験をもとにアドバイスする。',
        english: 'I will give advice based on my experience.',
        furigana: 'けいけんをもとにアドバイスする。',
      },
    ],
  },
  {
    pattern: 'に沿って',
    meaning: 'along / in accordance with / following',
    formation: 'Noun + に沿って',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'に沿って (にそって) means "along" in a physical sense (following a path) or "in accordance with" in an abstract sense (following a plan, policy, or guidelines).',
    notes:
      'Can become に沿った when modifying a noun: 計画に沿った行動 (actions in accordance with the plan). Physical meaning: 川に沿って歩く (walk along the river). Abstract meaning: 方針に沿って進める (proceed in accordance with the policy).',
    common_mistakes:
      'Confusing に沿って with に従って. に沿って means following alongside something (a plan, a river). に従って means obeying or following orders/rules. They overlap but have different nuances.',
    examples: [
      {
        japanese: '川に沿って歩いた。',
        english: 'I walked along the river.',
        furigana: 'かわにそってあるいた。',
      },
      {
        japanese: '計画に沿って進めてください。',
        english: 'Please proceed in accordance with the plan.',
        furigana: 'けいかくにそってすすめてください。',
      },
      {
        japanese: 'お客様のご要望に沿ったサービスを提供します。',
        english: "We provide services that are in line with our customers' requests.",
        furigana: 'おきゃくさまのごようぼうにそったサービスをていきょうします。',
      },
    ],
  },
  {
    pattern: 'を通じて・を通して',
    meaning: 'through / throughout / by means of',
    formation: 'Noun + を通じて / Noun + を通して',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'を通じて and を通して have two meanings: (1) "through" or "by means of" — indicating a method or intermediary; (2) "throughout" — indicating the entire duration of a period. The two forms are largely interchangeable.',
    notes:
      'For "by means of": インターネットを通じて (through the internet). For "throughout": 一年を通じて (throughout the year). を通して tends to emphasize the passage through, while を通じて emphasizes the medium or duration.',
    common_mistakes:
      'Confusing the "through" meaning with で. を通じて implies going through an intermediary or medium, while で simply marks the means: メールで連絡する (contact by email) vs 友人を通じて連絡する (contact through a friend).',
    examples: [
      {
        japanese: 'ボランティア活動を通じて、多くのことを学んだ。',
        english: 'I learned many things through volunteer activities.',
        furigana: 'ボランティアかつどうをつうじて、おおくのことをまなんだ。',
      },
      {
        japanese: 'この地域は一年を通して温暖だ。',
        english: 'This area is warm throughout the year.',
        furigana: 'このちいきはいちねんをとおしておんだんだ。',
      },
      {
        japanese: '友人を通じてその話を聞いた。',
        english: 'I heard about it through a friend.',
        furigana: 'ゆうじんをつうじてそのはなしをきいた。',
      },
    ],
  },
  {
    pattern: 'につれて',
    meaning: 'as ... (changes), ... (also changes)',
    formation: 'Verb dictionary form + につれて / Noun + につれて',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'につれて expresses that as one thing changes, another thing changes proportionally. Both changes happen gradually and in tandem — "as X increases, Y also increases."',
    notes:
      'Similar to にしたがって and とともに. The key nuance is proportional change over time. Common with verbs of change: 増える, 進む, 近づく, 経つ. Both clauses must describe gradual change.',
    common_mistakes:
      'Using につれて when only one side changes. Both the condition and the result must involve gradual change. If the result is sudden, use と or たら instead.',
    examples: [
      {
        japanese: '年を取るにつれて、体力が落ちてきた。',
        english: 'As I get older, my physical strength has been declining.',
        furigana: 'としをとるにつれて、たいりょくがおちてきた。',
      },
      {
        japanese: '技術が進むにつれて、生活が便利になっている。',
        english: 'As technology advances, life is becoming more convenient.',
        furigana: 'ぎじゅつがすすむにつれて、せいかつがべんりになっている。',
      },
      {
        japanese: '冬が近づくにつれて、日が短くなる。',
        english: 'As winter approaches, the days get shorter.',
        furigana: 'ふゆがちかづくにつれて、ひがみじかくなる。',
      },
    ],
  },
  {
    pattern: 'にしたがって',
    meaning: 'in accordance with / as ... (changes)',
    formation: 'Verb dictionary form + にしたがって / Noun + にしたがって',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'にしたがって has two meanings: (1) "in accordance with" or "following" rules, instructions, or guidance; (2) "as" — expressing proportional change, similar to につれて.',
    notes:
      'Written as に従って in kanji. Meaning 1 (following): 指示にしたがって (following instructions). Meaning 2 (proportional change): 時間が経つにしたがって (as time passes). In meaning 2, it is interchangeable with につれて.',
    common_mistakes:
      'Confusing the two meanings. Context usually clarifies: if the noun is a rule or instruction, it means "following." If it is a process of change, it means "as ... changes."',
    examples: [
      {
        japanese: '先生の指示にしたがって、実験を行った。',
        english: "I conducted the experiment in accordance with the teacher's instructions.",
        furigana: 'せんせいのしじにしたがって、じっけんをおこなった。',
      },
      {
        japanese: '経済が成長するにしたがって、環境問題も増えてきた。',
        english: 'As the economy grew, environmental problems also increased.',
        furigana: 'けいざいがせいちょうするにしたがって、かんきょうもんだいもふえてきた。',
      },
      {
        japanese: '日本語が上達するにしたがって、勉強が楽しくなった。',
        english: 'As my Japanese improved, studying became more enjoyable.',
        furigana: 'にほんごがじょうたつするにしたがって、べんきょうがたのしくなった。',
      },
    ],
  },
  {
    pattern: 'に伴って',
    meaning: 'along with / accompanying / as a result of',
    formation: 'Noun + に伴って / Verb dictionary form + の + に伴って',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'に伴って (にともなって) indicates that one change or event occurs together with or as a result of another. It expresses a natural or expected accompanying change.',
    notes:
      'Can become に伴う when modifying a noun: 地震に伴う津波 (tsunami accompanying an earthquake). More formal than につれて. Often used in news, reports, and academic writing. Implies a causal or correlative relationship.',
    common_mistakes:
      'Confusing に伴って with につれて. Both express proportional change, but に伴って is more formal and can also express a direct accompanying result (not just gradual change): 工事に伴う騒音 (noise accompanying construction).',
    examples: [
      {
        japanese: '人口の増加に伴って、住宅問題が深刻になっている。',
        english: 'Along with the population increase, the housing problem is becoming serious.',
        furigana: 'じんこうのぞうかにともなって、じゅうたくもんだいがしんこくになっている。',
      },
      {
        japanese: '台風に伴う大雨に注意してください。',
        english: 'Please be careful of heavy rain accompanying the typhoon.',
        furigana: 'たいふうにともなうおおあめにちゅういしてください。',
      },
      {
        japanese: '高齢化に伴って、医療費が増加している。',
        english: 'Along with the aging population, medical expenses are increasing.',
        furigana: 'こうれいかにともなって、いりょうひがぞうかしている。',
      },
    ],
  },
  {
    pattern: '上に',
    meaning: 'in addition to / on top of / moreover',
    formation: 'Verb plain + 上に / い-adj + 上に / な-adj + な + 上に / Noun + の + 上に',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      '上に (うえに) adds additional information of the same nature — "in addition to" or "on top of." Both the preceding and following clauses are typically either positive or negative together, showing cumulative effect.',
    notes:
      'Usually the two halves share the same positive or negative tone: 安い上に美味しい (cheap and on top of that, delicious). Using opposite tones is possible but less common and sounds more like のに.',
    common_mistakes:
      'Mixing positive and negative tones without intention. 上に is strongest when both sides align: 高い上にまずい (expensive and on top of that, bad-tasting) or 安い上に美味しい (cheap and delicious).',
    examples: [
      {
        japanese: 'このレストランは安い上に、量も多い。',
        english: 'This restaurant is cheap and on top of that, the portions are large.',
        furigana: 'このレストランはやすいうえに、りょうもおおい。',
      },
      {
        japanese: '雨が降っている上に、風も強い。',
        english: 'It is raining, and on top of that, the wind is strong too.',
        furigana: 'あめがふっているうえに、かぜもつよい。',
      },
      {
        japanese: '彼は頭がいい上に、スポーツもできる。',
        english: 'He is smart, and on top of that, he is good at sports too.',
        furigana: 'かれはあたまがいいうえに、スポーツもできる。',
      },
    ],
  },

  // ===========================================================================
  // SENTENCE PATTERNS (~15)
  // ===========================================================================
  {
    pattern: 'ことにしている',
    meaning: 'have made it a habit / have decided to (as a rule)',
    formation: 'Verb dictionary form + ことにしている / Verb ない-form + ことにしている',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ことにしている describes a personal rule or habit that the speaker has consciously decided to maintain. It emphasizes that this is an ongoing, deliberate practice — "I make it a rule to."',
    notes:
      'Compare with ことにした (one-time decision) and ことになっている (decided by others/social norms). ことにしている = ongoing personal practice. Often used to describe healthy habits or personal principles.',
    common_mistakes:
      'Confusing with ことになっている. ことにしている = "I have made it my personal habit." ことになっている = "It has been decided (by others or circumstances)." The agent differs.',
    examples: [
      {
        japanese: '毎朝ジョギングをすることにしている。',
        english: 'I make it a habit to jog every morning.',
        furigana: 'まいあさジョギングをすることにしている。',
      },
      {
        japanese: '夜10時以降はスマホを見ないことにしている。',
        english: 'I have made it a rule not to look at my phone after 10 PM.',
        furigana: 'よる10じいこうはスマホをみないことにしている。',
      },
      {
        japanese: '寝る前に必ず本を読むことにしている。',
        english: 'I make it a point to read a book before going to bed.',
        furigana: 'ねるまえにかならずほんをよむことにしている。',
      },
    ],
  },
  {
    pattern: 'ことになっている',
    meaning: 'it is expected that / it has been decided that / supposed to',
    formation: 'Verb dictionary form + ことになっている / Verb ない-form + ことになっている',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ことになっている expresses a rule, regulation, or arrangement that has been decided — not by the speaker personally but by an organization, society, or prior arrangement. It means "it is the rule that" or "it has been arranged that."',
    notes:
      'Implies an external decision or social norm. Compare: ことにしている (personal decision), ことになっている (external rule/arrangement), ことになった (it was decided that — a new decision).',
    common_mistakes:
      'Confusing with ことにしている. Use ことになっている for external rules and arrangements (school rules, company policy, social norms), not personal habits.',
    examples: [
      {
        japanese: 'この建物では、喫煙しないことになっている。',
        english: 'In this building, smoking is not allowed (it is the rule).',
        furigana: 'このたてものでは、きつえんしないことになっている。',
      },
      {
        japanese: '来月出張することになっている。',
        english: 'It has been arranged that I will go on a business trip next month.',
        furigana: 'らいげつしゅっちょうすることになっている。',
      },
      {
        japanese: '日本では靴を脱いで家に入ることになっている。',
        english: 'In Japan, you are expected to take off your shoes before entering a house.',
        furigana: 'にほんではくつをぬいでいえにはいることになっている。',
      },
    ],
  },
  {
    pattern: 'たびに',
    meaning: 'every time / each time / whenever',
    formation: 'Verb dictionary form + たびに / Noun + の + たびに',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'たびに expresses that every time a certain event occurs, something else also happens. It emphasizes regularity and inevitability — "every single time."',
    notes:
      'Written as 度に in kanji. More emphatic than 時 (when) — it stresses that the result happens without fail each time. Often used with ongoing patterns or recurring situations.',
    common_mistakes:
      'Using たびに for one-time events. It must be something that recurs: 会うたびに (every time we meet). For a single occasion, use 時 instead.',
    examples: [
      {
        japanese: '彼に会うたびに、新しい発見がある。',
        english: 'Every time I meet him, there is a new discovery.',
        furigana: 'かれにあうたびに、あたらしいはっけんがある。',
      },
      {
        japanese: 'この写真を見るたびに、旅行のことを思い出す。',
        english: 'Every time I see this photo, I remember the trip.',
        furigana: 'このしゃしんをみるたびに、りょこうのことをおもいだす。',
      },
      {
        japanese: '旅行のたびに、お土産を買ってくる。',
        english: 'Every time I travel, I buy souvenirs.',
        furigana: 'りょこうのたびに、おみやげをかってくる。',
      },
    ],
  },
  {
    pattern: '最中に',
    meaning: 'in the middle of / right in the midst of',
    formation: 'Verb ている + 最中に / Noun + の + 最中に',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      '最中に (さいちゅうに) means "right in the middle of doing something" — at the most intense or critical moment of an activity. It emphasizes that an interruption or unexpected event occurs at the worst possible time.',
    notes:
      'Often implies the interruption is unwelcome or inconvenient. Written with kanji 最中. Can also appear without に as 最中だ (I am in the middle of it). Stronger than ている間に.',
    common_mistakes:
      'Using 最中に for planned simultaneous actions. It implies interruption or bad timing: 授業の最中に電話が鳴った (the phone rang in the middle of class). For planned concurrent actions, use ながら or 間に.',
    examples: [
      {
        japanese: '食事の最中に電話がかかってきた。',
        english: 'A phone call came right in the middle of my meal.',
        furigana: 'しょくじのさいちゅうにでんわがかかってきた。',
      },
      {
        japanese: '会議をしている最中に、地震が起きた。',
        english: 'An earthquake occurred right in the middle of the meeting.',
        furigana: 'かいぎをしているさいちゅうに、じしんがおきた。',
      },
      {
        japanese: '試験の最中に眠くなってしまった。',
        english: 'I got sleepy right in the middle of the exam.',
        furigana: 'しけんのさいちゅうにねむくなってしまった。',
      },
    ],
  },
  {
    pattern: '際に',
    meaning: 'on the occasion of / when / at the time of',
    formation: 'Verb dictionary form + 際に / Verb た-form + 際に / Noun + の + 際に',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '際に (さいに) is a formal expression meaning "when" or "on the occasion of." It is used in formal speech, business contexts, and written Japanese to indicate the time or occasion when something happens.',
    notes:
      'More formal than 時に. Common in announcements, instructions, and formal letters: ご利用の際は (when you use this service), お越しの際に (when you visit). Can also become 際の for noun modification.',
    common_mistakes:
      'Using 際に in casual conversation. It sounds overly formal in everyday speech. Use 時 instead for casual situations.',
    examples: [
      {
        japanese: 'お帰りの際に、こちらにお寄りください。',
        english: 'Please stop by here on your way home.',
        furigana: 'おかえりのさいに、こちらにおよりください。',
      },
      {
        japanese: '申し込みの際には、身分証明書が必要です。',
        english: 'When applying, identification is required.',
        furigana: 'もうしこみのさいには、みぶんしょうめいしょがひつようです。',
      },
      {
        japanese: '海外旅行をする際に、パスポートを忘れないでください。',
        english: 'When traveling abroad, please do not forget your passport.',
        furigana: 'かいがいりょこうをするさいに、パスポートをわすれないでください。',
      },
    ],
  },
  {
    pattern: 'ついでに',
    meaning: 'while you are at it / taking the opportunity to',
    formation: 'Verb dictionary form + ついでに / Verb た-form + ついでに / Noun + の + ついでに',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ついでに indicates doing something extra while already engaged in or going to do something else. It means "while I am at it" or "since I am already doing X, I will also do Y." The secondary action takes advantage of the opportunity.',
    notes:
      'The secondary action is not the main purpose — it is something done because the opportunity exists. Written as 序でに in kanji (rarely). Natural and common in everyday conversation.',
    common_mistakes:
      'Using ついでに when both actions are equally important. ついでに implies one action is primary and the other is secondary or incidental. If both are equally important, use ながら or ～もする.',
    examples: [
      {
        japanese: '買い物のついでに、クリーニングを出してきた。',
        english: 'While I was out shopping, I also dropped off my dry cleaning.',
        furigana: 'かいもののついでに、クリーニングをだしてきた。',
      },
      {
        japanese: '銀行に行ったついでに、郵便局にも寄った。',
        english: 'Since I went to the bank, I also stopped by the post office.',
        furigana: 'ぎんこうにいったついでに、ゆうびんきょくにもよった。',
      },
      {
        japanese: '出かけるついでに、ゴミを出してきてくれない？',
        english: 'Since you are going out, could you take out the trash?',
        furigana: 'でかけるついでに、ゴミをだしてきてくれない？',
      },
    ],
  },
  {
    pattern: 'っけ',
    meaning: 'was it? / if I recall correctly (trying to remember)',
    formation: 'Verb plain past + っけ / い-adj past + っけ / Noun + だった + っけ',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'っけ is a sentence-ending particle used when trying to recall something or asking for confirmation of a memory. It expresses "was it...?" or "what was it again?" — the speaker is searching their memory.',
    notes:
      'Very casual and conversational. Often used with questions: 何だったっけ (what was it again?), 名前は何だっけ (what was the name again?). Can be used as a rhetorical question when talking to oneself.',
    common_mistakes:
      'Using っけ in formal contexts. It is very casual and should not be used in polite or formal speech. In formal situations, rephrase as ～でしたか or ～でしょうか.',
    examples: [
      {
        japanese: '明日の会議は何時からだったっけ？',
        english: "What time was tomorrow's meeting again?",
        furigana: 'あしたのかいぎはなんじからだったっけ？',
      },
      {
        japanese: 'この漢字の読み方は何だっけ？',
        english: 'How do you read this kanji again?',
        furigana: 'このかんじのよみかたはなんだっけ？',
      },
      {
        japanese: '彼女の誕生日、来週だったっけ？',
        english: 'Her birthday was next week, right?',
        furigana: 'かのじょのたんじょうび、らいしゅうだったっけ？',
      },
    ],
  },
  {
    pattern: 'ふりをする',
    meaning: 'pretend to / act as if',
    formation:
      'Verb plain + ふりをする / い-adj + ふりをする / な-adj + な + ふりをする / Noun + の + ふりをする',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ふりをする means to pretend or act as if something is the case when it is not. The person is deliberately putting on an act. Written as 振りをする in kanji.',
    notes:
      'Common patterns: 知らないふりをする (pretend not to know), 寝たふりをする (pretend to be asleep), 聞こえないふりをする (pretend not to hear). The negative form is ～ないふりをする.',
    common_mistakes:
      'Confusing ふりをする with そうにする. ふりをする is deliberate pretending, while ～そうにする describes how something appears or seems. 泣くふりをする (pretend to cry) vs 泣きそうにする (look like about to cry).',
    examples: [
      {
        japanese: '彼は知っているのに、知らないふりをした。',
        english: 'He knew, but he pretended not to know.',
        furigana: 'かれはしっているのに、しらないふりをした。',
      },
      {
        japanese: '子供は寝たふりをして、親の話を聞いていた。',
        english: "The child pretended to be asleep and listened to the parents' conversation.",
        furigana: 'こどもはねたふりをして、おやのはなしをきいていた。',
      },
      {
        japanese: '忙しいふりをして、手伝いを断った。',
        english: 'I pretended to be busy and turned down the request to help.',
        furigana: 'いそがしいふりをして、てつだいをことわった。',
      },
    ],
  },
  {
    pattern: '向け',
    meaning: 'aimed at / intended for / designed for',
    formation: 'Noun + 向け(の)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      '向け (むけ) indicates that something is targeted at or designed for a specific audience or purpose. It is used to describe products, services, content, and so on that are made with a specific group in mind.',
    notes:
      'Compare with 向き (むき), which means "suitable for." 向け = specifically designed/targeted for that group. 向き = happens to be suitable for. 子供向け = made for children. 子供向き = suitable for children (but not specifically designed for them).',
    common_mistakes:
      'Confusing 向け with 向き. 子供向けの本 = a book designed for children (the publisher targeted children). 子供向きの本 = a book suitable for children (not necessarily designed for them).',
    examples: [
      {
        japanese: 'この教科書は初心者向けに作られています。',
        english: 'This textbook is designed for beginners.',
        furigana: 'このきょうかしょはしょしんしゃむけにつくられています。',
      },
      {
        japanese: '海外向けの商品を開発している。',
        english: 'We are developing products aimed at overseas markets.',
        furigana: 'かいがいむけのしょうひんをかいはつしている。',
      },
      {
        japanese: '大人向けのアニメが増えている。',
        english: 'Anime aimed at adults is increasing.',
        furigana: 'おとなむけのアニメがふえている。',
      },
    ],
  },
  {
    pattern: '向き',
    meaning: 'suitable for / suited to',
    formation: 'Noun + 向き(の)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      '向き (むき) indicates that something is suitable or appropriate for a certain group or purpose. Unlike 向け, it does not mean the item was specifically designed for that group — rather, it happens to be a good fit.',
    notes:
      'Also used for physical direction: 南向き (south-facing), 上向き (upward). In the "suitable for" sense: 家族向き (suitable for families), 初心者向き (suitable for beginners). 向き suggests natural suitability.',
    common_mistakes:
      'Using 向き and 向け interchangeably. While sometimes the difference is subtle, 向け implies intentional targeting and 向き implies inherent suitability. A scary movie is not 子供向き (not suitable for kids) even if not explicitly labeled as 子供向け.',
    examples: [
      {
        japanese: 'この部屋は南向きで明るい。',
        english: 'This room faces south and is bright.',
        furigana: 'このへやはみなみむきであかるい。',
      },
      {
        japanese: 'この料理は辛いものが好きな人向きだ。',
        english: 'This dish is suitable for people who like spicy food.',
        furigana: 'このりょうりはからいものがすきなひとむきだ。',
      },
      {
        japanese: 'あのホテルは家族向きだ。',
        english: 'That hotel is well-suited for families.',
        furigana: 'あのホテルはかぞくむきだ。',
      },
    ],
  },

  // ===========================================================================
  // VERBS (~10)
  // ===========================================================================
  {
    pattern: 'させられる',
    meaning: 'be made to / be forced to (causative-passive)',
    formation: 'Verb させられる form (う-verbs: -あせられる / る-verbs: -させられる)',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      "The causative-passive form combines causative (させる) and passive (られる) to express being forced or made to do something against one's will. It conveys the speaker's displeasure or inconvenience at having to do the action.",
    notes:
      'う-verbs often shorten: 待たせられる → 待たされる, 飲ませられる → 飲まされる. This shortened form (-aされる) is very common in speech. する → させられる, 来る → 来させられる (こさせられる).',
    common_mistakes:
      'Getting the conjugation order wrong. It is always causative first, then passive: させ + られる → させられる. Also, the shortened form (-aされる) only works for う-verbs, not る-verbs.',
    examples: [
      {
        japanese: '子供のころ、毎日ピアノを練習させられた。',
        english: 'When I was a child, I was made to practice piano every day.',
        furigana: 'こどものころ、まいにちピアノをれんしゅうさせられた。',
      },
      {
        japanese: '上司に残業させられた。',
        english: 'I was forced to work overtime by my boss.',
        furigana: 'じょうしにざんぎょうさせられた。',
      },
      {
        japanese: '飲み会で無理やりお酒を飲まされた。',
        english: 'I was forced to drink alcohol at the drinking party.',
        furigana: 'のみかいでむりやりおさけをのまされた。',
      },
    ],
  },
  {
    pattern: 'ずに',
    meaning: 'without doing',
    formation: 'Verb ない-stem + ずに (する → せずに)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ずに is the literary/formal equivalent of ないで — it means "without doing." It indicates that an action is performed without having done something else first. It is more formal than ないで.',
    notes:
      'する becomes せずに (irregular). The ず form is a classical Japanese negative. ずに is the connective form — when used at the end of a sentence, it becomes ず alone: 食べず (without eating). Often interchangeable with ないで.',
    common_mistakes:
      'Using ずに casually where ないで would be more natural. In everyday conversation, ないで is more common: 朝ごはんを食べないで学校に行った. ずに sounds more literary.',
    examples: [
      {
        japanese: '朝ごはんを食べずに、学校に行った。',
        english: 'I went to school without eating breakfast.',
        furigana: 'あさごはんをたべずに、がっこうにいった。',
      },
      {
        japanese: '辞書を使わずに、文章を読んだ。',
        english: 'I read the passage without using a dictionary.',
        furigana: 'じしょをつかわずに、ぶんしょうをよんだ。',
      },
      {
        japanese: '何も言わずに、部屋を出て行った。',
        english: 'Without saying anything, they left the room.',
        furigana: 'なにもいわずに、へやをでていった。',
      },
    ],
  },
  {
    pattern: 'っぱなし',
    meaning: 'leaving in a state / left ... as is',
    formation: 'Verb ます-stem + っぱなし',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'っぱなし (from 放し, "leaving") indicates that something has been left in a certain state, usually carelessly or without proper follow-up. It often carries a negative nuance of negligence.',
    notes:
      'Common expressions: 開けっぱなし (left open), つけっぱなし (left on), 出しっぱなし (left out), 立ちっぱなし (standing the whole time). When describing enduring a state, the nuance is hardship rather than negligence.',
    common_mistakes:
      'Forgetting the っ before ぱなし. The small っ is essential: 開けっぱなし, not ×開けぱなし. The word is from the ます-stem + っ + ぱなし (放し).',
    examples: [
      {
        japanese: 'テレビをつけっぱなしにして寝てしまった。',
        english: 'I fell asleep with the TV left on.',
        furigana: 'テレビをつけっぱなしにしてねてしまった。',
      },
      {
        japanese: '窓が開けっぱなしだったので、部屋が寒くなった。',
        english: 'The window was left open, so the room got cold.',
        furigana: 'まどがあけっぱなしだったので、へやがさむくなった。',
      },
      {
        japanese: '電車で2時間立ちっぱなしだった。',
        english: 'I was standing the entire 2 hours on the train.',
        furigana: 'でんしゃで2じかんたちっぱなしだった。',
      },
    ],
  },
  {
    pattern: 'てからでないと',
    meaning: 'not until after / unless ... first',
    formation: 'Verb て-form + からでないと + negative result',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'てからでないと expresses that something cannot happen unless a prior action is completed first. It emphasizes that the second action requires the first as a prerequisite — "not until you do X can you do Y."',
    notes:
      'The result clause is almost always negative: できない, わからない, etc. A more casual version is てからじゃないと. Emphasizes prerequisite order more strongly than てから alone.',
    common_mistakes:
      'Using a positive result clause. The result must be negative or impossible: 食べてからでないと出かけられない (I cannot go out unless I eat first). ×食べてからでないと出かける is incorrect.',
    examples: [
      {
        japanese: '実際にやってみてからでないと、わからない。',
        english: 'You will not know until you actually try it.',
        furigana: 'じっさいにやってみてからでないと、わからない。',
      },
      {
        japanese: '予約してからでないと、入れません。',
        english: 'You cannot get in unless you make a reservation first.',
        furigana: 'よやくしてからでないと、はいれません。',
      },
      {
        japanese: '説明を聞いてからでないと、始められない。',
        english: 'We cannot start until we have heard the explanation.',
        furigana: 'せつめいをきいてからでないと、はじめられない。',
      },
    ],
  },
  {
    pattern: 'たとたんに',
    meaning: 'the moment / just as / as soon as',
    formation: 'Verb た-form + とたん(に)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'たとたんに expresses that immediately after one action, something else happened — often unexpectedly. It captures the very instant of transition. The second event is usually surprising, unplanned, or involuntary.',
    notes:
      'Written as 途端に. The second clause must be past tense and describe something that actually happened (not intentions or commands). The result is usually unexpected or dramatic.',
    common_mistakes:
      'Using とたんに with volitional or intentional actions in the result clause. The result should be involuntary or unexpected: ドアを開けたとたんに猫が飛び出した (the moment I opened the door, a cat jumped out). Not ×開けたとたんにテレビを見た.',
    examples: [
      {
        japanese: '外に出たとたんに、雨が降り始めた。',
        english: 'The moment I went outside, it started raining.',
        furigana: 'そとにでたとたんに、あめがふりはじめた。',
      },
      {
        japanese: '薬を飲んだとたんに、眠くなった。',
        english: 'The moment I took the medicine, I got sleepy.',
        furigana: 'くすりをのんだとたんに、ねむくなった。',
      },
      {
        japanese: 'ベッドに横になったとたん、電話が鳴った。',
        english: 'The moment I lay down in bed, the phone rang.',
        furigana: 'ベッドによこになったとたん、でんわがなった。',
      },
    ],
  },
  {
    pattern: '次第',
    meaning: 'as soon as / depending on',
    formation: 'Verb ます-stem + 次第 (as soon as) / Noun + 次第 (depending on)',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '次第 (しだい) has two meanings: (1) with verb ます-stem, it means "as soon as" — immediately after an action, the next will follow; (2) with nouns, it means "depending on" — the outcome depends on a factor.',
    notes:
      'Meaning 1 is formal and often used in business: 届き次第 (as soon as it arrives), わかり次第 (as soon as I find out). Meaning 2: 天気次第 (depending on the weather), やり方次第 (depends on how you do it).',
    common_mistakes:
      'Confusing the two meanings. Verb stem + 次第 = "as soon as" (formal). Noun + 次第 = "depending on." They are distinct uses of the same word.',
    examples: [
      {
        japanese: '届き次第、ご連絡いたします。',
        english: 'I will contact you as soon as it arrives.',
        furigana: 'とどきしだい、ごれんらくいたします。',
      },
      {
        japanese: '結果は努力次第だ。',
        english: 'The result depends on your effort.',
        furigana: 'けっかはどりょくしだいだ。',
      },
      {
        japanese: '天気次第で、明日のイベントが中止になるかもしれない。',
        english: "Depending on the weather, tomorrow's event might be cancelled.",
        furigana: 'てんきしだいで、あしたのイベントがちゅうしになるかもしれない。',
      },
    ],
  },
  {
    pattern: 'てはじめて',
    meaning: 'not until / only after doing ... for the first time',
    formation: 'Verb て-form + はじめて',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'てはじめて expresses that one realizes, understands, or experiences something for the first time only after doing a particular action. It emphasizes that the realization would not have come without that experience.',
    notes:
      'Often translated as "it was not until I did X that I realized Y." Common verbs in the result: わかった, 気づいた, 知った. The experience is presented as a prerequisite for the realization.',
    common_mistakes:
      'Confusing with てから (after doing). てはじめて emphasizes a first-time realization or discovery triggered by the experience, not just chronological order.',
    examples: [
      {
        japanese: '病気になってはじめて、健康のありがたさがわかった。',
        english: 'It was not until I got sick that I understood the value of health.',
        furigana: 'びょうきになってはじめて、けんこうのありがたさがわかった。',
      },
      {
        japanese: '日本に来てはじめて、刺身を食べた。',
        english: 'I ate sashimi for the first time after coming to Japan.',
        furigana: 'にほんにきてはじめて、さしみをたべた。',
      },
      {
        japanese: '失ってはじめて、大切さに気づくものだ。',
        english: 'You do not realize how important something is until you lose it.',
        furigana: 'うしなってはじめて、たいせつさにきづくものだ。',
      },
    ],
  },
  {
    pattern: '限り',
    meaning: 'as long as / to the extent that / unless',
    formation: 'Verb dictionary form + 限り / Verb ない-form + 限り / Noun + の + 限り',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '限り (かぎり) establishes a condition under which something holds true. With affirmative verbs, it means "as long as." With negative verbs, it means "unless." It can also mean "to the extent of one\'s ability."',
    notes:
      "Affirmative: 努力する限り成功する (as long as you try, you will succeed). Negative: 謝らない限り許さない (I will not forgive you unless you apologize). Also: 力の限り (to the extent of one's power), 知っている限り (as far as I know).",
    common_mistakes:
      'Confusing 限り (condition) with 限り (limit). As a condition, it means "as long as." As a limit, it means "to the extent of." Context determines the reading.',
    examples: [
      {
        japanese: '私が知っている限り、彼はまだ独身だ。',
        english: 'As far as I know, he is still single.',
        furigana: 'わたしがしっているかぎり、かれはまだどくしんだ。',
      },
      {
        japanese: '努力する限り、夢は叶う。',
        english: 'As long as you keep trying, your dream will come true.',
        furigana: 'どりょくするかぎり、ゆめはかなう。',
      },
      {
        japanese: '謝らない限り、許さない。',
        english: 'Unless you apologize, I will not forgive you.',
        furigana: 'あやまらないかぎり、ゆるさない。',
      },
    ],
  },
  {
    pattern: 'かわりに',
    meaning: 'instead of / in exchange for / in return for',
    formation: 'Verb dictionary form + かわりに / Verb た-form + かわりに / Noun + の + かわりに',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'かわりに (代わりに) has two meanings: (1) "instead of" — doing one thing in place of another; (2) "in exchange for" — doing something in return for something else, like a trade-off.',
    notes:
      'Instead of: コーヒーのかわりにお茶を飲んだ (I drank tea instead of coffee). In exchange for: 手伝ったかわりに、夕食をごちそうしてもらった (in return for helping, I was treated to dinner).',
    common_mistakes:
      'Confusing the two meanings. "Instead of" replaces one thing with another. "In exchange for" describes a reciprocal arrangement. Context usually makes the meaning clear.',
    examples: [
      {
        japanese: 'バスのかわりに、歩いて行った。',
        english: 'Instead of taking the bus, I walked.',
        furigana: 'バスのかわりに、あるいていった。',
      },
      {
        japanese: '料理を作ってくれたかわりに、私が皿を洗った。',
        english: 'In exchange for cooking, I washed the dishes.',
        furigana: 'りょうりをつくってくれたかわりに、わたしがさらをあらった。',
      },
      {
        japanese: '砂糖のかわりに蜂蜜を使っています。',
        english: 'I use honey instead of sugar.',
        furigana: 'さとうのかわりにはちみつをつかっています。',
      },
    ],
  },
  {
    pattern: 'どころか',
    meaning: 'far from / let alone / not only ... but',
    formation:
      'Verb plain + どころか / い-adj + どころか / な-adj + (な) + どころか / Noun + どころか',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'どころか strongly denies an assumption and presents the reality as being far from it. It means "far from X" or "let alone X." The actual situation is presented as the opposite of or more extreme than what was expected.',
    notes:
      'Two patterns: (1) far from X, actually Y (opposite): 簡単どころか、とても難しい (far from easy, it is very hard); (2) let alone X, even Y: 漢字どころか、ひらがなも読めない (let alone kanji, cannot even read hiragana).',
    common_mistakes:
      'Using どころか when the contrast is mild. It expresses a strong gap between expectation and reality. For mild contrasts, use けど or が instead.',
    examples: [
      {
        japanese: '助けてくれるどころか、邪魔をされた。',
        english: 'Far from helping me, they got in my way.',
        furigana: 'たすけてくれるどころか、じゃまをされた。',
      },
      {
        japanese: '旅行どころか、週末も働かなければならない。',
        english: 'Let alone a trip, I have to work even on weekends.',
        furigana: 'りょこうどころか、しゅうまつもはたらかなければならない。',
      },
      {
        japanese: '日本語どころか、英語もまだ上手に話せない。',
        english: 'Let alone Japanese, I still cannot speak English well either.',
        furigana: 'にほんごどころか、えいごもまだじょうずにはなせない。',
      },
    ],
  },

  // ===========================================================================
  // FORMAL / WRITTEN (~10)
  // ===========================================================================
  {
    pattern: 'において',
    meaning: 'in / at / on (formal location/context)',
    formation: 'Noun + において',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'において is the formal equivalent of で, indicating a location, situation, or context where something takes place. It is used in written Japanese, official documents, speeches, and academic texts.',
    notes:
      'Can become における when modifying a noun: 日本における教育 (education in Japan). Also used for abstract contexts: この分野において (in this field). Very formal — avoid in casual speech.',
    common_mistakes:
      'Using において in casual conversation. It sounds stiff and overly formal. Use で instead: 学校で (at school) rather than 学校において.',
    examples: [
      {
        japanese: '会議は第三会議室において行われます。',
        english: 'The meeting will be held in Conference Room 3.',
        furigana: 'かいぎはだいさんかいぎしつにおいておこなわれます。',
      },
      {
        japanese: '現代社会における技術の役割は大きい。',
        english: 'The role of technology in modern society is significant.',
        furigana: 'げんだいしゃかいにおけるぎじゅつのやくわりはおおきい。',
      },
      {
        japanese: '日本の教育において、英語は重要な科目です。',
        english: 'In Japanese education, English is an important subject.',
        furigana: 'にほんのきょういくにおいて、えいごはじゅうようなかもくです。',
      },
    ],
  },
  {
    pattern: 'にとって',
    meaning: 'for / from the perspective of',
    formation: 'Noun + にとって',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'にとって expresses a viewpoint or perspective — "for (someone)" or "from (someone\'s) standpoint." It indicates who is evaluating or experiencing something.',
    notes:
      'Can become にとっての when modifying a noun: 私にとっての宝物 (a treasure for me). Often followed by evaluative expressions: 大切だ, 難しい, 重要だ, etc. Different from に対して (toward) and として (as).',
    common_mistakes:
      'Confusing にとって with に. にとって specifically means "from X\'s perspective" and is used with evaluative statements. 私にとって難しい (difficult for me, from my viewpoint) vs 私に難しい (unnatural).',
    examples: [
      {
        japanese: '私にとって、家族が一番大切だ。',
        english: 'For me, family is the most important thing.',
        furigana: 'わたしにとって、かぞくがいちばんたいせつだ。',
      },
      {
        japanese: '外国人にとって、敬語は難しい。',
        english: 'For foreigners, keigo (honorific language) is difficult.',
        furigana: 'がいこくじんにとって、けいごはむずかしい。',
      },
      {
        japanese: 'この経験は彼女にとって貴重なものになった。',
        english: 'This experience became something precious for her.',
        furigana: 'このけいけんはかのじょにとってきちょうなものになった。',
      },
    ],
  },
  {
    pattern: 'に加えて',
    meaning: 'in addition to / besides / on top of',
    formation: 'Noun + に加えて / Verb plain + の + に加えて',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'に加えて (にくわえて) means "in addition to" — it adds extra information on top of what has already been mentioned. It is more formal than 上に and commonly used in writing and presentations.',
    notes:
      'Can also appear as に加え (dropping て). Written form: 加えて. Similar in meaning to 上に and だけでなく, but more formal. Often used in news and official reports.',
    common_mistakes:
      'Using に加えて in very casual conversation. While not as formal as において, it is still primarily a written/formal expression. In casual speech, use それに or 上に.',
    examples: [
      {
        japanese: '経験に加えて、語学力も求められている。',
        english: 'In addition to experience, language skills are also required.',
        furigana: 'けいけんにくわえて、ごがくりょくももとめられている。',
      },
      {
        japanese: '雨に加えて、強い風も吹いている。',
        english: 'In addition to rain, strong winds are also blowing.',
        furigana: 'あめにくわえて、つよいかぜもふいている。',
      },
      {
        japanese: '仕事に加えて、ボランティア活動もしている。',
        english: 'In addition to work, I also do volunteer activities.',
        furigana: 'しごとにくわえて、ボランティアかつどうもしている。',
      },
    ],
  },
  {
    pattern: 'をはじめ',
    meaning: 'starting with / including / such as',
    formation: 'Noun + をはじめ(として)',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'をはじめ introduces a prominent example from a group, with the implication that there are many others. It means "starting with X" or "X, among others." It highlights the most representative example.',
    notes:
      'Written as を始め. Can also appear as をはじめとして or をはじめとする (modifying a noun). The example given is usually the most prominent or well-known member of the group.',
    common_mistakes:
      'Using をはじめ for exhaustive lists. It implies there are many more examples beyond what is mentioned. For complete lists, use や...など instead.',
    examples: [
      {
        japanese: '東京をはじめ、大阪や京都などの大都市を訪れた。',
        english: 'I visited major cities such as Tokyo, Osaka, and Kyoto.',
        furigana: 'とうきょうをはじめ、おおさかやきょうとなどのだいとしをおとずれた。',
      },
      {
        japanese: '日本語をはじめとする外国語を学んでいる。',
        english: 'I am learning foreign languages, starting with Japanese.',
        furigana: 'にほんごをはじめとするがいこくごをまなんでいる。',
      },
      {
        japanese: '社長をはじめ、全社員が参加した。',
        english: 'Starting with the company president, all employees participated.',
        furigana: 'しゃちょうをはじめ、ぜんしゃいんがさんかした。',
      },
    ],
  },
  {
    pattern: 'にわたって',
    meaning: 'over / spanning / throughout (a range)',
    formation: 'Noun + にわたって',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'にわたって (に亘って) expresses that something extends over a wide range of time, space, or scope. It means "over," "spanning," or "throughout" and emphasizes the breadth or extent of coverage.',
    notes:
      'Can become にわたる when modifying a noun: 3日間にわたる会議 (a conference spanning 3 days). Common with time periods and geographic ranges. More formal than the simple use of 間.',
    common_mistakes:
      'Using にわたって for short or trivial durations. It implies significant extent: 数年にわたって (over several years) sounds natural, but 5分にわたって (over 5 minutes) sounds unnatural unless the brevity is being emphasized.',
    examples: [
      {
        japanese: '交渉は3日間にわたって行われた。',
        english: 'The negotiations were carried out over 3 days.',
        furigana: 'こうしょうは3にちかんにわたっておこなわれた。',
      },
      {
        japanese: '広い地域にわたって被害が出た。',
        english: 'Damage occurred over a wide area.',
        furigana: 'ひろいちいきにわたってひがいがでた。',
      },
      {
        japanese: '長年にわたる研究の成果が発表された。',
        english: 'The results of research spanning many years were announced.',
        furigana: 'ながねんにわたるけんきゅうのせいかがはっぴょうされた。',
      },
    ],
  },
  {
    pattern: 'に基づいて',
    meaning: 'based on / in accordance with (strictly)',
    formation: 'Noun + に基づいて',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'に基づいて (にもとづいて) means "based on" with the nuance of strict adherence to the source. The action or decision closely follows the basis — facts, data, law, or principles.',
    notes:
      'Can become に基づく or に基づいた when modifying a noun: 事実に基づいた映画 (a movie based on facts). More formal than をもとに. Implies faithful adherence rather than loose inspiration.',
    common_mistakes:
      'Confusing with をもとに. に基づいて implies strict adherence (based on law, facts, data), while をもとに implies using something as a starting point with room for adaptation.',
    examples: [
      {
        japanese: 'データに基づいて判断する。',
        english: 'I will make a judgment based on the data.',
        furigana: 'データにもとづいてはんだんする。',
      },
      {
        japanese: '法律に基づいて処罰される。',
        english: 'They will be punished in accordance with the law.',
        furigana: 'ほうりつにもとづいてしょばつされる。',
      },
      {
        japanese: '調査結果に基づいた報告書を作成した。',
        english: 'I prepared a report based on the survey results.',
        furigana: 'ちょうさけっかにもとづいたほうこくしょをさくせいした。',
      },
    ],
  },
  {
    pattern: '末に',
    meaning: 'after / at the end of (a long process)',
    formation: 'Verb た-form + 末に / Noun + の + 末に',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      '末に (すえに) indicates that after a long, difficult, or extensive process, a result was finally reached. It emphasizes the effort or duration that preceded the outcome.',
    notes:
      'Implies significant effort or time: 悩んだ末に (after much deliberation), 話し合った末に (after extensive discussion). Can become 末の when modifying a noun. The result can be positive or negative.',
    common_mistakes:
      'Using 末に for trivial actions. It implies substantial preceding effort or time. For simple sequences, use 後で or てから: ×食べた末に寝た (ate then slept) is unnatural.',
    examples: [
      {
        japanese: '長い議論の末に、結論が出た。',
        english: 'After long deliberation, a conclusion was reached.',
        furigana: 'ながいぎろんのすえに、けつろんがでた。',
      },
      {
        japanese: '悩んだ末に、転職することに決めた。',
        english: 'After much deliberation, I decided to change jobs.',
        furigana: 'なやんだすえに、てんしょくすることにきめた。',
      },
      {
        japanese: '何度も失敗した末に、ようやく成功した。',
        english: 'After failing many times, I finally succeeded.',
        furigana: 'なんどもしっぱいしたすえに、ようやくせいこうした。',
      },
    ],
  },
  {
    pattern: '以来',
    meaning: 'since / ever since',
    formation: 'Verb て-form + 以来 / Noun + 以来',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      '以来 (いらい) marks a starting point in the past from which a state has continued until the present. It means "ever since" and implies the situation is still ongoing.',
    notes:
      'The state must continue to the present: 卒業以来 (ever since graduation). Different from から, which simply marks a starting point. 以来 emphasizes the unbroken continuation. Often used with ずっと.',
    common_mistakes:
      'Using 以来 when the state has already ended. Since 以来 implies continuation to the present, do not use it for states that stopped: ×去年以来、日本にいたが帰った (incorrect because the state ended).',
    examples: [
      {
        japanese: '大学を卒業して以来、彼には会っていない。',
        english: 'I have not seen him since graduating from university.',
        furigana: 'だいがくをそつぎょうしていらい、かれにはあっていない。',
      },
      {
        japanese: '去年の夏以来、ずっと忙しい。',
        english: 'I have been busy ever since last summer.',
        furigana: 'きょねんのなついらい、ずっといそがしい。',
      },
      {
        japanese: '日本に来て以来、毎日日本語を勉強している。',
        english: 'Ever since coming to Japan, I have been studying Japanese every day.',
        furigana: 'にほんにきていらい、まいにちにほんごをべんきょうしている。',
      },
    ],
  },
  {
    pattern: 'を問わず',
    meaning: 'regardless of / irrespective of',
    formation: 'Noun + を問わず',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'を問わず (をとわず) means "regardless of" or "irrespective of." It indicates that something applies no matter what the variable is. Very commonly used with paired opposites or categories.',
    notes:
      'Common pairs: 男女を問わず (regardless of gender), 年齢を問わず (regardless of age), 経験の有無を問わず (regardless of whether you have experience). Formal and often seen in job postings and official notices.',
    common_mistakes:
      'Using を問わず in casual speech where に関係なく would be more natural. を問わず is formal and often used in written notices, advertisements, and announcements.',
    examples: [
      {
        japanese: '年齢を問わず、誰でも参加できます。',
        english: 'Anyone can participate regardless of age.',
        furigana: 'ねんれいをとわず、だれでもさんかできます。',
      },
      {
        japanese: '経験を問わず、応募を受け付けています。',
        english: 'We accept applications regardless of experience.',
        furigana: 'けいけんをとわず、おうぼをうけつけています。',
      },
      {
        japanese: '天候を問わず、イベントは開催されます。',
        english: 'The event will be held regardless of the weather.',
        furigana: 'てんこうをとわず、イベントはかいさいされます。',
      },
    ],
  },
  {
    pattern: 'ものの',
    meaning: 'although / but / even though',
    formation: 'Verb plain + ものの / い-adj + ものの / な-adj + な/である + ものの',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'ものの is a formal conjunction meaning "although" or "even though." It concedes a fact in the first clause and presents a contrasting or unexpected situation in the second clause. It is more literary than けど or が.',
    notes:
      'Often used in writing and formal speech. Similar to けれども but more literary. The second clause often expresses difficulty, disappointment, or an unexpected outcome. Sometimes followed by a trailing thought or implied conclusion.',
    common_mistakes:
      'Using ものの in casual conversation. It sounds bookish and formal. In everyday speech, use けど, が, or のに instead.',
    examples: [
      {
        japanese: '買ったものの、一度も使っていない。',
        english: 'Although I bought it, I have never used it.',
        furigana: 'かったものの、いちどもつかっていない。',
      },
      {
        japanese: '日本語を勉強しているものの、まだうまく話せない。',
        english: 'Although I am studying Japanese, I still cannot speak it well.',
        furigana: 'にほんごをべんきょうしているものの、まだうまくはなせない。',
      },
      {
        japanese: '引き受けたものの、どうすればいいかわからない。',
        english: 'Although I took it on, I do not know what to do.',
        furigana: 'ひきうけたものの、どうすればいいかわからない。',
      },
    ],
  },

  // ===========================================================================
  // ADDITIONAL PATTERNS
  // ===========================================================================
  {
    pattern: 'からといって',
    meaning: 'just because ... does not mean',
    formation:
      'Verb plain + からといって / い-adj + からといって / な-adj + だ + からといって / Noun + だ + からといって',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'からといって is used to argue that a given reason is not sufficient justification for a conclusion. It means "just because X does not mean Y" — it challenges the assumption that X naturally leads to Y.',
    notes:
      'Almost always followed by a negative clause or とは限らない. Very common pattern for refuting assumptions: 安いからといって品質が悪いとは限らない (just because it is cheap does not mean the quality is bad).',
    common_mistakes:
      'Forgetting the negative or limiting expression in the result. からといって should be followed by ～わけではない, ～とは限らない, or similar expressions. Using it with a positive conclusion is unnatural.',
    examples: [
      {
        japanese: '若いからといって、無理をしてはいけない。',
        english: 'Just because you are young does not mean you should overdo it.',
        furigana: 'わかいからといって、むりをしてはいけない。',
      },
      {
        japanese: 'お金があるからといって、幸せとは限らない。',
        english: 'Just because you have money does not necessarily mean you are happy.',
        furigana: 'おかねがあるからといって、しあわせとはかぎらない。',
      },
      {
        japanese: '日本人だからといって、全員が寿司を好きなわけではない。',
        english: 'Just because someone is Japanese does not mean they all like sushi.',
        furigana: 'にほんじんだからといって、ぜんいんがすしをすきなわけではない。',
      },
    ],
  },
  {
    pattern: 'くせに',
    meaning: 'even though / despite (with criticism)',
    formation: 'Verb plain + くせに / い-adj + くせに / な-adj + な + くせに / Noun + の + くせに',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'くせに expresses criticism or blame — "even though" or "despite the fact that." The speaker is annoyed or frustrated that someone acts in a way that contradicts what they should be doing given their situation.',
    notes:
      'Stronger and more critical than のに. Always carries a negative, blaming nuance. Should not be used about oneself in polite company. Common in casual speech when complaining about someone.',
    common_mistakes:
      'Using くせに in polite or neutral contexts. It always carries blame and criticism. For neutral "even though," use のに instead. Saying 先生のくせに to a teacher\'s face would be very rude.',
    examples: [
      {
        japanese: '知っているくせに、教えてくれない。',
        english: 'Even though you know, you will not tell me.',
        furigana: 'しっているくせに、おしえてくれない。',
      },
      {
        japanese: '自分は何もしないくせに、人の文句ばかり言う。',
        english: 'Despite not doing anything yourself, you do nothing but complain about others.',
        furigana: 'じぶんはなにもしないくせに、ひとのもんくばかりいう。',
      },
      {
        japanese: '大人のくせに、そんなことも知らないの？',
        english: 'You are an adult and you do not even know something like that?',
        furigana: 'おとなのくせに、そんなこともしらないの？',
      },
    ],
  },
  {
    pattern: 'てしょうがない',
    meaning: 'cannot help but / extremely / unbearably',
    formation:
      'Verb て-form + しょうがない / い-adj (-い → くて) + しょうがない / な-adj + で + しょうがない',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'てしょうがない (also written as てしかたがない) expresses that an involuntary feeling or sensation is so strong that one cannot do anything about it. It is synonymous with てたまらない but slightly more colloquial.',
    notes:
      'しょうがない literally means "there is no way / it cannot be helped." The formal version is しかたがない. Like てたまらない, it is used only with involuntary emotions and sensations, not deliberate actions.',
    common_mistakes:
      'Confusing しょうがない (standalone = "it cannot be helped") with てしょうがない (compound = "so much that I cannot stand it"). Standalone: しょうがない means "there is nothing to be done." Compound: 寂しくてしょうがない means "unbearably lonely."',
    examples: [
      {
        japanese: '明日の面接が心配でしょうがない。',
        english: "I am so worried about tomorrow's interview that I cannot help it.",
        furigana: 'あしたのめんせつがしんぱいでしょうがない。',
      },
      {
        japanese: '夏はのどが渇いてしょうがない。',
        english: 'In summer, I get so thirsty I cannot stand it.',
        furigana: 'なつはのどがかわいてしょうがない。',
      },
      {
        japanese: '彼のことが気になってしかたがない。',
        english: 'I cannot stop thinking about him.',
        furigana: 'かれのことがきになってしかたがない。',
      },
    ],
  },
  {
    pattern: 'ほど',
    meaning: 'to the extent that / the more ... the more',
    formation: 'Verb dictionary form + ほど / Verb ば + Verb dictionary form + ほど',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'ほど indicates degree or extent. It has two main uses: (1) expressing the degree to which something is true — "to the extent that" or "so much that"; (2) with the ば...ほど pattern, expressing "the more ... the more."',
    notes:
      'Degree: 泣きたいほど嬉しい (so happy I could cry). Proportional: 読めば読むほど面白い (the more I read, the more interesting it gets). Also used in comparisons: 東京ほど大きくない (not as big as Tokyo).',
    common_mistakes:
      'Confusing the degree use with くらい. While both express degree, ほど tends to be used with more extreme or emphatic expressions, and くらい is more casual and flexible.',
    examples: [
      {
        japanese: '死ぬほど疲れた。',
        english: 'I am so tired I could die.',
        furigana: 'しぬほどつかれた。',
      },
      {
        japanese: '日本語は勉強すればするほど面白くなる。',
        english: 'The more you study Japanese, the more interesting it becomes.',
        furigana: 'にほんごはべんきょうすればするほどおもしろくなる。',
      },
      {
        japanese: '声が出ないほど驚いた。',
        english: 'I was so surprised that I could not even speak.',
        furigana: 'こえがでないほどおどろいた。',
      },
    ],
  },
  {
    pattern: 'とともに',
    meaning: 'together with / at the same time as / as well as',
    formation: 'Verb dictionary form + とともに / Noun + とともに',
    jlpt_level: 'N3',
    difficulty: 'advanced',
    explanation:
      'とともに has two uses: (1) "together with" — indicating companionship or coexistence; (2) "at the same time as" — indicating simultaneous change, similar to につれて. It is relatively formal.',
    notes:
      'Companionship: 家族とともに暮らす (live together with family). Simultaneous change: 時代とともに変わる (change with the times). More literary than と一緒に (together with) and につれて (as ... changes).',
    common_mistakes:
      'Using とともに in casual speech. It sounds literary and formal. In conversation, use と一緒に for "together with" and につれて for "as ... changes."',
    examples: [
      {
        japanese: '彼は家族とともに海外に移住した。',
        english: 'He moved abroad together with his family.',
        furigana: 'かれはかぞくとともにかいがいにいじゅうした。',
      },
      {
        japanese: '時代とともに、人々の考え方も変わってきた。',
        english: "Along with the times, people's way of thinking has also changed.",
        furigana: 'じだいとともに、ひとびとのかんがえかたもかわってきた。',
      },
      {
        japanese: '春の訪れとともに、桜が咲き始めた。',
        english: 'Together with the arrival of spring, the cherry blossoms began to bloom.',
        furigana: 'はるのおとずれとともに、さくらがさきはじめた。',
      },
    ],
  },
  {
    pattern: 'だらけ',
    meaning: 'full of / covered with (negative connotation)',
    formation: 'Noun + だらけ',
    jlpt_level: 'N3',
    difficulty: 'intermediate',
    explanation:
      'だらけ indicates that something is full of or covered with something undesirable. It almost always carries a negative connotation — the thing is excessively present and unwanted.',
    notes:
      'Common expressions: 間違いだらけ (full of mistakes), 泥だらけ (covered in mud), 傷だらけ (covered in scratches), 借金だらけ (drowning in debt). Unlike まみれ (physically covered), だらけ can be used for abstract things.',
    common_mistakes:
      'Using だらけ for positive things. It is almost exclusively negative. You would not say 花だらけ (covered in flowers) naturally — use いっぱい instead for positive meanings.',
    examples: [
      {
        japanese: 'この作文は間違いだらけだ。',
        english: 'This essay is full of mistakes.',
        furigana: 'このさくぶんはまちがいだらけだ。',
      },
      {
        japanese: '子供が泥だらけで帰ってきた。',
        english: 'The child came home covered in mud.',
        furigana: 'こどもがどろだらけでかえってきた。',
      },
      {
        japanese: '部屋はほこりだらけだった。',
        english: 'The room was covered in dust.',
        furigana: 'へやはほこりだらけだった。',
      },
    ],
  },
]
