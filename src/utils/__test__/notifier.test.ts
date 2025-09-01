import { processData } from "../notifier";

describe("processData", () => {
  it("викликає onSuccess з правильною кількістю", () => {
    const mockOnSuccess = vi.fn();
    const data = ["apple", "banana", "", "orange"];

    const result = processData(data, mockOnSuccess);

    expect(mockOnSuccess).toHaveBeenCalledWith(3);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("обробляє порожній масив", () => {
    const mockOnSuccess = vi.fn();

    const result = processData([], mockOnSuccess);

    expect(mockOnSuccess).toHaveBeenCalledWith(0);
    expect(result).toEqual([]);
  });
});
