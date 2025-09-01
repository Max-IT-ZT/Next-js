import { calculateWithCallback } from "../calculator";

describe("calculateWithCallback", () => {
  it("використовує результат formatter функції", () => {
    const mockFormatter = vi.fn();
    mockFormatter.mockReturnValue("formatted: 15");
    const result = calculateWithCallback([1, 2, 3, 4, 5], mockFormatter);
    expect(mockFormatter).toBeCalledWith(15);
    expect(result).toBe("formatted: 15");
  });
});
