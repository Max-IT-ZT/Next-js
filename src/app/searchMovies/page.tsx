import { getTrendingMovies, Movie, searchMovies } from "@/api/tmdb";
import InputMovie from "./InputMovie";
import Image from "next/image";
import Link from "next/link";
import { SiThemoviedatabase } from "react-icons/si";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const data = query ? await searchMovies(query) : await getTrendingMovies();

  return (
    <div className="container px-4 py-8 mx-auto relative">
      <h1 className="text-4xl font-bold text-center mask-linear-from-2.5 text-white m-8 ">
        Пошук фільмів
      </h1>
      <InputMovie initialQuery={query ?? ""} />

      {data.results.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center ">
          {data.results.map((movie: Movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <li className="flex flex-col items-center gap-2  min-h-[400px] p-3 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  priority={true}
                  alt={movie.title}
                  width={250}
                  height={325}
                  className="object-cover rounded-lg"
                />
                <h2 className="text-center text-sm font-medium line-clamp-2">
                  {movie.title}
                </h2>
              </li>
            </Link>
          ))}
        </ul>
      )}

      {query && data.results.length === 0 && (
        <div className="text-center w-[250px] h-[100px] p-4 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg flex flex-col items-center justify-center mx-auto mt-8">
          <SiThemoviedatabase className="w-8 h-8 mr-2 text-red-500 animate-bounce" />
          Нічого не знайдено 🥲
        </div>
      )}
    </div>
  );
}
