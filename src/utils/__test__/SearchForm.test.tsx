import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";
import userEvent from "@testing-library/user-event";

describe("SearchForm", () => {
  it("Рендериться input і кнопка", () => {
    const mockOnSearch = vi.fn();
    render(<SearchForm onSearch={mockOnSearch} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("При натисканні кнопки викликається onSearch з правильним значенням", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();

    render(<SearchForm onSearch={mockOnSearch} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    await user.type(input, "Hello world");
    await user.click(button);
    expect(mockOnSearch).toHaveBeenCalledWith("Hello world");
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it("При isLoading=true показується 'Searching...'", async () => {
    const mockOnSearch = vi.fn();
    render(<SearchForm onSearch={mockOnSearch} isLoading={true} />);
    expect(screen.getByText("Searching...")).toBeInTheDocument();
  });
  it("Поле очищується після пошуку", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();

    render(<SearchForm onSearch={mockOnSearch} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    await user.type(input, "Hello world");
    await user.click(button);
    expect(input).toHaveValue("");
  });
  it("Форма працює по Enter", async () => {
    const user = userEvent.setup();
    const mockOnSearch = vi.fn();
    render(<SearchForm onSearch={mockOnSearch} />);
    const input = await screen.findByRole("textbox");
    await user.type(input, "Hello world");
    await user.keyboard("{Enter}");
    expect(mockOnSearch).toHaveBeenCalledWith("Hello world");
  });
});
