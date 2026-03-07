export type GrammarFunctionId =
  | 'time'
  | 'causation'
  | 'contrast'
  | 'condition'
  | 'desire-intent'
  | 'ability'
  | 'obligation'
  | 'permission'
  | 'giving-receiving'
  | 'hearsay'
  | 'change'
  | 'listing'
  | 'degree'
  | 'comparison'
  | 'honorifics'

export interface GrammarFunction {
  id: GrammarFunctionId
  name: string
  description: string
}

export const GRAMMAR_FUNCTIONS: GrammarFunction[] = [
  { id: 'time', name: 'Time & Sequence', description: 'Expressing time, order, and duration' },
  { id: 'causation', name: 'Cause & Reason', description: 'Explaining reasons and causes' },
  { id: 'contrast', name: 'Contrast & Concession', description: 'Showing contrast or unexpected outcomes' },
  { id: 'condition', name: 'Conditions', description: 'If/when/provided that' },
  { id: 'desire-intent', name: 'Desire & Intent', description: 'Wants, plans, and intentions' },
  { id: 'ability', name: 'Ability & Possibility', description: 'Can, able to, possible' },
  { id: 'obligation', name: 'Obligation & Necessity', description: 'Must, should, have to' },
  { id: 'permission', name: 'Permission & Prohibition', description: 'May, allowed to, forbidden' },
  { id: 'giving-receiving', name: 'Giving & Receiving', description: 'Actions done for others' },
  { id: 'hearsay', name: 'Hearsay & Appearance', description: 'Seems like, looks like, reportedly' },
  { id: 'change', name: 'Change & Becoming', description: 'Transitions and becoming' },
  { id: 'listing', name: 'Listing & Examples', description: 'Such as, and, also' },
  { id: 'degree', name: 'Degree & Extent', description: 'Too much, enough, to the point of' },
  { id: 'comparison', name: 'Comparison', description: 'More than, as much as, rather than' },
  { id: 'honorifics', name: 'Formal Language', description: 'Polite and formal expressions' },
]

export const PATTERN_FUNCTION_MAP: Record<string, GrammarFunctionId> = {
  // Time & Sequence
  'ている': 'time',
  'てから': 'time',
  'まえに': 'time',
  'あとで': 'time',
  'とき': 'time',
  'ていく': 'time',
  'てくる': 'time',
  'ところだ': 'time',
  'ばかり': 'time',
  'たとたんに': 'time',
  '最中に': 'time',
  '際に': 'time',
  'ついでに': 'time',
  '次第': 'time',
  'てはじめて': 'time',
  '以来': 'time',
  'たびに': 'time',
  '末に': 'time',
  'つつある': 'change',

  // Cause & Reason
  'から': 'causation',
  'ので': 'causation',
  'ために': 'causation',
  'し': 'causation',
  'によって': 'causation',
  'ものだから': 'causation',
  'からこそ': 'causation',
  'ことから': 'causation',
  'だけに': 'causation',

  // Contrast & Concession
  'けど/けれども': 'contrast',
  'のに': 'contrast',
  'ても': 'contrast',
  'ものの': 'contrast',
  'にもかかわらず': 'contrast',
  'くせに': 'contrast',
  'からといって': 'contrast',
  'どころか': 'contrast',
  'それにしても': 'contrast',
  'にしても': 'contrast',
  '一方で': 'contrast',
  'としても': 'contrast',
  'たところで': 'contrast',

  // Conditions
  'たら': 'condition',
  'ば': 'condition',
  'と': 'condition',
  'なら': 'condition',
  'さえ...ば': 'condition',
  'としたら・とすれば': 'condition',
  '限り': 'condition',
  'ないことには': 'condition',
  'てからでないと': 'condition',

  // Desire & Intent
  'たい': 'desire-intent',
  'たがる': 'desire-intent',
  'てほしい': 'desire-intent',
  'つもり': 'desire-intent',
  'よう/おう（意向形）': 'desire-intent',
  'ことにする': 'desire-intent',
  'ことにしている': 'desire-intent',
  'ようにする': 'desire-intent',

  // Ability & Possibility
  '可能形': 'ability',
  'ことができる': 'ability',
  'かもしれない': 'ability',
  'ようがない': 'ability',
  '得る/得ない': 'ability',
  'かねる': 'ability',
  'かねない': 'ability',

  // Obligation & Necessity
  'なければならない': 'obligation',
  'べきだ': 'obligation',
  'ざるを得ない': 'obligation',
  'ないわけにはいかない': 'obligation',
  'わけにはいかない': 'obligation',
  '以上': 'obligation',
  '以上は': 'obligation',
  '上は': 'obligation',
  'からには': 'obligation',

  // Giving & Receiving
  'てあげる': 'giving-receiving',
  'てくれる': 'giving-receiving',
  'てもらう': 'giving-receiving',

  // Hearsay & Appearance
  'そうだ（様態）': 'hearsay',
  'そうだ（伝聞）': 'hearsay',
  'らしい': 'hearsay',
  'ようだ/みたいだ': 'hearsay',
  'っぽい': 'hearsay',
  'はずだ': 'hearsay',
  'にちがいない': 'hearsay',
  'に違いない': 'hearsay',

  // Change & Becoming
  'なる': 'change',
  'する': 'change',
  'ようになる': 'change',
  'ことになる': 'change',
  'ことになっている': 'change',
  '一方だ': 'change',

  // Listing & Examples
  'や': 'listing',
  'とか': 'listing',
  '上に': 'listing',
  'に加えて': 'listing',
  'をはじめ': 'listing',
  'はもとより': 'listing',
  'のみならず': 'listing',
  'ばかりか': 'listing',

  // Degree & Extent
  'すぎる': 'degree',
  'やすい': 'degree',
  'にくい': 'degree',
  'きる': 'degree',
  'てたまらない': 'degree',
  'てならない': 'degree',
  'てしょうがない': 'degree',
  'ほど': 'degree',
  'がたい': 'degree',
  '抜く': 'degree',
  'だらけ': 'degree',
  '気味': 'degree',
  'がちだ': 'degree',

  // Comparison
  'より': 'comparison',
  'ほうが': 'comparison',
  'ほど...ない': 'comparison',
  'くらい/ぐらい': 'comparison',
  'かわりに': 'comparison',

  // Formal Language
  'において': 'honorifics',
  'にとって': 'honorifics',
  'に対して': 'honorifics',
  'に関して': 'honorifics',
  'について': 'honorifics',
  'として': 'honorifics',
  'をもとに': 'honorifics',
  'に沿って': 'honorifics',
  'を通じて・を通して': 'honorifics',
  'に基づいて': 'honorifics',
  'にわたって': 'honorifics',
  'を問わず': 'honorifics',
  'に際して': 'honorifics',
  'をめぐって': 'honorifics',
  'に先立って': 'honorifics',
  'を踏まえて': 'honorifics',
  'にあたって': 'honorifics',
  'をもって': 'honorifics',
}
