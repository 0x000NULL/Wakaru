#!/usr/bin/env bash
# Downloads animated stroke order SVGs for N5+N4 kanji characters
# from the animCJK project (https://github.com/parsimonhi/animCJK, LGPL licensed).
#
# SVGs are saved to public/svg/kanji/ named by Unicode codepoint (e.g. 26085.svg for 日).
# Run once during project setup: bash scripts/download-kanji-svg.sh

set -euo pipefail

REPO_URL="https://raw.githubusercontent.com/parsimonhi/animCJK/master/svgsJaKanji"
OUTPUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/svg/kanji"

# N5 kanji (~103 characters)
N5_KANJI="日月火水木金土一二三四五六七八九十百千万円年人子女男目口耳手足力山川田林森空天気雨花草虫犬本文字学校先生名大小中上下左右外国長白赤青半分行来入出見食飲読書聞話買売休立走帰車電時間何前後北南東西高新古多少"

# N4 kanji (~181 characters)
N4_KANJI="会社家族親友兄弟姉妹夫妻主医病院薬体頭顔心首声死住所屋部室階台広工場図写真絵映画音楽歌色黒物者事仕計料理味茶特別同違変度回有無教習試験問題答知思考使作持送届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届"

# Fix: actual N4 kanji list
N4_KANJI="会社家族親友兄弟姉妹夫妻主医病院薬体頭顔心首声死住所屋部室階台広工場図写真絵映画音楽歌色黒物者事仕計料理味茶特別同違変度回有無教習試験問題答知思考使作持送届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届届"

# Combine all kanji (use unique characters)
ALL_KANJI="${N5_KANJI}${N4_KANJI}"

mkdir -p "$OUTPUT_DIR"

TOTAL=0
DOWNLOADED=0
SKIPPED=0
FAILED=0

# Get unique characters
declare -A SEEN

for (( i=0; i<${#ALL_KANJI}; i++ )); do
  CHAR="${ALL_KANJI:$i:1}"

  # Skip if already seen
  if [[ -n "${SEEN[$CHAR]:-}" ]]; then
    continue
  fi
  SEEN[$CHAR]=1
  TOTAL=$((TOTAL + 1))

  # Get Unicode codepoint
  CODEPOINT=$(printf '%d' "'$CHAR")
  FILENAME="${CODEPOINT}.svg"
  FILEPATH="${OUTPUT_DIR}/${FILENAME}"

  # Skip if already downloaded
  if [[ -f "$FILEPATH" ]]; then
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Download with 5-digit zero-padded codepoint (animCJK format)
  PADDED=$(printf '%05d' "$CODEPOINT")
  URL="${REPO_URL}/${PADDED}.svg"

  if curl -fsSL -o "$FILEPATH" "$URL" 2>/dev/null; then
    DOWNLOADED=$((DOWNLOADED + 1))
    echo "  ✓ ${CHAR} (U+$(printf '%04X' "$CODEPOINT"))"
  else
    FAILED=$((FAILED + 1))
    echo "  ✗ ${CHAR} (U+$(printf '%04X' "$CODEPOINT")) — not found"
    rm -f "$FILEPATH"
  fi

  # Rate limit
  sleep 0.1
done

echo ""
echo "Done: ${DOWNLOADED} downloaded, ${SKIPPED} already existed, ${FAILED} failed (${TOTAL} unique kanji)"
