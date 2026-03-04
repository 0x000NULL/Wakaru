#!/bin/bash
# Complete Wakaru DigitalOcean Spaces Setup
# Run this after creating the bucket via web UI

set -e

# Required environment variables:
# - DO_SPACES_ACCESS_KEY: DigitalOcean Spaces access key
# - DO_API_TOKEN: DigitalOcean API token (with Spaces write permissions)

BUCKET_NAME="wakaru-media"
ACCESS_KEY="${DO_SPACES_ACCESS_KEY:-DO801QLKUVEKTXKWCEGY}"
DO_TOKEN="${DO_API_TOKEN}"
SCRIPT_DIR="$HOME/.openclaw/workspace/Wakaru/scripts"

if [ -z "$DO_TOKEN" ]; then
    echo "Error: DO_API_TOKEN environment variable is required"
    echo "Get your token at: https://cloud.digitalocean.com/account/api/tokens"
    echo ""
    echo "Usage:"
    echo "  export DO_API_TOKEN='your-token-here'"
    echo "  $0"
    exit 1
fi

echo "============================================================"
echo "  Wakaru DigitalOcean Spaces Complete Setup"
echo "============================================================"
echo ""

# Step 1: Check if bucket was created
echo "Step 1: Verifying bucket creation..."
echo "Have you created the bucket '$BUCKET_NAME' via the web UI?"
echo "If not, visit: https://cloud.digitalocean.com/spaces"
echo ""
read -p "Bucket created? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Please create the bucket first:"
    echo "1. Go to https://cloud.digitalocean.com/spaces"
    echo "2. Click 'Create Space'"
    echo "3. Region: SFO3"
    echo "4. Name: $BUCKET_NAME"
    echo "5. Enable CDN: Yes"
    echo "6. Access: Public"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Step 2: Grant permissions to access key
echo ""
echo "Step 2: Granting bucket permissions to access key..."

response=$(curl -s -X PATCH "https://api.digitalocean.com/v2/spaces/keys/$ACCESS_KEY" \
  -H "Authorization: Bearer $DO_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"wakaru-media-rw\",\"grants\":[{\"bucket\":\"$BUCKET_NAME\",\"permission\":\"readwrite\"}]}")

if echo "$response" | grep -q "\"access_key\""; then
    echo "✓ Permissions granted successfully!"
else
    echo "⚠️  Could not grant permissions via API:"
    echo "$response"
    echo ""
    echo "You may need to grant permissions manually:"
    echo "1. Go to https://cloud.digitalocean.com/account/api/spaces"
    echo "2. Find key: wakaru-media-rw ($ACCESS_KEY)"
    echo "3. Add permission: readwrite on bucket $BUCKET_NAME"
    echo ""
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Step 3: Run Python configuration script
echo ""
echo "Step 3: Running automated configuration..."
python3 "$SCRIPT_DIR/configure_wakaru_spaces.py"

# Final message
echo ""
echo "============================================================"
echo "  Setup Complete!"
echo "============================================================"
echo ""
echo "Next steps:"
echo "1. Read the documentation:"
echo "   cat ~/.openclaw/workspace/Wakaru/DO_SPACES_SETUP.md"
echo ""
echo "2. Upload your first video:"
echo "   s3cmd put video.mp4 s3://$BUCKET_NAME/videos/shirokuma-cafe/ep01.mp4 --acl-public"
echo ""
echo "3. Access via CDN:"
echo "   https://$BUCKET_NAME.sfo3.cdn.digitaloceanspaces.com/videos/..."
echo ""
