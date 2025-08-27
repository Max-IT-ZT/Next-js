"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Movie = {
  id: number;
  title: string;
};

export default function InputMovie({ initialQuery }: { initialQuery: string }) {
  const [value, setValue] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/searchMovies?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setSuggestions(data.results.slice(0, 5));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
    return () => clearTimeout(timeoutRef.current!);
  }, [value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    router.push(`/searchMovies?query=${encodeURIComponent(value)}`);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введи назву фільму"
          className="w-full px-5 py-3 rounded-xl border border-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all shadow-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-all"
        >
          Пошук
        </button>
      </form>

      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 mt-1 w-full bg-black border border-white/20 rounded-xl shadow-lg overflow-hidden"
          >
            {suggestions.map((movie) => (
              <motion.li
                key={movie.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="px-4 py-2 cursor-pointer"
                onClick={() => {
                  setValue(movie.title);
                  setSuggestions([]);
                  router.push(
                    `/searchMovies?query=${encodeURIComponent(movie.title)}`
                  );
                }}
              >
                {movie.title}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {isLoading && (
        <p className="absolute top-full mt-1 text-gray-400 text-sm">
          Завантаження...
        </p>
      )}
    </div>
  );
}
