"use client";

import { Movie } from "@/api/tmdb";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddMovies({
  data,
}: {
  data: {
    total_pages: number;
    results: Movie[];
  };
}) {
  const [page, setPage] = useState(1);
  const router = useRouter();
  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      <button
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
          router.push(`/movies?page=${page - 1}`);
        }}
        className="px-5 py-2  rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Попрередні фільми
      </button>
      <button
        disabled={page === data.total_pages}
        onClick={() => {
          setPage(page + 1);
          router.push(`/movies?page=${page + 1}`);
        }}
        className="px-7 py-2  rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Наступні фільми
      </button>
    </div>
  );
}
