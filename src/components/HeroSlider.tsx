"use client";
import { Movie } from "@/app/api/tmdb";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSlider({ movies }: { movies: Movie[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 5000); // авто переключення кожні 5 сек
    return () => clearInterval(interval);
  }, [movies.length]);

  const movie = movies[index];

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-2xl">
          <motion.h1
            key={movie.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {movie.title}
          </motion.h1>
          <motion.p
            key={movie.overview}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-lg text-gray-200 mb-6 line-clamp-3"
          >
            {movie.overview}
          </motion.p>
          <Link
            href={`/movies/${movie.id}`}
            className="px-6 py-3 bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Детальніше
          </Link>
        </div>
      </div>

      {/* індикатори */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-red-600 scale-110" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
