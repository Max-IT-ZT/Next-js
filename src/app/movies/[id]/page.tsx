import Image from "next/image";
import { getMovieDetails, getMovieVideo } from "@/app/api/tmdb";
import GoBackBtn from "@/components/GoBackBtn";
import ModalPlayer from "@/components/TrailerButton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  return {
    title: movie.title,
    description: movie.overview ? movie.overview.slice(0, 100) : "",
    openGraph: {
      title: movie.title,
      description: movie.overview ? movie.overview.slice(0, 200) : "",
      images: [`https://image.tmdb.org/t/p/w500${movie.poster_path}`],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);
  const videoData = await getMovieVideo(id);

  const trailer = videoData.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  const videoKey = trailer?.key || null;

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="relative md:h-[100vh]  mt-6 mb-6 mx-4 p-4 flex flex-col justify-center md:flex-row items-center gap-6 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
      <GoBackBtn />
      <div className="w-[300px] h-[400px] lg:w-[350px] lg:h-[600px] relative flex flex-col hover:scale-105 transition-transform duration-300">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          fill
          sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, 600px"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="relative flex flex-col justify-center gap-4 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {movie.title}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-xl">
          {movie.overview}
        </p>
        <p className="text-sm sm:text-base">
          Дата релізу:
          <span className="font-bold text-red-600">{movie.release_date}</span>
        </p>
        <p className="text-sm sm:text-base">
          Рейтинг:
          <span className="text-yellow-500 font-bold">
            {movie.vote_average.toFixed(1)}
          </span>
        </p>
        <ModalPlayer videoKey={videoKey} />
      </div>
    </div>
  );
}
