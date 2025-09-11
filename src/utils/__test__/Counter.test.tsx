import Counter from "@/components/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  it("Вірне початкове значення", async () => {
    render(<Counter />);

    const count = await screen.findByText("Лічильник: 0");
    expect(count).toBeInTheDocument();
  });
  it("Збільшення числа", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);
    const count = await screen.findByText("Лічильник: 1");
    expect(count).toBeInTheDocument();
  });
  it("Зменшення числа, коли число 0, кнопка - має бути вимкнена", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const decrementButton = screen.getByRole("button", { name: "-" });
    const initialState = decrementButton;
    expect(initialState).toBeDisabled();

    await user.click(decrementButton);
    const count = await screen.findByText("Лічильник: 0");

    expect(count).toBeInTheDocument();
    expect(decrementButton).toBeDisabled();
  });
});
it("Зменшення числа після збільшення", async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const incrementButton = screen.getByRole("button", { name: "+" });
  const decrementButton = screen.getByRole("button", { name: "-" });

  await user.click(incrementButton);
  await user.click(incrementButton);
  expect(screen.getByText("Лічильник: 2")).toBeInTheDocument();

  expect(decrementButton).toBeEnabled();
  await user.click(decrementButton);
  expect(screen.getByText("Лічильник: 1")).toBeInTheDocument();

  await user.click(decrementButton);
  expect(screen.getByText("Лічильник: 0")).toBeInTheDocument();
  expect(decrementButton).toBeDisabled();
});
