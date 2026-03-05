#!/bin/bash
# Fast Parallel Subtitle Extraction v3
# Uses xargs for parallel processing (universal)

set -euo pipefail

ANIME_BASE="/mnt/ClusterFS/MEDIA/Anime"
OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
WORK_LIST="/tmp/wakaru-extract-list.txt"
PARALLEL_JOBS=8

# Show mapping
SHOWS=(
    "Death Note:death-note"
    "Odd Taxi:odd-taxi"
    "Haikyuu!!:haikyuu"
    "Wangan Midnight:wangan-midnight"
    "Food Wars!:food-wars"
)

echo "========================================"
echo "   Fast Parallel Subtitle Extraction"
echo "========================================"
echo ""

# Generate work list
> "$WORK_LIST"

for show_entry in "${SHOWS[@]}"; do
    IFS=':' read -r show_name show_slug <<< "$show_entry"
    show_dir="$ANIME_BASE/$show_name"
    
    if [ ! -d "$show_dir" ]; then
        echo "⚠️  Skipping $show_name (not found)"
        continue
    fi
    
    mkdir -p "$OUTPUT_DIR/$show_slug"
    
    find "$show_dir" -name "*.mkv" -type f | while read -r mkv_file; do
        basename=$(basename "$mkv_file" .mkv)
        subtitle_file="$OUTPUT_DIR/$show_slug/${basename}-en.srt"
        
        if [ ! -f "$subtitle_file" ]; then
            echo "$mkv_file|$show_slug" >> "$WORK_LIST"
        fi
    done
done

total_files=$(wc -l < "$WORK_LIST" 2>/dev/null || echo 0)

if [ "$total_files" -eq 0 ]; then
    echo "✅ All subtitles already extracted!"
    exit 0
fi

echo "📋 Processing $total_files files with $PARALLEL_JOBS workers"
echo ""

# Create worker script
cat > /tmp/wakaru-worker.sh << 'WORKER_EOF'
#!/bin/bash
line="$1"
IFS='|' read -r mkv_file show_slug <<< "$line"

basename=$(basename "$mkv_file" .mkv)
subtitle_file="$HOME/.openclaw/workspace/Wakaru/subtitles/$show_slug/${basename}-en.srt"

# Find subtitle track
track=$(ffprobe -v error -select_streams s -show_entries stream=index:stream_tags=language \
    -of csv=p=0 "$mkv_file" 2>/dev/null | grep -i "eng" | head -1 | cut -d',' -f1)

[ -z "$track" ] && track=$(ffprobe -v error -select_streams s -show_entries stream=index \
    -of csv=p=0 "$mkv_file" 2>/dev/null | head -1)

if [ -z "$track" ]; then
    echo "❌ $(basename "$mkv_file") - no subs"
    exit 1
fi

# Extract
if ffmpeg -v error -i "$mkv_file" -map 0:$track -c:s srt "$subtitle_file" -y 2>&1 >/dev/null; then
    if [ -s "$subtitle_file" ]; then
        # Upload
        if s3cmd put "$subtitle_file" "s3://wakaru-media/subtitles/$show_slug/$(basename "$subtitle_file")" \
            --acl-public --region=sfo3 2>&1 | grep -q "upload:"; then
            echo "✅ $(basename "$mkv_file")"
            exit 0
        else
            echo "⚠️  $(basename "$mkv_file") - upload failed"
            exit 1
        fi
    fi
fi

echo "❌ $(basename "$mkv_file") - extract failed"
exit 1
WORKER_EOF

chmod +x /tmp/wakaru-worker.sh

# Track progress
total_files=$(wc -l < "$WORK_LIST")
processed=0

# Process with xargs (parallel execution)
cat "$WORK_LIST" | xargs -P $PARALLEL_JOBS -I {} bash /tmp/wakaru-worker.sh {} 2>&1 | tee /tmp/wakaru-output.txt

echo ""
echo "========================================"
echo "✅ Extraction complete!"
echo ""

success=$(grep -c "^✅" /tmp/wakaru-output.txt 2>/dev/null || echo 0)
failed=$(grep -c "^❌" /tmp/wakaru-output.txt 2>/dev/null || echo 0)
warnings=$(grep -c "^⚠️ " /tmp/wakaru-output.txt 2>/dev/null || echo 0)

echo "Summary:"
echo "  ✅ Success:  $success files"
echo "  ❌ Failed:   $failed files"
echo "  ⚠️  Warnings: $warnings files"
echo "========================================"
