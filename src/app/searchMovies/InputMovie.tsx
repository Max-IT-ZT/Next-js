"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputMovie({ initialQuery }: { initialQuery: string }) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/searchMovies?query=${encodeURIComponent(value)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введи назву фільму"
        className="w-full px-4 py-2 rounded-lg border border-white/20 backdrop-blur-md  text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow"
      >
        Пошук
      </button>
    </form>
  );
}
