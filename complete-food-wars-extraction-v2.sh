#!/bin/bash
set -euo pipefail

# Configuration
SOURCE_DIR="/mnt/ClusterFS/MEDIA/Anime/Food Wars!"
OUTPUT_DIR="/home/ethan/.openclaw/workspace/Wakaru/subtitles/food-wars"
S3_BUCKET="s3://wakaru-media/subtitles/food-wars/"
WORKERS=8
LOG_FILE="/tmp/food-wars-extraction-$(date +%s).log"
SUCCESS_COUNT=0
FAIL_COUNT=0

# Create output directory if needed
mkdir -p "$OUTPUT_DIR"

# Get list of all MKV files
echo "Finding all MKV files..." | tee -a "$LOG_FILE"
find "$SOURCE_DIR" -type f -name "*.mkv" | sort > /tmp/all-mkv-files.txt
TOTAL=$(wc -l < /tmp/all-mkv-files.txt)
echo "Found $TOTAL total MKV files" | tee -a "$LOG_FILE"

# Get list of already extracted files
cd "$OUTPUT_DIR"
if ls *.srt >/dev/null 2>&1; then
    for srt in *.srt; do
        if [ -f "$srt" ]; then
            # Remove the -en.srt suffix to get original filename
            basename "$srt" -en.srt
        fi
    done | sort > /tmp/extracted-files.txt
else
    touch /tmp/extracted-files.txt
fi

EXTRACTED=$(wc -l < /tmp/extracted-files.txt)
echo "Already extracted: $EXTRACTED files" | tee -a "$LOG_FILE"

# Find files that need processing
comm -23 <(cat /tmp/all-mkv-files.txt | xargs -I {} basename {} .mkv | sort) \
         /tmp/extracted-files.txt > /tmp/files-to-process.txt

REMAINING=$(wc -l < /tmp/files-to-process.txt)
echo "Files to process: $REMAINING" | tee -a "$LOG_FILE"

if [ "$REMAINING" -eq 0 ]; then
    echo "All files already processed!" | tee -a "$LOG_FILE"
    exit 0
fi

# Create list of full paths to process
> /tmp/files-to-process-full.txt
while IFS= read -r basename_no_ext; do
    find "$SOURCE_DIR" -type f -name "${basename_no_ext}.mkv"
done < /tmp/files-to-process.txt > /tmp/files-to-process-full.txt

echo "Starting parallel extraction with $WORKERS workers..." | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Process function (will be called by xargs)
process_file() {
    local mkv_file="$1"
    local basename_no_ext=$(basename "$mkv_file" .mkv)
    local output_file="$OUTPUT_DIR/${basename_no_ext}-en.srt"
    
    echo "[$(date +%H:%M:%S)] Processing: $basename_no_ext"
    
    # Check if already exists (race condition protection)
    if [ -f "$output_file" ]; then
        echo "[$(date +%H:%M:%S)] SKIP: Already exists: $basename_no_ext"
        return 0
    fi
    
    # Find English subtitle track
    local track
    track=$(ffprobe -v error -select_streams s -show_entries stream=index:stream_tags=language \
        -of csv=p=0 "$mkv_file" 2>/dev/null | grep -i "eng" | head -1 | cut -d',' -f1)
    
    if [ -z "$track" ]; then
        echo "[$(date +%H:%M:%S)] ERROR: No English subtitle track found in $basename_no_ext"
        return 1
    fi
    
    # Extract subtitle to SRT
    if ffmpeg -v error -i "$mkv_file" -map 0:$track -c:s srt "$output_file" -y 2>/dev/null; then
        echo "[$(date +%H:%M:%S)] SUCCESS: Extracted $basename_no_ext"
        
        # Upload to S3
        if s3cmd put "$output_file" "$S3_BUCKET" --acl-public --region=sfo3 >/dev/null 2>&1; then
            echo "[$(date +%H:%M:%S)] UPLOADED: $basename_no_ext"
            return 0
        else
            echo "[$(date +%H:%M:%S)] UPLOAD FAILED: $basename_no_ext"
            return 2
        fi
    else
        echo "[$(date +%H:%M:%S)] ERROR: Failed to extract subtitles from $basename_no_ext (possibly bitmap subs)"
        return 1
    fi
}

export -f process_file
export OUTPUT_DIR S3_BUCKET

# Use xargs for parallel processing with proper error handling
cat /tmp/files-to-process-full.txt | xargs -P "$WORKERS" -I {} bash -c 'process_file "{}"' 2>&1 | tee -a "$LOG_FILE"

# Summary
echo "" | tee -a "$LOG_FILE"
echo "=== EXTRACTION COMPLETE ===" | tee -a "$LOG_FILE"
FINAL_COUNT=$(ls -1 "$OUTPUT_DIR"/*.srt 2>/dev/null | wc -l)
echo "Final count: $FINAL_COUNT/91 subtitle files" | tee -a "$LOG_FILE"

# Count results from log
SUCCEEDED=$(grep -c "SUCCESS: Extracted" "$LOG_FILE" || echo "0")
UPLOADED=$(grep -c "UPLOADED:" "$LOG_FILE" || echo "0")
FAILED=$(grep -c "ERROR:" "$LOG_FILE" || echo "0")
SKIPPED=$(grep -c "SKIP:" "$LOG_FILE" || echo "0")

echo "Successfully extracted: $SUCCEEDED" | tee -a "$LOG_FILE"
echo "Successfully uploaded: $UPLOADED" | tee -a "$LOG_FILE"
echo "Skipped (already exist): $SKIPPED" | tee -a "$LOG_FILE"
echo "Failed: $FAILED" | tee -a "$LOG_FILE"

if [ "$FAILED" -gt 0 ]; then
    echo "" | tee -a "$LOG_FILE"
    echo "Failed files:" | tee -a "$LOG_FILE"
    grep "ERROR:" "$LOG_FILE" | tee -a "$LOG_FILE"
fi

echo "" | tee -a "$LOG_FILE"
echo "Log file: $LOG_FILE"
