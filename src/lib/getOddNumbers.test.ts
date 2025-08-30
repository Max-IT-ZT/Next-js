import { getOddNumbers } from "./getOddNumbers";

describe("Функція getOddNumbers", () => {
  it("Повертає тільки не парні числа", () => {
    expect(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 3, 5, 7]);
  });
  it("Повертає пустий масив якщо Масив тільки з парних.", () => {
    expect(getOddNumbers([2, 4, 6, 8])).toEqual([]);
  });
  it("Повертає весь масив якщо Масив тільки з непарних.", () => {
    expect(getOddNumbers([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
  });
});
