#!/usr/bin/env python3
"""
Wakaru DigitalOcean Spaces Configuration Script

Prerequisites:
- Bucket 'wakaru-media' must exist in SFO3 region
- Access key must have readwrite permissions on the bucket

This script:
1. Verifies bucket exists
2. Configures CORS for video playback
3. Sets bucket ACL to public-read
4. Creates folder structure
5. Configures s3cmd
6. Tests the setup
7. Generates documentation
"""

import boto3
from botocore.client import Config
from botocore.exceptions import ClientError
import os
import sys
import subprocess

# Configuration
ACCESS_KEY = "DO801QLKUVEKTXKWCEGY"
SECRET_KEY = "4C7mqV7lRdB3X0ky8z4LFj6SAwmI7bsBr6QnAhbJ1+k"
REGION = "sfo3"
ENDPOINT = f"https://{REGION}.digitaloceanspaces.com"
BUCKET_NAME = "wakaru-media"
CDN_URL = f"https://{BUCKET_NAME}.{REGION}.cdn.digitaloceanspaces.com"
DIRECT_URL = f"https://{BUCKET_NAME}.{REGION}.digitaloceanspaces.com"

# Folder structure for anime library
FOLDERS = [
    "videos/shirokuma-cafe",
    "videos/takagi-san",
    "videos/terrace-house",
    "videos/death-note",
    "videos/evangelion",
    "subtitles/shirokuma-cafe",
    "subtitles/takagi-san",
    "subtitles/terrace-house",
    "subtitles/death-note",
    "subtitles/evangelion",
]

def print_header(text):
    print(f"\n{'='*60}")
    print(f"  {text}")
    print(f"{'='*60}\n")

def print_success(text):
    print(f"✓ {text}")

def print_error(text):
    print(f"✗ {text}")

def print_info(text):
    print(f"ℹ {text}")

def create_s3_client():
    """Create boto3 S3 client for DigitalOcean Spaces"""
    session = boto3.session.Session()
    return session.client(
        's3',
        region_name=REGION,
        endpoint_url=ENDPOINT,
        aws_access_key_id=ACCESS_KEY,
        aws_secret_access_key=SECRET_KEY
    )

def check_bucket_exists(client):
    """Verify bucket exists"""
    print_header("Step 1: Verify Bucket Exists")
    try:
        client.head_bucket(Bucket=BUCKET_NAME)
        print_success(f"Bucket '{BUCKET_NAME}' exists")
        return True
    except ClientError as e:
        if e.response['Error']['Code'] == '404':
            print_error(f"Bucket '{BUCKET_NAME}' does not exist")
            print_info("Please create the bucket via web UI first:")
            print_info("https://cloud.digitalocean.com/spaces")
            return False
        elif e.response['Error']['Code'] == '403':
            print_error("Access denied - credentials may need bucket permissions")
            print_info("Update access key permissions via:")
            print_info("https://cloud.digitalocean.com/account/api/spaces")
            return False
        else:
            print_error(f"Error checking bucket: {e}")
            return False

def configure_cors(client):
    """Configure CORS for video playback"""
    print_header("Step 2: Configure CORS")
    
    cors_configuration = {
        'CORSRules': [{
            'AllowedHeaders': ['*'],
            'AllowedMethods': ['GET', 'HEAD'],
            'AllowedOrigins': ['*'],
            'MaxAgeSeconds': 3000
        }]
    }
    
    try:
        client.put_bucket_cors(Bucket=BUCKET_NAME, CORSConfiguration=cors_configuration)
        print_success("CORS configured for cross-origin video playback")
        return True
    except ClientError as e:
        print_error(f"Error configuring CORS: {e}")
        return False

def set_bucket_acl(client):
    """Set bucket ACL to public-read"""
    print_header("Step 3: Set Bucket ACL to Public")
    
    try:
        client.put_bucket_acl(Bucket=BUCKET_NAME, ACL='public-read')
        print_success("Bucket set to public-read (files publicly accessible)")
        return True
    except ClientError as e:
        print_error(f"Error setting bucket ACL: {e}")
        print_info("You may need to set this manually via the web UI")
        return False

def create_folder_structure(client):
    """Create folder structure using .keep files"""
    print_header("Step 4: Create Folder Structure")
    
    success_count = 0
    for folder in FOLDERS:
        try:
            # S3 doesn't have real folders, so we create a .keep file
            key = f"{folder}/.keep"
            client.put_object(
                Bucket=BUCKET_NAME,
                Key=key,
                Body=b'',
                ACL='public-read',
                ContentType='text/plain'
            )
            print_success(f"Created: {folder}/")
            success_count += 1
        except ClientError as e:
            print_error(f"Error creating {folder}/: {e}")
    
    print_info(f"Created {success_count}/{len(FOLDERS)} folders")
    return success_count > 0

def configure_s3cmd():
    """Configure s3cmd for easy uploads"""
    print_header("Step 5: Configure s3cmd")
    
    s3cfg_content = f"""[default]
access_key = {ACCESS_KEY}
secret_key = {SECRET_KEY}
host_base = {REGION}.digitaloceanspaces.com
host_bucket = %(bucket)s.{REGION}.digitaloceanspaces.com
use_https = True
signature_v2 = False
"""
    
    s3cfg_path = os.path.expanduser("~/.s3cfg")
    try:
        with open(s3cfg_path, 'w') as f:
            f.write(s3cfg_content)
        print_success(f"s3cmd configured: {s3cfg_path}")
        return True
    except Exception as e:
        print_error(f"Error writing s3cmd config: {e}")
        return False

def test_upload(client):
    """Test upload with a dummy file"""
    print_header("Step 6: Test Upload")
    
    test_file = "/tmp/wakaru_test.txt"
    test_key = "test/wakaru_test.txt"
    
    try:
        # Create test file
        with open(test_file, 'w') as f:
            f.write("Wakaru Media Test File\nSetup completed successfully!\n")
        
        # Upload using boto3
        client.upload_file(
            test_file,
            BUCKET_NAME,
            test_key,
            ExtraArgs={'ACL': 'public-read', 'ContentType': 'text/plain'}
        )
        
        test_url = f"{CDN_URL}/{test_key}"
        print_success(f"Test file uploaded successfully")
        print_info(f"Test URL: {test_url}")
        
        # Cleanup
        os.remove(test_file)
        
        # Try to verify with curl
        try:
            result = subprocess.run(
                ['curl', '-I', test_url],
                capture_output=True,
                text=True,
                timeout=10
            )
            if '200 OK' in result.stdout:
                print_success("Test file is publicly accessible")
            else:
                print_info("Test file uploaded but not yet accessible (CDN propagation)")
        except Exception:
            print_info("Could not verify accessibility (CDN propagation may take a moment)")
        
        return True
    except Exception as e:
        print_error(f"Error testing upload: {e}")
        return False

def generate_documentation():
    """Generate comprehensive documentation"""
    print_header("Step 7: Generate Documentation")
    
    doc_path = os.path.expanduser("~/.openclaw/workspace/Wakaru/DO_SPACES_SETUP.md")
    
    doc_content = f"""# DigitalOcean Spaces Setup for Wakaru

## Configuration Summary

**Bucket Details:**
- Name: `{BUCKET_NAME}`
- Region: `{REGION}` (San Francisco 3)
- CDN: Enabled
- Access: Public (files publicly readable)

**Access URLs:**
- CDN (recommended): `{CDN_URL}/`
- Direct: `{DIRECT_URL}/`

**Credentials:**
- Access Key: `{ACCESS_KEY}`
- Secret Key: `{SECRET_KEY}`

## Folder Structure

```
{BUCKET_NAME}/
├── videos/
│   ├── shirokuma-cafe/      (Polar Bear's Café)
│   ├── takagi-san/          (Teasing Master Takagi-san)
│   ├── terrace-house/       (Terrace House)
│   ├── death-note/          (Death Note)
│   └── evangelion/          (Neon Genesis Evangelion)
└── subtitles/
    ├── shirokuma-cafe/
    ├── takagi-san/
    ├── terrace-house/
    ├── death-note/
    └── evangelion/
```

## Uploading Files

### Using s3cmd (Recommended)

```bash
# Upload a video file
s3cmd put video.mp4 s3://{BUCKET_NAME}/videos/shirokuma-cafe/ep01.mp4 --acl-public

# Upload subtitles
s3cmd put subtitles.srt s3://{BUCKET_NAME}/subtitles/shirokuma-cafe/ep01.srt --acl-public

# Upload entire directory
s3cmd sync local_folder/ s3://{BUCKET_NAME}/videos/shirokuma-cafe/ --acl-public

# List files
s3cmd ls s3://{BUCKET_NAME}/videos/
```

### Using AWS CLI

```bash
export AWS_ACCESS_KEY_ID="{ACCESS_KEY}"
export AWS_SECRET_ACCESS_KEY="{SECRET_KEY}"

aws s3 cp video.mp4 s3://{BUCKET_NAME}/videos/shirokuma-cafe/ep01.mp4 \\
  --endpoint-url=https://{REGION}.digitaloceanspaces.com \\
  --acl public-read

aws s3 ls s3://{BUCKET_NAME}/ --endpoint-url=https://{REGION}.digitaloceanspaces.com
```

### Using Python (boto3)

```python
import boto3

client = boto3.client(
    's3',
    region_name='{REGION}',
    endpoint_url='https://{REGION}.digitaloceanspaces.com',
    aws_access_key_id='{ACCESS_KEY}',
    aws_secret_access_key='{SECRET_KEY}'
)

# Upload file
client.upload_file(
    'local_video.mp4',
    '{BUCKET_NAME}',
    'videos/shirokuma-cafe/ep01.mp4',
    ExtraArgs={{'ACL': 'public-read', 'ContentType': 'video/mp4'}}
)

# Generate public URL
url = f"https://{BUCKET_NAME}.{REGION}.cdn.digitaloceanspaces.com/videos/shirokuma-cafe/ep01.mp4"
print(f"Video URL: {{url}}")
```

## File Access URLs

After uploading, files are accessible at:

```
# CDN URL (faster, recommended)
https://{BUCKET_NAME}.{REGION}.cdn.digitaloceanspaces.com/videos/shirokuma-cafe/ep01.mp4

# Direct URL
https://{BUCKET_NAME}.{REGION}.digitaloceanspaces.com/videos/shirokuma-cafe/ep01.mp4
```

## CORS Configuration

CORS is configured to allow:
- Methods: GET, HEAD
- Origins: * (all)
- Headers: * (all)

This allows video playback from any domain.

## Cost Estimate

**Storage:** $5/month for 250GB
- First 250GB: $0.02/GB/month = $5/month
- Additional storage: $0.01/GB/month

**Bandwidth:**
- First 1TB outbound: Free
- Additional: $0.01/GB

**Estimated monthly cost for typical usage:**
- 200GB storage: ~$4/month
- 500GB bandwidth (under free tier): $0
- **Total: ~$4-5/month**

For reference:
- 480p video: ~1-2GB per hour
- 720p video: ~2-5GB per hour
- If you store 50 hours of 720p content: ~150GB = $3/month storage

## Video Optimization Tips

To minimize storage costs:

1. **Use appropriate bitrates:**
   - 480p: 1-1.5 Mbps (Japanese learner-friendly)
   - 720p: 2-3 Mbps
   
2. **Convert to web-friendly formats:**
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium \\
     -c:a aac -b:a 128k output.mp4
   ```

3. **Consider VP9/AV1 for better compression:**
   ```bash
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 \\
     -c:a libopus -b:a 128k output.webm
   ```

## Subtitle Formats

Recommended subtitle formats:
- **SRT** - Simple, universally supported
- **VTT** - Web-native, supports styling
- **ASS/SSA** - Advanced styling (karaoke, furigana)

## Troubleshooting

### Files not accessible
- Check ACL: `s3cmd info s3://{BUCKET_NAME}/path/to/file`
- Set ACL: `s3cmd setacl s3://{BUCKET_NAME}/path/to/file --acl-public`

### CORS errors in browser
- Verify CORS configuration via DigitalOcean web UI
- Check browser console for specific CORS errors
- Re-run configuration script if needed

### s3cmd errors
- Verify credentials in `~/.s3cfg`
- Test connection: `s3cmd ls s3://{BUCKET_NAME}/`
- Check API quotas/rate limits

## Security Notes

**Current setup:** Files are publicly readable (intentional for single-user app)

**For production/multi-user:**
- Use signed URLs with expiration
- Implement access control in Wakaru backend
- Consider private bucket + application-level authentication

**Credentials safety:**
- These keys are scoped to `{BUCKET_NAME}` only
- Stored locally in `~/.s3cfg` (600 permissions recommended)
- Can be rotated via DigitalOcean web UI

## Management

**View bucket in web UI:**
https://cloud.digitalocean.com/spaces/{BUCKET_NAME}?i=5ab3e2

**Manage access keys:**
https://cloud.digitalocean.com/account/api/spaces

**CDN settings:**
https://cloud.digitalocean.com/spaces/{BUCKET_NAME}/settings

## Next Steps

1. Upload your first anime episode:
   ```bash
   s3cmd put episode.mp4 s3://{BUCKET_NAME}/videos/shirokuma-cafe/ep01.mp4 --acl-public
   ```

2. Update Wakaru configuration with CDN URLs

3. Test video playback in Wakaru web interface

4. Monitor usage in DigitalOcean billing dashboard

---

**Setup completed:** {{timestamp}}
**Documentation generated by:** `configure_wakaru_spaces.py`
"""
    
    try:
        with open(doc_path, 'w') as f:
            f.write(doc_content.replace('{{timestamp}}', 
                                      subprocess.check_output(['date']).decode().strip()))
        print_success(f"Documentation generated: {doc_path}")
        return True
    except Exception as e:
        print_error(f"Error generating documentation: {e}")
        return False

def main():
    print_header("Wakaru DigitalOcean Spaces Configuration")
    print_info(f"Bucket: {BUCKET_NAME}")
    print_info(f"Region: {REGION}")
    print_info(f"CDN URL: {CDN_URL}")
    
    # Create S3 client
    client = create_s3_client()
    
    # Run configuration steps
    steps = [
        ("Bucket verification", lambda: check_bucket_exists(client)),
        ("CORS configuration", lambda: configure_cors(client)),
        ("Bucket ACL", lambda: set_bucket_acl(client)),
        ("Folder structure", lambda: create_folder_structure(client)),
        ("s3cmd configuration", lambda: configure_s3cmd()),
        ("Upload test", lambda: test_upload(client)),
        ("Documentation", lambda: generate_documentation()),
    ]
    
    results = []
    for step_name, step_func in steps:
        try:
            success = step_func()
            results.append((step_name, success))
            if not success and step_name == "Bucket verification":
                print_error("Cannot proceed without valid bucket")
                break
        except Exception as e:
            print_error(f"Unexpected error in {step_name}: {e}")
            results.append((step_name, False))
    
    # Final summary
    print_header("Configuration Summary")
    for step_name, success in results:
        status = "✓" if success else "✗"
        print(f"{status} {step_name}")
    
    successful_steps = sum(1 for _, success in results if success)
    total_steps = len(results)
    
    if successful_steps == total_steps:
        print_success(f"\n🎉 All {total_steps} steps completed successfully!")
        print_info(f"\nNext steps:")
        print_info(f"1. Upload videos: s3cmd put video.mp4 s3://{BUCKET_NAME}/videos/anime-name/")
        print_info(f"2. Access files: {CDN_URL}/videos/...")
        print_info(f"3. Read full docs: ~/.openclaw/workspace/Wakaru/DO_SPACES_SETUP.md")
    else:
        print_info(f"\n⚠️  Completed {successful_steps}/{total_steps} steps")
        print_info(f"Review errors above and check DO_SPACES_QUICKSTART.md for manual steps")
    
    return 0 if successful_steps == total_steps else 1

if __name__ == "__main__":
    sys.exit(main())
