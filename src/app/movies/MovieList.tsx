"use client";
import { getTrendingMovies, Movie } from "@/app/api/tmdb";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TfiReload } from "react-icons/tfi";
import { TbLoaderQuarter } from "react-icons/tb";

export default function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies(page);
      setMovies((prev) => {
        const merged = [...prev, ...data.results];
        const uniqueMovies = Array.from(
          new Map(merged.map((m) => [m.id, m])).values()
        );
        return uniqueMovies;
      });

      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [page]);

  return (
    <div className="container px-4 py-8 mx-auto relative">
      <h1 className="text-4xl font-bold text-center mask-linear-from-2.5 text-white m-8">
        Популярні фільми
      </h1>

      <ul className="flex gap-4 overflow-x-scroll scrollbar-hide mb-8 py-4 px-2">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <li className="flex-shrink-0 p-3 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="w-[100px] h-[150px] sm:w-[150px] sm:h-[225px] relative flex flex-col hover:scale-105 transition-transform duration-300 overflow-x-scroll scrollbar-hide">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 150px"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex text-center flex-col gap-1 justify-between mt-2 text-sm">
                <p className="flex items-center justify-center gap-1 font-bold">
                  <FaStar className="text-red-500" />
                  {movie.vote_average.toFixed(1)}
                </p>
                <p>{movie.release_date}</p>
              </div>
            </li>
          </Link>
        ))}
        {page < (totalPages ?? 1) && (
          <div className="flex justify-center">
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= (totalPages ?? 1)}
              className="px-6 py-2 rounded-lg border border-white/20 backdrop-blur-md text-white font-semibold  transition duration-200 shadow disabled:opacity-50"
            >
              <div className="flex flex-col items-center gap-6">
                <TbLoaderQuarter className="animate-spin w-[50px] h-[50px]" />
                <p>Завантажити ще</p>
              </div>
            </button>
          </div>
        )}
      </ul>
    </div>
  );
}
