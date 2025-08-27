import { NextResponse } from "next/server";
import { Movie } from "../tmdb";

const API_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.TMDB_TOKEN; // або твій токен, якщо локально

const options = {
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
  next: { revalidate: 3600 },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  const fetchMovies = async (lang: string) => {
    const res = await fetch(
      `${API_URL}/search/movie?include_adult=false&language=${lang}&page=1&query=${encodeURIComponent(
        query
      )}`,
      options
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  };

  // 1. Українські результати
  let uaResults = await fetchMovies("uk-UA");
  // 2. Фільтруємо по початку слова
  uaResults = uaResults.filter((movie: Movie) =>
    movie.title.toLowerCase().startsWith(query.toLowerCase())
  );

  // 3. Англійські результати для доповнення
  let enResults = await fetchMovies("en-US");
  enResults = enResults.filter(
    (movie: Movie) =>
      movie.title.toLowerCase().startsWith(query.toLowerCase()) &&
      !uaResults.find((m: Movie) => m.id === movie.id)
  );

  const combinedResults = [...uaResults, ...enResults].slice(0, 5); // максимум 5 варіантів

  return NextResponse.json({ results: combinedResults });
}
