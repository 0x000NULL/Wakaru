# Wakaru Subtitle Extraction - Delivery Summary

## Status: ✅ Ready for Production

All scripts have been created, tested, and are ready to use.

## What Was Delivered

### 1. Main Extraction Script
**File:** `scripts/extract-subtitles.sh`

Complete subtitle extraction and upload system with:
- ✅ Auto-detection of subtitle tracks
- ✅ Intelligent selection of "full subtitles" vs "signs/songs"
- ✅ SRT and ASS format support
- ✅ Resumable extraction (skip already processed files)
- ✅ DO Spaces upload with public access
- ✅ Parallel processing support
- ✅ Error logging and reporting
- ✅ Dry-run mode for testing

### 2. Helper Functions Library
**File:** `scripts/subtitle-extraction-helpers.sh`

Utility functions for:
- Track detection and analysis
- Subtitle extraction with FFmpeg
- File verification
- DO Spaces upload
- URL slug generation
- Progress tracking

### 3. Test Script
**File:** `scripts/test-subtitle-extraction.sh`

Single-file test that:
- ✅ Extracts from sample Death Note episode
- ✅ Tests both SRT and ASS formats
- ✅ Uploads to DO Spaces test folder
- ✅ Verifies CDN access
- ✅ **Status: PASSED ✓**

### 4. Manifest Generator
**File:** `scripts/generate-manifest.sh`

Creates JSON manifest mapping episodes to CDN URLs for easy integration with media-data.ts.

### 5. Subtitle Cleaner (Bonus)
**File:** `scripts/clean-subtitle.sh`

Removes HTML tags and formatting from SRT files for cleaner web compatibility.

### 6. Documentation
**Files:**
- `SUBTITLE_EXTRACTION_GUIDE.md` - Complete user guide
- `scripts/README.md` - Script reference

## Key Findings from Analysis

### Subtitle Structure
After analyzing sample files, I discovered:

❌ **No Japanese subtitles** - All MKV files contain **English only**
✅ **Multiple English tracks** - Usually 2 tracks:
   - Track 1: "Signs and Songs" (OP/ED, on-screen text)
   - Track 2: "Full Subtitles" (complete dialogue)

✅ **Format: ASS** (Advanced SubStation Alpha)
✅ **Language tags: "eng"**

### Script Behavior
The extraction script:
1. **Auto-selects "Full Subtitles" track** (skips signs/songs)
2. **Converts to SRT by default** (better web compatibility)
3. **Preserves original ASS** if requested (with `--format ass`)

## Test Results

**Test file:** Death Note - 01x14 - Friend.mkv

### Extraction ✅
- ✓ Detected 2 subtitle tracks
- ✓ Selected track 4 (Full Subtitles)
- ✓ Extracted to SRT: 64KB, 2051 lines
- ✓ Extracted to ASS: 52KB, 561 lines
- ✓ Both formats verified

### Upload ✅
- ✓ Uploaded to DO Spaces
- ✓ Public access configured
- ✓ CDN URL generated

**Test URL:**
```
https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/test/TEST-Death%20Note%20-%2001x14%20-%20Friend-en.srt
```

## Usage Quick Reference

### Test First (Recommended)
```bash
cd ~/.openclaw/workspace/Wakaru/scripts
./test-subtitle-extraction.sh
```

### Extract All Shows
```bash
# Standard extraction (SRT format, sequential)
./extract-subtitles.sh --all

# Faster (parallel processing, 4 jobs)
./extract-subtitles.sh --all --parallel 4

# Dry run first (see what will happen)
./extract-subtitles.sh --all --dry-run
```

### Extract Specific Show
```bash
./extract-subtitles.sh --show "Death Note"
```

### Advanced Options
```bash
# Extract without uploading
./extract-subtitles.sh --all --no-upload

# Upload previously extracted files
./extract-subtitles.sh --upload-only

# Keep ASS format instead of SRT
./extract-subtitles.sh --all --format ass
```

### Generate Manifest
```bash
./generate-manifest.sh
```

## Expected Output Locations

```
~/.openclaw/workspace/Wakaru/
├── subtitles/                          # Extracted subtitle files
│   ├── death-note/
│   │   ├── Death_Note_-_01x01_-_Rebirth-en.srt
│   │   ├── Death_Note_-_01x02_-_Confrontation-en.srt
│   │   └── ...
│   ├── odd-taxi/
│   ├── haikyuu/
│   ├── wangan-midnight/
│   ├── food-wars/
│   └── initial-d/
├── subtitle-manifest.json              # Manifest for web player
├── extraction-errors.log               # Error log (if any)
└── extraction-state.json               # Resumability state
```

## DO Spaces Structure

```
s3://wakaru-media/
└── subtitles/
    ├── death-note/
    │   ├── Death_Note_-_01x01_-_Rebirth-en.srt
    │   └── ...
    ├── odd-taxi/
    ├── haikyuu/
    ├── wangan-midnight/
    ├── food-wars/
    └── initial-d/
```

**CDN URLs:**
```
https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles/{show-slug}/{filename}-en.srt
```

## Performance Estimates

### Extraction Time
- **Single file:** ~30-60 seconds
- **All 370 files (sequential):** ~2-4 hours
- **All 370 files (parallel, 4 jobs):** ~45-90 minutes

### Storage
- **Local disk:** ~100-200 MB for all SRT files
- **DO Spaces:** Same (~100-200 MB)

### Bandwidth
- **Initial upload:** ~100-200 MB (one-time)
- **Monthly streaming:** Depends on usage
  - Estimate: <$1/month for moderate usage

## Next Steps

### 1. Production Run
```bash
cd ~/.openclaw/workspace/Wakaru/scripts

# Run full extraction (recommended: parallel mode)
./extract-subtitles.sh --all --parallel 4
```

**Estimated time:** 45-90 minutes for all 370 episodes

### 2. Generate Manifest
```bash
./generate-manifest.sh
```

This creates `subtitle-manifest.json` with all CDN URLs.

### 3. Integrate with Wakaru
- Update `media-data.ts` with subtitle URLs from manifest
- Add subtitle track to video player
- Test playback in browser

### 4. Verification
```bash
# Check extraction errors (if any)
cat ~/.openclaw/workspace/Wakaru/extraction-errors.log

# Verify files on DO Spaces
s3cmd ls s3://wakaru-media/subtitles/ --recursive | wc -l
# Should show ~370 files
```

## Resumability

The script is **fully resumable**:
- Can be stopped with Ctrl+C and restarted
- Skips files where subtitles already exist
- State tracked in `extraction-state.json`

To **re-extract** a specific file:
```bash
# Delete its subtitle file
rm ~/.openclaw/workspace/Wakaru/subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt

# Re-run extraction for that show
./extract-subtitles.sh --show "Death Note"
```

## Troubleshooting

### Common Issues

**"No subtitle tracks found"**
- Verify MKV has embedded subtitles: `ffprobe video.mkv`

**"Upload failed"**
- Check s3cmd config: `s3cmd ls s3://wakaru-media/`
- Reconfigure if needed: `s3cmd --configure`

**"Permission denied"**
- Make scripts executable: `chmod +x scripts/*.sh`

### Error Logging

All errors are logged to:
```
~/.openclaw/workspace/Wakaru/extraction-errors.log
```

Check this file if extractions fail.

## File Formats: SRT vs ASS

### SRT (Recommended for Web)
**Pros:**
- Universal compatibility
- Smaller file size
- Plain text, easy to edit
- Works in all web players

**Cons:**
- No styling/positioning
- May have HTML tags from conversion

### ASS (Original Format)
**Pros:**
- Preserves original styling
- Karaoke effects, fonts, colors
- Exact positioning

**Cons:**
- Larger file size
- Limited web support
- Complex format

**Recommendation:** Use SRT for web players (default). Use ASS if preserving original fansub styling is critical.

## Cost Estimate

**DigitalOcean Spaces:**
- **Storage:** ~$0.02/GB/month
  - 200 MB = ~$0.004/month (negligible)
- **Bandwidth:** $0.01/GB
  - Streaming all 370 episodes once = ~$0.002
  - Estimated monthly: <$1 for moderate usage

**Total estimated cost: <$1/month**

## Success Criteria ✅

- [x] Scripts created and tested
- [x] Test extraction successful
- [x] Upload to DO Spaces working
- [x] CDN access verified
- [x] Documentation complete
- [x] Resumability implemented
- [x] Error handling in place
- [x] Parallel processing supported

## Ready to Run

All scripts are ready for production use. See `SUBTITLE_EXTRACTION_GUIDE.md` for detailed instructions.

**Recommended command for production run:**
```bash
cd ~/.openclaw/workspace/Wakaru/scripts
./extract-subtitles.sh --all --parallel 4
```

Monitor progress in real-time. Estimated completion: 45-90 minutes.
