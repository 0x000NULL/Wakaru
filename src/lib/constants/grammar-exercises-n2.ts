import type { GrammarExercise } from '@/types/grammar-quiz'

export const N2_GRAMMAR_EXERCISES: GrammarExercise[] = [
  // ===========================================================================
  // FORMAL EXPRESSIONS
  // ===========================================================================
  // に際して (on the occasion of)
  {
    id: 'n2-nisaishite-fib-1',
    pattern: 'に際して',
    type: 'fill_in_blank',
    sentence: '開会＿＿＿、会長から挨拶がありました。',
    english: 'On the occasion of the opening, there was a greeting from the chairman.',
    correctAnswer: 'に際して',
    options: ['に際して', 'について', 'に対して', 'にとって'],
    explanation:
      'に際して means "on the occasion of" and is used for significant, formal events.',
  },
  {
    id: 'n2-nisaishite-fib-2',
    pattern: 'に際して',
    type: 'fill_in_blank',
    sentence: '海外赴任＿＿＿、ビザの手続きを済ませておく必要がある。',
    english:
      'On the occasion of the overseas assignment, it is necessary to complete the visa procedures.',
    correctAnswer: 'に際して',
    options: ['に際して', 'において', 'にわたって', 'をめぐって'],
    explanation:
      'に際して is appropriate for significant life events like an overseas transfer.',
  },
  {
    id: 'n2-nisaishite-fib-3',
    pattern: 'に際して',
    type: 'fill_in_blank',
    sentence: '新店舗のオープン＿＿＿、記念セールを行います。',
    english: 'On the occasion of the new store opening, we will hold a commemorative sale.',
    correctAnswer: 'に際して',
    options: ['に際して', 'に関して', 'に基づいて', 'を通じて'],
    explanation:
      'に際して is used for noteworthy occasions such as a store opening.',
  },
  {
    id: 'n2-nisaishite-mc-1',
    pattern: 'に際して',
    type: 'multiple_choice',
    sentence: 'に際して is most appropriate for which type of situation?',
    english: 'Select the best description.',
    correctAnswer: 'Significant or formal occasions',
    options: [
      'Significant or formal occasions',
      'Everyday routine actions',
      'Describing a location',
      'Expressing a contrast',
    ],
    explanation:
      'に際して is reserved for formal, significant events like ceremonies, launches, or life milestones.',
  },
  {
    id: 'n2-nisaishite-mc-2',
    pattern: 'に際して',
    type: 'multiple_choice',
    sentence: 'Which form is used before a noun as a pre-nominal modifier?',
    english: 'Select the correct pre-nominal form of に際して.',
    correctAnswer: 'に際しての',
    options: ['に際しての', 'に際しては', 'に際してで', 'に際してに'],
    explanation:
      'に際しての is the pre-nominal form used to modify a following noun, e.g., 出発に際しての注意事項.',
  },

  // をめぐって (concerning / regarding — with dispute/debate nuance)
  {
    id: 'n2-womegutte-fib-1',
    pattern: 'をめぐって',
    type: 'fill_in_blank',
    sentence: '遺産＿＿＿、兄弟の間で争いが起きた。',
    english: 'A dispute arose between the siblings concerning the inheritance.',
    correctAnswer: 'をめぐって',
    options: ['をめぐって', 'について', 'に対して', 'を通じて'],
    explanation:
      'をめぐって implies controversy or dispute around a topic, fitting the context of an inheritance conflict.',
  },
  {
    id: 'n2-womegutte-fib-2',
    pattern: 'をめぐって',
    type: 'fill_in_blank',
    sentence: '新しい法案＿＿＿、国会で激しい議論が行われた。',
    english: 'Heated debate took place in the Diet concerning the new bill.',
    correctAnswer: 'をめぐって',
    options: ['をめぐって', 'によって', 'において', 'にとって'],
    explanation:
      'をめぐって is natural when a topic is the center of debate or controversy.',
  },
  {
    id: 'n2-womegutte-fib-3',
    pattern: 'をめぐって',
    type: 'fill_in_blank',
    sentence: '領土問題＿＿＿、両国の関係が悪化した。',
    english: 'Relations between the two countries worsened over the territorial issue.',
    correctAnswer: 'をめぐって',
    options: ['をめぐって', 'を通して', 'に関して', 'に際して'],
    explanation:
      'をめぐって highlights the disputed nature of the topic.',
  },
  {
    id: 'n2-womegutte-mc-1',
    pattern: 'をめぐって',
    type: 'multiple_choice',
    sentence: 'What nuance does をめぐって add compared to について?',
    english: 'Select the key difference.',
    correctAnswer: 'Implies controversy or debate around the topic',
    options: [
      'Implies controversy or debate around the topic',
      'Indicates the exact same meaning',
      'Marks the direct object of a verb',
      'Expresses a time limit',
    ],
    explanation:
      'While について neutrally means "about," をめぐって implies contention or varying opinions.',
  },
  {
    id: 'n2-womegutte-mc-2',
    pattern: 'をめぐって',
    type: 'multiple_choice',
    sentence: 'Which pre-nominal form is correct for をめぐって?',
    english: 'Select the form used before a noun.',
    correctAnswer: 'をめぐる',
    options: ['をめぐる', 'をめぐっての', 'をめぐった', 'をめぐり'],
    explanation:
      'をめぐる is the standard pre-nominal form, e.g., 環境問題をめぐる議論.',
  },

  // に先立って (prior to / before)
  {
    id: 'n2-nisakidatte-fib-1',
    pattern: 'に先立って',
    type: 'fill_in_blank',
    sentence: '会議＿＿＿、資料を配布しておいてください。',
    english: 'Prior to the meeting, please distribute the materials.',
    correctAnswer: 'に先立って',
    options: ['に先立って', 'に際して', 'について', 'にわたって'],
    explanation:
      'に先立って means "prior to" and emphasizes preparation before an event.',
  },
  {
    id: 'n2-nisakidatte-fib-2',
    pattern: 'に先立って',
    type: 'fill_in_blank',
    sentence: '映画の公開＿＿＿、試写会が行われた。',
    english: 'Prior to the movie release, a preview screening was held.',
    correctAnswer: 'に先立って',
    options: ['に先立って', 'をめぐって', 'を踏まえて', 'に至って'],
    explanation:
      'に先立って indicates an action done in advance of a main event.',
  },
  {
    id: 'n2-nisakidatte-fib-3',
    pattern: 'に先立って',
    type: 'fill_in_blank',
    sentence: '工事の開始＿＿＿、近隣住民への説明会が開かれた。',
    english: 'Prior to the start of construction, an information session was held for nearby residents.',
    correctAnswer: 'に先立って',
    options: ['に先立って', 'に際して', 'をもって', 'に限らず'],
    explanation:
      'に先立って emphasizes doing something before the main event begins.',
  },
  {
    id: 'n2-nisakidatte-mc-1',
    pattern: 'に先立って',
    type: 'multiple_choice',
    sentence: 'What is the main meaning of に先立って?',
    english: 'Select the best translation.',
    correctAnswer: 'Prior to / Before',
    options: ['Prior to / Before', 'On the occasion of', 'Concerning', 'Based on'],
    explanation:
      'に先立って means "prior to" or "before," used for preparatory actions.',
  },
  {
    id: 'n2-nisakidatte-mc-2',
    pattern: 'に先立って',
    type: 'multiple_choice',
    sentence: 'Which shortened form of に先立って is used in formal writing?',
    english: 'Select the literary form.',
    correctAnswer: 'に先立ち',
    options: ['に先立ち', 'に先立つ', 'に先立った', 'に先立ての'],
    explanation:
      'に先立ち is the shortened, more literary form used in formal contexts.',
  },

  // を踏まえて (based on / taking into account)
  {
    id: 'n2-wofumaete-fib-1',
    pattern: 'を踏まえて',
    type: 'fill_in_blank',
    sentence: '調査結果＿＿＿、新しい計画を立てた。',
    english: 'Based on the survey results, we made a new plan.',
    correctAnswer: 'を踏まえて',
    options: ['を踏まえて', 'をめぐって', 'に際して', 'に対して'],
    explanation:
      'を踏まえて means "based on" or "taking into account," used when decisions rely on prior information.',
  },
  {
    id: 'n2-wofumaete-fib-2',
    pattern: 'を踏まえて',
    type: 'fill_in_blank',
    sentence: '過去の失敗＿＿＿、改善策を検討する。',
    english: 'Taking past failures into account, we will consider improvements.',
    correctAnswer: 'を踏まえて',
    options: ['を踏まえて', 'を通して', 'について', 'に先立って'],
    explanation:
      'を踏まえて indicates using past experience or data as the basis for action.',
  },
  {
    id: 'n2-wofumaete-fib-3',
    pattern: 'を踏まえて',
    type: 'fill_in_blank',
    sentence: '市民の意見＿＿＿、条例を改正した。',
    english: 'Based on the opinions of citizens, the ordinance was revised.',
    correctAnswer: 'を踏まえて',
    options: ['を踏まえて', 'をもって', 'にわたって', 'に至って'],
    explanation:
      'を踏まえて conveys that the revision was grounded in citizen feedback.',
  },
  {
    id: 'n2-wofumaete-mc-1',
    pattern: 'を踏まえて',
    type: 'multiple_choice',
    sentence: 'What does を踏まえて express?',
    english: 'Select the best meaning.',
    correctAnswer: 'Based on / Taking into account',
    options: [
      'Based on / Taking into account',
      'In spite of',
      'On the occasion of',
      'Regardless of',
    ],
    explanation:
      'を踏まえて means decisions or actions are grounded in certain facts or experiences.',
  },
  {
    id: 'n2-wofumaete-mc-2',
    pattern: 'を踏まえて',
    type: 'multiple_choice',
    sentence: 'Which pre-nominal form of を踏まえて is correct?',
    english: 'Select the form used before a noun.',
    correctAnswer: 'を踏まえた',
    options: ['を踏まえた', 'を踏まえての', 'を踏まえる', 'を踏まえ'],
    explanation:
      'を踏まえた is the pre-nominal form, e.g., 現状を踏まえた対策.',
  },

  // にあたって (on the occasion of / when doing)
  {
    id: 'n2-niatatte-fib-1',
    pattern: 'にあたって',
    type: 'fill_in_blank',
    sentence: '新プロジェクトを始める＿＿＿、チーム編成を見直した。',
    english: 'When starting the new project, we reviewed the team composition.',
    correctAnswer: 'にあたって',
    options: ['にあたって', 'に際して', 'について', 'に対して'],
    explanation:
      'にあたって means "when undertaking" and emphasizes preparation for an important action.',
  },
  {
    id: 'n2-niatatte-fib-2',
    pattern: 'にあたって',
    type: 'fill_in_blank',
    sentence: '留学する＿＿＿、奨学金を申請した。',
    english: 'When preparing to study abroad, I applied for a scholarship.',
    correctAnswer: 'にあたって',
    options: ['にあたって', 'をめぐって', 'を踏まえて', 'に先立って'],
    explanation:
      'にあたって is used when taking preparatory steps for a significant undertaking.',
  },
  {
    id: 'n2-niatatte-fib-3',
    pattern: 'にあたって',
    type: 'fill_in_blank',
    sentence: '契約を結ぶ＿＿＿、条件を確認してください。',
    english: 'When entering into a contract, please confirm the conditions.',
    correctAnswer: 'にあたって',
    options: ['にあたって', 'をもって', 'にわたって', 'に至って'],
    explanation:
      'にあたって emphasizes the importance of checking conditions before a formal agreement.',
  },
  {
    id: 'n2-niatatte-mc-1',
    pattern: 'にあたって',
    type: 'multiple_choice',
    sentence: 'How does にあたって differ from に際して?',
    english: 'Select the best distinction.',
    correctAnswer: 'にあたって emphasizes personal involvement; に際して is more ceremonial',
    options: [
      'にあたって emphasizes personal involvement; に際して is more ceremonial',
      'They are completely interchangeable',
      'にあたって is more casual than に際して',
      'に際して is used with verbs only',
    ],
    explanation:
      'にあたって implies the speaker is actively undertaking the action, while に際して is often more ceremonial.',
  },
  {
    id: 'n2-niatatte-mc-2',
    pattern: 'にあたって',
    type: 'multiple_choice',
    sentence: 'What is the shortened literary form of にあたって?',
    english: 'Select the correct form.',
    correctAnswer: 'にあたり',
    options: ['にあたり', 'にあたる', 'にあたった', 'にあたっての'],
    explanation:
      'にあたり is the shortened literary form used in formal writing.',
  },

  // を余儀なくされる (to be forced to / to have no choice but to)
  {
    id: 'n2-woyoginaku-fib-1',
    pattern: 'を余儀なくされる',
    type: 'fill_in_blank',
    sentence: '台風の影響で、イベントの中止＿＿＿。',
    english: 'Due to the typhoon, the cancellation of the event was forced upon us.',
    correctAnswer: 'を余儀なくされた',
    options: ['を余儀なくされた', 'をめぐった', 'に際した', 'を踏まえた'],
    explanation:
      'を余儀なくされる means "to be forced to" — here the event cancellation was unavoidable.',
  },
  {
    id: 'n2-woyoginaku-fib-2',
    pattern: 'を余儀なくされる',
    type: 'fill_in_blank',
    sentence: '経営悪化により、大規模なリストラ＿＿＿。',
    english: 'Due to worsening management, large-scale restructuring was forced.',
    correctAnswer: 'を余儀なくされた',
    options: ['を余儀なくされた', 'を踏まえた', 'に先立った', 'をもった'],
    explanation:
      'を余儀なくされる expresses that external circumstances left no choice.',
  },
  {
    id: 'n2-woyoginaku-fib-3',
    pattern: 'を余儀なくされる',
    type: 'fill_in_blank',
    sentence: '地震で多くの住民が避難＿＿＿。',
    english: 'Many residents were forced to evacuate due to the earthquake.',
    correctAnswer: 'を余儀なくされた',
    options: ['を余儀なくされた', 'に際した', 'をめぐった', 'に至った'],
    explanation:
      'を余儀なくされる shows the evacuation was compelled by circumstances beyond control.',
  },
  {
    id: 'n2-woyoginaku-mc-1',
    pattern: 'を余儀なくされる',
    type: 'multiple_choice',
    sentence: 'What does を余儀なくされる express?',
    english: 'Select the best meaning.',
    correctAnswer: 'Being forced to do something unavoidable',
    options: [
      'Being forced to do something unavoidable',
      'Choosing to do something willingly',
      'Doing something on the occasion of',
      'Taking something into account',
    ],
    explanation:
      'を余儀なくされる means "to be compelled/forced to" due to external circumstances.',
  },
  {
    id: 'n2-woyoginaku-mc-2',
    pattern: 'を余儀なくされる',
    type: 'multiple_choice',
    sentence: 'What grammatical structure precedes を余儀なくされる?',
    english: 'Select what comes before を.',
    correctAnswer: 'A noun (the action one is forced into)',
    options: [
      'A noun (the action one is forced into)',
      'A verb in dictionary form',
      'An adjective',
      'A particle',
    ],
    explanation:
      'A noun representing the forced action precedes を, e.g., 変更を余儀なくされる.',
  },

  // に至るまで (even extending to / all the way to)
  {
    id: 'n2-niitarumade-fib-1',
    pattern: 'に至るまで',
    type: 'fill_in_blank',
    sentence: '社長から新入社員＿＿＿、全員が参加した。',
    english: 'Everyone from the president all the way to new employees participated.',
    correctAnswer: 'に至るまで',
    options: ['に至るまで', 'をめぐって', 'に際して', 'を踏まえて'],
    explanation:
      'に至るまで means "extending all the way to," emphasizing the full range.',
  },
  {
    id: 'n2-niitarumade-fib-2',
    pattern: 'に至るまで',
    type: 'fill_in_blank',
    sentence: '食事のマナーから服装＿＿＿、細かく指導された。',
    english: 'We were instructed in detail on everything from table manners to clothing.',
    correctAnswer: 'に至るまで',
    options: ['に至るまで', 'に限らず', 'にわたって', 'に先立って'],
    explanation:
      'に至るまで emphasizes the wide scope from one end to another.',
  },
  {
    id: 'n2-niitarumade-fib-3',
    pattern: 'に至るまで',
    type: 'fill_in_blank',
    sentence: '彼は料理の材料選びから調理法＿＿＿、こだわりがある。',
    english: 'He is particular about everything from ingredient selection all the way to cooking methods.',
    correctAnswer: 'に至るまで',
    options: ['に至るまで', 'をもって', 'に対して', 'について'],
    explanation:
      'に至るまで highlights thoroughness across a full range of areas.',
  },
  {
    id: 'n2-niitarumade-mc-1',
    pattern: 'に至るまで',
    type: 'multiple_choice',
    sentence: 'What does に至るまで emphasize?',
    english: 'Select the best description.',
    correctAnswer: 'The extent or range reaching even to an extreme point',
    options: [
      'The extent or range reaching even to an extreme point',
      'A contrast between two things',
      'A cause and effect relationship',
      'An obligation or duty',
    ],
    explanation:
      'に至るまで stresses that something extends all the way to an endpoint, often surprisingly far.',
  },
  {
    id: 'n2-niitarumade-mc-2',
    pattern: 'に至るまで',
    type: 'multiple_choice',
    sentence: 'Which pattern is often paired with に至るまで to show a range?',
    english: 'Select the common combination.',
    correctAnswer: 'AからBに至るまで (from A all the way to B)',
    options: [
      'AからBに至るまで (from A all the way to B)',
      'AはBに至るまで',
      'AでBに至るまで',
      'AもBに至るまで',
    ],
    explanation:
      'The から...に至るまで pattern shows a range from one point to another.',
  },

  // をもって (by means of / as of)
  {
    id: 'n2-womotte-fib-1',
    pattern: 'をもって',
    type: 'fill_in_blank',
    sentence: '本日＿＿＿、このサービスを終了いたします。',
    english: 'As of today, we will end this service.',
    correctAnswer: 'をもって',
    options: ['をもって', 'に際して', 'に先立って', 'をめぐって'],
    explanation:
      'をもって meaning "as of" is used to mark a formal deadline or endpoint.',
  },
  {
    id: 'n2-womotte-fib-2',
    pattern: 'をもって',
    type: 'fill_in_blank',
    sentence: '誠意＿＿＿対応させていただきます。',
    english: 'We will respond with sincerity.',
    correctAnswer: 'をもって',
    options: ['をもって', 'について', 'に対して', 'を踏まえて'],
    explanation:
      'をもって meaning "by means of / with" indicates the manner of doing something.',
  },
  {
    id: 'n2-womotte-fib-3',
    pattern: 'をもって',
    type: 'fill_in_blank',
    sentence: '今回の発表＿＿＿、プロジェクトは正式に始動する。',
    english: 'With this announcement, the project officially begins.',
    correctAnswer: 'をもって',
    options: ['をもって', 'にあたって', 'を余儀なくされて', 'に至るまで'],
    explanation:
      'をもって marks the formal trigger or means by which something starts.',
  },
  {
    id: 'n2-womotte-mc-1',
    pattern: 'をもって',
    type: 'multiple_choice',
    sentence: 'をもって has two main meanings. Which pair is correct?',
    english: 'Select the two meanings.',
    correctAnswer: '"As of (a deadline)" and "by means of"',
    options: [
      '"As of (a deadline)" and "by means of"',
      '"Despite" and "because of"',
      '"In spite of" and "regardless"',
      '"Prior to" and "after"',
    ],
    explanation:
      'をもって means either "as of" (a point in time) or "by means of / with" (a method or quality).',
  },
  {
    id: 'n2-womotte-mc-2',
    pattern: 'をもって',
    type: 'multiple_choice',
    sentence: 'In which register is をもって typically used?',
    english: 'Select the appropriate register.',
    correctAnswer: 'Formal / written language',
    options: [
      'Formal / written language',
      'Casual conversation',
      'Slang among friends',
      'Children\'s language',
    ],
    explanation:
      'をもって is a formal expression commonly found in official announcements, notices, and business documents.',
  },

  // ===========================================================================
  // CONJUNCTIONS & CONTRAST
  // ===========================================================================
  // ものの (although / but)
  {
    id: 'n2-monono-fib-1',
    pattern: 'ものの',
    type: 'fill_in_blank',
    sentence: '説明書を読んだ＿＿＿、使い方がよくわからなかった。',
    english: 'Although I read the manual, I did not understand how to use it well.',
    correctAnswer: 'ものの',
    options: ['ものの', 'ものか', 'ものだ', 'ものなら'],
    explanation:
      'ものの means "although" and introduces a contrast between expectation and reality.',
  },
  {
    id: 'n2-monono-fib-2',
    pattern: 'ものの',
    type: 'fill_in_blank',
    sentence: '薬を飲んだ＿＿＿、熱は下がらなかった。',
    english: 'Although I took medicine, the fever did not go down.',
    correctAnswer: 'ものの',
    options: ['ものの', 'ところで', 'ものか', 'からこそ'],
    explanation:
      'ものの connects two clauses where the result is contrary to what was expected.',
  },
  {
    id: 'n2-monono-fib-3',
    pattern: 'ものの',
    type: 'fill_in_blank',
    sentence: '新しいパソコンを買った＿＿＿、まだ使いこなせていない。',
    english: 'Although I bought a new computer, I still cannot use it proficiently.',
    correctAnswer: 'ものの',
    options: ['ものの', 'ばかりか', 'どころか', 'としても'],
    explanation:
      'ものの expresses that despite the action, the expected outcome has not materialized.',
  },
  {
    id: 'n2-monono-mc-1',
    pattern: 'ものの',
    type: 'multiple_choice',
    sentence: 'What type of form precedes ものの?',
    english: 'Select what comes directly before ものの.',
    correctAnswer: 'Plain form (verb/adjective)',
    options: [
      'Plain form (verb/adjective)',
      'て-form only',
      'ます-form only',
      'Noun + の',
    ],
    explanation:
      'ものの attaches to the plain form of verbs and adjectives, e.g., 行ったものの, 高いものの.',
  },
  {
    id: 'n2-monono-mc-2',
    pattern: 'ものの',
    type: 'multiple_choice',
    sentence: 'Which expression is closest in meaning to ものの?',
    english: 'Select the synonym.',
    correctAnswer: 'けれども (although)',
    options: ['けれども (although)', 'だから (therefore)', 'それに (moreover)', 'つまり (in other words)'],
    explanation:
      'ものの is a more literary equivalent of けれども, both meaning "although."',
  },

  // からこそ (precisely because)
  {
    id: 'n2-karakoso-fib-1',
    pattern: 'からこそ',
    type: 'fill_in_blank',
    sentence: '努力した＿＿＿、今の成功がある。',
    english: 'It is precisely because I worked hard that I have my current success.',
    correctAnswer: 'からこそ',
    options: ['からこそ', 'からには', 'ものの', 'ばかりか'],
    explanation:
      'からこそ emphasizes that the reason is the essential cause.',
  },
  {
    id: 'n2-karakoso-fib-2',
    pattern: 'からこそ',
    type: 'fill_in_blank',
    sentence: '友達だ＿＿＿、本当のことを言うんだ。',
    english: 'It is precisely because we are friends that I tell you the truth.',
    correctAnswer: 'からこそ',
    options: ['からこそ', 'からには', 'ところで', 'としても'],
    explanation:
      'からこそ stresses that the friendship is the very reason for honesty.',
  },
  {
    id: 'n2-karakoso-fib-3',
    pattern: 'からこそ',
    type: 'fill_in_blank',
    sentence: '日本に住んでいる＿＿＿、日本語を学ぶべきだ。',
    english: 'It is precisely because you live in Japan that you should learn Japanese.',
    correctAnswer: 'からこそ',
    options: ['からこそ', 'からには', 'だけに', 'ことから'],
    explanation:
      'からこそ highlights that living in Japan is the key motivating reason.',
  },
  {
    id: 'n2-karakoso-mc-1',
    pattern: 'からこそ',
    type: 'multiple_choice',
    sentence: 'What does こそ add to から?',
    english: 'Select the nuance こそ provides.',
    correctAnswer: 'Emphatic stress — "precisely because"',
    options: [
      'Emphatic stress — "precisely because"',
      'Negation — "not because"',
      'Uncertainty — "maybe because"',
      'Contrast — "even though because"',
    ],
    explanation:
      'こそ is an emphatic particle; からこそ means "precisely because" or "it is exactly because."',
  },
  {
    id: 'n2-karakoso-mc-2',
    pattern: 'からこそ',
    type: 'multiple_choice',
    sentence: 'Which sentence ending often pairs with からこそ?',
    english: 'Select the common pattern.',
    correctAnswer: 'のだ / んだ (explanatory)',
    options: [
      'のだ / んだ (explanatory)',
      'まい (negative volitional)',
      'べきではない (should not)',
      'かもしれない (might)',
    ],
    explanation:
      'からこそ...のだ/んだ is a common combination to emphatically explain a reason.',
  },

  // ばかりか (not only... but also)
  {
    id: 'n2-bakarika-fib-1',
    pattern: 'ばかりか',
    type: 'fill_in_blank',
    sentence: '彼は英語＿＿＿、フランス語も話せる。',
    english: 'He can speak not only English but also French.',
    correctAnswer: 'ばかりか',
    options: ['ばかりか', 'ものの', 'からこそ', 'どころか'],
    explanation:
      'ばかりか means "not only... but also," listing beyond what is expected.',
  },
  {
    id: 'n2-bakarika-fib-2',
    pattern: 'ばかりか',
    type: 'fill_in_blank',
    sentence: 'あの店は味がいい＿＿＿、値段も安い。',
    english: 'That restaurant not only tastes good but is also inexpensive.',
    correctAnswer: 'ばかりか',
    options: ['ばかりか', 'ものの', 'としても', 'たところで'],
    explanation:
      'ばかりか adds a second positive quality beyond the first.',
  },
  {
    id: 'n2-bakarika-fib-3',
    pattern: 'ばかりか',
    type: 'fill_in_blank',
    sentence: '彼女は歌が上手な＿＿＿、ダンスもプロ級だ。',
    english: 'She is not only good at singing but also at a professional level in dancing.',
    correctAnswer: 'ばかりか',
    options: ['ばかりか', 'ことから', 'だけに', 'にもかかわらず'],
    explanation:
      'ばかりか escalates from one quality to an even more impressive one.',
  },
  {
    id: 'n2-bakarika-mc-1',
    pattern: 'ばかりか',
    type: 'multiple_choice',
    sentence: 'Which particle often appears in the second clause after ばかりか?',
    english: 'Select the common follow-up particle.',
    correctAnswer: 'も (also)',
    options: ['も (also)', 'は (topic)', 'が (but)', 'を (object)'],
    explanation:
      'ばかりか...も is the standard pattern: "not only X but also Y."',
  },
  {
    id: 'n2-bakarika-mc-2',
    pattern: 'ばかりか',
    type: 'multiple_choice',
    sentence: 'Which expression is closest in meaning to ばかりか?',
    english: 'Select the synonym.',
    correctAnswer: 'だけでなく (not only)',
    options: ['だけでなく (not only)', 'しか...ない (only)', 'ところが (however)', 'それなのに (despite that)'],
    explanation:
      'ばかりか and だけでなく both mean "not only... but also," though ばかりか is more emphatic.',
  },

  // どころか (far from / let alone)
  {
    id: 'n2-dokoroka-fib-1',
    pattern: 'どころか',
    type: 'fill_in_blank',
    sentence: '漢字＿＿＿、ひらがなも読めない。',
    english: 'Far from kanji, he cannot even read hiragana.',
    correctAnswer: 'どころか',
    options: ['どころか', 'ばかりか', 'ものの', 'からこそ'],
    explanation:
      'どころか means "far from / let alone," showing the reality is far below expectation.',
  },
  {
    id: 'n2-dokoroka-fib-2',
    pattern: 'どころか',
    type: 'fill_in_blank',
    sentence: '休む＿＿＿、毎日残業している。',
    english: 'Far from resting, I am working overtime every day.',
    correctAnswer: 'どころか',
    options: ['どころか', 'ばかりか', 'としても', 'たところで'],
    explanation:
      'どころか negates the first item and presents a contrasting extreme reality.',
  },
  {
    id: 'n2-dokoroka-fib-3',
    pattern: 'どころか',
    type: 'fill_in_blank',
    sentence: '感謝される＿＿＿、文句を言われた。',
    english: 'Far from being thanked, I was complained to.',
    correctAnswer: 'どころか',
    options: ['どころか', 'にもかかわらず', 'からこそ', 'ものの'],
    explanation:
      'どころか shows the outcome was the opposite of what was expected.',
  },
  {
    id: 'n2-dokoroka-mc-1',
    pattern: 'どころか',
    type: 'multiple_choice',
    sentence: 'How does どころか differ from ばかりか?',
    english: 'Select the best distinction.',
    correctAnswer: 'どころか negates the first item; ばかりか adds to it',
    options: [
      'どころか negates the first item; ばかりか adds to it',
      'They are identical in meaning',
      'ばかりか is more negative than どころか',
      'どころか is used only in casual speech',
    ],
    explanation:
      'どころか says "far from X, actually Y (opposite)," while ばかりか says "not only X, but also Y."',
  },
  {
    id: 'n2-dokoroka-mc-2',
    pattern: 'どころか',
    type: 'multiple_choice',
    sentence: 'What typically follows the second clause after どころか?',
    english: 'Select the common pattern.',
    correctAnswer: 'A statement showing the opposite extreme',
    options: [
      'A statement showing the opposite extreme',
      'A statement of agreement',
      'A polite request',
      'A question to the listener',
    ],
    explanation:
      'After どころか, the second clause presents a reality that is the opposite or far beyond what was stated first.',
  },

  // にもかかわらず (despite / in spite of)
  {
    id: 'n2-nimokakawarazu-fib-1',
    pattern: 'にもかかわらず',
    type: 'fill_in_blank',
    sentence: '雨＿＿＿、試合は予定通り行われた。',
    english: 'Despite the rain, the match was held as scheduled.',
    correctAnswer: 'にもかかわらず',
    options: ['にもかかわらず', 'をめぐって', 'に際して', 'を踏まえて'],
    explanation:
      'にもかかわらず means "despite" and shows something happened contrary to what the condition might suggest.',
  },
  {
    id: 'n2-nimokakawarazu-fib-2',
    pattern: 'にもかかわらず',
    type: 'fill_in_blank',
    sentence: '何度も注意した＿＿＿、彼は同じミスを繰り返す。',
    english: 'Despite being warned many times, he repeats the same mistakes.',
    correctAnswer: 'にもかかわらず',
    options: ['にもかかわらず', 'ものの', 'からこそ', 'ばかりか'],
    explanation:
      'にもかかわらず expresses frustration that warnings did not change the outcome.',
  },
  {
    id: 'n2-nimokakawarazu-fib-3',
    pattern: 'にもかかわらず',
    type: 'fill_in_blank',
    sentence: '体調が悪い＿＿＿、彼女は出勤した。',
    english: 'Despite being in poor health, she went to work.',
    correctAnswer: 'にもかかわらず',
    options: ['にもかかわらず', 'どころか', 'としても', 'たところで'],
    explanation:
      'にもかかわらず highlights perseverance despite an adverse condition.',
  },
  {
    id: 'n2-nimokakawarazu-mc-1',
    pattern: 'にもかかわらず',
    type: 'multiple_choice',
    sentence: 'What type of relationship does にもかかわらず express?',
    english: 'Select the relationship type.',
    correctAnswer: 'Concession — the result contradicts the condition',
    options: [
      'Concession — the result contradicts the condition',
      'Cause and effect',
      'Addition of similar information',
      'Temporal sequence',
    ],
    explanation:
      'にもかかわらず is a concessive conjunction meaning the outcome goes against expectation.',
  },
  {
    id: 'n2-nimokakawarazu-mc-2',
    pattern: 'にもかかわらず',
    type: 'multiple_choice',
    sentence: 'Which forms can precede にもかかわらず?',
    english: 'Select all that apply.',
    correctAnswer: 'Nouns, na-adjectives (with である/な), verbs, i-adjectives',
    options: [
      'Nouns, na-adjectives (with である/な), verbs, i-adjectives',
      'Only nouns',
      'Only verbs in て-form',
      'Only い-adjectives',
    ],
    explanation:
      'にもかかわらず can follow nouns, verbs (plain form), i-adjectives, and na-adjectives.',
  },

  // としても (even if / even assuming)
  {
    id: 'n2-toshitemo-fib-1',
    pattern: 'としても',
    type: 'fill_in_blank',
    sentence: 'たとえ失敗した＿＿＿、後悔はしない。',
    english: 'Even if I fail, I will not have regrets.',
    correctAnswer: 'としても',
    options: ['としても', 'ものの', 'からこそ', 'ばかりか'],
    explanation:
      'としても means "even if" and presents a hypothetical unfavorable scenario.',
  },
  {
    id: 'n2-toshitemo-fib-2',
    pattern: 'としても',
    type: 'fill_in_blank',
    sentence: '仮にお金があった＿＿＿、あの家は買わないだろう。',
    english: 'Even if I hypothetically had money, I probably would not buy that house.',
    correctAnswer: 'としても',
    options: ['としても', 'にもかかわらず', 'どころか', 'たところで'],
    explanation:
      'としても introduces a hypothetical condition that would not change the outcome.',
  },
  {
    id: 'n2-toshitemo-fib-3',
    pattern: 'としても',
    type: 'fill_in_blank',
    sentence: '彼が来る＿＿＿、会議の結果は変わらない。',
    english: 'Even if he comes, the result of the meeting will not change.',
    correctAnswer: 'としても',
    options: ['としても', 'ものの', 'からには', '以上は'],
    explanation:
      'としても shows that the condition would not alter the conclusion.',
  },
  {
    id: 'n2-toshitemo-mc-1',
    pattern: 'としても',
    type: 'multiple_choice',
    sentence: 'What kind of condition does としても typically present?',
    english: 'Select the best description.',
    correctAnswer: 'A hypothetical or counterfactual condition',
    options: [
      'A hypothetical or counterfactual condition',
      'A confirmed fact',
      'A repeated action',
      'A temporal sequence',
    ],
    explanation:
      'としても presents a hypothetical or assumed condition, often one the speaker doubts will happen.',
  },
  {
    id: 'n2-toshitemo-mc-2',
    pattern: 'としても',
    type: 'multiple_choice',
    sentence: 'Which words often appear with としても?',
    english: 'Select common co-occurring words.',
    correctAnswer: 'たとえ / 仮に (even if / hypothetically)',
    options: [
      'たとえ / 仮に (even if / hypothetically)',
      'きっと / 必ず (surely / definitely)',
      'たぶん / おそらく (probably)',
      'すでに / もう (already)',
    ],
    explanation:
      'たとえ...としても and 仮に...としても are standard combinations for hypothetical concessions.',
  },

  // たところで (even if... it won't matter)
  {
    id: 'n2-tatokorode-fib-1',
    pattern: 'たところで',
    type: 'fill_in_blank',
    sentence: '今さら謝った＿＿＿、許してもらえないだろう。',
    english: 'Even if you apologize now, you probably will not be forgiven.',
    correctAnswer: 'ところで',
    options: ['ところで', 'ものの', 'からこそ', 'としても'],
    explanation:
      'たところで expresses futility — even if the action is taken, it will not help.',
  },
  {
    id: 'n2-tatokorode-fib-2',
    pattern: 'たところで',
    type: 'fill_in_blank',
    sentence: '急いだ＿＿＿、もう間に合わない。',
    english: 'Even if you hurry, it is too late already.',
    correctAnswer: 'ところで',
    options: ['ところで', 'ばかりか', 'にもかかわらず', 'どころか'],
    explanation:
      'たところで conveys that the effort would be pointless.',
  },
  {
    id: 'n2-tatokorode-fib-3',
    pattern: 'たところで',
    type: 'fill_in_blank',
    sentence: '文句を言った＿＿＿、状況は変わらない。',
    english: 'Even if you complain, the situation will not change.',
    correctAnswer: 'ところで',
    options: ['ところで', 'からには', '以上は', 'だけに'],
    explanation:
      'たところで shows that complaining would be futile.',
  },
  {
    id: 'n2-tatokorode-mc-1',
    pattern: 'たところで',
    type: 'multiple_choice',
    sentence: 'What nuance does たところで convey?',
    english: 'Select the key nuance.',
    correctAnswer: 'Futility — the action will not produce results',
    options: [
      'Futility — the action will not produce results',
      'Certainty — the action will succeed',
      'Surprise — the result was unexpected',
      'Gratitude — thankful for the action',
    ],
    explanation:
      'たところで expresses that even if you do something, it will be futile or meaningless.',
  },
  {
    id: 'n2-tatokorode-mc-2',
    pattern: 'たところで',
    type: 'multiple_choice',
    sentence: 'What verb form precedes ところで in this pattern?',
    english: 'Select the correct form.',
    correctAnswer: 'Past tense (た-form)',
    options: ['Past tense (た-form)', 'Dictionary form', 'て-form', 'ます-form'],
    explanation:
      'The pattern is た-form + ところで, e.g., 行ったところで, 言ったところで.',
  },

  // ないことには (unless / if... not)
  {
    id: 'n2-naikotoniwa-fib-1',
    pattern: 'ないことには',
    type: 'fill_in_blank',
    sentence: '実際にやってみ＿＿＿、わからない。',
    english: 'Unless you actually try it, you will not know.',
    correctAnswer: 'ないことには',
    options: ['ないことには', 'なければ', 'ものの', 'からこそ'],
    explanation:
      'ないことには means "unless" and emphasizes that the action is a prerequisite.',
  },
  {
    id: 'n2-naikotoniwa-fib-2',
    pattern: 'ないことには',
    type: 'fill_in_blank',
    sentence: '本人に聞か＿＿＿、真実はわからない。',
    english: 'Unless you ask the person themselves, you will not know the truth.',
    correctAnswer: 'ないことには',
    options: ['ないことには', 'ないうちに', 'なくても', 'ないで'],
    explanation:
      'ないことには stresses that asking the person is an essential condition.',
  },
  {
    id: 'n2-naikotoniwa-fib-3',
    pattern: 'ないことには',
    type: 'fill_in_blank',
    sentence: '現地に行か＿＿＿、状況は把握できない。',
    english: 'Unless you go to the site, you cannot grasp the situation.',
    correctAnswer: 'ないことには',
    options: ['ないことには', 'ないまでも', 'ないことに', 'ないために'],
    explanation:
      'ないことには emphasizes going to the site as an indispensable step.',
  },
  {
    id: 'n2-naikotoniwa-mc-1',
    pattern: 'ないことには',
    type: 'multiple_choice',
    sentence: 'What typically follows ないことには in the second clause?',
    english: 'Select the common sentence ending.',
    correctAnswer: 'A negative result (cannot / will not)',
    options: [
      'A negative result (cannot / will not)',
      'A positive result (definitely will)',
      'A question',
      'A command',
    ],
    explanation:
      'ないことには is almost always followed by a negative outcome, emphasizing the prerequisite.',
  },
  {
    id: 'n2-naikotoniwa-mc-2',
    pattern: 'ないことには',
    type: 'multiple_choice',
    sentence: 'How does ないことには compare to なければ?',
    english: 'Select the best comparison.',
    correctAnswer: 'ないことには is more emphatic and literary than なければ',
    options: [
      'ないことには is more emphatic and literary than なければ',
      'They are identical in all contexts',
      'なければ is more formal',
      'ないことには is casual slang',
    ],
    explanation:
      'Both mean "unless," but ないことには is more emphatic and often used in written language.',
  },

  // ===========================================================================
  // DEGREE & EXTENT
  // ===========================================================================
  // ほど...ない (not as... as)
  {
    id: 'n2-hodonai-fib-1',
    pattern: 'ほど...ない',
    type: 'fill_in_blank',
    sentence: '今年の夏は去年＿＿＿暑くない。',
    english: 'This summer is not as hot as last year.',
    correctAnswer: 'ほど',
    options: ['ほど', 'くらい', 'まで', 'より'],
    explanation:
      'ほど...ない means "not as... as" — comparing and saying something falls short.',
  },
  {
    id: 'n2-hodonai-fib-2',
    pattern: 'ほど...ない',
    type: 'fill_in_blank',
    sentence: 'この問題は思った＿＿＿難しくなかった。',
    english: 'This problem was not as difficult as I thought.',
    correctAnswer: 'ほど',
    options: ['ほど', 'だけ', 'まで', 'くらい'],
    explanation:
      'ほど...ない shows the difficulty was less than expected.',
  },
  {
    id: 'n2-hodonai-fib-3',
    pattern: 'ほど...ない',
    type: 'fill_in_blank',
    sentence: '東京は大阪＿＿＿食べ物が安くない。',
    english: 'Tokyo food is not as cheap as Osaka.',
    correctAnswer: 'ほど',
    options: ['ほど', 'より', 'みたいに', 'ぐらい'],
    explanation:
      'ほど...ない compares Tokyo unfavorably to Osaka in terms of food prices.',
  },
  {
    id: 'n2-hodonai-mc-1',
    pattern: 'ほど...ない',
    type: 'multiple_choice',
    sentence: 'What does AはBほど...ない express?',
    english: 'Select the meaning.',
    correctAnswer: 'A is not as [adjective] as B',
    options: [
      'A is not as [adjective] as B',
      'A is more [adjective] than B',
      'A and B are equally [adjective]',
      'Neither A nor B is [adjective]',
    ],
    explanation:
      'AはBほど...ない means A does not reach the degree of B.',
  },
  {
    id: 'n2-hodonai-mc-2',
    pattern: 'ほど...ない',
    type: 'multiple_choice',
    sentence: 'How does ほど...ない relate to より?',
    english: 'Select the correct relationship.',
    correctAnswer: 'AはBほど～ない = BはAより～ (B is more ~ than A)',
    options: [
      'AはBほど～ない = BはAより～ (B is more ~ than A)',
      'They express the same direction of comparison',
      'ほど...ない means "more than"',
      'より is used with negative predicates only',
    ],
    explanation:
      'AはBほど～ない (A is not as ~ as B) is equivalent to BはAより～ (B is more ~ than A).',
  },

  // くらい/ぐらい (to the extent that / about)
  {
    id: 'n2-kurai-fib-1',
    pattern: 'くらい/ぐらい',
    type: 'fill_in_blank',
    sentence: '涙が出る＿＿＿嬉しかった。',
    english: 'I was so happy that tears came out.',
    correctAnswer: 'くらい',
    options: ['くらい', 'ほど', 'まで', 'だけ'],
    explanation:
      'くらい here expresses the degree — "to the extent that tears came out."',
  },
  {
    id: 'n2-kurai-fib-2',
    pattern: 'くらい/ぐらい',
    type: 'fill_in_blank',
    sentence: '死ぬ＿＿＿疲れた。',
    english: 'I am so tired I could die (figuratively).',
    correctAnswer: 'ぐらい',
    options: ['ぐらい', 'だけ', 'まで', 'より'],
    explanation:
      'ぐらい expresses hyperbolic degree — "tired to the extent of dying."',
  },
  {
    id: 'n2-kurai-fib-3',
    pattern: 'くらい/ぐらい',
    type: 'fill_in_blank',
    sentence: '子供でもわかる＿＿＿簡単な問題だ。',
    english: 'It is a problem so easy that even a child could understand it.',
    correctAnswer: 'くらい',
    options: ['くらい', 'ほど', 'より', 'まで'],
    explanation:
      'くらい shows the degree of simplicity by comparison to a child understanding.',
  },
  {
    id: 'n2-kurai-mc-1',
    pattern: 'くらい/ぐらい',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of くらい/ぐらい?',
    english: 'Select the correct pair.',
    correctAnswer: 'Approximation ("about") and degree ("to the extent that")',
    options: [
      'Approximation ("about") and degree ("to the extent that")',
      'Comparison ("more than") and contrast ("but")',
      'Cause ("because") and result ("therefore")',
      'Time ("when") and place ("where")',
    ],
    explanation:
      'くらい/ぐらい indicates either an approximate amount or an extreme degree.',
  },
  {
    id: 'n2-kurai-mc-2',
    pattern: 'くらい/ぐらい',
    type: 'multiple_choice',
    sentence: 'Are くらい and ぐらい interchangeable?',
    english: 'Select the best answer.',
    correctAnswer: 'Yes, they are variants with no difference in meaning',
    options: [
      'Yes, they are variants with no difference in meaning',
      'No, くらい is formal and ぐらい is casual',
      'No, they have completely different meanings',
      'くらい is used only with numbers',
    ],
    explanation:
      'くらい and ぐらい are interchangeable variants; the choice is a matter of personal preference.',
  },

  // に至る (to reach / to come to)
  {
    id: 'n2-niitaru-fib-1',
    pattern: 'に至る',
    type: 'fill_in_blank',
    sentence: '長い交渉の末、合意＿＿＿。',
    english: 'After long negotiations, we reached an agreement.',
    correctAnswer: 'に至った',
    options: ['に至った', 'をめぐった', 'に際した', 'を踏まえた'],
    explanation:
      'に至る means "to reach / arrive at" and is used for significant outcomes.',
  },
  {
    id: 'n2-niitaru-fib-2',
    pattern: 'に至る',
    type: 'fill_in_blank',
    sentence: '事態は深刻な状況＿＿＿。',
    english: 'The situation has reached a serious state.',
    correctAnswer: 'に至っている',
    options: ['に至っている', 'をめぐっている', 'に先立っている', 'を踏まえている'],
    explanation:
      'に至っている expresses that a situation has progressed to a certain point.',
  },
  {
    id: 'n2-niitaru-fib-3',
    pattern: 'に至る',
    type: 'fill_in_blank',
    sentence: '研究を始めてから発見＿＿＿経緯を説明した。',
    english: 'He explained the process from starting research to reaching the discovery.',
    correctAnswer: 'に至る',
    options: ['に至る', 'をめぐる', 'に際する', 'を踏まえる'],
    explanation:
      'に至る in pre-nominal form modifies 経緯 (process), showing the path to the discovery.',
  },
  {
    id: 'n2-niitaru-mc-1',
    pattern: 'に至る',
    type: 'multiple_choice',
    sentence: 'What does に至るまで mean compared to に至る alone?',
    english: 'Select the distinction.',
    correctAnswer: 'に至るまで emphasizes range/extent; に至る emphasizes reaching a point',
    options: [
      'に至るまで emphasizes range/extent; に至る emphasizes reaching a point',
      'They are identical',
      'に至るまで means "before reaching"',
      'に至る is always negative',
    ],
    explanation:
      'に至る means "to reach/arrive at," while に至るまで means "all the way to / extending even to."',
  },
  {
    id: 'n2-niitaru-mc-2',
    pattern: 'に至る',
    type: 'multiple_choice',
    sentence: 'What is a common fixed expression using に至る?',
    english: 'Select the common phrase.',
    correctAnswer: '...に至った経緯 (the process that led to...)',
    options: [
      '...に至った経緯 (the process that led to...)',
      '...に至る前に (before reaching...)',
      '...に至るほど (to the extent of reaching...)',
      '...に至ってから (after reaching...)',
    ],
    explanation:
      'に至った経緯 is a common expression meaning "the circumstances/process leading to."',
  },

  // に限らず (not limited to)
  {
    id: 'n2-nikagirazu-fib-1',
    pattern: 'に限らず',
    type: 'fill_in_blank',
    sentence: '日本語＿＿＿、どんな言語でも毎日の練習が大切だ。',
    english: 'Not limited to Japanese, daily practice is important for any language.',
    correctAnswer: 'に限らず',
    options: ['に限らず', 'ばかりか', 'どころか', 'をめぐって'],
    explanation:
      'に限らず means "not limited to" and broadens the scope beyond one example.',
  },
  {
    id: 'n2-nikagirazu-fib-2',
    pattern: 'に限らず',
    type: 'fill_in_blank',
    sentence: '子供＿＿＿、大人もこの映画を楽しめる。',
    english: 'Not limited to children, adults can also enjoy this movie.',
    correctAnswer: 'に限らず',
    options: ['に限らず', 'ものの', 'からこそ', 'に際して'],
    explanation:
      'に限らず broadens the audience from just children to include adults.',
  },
  {
    id: 'n2-nikagirazu-fib-3',
    pattern: 'に限らず',
    type: 'fill_in_blank',
    sentence: '週末＿＿＿、平日も混んでいる。',
    english: 'Not limited to weekends, it is crowded on weekdays too.',
    correctAnswer: 'に限らず',
    options: ['に限らず', 'はもとより', 'のみならず', 'をもって'],
    explanation:
      'に限らず shows that the crowdedness extends beyond just weekends.',
  },
  {
    id: 'n2-nikagirazu-mc-1',
    pattern: 'に限らず',
    type: 'multiple_choice',
    sentence: 'What does に限らず communicate?',
    english: 'Select the meaning.',
    correctAnswer: '"Not limited to X" — the statement applies more broadly',
    options: [
      '"Not limited to X" — the statement applies more broadly',
      '"Limited to X only"',
      '"Because of X"',
      '"In spite of X"',
    ],
    explanation:
      'に限らず means "not limited to" and extends the scope of the statement.',
  },
  {
    id: 'n2-nikagirazu-mc-2',
    pattern: 'に限らず',
    type: 'multiple_choice',
    sentence: 'Which expression is similar to に限らず?',
    english: 'Select the closest synonym.',
    correctAnswer: 'だけでなく (not only)',
    options: ['だけでなく (not only)', 'だけで (only with)', 'しか...ない (nothing but)', 'ばかり (only)'],
    explanation:
      'に限らず and だけでなく both convey "not only X but also others."',
  },

  // はもとより (not only... but also — formal)
  {
    id: 'n2-wamotoyori-fib-1',
    pattern: 'はもとより',
    type: 'fill_in_blank',
    sentence: '国内＿＿＿、海外でも人気がある。',
    english: 'It is popular not only domestically but also overseas.',
    correctAnswer: 'はもとより',
    options: ['はもとより', 'ばかりか', 'どころか', 'に限らず'],
    explanation:
      'はもとより is a formal way to say "not only... but also," treating the first item as obvious.',
  },
  {
    id: 'n2-wamotoyori-fib-2',
    pattern: 'はもとより',
    type: 'fill_in_blank',
    sentence: '英語＿＿＿、中国語やスペイン語も話せる。',
    english: 'Not only English (which goes without saying), but she can also speak Chinese and Spanish.',
    correctAnswer: 'はもとより',
    options: ['はもとより', 'のみならず', 'ものの', 'からこそ'],
    explanation:
      'はもとより implies that the first item is a given, and additional items are noteworthy.',
  },
  {
    id: 'n2-wamotoyori-fib-3',
    pattern: 'はもとより',
    type: 'fill_in_blank',
    sentence: '味＿＿＿、見た目も美しい料理だ。',
    english: 'Not only the taste (naturally) but the appearance is also beautiful.',
    correctAnswer: 'はもとより',
    options: ['はもとより', 'に限らず', 'をめぐって', 'を踏まえて'],
    explanation:
      'はもとより treats good taste as expected and highlights the visual beauty as additional.',
  },
  {
    id: 'n2-wamotoyori-mc-1',
    pattern: 'はもとより',
    type: 'multiple_choice',
    sentence: 'What nuance does はもとより carry that ばかりか does not?',
    english: 'Select the distinguishing nuance.',
    correctAnswer: 'The first item is treated as obvious or goes without saying',
    options: [
      'The first item is treated as obvious or goes without saying',
      'The first item is denied',
      'Both items are negative',
      'It implies surprise at the first item',
    ],
    explanation:
      'はもとより implies "X is a given/obvious; in addition, Y too," whereas ばかりか simply adds.',
  },
  {
    id: 'n2-wamotoyori-mc-2',
    pattern: 'はもとより',
    type: 'multiple_choice',
    sentence: 'In which register is はもとより typically used?',
    english: 'Select the appropriate register.',
    correctAnswer: 'Formal / written language',
    options: [
      'Formal / written language',
      'Casual conversation',
      'Children\'s speech',
      'Texting / SNS language',
    ],
    explanation:
      'はもとより is a formal, literary expression common in writing and speeches.',
  },

  // のみならず (not only... but also — literary)
  {
    id: 'n2-nominarazu-fib-1',
    pattern: 'のみならず',
    type: 'fill_in_blank',
    sentence: 'この問題は経済面＿＿＿、社会面にも影響を与えている。',
    english: 'This problem affects not only the economic aspect but also the social aspect.',
    correctAnswer: 'のみならず',
    options: ['のみならず', 'ばかりか', 'どころか', 'ものの'],
    explanation:
      'のみならず is a literary "not only... but also" expression.',
  },
  {
    id: 'n2-nominarazu-fib-2',
    pattern: 'のみならず',
    type: 'fill_in_blank',
    sentence: '彼は学業＿＿＿、スポーツでも優秀な成績を収めている。',
    english: 'He achieves excellent results not only in academics but also in sports.',
    correctAnswer: 'のみならず',
    options: ['のみならず', 'はもとより', 'に限らず', 'からこそ'],
    explanation:
      'のみならず extends from one domain to another in a formal register.',
  },
  {
    id: 'n2-nominarazu-fib-3',
    pattern: 'のみならず',
    type: 'fill_in_blank',
    sentence: '環境汚染は人間＿＿＿、動植物にも深刻な影響を及ぼす。',
    english: 'Environmental pollution has serious effects not only on humans but also on animals and plants.',
    correctAnswer: 'のみならず',
    options: ['のみならず', 'ばかりか', 'をめぐって', 'に際して'],
    explanation:
      'のみならず broadens the scope of impact from humans to all living things.',
  },
  {
    id: 'n2-nominarazu-mc-1',
    pattern: 'のみならず',
    type: 'multiple_choice',
    sentence: 'What is のみ equivalent to in modern Japanese?',
    english: 'Select the modern equivalent.',
    correctAnswer: 'だけ (only)',
    options: ['だけ (only)', 'ほど (to the extent)', 'まで (until)', 'より (than)'],
    explanation:
      'のみ is the literary equivalent of だけ, so のみならず = だけでなく.',
  },
  {
    id: 'n2-nominarazu-mc-2',
    pattern: 'のみならず',
    type: 'multiple_choice',
    sentence: 'Rank these from most formal to least formal: ばかりか, のみならず, だけでなく.',
    english: 'Select the correct order.',
    correctAnswer: 'のみならず > ばかりか > だけでなく',
    options: [
      'のみならず > ばかりか > だけでなく',
      'だけでなく > ばかりか > のみならず',
      'ばかりか > のみならず > だけでなく',
      'All three are equally formal',
    ],
    explanation:
      'のみならず is the most literary/formal, followed by ばかりか, then the conversational だけでなく.',
  },

  // に至っては (when it comes to — extreme case)
  {
    id: 'n2-niitatteha-fib-1',
    pattern: 'に至っては',
    type: 'fill_in_blank',
    sentence: '兄は成績が悪いが、弟＿＿＿、全科目赤点だ。',
    english: 'The older brother has bad grades, but when it comes to the younger brother, he has failing marks in all subjects.',
    correctAnswer: 'に至っては',
    options: ['に至っては', 'に限らず', 'はもとより', 'のみならず'],
    explanation:
      'に至っては singles out an extreme case — the younger brother is even worse.',
  },
  {
    id: 'n2-niitatteha-fib-2',
    pattern: 'に至っては',
    type: 'fill_in_blank',
    sentence: '社員の遅刻が多いが、部長＿＿＿、会議に一度も出席していない。',
    english: 'Many employees are late, but when it comes to the department head, he has not attended a single meeting.',
    correctAnswer: 'に至っては',
    options: ['に至っては', 'ばかりか', 'どころか', 'ものの'],
    explanation:
      'に至っては highlights the department head as the most extreme example.',
  },
  {
    id: 'n2-niitatteha-fib-3',
    pattern: 'に至っては',
    type: 'fill_in_blank',
    sentence: 'どの料理もまずかったが、デザート＿＿＿、食べられたものではなかった。',
    english: 'All the dishes were bad, but when it comes to the dessert, it was inedible.',
    correctAnswer: 'に至っては',
    options: ['に至っては', 'からこそ', 'としても', 'にもかかわらず'],
    explanation:
      'に至っては picks out the dessert as the worst extreme of an already bad situation.',
  },
  {
    id: 'n2-niitatteha-mc-1',
    pattern: 'に至っては',
    type: 'multiple_choice',
    sentence: 'What function does に至っては serve?',
    english: 'Select the best description.',
    correctAnswer: 'Highlights an extreme example, usually in a negative context',
    options: [
      'Highlights an extreme example, usually in a negative context',
      'Describes a positive outcome',
      'Introduces a new unrelated topic',
      'Marks a temporal sequence',
    ],
    explanation:
      'に至っては singles out an extreme case within an already problematic situation.',
  },
  {
    id: 'n2-niitatteha-mc-2',
    pattern: 'に至っては',
    type: 'multiple_choice',
    sentence: 'Is に至っては typically used in positive or negative contexts?',
    english: 'Select the typical usage.',
    correctAnswer: 'Predominantly negative contexts',
    options: [
      'Predominantly negative contexts',
      'Predominantly positive contexts',
      'Equally positive and negative',
      'Only neutral contexts',
    ],
    explanation:
      'に至っては almost always appears in negative contexts, highlighting the worst example.',
  },

  // ===========================================================================
  // ASPECT & TENDENCY
  // ===========================================================================
  // つつある (in the process of / gradually)
  {
    id: 'n2-tsutsuaru-fib-1',
    pattern: 'つつある',
    type: 'fill_in_blank',
    sentence: '環境問題への関心が高まり＿＿＿。',
    english: 'Interest in environmental issues is gradually increasing.',
    correctAnswer: 'つつある',
    options: ['つつある', 'がたい', 'かねない', '一方だ'],
    explanation:
      'つつある expresses an ongoing gradual change — interest is in the process of rising.',
  },
  {
    id: 'n2-tsutsuaru-fib-2',
    pattern: 'つつある',
    type: 'fill_in_blank',
    sentence: '伝統的な文化が失われ＿＿＿。',
    english: 'Traditional culture is gradually being lost.',
    correctAnswer: 'つつある',
    options: ['つつある', '得る', '抜く', 'かねる'],
    explanation:
      'つつある shows a process of gradual change — the culture is progressively disappearing.',
  },
  {
    id: 'n2-tsutsuaru-fib-3',
    pattern: 'つつある',
    type: 'fill_in_blank',
    sentence: '景気は回復し＿＿＿と言われている。',
    english: 'It is said that the economy is in the process of recovering.',
    correctAnswer: 'つつある',
    options: ['つつある', '一方だ', 'がたい', 'かねない'],
    explanation:
      'つつある indicates the recovery is an ongoing, gradual process.',
  },
  {
    id: 'n2-tsutsuaru-mc-1',
    pattern: 'つつある',
    type: 'multiple_choice',
    sentence: 'What verb form precedes つつある?',
    english: 'Select the correct form.',
    correctAnswer: 'Verb stem (masu-stem)',
    options: ['Verb stem (masu-stem)', 'Dictionary form', 'て-form', 'た-form'],
    explanation:
      'つつある attaches to the verb stem (masu-stem), e.g., 変わり + つつある.',
  },
  {
    id: 'n2-tsutsuaru-mc-2',
    pattern: 'つつある',
    type: 'multiple_choice',
    sentence: 'How does つつある differ from ている?',
    english: 'Select the key difference.',
    correctAnswer: 'つつある emphasizes gradual change; ている is general progressive/state',
    options: [
      'つつある emphasizes gradual change; ている is general progressive/state',
      'They are identical in meaning',
      'ている is more formal than つつある',
      'つつある is used for completed actions',
    ],
    explanation:
      'つつある specifically highlights a gradual, ongoing change, whereas ている is broader.',
  },

  // 一方だ (continue to / keep on — one direction)
  {
    id: 'n2-ippoudah-fib-1',
    pattern: '一方だ',
    type: 'fill_in_blank',
    sentence: '物価は上がる＿＿＿。',
    english: 'Prices keep going up (and show no sign of stopping).',
    correctAnswer: '一方だ',
    options: ['一方だ', 'つつある', 'がたい', 'かねない'],
    explanation:
      '一方だ means the trend continues in one direction without reversal.',
  },
  {
    id: 'n2-ippoudah-fib-2',
    pattern: '一方だ',
    type: 'fill_in_blank',
    sentence: '地方の人口は減る＿＿＿。',
    english: 'The rural population keeps decreasing.',
    correctAnswer: '一方だ',
    options: ['一方だ', 'つつある', '得る', '抜く'],
    explanation:
      '一方だ emphasizes a unidirectional trend of decline.',
  },
  {
    id: 'n2-ippoudah-fib-3',
    pattern: '一方だ',
    type: 'fill_in_blank',
    sentence: '彼の借金は増える＿＿＿。',
    english: 'His debt keeps increasing.',
    correctAnswer: '一方だ',
    options: ['一方だ', 'かねない', 'がたい', 'つつある'],
    explanation:
      '一方だ shows the debt is growing without any sign of reversal.',
  },
  {
    id: 'n2-ippoudah-mc-1',
    pattern: '一方だ',
    type: 'multiple_choice',
    sentence: 'What verb form precedes 一方だ?',
    english: 'Select the correct form.',
    correctAnswer: 'Dictionary form (e.g., 増える一方だ)',
    options: [
      'Dictionary form (e.g., 増える一方だ)',
      'た-form (e.g., 増えた一方だ)',
      'て-form (e.g., 増えて一方だ)',
      'Verb stem (e.g., 増え一方だ)',
    ],
    explanation:
      '一方だ follows the dictionary form of the verb.',
  },
  {
    id: 'n2-ippoudah-mc-2',
    pattern: '一方だ',
    type: 'multiple_choice',
    sentence: 'What connotation does 一方だ typically carry?',
    english: 'Select the typical nuance.',
    correctAnswer: 'Negative or concerning — the trend is worsening',
    options: [
      'Negative or concerning — the trend is worsening',
      'Always positive — things are improving',
      'Neutral with no emotional connotation',
      'Humorous or lighthearted',
    ],
    explanation:
      '一方だ is most often used for negative, worrying trends that keep getting worse.',
  },

  // ===========================================================================
  // POTENTIAL & DIFFICULTY
  // ===========================================================================
  // がたい (difficult to / hard to)
  {
    id: 'n2-gatai-fib-1',
    pattern: 'がたい',
    type: 'fill_in_blank',
    sentence: '彼の行動は理解し＿＿＿。',
    english: 'His behavior is difficult to understand.',
    correctAnswer: 'がたい',
    options: ['がたい', 'かねる', 'かねない', '得る'],
    explanation:
      'がたい means "difficult to" and expresses that the action is nearly impossible.',
  },
  {
    id: 'n2-gatai-fib-2',
    pattern: 'がたい',
    type: 'fill_in_blank',
    sentence: 'あの景色は忘れ＿＿＿。',
    english: 'That scenery is hard to forget.',
    correctAnswer: 'がたい',
    options: ['がたい', 'かねる', '得ない', '抜く'],
    explanation:
      'がたい shows the scenery made such a strong impression that forgetting it is nearly impossible.',
  },
  {
    id: 'n2-gatai-fib-3',
    pattern: 'がたい',
    type: 'fill_in_blank',
    sentence: 'その話は信じ＿＿＿。',
    english: 'That story is hard to believe.',
    correctAnswer: 'がたい',
    options: ['がたい', 'かねる', 'かねない', '得る'],
    explanation:
      'がたい conveys that the story is so implausible it is nearly impossible to believe.',
  },
  {
    id: 'n2-gatai-mc-1',
    pattern: 'がたい',
    type: 'multiple_choice',
    sentence: 'What verb form precedes がたい?',
    english: 'Select the correct form.',
    correctAnswer: 'Verb stem (masu-stem)',
    options: ['Verb stem (masu-stem)', 'Dictionary form', 'て-form', 'た-form'],
    explanation:
      'がたい attaches to the verb stem, e.g., 理解し + がたい, 信じ + がたい.',
  },
  {
    id: 'n2-gatai-mc-2',
    pattern: 'がたい',
    type: 'multiple_choice',
    sentence: 'How does がたい differ from にくい?',
    english: 'Select the best distinction.',
    correctAnswer: 'がたい means nearly impossible; にくい means simply difficult',
    options: [
      'がたい means nearly impossible; にくい means simply difficult',
      'They are identical in meaning',
      'にくい is more formal',
      'がたい is used for physical actions only',
    ],
    explanation:
      'がたい implies something is psychologically/emotionally almost impossible, while にくい is general difficulty.',
  },

  // 得る/得ない (can / cannot — possibility)
  {
    id: 'n2-eru-fib-1',
    pattern: '得る/得ない',
    type: 'fill_in_blank',
    sentence: 'そのようなことは起こり＿＿＿。',
    english: 'Such a thing can happen.',
    correctAnswer: '得る',
    options: ['得る', 'がたい', 'かねる', '抜く'],
    explanation:
      '得る means "can / is possible" and indicates something is within the realm of possibility.',
  },
  {
    id: 'n2-eru-fib-2',
    pattern: '得る/得ない',
    type: 'fill_in_blank',
    sentence: 'この計画が失敗することはあり＿＿＿。',
    english: 'It is impossible that this plan will fail. (It cannot fail.)',
    correctAnswer: '得ない',
    options: ['得ない', 'がたい', 'かねない', 'かねる'],
    explanation:
      '得ない means "cannot / is impossible" — the speaker strongly denies the possibility.',
  },
  {
    id: 'n2-eru-fib-3',
    pattern: '得る/得ない',
    type: 'fill_in_blank',
    sentence: '誰にでも間違いは起こり＿＿＿ことだ。',
    english: 'Mistakes are something that can happen to anyone.',
    correctAnswer: '得る',
    options: ['得る', 'かねる', 'がたい', '抜く'],
    explanation:
      '得る shows that mistakes are a possible occurrence for everyone.',
  },
  {
    id: 'n2-eru-mc-1',
    pattern: '得る/得ない',
    type: 'multiple_choice',
    sentence: 'How is 得る pronounced when attached to a verb stem?',
    english: 'Select the correct pronunciation(s).',
    correctAnswer: 'Both える and うる are acceptable',
    options: [
      'Both える and うる are acceptable',
      'Only える',
      'Only うる',
      'Only とくる',
    ],
    explanation:
      '得る can be read as either える or うる when used as a suffix, though うる is more literary.',
  },
  {
    id: 'n2-eru-mc-2',
    pattern: '得る/得ない',
    type: 'multiple_choice',
    sentence: 'What is the negative form: える or えない?',
    english: 'Select the correct negative.',
    correctAnswer: '得ない (えない) — only えない, not うらない',
    options: [
      '得ない (えない) — only えない, not うらない',
      '得ない (うらない)',
      '得ず (えず) only',
      '得ぬ (えぬ) only',
    ],
    explanation:
      'The negative form is always えない, never うらない. The うる reading exists only for the affirmative.',
  },

  // かねる (cannot bring oneself to / find it difficult to)
  {
    id: 'n2-kaneru-fib-1',
    pattern: 'かねる',
    type: 'fill_in_blank',
    sentence: 'その件については、お答えし＿＿＿。',
    english: 'Regarding that matter, I am unable to answer.',
    correctAnswer: 'かねます',
    options: ['かねます', 'がたいです', '得ません', 'かねません'],
    explanation:
      'かねる is a polite way to decline — "I find it difficult to answer."',
  },
  {
    id: 'n2-kaneru-fib-2',
    pattern: 'かねる',
    type: 'fill_in_blank',
    sentence: 'このご要望には応じ＿＿＿。',
    english: 'We are unable to comply with this request.',
    correctAnswer: 'かねます',
    options: ['かねます', 'がたいです', 'かねません', '得ます'],
    explanation:
      'かねます is used in business/formal settings to politely refuse.',
  },
  {
    id: 'n2-kaneru-fib-3',
    pattern: 'かねる',
    type: 'fill_in_blank',
    sentence: 'その提案には賛成し＿＿＿。',
    english: 'I cannot bring myself to agree with that proposal.',
    correctAnswer: 'かねる',
    options: ['かねる', 'がたい', 'かねない', '得ない'],
    explanation:
      'かねる expresses reluctance or inability to agree due to personal reservations.',
  },
  {
    id: 'n2-kaneru-mc-1',
    pattern: 'かねる',
    type: 'multiple_choice',
    sentence: 'In what context is かねる most commonly used?',
    english: 'Select the typical usage.',
    correctAnswer: 'Polite refusals in business or formal situations',
    options: [
      'Polite refusals in business or formal situations',
      'Casual conversation among friends',
      'Expressing happiness',
      'Describing physical ability',
    ],
    explanation:
      'かねる is a standard business/formal expression for politely declining or refusing.',
  },
  {
    id: 'n2-kaneru-mc-2',
    pattern: 'かねる',
    type: 'multiple_choice',
    sentence: 'How does かねる differ from かねない?',
    english: 'Select the correct distinction.',
    correctAnswer: 'かねる = cannot do; かねない = might (negative possibility becomes a warning)',
    options: [
      'かねる = cannot do; かねない = might (negative possibility becomes a warning)',
      'They are the same meaning',
      'かねない = cannot do; かねる = might',
      'Both express refusal',
    ],
    explanation:
      'かねる means "cannot / find it hard to," while かねない means "might / could possibly" (a warning).',
  },

  // かねない (might / could possibly — warning)
  {
    id: 'n2-kanenai-fib-1',
    pattern: 'かねない',
    type: 'fill_in_blank',
    sentence: 'この状態が続くと、大きな事故になり＿＿＿。',
    english: 'If this condition continues, it could lead to a major accident.',
    correctAnswer: 'かねない',
    options: ['かねない', 'かねる', 'がたい', '得ない'],
    explanation:
      'かねない expresses a warning — there is a real possibility of a bad outcome.',
  },
  {
    id: 'n2-kanenai-fib-2',
    pattern: 'かねない',
    type: 'fill_in_blank',
    sentence: '無理なダイエットは健康を害し＿＿＿。',
    english: 'Extreme dieting could harm your health.',
    correctAnswer: 'かねない',
    options: ['かねない', 'かねる', '得る', 'がたい'],
    explanation:
      'かねない warns that unhealthy dieting has the potential to cause harm.',
  },
  {
    id: 'n2-kanenai-fib-3',
    pattern: 'かねない',
    type: 'fill_in_blank',
    sentence: 'そんな発言は誤解を招き＿＿＿。',
    english: 'Such a remark could invite misunderstanding.',
    correctAnswer: 'かねない',
    options: ['かねない', 'かねる', '抜く', 'がたい'],
    explanation:
      'かねない warns about the potential negative consequence of the remark.',
  },
  {
    id: 'n2-kanenai-mc-1',
    pattern: 'かねない',
    type: 'multiple_choice',
    sentence: 'What kind of outcomes does かねない typically warn about?',
    english: 'Select the typical outcome.',
    correctAnswer: 'Negative or undesirable outcomes',
    options: [
      'Negative or undesirable outcomes',
      'Positive outcomes',
      'Neutral outcomes',
      'Past completed events',
    ],
    explanation:
      'かねない is almost exclusively used to warn about negative possibilities.',
  },
  {
    id: 'n2-kanenai-mc-2',
    pattern: 'かねない',
    type: 'multiple_choice',
    sentence: 'What is the literal logic behind かねない meaning "might"?',
    english: 'Select the explanation.',
    correctAnswer: '"Cannot not do" = double negative = "could possibly do"',
    options: [
      '"Cannot not do" = double negative = "could possibly do"',
      '"Definitely will do"',
      '"Refuses to do"',
      '"Is unable to do"',
    ],
    explanation:
      'かねない literally means "cannot fail to" — one cannot rule out the possibility, hence "might."',
  },

  // 抜く (to do thoroughly / to the very end)
  {
    id: 'n2-nuku-fib-1',
    pattern: '抜く',
    type: 'fill_in_blank',
    sentence: 'マラソンを最後まで走り＿＿＿。',
    english: 'I ran the marathon all the way to the end.',
    correctAnswer: '抜いた',
    options: ['抜いた', '得た', 'かねた', 'がたかった'],
    explanation:
      '抜く means "to do something thoroughly to completion" — finishing the entire marathon.',
  },
  {
    id: 'n2-nuku-fib-2',
    pattern: '抜く',
    type: 'fill_in_blank',
    sentence: '彼は困難な状況を耐え＿＿＿。',
    english: 'He endured the difficult situation to the very end.',
    correctAnswer: '抜いた',
    options: ['抜いた', 'かねた', '得た', 'がたかった'],
    explanation:
      '抜く emphasizes perseverance through the entire ordeal.',
  },
  {
    id: 'n2-nuku-fib-3',
    pattern: '抜く',
    type: 'fill_in_blank',
    sentence: 'この問題について考え＿＿＿末に、決断した。',
    english: 'After thinking it through completely, I made a decision.',
    correctAnswer: '抜いた',
    options: ['抜いた', '得た', 'かねた', 'がたかった'],
    explanation:
      '抜く shows exhaustive thinking before reaching the decision.',
  },
  {
    id: 'n2-nuku-mc-1',
    pattern: '抜く',
    type: 'multiple_choice',
    sentence: 'What verb form precedes 抜く?',
    english: 'Select the correct form.',
    correctAnswer: 'Verb stem (masu-stem)',
    options: ['Verb stem (masu-stem)', 'Dictionary form', 'て-form', 'た-form'],
    explanation:
      '抜く attaches to the verb stem, e.g., 走り + 抜く, 考え + 抜く.',
  },
  {
    id: 'n2-nuku-mc-2',
    pattern: '抜く',
    type: 'multiple_choice',
    sentence: 'What nuance does 抜く add to a verb?',
    english: 'Select the best description.',
    correctAnswer: 'Doing something completely, thoroughly, to the very end',
    options: [
      'Doing something completely, thoroughly, to the very end',
      'Starting to do something',
      'Doing something accidentally',
      'Doing something halfway',
    ],
    explanation:
      '抜く as a compound verb suffix conveys thoroughness and completion against difficulty.',
  },

  // ===========================================================================
  // OBLIGATION & DETERMINATION
  // ===========================================================================
  // 以上は (since / now that — with obligation)
  {
    id: 'n2-ijouha-fib-1',
    pattern: '以上は',
    type: 'fill_in_blank',
    sentence: '約束した＿＿＿、守らなければならない。',
    english: 'Since I made a promise, I must keep it.',
    correctAnswer: '以上は',
    options: ['以上は', 'からには', '上は', 'ものの'],
    explanation:
      '以上は means "since / now that" and carries a strong sense of obligation.',
  },
  {
    id: 'n2-ijouha-fib-2',
    pattern: '以上は',
    type: 'fill_in_blank',
    sentence: '引き受けた＿＿＿、最後まで責任を持つ。',
    english: 'Since I have taken it on, I will take responsibility until the end.',
    correctAnswer: '以上は',
    options: ['以上は', 'ものの', 'からこそ', 'としても'],
    explanation:
      '以上は conveys that accepting the responsibility creates an obligation to follow through.',
  },
  {
    id: 'n2-ijouha-fib-3',
    pattern: '以上は',
    type: 'fill_in_blank',
    sentence: '試験を受ける＿＿＿、合格を目指すべきだ。',
    english: 'Since you are taking the exam, you should aim to pass.',
    correctAnswer: '以上は',
    options: ['以上は', 'ばかりか', 'どころか', 'たところで'],
    explanation:
      '以上は establishes the exam as a given condition that demands effort.',
  },
  {
    id: 'n2-ijouha-mc-1',
    pattern: '以上は',
    type: 'multiple_choice',
    sentence: 'What typically follows 以上は in the second clause?',
    english: 'Select the common pattern.',
    correctAnswer: 'An expression of obligation or determination (must / should / will)',
    options: [
      'An expression of obligation or determination (must / should / will)',
      'A casual suggestion',
      'A question',
      'An expression of uncertainty',
    ],
    explanation:
      '以上は is typically followed by expressions of duty, obligation, or strong resolve.',
  },
  {
    id: 'n2-ijouha-mc-2',
    pattern: '以上は',
    type: 'multiple_choice',
    sentence: 'Which expressions are near-synonyms of 以上は?',
    english: 'Select the closest synonyms.',
    correctAnswer: 'からには and 上は',
    options: ['からには and 上は', 'ものの and ところで', 'ばかりか and どころか', 'に際して and にあたって'],
    explanation:
      '以上は, からには, and 上は all mean "since / now that" with an obligation nuance.',
  },

  // 上は (since / now that — determination)
  {
    id: 'n2-ueha-fib-1',
    pattern: '上は',
    type: 'fill_in_blank',
    sentence: 'こうなった＿＿＿、覚悟を決めるしかない。',
    english: 'Now that things have come to this, there is no choice but to steel oneself.',
    correctAnswer: '上は',
    options: ['上は', '以上は', 'からには', 'ものの'],
    explanation:
      '上は means "now that" and expresses determination in the face of a given situation.',
  },
  {
    id: 'n2-ueha-fib-2',
    pattern: '上は',
    type: 'fill_in_blank',
    sentence: '会社を辞めると決めた＿＿＿、後悔しない。',
    english: 'Now that I have decided to quit the company, I will not have regrets.',
    correctAnswer: '上は',
    options: ['上は', 'からこそ', 'ばかりか', 'どころか'],
    explanation:
      '上は conveys strong determination following a significant decision.',
  },
  {
    id: 'n2-ueha-fib-3',
    pattern: '上は',
    type: 'fill_in_blank',
    sentence: '留学する＿＿＿、しっかり勉強するつもりだ。',
    english: 'Now that I am going to study abroad, I intend to study hard.',
    correctAnswer: '上は',
    options: ['上は', 'としても', 'たところで', 'にもかかわらず'],
    explanation:
      '上は establishes the study abroad decision as the basis for strong resolve.',
  },
  {
    id: 'n2-ueha-mc-1',
    pattern: '上は',
    type: 'multiple_choice',
    sentence: 'How does 上は compare to 以上は?',
    english: 'Select the best comparison.',
    correctAnswer: 'They are nearly identical; 上は is slightly more literary',
    options: [
      'They are nearly identical; 上は is slightly more literary',
      '上は is casual; 以上は is formal',
      'They have opposite meanings',
      '上は expresses doubt; 以上は expresses certainty',
    ],
    explanation:
      '上は and 以上は are very similar, both meaning "since/now that" with obligation. 上は is slightly more literary.',
  },
  {
    id: 'n2-ueha-mc-2',
    pattern: '上は',
    type: 'multiple_choice',
    sentence: 'What verb form typically precedes 上は?',
    english: 'Select the correct form.',
    correctAnswer: 'Plain form (past or non-past)',
    options: ['Plain form (past or non-past)', 'て-form only', 'ます-form only', 'Passive form only'],
    explanation:
      '上は follows verbs in plain form, e.g., やると決めた上は, 留学する上は.',
  },

  // からには (since / now that — with determination)
  {
    id: 'n2-karaniwa-fib-1',
    pattern: 'からには',
    type: 'fill_in_blank',
    sentence: 'やる＿＿＿、全力を尽くす。',
    english: 'Since I am going to do it, I will give my all.',
    correctAnswer: 'からには',
    options: ['からには', '以上は', '上は', 'ものの'],
    explanation:
      'からには means "since / now that" and emphasizes determination.',
  },
  {
    id: 'n2-karaniwa-fib-2',
    pattern: 'からには',
    type: 'fill_in_blank',
    sentence: '日本に来た＿＿＿、日本語をマスターしたい。',
    english: 'Since I have come to Japan, I want to master Japanese.',
    correctAnswer: 'からには',
    options: ['からには', 'からこそ', 'ばかりか', 'としても'],
    explanation:
      'からには establishes coming to Japan as the basis for a strong resolve to learn.',
  },
  {
    id: 'n2-karaniwa-fib-3',
    pattern: 'からには',
    type: 'fill_in_blank',
    sentence: '起業する＿＿＿、リスクを覚悟しなければならない。',
    english: 'Since you are starting a business, you must be prepared for risks.',
    correctAnswer: 'からには',
    options: ['からには', 'ものの', 'どころか', 'たところで'],
    explanation:
      'からには links the decision to start a business with the obligation to accept risks.',
  },
  {
    id: 'n2-karaniwa-mc-1',
    pattern: 'からには',
    type: 'multiple_choice',
    sentence: 'What emotion or attitude does からには typically convey?',
    english: 'Select the typical attitude.',
    correctAnswer: 'Strong determination or sense of duty',
    options: [
      'Strong determination or sense of duty',
      'Regret about the past',
      'Indifference',
      'Surprise',
    ],
    explanation:
      'からには conveys that the speaker feels a strong obligation or determination.',
  },
  {
    id: 'n2-karaniwa-mc-2',
    pattern: 'からには',
    type: 'multiple_choice',
    sentence: 'Which expressions share a similar meaning with からには?',
    english: 'Select the near-synonyms.',
    correctAnswer: '以上は and 上は',
    options: ['以上は and 上は', 'ものの and けれども', 'ばかりか and のみならず', 'どころか and ところで'],
    explanation:
      'からには, 以上は, and 上は all express "since/now that" with a sense of obligation.',
  },

  // ===========================================================================
  // REASON & CAUSE
  // ===========================================================================
  // ことから (from the fact that / because)
  {
    id: 'n2-kotokara-fib-1',
    pattern: 'ことから',
    type: 'fill_in_blank',
    sentence: '形が星に似ている＿＿＿、「スターフルーツ」と呼ばれている。',
    english: 'From the fact that its shape resembles a star, it is called "starfruit."',
    correctAnswer: 'ことから',
    options: ['ことから', 'からこそ', 'からには', 'だけに'],
    explanation:
      'ことから explains the origin of a name or designation based on an observable fact.',
  },
  {
    id: 'n2-kotokara-fib-2',
    pattern: 'ことから',
    type: 'fill_in_blank',
    sentence: '彼がいつも遅刻する＿＿＿、信頼を失った。',
    english: 'From the fact that he is always late, he lost trust.',
    correctAnswer: 'ことから',
    options: ['ことから', 'からこそ', 'ものの', 'ばかりか'],
    explanation:
      'ことから presents an observable fact as the basis for the consequence.',
  },
  {
    id: 'n2-kotokara-fib-3',
    pattern: 'ことから',
    type: 'fill_in_blank',
    sentence: 'この地域は桜が多い＿＿＿、「桜町」という名前がついた。',
    english: 'From the fact that this area has many cherry trees, it was named "Sakura Town."',
    correctAnswer: 'ことから',
    options: ['ことから', 'からには', 'だけに', '以上は'],
    explanation:
      'ことから explains the naming origin based on an observable characteristic.',
  },
  {
    id: 'n2-kotokara-mc-1',
    pattern: 'ことから',
    type: 'multiple_choice',
    sentence: 'What type of reason does ことから typically present?',
    english: 'Select the type of reason.',
    correctAnswer: 'An observable fact or characteristic that leads to a conclusion',
    options: [
      'An observable fact or characteristic that leads to a conclusion',
      'A personal emotional reason',
      'A hypothetical assumption',
      'A command or instruction',
    ],
    explanation:
      'ことから presents objective, observable facts as the basis for naming, judgment, or conclusion.',
  },
  {
    id: 'n2-kotokara-mc-2',
    pattern: 'ことから',
    type: 'multiple_choice',
    sentence: 'What is a common use case for ことから?',
    english: 'Select the typical context.',
    correctAnswer: 'Explaining the origin of names or nicknames',
    options: [
      'Explaining the origin of names or nicknames',
      'Expressing personal feelings',
      'Making requests',
      'Describing future plans',
    ],
    explanation:
      'ことから is frequently used to explain how something got its name based on a characteristic.',
  },

  // だけに (precisely because / as expected of)
  {
    id: 'n2-dakeni-fib-1',
    pattern: 'だけに',
    type: 'fill_in_blank',
    sentence: 'プロ＿＿＿、彼の演奏は素晴らしかった。',
    english: 'As expected of a professional, his performance was wonderful.',
    correctAnswer: 'だけに',
    options: ['だけに', 'からこそ', 'ことから', 'からには'],
    explanation:
      'だけに means "as expected of / precisely because" — the quality matches the status.',
  },
  {
    id: 'n2-dakeni-fib-2',
    pattern: 'だけに',
    type: 'fill_in_blank',
    sentence: '期待していた＿＿＿、失望も大きかった。',
    english: 'Precisely because I had high expectations, the disappointment was also great.',
    correctAnswer: 'だけに',
    options: ['だけに', 'ものの', 'としても', 'ばかりか'],
    explanation:
      'だけに shows that the degree of disappointment is proportional to the expectation.',
  },
  {
    id: 'n2-dakeni-fib-3',
    pattern: 'だけに',
    type: 'fill_in_blank',
    sentence: '人気がある＿＿＿、チケットはすぐ売り切れた。',
    english: 'Precisely because it is popular, the tickets sold out immediately.',
    correctAnswer: 'だけに',
    options: ['だけに', 'からこそ', 'ことから', '以上は'],
    explanation:
      'だけに links the popularity to the expected consequence of quick ticket sales.',
  },
  {
    id: 'n2-dakeni-mc-1',
    pattern: 'だけに',
    type: 'multiple_choice',
    sentence: 'What does だけに imply about the relationship between the two clauses?',
    english: 'Select the best description.',
    correctAnswer: 'The result is proportional to or expected from the reason',
    options: [
      'The result is proportional to or expected from the reason',
      'The result contradicts the reason',
      'The reason is unknown',
      'The two clauses are unrelated',
    ],
    explanation:
      'だけに implies the result naturally follows from or is proportional to the stated reason.',
  },
  {
    id: 'n2-dakeni-mc-2',
    pattern: 'だけに',
    type: 'multiple_choice',
    sentence: 'How does だけに differ from からこそ?',
    english: 'Select the distinction.',
    correctAnswer: 'だけに focuses on proportionality; からこそ focuses on emphasis of the reason itself',
    options: [
      'だけに focuses on proportionality; からこそ focuses on emphasis of the reason itself',
      'They are identical',
      'からこそ is casual; だけに is formal',
      'だけに is negative only; からこそ is positive only',
    ],
    explanation:
      'だけに says "precisely because X, proportionally Y," while からこそ emphatically identifies X as the key reason.',
  },

  // ===========================================================================
  // STRONG NEGATION & EMOTION
  // ===========================================================================
  // っこない (no chance of / absolutely will not)
  {
    id: 'n2-kkonai-fib-1',
    pattern: 'っこない',
    type: 'fill_in_blank',
    sentence: 'そんな難しい試験に受かり＿＿＿。',
    english: 'There is no way I will pass such a difficult exam.',
    correctAnswer: 'っこない',
    options: ['っこない', 'かねない', 'がたい', '得ない'],
    explanation:
      'っこない expresses strong certainty that something will not happen — colloquial emphasis.',
  },
  {
    id: 'n2-kkonai-fib-2',
    pattern: 'っこない',
    type: 'fill_in_blank',
    sentence: 'あの人が約束を守り＿＿＿よ。',
    english: 'There is absolutely no way that person will keep their promise.',
    correctAnswer: 'っこない',
    options: ['っこない', 'かねない', 'がたい', 'まい'],
    explanation:
      'っこない strongly denies any possibility of the promise being kept.',
  },
  {
    id: 'n2-kkonai-fib-3',
    pattern: 'っこない',
    type: 'fill_in_blank',
    sentence: 'こんな量の仕事、一日で終わり＿＿＿。',
    english: 'There is no chance this much work will be finished in one day.',
    correctAnswer: 'っこない',
    options: ['っこない', '得ない', 'かねる', 'まい'],
    explanation:
      'っこない emphatically denies the possibility of completing the work.',
  },
  {
    id: 'n2-kkonai-mc-1',
    pattern: 'っこない',
    type: 'multiple_choice',
    sentence: 'What verb form precedes っこない?',
    english: 'Select the correct form.',
    correctAnswer: 'Verb stem (masu-stem)',
    options: ['Verb stem (masu-stem)', 'Dictionary form', 'て-form', 'た-form'],
    explanation:
      'っこない attaches to the verb stem, e.g., できっこない, 勝てっこない.',
  },
  {
    id: 'n2-kkonai-mc-2',
    pattern: 'っこない',
    type: 'multiple_choice',
    sentence: 'What register is っこない used in?',
    english: 'Select the appropriate register.',
    correctAnswer: 'Casual / spoken language',
    options: [
      'Casual / spoken language',
      'Formal written language',
      'Academic papers',
      'Business emails',
    ],
    explanation:
      'っこない is a colloquial, spoken expression. It would not appear in formal writing.',
  },

  // まい (will not / probably not / I shall not)
  {
    id: 'n2-mai-fib-1',
    pattern: 'まい',
    type: 'fill_in_blank',
    sentence: '二度とあんな失敗はする＿＿＿。',
    english: 'I shall never make such a mistake again.',
    correctAnswer: 'まい',
    options: ['まい', 'ものか', 'っこない', 'かねない'],
    explanation:
      'まい expresses the speaker\'s strong negative determination.',
  },
  {
    id: 'n2-mai-fib-2',
    pattern: 'まい',
    type: 'fill_in_blank',
    sentence: '彼はもう来る＿＿＿。',
    english: 'He probably will not come anymore.',
    correctAnswer: 'まい',
    options: ['まい', 'ものか', 'っこない', 'がたい'],
    explanation:
      'まい as negative conjecture means "probably will not."',
  },
  {
    id: 'n2-mai-fib-3',
    pattern: 'まい',
    type: 'fill_in_blank',
    sentence: 'もう絶対に嘘はつく＿＿＿と決めた。',
    english: 'I decided that I shall absolutely never tell a lie again.',
    correctAnswer: 'まい',
    options: ['まい', 'ものか', 'っこない', 'かねる'],
    explanation:
      'まい expresses a firm personal resolution not to do something.',
  },
  {
    id: 'n2-mai-mc-1',
    pattern: 'まい',
    type: 'multiple_choice',
    sentence: 'What are the two main uses of まい?',
    english: 'Select the correct pair.',
    correctAnswer: 'Negative volitional (I shall not) and negative conjecture (probably will not)',
    options: [
      'Negative volitional (I shall not) and negative conjecture (probably will not)',
      'Positive intention and positive conjecture',
      'Obligation and permission',
      'Request and suggestion',
    ],
    explanation:
      'まい has two uses: strong negative will (I won\'t / I shall not) and negative guess (probably won\'t).',
  },
  {
    id: 'n2-mai-mc-2',
    pattern: 'まい',
    type: 'multiple_choice',
    sentence: 'For する, what forms are acceptable before まい?',
    english: 'Select the correct answer.',
    correctAnswer: 'Both するまい and すまい are acceptable',
    options: [
      'Both するまい and すまい are acceptable',
      'Only するまい',
      'Only すまい',
      'Only しまい',
    ],
    explanation:
      'する can become either するまい or the contracted すまい before まい.',
  },

  // ものか (as if I would / no way — emphatic refusal)
  {
    id: 'n2-monoka-fib-1',
    pattern: 'ものか',
    type: 'fill_in_blank',
    sentence: 'あんなところに二度と行く＿＿＿。',
    english: 'As if I would ever go to such a place again!',
    correctAnswer: 'ものか',
    options: ['ものか', 'まい', 'っこない', 'かねる'],
    explanation:
      'ものか is a rhetorical expression of emphatic refusal — "no way would I."',
  },
  {
    id: 'n2-monoka-fib-2',
    pattern: 'ものか',
    type: 'fill_in_blank',
    sentence: 'こんな人に負ける＿＿＿。',
    english: 'As if I would lose to someone like this!',
    correctAnswer: 'ものか',
    options: ['ものか', 'まい', 'っこない', 'がたい'],
    explanation:
      'ものか expresses defiant determination not to lose.',
  },
  {
    id: 'n2-monoka-fib-3',
    pattern: 'ものか',
    type: 'fill_in_blank',
    sentence: 'あいつの言うことなんか信じる＿＿＿。',
    english: 'As if I would believe what that guy says!',
    correctAnswer: 'ものか',
    options: ['ものか', 'まい', 'かねる', '得ない'],
    explanation:
      'ものか shows strong emotional refusal to believe.',
  },
  {
    id: 'n2-monoka-mc-1',
    pattern: 'ものか',
    type: 'multiple_choice',
    sentence: 'What is the casual/feminine variant of ものか?',
    english: 'Select the variant.',
    correctAnswer: 'もんか',
    options: ['もんか', 'ものの', 'ものだ', 'ものなら'],
    explanation:
      'もんか is the casual spoken variant of ものか. もんですか is the polite form.',
  },
  {
    id: 'n2-monoka-mc-2',
    pattern: 'ものか',
    type: 'multiple_choice',
    sentence: 'What emotion does ものか convey?',
    english: 'Select the primary emotion.',
    correctAnswer: 'Defiance, anger, or emphatic rejection',
    options: [
      'Defiance, anger, or emphatic rejection',
      'Happiness and gratitude',
      'Calm acceptance',
      'Polite request',
    ],
    explanation:
      'ものか is used when the speaker is emotionally charged — defiant, angry, or strongly rejecting.',
  },

  // ずにはいられない (cannot help but / cannot resist)
  {
    id: 'n2-zuniwa-fib-1',
    pattern: 'ずにはいられない',
    type: 'fill_in_blank',
    sentence: 'その映画を見ると、泣か＿＿＿。',
    english: 'When I watch that movie, I cannot help but cry.',
    correctAnswer: 'ずにはいられない',
    options: ['ずにはいられない', 'てはいられない', 'ないことには', 'かねない'],
    explanation:
      'ずにはいられない expresses an uncontrollable urge — the tears come involuntarily.',
  },
  {
    id: 'n2-zuniwa-fib-2',
    pattern: 'ずにはいられない',
    type: 'fill_in_blank',
    sentence: '彼の冗談を聞くと、笑わ＿＿＿。',
    english: 'When I hear his jokes, I cannot help but laugh.',
    correctAnswer: 'ずにはいられない',
    options: ['ずにはいられない', 'てはいられない', 'ないことには', 'がたい'],
    explanation:
      'ずにはいられない shows the laughter is an involuntary reaction.',
  },
  {
    id: 'n2-zuniwa-fib-3',
    pattern: 'ずにはいられない',
    type: 'fill_in_blank',
    sentence: 'あのニュースを聞いたら、心配せ＿＿＿。',
    english: 'After hearing that news, I cannot help but worry.',
    correctAnswer: 'ずにはいられない',
    options: ['ずにはいられない', 'てはいられない', 'かねない', 'っこない'],
    explanation:
      'ずにはいられない shows the worry is an unavoidable emotional response.',
  },
  {
    id: 'n2-zuniwa-mc-1',
    pattern: 'ずにはいられない',
    type: 'multiple_choice',
    sentence: 'What verb form precedes ずにはいられない?',
    english: 'Select the correct form.',
    correctAnswer: 'Negative stem (ない-stem without ない)',
    options: [
      'Negative stem (ない-stem without ない)',
      'Dictionary form',
      'て-form',
      'ます-form',
    ],
    explanation:
      'The pattern uses the negative stem + ず: 泣く → 泣か + ずにはいられない. For する: せずにはいられない.',
  },
  {
    id: 'n2-zuniwa-mc-2',
    pattern: 'ずにはいられない',
    type: 'multiple_choice',
    sentence: 'What is the て-form equivalent of ずにはいられない?',
    english: 'Select the equivalent expression.',
    correctAnswer: 'ないではいられない',
    options: ['ないではいられない', 'てはいられない', 'なくてはいけない', 'ないことには'],
    explanation:
      'ないではいられない is the て-form-based equivalent of ずにはいられない, with the same meaning.',
  },

  // てはいられない (cannot afford to / cannot remain in a state of)
  {
    id: 'n2-tewairarenaih-fib-1',
    pattern: 'てはいられない',
    type: 'fill_in_blank',
    sentence: '試験が近いので、遊ん＿＿＿。',
    english: 'Since the exam is near, I cannot afford to keep playing.',
    correctAnswer: 'ではいられない',
    options: ['ではいられない', 'ずにはいられない', 'ないことには', 'かねない'],
    explanation:
      'てはいられない means "cannot afford to remain in a state of" — playing is not an option.',
  },
  {
    id: 'n2-tewairarenaih-fib-2',
    pattern: 'てはいられない',
    type: 'fill_in_blank',
    sentence: '締め切りが迫っているので、のんびりし＿＿＿。',
    english: 'Since the deadline is approaching, I cannot afford to take it easy.',
    correctAnswer: 'てはいられない',
    options: ['てはいられない', 'ずにはいられない', 'がたい', 'かねる'],
    explanation:
      'てはいられない conveys urgency — there is no room for relaxation.',
  },
  {
    id: 'n2-tewairarenaih-fib-3',
    pattern: 'てはいられない',
    type: 'fill_in_blank',
    sentence: '大変な状況なので、泣い＿＿＿。',
    english: 'It is a serious situation, so I cannot afford to keep crying.',
    correctAnswer: 'てはいられない',
    options: ['てはいられない', 'ずにはいられない', 'ないことには', 'っこない'],
    explanation:
      'てはいられない says the situation demands action rather than continued crying.',
  },
  {
    id: 'n2-tewairarenaih-mc-1',
    pattern: 'てはいられない',
    type: 'multiple_choice',
    sentence: 'How does てはいられない differ from ずにはいられない?',
    english: 'Select the key difference.',
    correctAnswer:
      'てはいられない = "cannot afford to stay in that state"; ずにはいられない = "cannot help but do"',
    options: [
      'てはいられない = "cannot afford to stay in that state"; ずにはいられない = "cannot help but do"',
      'They are identical in meaning',
      'ずにはいられない is more formal',
      'てはいられない is about involuntary actions',
    ],
    explanation:
      'てはいられない expresses that staying in a state is not permissible, while ずにはいられない expresses an uncontrollable urge.',
  },
  {
    id: 'n2-tewairarenaih-mc-2',
    pattern: 'てはいられない',
    type: 'multiple_choice',
    sentence: 'What verb form precedes てはいられない?',
    english: 'Select the correct form.',
    correctAnswer: 'て-form (e.g., 遊んでは, 寝ては, 泣いては)',
    options: [
      'て-form (e.g., 遊んでは, 寝ては, 泣いては)',
      'Dictionary form',
      'ない-form',
      'Verb stem',
    ],
    explanation:
      'てはいられない uses the て-form of the verb + は + いられない.',
  },
]
