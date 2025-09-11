import * as TrendingMovies from "@/app/api/tmdb";
import pageTrending from "@/app/searchMovies/page";
import { render } from "@testing-library/react";
const mockSearchMovie = vi
  .spyOn(TrendingMovies, "searchMovies")
  .mockResolvedValue({
    results: [
      {
        id: 1,
        title: "Example Movie Title",
        overview:
          "This is an example of a movie overview. It gives a brief summary of the plot or main theme.",
        poster_path: "/example-poster.jpg",
        release_date: "2025-09-01",
        vote_average: 8.5,
        backdrop_path: "/example-backdrop.jpg",
      },
    ],
  });

const mockTrendingMovies = vi
  .spyOn(TrendingMovies, "getTrendingMovies")
  .mockResolvedValue({
    page: 1,
    total_pages: 1,
    total_results: 1,
    results: [
      {
        id: 1,
        title: "Example Movie Title",
        overview:
          "This is an example of a movie overview. It gives a brief summary of the plot or main theme.",
        poster_path: "/example-poster.jpg",
        release_date: "2025-09-01",
        vote_average: 8.5,
        backdrop_path: "/example-backdrop.jpg",
      },
    ],
  });

vi.mock("../../app/searchMovies/InputMovie.tsx", () => {
  return { default: () => <div>Hello world</div> };
});
describe("Test api", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("page will be called with trending movies", async () => {
    const page = await pageTrending({ searchParams: Promise.resolve({}) });
    render(page);

    expect(mockTrendingMovies).toBeCalledTimes(1);

    expect(mockSearchMovie).not.toBeCalled();
  });
  it("page will be called with searchMovies movies", async () => {
    const page = await pageTrending({
      searchParams: Promise.resolve({ query: "Avatar" }),
    });
    render(page);

    expect(mockTrendingMovies).not.toBeCalled();

    expect(mockSearchMovie).toBeCalledWith("Avatar");
  });
});
