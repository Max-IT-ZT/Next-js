"use client";
import { getPopularMovies, Movie } from "@/app/api/tmdb";
import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

export default function RatedList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true); // додали стан завантаження

  useEffect(() => {
    const fetchRatedMovies = async () => {
      setLoading(true); // починаємо завантаження
      const data = await getPopularMovies(page);
      setMovies((prev) => [...prev, ...data.results]);
      setTotalPage(data.total_pages);
      setLoading(false); // завершили завантаження
    };
    fetchRatedMovies();
  }, [page]);

  return (
    <div className="container px-4 py-1 mx-auto relative">
      <h1 className="text-xl sm:text-4xl font-bold text-center text-white m-8">
        Рейтингові фільми
      </h1>
      <div className="flex">
        <MoviesList
          movies={movies}
          loading={loading}
          page={page}
          totalPage={totalPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
