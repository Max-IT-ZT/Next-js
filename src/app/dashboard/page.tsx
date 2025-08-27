"use client";
import React from "react";
import Image from "next/image";
import { FaTasks, FaStar } from "react-icons/fa";
import { TbLoaderQuarter } from "react-icons/tb";

export default function Dashboard() {
  const user = {
    name: "Максим",
    email: "test@example.com",
    stats: {
      moviesRated: 24,
      tasksCompleted: 12,
      ratingAverage: 8.7,
    },
  };

  const cards = [
    { title: "Мої фільми", icon: <FaStar />, value: user.stats.moviesRated },
    {
      title: "Виконані завдання",
      icon: <FaTasks />,
      value: user.stats.tasksCompleted,
    },
    {
      title: "Середній рейтинг",
      icon: <FaStar />,
      value: user.stats.ratingAverage,
    },
  ];

  return (
    <div className="container relative mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 mask-linear-from-2.5">
        Ласкаво просимо, {user.name}!
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
        <div className="relative w-32 h-32 bg-amber-50 sm:w-40 sm:h-40 border border-white/20 rounded-full overflow-hidden backdrop-blur-md shadow-lg">
          <Image
            src="/img/avatar.png"
            alt="Avatar"
            fill
            className="object-cover "
          />
        </div>
        <div className="flex flex-col gap-2 text-white text-center sm:text-left">
          <p className="text-xl font-semibold">{user.name}</p>
          <p className="text-sm text-gray-300">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 border border-white/20 backdrop-blur-md rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <p className="text-sm text-gray-300 mb-1">{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-scroll scrollbar-hide flex gap-4 py-4">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-40 h-60 border border-white/20 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <TbLoaderQuarter className="w-8 h-8 text-pink-500 animate-spin mb-2" />
            <p>Завантаження {idx + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
