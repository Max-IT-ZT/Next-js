import { multiply } from "../multiply";

describe("Функція множення двох чисел", () => {
  it("Помножити звичайні числа", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it("Множення на 0", () => {
    expect(multiply(2, 0)).toBe(0);
  });
  it("множення відʼємних значень", () => {
    expect(multiply(-3, Infinity)).toBe(-Infinity);
  });
  it("Множення на Infinity", () => {
    expect(multiply(5, Infinity)).toBe(Infinity);
  });
  it("Множення на нуль з Infinity", () => {
    expect(multiply(0, Infinity)).toBe(NaN);
  });
});
