import { getTrendingMovies, searchMovies } from "@/app/api/tmdb";
import { describe, it, expect, vi, beforeEach } from "vitest";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("searchMovies", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("успішно знаходить фільми", async () => {
    const mockMoviesData = {
      results: [
        {
          id: 1,
          title: "The Dark Knight",
          overview: "Batman fights Joker",
          poster_path: "/poster.jpg",
          vote_average: 9.0,
        },
      ],
    };
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockMoviesData),
    });
    const result = await searchMovies("Batman");
    expect(result).toEqual(mockMoviesData);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=uk-UA&page=1&query=Batman",
      {
        headers: {
          Authorization: expect.any(String),
        },
        next: { revalidate: 3600 },
      }
    );
  });
  it("кидає помилку при 404 статусі", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    } as Response);

    await expect(searchMovies("Batmacaakjsnd")).rejects.toThrow();
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=uk-UA&page=1&query=Batmacaakjsnd",
      {
        headers: {
          Authorization: expect.stringContaining("Bearer"),
        },
        next: {
          revalidate: 3600,
        },
      }
    );
  });
  it("використовує кастомну мову", async () => {
    const mockData = { results: [] };

    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    await searchMovies("Spider-Man", "en-US");
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=Spider-Man",
      {
        headers: {
          Authorization: expect.stringContaining("Bearer"),
        },
        next: {
          revalidate: 3600,
        },
      }
    );
  });
  describe("getTrendingMovies", () => {
    it("отримує трендові фільми за замовчуванням (page=1)", async () => {
      const mockMoviesResponse = {
        page: 1,
        total_pages: 10,
        total_results: 200,
        results: [
          {
            id: 123,
            title: "Trending Movie 1",
            overview: "Popular movie overview",
            poster_path: "/trending1.jpg",
            vote_average: 8.5,
          },
          {
            id: 1234,
            title: "Trending Movie 2",
            overview: "Popular movie overview",
            poster_path: "/trending2.jpg",
            vote_average: 9.5,
          },
        ],
      };
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockMoviesResponse),
      });
      const result = await getTrendingMovies();
      expect(result).toEqual(mockMoviesResponse);
      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/trending/movie/week?language=uk-UA&page=1",
        {
          headers: {
            Authorization: expect.stringContaining("Bearer"),
          },
          next: {
            revalidate: 3600,
          },
        }
      );
    });
    it("отримує трендові фільми для конкретної сторінки", async () => {
      const mockMoviesResponse = {
        page: 3,
        total_pages: 10,
        total_results: 200,
        results: [
          {
            id: 243,
            title: "Trending Movie 5",
            overview: "Popular movie overview",
            poster_path: "/trending5.jpg",
            vote_average: 8.5,
          },
          {
            id: 23345,
            title: "Trending Movie 5",
            overview: "Popular movie overview",
            poster_path: "/trending6.jpg",
            vote_average: 9.5,
          },
        ],
      };
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockMoviesResponse),
      });
      const result = await getTrendingMovies(mockMoviesResponse.page);
      expect(result).toEqual(mockMoviesResponse);
      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/trending/movie/week?language=uk-UA&page=3",
        {
          headers: {
            Authorization: expect.stringContaining("Bearer"),
          },
          next: {
            revalidate: 3600,
          },
        }
      );
    });
    it("обробляє мережеві помилки", async () => {
      mockFetch.mockRejectedValue(new Error("Network error"));
      await expect(getTrendingMovies(1)).rejects.toThrow("Network error");
    });
  });
});
