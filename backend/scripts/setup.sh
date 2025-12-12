#!/bin/bash

# Guofsyrians Slider Backend Setup Script
# This script helps you set up the backend quickly

set -e

echo "🚀 Guofsyrians Slider Backend Setup"
echo "===================================="
echo ""

# Check if running in backend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the backend directory"
    echo "   cd backend && ./scripts/setup.sh"
    exit 1
fi

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null && ! command -v npx &> /dev/null; then
    echo "❌ Error: Neither wrangler nor npx is installed"
    echo "   Install Node.js and npm first"
    exit 1
fi

echo "📦 Step 1: Installing dependencies..."
npm install

echo ""
echo "🔐 Step 2: Authenticating with Cloudflare..."
echo "   This will open a browser window for authentication"
read -p "   Press Enter to continue..."
wrangler login || npx wrangler login

echo ""
echo "💾 Step 3: Creating D1 Database..."
echo "   Creating 'guofsyrians-db'..."
DB_OUTPUT=$(wrangler d1 create guofsyrians-db 2>&1 || npx wrangler d1 create guofsyrians-db 2>&1)

# Extract database_id from output
DB_ID=$(echo "$DB_OUTPUT" | grep "database_id" | sed -n 's/.*database_id = "\(.*\)"/\1/p')

if [ -z "$DB_ID" ]; then
    echo "⚠️  Database might already exist or creation failed"
    echo "   Check the output above for details"
    echo "   You may need to manually update wrangler.toml with your database_id"
else
    echo "   ✅ Database created with ID: $DB_ID"
    echo "   Updating wrangler.toml..."
    
    # Update wrangler.toml with the database_id
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/database_id = \".*\"/database_id = \"$DB_ID\"/" wrangler.toml
    else
        # Linux
        sed -i "s/database_id = \".*\"/database_id = \"$DB_ID\"/" wrangler.toml
    fi
    echo "   ✅ wrangler.toml updated"
fi

echo ""
echo "🗄️  Step 4: Running database migrations..."
npm run db:migrate

echo ""
echo "🌱 Step 5: Seeding the database..."
npm run db:seed

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Start local development: npm run dev"
echo "  2. Deploy to production: npm run deploy"
echo "  3. View logs: wrangler tail"
echo ""
echo "📚 Read DEPLOYMENT.md for more information"
