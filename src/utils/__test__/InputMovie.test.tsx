import InputMovie from "@/app/searchMovies/InputMovie";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("Тестування inputMovie nextRouter", () => {
  const mockRouter = {
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  } as AppRouterInstance;
  const mockUseRouter = vi.mocked(useRouter);

  beforeEach(() => {
    mockUseRouter.mockReturnValue(mockRouter);
  });
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it("повинен рендерити компонент з початковим значенням", () => {
    render(<InputMovie initialQuery="Тест" />);
    const input = screen.getByPlaceholderText("Введи назву фільму");
    expect(input).toHaveValue("Тест");
  });

  it("повинен оновлювати значення input при введенні", async () => {
    const user = userEvent.setup();
    render(<InputMovie initialQuery="" />);
    const input = screen.getByPlaceholderText("Введи назву фільму");
    await user.type(input, "Аватар");
    expect(input).toHaveValue("Аватар");
  });

  it("повинен викликати router.push з правильними параметрами і з вірним кодуванням", async () => {
    const user = userEvent.setup();
    const routerPushSpy = vi.spyOn(mockRouter, "push");
    render(<InputMovie initialQuery="" />);
    const input = screen.getByPlaceholderText("Введи назву фільму");
    const button = screen.getByText("Пошук");
    const searchQuery = "Термінатор";
    await user.type(input, searchQuery);
    await user.click(button);
    expect(routerPushSpy).toHaveBeenCalledTimes(1);
    expect(routerPushSpy).toHaveBeenCalledWith(
      `/searchMovies?query=${encodeURIComponent(searchQuery)}`
    );
    expect(input).toHaveValue("");
  });

  it("не викликає router при відправці пустого значення", async () => {
    const routerPushSpy = vi.spyOn(mockRouter, "push");
    const user = userEvent.setup();
    render(<InputMovie initialQuery="" />);
    const button = screen.getByText("Пошук");
    await user.click(button);
    expect(routerPushSpy).not.toHaveBeenCalled();
  });

  it("не викликає router при відправці значення з лише пробілами", async () => {
    const routerPushSpy = vi.spyOn(mockRouter, "push");
    const user = userEvent.setup();
    render(<InputMovie initialQuery="" />);
    const input = screen.getByPlaceholderText("Введи назву фільму");
    const button = screen.getByText("Пошук");
    await user.type(input, "   ");
    await user.keyboard("{Enter}");
    await user.click(button);
    expect(routerPushSpy).not.toHaveBeenCalled();
  });

  it("Вірно опрацьовує пробіли ", async () => {
    const routerPushSpy = vi.spyOn(mockRouter, "push");
    const user = userEvent.setup();
    render(<InputMovie initialQuery="" />);
    const input = screen.getByPlaceholderText("Введи назву фільму");
    const button = screen.getByText("Пошук");
    await user.type(input, "    Фільм з пробілами    ");
    await user.click(button);
    expect(routerPushSpy).toHaveBeenCalledWith(
      `/searchMovies?query=${encodeURIComponent("Фільм з пробілами")}`
    );
  });

  it("повинен зберігати початкове значення до першої зміни", () => {
    render(<InputMovie initialQuery="Початковий запит" />);
    const input = screen.getByDisplayValue("Початковий запит");
    expect(input).toBeInTheDocument();
  });
});
