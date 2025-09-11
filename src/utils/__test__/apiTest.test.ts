import { getTrendingMovies, Movie, searchMovies } from "@/app/api/tmdb";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("searchMovieApi - з vi.mock", () => {
  const mockMovies: Movie[] = [
    {
      id: 1,
      title: "Тест фільм",
      overview: "Опис тестового фільму",
      poster_path: "/test-poster.jpg",
      backdrop_path: "/test-backdrop.jpg",
      release_date: "2024-01-01",
      vote_average: 8.5,
    },
    {
      id: 2,
      title: "Другий фільм",
      overview: "Опис другого фільму",
      poster_path: null,
      release_date: "2024-02-01",
      vote_average: 7.2,
    },
  ];

  const mockApiResponse = {
    page: 1,
    results: mockMovies,
    total_pages: 1,
    total_results: 2,
  };

  const emptyResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe("searchMovies Api", () => {
    it("Успішно повинен знайти фільм", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      } as Response);
      const result = await searchMovies("Аватар");
      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/search/movie?include_adult=false&language=uk-UA&page=1&query=Аватар",
        {
          headers: {
            Authorization: expect.stringContaining("Bearer"),
          },
          next: { revalidate: 3600 },
        }
      );
      expect(result.results).toEqual(mockMovies);
      expect(result.results).toHaveLength(2);
      expect(result.results[0].title).toBe("Тест фільм");
    });
    it("повинно обробляти порожній результат", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => emptyResponse,
      });
      const result = await searchMovies("Неіснуючий фільм");
      expect(result.results).toEqual([]);
      expect(result.results).toHaveLength(0);
    });
    it("Повнинно обробляти помилки API", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      } as Response);
      await expect(searchMovies("лофрофолів")).rejects.toThrow(
        "Failed to fetch search movies"
      );
    });
    it("Повнинно шукати з мовою за замовчуванням", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      } as Response);
      await searchMovies("тест");
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("uk-UA"),
        expect.any(Object)
      );
    });
    it("Повнинно шукати з переданою мовою", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      } as Response);
      await searchMovies("тест", "en-US");
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("en-US"),
        expect.any(Object)
      );
    });
  });
  describe("getTrendingMovies Api", () => {
    it("Успішно знаходить фільми", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockApiResponse,
      } as Response);
      const result = await getTrendingMovies();
      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/trending/movie/week?language=uk-UA&page=1",
        {
          headers: {
            Authorization: expect.stringContaining("Bearer"),
          },
          next: { revalidate: 3600 },
        }
      );
      expect(result.results).toEqual(mockMovies);
      expect(result.page).toBe(1);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
    it("використовує page=1 за замовчуванням", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      });

      await getTrendingMovies();

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("page=1"),
        expect.any(Object)
      );
    });
    it("Успішно обробляє помилку запиту", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 404,
      } as Response);
      await expect(getTrendingMovies(-1)).rejects.toThrow(
        "Failed to fetch trending movies"
      );
    });
    it("обробляє помилки мережі", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      await expect(getTrendingMovies()).rejects.toThrow("Network error");
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
    it("вірно отримує параметр page і робить fetch за вірним запитом", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockApiResponse,
      });
      const result = await getTrendingMovies(2);
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("page=2"),
        expect.any(Object)
      );
      expect(mockFetch).toBeCalledTimes(1);
      expect(result.results).toEqual(mockMovies);
    });
  });
});
