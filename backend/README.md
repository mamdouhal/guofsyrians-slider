# Guofsyrians Slider Backend

A Hono-based backend API for the Guofsyrians Slider application, deployed on Cloudflare Workers with D1 database.

## 🚀 Features

- **Hono Framework**: Fast, lightweight web framework for Cloudflare Workers
- **Cloudflare D1**: Serverless SQL database powered by SQLite
- **RESTful API**: Clean API endpoints for cities, universities, and links
- **CORS Enabled**: Cross-origin resource sharing configured
- **TypeScript**: Full type safety

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Cloudflare account (for deployment)
- Wrangler CLI

## 🛠️ Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Create D1 Database

```bash
# Create the database
wrangler d1 create guofsyrians-db
```

This will output a database ID. Copy it and update the `database_id` in `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "guofsyrians-db"
database_id = "your-database-id-here"
```

### 3. Run Migrations

Apply the database schema to your D1 database:

**For Production (default):**
```bash
npm run db:migrate
```

**For Local Development:**
```bash
npm run db:migrate:local
```

This will create the tables: `cities`, `universities`, and `links`.

> **Note:** By default, migration commands run against your remote (production) D1 database. Use the `:local` variants for local development and testing.

### 4. Seed the Database

Populate the database with initial data:

**For Production (default):**
```bash
npm run db:seed
```

**For Local Development:**
```bash
npm run db:seed:local
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:8787`

## 📡 API Endpoints

### Health Check
- `GET /` - API health check

### Cities
- `GET /api/cities` - Get all cities
- `GET /api/cities/:id` - Get a specific city

### Universities
- `GET /api/cities/:cityId/universities` - Get universities by city
- `GET /api/universities/:id` - Get a specific university

### Links
- `GET /api/universities/:universityId/links` - Get links by university
- `GET /api/links/:id` - Get a specific link

### Catalog
- `GET /api/catalog` - Get the complete catalog (cities, universities, and links)

## 📦 Response Format

All endpoints return JSON in this format:

```json
{
  "success": true,
  "data": { ... }
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error message"
}
```

## 🚀 Deployment

### Deploy to Cloudflare Workers

```bash
npm run deploy
```

### Environment Variables

Set environment variables in `wrangler.toml` under the `[vars]` section.

## 🔐 Database Management

### View Database Content (Local)

```bash
wrangler d1 execute guofsyrians-db --local --command "SELECT * FROM cities"
```

### View Database Content (Production)

```bash
wrangler d1 execute guofsyrians-db --command "SELECT * FROM cities"
```

### Create New Migration

```bash
# Create a new SQL file in migrations/ directory
# Name it with a timestamp: XXXX_description.sql
# Then run the migration commands
```

## 📝 Database Schema

### Cities Table
```sql
CREATE TABLE cities (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Universities Table
```sql
CREATE TABLE universities (
    id TEXT PRIMARY KEY,
    city_id TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
);
```

### Links Table
```sql
CREATE TABLE links (
    id TEXT PRIMARY KEY,
    university_id TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (university_id) REFERENCES universities(id) ON DELETE CASCADE
);
```

## 🧪 Testing

Test the API locally:

```bash
# Start dev server
npm run dev

# In another terminal, test endpoints
curl http://localhost:8787/
curl http://localhost:8787/api/cities
curl http://localhost:8787/api/catalog
```

## 📚 Resources

- [Hono Documentation](https://hono.dev/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Deploy to a preview environment
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details
