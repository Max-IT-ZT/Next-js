const API_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
  next: { revalidate: 3600 },
};
export async function getTrendingMovies() {
  const res = await fetch(
    `${API_URL}/trending/movie/week?language=uk-UA`,
    options
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
}
export async function getMovieDetails(movieId: number) {
  const res = await fetch(
    `${API_URL}/movie/${movieId}?language=uk-UA`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
}
