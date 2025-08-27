"use client";
import { getPopularMovies, Movie } from "@/app/api/tmdb";
import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

export default function RatedList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatedMovies = async () => {
      setLoading(true);
      const data = await getPopularMovies(page);
      console.log("dataPopular: ", data);
      setMovies((prev) => [...prev, ...data.results]);
      setTotalPage(data.total_pages);
      setLoading(false);
    };
    fetchRatedMovies();
  }, [page]);

  return (
    <div className="max-w-[100%] px-4 py-1 mx-auto relative">
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
