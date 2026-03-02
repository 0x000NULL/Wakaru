/**
 * Maps JMdict-simplified abbreviated POS tags to simplified POS categories.
 *
 * jmdict-simplified uses compact tags like "v1", "n", "adj-i".
 * We map them to a small set of categories that the application uses.
 */

const POS_MAP: Record<string, string> = {
  // Verbs
  v1: 'verb', // Ichidan verb
  'v1-s': 'verb', // Ichidan verb - kureru special class
  v2: 'verb', // Nidan verb (archaic)
  v4: 'verb', // Yodan verb (archaic)
  v5aru: 'verb', // Godan verb - aru special class
  v5b: 'verb', // Godan verb with 'bu' ending
  v5g: 'verb', // Godan verb with 'gu' ending
  v5k: 'verb', // Godan verb with 'ku' ending
  'v5k-s': 'verb', // Godan verb - Iku/Yuku special class
  v5m: 'verb', // Godan verb with 'mu' ending
  v5n: 'verb', // Godan verb with 'nu' ending
  v5r: 'verb', // Godan verb with 'ru' ending
  'v5r-i': 'verb', // Godan verb with 'ru' ending (irregular)
  v5s: 'verb', // Godan verb with 'su' ending
  v5t: 'verb', // Godan verb with 'tsu' ending
  v5u: 'verb', // Godan verb with 'u' ending
  'v5u-s': 'verb', // Godan verb with 'u' ending (special class)
  vk: 'verb', // Kuru verb - special class
  vs: 'verb', // suru verb
  'vs-i': 'verb', // suru verb - included
  'vs-s': 'verb', // suru verb - special class
  vz: 'verb', // Ichidan verb - zuru verb
  vi: 'verb', // intransitive verb
  vt: 'verb', // transitive verb
  'aux-v': 'verb', // auxiliary verb
  cop: 'verb', // copula

  // Nouns
  n: 'noun', // noun (common)
  'n-adv': 'noun', // adverbial noun
  'n-pref': 'noun', // noun, used as prefix
  'n-suf': 'noun', // noun, used as suffix
  'n-t': 'noun', // noun (temporal)
  num: 'noun', // numeric
  pn: 'noun', // pronoun
  ctr: 'counter', // counter

  // Adjectives
  'adj-i': 'i-adjective', // adjective (keiyoushi)
  'adj-ix': 'i-adjective', // adjective (keiyoushi) - yoi/ii class
  'adj-ku': 'i-adjective', // 'ku' adjective (archaic)
  'adj-shiku': 'i-adjective', // 'shiku' adjective (archaic)
  'adj-na': 'na-adjective', // adjectival nouns or quasi-adjectives
  'adj-no': 'na-adjective', // nouns which may take the genitive case particle 'no'
  'adj-pn': 'na-adjective', // pre-noun adjectival (rentaishi)
  'adj-t': 'na-adjective', // 'taru' adjective
  'adj-nari': 'na-adjective', // 'nari' adjective (archaic/formal)
  'adj-f': 'na-adjective', // noun or verb acting prenominally
  'aux-adj': 'i-adjective', // auxiliary adjective

  // Adverbs
  adv: 'adverb', // adverb (fukushi)
  'adv-to': 'adverb', // adverb taking the 'to' particle

  // Expressions & other
  exp: 'expression', // expressions (phrases, clauses, etc.)
  int: 'expression', // interjection
  conj: 'conjunction', // conjunction
  prt: 'particle', // particle
  pref: 'prefix', // prefix
  suf: 'suffix', // suffix
}

/** Valid simplified POS values */
export const VALID_POS = [
  'verb',
  'noun',
  'i-adjective',
  'na-adjective',
  'adverb',
  'expression',
  'counter',
  'particle',
  'conjunction',
  'prefix',
  'suffix',
] as const

export type SimplifiedPOS = (typeof VALID_POS)[number]

/**
 * Maps a JMdict POS tag array to a single simplified POS string.
 * Returns the first match found, or 'noun' as fallback.
 */
export function mapPartOfSpeech(jmdictPosTags: string[]): string {
  for (const tag of jmdictPosTags) {
    const mapped = POS_MAP[tag]
    if (mapped) return mapped
  }

  // Fallback: try prefix matching for tags we might have missed
  for (const tag of jmdictPosTags) {
    if (tag.startsWith('v')) return 'verb'
    if (tag.startsWith('adj-i') || tag.startsWith('adj-ku') || tag.startsWith('adj-shiku'))
      return 'i-adjective'
    if (tag.startsWith('adj')) return 'na-adjective'
    if (tag.startsWith('adv')) return 'adverb'
    if (tag.startsWith('n')) return 'noun'
  }

  return 'noun'
}
