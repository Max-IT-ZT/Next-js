// app/movies/page.tsx
import { getTrendingMovies } from "../api/tmdb";
import MoviesList from "./MovieList";

export const metadata = {
  title: "MaxDev",
  description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
  openGraph: {
    title: "MaxDev - Сторінка з фільмами",
    description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
    images: ["/img/films.webp"],
  },
};

export default async function MoviesPage(props: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page ?? 1);

  const promises = Array.from({ length: page }, (_, i) =>
    getTrendingMovies(i + 1)
  );
  const results = await Promise.all(promises);

  const mergedResults = results.flatMap((r) => r.results);
  const totalPages = results[0].total_pages;

  return (
    <MoviesList
      data={{ results: mergedResults, total_pages: totalPages }}
      page={page}
    />
  );
}
