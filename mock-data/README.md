# Planets & Star Systems Mock API

This mock API provides data for 50 planets and 20 star systems using json-server.

## Installation & Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start the mock API server:
```bash
pnpm run mock-api
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Planets
- `GET /planets` - Get all planets
- `GET /planets/:id` - Get a specific planet
- `POST /planets` - Create a new planet
- `PUT /planets/:id` - Update a planet
- `DELETE /planets/:id` - Delete a planet

### Star Systems
- `GET /starSystems` - Get all star systems
- `GET /starSystems/:id` - Get a specific star system
- `POST /starSystems` - Create a new star system
- `PUT /starSystems/:id` - Update a star system
- `DELETE /starSystems/:id` - Delete a star system

## Query Parameters

### Filtering
```
GET /planets?officialName=Earth
GET /planets?distance_like=light-years
GET /starSystems?aka_like=Dog
```

### Sorting
```
GET /planets?_sort=officialName
GET /planets?_sort=id&_order=desc
```

### Pagination
```
GET /planets?_page=1&_per_page=10
GET /planets?_start=0&_limit=5
```

### Search
```
GET /planets?q=habitable
GET /starSystems?q=binary
```

### Relationships
```
GET /planets?_embed=starSystems
```

## Example Usage in Your Code

```typescript
// Fetch all planets
const planets = await fetch('http://localhost:3001/planets').then(res => res.json());

// Fetch a specific planet
const earth = await fetch('http://localhost:3001/planets/3').then(res => res.json());

// Search for habitable planets
const habitablePlanets = await fetch('http://localhost:3001/planets?q=habitable').then(res => res.json());

// Get planets with pagination
const planetsPage1 = await fetch('http://localhost:3001/planets?_page=1&_per_page=10').then(res => res.json());
```

## Data Structure

### Planet Object
```typescript
type Planet = {
  id: number;
  officialName: string;
  aka: string[];
  distance: string;
  description: string;
}
```

### Star System Object
```typescript
type StarSystem = {
  id: number;
  officialName: string;
  aka: string[];
  distance: string;
  description: string;
}
```

## Featured Planets

- **Solar System Planets**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
- **Exoplanets**: Proxima Centauri b, Kepler-452b, TRAPPIST-1e, and many more
- **Unique Worlds**: Diamond Planet (55 Cancri e), Iron Rain Planet (WASP-76b), Dark Planet (TrES-2b)

## Featured Star Systems

- **Nearby Systems**: Alpha Centauri, Sirius, Vega, Arcturus
- **Exoplanet Hosts**: TRAPPIST-1, Kepler-452, Gliese 581
- **Famous Stars**: Betelgeuse, Rigel, Procyon, Altair 