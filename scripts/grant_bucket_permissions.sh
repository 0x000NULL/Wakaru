#!/bin/bash
# Grant readwrite permissions to wakaru-media bucket for the access key

# Required environment variables:
# - DO_SPACES_ACCESS_KEY: DigitalOcean Spaces access key
# - DO_API_TOKEN: DigitalOcean API token (with Spaces write permissions)

ACCESS_KEY="${DO_SPACES_ACCESS_KEY:-DO801QLKUVEKTXKWCEGY}"
DO_TOKEN="${DO_API_TOKEN}"

if [ -z "$DO_TOKEN" ]; then
    echo "Error: DO_API_TOKEN environment variable is required"
    echo "Get your token at: https://cloud.digitalocean.com/account/api/tokens"
    exit 1
fi

echo "Granting readwrite permissions to wakaru-media bucket..."

response=$(curl -s -X PATCH "https://api.digitalocean.com/v2/spaces/keys/$ACCESS_KEY" \
  -H "Authorization: Bearer $DO_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"wakaru-media-rw\",\"grants\":[{\"bucket\":\"wakaru-media\",\"permission\":\"readwrite\"}]}")

if echo "$response" | grep -q "\"access_key\""; then
    echo "✓ Permissions granted successfully!"
    echo "Run the configuration script now:"
    echo "  python3 ~/.openclaw/workspace/Wakaru/scripts/configure_wakaru_spaces.py"
else
    echo "✗ Error granting permissions:"
    echo "$response"
    echo ""
    echo "This is normal if the bucket doesn't exist yet."
    echo "Create the bucket first, then run this script again."
fi
