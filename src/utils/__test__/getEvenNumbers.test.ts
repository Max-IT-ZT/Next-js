import { getEvenNumbers } from "../getEvenNumbers";

describe("Функція getEvenNumbers", () => {
  it("Повертає тільки парні числа", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
  });
  it("Повертає пустий масив якщо Масив тільки з не парних.", () => {
    expect(getEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });
  it("Повертає весь масив якщо Масив тільки з парних.", () => {
    expect(getEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });
});
