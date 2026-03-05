#!/bin/bash
# Upload all subtitle files to DigitalOcean Spaces with parallel processing

set -euo pipefail

SUBTITLE_DIR="/home/ethan/.openclaw/workspace/Wakaru/subtitles"
BUCKET="s3://wakaru-media"
REGION="sfo3"
WORKERS=8
LOG_FILE="/tmp/subtitle-upload-$(date +%Y%m%d-%H%M%S).log"
SUCCESS_LOG="/tmp/subtitle-upload-success-$(date +%Y%m%d-%H%M%S).log"
FAIL_LOG="/tmp/subtitle-upload-fail-$(date +%Y%m%d-%H%M%S).log"

echo "Starting subtitle upload at $(date)" | tee "$LOG_FILE"
echo "=============================================" | tee -a "$LOG_FILE"

# Function to upload a single subtitle file
upload_subtitle() {
    local file="$1"
    local show_dir=$(basename $(dirname "$file"))
    local filename=$(basename "$file")
    local s3_path="$BUCKET/subtitles/$show_dir/$filename"
    
    echo "Uploading: $show_dir/$filename"
    
    if s3cmd put "$file" "$s3_path" \
        --acl-public \
        --region="$REGION" \
        --no-mime-magic \
        --guess-mime-type 2>&1; then
        echo "$show_dir/$filename" >> "$SUCCESS_LOG"
        echo "✓ Success: $show_dir/$filename"
        return 0
    else
        echo "$show_dir/$filename" >> "$FAIL_LOG"
        echo "✗ Failed: $show_dir/$filename"
        return 1
    fi
}

export -f upload_subtitle
export BUCKET REGION SUCCESS_LOG FAIL_LOG

# Initialize log files
touch "$SUCCESS_LOG" "$FAIL_LOG"

# Find all subtitle files and upload with xargs parallel
find "$SUBTITLE_DIR" -name "*-en.srt" -type f | \
    xargs -P "$WORKERS" -I {} bash -c 'upload_subtitle "$@"' _ {} | tee -a "$LOG_FILE"

# Count successes and failures
SUCCESS_COUNT=$(wc -l < "$SUCCESS_LOG" | tr -d ' ')
FAIL_COUNT=$(wc -l < "$FAIL_LOG" | tr -d ' ')

echo "" | tee -a "$LOG_FILE"
echo "=============================================" | tee -a "$LOG_FILE"
echo "Upload Summary:" | tee -a "$LOG_FILE"
echo "  Total files: 218" | tee -a "$LOG_FILE"
echo "  Successful: $SUCCESS_COUNT" | tee -a "$LOG_FILE"
echo "  Failed: $FAIL_COUNT" | tee -a "$LOG_FILE"
echo "  Log file: $LOG_FILE" | tee -a "$LOG_FILE"
echo "Completed at $(date)" | tee -a "$LOG_FILE"

if [ "$FAIL_COUNT" -gt 0 ]; then
    echo "" | tee -a "$LOG_FILE"
    echo "Failed uploads:" | tee -a "$LOG_FILE"
    cat "$FAIL_LOG" | tee -a "$LOG_FILE"
    exit 1
fi

echo "All uploads completed successfully!"
exit 0
