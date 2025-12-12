# Quick Start: Cloudflare Setup

This guide helps you set up your Cloudflare account and deploy the backend in under 10 minutes.

## Step 1: Create Cloudflare Account (2 minutes)

1. Go to [cloudflare.com](https://www.cloudflare.com/)
2. Click "Sign up" (top right)
3. Enter your email and create a password
4. Verify your email

## Step 2: Get API Token (3 minutes)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on your profile (top right) → "My Profile"
3. Go to "API Tokens" tab (left sidebar)
4. Click "Create Token"
5. Use "Edit Cloudflare Workers" template
6. Or create custom token with these permissions:
   - **Account** → **D1** → **Edit**
   - **Account** → **Workers Scripts** → **Edit**
7. Click "Continue to summary"
8. Click "Create Token"
9. **IMPORTANT**: Copy the token now (you won't see it again!)

## Step 3: Get Account ID (1 minute)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on "Workers & Pages" (left sidebar)
3. Your **Account ID** is shown on the right side
4. Copy it

## Step 4: Add Secrets to GitHub (2 minutes)

1. Go to your GitHub repository
2. Click "Settings" tab
3. Go to "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add first secret:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: (paste your API token)
   - Click "Add secret"
6. Add second secret:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: (paste your account ID)
   - Click "Add secret"

## Step 5: Deploy Backend (2 minutes)

### Option A: Automatic Deployment (Recommended)

1. Push your code to the `main` branch:
   ```bash
   git checkout main
   git merge copilot/create-backend-with-hono
   git push origin main
   ```

2. GitHub Actions will automatically:
   - Create the D1 database
   - Run migrations
   - Deploy to Cloudflare Workers

3. Check deployment status:
   - Go to your GitHub repository
   - Click "Actions" tab
   - You should see "Deploy Backend to Cloudflare Workers" running

### Option B: Manual Deployment

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Login to Cloudflare:
   ```bash
   npx wrangler login
   ```

3. Run the setup script:
   ```bash
   npm run setup
   ```

4. Or manually:
   ```bash
   npx wrangler d1 create guofsyrians-db
   # Copy the database_id and update wrangler.toml
   npm run db:migrate
   npm run db:seed
   npm run deploy
   ```

## Step 6: Test Your API (1 minute)

After deployment, you'll get a URL like:
```
https://guofsyrians-slider-backend.your-subdomain.workers.dev
```

Test it:

```bash
# Health check
curl https://guofsyrians-slider-backend.your-subdomain.workers.dev/

# Get cities
curl https://guofsyrians-slider-backend.your-subdomain.workers.dev/api/cities

# Get full catalog
curl https://guofsyrians-slider-backend.your-subdomain.workers.dev/api/catalog
```

Or open in browser:
```
https://guofsyrians-slider-backend.your-subdomain.workers.dev/api/catalog
```

## Troubleshooting

### Error: "Authentication required"
- Make sure you've run `wrangler login`
- Or check your API token is correct

### Error: "Database not found"
- Update `database_id` in `wrangler.toml`
- Get it from: `npx wrangler d1 list`

### Error: "Deployment failed"
- Check GitHub Actions logs
- Verify secrets are set correctly
- Make sure you have enough Cloudflare quota

### GitHub Actions not running
- Check workflow file exists: `.github/workflows/deploy-backend.yml`
- Verify secrets are set in repository settings
- Make sure the workflow is enabled

## View Logs

### Real-time logs:
```bash
npx wrangler tail
```

### Cloudflare Dashboard:
1. Go to [Workers & Pages](https://dash.cloudflare.com/)
2. Click on your worker
3. Go to "Logs" tab

## Custom Domain (Optional)

To use your own domain:

1. Add domain to Cloudflare (if not already added)
2. Go to Workers & Pages → Your Worker
3. Click "Triggers" tab
4. Click "Add Custom Domain"
5. Enter: `api.yourdomain.com`
6. Follow DNS instructions

## Cost

### Free Tier Includes:
- 100,000 requests/day
- 5GB D1 storage
- 5 million D1 reads/day
- 100,000 D1 writes/day

Perfect for small to medium projects!

### Paid Plans Start At:
- Workers: $5/month for 10M requests
- D1: Pay-as-you-go beyond free tier

## Next Steps

1. ✅ Backend is deployed
2. Update your frontend to use the API (see `backend/examples/api-client.ts`)
3. Configure CORS for your frontend domain in `wrangler.toml`
4. Monitor usage in Cloudflare Dashboard
5. Set up custom domain (optional)

## Support

- [Cloudflare Discord](https://discord.gg/cloudflaredev)
- [Cloudflare Community](https://community.cloudflare.com/)
- [GitHub Issues](https://github.com/mamdouhal/guofsyrians-slider/issues)

---

**Congratulations! Your backend is now live on Cloudflare's global network! 🎉**
