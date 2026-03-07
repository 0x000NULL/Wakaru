import type { GrammarPatternData } from '@/types/grammar'

export const N2_GRAMMAR_PATTERNS: GrammarPatternData[] = [
  // ===========================================================================
  // FORMAL EXPRESSIONS (8)
  // ===========================================================================
  {
    pattern: 'に際して',
    meaning: 'on the occasion of',
    formation: 'Noun + に際して / Verb dictionary form + に際して',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'に際して is a formal expression meaning "on the occasion of" or "when." It is used to describe actions or preparations taken at a significant event, turning point, or special occasion. It carries a sense of formality and importance that distinguishes it from simple time markers like 時.',
    notes:
      'に際し is the shortened literary form. に際しての + Noun is the pre-nominal form. Commonly found in speeches, announcements, and formal writing.',
    common_mistakes:
      'Using に際して for everyday or trivial events. This expression is reserved for significant occasions. Say 卒業に際して (on the occasion of graduation), not ×コンビニに行くに際して (on the occasion of going to a convenience store).',
    examples: [
      {
        japanese: '卒業に際して、先生方に感謝の言葉を述べたいと思います。',
        english: 'On the occasion of graduation, I would like to express words of gratitude to the teachers.',
        furigana: 'そつぎょうにさいして、せんせいがたにかんしゃのことばをのべたいとおもいます。',
      },
      {
        japanese: '新製品の発売に際して、記者会見が開かれた。',
        english: 'On the occasion of the new product launch, a press conference was held.',
        furigana: 'しんせいひんのはつばいにさいして、きしゃかいけんがひらかれた。',
      },
      {
        japanese: '出発に際し、いくつかの注意事項を確認してください。',
        english: 'Prior to departure, please confirm a few precautions.',
        furigana: 'しゅっぱつにさいし、いくつかのちゅういじこうをかくにんしてください。',
      },
    ],
  },
  {
    pattern: 'をめぐって',
    meaning: 'concerning / regarding / over',
    formation: 'Noun + をめぐって',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'をめぐって indicates that a discussion, debate, dispute, or controversy revolves around a particular topic or issue. It implies multiple perspectives or parties involved and often carries a nuance of contention or complexity.',
    notes:
      'をめぐる + Noun is the pre-nominal form (e.g., 領土をめぐる問題). Often used with verbs like 議論する, 争う, 対立する.',
    common_mistakes:
      'Using をめぐって for simple topics without contention. It implies debate or multiple viewpoints. For neutral topics, use について instead.',
    examples: [
      {
        japanese: '環境問題をめぐって、各国の代表が議論した。',
        english: 'Representatives from various countries debated over environmental issues.',
        furigana: 'かんきょうもんだいをめぐって、かっこくのだいひょうがぎろんした。',
      },
      {
        japanese: '遺産をめぐって兄弟の間で争いが起きた。',
        english: 'A dispute arose among the siblings over the inheritance.',
        furigana: 'いさんをめぐってきょうだいのあいだであらそいがおきた。',
      },
      {
        japanese: '新しい法律をめぐる議論が続いている。',
        english: 'The debate surrounding the new law continues.',
        furigana: 'あたらしいほうりつをめぐるぎろんがつづいている。',
      },
    ],
  },
  {
    pattern: 'に先立って',
    meaning: 'prior to / before',
    formation: 'Noun + に先立って / Verb dictionary form + に先立って',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'に先立って means "prior to" or "ahead of" and is used to describe something done in preparation for or before a significant event. It is more formal than 前に and emphasizes that the preparatory action is important or purposeful.',
    notes:
      'に先立ち is the shortened literary form. に先立つ + Noun is the pre-nominal form. Often used in official announcements and formal procedures.',
    common_mistakes:
      'Confusing に先立って with 前に. While both mean "before," に先立って implies purposeful preparation and is used for significant events, not casual daily actions.',
    examples: [
      {
        japanese: '会議に先立って、資料を配布しておいてください。',
        english: 'Prior to the meeting, please distribute the materials.',
        furigana: 'かいぎにさきだって、しりょうをはいふしておいてください。',
      },
      {
        japanese: '映画の公開に先立ち、主演俳優が舞台挨拶を行った。',
        english: 'Prior to the film\'s release, the lead actor gave a stage greeting.',
        furigana: 'えいがのこうかいにさきだち、しゅえんはいゆうがぶたいあいさつをおこなった。',
      },
      {
        japanese: '工事に先立って、住民への説明会が開催された。',
        english: 'Prior to construction, an information session was held for residents.',
        furigana: 'こうじにさきだって、じゅうみんへのせつめいかいがかいさいされた。',
      },
    ],
  },
  {
    pattern: 'を踏まえて',
    meaning: 'based on / taking into account',
    formation: 'Noun + を踏まえて',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'を踏まえて means "based on" or "taking into account." It indicates that a decision, action, or conclusion is made after carefully considering certain facts, circumstances, or prior experiences. It is frequently used in formal, business, or academic contexts.',
    notes:
      'を踏まえた + Noun is the pre-nominal form. 踏まえる literally means "to step on" or "to stand firmly on," metaphorically conveying the idea of building upon a foundation of information.',
    common_mistakes:
      'Using を踏まえて interchangeably with に基づいて. While similar, を踏まえて emphasizes active consideration of circumstances, while に基づいて emphasizes following established rules or data.',
    examples: [
      {
        japanese: '調査結果を踏まえて、新しい方針を決定する。',
        english: 'We will determine a new policy based on the survey results.',
        furigana: 'ちょうさけっかをふまえて、あたらしいほうしんをけっていする。',
      },
      {
        japanese: '前回の反省を踏まえて、改善策を提案した。',
        english: 'Based on reflections from last time, we proposed improvement measures.',
        furigana: 'ぜんかいのはんせいをふまえて、かいぜんさくをていあんした。',
      },
      {
        japanese: '現状を踏まえた上で、慎重に判断すべきだ。',
        english: 'We should make a careful judgment based on the current situation.',
        furigana: 'げんじょうをふまえたうえで、しんちょうにはんだんすべきだ。',
      },
    ],
  },
  {
    pattern: 'にあたって',
    meaning: 'when / on the occasion of',
    formation: 'Noun + にあたって / Verb dictionary form + にあたって',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'にあたって means "when doing" or "on the occasion of" and is used when someone is about to undertake something important. It conveys a sense of determination or careful preparation for a significant action or event.',
    notes:
      'にあたり is the shortened literary form. にあたっての + Noun is the pre-nominal form. Similar to に際して but にあたって focuses more on the actor\'s readiness or attitude.',
    common_mistakes:
      'Using にあたって for unimportant or routine actions. Like に際して, this expression is reserved for significant occasions. Say 留学するにあたって (when studying abroad), not ×買い物するにあたって.',
    examples: [
      {
        japanese: '新しいプロジェクトを始めるにあたって、チームの役割を明確にした。',
        english: 'When starting the new project, we clarified the team roles.',
        furigana: 'あたらしいプロジェクトをはじめるにあたって、チームのやくわりをめいかくにした。',
      },
      {
        japanese: '留学にあたり、奨学金を申請した。',
        english: 'In preparation for studying abroad, I applied for a scholarship.',
        furigana: 'りゅうがくにあたり、しょうがくきんをしんせいした。',
      },
      {
        japanese: '開会にあたって、会長からご挨拶をいただきます。',
        english: 'On the occasion of the opening, we will receive a greeting from the chairperson.',
        furigana: 'かいかいにあたって、かいちょうからごあいさつをいただきます。',
      },
    ],
  },
  {
    pattern: 'を余儀なくされる',
    meaning: 'be forced to / be compelled to',
    formation: 'Noun + を余儀なくされる',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'を余儀なくされる is a formal expression meaning "to be forced to" or "to be left with no choice but to." It expresses an unavoidable situation where external circumstances compel someone to take an undesirable action. The noun before を is typically a verbal noun (e.g., 変更, 中止, 延期).',
    notes:
      'を余儀なくさせる is the active causative form ("force someone to"). 余儀ない literally means "having no other option." This is a very formal, written expression.',
    common_mistakes:
      'Using を余儀なくされる with a verb instead of a noun. The pattern requires a noun: 変更を余儀なくされる (forced to make changes), not ×変更するを余儀なくされる.',
    examples: [
      {
        japanese: '台風のため、イベントの中止を余儀なくされた。',
        english: 'Due to the typhoon, we were forced to cancel the event.',
        furigana: 'たいふうのため、イベントのちゅうしをよぎなくされた。',
      },
      {
        japanese: '予算不足で計画の変更を余儀なくされた。',
        english: 'Due to a lack of budget, we were compelled to change the plan.',
        furigana: 'よさんぶそくでけいかくのへんこうをよぎなくされた。',
      },
      {
        japanese: '地震により多くの住民が避難を余儀なくされている。',
        english: 'Due to the earthquake, many residents are being forced to evacuate.',
        furigana: 'じしんによりおおくのじゅうみんがひなんをよぎなくされている。',
      },
    ],
  },
  {
    pattern: 'に至るまで',
    meaning: 'up to / extending to / even',
    formation: 'Noun + に至るまで',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'に至るまで means "extending all the way to" or "even down to." It emphasizes that something covers a wide range, reaching even the unexpected or extreme end of a spectrum. It highlights thoroughness or comprehensiveness.',
    notes:
      'Often used in a AからBに至るまで pattern, meaning "from A all the way to B." It stresses the breadth of the range being described.',
    common_mistakes:
      'Confusing に至るまで with まで alone. に至るまで adds emphasis and formality, stressing that the range is surprisingly broad or thorough.',
    examples: [
      {
        japanese: '子供から大人に至るまで、誰でも楽しめるイベントだ。',
        english: 'It is an event that anyone from children to adults can enjoy.',
        furigana: 'こどもからおとなにいたるまで、だれでもたのしめるイベントだ。',
      },
      {
        japanese: '彼は料理から掃除に至るまで、何でもこなす。',
        english: 'He handles everything from cooking to cleaning.',
        furigana: 'かれはりょうりからそうじにいたるまで、なんでもこなす。',
      },
      {
        japanese: '細部に至るまで丁寧に仕上げられた作品だ。',
        english: 'It is a work that has been carefully finished down to the smallest details.',
        furigana: 'さいぶにいたるまでていねいにしあげられたさくひんだ。',
      },
    ],
  },
  {
    pattern: 'をもって',
    meaning: 'with / by means of / as of',
    formation: 'Noun + をもって',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'をもって has two main uses. First, it can mean "by means of" or "with," indicating a method or tool (formal version of で). Second, it can mean "as of" when indicating a specific time that marks an endpoint or boundary, commonly seen in official announcements.',
    notes:
      'をもちまして is the polite form, often used in service announcements. The "by means of" usage is very formal and literary. The "as of" time usage is common in business.',
    common_mistakes:
      'Confusing the two meanings. Context determines whether をもって means "by means of" (方法) or "as of" (時点). 誠意をもって対応する means "respond with sincerity," while 本日をもって閉店する means "close as of today."',
    examples: [
      {
        japanese: '本日をもって、この店は閉店いたします。',
        english: 'As of today, this store will be closing.',
        furigana: 'ほんじつをもって、このみせはへいてんいたします。',
      },
      {
        japanese: '誠意をもって対応させていただきます。',
        english: 'We will respond with sincerity.',
        furigana: 'せいいをもってたいおうさせていただきます。',
      },
      {
        japanese: '書面をもってお知らせいたします。',
        english: 'We will notify you by written notice.',
        furigana: 'しょめんをもっておしらせいたします。',
      },
    ],
  },
  // ===========================================================================
  // CONJUNCTIONS (8)
  // ===========================================================================
  {
    pattern: 'からこそ',
    meaning: 'precisely because / it is exactly because',
    formation: 'Verb plain form + からこそ / い-adjective + からこそ / な-adjective + だ + からこそ / Noun + だ + からこそ',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'からこそ emphasizes the reason by adding こそ (the emphatic particle) to から. It means "precisely because" or "it is exactly because." The speaker strongly asserts that the stated reason — and no other — is the true cause of the result.',
    notes:
      'Often appears in positive contexts to justify an action or outcome: "It is precisely because X that Y." Can also appear in explanations or arguments to highlight the key factor.',
    common_mistakes:
      'Using からこそ without genuine emphasis. If you simply want to state a reason, use から alone. からこそ should be reserved for cases where you want to strongly highlight the reason as the decisive factor.',
    examples: [
      {
        japanese: '君のことが好きだからこそ、厳しいことを言うんだ。',
        english: 'It is precisely because I care about you that I say harsh things.',
        furigana: 'きみのことがすきだからこそ、きびしいことをいうんだ。',
      },
      {
        japanese: '努力したからこそ、合格できたのだ。',
        english: 'It is precisely because I worked hard that I was able to pass.',
        furigana: 'どりょくしたからこそ、ごうかくできたのだ。',
      },
      {
        japanese: '失敗を経験したからこそ、成長できる。',
        english: 'It is precisely because one experiences failure that one can grow.',
        furigana: 'しっぱいをけいけんしたからこそ、せいちょうできる。',
      },
    ],
  },
  {
    pattern: 'ばかりか',
    meaning: 'not only... but also',
    formation: 'Verb plain form + ばかりか / い-adjective + ばかりか / な-adjective + な/である + ばかりか / Noun + ばかりか',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'ばかりか means "not only... but also" and is used to express that something goes beyond what was initially stated, adding a more surprising or extreme element. The second clause often presents an unexpected addition that exceeds expectations.',
    notes:
      'ばかりでなく is a slightly less formal variant with the same meaning. The second clause typically ends with も or さえ to reinforce the "also" meaning.',
    common_mistakes:
      'Forgetting to add も or さえ in the second clause to mark the additional element. 漢字ばかりか文法も難しい is correct; dropping も weakens the parallel.',
    examples: [
      {
        japanese: '彼は英語ばかりか、フランス語も話せる。',
        english: 'He can speak not only English but also French.',
        furigana: 'かれはえいごばかりか、フランスごもはなせる。',
      },
      {
        japanese: '雨が降ったばかりか、雷まで鳴り始めた。',
        english: 'Not only did it rain, but thunder even started rumbling.',
        furigana: 'あめがふったばかりか、かみなりまでなりはじめた。',
      },
      {
        japanese: 'この料理はおいしいばかりか、体にもいい。',
        english: 'This dish is not only delicious but also good for your health.',
        furigana: 'このりょうりはおいしいばかりか、からだにもいい。',
      },
    ],
  },
  {
    pattern: 'としても',
    meaning: 'even if / even assuming that',
    formation: 'Verb plain form + としても / い-adjective + としても / な-adjective + だ + としても / Noun + だ + としても',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'としても means "even if" or "even assuming that." It presents a hypothetical condition and states that even if that condition were true, the result would not change. It is often used to dismiss an argument or emphasize that something holds true regardless.',
    notes:
      'としても is close in meaning to ても but is slightly more formal and often used with assumptions or hypothetical scenarios rather than confirmed facts.',
    common_mistakes:
      'Confusing としても with にしても. While both can mean "even if," にしても is broader and can also mean "even so" as a standalone conjunction, while としても focuses on a specific hypothesis.',
    examples: [
      {
        japanese: 'たとえ失敗したとしても、挑戦する価値はある。',
        english: 'Even if one fails, the challenge is worth it.',
        furigana: 'たとえしっぱいしたとしても、ちょうせんするかちはある。',
      },
      {
        japanese: '彼が来たとしても、状況は変わらないだろう。',
        english: 'Even if he came, the situation probably would not change.',
        furigana: 'かれがきたとしても、じょうきょうはかわらないだろう。',
      },
      {
        japanese: 'お金があったとしても、幸せとは限らない。',
        english: 'Even if one had money, it does not necessarily mean one is happy.',
        furigana: 'おかねがあったとしても、しあわせとはかぎらない。',
      },
    ],
  },
  {
    pattern: 'たところで',
    meaning: 'even if one does / no matter how much one does',
    formation: 'Verb た-form + ところで',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'たところで means "even if one does X" with the strong implication that the effort would be pointless or the result would not change. It expresses futility — the speaker believes the action will have no meaningful effect.',
    notes:
      'The second clause almost always contains a negative outcome or a statement that nothing will change. Common endings: 無駄だ, 仕方がない, 変わらない, どうにもならない.',
    common_mistakes:
      'Using たところで when the result could be positive. This pattern specifically implies that the action is futile. For neutral hypotheticals, use としても instead.',
    examples: [
      {
        japanese: '今さら謝ったところで、許してもらえないだろう。',
        english: 'Even if you apologize now, you probably will not be forgiven.',
        furigana: 'いまさらあやまったところで、ゆるしてもらえないだろう。',
      },
      {
        japanese: '急いだところで、もう間に合わない。',
        english: 'Even if we hurry, we will not make it in time anymore.',
        furigana: 'いそいだところで、もうまにあわない。',
      },
      {
        japanese: '文句を言ったところで、何も変わらない。',
        english: 'Even if you complain, nothing will change.',
        furigana: 'もんくをいったところで、なにもかわらない。',
      },
    ],
  },
  {
    pattern: 'ないことには',
    meaning: 'unless / if one does not',
    formation: 'Verb ない-form + ことには',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'ないことには means "unless" or "if X does not happen, then Y cannot happen." It expresses that a certain condition is an absolute prerequisite — without it, the desired result is impossible. The second clause is typically negative.',
    notes:
      'The full pattern is ないことには...ない, where both the condition and result are negative. This double-negative structure emphasizes the indispensability of the condition.',
    common_mistakes:
      'Forgetting the negative in the result clause. The pattern requires both parts to be negative: 食べないことには分からない (unless you eat it, you will not know). A positive result clause sounds unnatural.',
    examples: [
      {
        japanese: '実際にやってみないことには、できるかどうか分からない。',
        english: 'Unless you actually try, you will not know whether you can do it.',
        furigana: 'じっさいにやってみないことには、できるかどうかわからない。',
      },
      {
        japanese: '本人に聞かないことには、本当の理由は分からない。',
        english: 'Unless we ask the person directly, we will not know the real reason.',
        furigana: 'ほんにんにきかないことには、ほんとうのりゆうはわからない。',
      },
      {
        japanese: '練習しないことには、上達しない。',
        english: 'Unless you practice, you will not improve.',
        furigana: 'れんしゅうしないことには、じょうたつしない。',
      },
    ],
  },
  // ===========================================================================
  // DEGREE / EXTENT (7)
  // ===========================================================================
  {
    pattern: 'ほど...ない',
    meaning: 'not as ... as',
    formation: 'A は B ほど + Adjective negative form + ない',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'ほど...ない is used for negative comparisons, meaning "A is not as (adjective) as B." B serves as the standard of comparison, and the sentence states that A falls short of B in the described quality.',
    notes:
      'This is distinct from the positive ほど (to the extent that). The negative comparison pattern always has A は B ほど...ない. The adjective can be any gradable adjective.',
    common_mistakes:
      'Reversing A and B. Remember: A は B ほど...ない means "A is not as ... as B." B is the higher standard. 東京は北海道ほど寒くない means "Tokyo is not as cold as Hokkaido."',
    examples: [
      {
        japanese: '今年の夏は去年ほど暑くない。',
        english: 'This summer is not as hot as last year.',
        furigana: 'ことしのなつはきょねんほどあつくない。',
      },
      {
        japanese: 'この映画は前作ほど面白くなかった。',
        english: 'This movie was not as interesting as the previous one.',
        furigana: 'このえいがはぜんさくほどおもしろくなかった。',
      },
      {
        japanese: '日本語は思ったほど難しくない。',
        english: 'Japanese is not as difficult as I thought.',
        furigana: 'にほんごはおもったほどむずかしくない。',
      },
    ],
  },
  {
    pattern: 'くらい/ぐらい',
    meaning: 'to the extent that / so much that',
    formation: 'Verb plain form + くらい/ぐらい / い-adjective + くらい/ぐらい',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'When used to express degree or extent, くらい/ぐらい means "to the extent that" or "so much that." It describes the intensity of a state or action by comparing it to something vivid or extreme, often as hyperbole.',
    notes:
      'くらい and ぐらい are interchangeable in this usage. This is distinct from the approximate quantity meaning (3時間ぐらい). The degree usage paints a vivid picture of how extreme something is.',
    common_mistakes:
      'Confusing the degree/extent meaning with the approximation meaning. 泣くぐらい嬉しい (so happy I could cry) expresses degree, while 3人ぐらい (about 3 people) expresses approximation.',
    examples: [
      {
        japanese: '死ぬほど疲れたと言うより、倒れるくらい疲れた。',
        english: 'Rather than saying I was dead tired, I was so tired I could collapse.',
        furigana: 'しぬほどつかれたというより、たおれるくらいつかれた。',
      },
      {
        japanese: '涙が出るくらい嬉しかった。',
        english: 'I was so happy that tears came to my eyes.',
        furigana: 'なみだがでるくらいうれしかった。',
      },
      {
        japanese: '耳が痛くなるぐらい、同じことを言われた。',
        english: 'I was told the same thing so many times it made my ears hurt.',
        furigana: 'みみがいたくなるぐらい、おなじことをいわれた。',
      },
    ],
  },
  {
    pattern: 'に至る',
    meaning: 'come to / reach the point of / lead to',
    formation: 'Verb dictionary form + に至る / Noun + に至る',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'に至る means "to come to" or "to reach the point of." It describes a process or series of events that eventually leads to a certain outcome or stage. It implies that the result was reached after a progression. に至った describes the completed arrival at that point.',
    notes:
      'に至るまで (up to, extending to) and に至っては (as for, when it comes to) are related but distinct patterns. に至る often appears in narratives tracing a sequence of events.',
    common_mistakes:
      'Using に至る for sudden, unexpected events. This pattern implies a gradual process or chain of events leading to a result, not something that happened abruptly.',
    examples: [
      {
        japanese: '長い交渉の末、ようやく合意に至った。',
        english: 'After lengthy negotiations, we finally reached an agreement.',
        furigana: 'ながいこうしょうのすえ、ようやくごういにいたった。',
      },
      {
        japanese: '彼が辞職に至った経緯を説明します。',
        english: 'I will explain the circumstances that led to his resignation.',
        furigana: 'かれがじしょくにいたったけいいをせつめいします。',
      },
      {
        japanese: '問題は深刻化し、裁判に至るケースもある。',
        english: 'The problem can escalate and there are cases that lead to lawsuits.',
        furigana: 'もんだいはしんこくかし、さいばんにいたるケースもある。',
      },
    ],
  },
  {
    pattern: 'に限らず',
    meaning: 'not limited to / not just',
    formation: 'Noun + に限らず',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'に限らず means "not limited to" or "not just." It states that something is not restricted to a particular group or category but applies more broadly. It widens the scope beyond what might be assumed.',
    notes:
      'Often followed by も to introduce the broader category. に限った話ではない is a related expression meaning "it is not a matter limited to."',
    common_mistakes:
      'Using に限らず with verbs directly. It attaches to nouns: 学生に限らず (not limited to students), not ×勉強するに限らず.',
    examples: [
      {
        japanese: '若者に限らず、高齢者もインターネットを利用している。',
        english: 'Not just young people — elderly people also use the internet.',
        furigana: 'わかものにかぎらず、こうれいしゃもインターネットをりようしている。',
      },
      {
        japanese: 'この問題は日本に限らず、世界中で起きている。',
        english: 'This problem is not limited to Japan — it is happening around the world.',
        furigana: 'このもんだいはにほんにかぎらず、せかいじゅうでおきている。',
      },
      {
        japanese: '男性に限らず女性にも人気がある。',
        english: 'It is popular not only among men but also among women.',
        furigana: 'だんせいにかぎらずじょせいにもにんきがある。',
      },
    ],
  },
  {
    pattern: 'はもとより',
    meaning: 'not to mention / let alone / of course... but also',
    formation: 'Noun + はもとより',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'はもとより means "not to mention" or "to say nothing of." It takes something obvious or expected as a given and then adds a more surprising or less expected element. It is a formal expression often found in written language.',
    notes:
      'はもちろん is a less formal equivalent. もとより by itself means "from the beginning" or "originally." The pattern often pairs with も or さえ in the second part.',
    common_mistakes:
      'Using はもとより in casual conversation. This is a formal, literary expression. In everyday speech, はもちろん is more natural.',
    examples: [
      {
        japanese: '国内はもとより、海外からも注目されている。',
        english: 'It is attracting attention not only domestically, but also from overseas.',
        furigana: 'こくないはもとより、かいがいからもちゅうもくされている。',
      },
      {
        japanese: '大人はもとより、子供にも理解できる内容だ。',
        english: 'It is content that not only adults but even children can understand.',
        furigana: 'おとなはもとより、こどもにもりかいできるないようだ。',
      },
      {
        japanese: '専門家はもとより、一般市民にも影響がある。',
        english: 'It affects not only experts but also ordinary citizens.',
        furigana: 'せんもんかはもとより、いっぱんしみんにもえいきょうがある。',
      },
    ],
  },
  {
    pattern: 'のみならず',
    meaning: 'not only / not merely',
    formation: 'Verb plain form + のみならず / い-adjective + のみならず / な-adjective + である/な + のみならず / Noun + のみならず',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'のみならず is a formal expression meaning "not only... but also." のみ means "only" and ならず is the classical negative of なる. It introduces an additional element that goes beyond the first, often surprising or noteworthy.',
    notes:
      'This is the most formal of the "not only" expressions (compared with ばかりか, だけでなく). Common in essays, news articles, and academic writing. Often followed by も or さえ.',
    common_mistakes:
      'Using のみならず in casual speech. This is a highly formal, literary expression. In conversation, だけでなく or ばかりか are more natural.',
    examples: [
      {
        japanese: '健康のみならず、経済にも大きな影響を与えた。',
        english: 'It had a major impact not only on health but also on the economy.',
        furigana: 'けんこうのみならず、けいざいにもおおきなえいきょうをあたえた。',
      },
      {
        japanese: '彼は学業のみならず、スポーツでも優れている。',
        english: 'He excels not only academically but also in sports.',
        furigana: 'かれはがくぎょうのみならず、スポーツでもすぐれている。',
      },
      {
        japanese: 'この技術は医療のみならず、教育分野にも応用されている。',
        english: 'This technology is applied not only in medicine but also in education.',
        furigana: 'このぎじゅつはいりょうのみならず、きょういくぶんやにもおうようされている。',
      },
    ],
  },
  {
    pattern: 'に至っては',
    meaning: 'as for / when it comes to (extreme case)',
    formation: 'Noun + に至っては',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'に至っては highlights an extreme or worst-case example within a series. It means "as for (this extreme case)" or "when it comes to." After describing a general situation, it singles out one element that is especially bad, remarkable, or noteworthy.',
    notes:
      'Almost always used with negative or critical evaluations. It implies "and the worst case of all is..." Do not confuse with に至る (to reach) or に至るまで (extending to).',
    common_mistakes:
      'Using に至っては for positive or neutral examples. This pattern typically introduces the most extreme (often negative) case: 兄も成績が悪いが、弟に至っては赤点ばかりだ.',
    examples: [
      {
        japanese: '社員の態度が悪い。部長に至っては、会議に来もしない。',
        english: 'The employees\' attitude is bad. As for the department head, he does not even come to meetings.',
        furigana: 'しゃいんのたいどがわるい。ぶちょうにいたっては、かいぎにきもしない。',
      },
      {
        japanese: '兄も勉強しないが、弟に至っては教科書すら開かない。',
        english: 'The older brother does not study either, but as for the younger brother, he does not even open his textbook.',
        furigana: 'あにもべんきょうしないが、おとうとにいたってはきょうかしょすらひらかない。',
      },
      {
        japanese: '売上は年々下がっている。今年に至っては、赤字になった。',
        english: 'Sales have been declining year after year. As for this year, it went into the red.',
        furigana: 'うりあげはねんねんさがっている。ことしにいたっては、あかじになった。',
      },
    ],
  },
  // ===========================================================================
  // TENDENCY / STATE (7)
  // ===========================================================================
  {
    pattern: 'つつある',
    meaning: 'in the process of / gradually -ing',
    formation: 'Verb masu-stem + つつある',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'つつある indicates that a change or process is currently underway and progressing. It means "in the process of" or "gradually doing." Unlike ている which can describe habitual actions or states, つつある specifically emphasizes ongoing change or transition.',
    notes:
      'This is a formal, written expression. Used with verbs that indicate change: 変わりつつある (changing), 増えつつある (increasing), 広がりつつある (spreading). Not used with instantaneous or habitual actions.',
    common_mistakes:
      'Using つつある with stative verbs or habitual actions. It requires verbs of change: 増えつつある (is increasing) is correct, but ×食べつつある (is eating) is unnatural.',
    examples: [
      {
        japanese: '環境問題への意識が高まりつつある。',
        english: 'Awareness of environmental issues is gradually increasing.',
        furigana: 'かんきょうもんだいへのいしきがたかまりつつある。',
      },
      {
        japanese: '伝統的な文化が失われつつある。',
        english: 'Traditional culture is gradually being lost.',
        furigana: 'でんとうてきなぶんかがうしなわれつつある。',
      },
      {
        japanese: '状況は少しずつ改善されつつある。',
        english: 'The situation is gradually improving.',
        furigana: 'じょうきょうはすこしずつかいぜんされつつある。',
      },
    ],
  },
  {
    pattern: '一方だ',
    meaning: 'increasingly / more and more / keep -ing',
    formation: 'Verb dictionary form + 一方だ',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      '一方だ means "keep (verb)-ing" or "more and more." It expresses a continuing trend that shows no sign of stopping or reversing. The trend is typically negative or concerning, though it can be neutral.',
    notes:
      'Often used with verbs indicating increase, decrease, or deterioration: 増える一方だ, 悪化する一方だ, 減る一方だ. Distinct from 一方(で) meaning "on the other hand."',
    common_mistakes:
      'Confusing 一方だ with 一方で. Verb + 一方だ describes a continuing trend ("keeps increasing"), while 一方で is a conjunction meaning "on the other hand / while."',
    examples: [
      {
        japanese: '物価は上がる一方で、生活が苦しくなっている。',
        english: 'Prices keep going up, and life is becoming harder.',
        furigana: 'ぶっかはあがるいっぽうで、せいかつがくるしくなっている。',
      },
      {
        japanese: '地方の人口は減る一方だ。',
        english: 'The population in rural areas keeps declining.',
        furigana: 'ちほうのじんこうはへるいっぽうだ。',
      },
      {
        japanese: '借金が増える一方で、どうすればいいか分からない。',
        english: 'My debt keeps increasing, and I do not know what to do.',
        furigana: 'しゃっきんがふえるいっぽうで、どうすればいいかわからない。',
      },
    ],
  },
  {
    pattern: 'がたい',
    meaning: 'difficult to / hard to',
    formation: 'Verb masu-stem + がたい',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'がたい means "difficult to" or "hard to" and attaches to the masu-stem of a verb. Unlike にくい which describes physical difficulty, がたい expresses psychological or emotional difficulty — something the speaker feels unable to do because it goes against their feelings, beliefs, or judgment.',
    notes:
      'Common collocations: 信じがたい (hard to believe), 許しがたい (hard to forgive), 耐えがたい (hard to endure), 理解しがたい (hard to understand). It is a formal, literary expression.',
    common_mistakes:
      'Using がたい interchangeably with にくい. がたい is for emotional/psychological difficulty (信じがたい = I cannot bring myself to believe it), while にくい is for practical difficulty (読みにくい = physically hard to read).',
    examples: [
      {
        japanese: '彼の行動は理解しがたい。',
        english: 'His behavior is difficult to understand.',
        furigana: 'かれのこうどうはりかいしがたい。',
      },
      {
        japanese: '信じがたいことだが、それは事実だ。',
        english: 'It is hard to believe, but it is a fact.',
        furigana: 'しんじがたいことだが、それはじじつだ。',
      },
      {
        japanese: '忘れがたい思い出がたくさんある。',
        english: 'I have many unforgettable memories.',
        furigana: 'わすれがたいおもいでがたくさんある。',
      },
    ],
  },
  {
    pattern: '得る/得ない',
    meaning: 'possible / impossible / can / cannot happen',
    formation: 'Verb masu-stem + 得る (うる/える) / Verb masu-stem + 得ない (えない)',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      '得る (うる/える) means "can" or "is possible" and attaches to the masu-stem of a verb to express that something is within the realm of possibility. 得ない (えない) is the negative form meaning "cannot" or "is impossible." It describes theoretical possibility rather than personal ability.',
    notes:
      'The positive form can be read うる or える. The negative form is always えない (not うない). ありうる/ありえる (possible/conceivable) and ありえない (impossible/unthinkable) are extremely common.',
    common_mistakes:
      'Reading the negative as うない instead of えない. The negative is always 得ない (えない): ありえない, 考ええない. Also, do not confuse with the potential form (できる).',
    examples: [
      {
        japanese: 'そんなことはありえない。',
        english: 'That is impossible.',
        furigana: 'そんなことはありえない。',
      },
      {
        japanese: 'ミスは誰にでも起こり得る。',
        english: 'Mistakes can happen to anyone.',
        furigana: 'ミスはだれにでもおこりうる。',
      },
      {
        japanese: '彼女の行動は十分理解し得るものだ。',
        english: 'Her actions are something that can be fully understood.',
        furigana: 'かのじょのこうどうはじゅうぶんりかいしうるものだ。',
      },
      {
        japanese: '考え得る限りの対策を講じた。',
        english: 'We took every conceivable countermeasure.',
        furigana: 'かんがえうるかぎりのたいさくをこうじた。',
      },
    ],
  },
  {
    pattern: 'かねる',
    meaning: 'unable to / hesitate to / find it difficult to',
    formation: 'Verb masu-stem + かねる',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'かねる means "unable to" or "find it difficult to," expressing that the speaker wants to do something but cannot bring themselves to do it, or that circumstances make it impossible. It is frequently used in polite refusals and business language.',
    notes:
      'Very common in customer service: お答えしかねます (I am unable to answer), 賛成しかねます (I cannot agree). It is a polite way to refuse or decline. The nuance is "I would like to, but I cannot."',
    common_mistakes:
      'Using かねる for things you simply do not want to do. かねる implies you wish you could comply but cannot, not that you refuse outright. For flat refusal, other expressions are more appropriate.',
    examples: [
      {
        japanese: 'その件に関しましては、お答えしかねます。',
        english: 'Regarding that matter, I am unable to provide an answer.',
        furigana: 'そのけんにかんしましては、おこたえしかねます。',
      },
      {
        japanese: '残念ながら、ご要望にはお応えしかねます。',
        english: 'Unfortunately, we are unable to accommodate your request.',
        furigana: 'ざんねんながら、ごようぼうにはおこたえしかねます。',
      },
      {
        japanese: '彼の提案には賛成しかねる。',
        english: 'I find it difficult to agree with his proposal.',
        furigana: 'かれのていあんにはさんせいしかねる。',
      },
    ],
  },
  {
    pattern: 'かねない',
    meaning: 'might / liable to / could very well',
    formation: 'Verb masu-stem + かねない',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'かねない means "might" or "could very well" and expresses concern that an undesirable outcome is possible. It warns that something bad could happen. Despite looking like the negative of かねる, it has a completely different meaning — it indicates that an unwanted possibility cannot be ruled out.',
    notes:
      'Always used for negative or undesirable outcomes: 事故になりかねない (could lead to an accident). Never used for positive possibilities. Think of it as "it is not impossible that (bad thing) will happen."',
    common_mistakes:
      'Using かねない for positive possibilities. It is exclusively for negative or dangerous outcomes. Say 事故を起こしかねない (could cause an accident), not ×成功しかねない (could succeed).',
    examples: [
      {
        japanese: 'このまま放置すれば、大きな問題になりかねない。',
        english: 'If left as is, it could turn into a major problem.',
        furigana: 'このままほうちすれば、おおきなもんだいになりかねない。',
      },
      {
        japanese: '不注意な発言は誤解を招きかねない。',
        english: 'Careless remarks could invite misunderstandings.',
        furigana: 'ふちゅういなはつげんはごかいをまねきかねない。',
      },
      {
        japanese: '過労で倒れかねないから、少し休んだ方がいい。',
        english: 'You could collapse from overwork, so you should rest a little.',
        furigana: 'かろうでたおれかねないから、すこしやすんだほうがいい。',
      },
    ],
  },
  {
    pattern: '抜く',
    meaning: 'do completely / to the end / through and through',
    formation: 'Verb masu-stem + 抜く',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      '抜く attaches to the masu-stem of a verb and means "to do something completely" or "to see something through to the end." It emphasizes perseverance and completion despite difficulty, expressing that the action was carried out thoroughly without giving up.',
    notes:
      'Common combinations: やり抜く (see through to the end), 走り抜く (run all the way through), 考え抜く (think thoroughly), 耐え抜く (endure to the end). It conveys a sense of effort and determination.',
    common_mistakes:
      'Confusing 抜く with 切る. While both can mean "do completely," 抜く emphasizes endurance and not giving up, while 切る emphasizes reaching a limit or exhaustion (疲れ切る = completely exhausted).',
    examples: [
      {
        japanese: '最後まで走り抜いた選手に拍手が送られた。',
        english: 'The athlete who ran all the way to the end received applause.',
        furigana: 'さいごまではしりぬいたせんしゅにはくしゅがおくられた。',
      },
      {
        japanese: '困難な時期を耐え抜いた経験が、今の自分を作った。',
        english: 'The experience of enduring through difficult times shaped who I am today.',
        furigana: 'こんなんなじきをたえぬいたけいけんが、いまのじぶんをつくった。',
      },
      {
        japanese: '何時間も考え抜いた末に、答えが見つかった。',
        english: 'After thinking it through for many hours, I found the answer.',
        furigana: 'なんじかんもかんがえぬいたすえに、こたえがみつかった。',
      },
    ],
  },
  // ===========================================================================
  // REASONING (5)
  // ===========================================================================
  {
    pattern: '以上は',
    meaning: 'since / given that / now that',
    formation: 'Verb plain form + 以上(は) / Noun + である + 以上(は)',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      '以上は means "since" or "given that." It states that because a certain fact or decision is established, a corresponding responsibility, obligation, or natural consequence follows. It carries a sense of resolve or inevitability.',
    notes:
      'The は is optional: 以上 and 以上は are both correct. The second clause often contains べきだ, なければならない, つもりだ, or other expressions of obligation or determination.',
    common_mistakes:
      'Using 以上は for simple cause-and-effect. It implies a strong sense of responsibility or inevitability following from a commitment or established fact. For simple reasons, use から or ので instead.',
    examples: [
      {
        japanese: '約束した以上は、必ず守るべきだ。',
        english: 'Since you made a promise, you should definitely keep it.',
        furigana: 'やくそくしたいじょうは、かならずまもるべきだ。',
      },
      {
        japanese: '引き受けた以上、最後までやり遂げるつもりだ。',
        english: 'Since I took it on, I intend to see it through to the end.',
        furigana: 'ひきうけたいじょう、さいごまでやりとげるつもりだ。',
      },
      {
        japanese: '学生である以上、勉強を第一にすべきだ。',
        english: 'Since you are a student, you should prioritize studying.',
        furigana: 'がくせいであるいじょう、べんきょうをだいいちにすべきだ。',
      },
    ],
  },
  {
    pattern: '上は',
    meaning: 'now that / since (with determination)',
    formation: 'Verb た-form + 上は / Verb dictionary form + 上は',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      '上は means "now that" and expresses strong determination or resolve following from an established fact or decision. It is similar to 以上は but slightly more literary and emphatic, often implying the speaker has made up their mind.',
    notes:
      'The second clause typically contains strong expressions of will: する覚悟だ, やるしかない, 全力を尽くす. This is a formal, somewhat literary expression.',
    common_mistakes:
      'Confusing 上は with 上で. 上は means "now that" (expressing determination), while 上で means "after doing" or "in terms of." They are completely different patterns.',
    examples: [
      {
        japanese: 'こうなった上は、やるしかない。',
        english: 'Now that it has come to this, there is no choice but to do it.',
        furigana: 'こうなったうえは、やるしかない。',
      },
      {
        japanese: '決めた上は、後悔しないようにしよう。',
        english: 'Now that we have decided, let us make sure we have no regrets.',
        furigana: 'きめたうえは、こうかいしないようにしよう。',
      },
      {
        japanese: '留学する上は、しっかり語学力を身につけたい。',
        english: 'Now that I am going to study abroad, I want to firmly develop my language skills.',
        furigana: 'りゅうがくするうえは、しっかりごがくりょくをみにつけたい。',
      },
    ],
  },
  {
    pattern: 'からには',
    meaning: 'since / now that / as long as',
    formation: 'Verb plain form + からには / Noun + である + からには',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'からには means "since" or "now that" with the strong implication that a corresponding action, effort, or result is expected or required. Like 以上は, it connects a premise to an obligation or resolution, but からには feels slightly more conversational.',
    notes:
      'The second clause often contains べきだ, なければならない, つもりだ, たい, or other expressions of intention and obligation. Interchangeable with 以上は in many contexts.',
    common_mistakes:
      'Forgetting the sense of obligation in the result clause. からには implies that because the condition is true, there is a duty or strong expectation: 参加するからには全力を尽くす (since I am participating, I will give my all).',
    examples: [
      {
        japanese: '試合に出るからには、優勝を目指す。',
        english: 'Since I am entering the competition, I aim to win.',
        furigana: 'しあいにでるからには、ゆうしょうをめざす。',
      },
      {
        japanese: '日本に来たからには、日本語をしっかり勉強したい。',
        english: 'Now that I have come to Japan, I want to study Japanese properly.',
        furigana: 'にほんにきたからには、にほんごをしっかりべんきょうしたい。',
      },
      {
        japanese: 'プロであるからには、責任を持って仕事をすべきだ。',
        english: 'Since you are a professional, you should do your work responsibly.',
        furigana: 'プロであるからには、せきにんをもってしごとをすべきだ。',
      },
    ],
  },
  {
    pattern: 'ことから',
    meaning: 'because / from the fact that',
    formation: 'Verb plain form + ことから / い-adjective + ことから / な-adjective + な/である + ことから / Noun + である + ことから',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'ことから means "because" or "from the fact that." It presents an observable fact or characteristic as the basis for a conclusion, name, reputation, or judgment. It is often used to explain the origin of names, nicknames, or how something came to be known.',
    notes:
      'Frequently used in explanatory or descriptive contexts: この地域は花が多いことから「花の里」と呼ばれている. It explains reasoning based on evidence rather than personal feelings.',
    common_mistakes:
      'Using ことから for personal reasons or subjective feelings. It is for objective, observable facts that lead to conclusions. For personal reasons, use から or ので.',
    examples: [
      {
        japanese: '形が富士山に似ていることから、「小富士」と呼ばれている。',
        english: 'Because its shape resembles Mt. Fuji, it is called "Little Fuji."',
        furigana: 'かたちがふじさんににていることから、「こふじ」とよばれている。',
      },
      {
        japanese: '彼女はいつも笑顔でいることから、みんなに好かれている。',
        english: 'Because she is always smiling, she is liked by everyone.',
        furigana: 'かのじょはいつもえがおでいることから、みんなにすかれている。',
      },
      {
        japanese: '犯行現場に指紋が残っていたことから、犯人が特定された。',
        english: 'From the fact that fingerprints were left at the crime scene, the perpetrator was identified.',
        furigana: 'はんこうげんばにしもんがのこっていたことから、はんにんがとくていされた。',
      },
    ],
  },
  {
    pattern: 'だけに',
    meaning: 'precisely because / as expected of / all the more because',
    formation: 'Verb plain form + だけに / い-adjective + だけに / な-adjective + な + だけに / Noun + だけに',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'だけに means "precisely because" or "as one would expect given that." It expresses that a result is a natural or expected consequence of the stated reason. It can also carry the nuance of "all the more because," emphasizing that the degree of the result matches the degree of the cause.',
    notes:
      'Can express both positive and negative outcomes: 努力しただけに嬉しい (all the happier because I worked hard) or 期待しただけにがっかりした (all the more disappointed because I had high expectations).',
    common_mistakes:
      'Confusing だけに with だけ (only). だけに connects a reason to an expected result, while だけ simply means "only" or "just."',
    examples: [
      {
        japanese: '人気がある店だけに、いつも混んでいる。',
        english: 'As expected of a popular restaurant, it is always crowded.',
        furigana: 'にんきがあるみせだけに、いつもこんでいる。',
      },
      {
        japanese: '期待していただけに、結果にはがっかりした。',
        english: 'Precisely because I had high expectations, I was disappointed by the results.',
        furigana: 'きたいしていただけに、けっかにはがっかりした。',
      },
      {
        japanese: '長年研究しただけに、この分野については詳しい。',
        english: 'Precisely because he has studied it for many years, he is well-versed in this field.',
        furigana: 'ながねんけんきゅうしただけに、このぶんやについてはくわしい。',
      },
    ],
  },
  // ===========================================================================
  // OTHER (5)
  // ===========================================================================
  {
    pattern: 'っこない',
    meaning: 'no chance of / impossible to',
    formation: 'Verb masu-stem + っこない',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'っこない is a colloquial expression meaning "there is absolutely no way" or "it is impossible to." It emphatically denies the possibility of something happening. Despite being an N2 grammar point, it is informal and used in spoken Japanese.',
    notes:
      'Common collocations: できっこない (no way I can do it), 分かりっこない (no way to understand), 勝てっこない (no chance of winning). It is stronger and more emphatic than はずがない.',
    common_mistakes:
      'Using っこない in formal writing. It is a colloquial expression suited for casual speech. In formal contexts, use はずがない or 得ない instead.',
    examples: [
      {
        japanese: 'そんな難しい試験、受かりっこない。',
        english: 'There is no way I can pass such a difficult exam.',
        furigana: 'そんなむずかしいしけん、うかりっこない。',
      },
      {
        japanese: '一日で全部覚えられっこないよ。',
        english: 'There is no way you can memorize everything in one day.',
        furigana: 'いちにちでぜんぶおぼえられっこないよ。',
      },
      {
        japanese: 'あの人に勝てっこない。',
        english: 'There is no chance of beating that person.',
        furigana: 'あのひとにかてっこない。',
      },
    ],
  },
  {
    pattern: 'まい',
    meaning: 'will not / probably not / vow not to',
    formation: 'Verb dictionary form + まい (う-verbs) / Verb masu-stem + まい (る-verbs) / するまい / 来るまい (くるまい)',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'まい is a literary negative volitional form with two main uses. First, it expresses the speaker\'s strong determination not to do something ("I will never do X"). Second, it expresses a negative conjecture ("X probably will not happen"). The usage depends on context.',
    notes:
      'For る-verbs, both dictionary form + まい and masu-stem + まい are acceptable: 食べるまい or 食べまい. する has two forms: するまい and すまい. This is a formal, literary expression.',
    common_mistakes:
      'Using まい in casual conversation where ないだろう or ないつもりだ would be natural. まい is literary and somewhat old-fashioned. Also, note that first person typically signals determination, while third person signals conjecture.',
    examples: [
      {
        japanese: '二度と同じ失敗はするまいと心に誓った。',
        english: 'I vowed in my heart never to make the same mistake again.',
        furigana: 'にどとおなじしっぱいはするまいとこころにちかった。',
      },
      {
        japanese: 'こんなひどい目に遭うまいと思っていたのに。',
        english: 'I had thought I would never have such a terrible experience, and yet...',
        furigana: 'こんなひどいめにあうまいとおもっていたのに。',
      },
      {
        japanese: '彼はもう来るまい。',
        english: 'He probably will not come anymore.',
        furigana: 'かれはもうくるまい。',
      },
    ],
  },
  {
    pattern: 'ものか',
    meaning: 'absolutely not / no way / as if I would',
    formation: 'Verb dictionary form + ものか / い-adjective + ものか',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'ものか is a rhetorical expression of strong refusal or denial. It means "as if I would!" or "absolutely not!" The speaker emphatically rejects the idea of doing something or denies that something is the case. It expresses strong emotion — defiance, indignation, or determination.',
    notes:
      'もんか is the casual spoken form. ものですか is the polite form. Often used with 二度と (never again) or そんな (such). This is an emotional expression, not neutral.',
    common_mistakes:
      'Using ものか without emotional emphasis. It is not a neutral negative — it carries strong feelings of defiance or rejection. For calm negation, use simple negative forms.',
    examples: [
      {
        japanese: 'あんな店、二度と行くものか。',
        english: 'As if I would ever go to that store again!',
        furigana: 'あんなみせ、にどといくものか。',
      },
      {
        japanese: 'こんなことで負けるものか。',
        english: 'There is no way I will lose over something like this!',
        furigana: 'こんなことでまけるものか。',
      },
      {
        japanese: '誰が手伝ってやるものか。',
        english: 'As if I would help them!',
        furigana: 'だれがてつだってやるものか。',
      },
    ],
  },
  {
    pattern: 'ずにはいられない',
    meaning: 'cannot help but / cannot resist doing',
    formation: 'Verb ない-stem + ずにはいられない (する → せずにはいられない)',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'ずにはいられない means "cannot help but" or "cannot resist doing." It expresses that the urge to do something is so strong that the speaker is unable to suppress it. The action happens involuntarily due to emotion, instinct, or circumstances.',
    notes:
      'ないではいられない is the more colloquial equivalent with the same meaning. ず is the classical negative form (equivalent to ないで). する becomes せず. The pattern implies the action is beyond conscious control.',
    common_mistakes:
      'Confusing the ず conjugation. ず replaces ない: 食べない → 食べず, 言わない → 言わず, しない → せず. The irregular form for する (せず) is often forgotten.',
    examples: [
      {
        japanese: 'あの映画を見たら、泣かずにはいられなかった。',
        english: 'When I watched that movie, I could not help but cry.',
        furigana: 'あのえいがをみたら、なかずにはいられなかった。',
      },
      {
        japanese: '彼の冗談を聞くと、笑わずにはいられない。',
        english: 'When I hear his jokes, I cannot help but laugh.',
        furigana: 'かれのじょうだんをきくと、わらわずにはいられない。',
      },
      {
        japanese: 'この事件について、疑問を感じずにはいられない。',
        english: 'I cannot help but feel doubt about this incident.',
        furigana: 'このじけんについて、ぎもんをかんじずにはいられない。',
      },
    ],
  },
  {
    pattern: 'てはいられない',
    meaning: 'cannot keep doing / cannot afford to keep',
    formation: 'Verb て-form + はいられない',
    jlpt_level: 'N2',
    difficulty: 'advanced',
    explanation:
      'てはいられない means "cannot keep doing" or "cannot afford to continue." It expresses that the speaker feels urgency and can no longer remain in their current state. Circumstances demand action, making it impossible to continue as before.',
    notes:
      'ではいられない is used with nouns/adjectives: 子供ではいられない (cannot remain a child). Common collocations: 黙ってはいられない (cannot stay silent), 寝てはいられない (cannot stay in bed), 遊んではいられない (cannot keep playing around).',
    common_mistakes:
      'Confusing てはいられない with ずにはいられない. てはいられない means "cannot keep/continue doing X" (urgency to stop), while ずにはいられない means "cannot help but do X" (compulsion to act). They express opposite pressures.',
    examples: [
      {
        japanese: '締め切りが近いので、のんびりしてはいられない。',
        english: 'The deadline is approaching, so I cannot afford to relax.',
        furigana: 'しめきりがちかいので、のんびりしてはいられない。',
      },
      {
        japanese: 'こんな不正を見て、黙ってはいられない。',
        english: 'Seeing such injustice, I cannot stay silent.',
        furigana: 'こんなふせいをみて、だまってはいられない。',
      },
      {
        japanese: '試験が来週なので、遊んではいられない。',
        english: 'The exam is next week, so I cannot keep playing around.',
        furigana: 'しけんがらいしゅうなので、あそんではいられない。',
      },
      {
        japanese: 'いつまでも泣いてはいられない。前を向こう。',
        english: 'I cannot keep crying forever. Let me look ahead.',
        furigana: 'いつまでもないてはいられない。まえをむこう。',
      },
    ],
  },
]
