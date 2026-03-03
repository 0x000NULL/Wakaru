#!/usr/bin/env bash
# =============================================================================
# download-subtitles.sh — Download Japanese + English subtitle files for Wakaru
# =============================================================================
#
# This script documents the sources and provides download helpers for obtaining
# subtitle files used in the media immersion system. Subtitles are stored in
# public/subtitles/{slug}/ep{NN}-{lang}.srt
#
# Sources:
#   - kitsunekko.net (Japanese anime subtitles)
#   - jimaku.cc (Japanese subtitle archive)
#   - OpenSubtitles.org (multilingual subtitles)
#   - Community contributions
#
# Prerequisites:
#   - curl or wget
#   - ffmpeg (optional, for .ass → .srt conversion)
#
# Usage:
#   bash scripts/download-subtitles.sh
#
# =============================================================================

set -euo pipefail

SUBTITLE_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/subtitles"

echo "=== Wakaru Subtitle Downloader ==="
echo "Target directory: $SUBTITLE_DIR"
echo ""

# Create directory structure
mkdir -p "$SUBTITLE_DIR"/{shirokuma-cafe,takagi-san,terrace-house,death-note,evangelion}

# =============================================================================
# Helper: Convert .ass to .srt using ffmpeg
# =============================================================================
convert_ass_to_srt() {
  local input="$1"
  local output="$2"
  if command -v ffmpeg &>/dev/null; then
    ffmpeg -i "$input" "$output" -y -loglevel quiet
    echo "  Converted: $(basename "$input") → $(basename "$output")"
  else
    echo "  WARNING: ffmpeg not found. Cannot convert $(basename "$input")"
    echo "  Install ffmpeg: sudo apt install ffmpeg (or brew install ffmpeg)"
  fi
}

# =============================================================================
# Instructions per title
# =============================================================================

echo "--- しろくまカフェ (Shirokuma Cafe) ---"
echo "Japanese subs: https://kitsunekko.net (search: しろくまカフェ)"
echo "  Also available on GitHub: animebook/asbplayer subtitle collections"
echo "English subs:  OpenSubtitles.org (search: Polar Bear Cafe)"
echo "Episodes needed: 1-5"
echo ""

echo "--- からかい上手の高木さん (Takagi-san) ---"
echo "Japanese subs: https://jimaku.cc (search: 高木さん)"
echo "  Alternative: kitsunekko.net"
echo "English subs:  OpenSubtitles.org (search: Takagi-san)"
echo "Episodes needed: 1-4"
echo ""

echo "--- テラスハウス (Terrace House) ---"
echo "Japanese subs: Netflix CC extraction (requires account)"
echo "  Tool: https://github.com/niclaslindstedt/nflx-subtitle-downloader"
echo "English subs:  Netflix CC extraction"
echo "Episodes needed: 1-4 (Opening New Doors or Boys & Girls in the City)"
echo ""

echo "--- デスノート (Death Note) ---"
echo "Japanese subs: kitsunekko.net (search: デスノート)"
echo "  Alternative: OpenSubtitles.org (Japanese)"
echo "English subs:  OpenSubtitles.org (search: Death Note)"
echo "Episodes needed: 1-4"
echo ""

echo "--- 新世紀エヴァンゲリオン (Evangelion) ---"
echo "Japanese subs: Community archives, evangelion subtitle projects"
echo "  Note: JP subs are harder to find for this title"
echo "English subs:  OpenSubtitles.org (search: Neon Genesis Evangelion)"
echo "Episodes needed: 1-4"
echo ""

# =============================================================================
# Check current state
# =============================================================================
echo "=== Current subtitle files ==="
total=0
for dir in "$SUBTITLE_DIR"/*/; do
  if [ -d "$dir" ]; then
    slug=$(basename "$dir")
    count=$(find "$dir" -name "*.srt" 2>/dev/null | wc -l)
    total=$((total + count))
    echo "  $slug: $count .srt files"
  fi
done
echo "  Total: $total .srt files"
echo ""

if [ "$total" -ge 42 ]; then
  echo "All subtitle files present."
else
  echo "Some subtitle files are missing. See instructions above for sourcing."
  echo "After downloading, rename files to: ep{NN}-{ja|en}.srt"
  echo "Example: ep01-ja.srt, ep01-en.srt"
fi
