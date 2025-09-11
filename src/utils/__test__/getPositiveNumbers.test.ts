import { getPositiveNumbers } from "../getPositiveNumbers";

describe("Функція getPositiveNumbers", () => {
  it("Повертає числа які більші за 0", () => {
    expect(getPositiveNumbers([-5, 0, 3, 8, -2])).toEqual([3, 8]);
  });
  it("Повертає пустий масив", () => {
    expect(getPositiveNumbers([-1, -2, -3])).toEqual([]);
  });
  it("Повертає весь масив всі числа  більші за 0", () => {
    expect(getPositiveNumbers([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
