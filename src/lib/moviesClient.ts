import type { Movie, MoviesResponse } from "@/app/api/tmdb";

export type MovieSource = "trending" | "rated" | "nowPlaying";

export async function fetchMovies(
  source: MovieSource,
  page: number,
  signal?: AbortSignal,
): Promise<MoviesResponse> {
  const response = await fetch(`/api/movies?source=${source}&page=${page}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json() as Promise<MoviesResponse>;
}

export type { Movie };
