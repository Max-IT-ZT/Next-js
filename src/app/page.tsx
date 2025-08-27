// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  getTrendingMovies,
  getPopularMovies,
  getNowCinemaMovies,
  Movie,
} from "@/app/api/tmdb";
import HeroSlider from "@/components/HeroSlider";

export default async function HomePage() {
  const trending = await getTrendingMovies(1);
  const popular = await getPopularMovies(1);
  const nowPlaying = await getNowCinemaMovies(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* HERO Слайдер */}
      <HeroSlider movies={trending.results.slice(0, 5)} />

      {/* СЕКЦІЇ */}
      <div className="space-y-12 px-6 md:px-12 lg:px-20 py-12">
        <MoviesRow title="🔥 Топ тижня" movies={trending.results} />
        <MoviesRow title="⭐ Топ рейтинг" movies={popular.results} />
        <MoviesRow title="🍿 Зараз у кіно" movies={nowPlaying.results} />
      </div>
    </div>
  );
}

// ---------------- HERO Слайдер ----------------

// ---------------- Рядки з фільмами ----------------
function MoviesRow({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide pb-4">
        {movies.map((movie) => (
          <Link
            href={`/movies/${movie.id}`}
            key={movie.id}
            className="min-w-[150px] md:min-w-[200px] flex-shrink-0 group relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition">
              {movie.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
