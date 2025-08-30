import { calculateRating, formatRuntime } from "../calculateRaing";

describe("Movie Utils", () => {
  describe("calculateRating function", () => {
    //  Те що зпорадив ШІ після ревʼю
    //  it('returns "Excellent" for average >= 8', () => {
    //    const result = calculateRating([8, 9, 10], 9);
    //    expect(result).toBe("Excellent");
    //  });
    //
    it("Має вірний розрахунок середнього рейтингу і виводить вірне повідомлення", () => {
      const votes: number[] = [8, 9, 7, 9];
      const average: number =
        votes.reduce((acc, val) => acc + val, 0) / votes.length;
      const result = calculateRating(votes, average);
      expect(result).toBe("Excellent");
    });
    it("Виводить вірне повідомлення", () => {
      const votes: number[] = [8, 9, 7, 9, 5, 4, 5, 6, 7];
      const average: number = 6;
      const result = calculateRating(votes, average);
      expect(result).toBe("Good");
    });
    it("Виводить вірне повідомлення", () => {
      const votes: number[] = [3, 3, 3, 3, 3, 3, 3, 3, 4];
      const average: number = 3;
      const result = calculateRating(votes, average);
      expect(result).toBe("Poor");
    });
    it("Якщо масив пустий виводить No rating", () => {
      const votes: number[] = [];
      const average: number =
        votes.reduce((acc, val) => acc + val, 0) / votes.length;
      const result = calculateRating(votes, average);
      expect(result).toBe("No rating");
    });
  });
  describe("formatRuntime function", () => {
    //  Те що зпорадив ШІ після ревʼю
    // it("formats minutes only when less than 60", () => {
    //   expect(formatRuntime(45)).toBe("45min");
    // });

    it("Вірно рахує години і виводить вірне повідомлення", () => {
      const result = formatRuntime(80);
      expect(result).toBe("1h 20min");
    });
    it("Вірно рахує години і виводить вірне повідомлення", () => {
      const result = formatRuntime(60);
      expect(result).toBe("1h");
    });
    it("Вірно рахує години і виводить вірне повідомлення", () => {
      const result = formatRuntime(0);
      expect(result).toBe("0min");
    });
//   в функції раніше не було значення за замовчуванням 0 і виводилдо "NaNh" і виводидло що функція повинна приймати 1 аргумент
    it("Вірно рахує години і виводить вірне повідомлення", () => {
      const result = formatRuntime();
      expect(result).toBe("0min");
    });
  });
});
