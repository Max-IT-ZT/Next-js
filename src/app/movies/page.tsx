// app/movies/page.tsx
import { getTrendingMovies, Movie } from "@/app/api/tmdb";
import Image from "next/image";
import Link from "next/link";
import AddMovies from "./AddMovies";

type Data = {
  total_pages: number;
  results: Movie[];
};
export const metadata = {
  title: "MaxDev",
  description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
  openGraph: {
    title: "MaxDev - Сторінка з фільмами",
    description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
    images: ["/img/films.webp"],
  },
};
export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number }>;
}) {
  const { page } = await searchParams;
  const data: Data = await getTrendingMovies(page);
  console.log("data: ", data);
  return (
    <div className="container px-4 py-8 mx-auto relative ">
      <h1 className="text-4xl font-bold text-center mask-linear-from-2.5 text-white m-8 ">
        Trending Movies
      </h1>
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
                className="object-cover  rounded-lg"
              />
              <h2 className="text-center text-sm font-medium line-clamp-2">
                {movie.title}
              </h2>
            </li>
          </Link>
        ))}
      </ul>
      <AddMovies data={data} />
    </div>
  );
}
