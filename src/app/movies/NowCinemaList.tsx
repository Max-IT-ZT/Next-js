"use client";
import { getNowCinemaMovies, Movie } from "@/app/api/tmdb";
import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

export default function NowCinemaList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(200);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatedMovies = async () => {
      setLoading(true);
      const data = await getNowCinemaMovies(page);
      console.log("dataNowCinema: ", data);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setTotalPage(data.total_pages);
      setLoading(false);
    };
    fetchRatedMovies();
  }, [page]);

  return (
    <div className=" max-w-[100%] px-4 py-1 mx-auto relative">
      <h1 className="text-xl sm:text-4xl font-bold text-center text-white m-8">
        Зараз в кінотеатрах
      </h1>
      <MoviesList
        movies={movies}
        loading={loading}
        page={page}
        totalPage={totalPage}
        setPage={setPage}
      />
    </div>
  );
}
