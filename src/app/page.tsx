import {
  getTrendingMovies,
  getPopularMovies,
  getNowCinemaMovies,
} from "@/app/api/tmdb";
import HeroSlider from "@/components/HeroSlider";
import MoviesRow from "@/components/MoviesRow";

export default async function HomePage() {
  const [trending, popular, nowPlaying] = await Promise.all([
    getTrendingMovies(1),
    getPopularMovies(1),
    getNowCinemaMovies(1),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <HeroSlider movies={trending.results.slice(0, 10)} />
      <div className="space-y-12 px-6 md:px-12 lg:px-20 py-12">
        <MoviesRow title="🔥 Топ тижня" movies={trending.results} />
        <MoviesRow title="⭐ Топ рейтинг" movies={popular.results} />
        <MoviesRow title="🍿 Зараз у кіно" movies={nowPlaying.results} />
      </div>
    </div>
  );
}
