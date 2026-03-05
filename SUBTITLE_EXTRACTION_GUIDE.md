# Wakaru Subtitle Extraction Guide

## Overview

This guide covers extracting English subtitles from Wakaru anime MKV files and uploading them to DigitalOcean Spaces for the Wakaru web player.

**Important Note:** The anime files contain **English subtitles only** (no Japanese). Most files have 2 English tracks:
- Track 1: "Signs and Songs" (opening/ending credits, on-screen text)
- Track 2: "Full Subtitles" (complete dialogue)

The script automatically selects the "Full Subtitles" track.

## Quick Start

```bash
# Test extraction on a single file first
cd ~/.openclaw/workspace/Wakaru/scripts
chmod +x *.sh
./test-subtitle-extraction.sh

# If test passes, extract all shows
./extract-subtitles.sh --all

# Or process specific show
./extract-subtitles.sh --show "Death Note"
```

## Script Features

### Main Script: `extract-subtitles.sh`

**Command-line Options:**

```bash
./extract-subtitles.sh [OPTIONS]

OPTIONS:
  --show NAME         Process only specific show
  --all              Process all shows (default)
  --dry-run          Show what would be done without doing it
  --no-upload        Extract only, don't upload to DO Spaces
  --upload-only      Upload previously extracted subtitles
  --parallel N       Process N files in parallel (default: 1)
  --format FMT       Output format: srt or ass (default: srt)
  -h, --help         Show help message
```

**Examples:**

```bash
# Dry run to see what will happen
./extract-subtitles.sh --all --dry-run

# Extract from specific show in SRT format
./extract-subtitles.sh --show "Death Note" --format srt

# Extract all shows, no upload (offline mode)
./extract-subtitles.sh --all --no-upload

# Upload previously extracted subtitles
./extract-subtitles.sh --upload-only

# Parallel processing (faster, use 2-4 jobs)
./extract-subtitles.sh --all --parallel 4
```

## Shows Included

The script processes these 6 anime shows:
1. Death Note
2. Odd Taxi
3. Haikyuu!!
4. Wangan Midnight
5. Food Wars!
6. Initial D

**Total:** ~370 episodes, ~122 GB of video

## Output Files

### Extracted Subtitles

**Location:** `~/.openclaw/workspace/Wakaru/subtitles/`

**Structure:**
```
subtitles/
├── death-note/
│   ├── Death_Note_-_01x01_-_Rebirth-en.srt
│   ├── Death_Note_-_01x02_-_Confrontation-en.srt
│   └── ...
├── odd-taxi/
│   └── ...
└── ...
```

### Logs and State

- **Error Log:** `~/.openclaw/workspace/Wakaru/extraction-errors.log`
- **State File:** `~/.openclaw/workspace/Wakaru/extraction-state.json`
- **Manifest:** `~/.openclaw/workspace/Wakaru/subtitle-manifest.json`

## DigitalOcean Spaces Upload

**Bucket:** `wakaru-media`

**Subtitle Paths:**
```
s3://wakaru-media/subtitles/{show-slug}/{filename}-en.srt
```

**CDN URLs:**
```
https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles/{show-slug}/{filename}-en.srt
```

**Example:**
```
https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt
```

All uploaded files are **publicly accessible** (`--acl-public`).

## Resumability

The script is **fully resumable**:
- Skips files where subtitles already exist
- Can be stopped with `Ctrl+C` and restarted
- Only processes new/unprocessed files

To **re-extract** a file, delete its subtitle file from the output directory.

## Expected Output

```
========================================
   Wakaru Subtitle Extraction
========================================

[1/6] Death Note
=========================================
ℹ Processing: Death Note
ℹ Found 37 video file(s)

ℹ [1/37] Death Note - 01x01 - Rebirth.mkv
ℹ Detected: track 4 - 4,ass,eng,English [FMA1394/Redc4t]
ℹ Extracting to srt...
✓ Extracted: Death_Note_-_01x01_-_Rebirth-en.srt
ℹ Uploading to DO Spaces...
✓ Uploaded: https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt

[2/37] Death Note - 01x02 - Confrontation.mkv
...

[2/6] Odd Taxi
...
```

## Troubleshooting

### No subtitle tracks found

**Cause:** MKV file has no embedded subtitles

**Solution:** Verify with:
```bash
ffprobe -v error -select_streams s -show_entries stream=index,codec_name:stream_tags=language,title video.mkv
```

### FFmpeg extraction failed

**Cause:** Corrupted MKV file or unsupported subtitle codec

**Solution:** 
- Check if file plays correctly
- Try extracting manually: `ffmpeg -i video.mkv -map 0:s:0 -c:s srt output.srt`

### Upload failed

**Cause:** s3cmd not configured or network issue

**Solution:**
```bash
# Test s3cmd configuration
s3cmd ls s3://wakaru-media/

# Reconfigure if needed
s3cmd --configure
```

### Invalid subtitle output

**Cause:** Empty or corrupted subtitle track

**Solution:** 
- Try ASS format instead of SRT: `--format ass`
- Check the source track is valid

### Permission denied

**Cause:** Script not executable

**Solution:**
```bash
chmod +x ~/.openclaw/workspace/Wakaru/scripts/*.sh
```

## Performance

### Extraction Time

**Single-threaded:** ~2-4 hours for all 370 episodes
- Average: ~30-60 seconds per file
- Depends on CPU and subtitle complexity

**Parallel (4 jobs):** ~45-90 minutes
- Linear speedup with CPU cores
- Recommended: 2-4 parallel jobs

### Optimization

**For faster extraction:**
```bash
# Use parallel processing
./extract-subtitles.sh --all --parallel 4

# Keep files local (extract without upload)
./extract-subtitles.sh --all --no-upload

# Upload later in bulk
./extract-subtitles.sh --upload-only
```

**For minimal bandwidth:**
```bash
# Extract in SRT format (smaller than ASS)
./extract-subtitles.sh --all --format srt
```

## Verification Steps

### 1. Verify Extraction

```bash
# Check subtitle file is valid
ffprobe ~/.openclaw/workspace/Wakaru/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt

# Check encoding is UTF-8
file ~/.openclaw/workspace/Wakaru/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt

# Preview first subtitle
head -20 ~/.openclaw/workspace/Wakaru/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt
```

### 2. Verify Upload

```bash
# Check file exists on DO Spaces
s3cmd ls s3://wakaru-media/subtitles/death-note/ | grep "01x01"

# Test CDN access
curl -I "https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt"
# Should return: HTTP/2 200
```

### 3. Verify Timing

Play the video with extracted subtitle to verify timing matches:
```bash
mpv /mnt/ClusterFS/MEDIA/Anime/Death\ Note/Death_Note_-_01x01_-_Rebirth.mkv \
    --sub-file=~/.openclaw/workspace/Wakaru/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt
```

## File Formats

### SRT (SubRip)

**Pros:**
- Universal compatibility
- Smaller file size
- Plain text, easy to edit
- Better web player support

**Cons:**
- No styling (colors, fonts, positioning)
- Loses formatting from ASS

**Recommended for:** Web players, mobile devices

### ASS (Advanced SubStation Alpha)

**Pros:**
- Preserves styling (karaoke, colors, fonts)
- Exact positioning
- Animation effects

**Cons:**
- Larger file size
- Less compatible
- Complex format

**Recommended for:** Local playback, anime fansubs with styling

## Next Steps

After extraction:

1. **Update media-data.ts** with subtitle URLs (can be automated with manifest)
2. **Test in Wakaru web player** to verify playback
3. **Monitor CDN bandwidth** usage in DO dashboard
4. **Set up CDN caching** headers for better performance

## Support

If extraction fails for specific shows or files, check:
- `~/.openclaw/workspace/Wakaru/extraction-errors.log` for error details
- Video file integrity with `ffprobe`
- Available disk space for output
- s3cmd configuration and credentials

## Estimated Costs

**DigitalOcean Spaces:**
- Storage: ~100-200 MB for all subtitles (negligible cost)
- Bandwidth: Depends on usage
  - Streaming 370 episodes once: ~100-200 MB transfer
  - Estimate: <$1/month for moderate usage

**Recommendation:** Monitor DO Spaces bandwidth dashboard during first month.
