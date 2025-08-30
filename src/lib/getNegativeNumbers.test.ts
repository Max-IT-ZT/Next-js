import { getNegativeNumbers } from "./getNegativeNumbers";

describe("Функція getNegativeNumbers", () => {
  it("Повертає числа які менші за 0", () => {
    expect(getNegativeNumbers([-5, 0, 3, 8, -2])).toEqual([-5, -2]);
  });
  it("Повертає пустий масив", () => {
    expect(getNegativeNumbers([1, 2, 3])).toEqual([]);
  });
  it("Повертає весь масив всі числа  менші за 0", () => {
    expect(getNegativeNumbers([-1, -2, -3])).toEqual([-1, -2, -3]);
  });
  it("Якщо в масиві є NaN або Infinity вони не вважаються відʼємними ", () => {
    expect(getNegativeNumbers([NaN, Infinity, -10])).toEqual([-10]);
  });
});
