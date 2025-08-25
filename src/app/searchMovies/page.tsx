import { getTrendingMovies, Movie, searchMovies } from "@/app/api/tmdb";
import InputMovie from "./InputMovie";
import Image from "next/image";
import Link from "next/link";
import { SiThemoviedatabase } from "react-icons/si";
import { FaStar } from "react-icons/fa";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const data = query ? await searchMovies(query) : await getTrendingMovies();

  return (
    <div className="container px-4 py-4 mx-auto relative">
      <h1 className="text-4xl font-bold text-center mask-linear-from-2.5 text-white m-8 ">
        Пошук фільмів
      </h1>
      <InputMovie initialQuery={query ?? ""} />

      {data.results.length > 0 && (
        <ul className="flex flex-wrap items-center justify-center gap-4 py-2 px-2">
          {data.results.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <li className="min-h-[275px]  sm:min-h-[350px] flex-shrink-0 p-3 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="w-[100px] h-[150px] sm:w-[150px] sm:h-[225px] relative flex flex-col hover:scale-105 transition-transform duration-300 overflow-x-scroll scrollbar-hide">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 150px"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex text-end items-baseline flex-col gap-1 justify-between mt-2 text-sm">
                  <p className="text-start font-bold max-w-[100px] sm:max-w[200px] text-ellipsis overflow-hidden line-clamp-2">
                    {movie.title}
                  </p>
                  <p className="flex items-center justify-center gap-1 font-bold">
                    <FaStar className="text-red-500" />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p>{movie.release_date}</p>
                </div>
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
