#!/bin/bash
# Fast Parallel Subtitle Extraction v2
# Simpler approach: generate file list, process with parallel

set -euo pipefail

ANIME_BASE="/mnt/ClusterFS/MEDIA/Anime"
OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
WORK_LIST="/tmp/wakaru-extract-list.txt"
PARALLEL_JOBS=8

# Show mapping: "Show Name:slug"
SHOWS=(
    "Death Note:death-note"
    "Odd Taxi:odd-taxi"
    "Haikyuu!!:haikyuu"
    "Wangan Midnight:wangan-midnight"
    "Food Wars!:food-wars"
)

echo "========================================"
echo "   Fast Parallel Subtitle Extraction v2"
echo "========================================"
echo ""

# Generate work list
> "$WORK_LIST"  # Clear file

for show_entry in "${SHOWS[@]}"; do
    IFS=':' read -r show_name show_slug <<< "$show_entry"
    show_dir="$ANIME_BASE/$show_name"
    
    if [ ! -d "$show_dir" ]; then
        echo "⚠️  Skipping $show_name (directory not found)"
        continue
    fi
    
    mkdir -p "$OUTPUT_DIR/$show_slug"
    
    # Add all MKV files to work list
    find "$show_dir" -name "*.mkv" -type f | while read -r mkv_file; do
        basename=$(basename "$mkv_file" .mkv)
        subtitle_file="$OUTPUT_DIR/$show_slug/${basename}-en.srt"
        
        # Only add if subtitle doesn't exist
        if [ ! -f "$subtitle_file" ]; then
            echo "$mkv_file|$show_slug" >> "$WORK_LIST"
        fi
    done
done

total_files=$(wc -l < "$WORK_LIST")

if [ "$total_files" -eq 0 ]; then
    echo "✅ All subtitles already extracted!"
    exit 0
fi

echo "📋 Found $total_files files to process"
echo "🚀 Using $PARALLEL_JOBS parallel jobs"
echo ""

# Process files in parallel using a simple worker script
cat > /tmp/wakaru-worker.sh << 'WORKER_EOF'
#!/bin/bash
line="$1"
IFS='|' read -r mkv_file show_slug <<< "$line"

basename=$(basename "$mkv_file" .mkv)
subtitle_file="$HOME/.openclaw/workspace/Wakaru/subtitles/$show_slug/${basename}-en.srt"

# Find English subtitle track
track_index=$(ffprobe -v error -select_streams s -show_entries stream=index:stream_tags=language \
    -of csv=p=0 "$mkv_file" 2>/dev/null | grep -i "eng" | head -1 | cut -d',' -f1)

if [ -z "$track_index" ]; then
    track_index=$(ffprobe -v error -select_streams s -show_entries stream=index \
        -of csv=p=0 "$mkv_file" 2>/dev/null | head -1)
fi

if [ -z "$track_index" ]; then
    echo "❌ $basename (no subtitle tracks)"
    exit 1
fi

# Extract
if ffmpeg -v error -i "$mkv_file" -map 0:$track_index -c:s srt "$subtitle_file" -y 2>&1 >/dev/null; then
    if [ -s "$subtitle_file" ]; then
        # Upload
        if s3cmd put "$subtitle_file" "s3://wakaru-media/subtitles/$show_slug/$(basename "$subtitle_file")" \
            --acl-public --region=sfo3 --no-mime-magic 2>&1 >/dev/null; then
            echo "✅ $basename"
            exit 0
        else
            echo "⚠️  $basename (upload failed)"
            exit 1
        fi
    fi
fi

echo "❌ $basename (extraction failed)"
exit 1
WORKER_EOF

chmod +x /tmp/wakaru-worker.sh

# Run parallel extraction with progress bar
cat "$WORK_LIST" | parallel -j $PARALLEL_JOBS --bar --joblog /tmp/wakaru-joblog.txt /tmp/wakaru-worker.sh {}

echo ""
echo "========================================"
echo "✅ Extraction complete!"
echo ""

# Summary from joblog
success=$(grep -c "^[0-9].*	0$" /tmp/wakaru-joblog.txt 2>/dev/null || echo 0)
failed=$(grep -c "^[0-9].*	[1-9]" /tmp/wakaru-joblog.txt 2>/dev/null || echo 0)

echo "Summary:"
echo "  ✅ Success: $success files"
echo "  ❌ Failed:  $failed files"
echo "========================================"
