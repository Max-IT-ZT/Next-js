import { Movie } from "@/app/api/tmdb";
import Image from "next/image";
import Link from "next/link";

export default function MoviesRow({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
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
