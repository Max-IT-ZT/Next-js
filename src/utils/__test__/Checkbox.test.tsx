import React from "react";
import Checkbox from "../../components/Checkbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Checkbox component", () => {
  it("Чи рендерить чекбокс вірний лейбл", () => {
    render(<Checkbox label="Приймаю умови" />);
    expect(screen.getByText("Приймаю умови")).toBeInTheDocument();
  });
  it("Чи змінюється стан чекбокса при кліку", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Приймаю умови" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it("Чи викликається onChange з правильним значенням", async () => {
    const user = userEvent.setup();
    const mockOnChange = vi.fn();
    render(<Checkbox label="Приймаю умови" onChange={mockOnChange} />);
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
    await user.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });
});
