# Cloudflare Deployment Setup Guide

This guide will walk you through setting up and deploying the Guofsyrians Slider backend to Cloudflare Workers with D1 database.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Node.js**: Version 18 or higher
3. **npm**: Installed with Node.js
4. **Git**: For version control

## Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
```

Or use it via npx without global installation:

```bash
npx wrangler --version
```

## Step 2: Authenticate with Cloudflare

```bash
wrangler login
```

This will open a browser window to authenticate your Cloudflare account.

## Step 3: Create D1 Database

Navigate to the backend directory:

```bash
cd backend
```

Create the D1 database:

```bash
wrangler d1 create guofsyrians-db
```

You'll receive output like this:

```
✅ Successfully created DB 'guofsyrians-db'

[[d1_databases]]
binding = "DB"
database_name = "guofsyrians-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

## Step 4: Update wrangler.toml

Copy the `database_id` from the output above and update `backend/wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "guofsyrians-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  # Paste your ID here
```

## Step 5: Run Database Migrations

Apply the database schema to your D1 database:

```bash
npm run db:migrate
```

This will create the tables: `cities`, `universities`, and `links`.

## Step 6: Seed the Database

Populate the database with initial data:

```bash
npm run db:seed
```

## Step 7: Test Locally

Start the local development server:

```bash
npm run dev
```

The API will be available at `http://localhost:8787`

Test the endpoints:

```bash
# Health check
curl http://localhost:8787/

# Get all cities
curl http://localhost:8787/api/cities

# Get full catalog
curl http://localhost:8787/api/catalog
```

## Step 8: Deploy to Production

Deploy your backend to Cloudflare Workers:

```bash
npm run deploy
```

You'll receive a URL like: `https://guofsyrians-slider-backend.your-subdomain.workers.dev`

## Step 9: Configure GitHub Actions (CI/CD)

### Get Cloudflare Credentials

1. **API Token**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use "Edit Cloudflare Workers" template
   - Or create a custom token with these permissions:
     - Account → D1 → Edit
     - Account → Workers Scripts → Edit
   - Copy the token

2. **Account ID**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select your account
   - Copy the "Account ID" from the right sidebar

### Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:
   - `CLOUDFLARE_API_TOKEN`: Paste your API token
   - `CLOUDFLARE_ACCOUNT_ID`: Paste your account ID

### Automatic Deployment

Now, whenever you push changes to the `main` branch that affect the `backend/` directory, GitHub Actions will automatically:
1. Install dependencies
2. Run database migrations
3. Deploy to Cloudflare Workers

## Step 10: Verify Deployment

After deployment, test your production API:

```bash
# Replace with your actual Workers URL
export API_URL="https://guofsyrians-slider-backend.your-subdomain.workers.dev"

# Health check
curl $API_URL/

# Get all cities
curl $API_URL/api/cities

# Get full catalog
curl $API_URL/api/catalog
```

## Database Management

### View Database Content

```bash
# List all cities
wrangler d1 execute guofsyrians-db --command "SELECT * FROM cities"

# List all universities
wrangler d1 execute guofsyrians-db --command "SELECT * FROM universities"

# List all links
wrangler d1 execute guofsyrians-db --command "SELECT * FROM links LIMIT 10"

# Count records
wrangler d1 execute guofsyrians-db --command "SELECT 
  (SELECT COUNT(*) FROM cities) as cities,
  (SELECT COUNT(*) FROM universities) as universities,
  (SELECT COUNT(*) FROM links) as links"
```

### Update Data

To add or modify data:

1. Edit `backend/migrations/seed.sql`
2. Run: `npm run db:seed`
3. Or execute custom SQL:

```bash
wrangler d1 execute guofsyrians-db --command "INSERT INTO cities (id, name) VALUES ('new-city', 'New City Name')"
```

## Troubleshooting

### Issue: "Database not found"

Make sure you've updated the `database_id` in `wrangler.toml` after creating the database.

### Issue: "Authentication error"

Run `wrangler login` again to re-authenticate.

### Issue: "Migration failed"

Check that your SQL syntax is correct in the migration files. You can test locally:

```bash
npm run db:migrate:local
```

### Issue: "API returns 500 errors"

Check the Cloudflare Workers logs:

```bash
wrangler tail
```

Or view logs in the Cloudflare Dashboard:
- Go to Workers & Pages
- Select your worker
- Click on "Logs" tab

## Monitoring and Logs

### Real-time Logs

```bash
wrangler tail
```

### Cloudflare Dashboard

- Monitor requests, errors, and performance metrics
- View detailed logs and traces
- Set up alerts for errors

## Custom Domain (Optional)

To use a custom domain:

1. Go to Cloudflare Dashboard → Workers & Pages
2. Select your worker
3. Go to "Triggers" tab
4. Click "Add Custom Domain"
5. Enter your domain (e.g., `api.yourdomain.com`)
6. Follow the DNS configuration instructions

## Scaling and Performance

- **Automatic Scaling**: Cloudflare Workers scale automatically
- **Global Distribution**: Your API runs on Cloudflare's edge network
- **D1 Limits**: 
  - Free plan: 5GB storage, 5 million reads/day
  - Paid plan: 50GB storage, unlimited reads

## Security Best Practices

1. **API Token Security**: Never commit tokens to Git
2. **CORS Configuration**: Update `ALLOWED_ORIGINS` in `wrangler.toml` for production
3. **Rate Limiting**: Consider adding rate limiting for production use
4. **Input Validation**: Validate all user inputs (if you add POST/PUT endpoints)

## Next Steps

1. Update frontend to use the backend API (optional)
2. Add authentication if needed
3. Implement caching strategies
4. Add more API endpoints as needed
5. Set up monitoring and alerts

## Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1/)
- [Hono Documentation](https://hono.dev/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
