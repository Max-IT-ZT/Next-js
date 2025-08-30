// pages/searchMovies.tsx
import { getTrendingMovies, searchMovies, Movie } from "@/app/api/tmdb";
import InputMovie from "./InputMovie";
import SearchResultsClient from "@/components/SearchResultsClient";
import { SiThemoviedatabase } from "react-icons/si";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const data: { results: Movie[] } = query
    ? await searchMovies(query)
    : await getTrendingMovies();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-8 py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 mb-6">
        Пошук фільмів
      </h1>

      <InputMovie initialQuery={query ?? ""} />

      {data.results.length > 0 ? (
        <SearchResultsClient movies={data.results} />
      ) : (
        query && (
          <div className="flex flex-col items-center justify-center gap-2 mt-12 border border-white/20 backdrop-blur-md shadow-lg rounded-xl p-6 w-full max-w-[400px] mx-auto">
            <SiThemoviedatabase className="w-10 h-10 text-red-500 animate-bounce" />
            <p className="text-center text-white text-lg">
              Нічого не знайдено 🥲
            </p>
          </div>
        )
      )}
    </div>
  );
}
