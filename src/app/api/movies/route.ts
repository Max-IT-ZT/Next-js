import { NextRequest, NextResponse } from "next/server";
import {
  getNowCinemaMovies,
  getPopularMovies,
  getTrendingMovies,
} from "@/app/api/tmdb";

const movieSources = {
  trending: getTrendingMovies,
  rated: getPopularMovies,
  nowPlaying: getNowCinemaMovies,
} as const;

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get(
    "source",
  ) as keyof typeof movieSources;
  const page = Number(request.nextUrl.searchParams.get("page") ?? "1");
  const getMovies = movieSources[source];

  if (!getMovies || !Number.isInteger(page) || page < 1) {
    return NextResponse.json(
      { error: "Invalid movie request" },
      { status: 400 },
    );
  }

  try {
    return NextResponse.json(await getMovies(page));
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 502 },
    );
  }
}
