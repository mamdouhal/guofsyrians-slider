/**
 * API Client for Guofsyrians Slider Backend
 * 
 * This module provides a simple client to interact with the backend API.
 * You can use this to fetch data from the Cloudflare Workers backend instead
 * of using the static catalog.ts file.
 * 
 * Usage:
 * 1. Set the API_URL to your deployed backend URL
 * 2. Import the functions you need
 * 3. Replace static data imports with API calls
 */

const API_URL = process.env.VITE_API_URL || 'http://localhost:8787';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface City {
  id: string;
  name: string;
}

interface University {
  id: string;
  city_id: string;
  name: string;
}

interface Link {
  id: string;
  university_id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
}

interface CatalogItem {
  id: string;
  name: string;
  children: {
    id: string;
    name: string;
    links: Link[];
  }[];
}

/**
 * Fetch all cities
 */
export async function fetchCities(): Promise<City[]> {
  try {
    const response = await fetch(`${API_URL}/api/cities`);
    const data: ApiResponse<City[]> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch cities');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
}

/**
 * Fetch a specific city by ID
 */
export async function fetchCity(id: string): Promise<City> {
  try {
    const response = await fetch(`${API_URL}/api/cities/${id}`);
    const data: ApiResponse<City> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch city');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching city:', error);
    throw error;
  }
}

/**
 * Fetch universities for a specific city
 */
export async function fetchUniversitiesByCity(cityId: string): Promise<University[]> {
  try {
    const response = await fetch(`${API_URL}/api/cities/${cityId}/universities`);
    const data: ApiResponse<University[]> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch universities');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching universities:', error);
    throw error;
  }
}

/**
 * Fetch a specific university by ID
 */
export async function fetchUniversity(id: string): Promise<University> {
  try {
    const response = await fetch(`${API_URL}/api/universities/${id}`);
    const data: ApiResponse<University> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch university');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching university:', error);
    throw error;
  }
}

/**
 * Fetch links for a specific university
 */
export async function fetchLinksByUniversity(universityId: string): Promise<Link[]> {
  try {
    const response = await fetch(`${API_URL}/api/universities/${universityId}/links`);
    const data: ApiResponse<Link[]> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch links');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching links:', error);
    throw error;
  }
}

/**
 * Fetch the complete catalog (all cities with universities and links)
 */
export async function fetchCatalog(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(`${API_URL}/api/catalog`);
    const data: ApiResponse<CatalogItem[]> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch catalog');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching catalog:', error);
    throw error;
  }
}

/**
 * Fetch a specific link by ID
 */
export async function fetchLink(id: string): Promise<Link> {
  try {
    const response = await fetch(`${API_URL}/api/links/${id}`);
    const data: ApiResponse<Link> = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch link');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching link:', error);
    throw error;
  }
}

/**
 * Example: How to use in a React component
 * 
 * import { fetchCatalog } from './api/client';
 * 
 * function MyComponent() {
 *   const [catalog, setCatalog] = useState([]);
 *   
 *   useEffect(() => {
 *     fetchCatalog()
 *       .then(data => setCatalog(data))
 *       .catch(error => console.error(error));
 *   }, []);
 *   
 *   return <div>{catalog.map(...)}</div>;
 * }
 */
