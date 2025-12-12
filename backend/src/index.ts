import { Hono } from 'hono';
import { cors } from 'hono/cors';

// Define the D1 database binding type
type Bindings = {
  DB: D1Database;
  ALLOWED_ORIGINS: string;
};

// Create the Hono app with bindings
const app = new Hono<{ Bindings: Bindings }>();

// CORS middleware
app.use('/*', cors({
  origin: (origin) => origin, // Allow all origins, can be restricted in production
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
}));

// Health check endpoint
app.get('/', (c) => {
  return c.json({ 
    message: 'Guofsyrians Slider API', 
    version: '1.0.0',
    status: 'healthy'
  });
});

// Get all cities (parent categories)
app.get('/api/cities', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT id, name FROM cities ORDER BY name'
    ).all();
    
    return c.json({ success: true, data: results });
  } catch (error) {
    console.error('Error fetching cities:', error);
    return c.json({ success: false, error: 'Failed to fetch cities' }, 500);
  }
});

// Get a specific city by ID
app.get('/api/cities/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const city = await c.env.DB.prepare(
      'SELECT id, name FROM cities WHERE id = ?'
    ).bind(id).first();
    
    if (!city) {
      return c.json({ success: false, error: 'City not found' }, 404);
    }
    
    return c.json({ success: true, data: city });
  } catch (error) {
    console.error('Error fetching city:', error);
    return c.json({ success: false, error: 'Failed to fetch city' }, 500);
  }
});

// Get all universities for a specific city
app.get('/api/cities/:cityId/universities', async (c) => {
  try {
    const cityId = c.req.param('cityId');
    
    const { results } = await c.env.DB.prepare(
      'SELECT id, city_id, name FROM universities WHERE city_id = ? ORDER BY name'
    ).bind(cityId).all();
    
    return c.json({ success: true, data: results });
  } catch (error) {
    console.error('Error fetching universities:', error);
    return c.json({ success: false, error: 'Failed to fetch universities' }, 500);
  }
});

// Get a specific university by ID
app.get('/api/universities/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const university = await c.env.DB.prepare(
      'SELECT id, city_id, name FROM universities WHERE id = ?'
    ).bind(id).first();
    
    if (!university) {
      return c.json({ success: false, error: 'University not found' }, 404);
    }
    
    return c.json({ success: true, data: university });
  } catch (error) {
    console.error('Error fetching university:', error);
    return c.json({ success: false, error: 'Failed to fetch university' }, 500);
  }
});

// Get all links for a specific university
app.get('/api/universities/:universityId/links', async (c) => {
  try {
    const universityId = c.req.param('universityId');
    
    const { results } = await c.env.DB.prepare(
      'SELECT id, university_id, title, description, url, icon FROM links WHERE university_id = ? ORDER BY title'
    ).bind(universityId).all();
    
    return c.json({ success: true, data: results });
  } catch (error) {
    console.error('Error fetching links:', error);
    return c.json({ success: false, error: 'Failed to fetch links' }, 500);
  }
});

// Get full catalog (all cities with their universities and links)
app.get('/api/catalog', async (c) => {
  try {
    // Get all cities
    const { results: cities } = await c.env.DB.prepare(
      'SELECT id, name FROM cities ORDER BY name'
    ).all();
    
    // For each city, get its universities and links
    const catalog = await Promise.all(
      cities.map(async (city: any) => {
        const { results: universities } = await c.env.DB.prepare(
          'SELECT id, city_id, name FROM universities WHERE city_id = ? ORDER BY name'
        ).bind(city.id).all();
        
        // For each university, get its links
        const universitiesWithLinks = await Promise.all(
          universities.map(async (university: any) => {
            const { results: links } = await c.env.DB.prepare(
              'SELECT id, university_id, title, description, url, icon FROM links WHERE university_id = ? ORDER BY title'
            ).bind(university.id).all();
            
            return {
              id: university.id,
              name: university.name,
              links: links
            };
          })
        );
        
        return {
          id: city.id,
          name: city.name,
          children: universitiesWithLinks
        };
      })
    );
    
    return c.json({ success: true, data: catalog });
  } catch (error) {
    console.error('Error fetching catalog:', error);
    return c.json({ success: false, error: 'Failed to fetch catalog' }, 500);
  }
});

// Get a specific link by ID
app.get('/api/links/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const link = await c.env.DB.prepare(
      'SELECT id, university_id, title, description, url, icon FROM links WHERE id = ?'
    ).bind(id).first();
    
    if (!link) {
      return c.json({ success: false, error: 'Link not found' }, 404);
    }
    
    return c.json({ success: true, data: link });
  } catch (error) {
    console.error('Error fetching link:', error);
    return c.json({ success: false, error: 'Failed to fetch link' }, 500);
  }
});

// 404 handler
app.notFound((c) => {
  return c.json({ success: false, error: 'Not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ success: false, error: 'Internal server error' }, 500);
});

export default app;
