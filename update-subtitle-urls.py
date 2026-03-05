#!/usr/bin/env python3
"""
Update media-data.ts with subtitle CDN URLs based on uploaded files
"""

import os
import re
from pathlib import Path

# Base CDN URL
CDN_BASE = "https://wakaru-media.sfo3.cdn.digitaloceanspaces.com/subtitles"

# Subtitle directory
SUBTITLE_DIR = Path("/home/ethan/.openclaw/workspace/Wakaru/subtitles")

# Media data file
MEDIA_DATA_FILE = Path("/home/ethan/.openclaw/workspace/Wakaru/src/lib/constants/media-data.ts")

def get_subtitle_files():
    """Get all subtitle files organized by show"""
    subtitle_map = {}
    
    for show_dir in SUBTITLE_DIR.iterdir():
        if not show_dir.is_dir():
            continue
        
        show_slug = show_dir.name
        subtitle_map[show_slug] = []
        
        for subtitle_file in show_dir.glob("*-en.srt"):
            subtitle_map[show_slug].append(subtitle_file.name)
    
    return subtitle_map

def extract_episode_number(filename):
    """Extract episode number from subtitle filename"""
    # Death Note: "Death Note - 01x01 - Rebirth-en.srt" -> 1
    match = re.search(r'(\d+)x(\d+)', filename)
    if match:
        return int(match.group(2))
    
    # Odd Taxi: "[Erai-raws] Odd Taxi - 01 [...]" -> 1
    # Wangan Midnight: "Wangan Midnight - 01 [...]" -> 1
    # Haikyuu: "[Anime Time] Haikyuu!! - 01-en.srt" -> 1
    # Food Wars: "[Anime Time] Food Wars! - 01 [...]" -> 1
    match = re.search(r'[-\s](\d+)[-\s\[]', filename)
    if match:
        return int(match.group(1))
    
    # Food Wars S2/S5: "Food Wars! S2 - 01-en.srt" -> 1
    # "Food Wars S5 - 01-en.srt" -> 1
    match = re.search(r'S\d+\s*-\s*(\d+)', filename)
    if match:
        return int(match.group(1))
    
    return None

def build_subtitle_mapping(subtitle_map):
    """Build mapping of show -> episode_number -> subtitle_url"""
    mapping = {}
    
    for show_slug, files in subtitle_map.items():
        mapping[show_slug] = {}
        
        for filename in files:
            episode_num = extract_episode_number(filename)
            if episode_num:
                # URL-encode the filename for proper CDN URLs
                encoded_filename = filename.replace(' ', '%20').replace('[', '%5B').replace(']', '%5D')
                subtitle_url = f"{CDN_BASE}/{show_slug}/{encoded_filename}"
                mapping[show_slug][episode_num] = subtitle_url
    
    return mapping

def update_media_data(mapping):
    """Update media-data.ts with subtitle URLs"""
    content = MEDIA_DATA_FILE.read_text()
    
    # Track updates
    updates = 0
    
    # Process each show section
    for show_slug, episodes in mapping.items():
        print(f"\nProcessing {show_slug}: {len(episodes)} episodes")
        
        for episode_num, subtitle_url in sorted(episodes.items()):
            # Find the episode block - look for episode_number: N followed by subtitle_en_url: null
            pattern = rf'(episode_number:\s*{episode_num},.*?subtitle_en_url:\s*)null'
            
            # Check if this pattern exists
            if re.search(pattern, content, re.DOTALL):
                # Replace null with the actual URL
                content = re.sub(
                    pattern,
                    rf"\1'{subtitle_url}'",
                    content,
                    count=1,
                    flags=re.DOTALL
                )
                updates += 1
                print(f"  ✓ Episode {episode_num}: {subtitle_url}")
            else:
                print(f"  ⚠ Episode {episode_num}: Pattern not found")
    
    # Write updated content
    MEDIA_DATA_FILE.write_text(content)
    print(f"\n{'='*60}")
    print(f"✓ Updated {updates} episode subtitle URLs")
    print(f"✓ Saved to {MEDIA_DATA_FILE}")
    return updates

def main():
    print("Subtitle URL Update Script")
    print("="*60)
    
    # Get all subtitle files
    print("\n1. Scanning subtitle files...")
    subtitle_map = get_subtitle_files()
    total_files = sum(len(files) for files in subtitle_map.values())
    print(f"   Found {total_files} subtitle files across {len(subtitle_map)} shows")
    
    # Build mapping
    print("\n2. Building episode mappings...")
    mapping = build_subtitle_mapping(subtitle_map)
    total_episodes = sum(len(eps) for eps in mapping.values())
    print(f"   Mapped {total_episodes} episodes")
    
    # Update media-data.ts
    print("\n3. Updating media-data.ts...")
    updates = update_media_data(mapping)
    
    if updates > 0:
        print("\n✓ All updates complete!")
    else:
        print("\n⚠ No updates made. Check patterns and file structure.")

if __name__ == "__main__":
    main()
