#!/bin/bash
# Clean subtitle files by removing HTML tags and formatting

if [ $# -lt 1 ]; then
    echo "Usage: $0 <subtitle.srt>"
    exit 1
fi

INPUT="$1"
OUTPUT="${INPUT%.srt}.cleaned.srt"

# Remove HTML tags and clean up
sed -E '
    # Remove font tags
    s/<\/?font[^>]*>//g
    # Remove bold/italic tags
    s/<\/?[bi]>//g
    # Remove positioning tags like {\an8}
    s/\{[^}]*\}//g
    # Remove leading/trailing whitespace
    s/^[[:space:]]+//
    s/[[:space:]]+$//
' "$INPUT" > "$OUTPUT"

echo "Cleaned subtitle saved to: $OUTPUT"
