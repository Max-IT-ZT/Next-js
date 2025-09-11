"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputMovie({ initialQuery }: { initialQuery: string }) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (!trimmedValue) return;
    router.push(`/searchMovies?query=${encodeURIComponent(trimmedValue)}`);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex w-full max-w-lg mx-auto gap-2"
    >
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
  );
}
