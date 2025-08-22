const API_URL = "https://api.themoviedb.org/3";
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
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

const options = {
  headers: {
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
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
export async function getTrendingMovies(): Promise<{ results: Movie[] }> {
  const res = await fetch(
    `${API_URL}/trending/movie/week?language=uk-UA`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }
  return res.json();
}

export async function getMovieDetails(movieId: string): Promise<Movie> {
  const res = await fetch(
    `${API_URL}/movie/${movieId}?language=uk-UA`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return res.json();
}

export async function getMovieVideo(
  movieId: string
): Promise<MovieVideoResponse> {
  const res = await fetch(
    `${API_URL}/movie/${movieId}/videos?language=uk-UA`,
    options
  );
  if (!res.ok) throw new Error("Failed to fetch movie videos");
  return res.json();
}
