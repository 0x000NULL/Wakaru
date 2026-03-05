#!/bin/bash
# Wakaru Subtitle Management - Main Launcher Script

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

show_banner() {
    cat <<'EOF'
╔════════════════════════════════════════╗
║   Wakaru Subtitle Management System   ║
╚════════════════════════════════════════╝
EOF
}

show_menu() {
    echo ""
    echo -e "${BLUE}Available Commands:${NC}"
    echo ""
    echo "  1. test          - Test extraction on single file"
    echo "  2. extract       - Extract all shows (interactive)"
    echo "  3. extract-show  - Extract specific show"
    echo "  4. status        - Check extraction status"
    echo "  5. manifest      - Generate subtitle manifest"
    echo "  6. clean         - Clean subtitle files (remove HTML tags)"
    echo "  7. upload        - Upload previously extracted subtitles"
    echo "  8. help          - Show detailed help"
    echo ""
}

run_test() {
    echo -e "${GREEN}Running subtitle extraction test...${NC}"
    "$SCRIPT_DIR/test-subtitle-extraction.sh"
}

run_extract() {
    echo -e "${GREEN}Starting full extraction...${NC}"
    echo ""
    echo "Options:"
    echo "  1. Sequential (slower, safer)"
    echo "  2. Parallel - 2 jobs"
    echo "  3. Parallel - 4 jobs (recommended)"
    echo "  4. Dry run (preview only)"
    echo ""
    read -p "Select option [1-4]: " choice
    
    case $choice in
        1)
            "$SCRIPT_DIR/extract-subtitles.sh" --all
            ;;
        2)
            "$SCRIPT_DIR/extract-subtitles.sh" --all --parallel 2
            ;;
        3)
            "$SCRIPT_DIR/extract-subtitles.sh" --all --parallel 4
            ;;
        4)
            "$SCRIPT_DIR/extract-subtitles.sh" --all --dry-run
            ;;
        *)
            echo "Invalid option"
            exit 1
            ;;
    esac
}

extract_show() {
    echo -e "${GREEN}Available shows:${NC}"
    echo "  1. Death Note"
    echo "  2. Odd Taxi"
    echo "  3. Haikyuu!!"
    echo "  4. Wangan Midnight"
    echo "  5. Food Wars!"
    echo "  6. Initial D"
    echo ""
    read -p "Select show [1-6]: " choice
    
    case $choice in
        1) show="Death Note" ;;
        2) show="Odd Taxi" ;;
        3) show="Haikyuu!!" ;;
        4) show="Wangan Midnight" ;;
        5) show="Food Wars!" ;;
        6) show="Initial D" ;;
        *) echo "Invalid option"; exit 1 ;;
    esac
    
    echo -e "${GREEN}Extracting: $show${NC}"
    "$SCRIPT_DIR/extract-subtitles.sh" --show "$show"
}

show_status() {
    OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
    ERROR_LOG="$HOME/.openclaw/workspace/Wakaru/extraction-errors.log"
    
    echo -e "${BLUE}Extraction Status${NC}"
    echo ""
    
    if [ -d "$OUTPUT_DIR" ]; then
        total_subs=$(find "$OUTPUT_DIR" -name "*.srt" -o -name "*.ass" 2>/dev/null | wc -l)
        echo "Total subtitles extracted: $total_subs"
        echo ""
        
        for show_dir in "$OUTPUT_DIR"/*; do
            if [ -d "$show_dir" ]; then
                show=$(basename "$show_dir")
                count=$(find "$show_dir" -name "*.srt" -o -name "*.ass" 2>/dev/null | wc -l)
                echo "  $show: $count files"
            fi
        done
    else
        echo "No subtitles extracted yet"
    fi
    
    echo ""
    
    if [ -f "$ERROR_LOG" ] && [ -s "$ERROR_LOG" ]; then
        error_count=$(wc -l < "$ERROR_LOG")
        echo -e "${YELLOW}Errors: $error_count${NC}"
        echo "  Log: $ERROR_LOG"
    else
        echo -e "${GREEN}No errors${NC}"
    fi
}

generate_manifest() {
    echo -e "${GREEN}Generating subtitle manifest...${NC}"
    "$SCRIPT_DIR/generate-manifest.sh"
}

clean_subtitles() {
    echo -e "${YELLOW}This will clean HTML tags from SRT files${NC}"
    echo "Note: Original files will be preserved (.cleaned.srt created)"
    read -p "Continue? [y/N]: " confirm
    
    if [[ ! $confirm =~ ^[Yy]$ ]]; then
        echo "Cancelled"
        exit 0
    fi
    
    OUTPUT_DIR="$HOME/.openclaw/workspace/Wakaru/subtitles"
    count=0
    
    find "$OUTPUT_DIR" -name "*.srt" -type f | while read -r file; do
        "$SCRIPT_DIR/clean-subtitle.sh" "$file"
        ((count++))
    done
    
    echo ""
    echo -e "${GREEN}Cleaned $count subtitle files${NC}"
}

upload_only() {
    echo -e "${GREEN}Uploading previously extracted subtitles...${NC}"
    "$SCRIPT_DIR/extract-subtitles.sh" --upload-only
}

show_help() {
    cat <<EOF
Wakaru Subtitle Management System

USAGE:
  $0 <command> [options]

COMMANDS:
  test             Test extraction on a single file
  extract          Extract subtitles from all shows
  extract-show     Extract subtitles from specific show
  status           Show extraction status and statistics
  manifest         Generate subtitle manifest JSON
  clean            Clean HTML tags from SRT files
  upload           Upload previously extracted subtitles
  help             Show this help message

DIRECT SCRIPT ACCESS:
  test-subtitle-extraction.sh    - Test single file
  extract-subtitles.sh           - Main extraction script
  generate-manifest.sh           - Manifest generator
  clean-subtitle.sh              - Subtitle cleaner

EXAMPLES:
  $0 test
  $0 extract
  $0 status
  
  # Or use scripts directly:
  ./extract-subtitles.sh --show "Death Note"
  ./extract-subtitles.sh --all --parallel 4
  ./generate-manifest.sh

DOCUMENTATION:
  See ../SUBTITLE_EXTRACTION_GUIDE.md for detailed instructions
  See ../DELIVERY_SUMMARY.md for project overview

EOF
}

# Main command router
main() {
    show_banner
    
    if [ $# -eq 0 ]; then
        show_menu
        read -p "Enter command number or name: " cmd
    else
        cmd=$1
    fi
    
    case $cmd in
        1|test)
            run_test
            ;;
        2|extract)
            run_extract
            ;;
        3|extract-show)
            extract_show
            ;;
        4|status)
            show_status
            ;;
        5|manifest)
            generate_manifest
            ;;
        6|clean)
            clean_subtitles
            ;;
        7|upload)
            upload_only
            ;;
        8|help|-h|--help)
            show_help
            ;;
        *)
            echo "Unknown command: $cmd"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

main "$@"
