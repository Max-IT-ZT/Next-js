// components/SearchResultsClient.tsx
"use client";

import { Movie } from "@/app/api/tmdb";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SearchResultsClient({ movies }: { movies: Movie[] }) {
  return (
    <div className="flex flex-col gap-6 mt-6">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col sm:flex-row gap-4 p-4 border border-white/20 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full sm:w-[180px] h-[500px] sm:h-[250px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : "/img/404img.webp"
                }
                alt={movie.title}
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, 600px"
                className="object-cover rounded-lg"
              />

              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/70 to-transparent rounded-t-lg" />
            </div>

            <div className="flex flex-col justify-between mt-4 sm:mt-0">
              <h3 className="text-lg sm:text-xl font-bold line-clamp-2">
                {movie.title}
              </h3>
              {movie.overview && (
                <p className="text-gray-300 text-sm sm:text-base line-clamp-4 mt-2">
                  {movie.overview}
                </p>
              )}
              <div className="flex items-center justify-between mt-4">
                <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                  <FaStar className="text-red-500" />{" "}
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-300 text-sm">
                  {movie.release_date || "Н/Д"}
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
