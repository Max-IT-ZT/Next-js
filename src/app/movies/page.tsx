// app/movies/page.tsx
import MoviesList from "./MovieList";

export const metadata = {
  title: "MaxDev",
  description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
  openGraph: {
    title: "MaxDev - Сторінка з фільмами",
    description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
    images: ["/img/films.webp"],
  },
};

export default function MoviesPage() {
  return <MoviesList />;
}
