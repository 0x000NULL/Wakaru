# Wakaru - Anime Subtitle Extraction System

Complete system for extracting, processing, and uploading anime subtitles to DigitalOcean Spaces.

## 📋 Project Status

✅ **Scripts Ready** - All extraction scripts tested and working  
✅ **Test Passed** - Single file extraction verified  
✅ **Documentation Complete** - Full guides and references available  
⏳ **Production Run** - Ready to extract all 370 episodes

## 🎯 Quick Start

### Option 1: Interactive Launcher (Easiest)
```bash
cd scripts
./wakaru-subtitles.sh
```

Follow the interactive menu to:
- Test extraction
- Extract all shows
- Check status
- Generate manifest

### Option 2: Direct Commands
```bash
cd scripts

# Test first (recommended)
./test-subtitle-extraction.sh

# Extract all shows (parallel mode, faster)
./extract-subtitles.sh --all --parallel 4

# Generate manifest for web player
./generate-manifest.sh
```

## 📁 Project Structure

```
Wakaru/
├── scripts/
│   ├── wakaru-subtitles.sh              # Interactive launcher
│   ├── extract-subtitles.sh             # Main extraction script
│   ├── test-subtitle-extraction.sh      # Test on single file
│   ├── generate-manifest.sh             # Generate JSON manifest
│   ├── subtitle-extraction-helpers.sh   # Utility functions
│   ├── clean-subtitle.sh                # Remove HTML tags
│   └── README.md                        # Script documentation
│
├── subtitles/                           # Extracted subtitle files
│   ├── death-note/
│   ├── odd-taxi/
│   ├── haikyuu/
│   └── ...
│
├── test-subtitles/                      # Test output
│   └── Death Note - 01x14 - Friend-en.srt
│
├── DELIVERY_SUMMARY.md                  # Project completion summary
├── SUBTITLE_EXTRACTION_GUIDE.md         # Complete user guide
└── README.md                            # This file
```

## 📚 Documentation

- **[DELIVERY_SUMMARY.md](DELIVERY_SUMMARY.md)** - Project overview and test results
- **[SUBTITLE_EXTRACTION_GUIDE.md](SUBTITLE_EXTRACTION_GUIDE.md)** - Detailed usage guide
- **[scripts/README.md](scripts/README.md)** - Script reference

## 🎬 Anime Shows Included

1. **Death Note** - Psychological thriller
2. **Odd Taxi** - Mystery drama
3. **Haikyuu!!** - Sports (volleyball)
4. **Wangan Midnight** - Racing
5. **Food Wars!** - Cooking competition
6. **Initial D** - Street racing

**Total:** ~370 episodes across 6 shows

## 🔍 Key Findings

After analyzing the MKV files:

- ❌ **No Japanese subtitles** - All files contain English only
- ✅ **Multiple English tracks** - Usually "Signs/Songs" + "Full Subtitles"
- ✅ **Format: ASS** - Advanced SubStation Alpha with styling
- ✅ **Auto-converted to SRT** - Better web compatibility

The scripts automatically:
1. Detect all subtitle tracks
2. Select "Full Subtitles" (not just signs/songs)
3. Convert to SRT format (or keep ASS if requested)
4. Upload to DO Spaces with public access

## ⚡ Performance

### Extraction Time Estimates
- **Single file:** ~30-60 seconds
- **All 370 files (sequential):** ~2-4 hours
- **All 370 files (parallel, 4 jobs):** ~45-90 minutes ⭐

### Storage Requirements
- **Local disk:** ~100-200 MB
- **DO Spaces:** ~100-200 MB
- **Bandwidth:** ~100-200 MB initial upload

### Cost Estimate
- **DO Spaces storage:** <$0.01/month
- **DO Spaces bandwidth:** <$1/month (moderate streaming)

## 🛠️ Requirements

- **ffmpeg** - Video/subtitle processing
- **s3cmd** - DigitalOcean Spaces uploads (must be configured)
- **bash** - Script execution
- **Standard Unix tools** - grep, sed, find, etc.

### Setup s3cmd (if needed)
```bash
s3cmd --configure
```

Follow prompts to enter:
- DO Spaces access key
- DO Spaces secret key
- Region: sfo3
- S3 Endpoint: sfo3.digitaloceanspaces.com

## 📊 Test Results

**Test file:** Death Note - 01x14 - Friend.mkv

✅ **Track Detection:** 2 subtitle tracks found  
✅ **Track Selection:** "Full Subtitles" auto-selected  
✅ **SRT Extraction:** 64KB, 2,051 lines  
✅ **ASS Extraction:** 52KB, 561 lines  
✅ **DO Spaces Upload:** Success  
✅ **CDN Access:** Verified  

**Test subtitle URL:**
```
https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/test/TEST-Death%20Note%20-%2001x14%20-%20Friend-en.srt
```

## 🚀 Production Run

**Recommended command for full extraction:**
```bash
cd scripts
./extract-subtitles.sh --all --parallel 4
```

**Estimated completion:** 45-90 minutes

The script is **fully resumable** - can be stopped and restarted without re-processing completed files.

## 📦 Output Locations

### Local Files
```
~/.openclaw/workspace/Wakaru/subtitles/{show-slug}/{filename}-en.srt
```

### DO Spaces
```
s3://wakaru-media/subtitles/{show-slug}/{filename}-en.srt
```

### CDN URLs
```
https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles/{show-slug}/{filename}-en.srt
```

## 🔄 Resumability

The extraction system is fully resumable:

1. **State tracking** - Remembers processed files
2. **Skip existing** - Won't re-extract if subtitle exists
3. **Ctrl+C safe** - Can stop and restart anytime
4. **Error logging** - Failed files logged for retry

To re-extract a specific file:
```bash
# Delete the subtitle file
rm subtitles/death-note/Death_Note_-_01x01_-_Rebirth-en.srt

# Re-run extraction
./scripts/extract-subtitles.sh --show "Death Note"
```

## 🎨 Output Formats

### SRT (Default, Recommended)
- Universal compatibility
- Smaller file size
- Plain text format
- Works in all web players

### ASS (Optional)
- Preserves original styling
- Karaoke effects, fonts, colors
- Larger file size
- Limited web support

**To use ASS format:**
```bash
./scripts/extract-subtitles.sh --all --format ass
```

## 🐛 Troubleshooting

### Common Issues

**"No subtitle tracks found"**
```bash
# Verify MKV has subtitles
ffprobe video.mkv
```

**"Upload failed"**
```bash
# Test s3cmd connection
s3cmd ls s3://wakaru-media/

# Reconfigure if needed
s3cmd --configure
```

**"Permission denied"**
```bash
# Make scripts executable
chmod +x scripts/*.sh
```

### Error Logs

All errors logged to:
```
~/.openclaw/workspace/Wakaru/extraction-errors.log
```

## 📖 Usage Examples

### Extract specific show
```bash
./scripts/extract-subtitles.sh --show "Death Note"
```

### Dry run (preview only)
```bash
./scripts/extract-subtitles.sh --all --dry-run
```

### Extract without uploading
```bash
./scripts/extract-subtitles.sh --all --no-upload
```

### Upload previously extracted files
```bash
./scripts/extract-subtitles.sh --upload-only
```

### Check extraction status
```bash
./scripts/wakaru-subtitles.sh status
```

### Generate manifest
```bash
./scripts/generate-manifest.sh
```

## 🎯 Next Steps

1. **Run production extraction**
   ```bash
   cd scripts
   ./extract-subtitles.sh --all --parallel 4
   ```

2. **Generate manifest**
   ```bash
   ./generate-manifest.sh
   ```

3. **Integrate with Wakaru web player**
   - Import `subtitle-manifest.json`
   - Add subtitle tracks to video player
   - Test playback

4. **Verify in browser**
   - Load video with subtitle URL
   - Check timing and display
   - Test on mobile devices

## 📝 License & Credits

Part of the Wakaru Japanese learning platform.

**Technologies:**
- FFmpeg - Video/subtitle processing
- s3cmd - DigitalOcean Spaces integration
- Bash - Script automation

**Show Sources:**
All anime content sourced from `/mnt/ClusterFS/MEDIA/Anime/`

## 🆘 Support

For issues or questions:
1. Check `SUBTITLE_EXTRACTION_GUIDE.md`
2. Review `extraction-errors.log`
3. Test with single file: `./scripts/test-subtitle-extraction.sh`

---

**Status:** ✅ Ready for production use  
**Last Updated:** 2026-03-04  
**Version:** 1.0.0
