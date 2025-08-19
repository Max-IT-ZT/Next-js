import Image from "next/image";
import { getMovieDetails } from "@/api/tmdb";
import GoBackBtn from "@/components/GoBackBtn";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container relative mt-6 mb-6 mx-auto p-4 flex flex-col md:flex-row items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg">
      <GoBackBtn />
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="rounded-lg shadow-lg object-cover w-full max-w-[250px] sm:max-w-[300px]"
      />
      <div className="flex flex-col justify-center gap-4 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {movie.title}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-xl">
          {movie.overview}
        </p>
        <p className="text-sm sm:text-base">
          Дата релізу:{" "}
          <span className="font-bold text-red-600">{movie.release_date}</span>
        </p>
        <p className="text-sm sm:text-base">
          Рейтинг:{" "}
          <span className="text-yellow-500 font-bold">
            {movie.vote_average.toFixed(1)}
          </span>
        </p>
      </div>
    </div>
  );
}
