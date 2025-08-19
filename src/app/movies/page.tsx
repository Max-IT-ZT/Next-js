// app/movies/page.tsx
import { getTrendingMovies, Movie } from "@/api/tmdb";
import Image from "next/image";
import Link from "next/link";

export default async function MoviesPage() {
  const data: { results: Movie[] } = await getTrendingMovies();
  return (
    <div className="container px-4 py-8 mx-auto relative">
      <h1 className="text-4xl font-bold text-center mask-linear-from-2.5 text-grey m-8 ">
        Trending Movies
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center ">
        {data.results.map((movie: Movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <li className="flex flex-col items-center gap-2  min-h-[400px] p-3 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={250}
                height={325}
                className="w-[250px] h-[325px] object-cover rounded-lg"
              />
              <h2 className="text-center text-sm font-medium line-clamp-2">
                {movie.title}
              </h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
