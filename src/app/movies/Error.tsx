"use client";

import Link from "next/link";
import { MdMovieFilter } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

export default function Error() {
  return (
    <div className="container max-w-[50rem] mt-6 mb-6 mx-auto p-8 flex flex-col items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg">
      <MdMovieFilter className="text-red-500 text-6xl mb-4 animate-bounce" />

      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Упс... Фільм не знайдено 🎬
      </h1>
      <p className="text-gray-300 text-center max-w-lg mb-6">
        Схоже, цей фільм зник з каталогу або ще не вийшов у прокат. Але не
        хвилюйся — у нас є ще купа кіно для тебе 😉
      </p>

      <Link
        href="/movies"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-2xl shadow-lg transition duration-300"
      >
        <FaArrowLeft />
        Повернутись до фільмів
      </Link>
    </div>
  );
}
