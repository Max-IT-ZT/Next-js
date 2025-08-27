import Image from "next/image";
import React from "react";

type Game = {
  id: number;
  title: string;
  thumbnail?: string;
  short_description?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
};

export default async function Page() {
  const data = await fetch("https://www.freetogame.com/api/games");

  const games: Game[] = await data.json();
  return (
    <div>
      <ul className="text-white flex flex-wrap gap-4 justify-center">
        {games.map((game) => (
          <li
            key={game.id}
            className="flex flex-col items-center max-w-3xs p-4 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={`${game.thumbnail}`}
              alt={game.title}
              width={250}
              height={250}
            />
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <h2>{game.title}</h2>
              <p>{game.short_description}</p>
              <p>{game.genre}</p>
              <p>{game.platform}</p>
              <p>{game.publisher}</p>
              <p>{game.developer}</p>
              <p>{game.release_date}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
