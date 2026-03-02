#!/usr/bin/env bash
# Downloads animated stroke order SVGs for hiragana characters from the
# animCJK project (https://github.com/parsimonhi/animCJK, LGPL licensed).
#
# SVGs are saved to public/svg/kana/ named by Unicode codepoint (e.g. 12354.svg for あ).
# Run once during project setup: bash scripts/download-kana-svg.sh

set -euo pipefail

REPO_URL="https://raw.githubusercontent.com/parsimonhi/animCJK/master/svgsJaKana"
OUTPUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/svg/kana"

# All 46 base hiragana characters (Unicode codepoints)
HIRAGANA_CODEPOINTS=(
  # Vowels: あいうえお
  12354 12356 12358 12360 12362
  # K-row: かきくけこ
  12363 12365 12367 12369 12371
  # S-row: さしすせそ
  12373 12375 12377 12379 12381
  # T-row: たちつてと
  12383 12385 12388 12390 12392
  # N-row: なにぬねの
  12394 12395 12396 12397 12398
  # H-row: はひふへほ
  12399 12402 12405 12408 12411
  # M-row: まみむめも
  12414 12415 12416 12417 12418
  # Y-row: やゆよ
  12420 12422 12424
  # R-row: らりるれろ
  12425 12426 12427 12428 12429
  # W-row + N: わをん
  12431 12434 12435
  # Dakuten G-row: がぎぐげご
  12364 12366 12368 12370 12372
  # Dakuten Z-row: ざじずぜぞ
  12374 12376 12378 12380 12382
  # Dakuten D-row: だぢづでど
  12384 12386 12389 12391 12393
  # Dakuten B-row: ばびぶべぼ
  12400 12403 12406 12409 12412
  # Handakuten P-row: ぱぴぷぺぽ
  12401 12404 12407 12410 12413
)

mkdir -p "$OUTPUT_DIR"

echo "Downloading hiragana stroke order SVGs to $OUTPUT_DIR..."
echo "Source: animCJK project (LGPL license)"
echo ""

success=0
fail=0

for cp in "${HIRAGANA_CODEPOINTS[@]}"; do
  filename="${cp}.svg"
  url="${REPO_URL}/${filename}"
  output="${OUTPUT_DIR}/${filename}"

  if [ -f "$output" ]; then
    echo "  [skip] ${filename} (already exists)"
    success=$((success + 1))
    continue
  fi

  if curl -sSf -o "$output" "$url" 2>/dev/null; then
    echo "  [ok]   ${filename}"
    success=$((success + 1))
  else
    echo "  [fail] ${filename} (${url})"
    fail=$((fail + 1))
  fi
done

echo ""
echo "Done: ${success} downloaded, ${fail} failed (out of ${#HIRAGANA_CODEPOINTS[@]} total)"
echo ""
echo "Note: Combination characters (yoon) use their component characters'"
echo "SVGs — no separate files are needed."
