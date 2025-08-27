import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "@/app/api/tmdb";
import { FaSadCry, FaStar } from "react-icons/fa";
import { TbLoaderQuarter } from "react-icons/tb";

interface MoviesListProps {
  movies: Movie[];
  loading: boolean;
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
}

export default function MoviesList({
  movies,
  loading,
  page,
  totalPage,
  setPage,
}: MoviesListProps) {
  return (
    <ul className="flex gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide mb-2 py-4 px-2">
      {loading && movies.length === 0
        ? Array.from({ length: 20 }).map((_, i) => (
            <li
              key={i}
              className="flex-shrink-0 p-3 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg animate-pulse"
            >
              <div className="w-[100px] h-[150px] sm:w-[150px] sm:h-[225px] bg-gray-700 rounded-lg" />
              <div className="flex justify-between mt-4 text-sm">
                <div className="h-4 w-10 bg-gray-600 rounded"></div>
                <div className="h-4 w-8 bg-gray-600 rounded"></div>
              </div>
            </li>
          ))
        : movies.map((movie, index) => (
            <li
              key={`${movie.id}-${index}`}
              className="flex-shrink-0 p-3 border flex justify-between border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/movies/${movie.id}`}>
                <div className="w-[100px] h-[150px] sm:w-[150px] sm:h-[225px] relative flex flex-col  hover:scale-105 transition-transform duration-300">
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : "/img/404img.webp"
                    }
                    alt={movie.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 150px"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1 justify-between mt-2 text-sm">
                  <p className="text-start font-bold max-w-[100px] sm:max-w[200px] text-ellipsis overflow-hidden line-clamp-1">
                    {movie.title || "Невідомий фільм"}
                  </p>
                  <div className="flex flex-col sm:flex-row text-start items-start gap-1 justify-between mt-4 text-sm">
                    <p className="flex items-center justify-center gap-1 font-bold">
                      <FaStar className="text-red-500" />
                      {movie.vote_average.toFixed(1) || "0.0"}
                    </p>
                    <p>{movie.release_date || "Невідома дата"}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      <div className="flex justify-center">
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPage}
          className="px-2 sm:px-8 py-1 flex flex-col justify-center gap-6 items-center rounded-lg border border-white/20 backdrop-blur-md text-white font-semibold  transition duration-200 shadow  cursor-pointer disabled:cursor-not-allowed"
        >
          {page >= totalPage ? (
            <FaSadCry
              className={`w-8 h-8 text-pink-500 transition-transform duration-300`}
            />
          ) : (
            <TbLoaderQuarter
              className={`w-8 h-8 text-pink-500 transition-transform duration-300 animate-spin`}
            />
          )}
          <p className="text-sm sm:text-base w-[100px] flex justify-center">
            {page >= totalPage ? "Вибач але більше немає" : "Завантажити ще"}
          </p>
        </button>
      </div>
    </ul>
  );
}
