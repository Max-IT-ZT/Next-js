import { getMovieDetails, getMovieVideo } from "@/app/api/tmdb";
import GoBackBtn from "@/components/GoBackBtn";
import MovieInfoClient from "@/components/MovieInfoClient";

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

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="relative min-h-screen mt-6 mb-6 mx-4 p-4 text-white">
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        }}
      />
      <GoBackBtn />
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <MovieInfoClient movie={movie} videoKey={videoKey} />
    </div>
  );
}
