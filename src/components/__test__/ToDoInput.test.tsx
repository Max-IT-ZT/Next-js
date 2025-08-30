import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test, vi } from "vitest";
import ToDoInput from "../ToDoInput";

describe("ToDoInput", () => {
  test("рендерить інпут і кнопку", () => {
    render(<ToDoInput onAdd={() => {}} />);

    expect(screen.getByPlaceholderText("Введи задачу...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("дозволяє вводити текст у поле", async () => {
    render(<ToDoInput onAdd={() => {}} />);
    const input = screen.getByPlaceholderText("Введи задачу...");

    await userEvent.type(input, "купити хліб");
    expect(input).toHaveValue("купити хліб");
  });

  test("викликає onAdd з правильним значенням при сабміті", async () => {
    const mockOnAdd = vi.fn();
    render(<ToDoInput onAdd={mockOnAdd} />);
    const input = screen.getByPlaceholderText("Введи задачу...");
    const button = screen.getByRole("button");

    await userEvent.type(input, "прибрати кімнату");
    await userEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledWith("прибрати кімнату");
  });

  test("очищає інпут після сабміту", async () => {
    const mockOnAdd = vi.fn();
    render(<ToDoInput onAdd={mockOnAdd} />);
    const input = screen.getByPlaceholderText("Введи задачу...");

    await userEvent.type(input, "погуляти з собакою");
    await userEvent.click(screen.getByRole("button"));

    expect(input).toHaveValue(""); // інпут повинен очиститись
  });

  test("не викликає onAdd якщо інпут пустий або тільки пробіли", async () => {
    const mockOnAdd = vi.fn();
    render(<ToDoInput onAdd={mockOnAdd} />);
    const input = screen.getByPlaceholderText("Введи задачу...");
    const button = screen.getByRole("button");

    // пустий інпут
    await userEvent.click(button);
    expect(mockOnAdd).not.toHaveBeenCalled();

    // пробіли
    await userEvent.type(input, "   ");
    await userEvent.click(button);
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});
