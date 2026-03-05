#!/bin/bash
# Generate subtitle manifest for Wakaru media-data.ts integration

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/subtitle-extraction-helpers.sh"

OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
MANIFEST_FILE="$HOME/.openclaw/workspace/Wakaru/subtitle-manifest.json"
CDN_BASE="https://wakaru-media.sfo3.cdn.digitaloceanspaces.com"

log_info "Generating subtitle manifest..."
echo ""

# Start JSON
echo "{" > "$MANIFEST_FILE"

first_show=true

# Iterate through show directories
for show_dir in "$OUTPUT_DIR"/*; do
    if [ ! -d "$show_dir" ]; then
        continue
    fi
    
    show_slug=$(basename "$show_dir")
    log_info "Processing: $show_slug"
    
    # Add comma for previous show
    if [ "$first_show" = false ]; then
        echo "," >> "$MANIFEST_FILE"
    fi
    first_show=false
    
    # Start show object
    echo "  \"$show_slug\": {" >> "$MANIFEST_FILE"
    
    first_episode=true
    
    # Find all subtitle files
    for subtitle_file in "$show_dir"/*.{srt,ass} 2>/dev/null; do
        if [ ! -f "$subtitle_file" ]; then
            continue
        fi
        
        basename_no_ext=$(basename "$subtitle_file" | sed 's/-en\.\(srt\|ass\)$//')
        filename=$(basename "$subtitle_file")
        
        # Extract episode identifier
        episode_id=$(get_episode_id "$basename_no_ext")
        
        # Add comma for previous episode
        if [ "$first_episode" = false ]; then
            echo "," >> "$MANIFEST_FILE"
        fi
        first_episode=false
        
        # Build URLs
        subtitle_url="${CDN_BASE}/subtitles/${show_slug}/${filename}"
        
        # Add episode entry
        echo "    \"$episode_id\": {" >> "$MANIFEST_FILE"
        echo "      \"subtitle_en\": \"$subtitle_url\"" >> "$MANIFEST_FILE"
        echo -n "    }" >> "$MANIFEST_FILE"
    done
    
    echo "" >> "$MANIFEST_FILE"
    echo -n "  }" >> "$MANIFEST_FILE"
done

echo "" >> "$MANIFEST_FILE"
echo "}" >> "$MANIFEST_FILE"

log_success "Manifest generated: $MANIFEST_FILE"
echo ""

# Show summary
total_subtitles=$(find "$OUTPUT_DIR" -name "*.srt" -o -name "*.ass" 2>/dev/null | wc -l)
log_info "Total subtitles: $total_subtitles"
echo ""

# Preview first few entries
log_info "Manifest preview:"
head -30 "$MANIFEST_FILE"
echo "..."
echo ""

log_info "Full manifest: $MANIFEST_FILE"
