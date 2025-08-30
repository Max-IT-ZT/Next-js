import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input component", () => {
  it("Рендерим інпут з вірним плейсхолдером", () => {
    render(<Input onEnter={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "Введіть текст і натисніть Enter"
    );
  });
  it("Викликає onEnter з правильним значенням при натисканні Enter", async () => {
    const mockOnEnter = vi.fn();
    render(<Input onEnter={mockOnEnter} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Test input{Enter}");
    expect(mockOnEnter).toHaveBeenCalledWith("Test input");
    expect(input).toHaveValue("");
  });
  it("Не викликає onEnter якщо інпут пустий і натискаємо Enter", async () => {
    const mockOnEnter = vi.fn();
    render(<Input onEnter={mockOnEnter} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "{Enter}");
    expect(mockOnEnter).not.toHaveBeenCalled();
    expect(input).toHaveValue("");
  });
});
