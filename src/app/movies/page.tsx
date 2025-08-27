// app/movies/page.tsx
import NowCinemaList from "./NowCinemaList";
import RatedList from "./RatedList";
import PopularList from "./PopularList";

export const metadata = {
  title: "MaxDev",
  description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
  openGraph: {
    title: "MaxDev - Сторінка з фільмами",
    description: "Сторінка з фільмами, що демонструє найпопулярніші фільми.",
    images: ["/img/films.webp"],
  },
};

export default async function MoviesPage() {
  return (
    <>
      <PopularList />
      <RatedList />
      <NowCinemaList />
    </>
  );
}
