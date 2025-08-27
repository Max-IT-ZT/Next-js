"use client";

import { useState, useEffect } from "react";

export default function FavoriteButton({ movieId }: { movieId: number }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    fetch("/api/favorites")
      .then((res) => res.json())
      .then((data) => setIsFav(data.favorites.includes(movieId)));
  }, [movieId]);

  const toggleFavorite = async () => {
    const method = isFav ? "DELETE" : "POST";
    const res = await fetch("/api/favorites", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movieId }),
    });
    const data = await res.json();
    setIsFav(data.favorites.includes(movieId));
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`text-2xl transition-transform duration-300 ${
        isFav ? "text-red-500 scale-125" : "text-white hover:scale-110"
      }`}
    >
      ❤️
    </button>
  );
}
