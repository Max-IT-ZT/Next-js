"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/app/api/tmdb";
import { FaStar, FaSadCry } from "react-icons/fa";
import { TbLoaderQuarter } from "react-icons/tb";
import { motion } from "framer-motion";

interface MoviesListProps {
  movies: Movie[];
  loading: boolean;
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
  sectionTitle?: string;
}

export default function MoviesList({
  movies,
  loading,
  page,
  totalPage,
  setPage,
  sectionTitle,
}: MoviesListProps) {
  return (
    <section className="my-8">
      {sectionTitle && (
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 px-4">
          {sectionTitle}
        </h2>
      )}

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide px-4 py-2">
        {loading && movies.length === 0
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[150px] h-[225px] bg-gray-800/40 backdrop-blur-md rounded-lg animate-pulse"
              />
            ))
          : movies.map((movie, index) => (
              <Link
                key={`${movie.id}-${index}`}
                href={`/movies/${movie.id}`}
                className="flex-shrink-0 w-[150px] sm:w-[180px] hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-[225px] sm:h-[270px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : "/img/404img.webp"
                    }
                    priority
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, 600px"
                    alt={movie.title }
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-lg" />
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  <h3 className="text-sm sm:text-base font-bold line-clamp-2 text-white">
                    {movie.title || "Невідомий фільм"}
                  </h3>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300 mt-1">
                    <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                      <FaStar className="text-red-500" />{" "}
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span>{movie.release_date || "Невідома дата"}</span>
                  </div>
                </div>
              </Link>
            ))}

        {/* Кнопка "Завантажити ще" */}
        {movies.length > 0 && (
          <motion.button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPage}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff007c" }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-[150px] sm:w-[180px] h-[225px] flex flex-col justify-center items-center rounded-lg border border-white/20 backdrop-blur-md text-white font-semibold transition-all duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {page >= totalPage ? (
              <>
                <FaSadCry className="w-8 h-8 text-pink-500 mb-2" />
                <span className="text-sm text-center">Більше немає</span>
              </>
            ) : (
              <>
                <TbLoaderQuarter className="w-8 h-8 text-pink-500 mb-2 animate-spin" />
                <span className="text-sm text-center">Завантажити ще</span>
              </>
            )}
          </motion.button>
        )}
      </div>
    </section>
  );
}
