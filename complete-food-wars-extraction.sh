#!/bin/bash
set -euo pipefail

# Configuration
SOURCE_DIR="/mnt/ClusterFS/MEDIA/Anime/Food Wars!"
OUTPUT_DIR="/home/ethan/.openclaw/workspace/Wakaru/subtitles/food-wars"
S3_BUCKET="s3://wakaru-media/subtitles/food-wars/"
WORKERS=8
LOG_FILE="/tmp/food-wars-extraction-$(date +%s).log"

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

EXTRACTED=$(wc -l < /tmp/extracted-files.txt 2>/dev/null || echo "0")
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

# Function to process a single file
process_file() {
    local mkv_file="$1"
    local basename_no_ext=$(basename "$mkv_file" .mkv)
    local output_file="$OUTPUT_DIR/${basename_no_ext}-en.srt"
    local worker_id="$2"
    
    echo "[Worker $worker_id] Processing: $basename_no_ext" | tee -a "$LOG_FILE"
    
    # Check if already exists (race condition protection)
    if [ -f "$output_file" ]; then
        echo "[Worker $worker_id] SKIP: Already exists: $basename_no_ext" | tee -a "$LOG_FILE"
        return 0
    fi
    
    # Find English subtitle track
    local track
    track=$(ffprobe -v error -select_streams s -show_entries stream=index:stream_tags=language \
        -of csv=p=0 "$mkv_file" 2>/dev/null | grep -i "eng" | head -1 | cut -d',' -f1)
    
    if [ -z "$track" ]; then
        echo "[Worker $worker_id] ERROR: No English subtitle track found in $basename_no_ext" | tee -a "$LOG_FILE"
        return 1
    fi
    
    # Extract subtitle to SRT
    if ffmpeg -v error -i "$mkv_file" -map 0:$track -c:s srt "$output_file" -y 2>/dev/null; then
        echo "[Worker $worker_id] SUCCESS: Extracted $basename_no_ext" | tee -a "$LOG_FILE"
        
        # Upload to S3
        if s3cmd put "$output_file" "$S3_BUCKET" --acl-public --region=sfo3 2>&1 | tee -a "$LOG_FILE"; then
            echo "[Worker $worker_id] UPLOADED: $basename_no_ext" | tee -a "$LOG_FILE"
        else
            echo "[Worker $worker_id] UPLOAD FAILED: $basename_no_ext" | tee -a "$LOG_FILE"
            return 2
        fi
    else
        echo "[Worker $worker_id] ERROR: Failed to extract subtitles from $basename_no_ext (possibly bitmap subs)" | tee -a "$LOG_FILE"
        return 1
    fi
    
    return 0
}

export -f process_file
export OUTPUT_DIR S3_BUCKET LOG_FILE

# Create list of full paths to process
> /tmp/files-to-process-full.txt
while IFS= read -r basename_no_ext; do
    find "$SOURCE_DIR" -type f -name "${basename_no_ext}.mkv"
done < /tmp/files-to-process.txt > /tmp/files-to-process-full.txt

# Process files in parallel
echo "Starting parallel extraction with $WORKERS workers..." | tee -a "$LOG_FILE"
cat /tmp/files-to-process-full.txt | parallel -j "$WORKERS" --bar --joblog /tmp/food-wars-joblog.txt \
    'process_file {} {%}'

# Summary
echo "" | tee -a "$LOG_FILE"
echo "=== EXTRACTION COMPLETE ===" | tee -a "$LOG_FILE"
FINAL_COUNT=$(ls -1 "$OUTPUT_DIR"/*.srt 2>/dev/null | wc -l)
echo "Final count: $FINAL_COUNT/91 subtitle files" | tee -a "$LOG_FILE"

# Count successes and failures from job log
if [ -f /tmp/food-wars-joblog.txt ]; then
    SUCCEEDED=$(awk '$7 == 0 {count++} END {print count+0}' /tmp/food-wars-joblog.txt)
    FAILED=$(awk '$7 != 0 {count++} END {print count+0}' /tmp/food-wars-joblog.txt)
    echo "Successfully processed: $SUCCEEDED" | tee -a "$LOG_FILE"
    echo "Failed: $FAILED" | tee -a "$LOG_FILE"
    
    if [ "$FAILED" -gt 0 ]; then
        echo "" | tee -a "$LOG_FILE"
        echo "Failed files:" | tee -a "$LOG_FILE"
        awk '$7 != 0 {print $14}' /tmp/food-wars-joblog.txt | tee -a "$LOG_FILE"
    fi
fi

echo "" | tee -a "$LOG_FILE"
echo "Log file: $LOG_FILE"
echo "Job log: /tmp/food-wars-joblog.txt"
