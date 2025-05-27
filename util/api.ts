import { ApiError, PlanetResponse, PlanetsResponse, StarSystemResponse, StarSystemsResponse } from '../types/api';

// API utility functions
export const API_BASE_URL = 'http://localhost:3001';

export const apiEndpoints = {
  planets: `${API_BASE_URL}/planets`,
  starSystems: `${API_BASE_URL}/starSystems`,
} as const;


// Helper functions for API calls
export const fetchPlanets = async (): Promise<PlanetsResponse> => {
  try {
    const response = await simFetch(`${apiEndpoints.planets}?_limit=50`);
    if (!response.ok) {
      return createError(`Failed to fetch planets: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return {data};
  } catch (error) {
    return createFetchError(error, 'while fetching planets');
  }
};

export const fetchPlanet = async (id: number): Promise<PlanetResponse> => {
  try {
    const response = await simFetch(`${apiEndpoints.planets}/${id}`);
    if (!response.ok) {
      return createError(`Failed to fetch planet ${id}: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return {data};
  } catch (error) {
    return createFetchError(error, `while fetching planet ${id}`);
  }
};

export const fetchStarSystems = async (): Promise<StarSystemsResponse> => {
  try {
    const response = await simFetch(`${apiEndpoints.starSystems}?_limit=50`);
    if (!response.ok) {
      return createError(`Failed to fetch star systems: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return {data};
  } catch (error) {
    return createFetchError(error, 'while fetching star systems');
  }
};

export const fetchStarSystem = async (id: number): Promise<StarSystemResponse> => {
  try {
    const response = await simFetch(`${apiEndpoints.starSystems}/${id}`);
    if (!response.ok) {
      return createError(`Failed to fetch star system ${id}: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return {data};
  } catch (error) {
    return createFetchError(error, `while fetching star system ${id}`);
  }
};

export const searchPlanets = async (query: string): Promise<PlanetsResponse> => {
  try {
    const response = await simFetch(`${apiEndpoints.planets}?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      return createError(`Failed to search planets: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return {data};
  } catch (error) {
    return createSearchError(error, query, 'planets');
  }
};

export const searchStarSystems = async (query: string): Promise<StarSystemsResponse> => {
  try {
    const response = await simFetch(`${apiEndpoints.starSystems}?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      return createError(`Failed to search star systems: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return {data};
  } catch (error) {
    return createSearchError(error, query, 'star systems');
  }
}; 



// Helper function to simulate delay
const simFetch = async (url: string): Promise<Response> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fetch(url));
    }, 2000);
  });
};

// Helper functions for creating error responses
const createError = (message: string, status?: number, code?: string): ApiError => ({
  error: true,
  message,
  ...(status && { status }),
  ...(code && { code })
});

const createFetchError = (error: unknown, context: string): ApiError => {
  console.error(`Error ${context}:`, error);
  return createError(
    error instanceof Error ? error.message : `Unknown error occurred ${context}`,
    undefined,
    'FETCH_ERROR'
  );
};

const createSearchError = (error: unknown, query: string, type: string): ApiError => {
  console.error(`Error searching ${type} with query "${query}":`, error);
  return createError(
    error instanceof Error ? error.message : `Unknown error occurred while searching ${type} with query "${query}"`,
    undefined,
    'SEARCH_ERROR'
  );
};