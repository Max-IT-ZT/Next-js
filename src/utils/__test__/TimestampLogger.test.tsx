import TimestampLogger from "@/components/TimestampLogger";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("TimestampLogger component", () => {
  const TIME = 1000000;
  let dateSpy: ReturnType<typeof vi.spyOn>;
  let logSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    dateSpy = vi.spyOn(Date, "now").mockReturnValue(TIME);
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    dateSpy.mockRestore();
    logSpy.mockRestore();
  });

  it("Перевірка виклику і вірного вмісту", async () => {
    const user = userEvent.setup();

    render(<TimestampLogger />);
    const loginButton = screen.getByText("Логін");
    await user.click(loginButton);
    expect(logSpy).toHaveBeenCalledWith(`[${TIME}] Користувач увійшов`);

    expect(dateSpy).toBeCalled();
    const logEntry = await screen.findByText(/Користувач увійшов/);
    expect(logEntry).toBeInTheDocument();
  });
  it("має відображати відформатований час у інтерфейсі користувача", async () => {
    const user = userEvent.setup();
    render(<TimestampLogger />);
    const loginButton = screen.getByText("Логін");
    await user.click(loginButton);
    const formattedTime = new Date(TIME).toLocaleTimeString();
    expect(screen.getByText(new RegExp(formattedTime))).toBeInTheDocument();
  });
});
