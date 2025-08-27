const API_URL = "https://api.themoviedb.org/3";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  vote_average: number;
  backdrop_path?: string;
};
type Video = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};
export type MovieVideoResponse = {
  id: number;
  results: Video[];
};
type MoviesResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};

// const TMDB_TOKEN = process.env.TMDB_TOKEN;

const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBmOGM0MGQyYjNiMDE2MDRiMGU1NmRhYmFmYzMyNCIsIm5iZiI6MTcyMDY0MzQwNi40MjUsInN1YiI6IjY2OGVlZjRlMzk1MjJkMTg3MzAzMzZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CgsJ_XjzoM1e1ZhBo5Hef8lXf8qQfhj6P5uCgmLL2Rw`,
  },
  next: { revalidate: 3600 },
};
export async function searchMovies(
  query: string
): Promise<{ results: Movie[] }> {
  const res = await fetch(
    `${API_URL}/search/movie?include_adult=false&language=uk-UA&page=1&query=${query}`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }
  return res.json();
}
export async function getTrendingMovies(
  page: number = 1
): Promise<MoviesResponse> {
  const res = await fetch(
    `${API_URL}/trending/movie/week?language=uk-UA&page=${page}`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }
  return res.json();
}
export async function getPopularMovies(
  page: number = 1
): Promise<MoviesResponse> {
  const res = await fetch(
    `${API_URL}/movie/top_rated?language=uk-UA&page=${page}`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return res.json();
}

export async function getNowCinemaMovies(
  page: number = 1
): Promise<MoviesResponse> {
  const res = await fetch(
    `${API_URL}/movie/now_playing?language=uk-UA&page=${page}`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return res.json();
}

export async function getMovieDetails(movieId: string): Promise<Movie> {
  let res = await fetch(`${API_URL}/movie/${movieId}?language=uk-UA`, options);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  let data: Movie = await res.json();

  if (!data.overview || data.overview.trim() === "") {
    res = await fetch(`${API_URL}/movie/${movieId}?language=en-US`, options);
    if (!res.ok)
      throw new Error("Failed to fetch movie details in fallback language");
    data = await res.json();
  }

  return data;
}

export async function getMovieVideo(
  movieId: string
): Promise<MovieVideoResponse> {
  let res = await fetch(
    `${API_URL}/movie/${movieId}/videos?language=uk-UA`,
    options
  );
  if (!res.ok) throw new Error("Failed to fetch movie videos");
  let data: MovieVideoResponse = await res.json();

  if (!data.results || data.results.length === 0) {
    res = await fetch(
      `${API_URL}/movie/${movieId}/videos?language=en-US`,
      options
    );
    if (!res.ok)
      throw new Error("Failed to fetch movie videos in fallback language");
    data = await res.json();
  }

  return data;
}
