#!/bin/bash
# Fast Parallel Subtitle Extraction v4
# Simpler approach with background jobs (no xargs/parallel needed)

set -euo pipefail

ANIME_BASE="/mnt/ClusterFS/MEDIA/Anime"
OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
PARALLEL_JOBS=8
SUCCESS_LOG="/tmp/wakaru-success.log"
ERROR_LOG="/tmp/wakaru-errors.log"

# Show mapping
SHOWS=(
    "Death Note:death-note"
    "Odd Taxi:odd-taxi"
    "Haikyuu!!:haikyuu"
    "Wangan Midnight:wangan-midnight"
    "Food Wars!:food-wars"
)

echo "========================================"
echo "   Fast Parallel Subtitle Extraction v4"
echo "========================================"
echo ""

# Clear logs
> "$SUCCESS_LOG"
> "$ERROR_LOG"

# Worker function
extract_subtitle() {
    local mkv_file="$1"
    local show_slug="$2"
    
    local basename=$(basename "$mkv_file" .mkv)
    local subtitle_file="$OUTPUT_DIR/$show_slug/${basename}-en.srt"
    
    # Skip if exists
    if [ -f "$subtitle_file" ]; then
        return 0
    fi
    
    # Find subtitle track
    local track=$(ffprobe -v error -select_streams s -show_entries stream=index:stream_tags=language \
        -of csv=p=0 "$mkv_file" 2>/dev/null | grep -i "eng" | head -1 | cut -d',' -f1)
    
    [ -z "$track" ] && track=$(ffprobe -v error -select_streams s -show_entries stream=index \
        -of csv=p=0 "$mkv_file" 2>/dev/null | head -1)
    
    if [ -z "$track" ]; then
        echo "$(basename "$mkv_file")" >> "$ERROR_LOG"
        return 1
    fi
    
    # Extract
    if ffmpeg -v error -i "$mkv_file" -map 0:$track -c:s srt "$subtitle_file" -y 2>&1 >/dev/null; then
        if [ -s "$subtitle_file" ]; then
            # Upload
            if s3cmd put "$subtitle_file" "s3://wakaru-media/subtitles/$show_slug/$(basename "$subtitle_file")" \
                --acl-public --region=sfo3 2>&1 | grep -q "upload:"; then
                echo "$(basename "$mkv_file")" >> "$SUCCESS_LOG"
                return 0
            fi
        fi
    fi
    
    echo "$(basename "$mkv_file")" >> "$ERROR_LOG"
    return 1
}

export -f extract_subtitle
export OUTPUT_DIR

# Build file list
total=0
for show_entry in "${SHOWS[@]}"; do
    IFS=':' read -r show_name show_slug <<< "$show_entry"
    show_dir="$ANIME_BASE/$show_name"
    
    if [ ! -d "$show_dir" ]; then
        continue
    fi
    
    mkdir -p "$OUTPUT_DIR/$show_slug"
    
    find "$show_dir" -name "*.mkv" -type f | while read -r mkv_file; do
        basename=$(basename "$mkv_file" .mkv)
        subtitle_file="$OUTPUT_DIR/$show_slug/${basename}-en.srt"
        
        if [ ! -f "$subtitle_file" ]; then
            ((total++)) || true
        fi
    done
done

echo "📋 Found $total files to process"
echo "🚀 Using $PARALLEL_JOBS parallel workers"
echo ""

# Process each show
for show_entry in "${SHOWS[@]}"; do
    IFS=':' read -r show_name show_slug <<< "$show_entry"
    show_dir="$ANIME_BASE/$show_name"
    
    if [ ! -d "$show_dir" ]; then
        continue
    fi
    
    echo "📺 Processing: $show_name"
    
    # Get files that need processing
    files_to_process=()
    while IFS= read -r mkv_file; do
        basename=$(basename "$mkv_file" .mkv)
        subtitle_file="$OUTPUT_DIR/$show_slug/${basename}-en.srt"
        
        if [ ! -f "$subtitle_file" ]; then
            files_to_process+=("$mkv_file")
        fi
    done < <(find "$show_dir" -name "*.mkv" -type f)
    
    if [ ${#files_to_process[@]} -eq 0 ]; then
        echo "   ✓ All files already processed"
        continue
    fi
    
    echo "   Processing ${#files_to_process[@]} files..."
    
    # Process in batches
    for mkv_file in "${files_to_process[@]}"; do
        # Wait if we have too many background jobs
        while [ $(jobs -r | wc -l) -ge $PARALLEL_JOBS ]; do
            sleep 0.1
        done
        
        extract_subtitle "$mkv_file" "$show_slug" &
    done
    
    # Wait for this show to complete
    wait
    echo ""
done

echo "========================================"
echo "✅ Extraction complete!"
echo ""

success=$(wc -l < "$SUCCESS_LOG" 2>/dev/null || echo 0)
failed=$(wc -l < "$ERROR_LOG" 2>/dev/null || echo 0)

echo "Summary:"
echo "  ✅ Success: $success files"
echo "  ❌ Failed:  $failed files"
echo "========================================"
