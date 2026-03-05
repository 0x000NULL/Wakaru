# Wakaru Subtitle Extraction Scripts

Collection of scripts for extracting subtitles from anime MKV files and uploading to DigitalOcean Spaces.

## Scripts

### Main Scripts

**`extract-subtitles.sh`** - Main extraction and upload script
- Extracts English subtitles from MKV files
- Converts to SRT or keeps as ASS
- Uploads to DO Spaces with public access
- Fully resumable
- Supports parallel processing

**`test-subtitle-extraction.sh`** - Test on single file
- Validates extraction process
- Tests both SRT and ASS formats
- Tests upload to DO Spaces
- Verifies CDN access

**`generate-manifest.sh`** - Generate subtitle manifest
- Creates JSON manifest of all extracted subtitles
- Maps episodes to CDN URLs
- Used for integrating with media-data.ts

**`subtitle-extraction-helpers.sh`** - Utility functions
- Track detection and selection
- Subtitle extraction and verification
- DO Spaces upload
- Progress tracking

## Quick Start

```bash
# 1. Test extraction on one file
./test-subtitle-extraction.sh

# 2. If successful, extract all shows
./extract-subtitles.sh --all

# 3. Generate manifest for web player
./generate-manifest.sh
```

## Common Commands

```bash
# Extract specific show
./extract-subtitles.sh --show "Death Note"

# Dry run (see what will happen)
./extract-subtitles.sh --all --dry-run

# Extract without uploading
./extract-subtitles.sh --all --no-upload

# Upload previously extracted files
./extract-subtitles.sh --upload-only

# Parallel extraction (faster)
./extract-subtitles.sh --all --parallel 4

# Extract as ASS instead of SRT
./extract-subtitles.sh --all --format ass
```

## Output Locations

- **Subtitles:** `~/.openclaw/workspace/Wakaru/subtitles/`
- **Manifest:** `~/.openclaw/workspace/Wakaru/subtitle-manifest.json`
- **Errors:** `~/.openclaw/workspace/Wakaru/extraction-errors.log`
- **Test files:** `~/.openclaw/workspace/Wakaru/test-subtitles/`

## Requirements

- `ffmpeg` and `ffprobe` - for video/subtitle processing
- `s3cmd` - for DigitalOcean Spaces uploads (must be configured)
- Standard Unix tools: `bash`, `grep`, `find`, `sed`

## Shows Processed

1. Death Note
2. Odd Taxi
3. Haikyuu!!
4. Wangan Midnight
5. Food Wars!
6. Initial D

## Troubleshooting

See `../SUBTITLE_EXTRACTION_GUIDE.md` for detailed troubleshooting steps.

**Common issues:**

- **Permission denied:** Run `chmod +x *.sh`
- **s3cmd not found:** Install with `apt install s3cmd` or `brew install s3cmd`
- **Upload fails:** Configure s3cmd with `s3cmd --configure`
- **No subtitles found:** Verify MKV has embedded subs with `ffprobe`

## Architecture

**Flow:**
1. `extract-subtitles.sh` calls `subtitle-extraction-helpers.sh` functions
2. For each MKV file:
   - Detect subtitle tracks
   - Find "full subtitles" track (not signs/songs)
   - Extract to SRT/ASS format
   - Upload to DO Spaces
3. `generate-manifest.sh` scans output directory and creates JSON

**Helper Functions:**
- `get_subtitle_tracks()` - List all subtitle tracks
- `find_full_subtitle_track()` - Select best track
- `extract_subtitle()` - Extract with ffmpeg
- `verify_subtitle()` - Validate output
- `upload_to_spaces()` - Upload with s3cmd
- `show_to_slug()` - Convert show name to URL slug

## Performance

- **Single file:** ~30-60 seconds
- **All shows (370 files):** ~2-4 hours (single-threaded)
- **With `--parallel 4`:** ~45-90 minutes

Extraction is CPU-bound (ffmpeg transcoding). Parallel processing recommended.
