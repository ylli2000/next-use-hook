export type Planet = {
  id: number;
  officialName: string;
  aka: string[];
  distance: string;
  description: string;
}

export type StarSystem = {
  id: number;
  officialName: string;
  aka: string[];
  distance: string;
  description: string;
}

export type ApiError = {
  error: true;
  message: string;
  code?: string;
  status?: number;
}

export type ApiSuccess<T> = {
  data: T;
}

export type ApiResult<T> = ApiSuccess<T> | ApiError;

export type PlanetsResponse = ApiResult<Planet[]>;
export type PlanetResponse = ApiResult<Planet>;
export type StarSystemsResponse = ApiResult<StarSystem[]>;
export type StarSystemResponse = ApiResult<StarSystem>;

