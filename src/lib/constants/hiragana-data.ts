import type { KanaCharacter } from '@/types/kana'

export const HIRAGANA_CHARACTERS: KanaCharacter[] = [
  // ===========================================================================
  // GROUP 1: VOWELS (5 characters)
  // ===========================================================================
  {
    character: 'あ',
    romaji: 'a',
    type: 'hiragana',
    group: 'vowel',
    display_order: 1,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'Looks like an Antelope running. The curved lines suggest the horns and body of an antelope in motion.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'あめ', reading: 'ame', meaning: 'rain' },
      { word: 'あさ', reading: 'asa', meaning: 'morning' },
      { word: 'あか', reading: 'aka', meaning: 'red' },
    ],
  },
  {
    character: 'い',
    romaji: 'i',
    type: 'hiragana',
    group: 'vowel',
    display_order: 2,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'Two eels swimming side by side. The two vertical strokes look like a pair of eels in the water.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'いぬ', reading: 'inu', meaning: 'dog' },
      { word: 'いえ', reading: 'ie', meaning: 'house' },
      { word: 'いけ', reading: 'ike', meaning: 'pond' },
    ],
  },
  {
    character: 'う',
    romaji: 'u',
    type: 'hiragana',
    group: 'vowel',
    display_order: 3,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'An oozing drop falling down. The shape looks like a droplet about to drip, making the "oo" sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'うみ', reading: 'umi', meaning: 'sea' },
      { word: 'うえ', reading: 'ue', meaning: 'above' },
      { word: 'うた', reading: 'uta', meaning: 'song' },
    ],
  },
  {
    character: 'え',
    romaji: 'e',
    type: 'hiragana',
    group: 'vowel',
    display_order: 4,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'An Energetic dancer with arms spread wide. The crossing strokes look like a person striking an energetic pose.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'えき', reading: 'eki', meaning: 'station' },
      { word: 'えん', reading: 'en', meaning: 'yen / circle' },
      { word: 'え', reading: 'e', meaning: 'picture' },
    ],
  },
  {
    character: 'お',
    romaji: 'o',
    type: 'hiragana',
    group: 'vowel',
    display_order: 5,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A man bowing and saying "Oh!" The character looks like a person leaning forward in surprise.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'おに', reading: 'oni', meaning: 'demon / ogre' },
      { word: 'おと', reading: 'oto', meaning: 'sound' },
      { word: 'おか', reading: 'oka', meaning: 'hill' },
    ],
  },

  // ===========================================================================
  // GROUP 2: K ROW (5 characters)
  // ===========================================================================
  {
    character: 'か',
    romaji: 'ka',
    type: 'hiragana',
    group: 'k-row',
    display_order: 6,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A Kite cutting through the wind. The angled strokes look like a kite with its string trailing behind.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'かさ', reading: 'kasa', meaning: 'umbrella' },
      { word: 'かわ', reading: 'kawa', meaning: 'river' },
      { word: 'かお', reading: 'kao', meaning: 'face' },
    ],
  },
  {
    character: 'き',
    romaji: 'ki',
    type: 'hiragana',
    group: 'k-row',
    display_order: 7,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'A Key with its teeth showing. The horizontal strokes are the teeth of the key.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'きく', reading: 'kiku', meaning: 'to listen' },
      { word: 'きた', reading: 'kita', meaning: 'north' },
      { word: 'き', reading: 'ki', meaning: 'tree' },
    ],
  },
  {
    character: 'く',
    romaji: 'ku',
    type: 'hiragana',
    group: 'k-row',
    display_order: 8,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A Cuckoo bird beak opening wide. The simple angle looks like a bird opening its beak to call "ku-ku!"',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'くち', reading: 'kuchi', meaning: 'mouth' },
      { word: 'くも', reading: 'kumo', meaning: 'cloud / spider' },
      { word: 'くに', reading: 'kuni', meaning: 'country' },
    ],
  },
  {
    character: 'け',
    romaji: 'ke',
    type: 'hiragana',
    group: 'k-row',
    display_order: 9,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A Keg of beer on its side. The vertical line is the tap, and the curved stroke is the barrel.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'けす', reading: 'kesu', meaning: 'to erase / turn off' },
      { word: 'けむり', reading: 'kemuri', meaning: 'smoke' },
    ],
  },
  {
    character: 'こ',
    romaji: 'ko',
    type: 'hiragana',
    group: 'k-row',
    display_order: 10,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'Two Corners stacked. The two horizontal strokes form corners, like the corners of a box.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'こえ', reading: 'koe', meaning: 'voice' },
      { word: 'ここ', reading: 'koko', meaning: 'here' },
      { word: 'こども', reading: 'kodomo', meaning: 'child' },
    ],
  },

  // ===========================================================================
  // GROUP 3: S ROW (5 characters)
  // ===========================================================================
  {
    character: 'さ',
    romaji: 'sa',
    type: 'hiragana',
    group: 's-row',
    display_order: 11,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A Samurai slashing with a sword. The crossing strokes look like a sword cutting through the air.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'さくら', reading: 'sakura', meaning: 'cherry blossom' },
      { word: 'さかな', reading: 'sakana', meaning: 'fish' },
      { word: 'さむい', reading: 'samui', meaning: 'cold' },
    ],
  },
  {
    character: 'し',
    romaji: 'shi',
    type: 'hiragana',
    group: 's-row',
    display_order: 12,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A fishing hook — you can catch fiSHI with it! The single curved stroke looks exactly like a hook.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'しろ', reading: 'shiro', meaning: 'white / castle' },
      { word: 'した', reading: 'shita', meaning: 'below / tongue' },
      { word: 'しま', reading: 'shima', meaning: 'island' },
    ],
  },
  {
    character: 'す',
    romaji: 'su',
    type: 'hiragana',
    group: 's-row',
    display_order: 13,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A Swinging lasso. The loop at the bottom looks like a lasso being swung around, making a "su" whooshing sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'すし', reading: 'sushi', meaning: 'sushi' },
      { word: 'すき', reading: 'suki', meaning: 'like / fond of' },
      { word: 'すな', reading: 'suna', meaning: 'sand' },
    ],
  },
  {
    character: 'せ',
    romaji: 'se',
    type: 'hiragana',
    group: 's-row',
    display_order: 14,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A person SEtting down a heavy load. The shape looks like someone bending at the waist to set something down.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'せかい', reading: 'sekai', meaning: 'world' },
      { word: 'せんせい', reading: 'sensei', meaning: 'teacher' },
    ],
  },
  {
    character: 'そ',
    romaji: 'so',
    type: 'hiragana',
    group: 's-row',
    display_order: 15,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A zigzag — SOoo many turns! The character zigzags like a winding path going back and forth.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'そら', reading: 'sora', meaning: 'sky' },
      { word: 'そと', reading: 'soto', meaning: 'outside' },
      { word: 'そこ', reading: 'soko', meaning: 'there / bottom' },
    ],
  },

  // ===========================================================================
  // GROUP 4: T ROW (5 characters)
  // ===========================================================================
  {
    character: 'た',
    romaji: 'ta',
    type: 'hiragana',
    group: 't-row',
    display_order: 16,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'Looks like "ta" written in script. The strokes cross like the letter "t" with an added "a" curve.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'たべる', reading: 'taberu', meaning: 'to eat' },
      { word: 'たかい', reading: 'takai', meaning: 'tall / expensive' },
      { word: 'たまご', reading: 'tamago', meaning: 'egg' },
    ],
  },
  {
    character: 'ち',
    romaji: 'chi',
    type: 'hiragana',
    group: 't-row',
    display_order: 17,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A Cheerleader doing a high kick. The curved stroke swoops up like a leg kicking, cheering "chi!"',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ちち', reading: 'chichi', meaning: 'father' },
      { word: 'ちかい', reading: 'chikai', meaning: 'near / close' },
      { word: 'ちず', reading: 'chizu', meaning: 'map' },
    ],
  },
  {
    character: 'つ',
    romaji: 'tsu',
    type: 'hiragana',
    group: 't-row',
    display_order: 18,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A TSUnami wave crashing. The single sweeping curve looks like a giant wave about to crash down.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'つき', reading: 'tsuki', meaning: 'moon' },
      { word: 'つくえ', reading: 'tsukue', meaning: 'desk' },
      { word: 'つよい', reading: 'tsuyoi', meaning: 'strong' },
    ],
  },
  {
    character: 'て',
    romaji: 'te',
    type: 'hiragana',
    group: 't-row',
    display_order: 19,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'The Tail of a dog wagging. The curved stroke sweeps like a happy dog tail.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'て', reading: 'te', meaning: 'hand' },
      { word: 'てんき', reading: 'tenki', meaning: 'weather' },
      { word: 'てがみ', reading: 'tegami', meaning: 'letter' },
    ],
  },
  {
    character: 'と',
    romaji: 'to',
    type: 'hiragana',
    group: 't-row',
    display_order: 20,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A TOe stubbing against something. The shape looks like a foot with a toe sticking out and hitting a wall.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'とり', reading: 'tori', meaning: 'bird' },
      { word: 'ともだち', reading: 'tomodachi', meaning: 'friend' },
      { word: 'とけい', reading: 'tokei', meaning: 'clock / watch' },
    ],
  },

  // ===========================================================================
  // GROUP 5: N ROW (5 characters)
  // ===========================================================================
  {
    character: 'な',
    romaji: 'na',
    type: 'hiragana',
    group: 'n-row',
    display_order: 21,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'A Knot being tied. The crossing strokes in the middle look like a knot in a rope — "na" as in "knot."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'なつ', reading: 'natsu', meaning: 'summer' },
      { word: 'なまえ', reading: 'namae', meaning: 'name' },
      { word: 'なか', reading: 'naka', meaning: 'inside / middle' },
    ],
  },
  {
    character: 'に',
    romaji: 'ni',
    type: 'hiragana',
    group: 'n-row',
    display_order: 22,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A Needle and thread. The vertical line is the needle, and the curves are thread loops — sewing on your kNEE.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'にく', reading: 'niku', meaning: 'meat' },
      { word: 'にし', reading: 'nishi', meaning: 'west' },
      { word: 'にわ', reading: 'niwa', meaning: 'garden' },
    ],
  },
  {
    character: 'ぬ',
    romaji: 'nu',
    type: 'hiragana',
    group: 'n-row',
    display_order: 23,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'NOOdles tangled in a bowl. The looping strokes look like noodles swirling around.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぬの', reading: 'nuno', meaning: 'cloth' },
      { word: 'いぬ', reading: 'inu', meaning: 'dog' },
    ],
  },
  {
    character: 'ね',
    romaji: 'ne',
    type: 'hiragana',
    group: 'n-row',
    display_order: 24,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A cat sitting with its tail curled — cats say "NEko" in Japanese. The loop is the curled tail.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ねこ', reading: 'neko', meaning: 'cat' },
      { word: 'ねる', reading: 'neru', meaning: 'to sleep' },
    ],
  },
  {
    character: 'の',
    romaji: 'no',
    type: 'hiragana',
    group: 'n-row',
    display_order: 25,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A NO entry sign. The single looping stroke looks like the circle of a "no" sign.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'のむ', reading: 'nomu', meaning: 'to drink' },
      { word: 'のる', reading: 'noru', meaning: 'to ride' },
      { word: 'もの', reading: 'mono', meaning: 'thing' },
    ],
  },

  // ===========================================================================
  // GROUP 6: H ROW (5 characters)
  // ===========================================================================
  {
    character: 'は',
    romaji: 'ha',
    type: 'hiragana',
    group: 'h-row',
    display_order: 26,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A HArd worker bent over a plow. The vertical stroke is the person, and the curved stroke is the plow.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'はな', reading: 'hana', meaning: 'flower / nose' },
      { word: 'はし', reading: 'hashi', meaning: 'bridge / chopsticks' },
      { word: 'はる', reading: 'haru', meaning: 'spring' },
    ],
  },
  {
    character: 'ひ',
    romaji: 'hi',
    type: 'hiragana',
    group: 'h-row',
    display_order: 27,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A smiling mouth saying "HEE hee!" The single curved stroke looks like a wide grin.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ひと', reading: 'hito', meaning: 'person' },
      { word: 'ひる', reading: 'hiru', meaning: 'noon / daytime' },
      { word: 'ひ', reading: 'hi', meaning: 'fire / day' },
    ],
  },
  {
    character: 'ふ',
    romaji: 'fu',
    type: 'hiragana',
    group: 'h-row',
    display_order: 28,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'Mount FUji with clouds. The top dot is the peak, and the lower strokes are the mountain slopes with clouds.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ふゆ', reading: 'fuyu', meaning: 'winter' },
      { word: 'ふね', reading: 'fune', meaning: 'ship / boat' },
      { word: 'ふく', reading: 'fuku', meaning: 'clothes' },
    ],
  },
  {
    character: 'へ',
    romaji: 'he',
    type: 'hiragana',
    group: 'h-row',
    display_order: 29,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A mountain HEight or peak. The simple angle looks like the peak of a mountain or a tent.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'へや', reading: 'heya', meaning: 'room' },
      { word: 'へん', reading: 'hen', meaning: 'strange / weird' },
    ],
  },
  {
    character: 'ほ',
    romaji: 'ho',
    type: 'hiragana',
    group: 'h-row',
    display_order: 30,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'A HOly cross with banners. The vertical stroke with horizontal strokes and curves look like a decorated religious cross.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ほし', reading: 'hoshi', meaning: 'star' },
      { word: 'ほん', reading: 'hon', meaning: 'book' },
      { word: 'ほね', reading: 'hone', meaning: 'bone' },
    ],
  },

  // ===========================================================================
  // GROUP 7: M ROW (5 characters)
  // ===========================================================================
  {
    character: 'ま',
    romaji: 'ma',
    type: 'hiragana',
    group: 'm-row',
    display_order: 31,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A MAma holding a baby. The loop at the bottom cradles like arms holding a child.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'まち', reading: 'machi', meaning: 'town / city' },
      { word: 'まど', reading: 'mado', meaning: 'window' },
      { word: 'まえ', reading: 'mae', meaning: 'front / before' },
    ],
  },
  {
    character: 'み',
    romaji: 'mi',
    type: 'hiragana',
    group: 'm-row',
    display_order: 32,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'The number 21 — "twenty-one, ME!" Two curves that look like the numbers 2 and 1 combined.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'みず', reading: 'mizu', meaning: 'water' },
      { word: 'みみ', reading: 'mimi', meaning: 'ear' },
      { word: 'みせ', reading: 'mise', meaning: 'shop / store' },
    ],
  },
  {
    character: 'む',
    romaji: 'mu',
    type: 'hiragana',
    group: 'm-row',
    display_order: 33,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A COW going "MOO." The character has a shape like a cow face with a loop for the nose ring.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'むし', reading: 'mushi', meaning: 'insect / bug' },
      { word: 'むら', reading: 'mura', meaning: 'village' },
      { word: 'むすめ', reading: 'musume', meaning: 'daughter' },
    ],
  },
  {
    character: 'め',
    romaji: 'me',
    type: 'hiragana',
    group: 'm-row',
    display_order: 34,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'An eye (ME in Japanese is eye). The loops look like the shape of an eye seen from the side.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'め', reading: 'me', meaning: 'eye' },
      { word: 'めし', reading: 'meshi', meaning: 'rice / meal' },
    ],
  },
  {
    character: 'も',
    romaji: 'mo',
    type: 'hiragana',
    group: 'm-row',
    display_order: 35,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A fishhook catching MOre fish. The shape looks like a hook with extra barbs to catch more.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'もの', reading: 'mono', meaning: 'thing' },
      { word: 'もり', reading: 'mori', meaning: 'forest' },
      { word: 'もも', reading: 'momo', meaning: 'peach' },
    ],
  },

  // ===========================================================================
  // GROUP 8: Y ROW (3 characters)
  // ===========================================================================
  {
    character: 'や',
    romaji: 'ya',
    type: 'hiragana',
    group: 'y-row',
    display_order: 36,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A YAk with horns. The top strokes are the horns of a yak, and the bottom is the body.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'やま', reading: 'yama', meaning: 'mountain' },
      { word: 'やすい', reading: 'yasui', meaning: 'cheap / easy' },
      { word: 'やさい', reading: 'yasai', meaning: 'vegetable' },
    ],
  },
  {
    character: 'ゆ',
    romaji: 'yu',
    type: 'hiragana',
    group: 'y-row',
    display_order: 37,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A YUnique fish swimming. The flowing strokes look like a fish with a flowing tail gliding through water.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ゆき', reading: 'yuki', meaning: 'snow' },
      { word: 'ゆめ', reading: 'yume', meaning: 'dream' },
      { word: 'ゆび', reading: 'yubi', meaning: 'finger' },
    ],
  },
  {
    character: 'よ',
    romaji: 'yo',
    type: 'hiragana',
    group: 'y-row',
    display_order: 38,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A YOga pose. The character looks like a person doing a yoga stretch with one arm reaching up.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'よる', reading: 'yoru', meaning: 'night' },
      { word: 'よむ', reading: 'yomu', meaning: 'to read' },
      { word: 'よこ', reading: 'yoko', meaning: 'side / horizontal' },
    ],
  },

  // ===========================================================================
  // GROUP 9: R ROW (5 characters)
  // ===========================================================================
  {
    character: 'ら',
    romaji: 'ra',
    type: 'hiragana',
    group: 'r-row',
    display_order: 39,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A RAbit ear flopping down. The curved stroke droops like a bunny ear.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'らいねん', reading: 'rainen', meaning: 'next year' },
      { word: 'さくら', reading: 'sakura', meaning: 'cherry blossom' },
    ],
  },
  {
    character: 'り',
    romaji: 'ri',
    type: 'hiragana',
    group: 'r-row',
    display_order: 40,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'Two REEds growing by the river. The two vertical strokes look like tall reeds swaying in the wind.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'りんご', reading: 'ringo', meaning: 'apple' },
      { word: 'とり', reading: 'tori', meaning: 'bird' },
    ],
  },
  {
    character: 'る',
    romaji: 'ru',
    type: 'hiragana',
    group: 'r-row',
    display_order: 41,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A ROOt growing in a loop. The stroke loops at the bottom like a plant root curling underground.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'みる', reading: 'miru', meaning: 'to see / watch' },
      { word: 'たべる', reading: 'taberu', meaning: 'to eat' },
    ],
  },
  {
    character: 'れ',
    romaji: 're',
    type: 'hiragana',
    group: 'r-row',
    display_order: 42,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A REindeer kicking. The right stroke swoops out like a leg kicking, while the left stroke is the body.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'れきし', reading: 'rekishi', meaning: 'history' },
      { word: 'きれい', reading: 'kirei', meaning: 'beautiful / clean' },
    ],
  },
  {
    character: 'ろ',
    romaji: 'ro',
    type: 'hiragana',
    group: 'r-row',
    display_order: 43,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'A ROad winding ahead. The single stroke curves like a path or road stretching into the distance.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ろく', reading: 'roku', meaning: 'six' },
      { word: 'しろ', reading: 'shiro', meaning: 'white / castle' },
    ],
  },

  // ===========================================================================
  // GROUP 10: W ROW + N (3 characters)
  // ===========================================================================
  {
    character: 'わ',
    romaji: 'wa',
    type: 'hiragana',
    group: 'w-row',
    display_order: 44,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'A person saying "WA!" in surprise. The character looks like a person with arms thrown up in shock.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'わたし', reading: 'watashi', meaning: 'I / me' },
      { word: 'わかる', reading: 'wakaru', meaning: 'to understand' },
    ],
  },
  {
    character: 'を',
    romaji: 'wo',
    type: 'hiragana',
    group: 'w-row',
    display_order: 45,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'A WObbly tightrope walker. The curving strokes look like someone wobbling as they balance on a wire.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'みずをのむ', reading: 'mizu wo nomu', meaning: 'to drink water (particle usage)' },
      { word: 'ほんをよむ', reading: 'hon wo yomu', meaning: 'to read a book (particle usage)' },
    ],
  },
  {
    character: 'ん',
    romaji: 'n',
    type: 'hiragana',
    group: 'w-row',
    display_order: 46,
    is_combination: false,
    stroke_count: 1,
    mnemonic:
      'The lowercase letter "n" in English. This is the only hiragana that is a single consonant with no vowel.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'にほん', reading: 'nihon', meaning: 'Japan' },
      { word: 'ほん', reading: 'hon', meaning: 'book' },
      { word: 'せんせい', reading: 'sensei', meaning: 'teacher' },
    ],
  },

  // ===========================================================================
  // GROUP 11: G & Z ROWS — DAKUTEN (10 characters)
  // ===========================================================================
  {
    character: 'が',
    romaji: 'ga',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 47,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'か (ka) with dakuten becomes GA. Adding the two dots voices the K into a G sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'がっこう', reading: 'gakkou', meaning: 'school' },
      { word: 'がいこく', reading: 'gaikoku', meaning: 'foreign country' },
    ],
  },
  {
    character: 'ぎ',
    romaji: 'gi',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 48,
    is_combination: false,
    stroke_count: 6,
    mnemonic:
      'き (ki) with dakuten becomes GI. The two dots transform the K sound into a G.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぎんこう', reading: 'ginkou', meaning: 'bank' },
      { word: 'かぎ', reading: 'kagi', meaning: 'key' },
    ],
  },
  {
    character: 'ぐ',
    romaji: 'gu',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 49,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'く (ku) with dakuten becomes GU. The voicing marks turn K into G — think "GOO."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぐんたい', reading: 'guntai', meaning: 'army' },
      { word: 'すぐ', reading: 'sugu', meaning: 'immediately' },
    ],
  },
  {
    character: 'げ',
    romaji: 'ge',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 50,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'け (ke) with dakuten becomes GE. The dots add voicing, turning K into G.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'げんき', reading: 'genki', meaning: 'energetic / healthy' },
      { word: 'げつようび', reading: 'getsuyoubi', meaning: 'Monday' },
    ],
  },
  {
    character: 'ご',
    romaji: 'go',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 51,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'こ (ko) with dakuten becomes GO. The two dots voice it — ready, set, GO!',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ごご', reading: 'gogo', meaning: 'afternoon' },
      { word: 'にほんご', reading: 'nihongo', meaning: 'Japanese language' },
    ],
  },
  {
    character: 'ざ',
    romaji: 'za',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 52,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'さ (sa) with dakuten becomes ZA. The dakuten marks buzz the S into a Z sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ざっし', reading: 'zasshi', meaning: 'magazine' },
      { word: 'おざら', reading: 'ozara', meaning: 'plate' },
    ],
  },
  {
    character: 'じ',
    romaji: 'ji',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 53,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'し (shi) with dakuten becomes JI. The voiced version of shi — like the letter G in "gee."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'じかん', reading: 'jikan', meaning: 'time' },
      { word: 'じしん', reading: 'jishin', meaning: 'earthquake / confidence' },
    ],
  },
  {
    character: 'ず',
    romaji: 'zu',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 54,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'す (su) with dakuten becomes ZU. The S buzzes into a Z with the voicing marks.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ちず', reading: 'chizu', meaning: 'map' },
      { word: 'みず', reading: 'mizu', meaning: 'water' },
    ],
  },
  {
    character: 'ぜ',
    romaji: 'ze',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 55,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'せ (se) with dakuten becomes ZE. The voicing turns the soft S into a buzzing Z.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぜんぶ', reading: 'zenbu', meaning: 'all / everything' },
      { word: 'かぜ', reading: 'kaze', meaning: 'wind / cold' },
    ],
  },
  {
    character: 'ぞ',
    romaji: 'zo',
    type: 'hiragana',
    group: 'g-z-row',
    display_order: 56,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'そ (so) with dakuten becomes ZO. The Z voicing makes it sound like "zone."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぞう', reading: 'zou', meaning: 'elephant' },
      { word: 'かぞく', reading: 'kazoku', meaning: 'family' },
    ],
  },

  // ===========================================================================
  // GROUP 12: D & B ROWS — DAKUTEN (10 characters)
  // ===========================================================================
  {
    character: 'だ',
    romaji: 'da',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 57,
    is_combination: false,
    stroke_count: 6,
    mnemonic:
      'た (ta) with dakuten becomes DA. The T becomes D with the voicing marks — like "DAD."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'だれ', reading: 'dare', meaning: 'who' },
      { word: 'だいがく', reading: 'daigaku', meaning: 'university' },
    ],
  },
  {
    character: 'ぢ',
    romaji: 'di',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 58,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'ち (chi) with dakuten becomes DI (ji). Rarely used — じ is preferred in modern Japanese.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'はなぢ', reading: 'hanadi', meaning: 'nosebleed' },
      { word: 'つづく', reading: 'tsuduku', meaning: 'to continue' },
    ],
  },
  {
    character: 'づ',
    romaji: 'du',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 59,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'つ (tsu) with dakuten becomes DU (zu). Rarely used — ず is preferred in most cases.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'つづく', reading: 'tsuzuku', meaning: 'to continue' },
      { word: 'みかづき', reading: 'mikazuki', meaning: 'crescent moon' },
    ],
  },
  {
    character: 'で',
    romaji: 'de',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 60,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'て (te) with dakuten becomes DE. The T turns to D — "de" as in "desk."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'でんわ', reading: 'denwa', meaning: 'telephone' },
      { word: 'でぐち', reading: 'deguchi', meaning: 'exit' },
    ],
  },
  {
    character: 'ど',
    romaji: 'do',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 61,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'と (to) with dakuten becomes DO. The voiced T makes a D — "do" as in "door."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'どこ', reading: 'doko', meaning: 'where' },
      { word: 'まど', reading: 'mado', meaning: 'window' },
    ],
  },
  {
    character: 'ば',
    romaji: 'ba',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 62,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'は (ha) with dakuten becomes BA. The H becomes B with voicing — "ba" as in "bat."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ばしょ', reading: 'basho', meaning: 'place' },
      { word: 'ばん', reading: 'ban', meaning: 'evening / number' },
    ],
  },
  {
    character: 'び',
    romaji: 'bi',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 63,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'ひ (hi) with dakuten becomes BI. The two dots make H into B — "bi" as in "bee."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'びじん', reading: 'bijin', meaning: 'beautiful person' },
      { word: 'えび', reading: 'ebi', meaning: 'shrimp' },
    ],
  },
  {
    character: 'ぶ',
    romaji: 'bu',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 64,
    is_combination: false,
    stroke_count: 6,
    mnemonic:
      'ふ (fu) with dakuten becomes BU. The voicing changes F to B — "bu" as in "boo."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぶた', reading: 'buta', meaning: 'pig' },
      { word: 'ぶんか', reading: 'bunka', meaning: 'culture' },
    ],
  },
  {
    character: 'べ',
    romaji: 'be',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 65,
    is_combination: false,
    stroke_count: 3,
    mnemonic:
      'へ (he) with dakuten becomes BE. The voicing turns H into B — "be" as in "bed."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'べんきょう', reading: 'benkyou', meaning: 'study' },
      { word: 'たべる', reading: 'taberu', meaning: 'to eat' },
    ],
  },
  {
    character: 'ぼ',
    romaji: 'bo',
    type: 'hiragana',
    group: 'd-b-row',
    display_order: 66,
    is_combination: false,
    stroke_count: 6,
    mnemonic:
      'ほ (ho) with dakuten becomes BO. The H voices to B — "bo" as in "boat."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぼく', reading: 'boku', meaning: 'I / me (masculine)' },
      { word: 'ぼうし', reading: 'boushi', meaning: 'hat' },
    ],
  },

  // ===========================================================================
  // GROUP 13: P ROW — HANDAKUTEN (5 characters)
  // ===========================================================================
  {
    character: 'ぱ',
    romaji: 'pa',
    type: 'hiragana',
    group: 'p-row',
    display_order: 67,
    is_combination: false,
    stroke_count: 4,
    mnemonic:
      'は (ha) with handakuten (゜) becomes PA. The small circle changes H to a popping P sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぱん', reading: 'pan', meaning: 'bread' },
      { word: 'ぱーてぃー', reading: 'paatii', meaning: 'party' },
    ],
  },
  {
    character: 'ぴ',
    romaji: 'pi',
    type: 'hiragana',
    group: 'p-row',
    display_order: 68,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'ひ (hi) with handakuten becomes PI. The circle transforms H into P — "pi" as in "pizza."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぴかぴか', reading: 'pikapika', meaning: 'sparkling / shiny' },
      { word: 'えんぴつ', reading: 'enpitsu', meaning: 'pencil' },
    ],
  },
  {
    character: 'ぷ',
    romaji: 'pu',
    type: 'hiragana',
    group: 'p-row',
    display_order: 69,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'ふ (fu) with handakuten becomes PU. The circle mark pops the F into a P.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぷーる', reading: 'puuru', meaning: 'pool' },
      { word: 'てんぷら', reading: 'tenpura', meaning: 'tempura' },
    ],
  },
  {
    character: 'ぺ',
    romaji: 'pe',
    type: 'hiragana',
    group: 'p-row',
    display_order: 70,
    is_combination: false,
    stroke_count: 2,
    mnemonic:
      'へ (he) with handakuten becomes PE. The small circle gives H a popping P — "pe" as in "pet."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ぺん', reading: 'pen', meaning: 'pen' },
      { word: 'ぺーじ', reading: 'peeji', meaning: 'page' },
    ],
  },
  {
    character: 'ぽ',
    romaji: 'po',
    type: 'hiragana',
    group: 'p-row',
    display_order: 71,
    is_combination: false,
    stroke_count: 5,
    mnemonic:
      'ほ (ho) with handakuten becomes PO. The circle makes the H pop into P — "po" as in "post."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'たんぽぽ', reading: 'tanpopo', meaning: 'dandelion' },
      { word: 'にっぽん', reading: 'nippon', meaning: 'Japan' },
    ],
  },

  // ===========================================================================
  // GROUP 14: YOON — COMBINATIONS (8 characters)
  // ===========================================================================
  {
    character: 'きゃ',
    romaji: 'kya',
    type: 'hiragana',
    group: 'yoon',
    display_order: 72,
    is_combination: true,
    stroke_count: 7,
    mnemonic:
      'き (ki) + small や (ya) merge into KYA. The small ya combines with the ki consonant to create a blended sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'きゃく', reading: 'kyaku', meaning: 'guest / customer' },
      { word: 'きゃべつ', reading: 'kyabetsu', meaning: 'cabbage' },
    ],
  },
  {
    character: 'きゅ',
    romaji: 'kyu',
    type: 'hiragana',
    group: 'yoon',
    display_order: 73,
    is_combination: true,
    stroke_count: 6,
    mnemonic:
      'き (ki) + small ゆ (yu) merge into KYU. The consonant K blends with the yu sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'きゅう', reading: 'kyuu', meaning: 'nine' },
      { word: 'ぎゅうにゅう', reading: 'gyuunyuu', meaning: 'milk' },
    ],
  },
  {
    character: 'きょ',
    romaji: 'kyo',
    type: 'hiragana',
    group: 'yoon',
    display_order: 74,
    is_combination: true,
    stroke_count: 6,
    mnemonic:
      'き (ki) + small よ (yo) merge into KYO. The K consonant combines with yo for a smooth blend.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'きょう', reading: 'kyou', meaning: 'today' },
      { word: 'とうきょう', reading: 'toukyou', meaning: 'Tokyo' },
    ],
  },
  {
    character: 'しゃ',
    romaji: 'sha',
    type: 'hiragana',
    group: 'yoon',
    display_order: 75,
    is_combination: true,
    stroke_count: 4,
    mnemonic:
      'し (shi) + small や (ya) merge into SHA. The shi consonant blends with ya to make the "sha" sound.',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'しゃしん', reading: 'shashin', meaning: 'photograph' },
      { word: 'かいしゃ', reading: 'kaisha', meaning: 'company' },
    ],
  },
  {
    character: 'しゅ',
    romaji: 'shu',
    type: 'hiragana',
    group: 'yoon',
    display_order: 76,
    is_combination: true,
    stroke_count: 3,
    mnemonic:
      'し (shi) + small ゆ (yu) merge into SHU. The shi consonant blends with yu — like "shoe."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'しゅくだい', reading: 'shukudai', meaning: 'homework' },
      { word: 'しゅみ', reading: 'shumi', meaning: 'hobby' },
    ],
  },
  {
    character: 'しょ',
    romaji: 'sho',
    type: 'hiragana',
    group: 'yoon',
    display_order: 77,
    is_combination: true,
    stroke_count: 3,
    mnemonic:
      'し (shi) + small よ (yo) merge into SHO. The blended sound is like "show."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'しょうがっこう', reading: 'shougakkou', meaning: 'elementary school' },
      { word: 'しょくじ', reading: 'shokuji', meaning: 'meal' },
    ],
  },
  {
    character: 'ちゃ',
    romaji: 'cha',
    type: 'hiragana',
    group: 'yoon',
    display_order: 78,
    is_combination: true,
    stroke_count: 5,
    mnemonic:
      'ち (chi) + small や (ya) merge into CHA. The chi consonant blends with ya — like "cha" in "chai tea."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'おちゃ', reading: 'ocha', meaning: 'tea' },
      { word: 'ちゃいろ', reading: 'chairo', meaning: 'brown' },
    ],
  },
  {
    character: 'ちゅ',
    romaji: 'chu',
    type: 'hiragana',
    group: 'yoon',
    display_order: 79,
    is_combination: true,
    stroke_count: 4,
    mnemonic:
      'ち (chi) + small ゆ (yu) merge into CHU. The chi consonant blends with yu — like "chew."',
    stroke_order_svg: null,
    audio_url: null,
    example_words: [
      { word: 'ちゅうごく', reading: 'chuugoku', meaning: 'China' },
      { word: 'ちゅうしゃ', reading: 'chuusha', meaning: 'injection / parking' },
    ],
  },
]
