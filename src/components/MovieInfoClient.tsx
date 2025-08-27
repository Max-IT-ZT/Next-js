"use client";

import Image from "next/image";
import ModalPlayer from "./TrailerButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { Movie } from "@/app/api/tmdb";

type Props = {
  movie: Movie;
  videoKey: string | null;
};

export default function MovieInfoClient({ movie, videoKey }: Props) {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg rounded-lg overflow-hidden p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-[300px] h-[400px] lg:w-[350px] lg:h-[500px] relative flex-shrink-0 rounded-lg overflow-hidden shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, 600px"
            className="object-cover"
          />
        ) : (
          <Link href={`/movies`}>
            <Image
              src="/img/404imgPx.webp"
              alt={movie.title}
              fill
              sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, 600px"
              className="object-cover"
            />
          </Link>
        )}
      </motion.div>

      {/* Інформація */}
      <motion.div
        className="flex flex-col justify-center gap-4 text-center md:text-left max-w-xl p-4 bg-black/30 backdrop-blur-md rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          {movie.title}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-gray-200 line-clamp-6">
          {movie.overview || "Нажаль ми не змогли знайти опис"}
        </p>
        <p className="text-sm sm:text-base">
          Дата релізу:{" "}
          <span className="font-bold text-red-500">
            {movie.release_date || "Невідома дата"}
          </span>
        </p>
        <p className="text-sm sm:text-base">
          Рейтинг:{" "}
          <span className="text-yellow-400 font-bold">
            {movie.vote_average.toFixed(1) || "Невідомий рейтинг"}
          </span>
        </p>
        <ModalPlayer videoKey={videoKey} />
      </motion.div>
    </motion.div>
  );
}
