import { describe, it, expect } from "vitest";
import { formatMovieTitle, getMovieYear } from "../formatMovie";

describe("Movie Utils", () => {
  describe("formatMovieTitle", () => {
    it("має правильно форматувати назву фільму", () => {
      const title = "  The Dark Knight  ";
      const result = formatMovieTitle(title);
      expect(result).toBe("the-dark-knight");
    });

    it("має обробляти множинні пробіли", () => {
      expect(formatMovieTitle("Spider   Man")).toBe("spider-man");
    });
  });

  describe("getMovieYear", () => {
    it("має витягувати рік з дати", () => {
      const releaseDate = "2008-07-18";
      const year = getMovieYear(releaseDate);

      expect(year).toBe(2008);
    });
  });
});
