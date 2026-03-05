#!/bin/bash
# Fast Parallel Subtitle Extraction for Wakaru
# Uses GNU parallel for true concurrent processing

set -euo pipefail

# Configuration
ANIME_BASE="/mnt/ClusterFS/MEDIA/Anime"
OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
LOG_FILE="$HOME/wakaru-subtitles-parallel.log"
PARALLEL_JOBS=8  # Process 8 files simultaneously

# DO Spaces config
DO_SPACE="wakaru-media"
DO_REGION="sfo3"

# Show list with folder names
declare -A SHOWS=(
    ["Death Note"]="death-note"
    ["Odd Taxi"]="odd-taxi"
    ["Haikyuu!!"]="haikyuu"
    ["Wangan Midnight"]="wangan-midnight"
    ["Food Wars!"]="food-wars"
    ["Initial D"]="initial-d"
)

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() {
    echo -e "${BLUE}ℹ${NC} $1" | tee -a "$LOG_FILE"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1" | tee -a "$LOG_FILE"
}

log_error() {
    echo -e "${RED}✗${NC} $1" | tee -a "$LOG_FILE"
}

# Process a single file (called by GNU parallel)
process_single_file() {
    local mkv_file="$1"
    local show_slug="$2"
    local basename=$(basename "$mkv_file" .mkv)
    local output_dir="$OUTPUT_DIR/$show_slug"
    local subtitle_file="$output_dir/${basename}-en.srt"
    
    # Create output directory
    mkdir -p "$output_dir"
    
    # Skip if already exists
    if [ -f "$subtitle_file" ]; then
        echo "SKIP: $(basename "$mkv_file")"
        return 0
    fi
    
    # Find English subtitle track
    local track_index=$(ffprobe -v error -select_streams s -show_entries stream=index:stream_tags=language,title \
        -of csv=p=0 "$mkv_file" 2>/dev/null | \
        grep -i "eng" | grep -ivE "(sign|song)" | head -1 | cut -d',' -f1)
    
    # Fallback: just get first subtitle track
    if [ -z "$track_index" ]; then
        track_index=$(ffprobe -v error -select_streams s -show_entries stream=index \
            -of csv=p=0 "$mkv_file" 2>/dev/null | head -1)
    fi
    
    if [ -z "$track_index" ]; then
        echo "ERROR: No subtitles in $(basename "$mkv_file")"
        return 1
    fi
    
    # Extract to SRT
    if ffmpeg -v error -i "$mkv_file" -map 0:$track_index -c:s srt "$subtitle_file" -y 2>&1; then
        # Verify it's valid
        if [ -s "$subtitle_file" ] && grep -qE "(^\[|^[0-9]{2}:[0-9]{2})" "$subtitle_file"; then
            # Upload to DO Spaces
            if s3cmd put "$subtitle_file" "s3://$DO_SPACE/subtitles/$show_slug/$(basename "$subtitle_file")" \
                --acl-public --region="$DO_REGION" --no-mime-magic >/dev/null 2>&1; then
                echo "SUCCESS: $(basename "$mkv_file") → $(basename "$subtitle_file")"
                return 0
            else
                echo "UPLOAD_FAIL: $(basename "$subtitle_file")"
                return 1
            fi
        else
            rm -f "$subtitle_file"
            echo "INVALID: $(basename "$mkv_file")"
            return 1
        fi
    else
        echo "EXTRACT_FAIL: $(basename "$mkv_file")"
        return 1
    fi
}

# Export function so GNU parallel can use it
export -f process_single_file
export OUTPUT_DIR DO_SPACE DO_REGION

# Main execution
main() {
    echo "========================================"
    echo "   Fast Parallel Subtitle Extraction"
    echo "========================================"
    echo ""
    log_info "Processing with $PARALLEL_JOBS parallel jobs"
    log_info "Output: $OUTPUT_DIR"
    echo ""
    
    # Create output directory
    mkdir -p "$OUTPUT_DIR"
    
    local total_success=0
    local total_fail=0
    local total_skip=0
    
    # Process each show
    for show_name in "${!SHOWS[@]}"; do
        local show_slug="${SHOWS[$show_name]}"
        local show_dir="$ANIME_BASE/$show_name"
        
        if [ ! -d "$show_dir" ]; then
            log_error "Directory not found: $show_dir"
            continue
        fi
        
        log_info "Processing: $show_name → $show_slug"
        
        # Find all MKV files
        local mkv_count=$(find "$show_dir" -name "*.mkv" -type f | wc -l)
        log_info "Found $mkv_count MKV files"
        
        if [ $mkv_count -eq 0 ]; then
            log_error "No MKV files found"
            continue
        fi
        
        # Process files in parallel
        local results=$(find "$show_dir" -name "*.mkv" -type f | \
            parallel -j $PARALLEL_JOBS --bar process_single_file {} "$show_slug" 2>&1)
        
        # Count results
        local success=$(echo "$results" | grep -c "^SUCCESS:" || true)
        local skip=$(echo "$results" | grep -c "^SKIP:" || true)
        local fail=$(echo "$results" | grep -c "^ERROR:\|^EXTRACT_FAIL:\|^INVALID:\|^UPLOAD_FAIL:" || true)
        
        total_success=$((total_success + success))
        total_skip=$((total_skip + skip))
        total_fail=$((total_fail + fail))
        
        log_success "$show_name: $success extracted, $skip skipped, $fail failed"
        echo ""
    done
    
    echo "========================================"
    log_success "Extraction Complete!"
    echo ""
    echo "Summary:"
    echo "  ✓ Extracted: $total_success files"
    echo "  ⊘ Skipped:   $total_skip files"
    echo "  ✗ Failed:    $total_fail files"
    echo "========================================"
}

# Run it
main "$@"
