import Logger from "@/components/Logger";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Logger component", () => {
  it("повинен викликати console.log з правильним параметром", async () => {
    const logSpy = vi.spyOn(console, "log");
    const user = userEvent.setup();
    render(<Logger />);
    const addLogButton = screen.getByText("Додати лог");
    await user.click(addLogButton);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Тестове повідомлення")
    );

    const logErrorButton = screen.getByText("Логувати помилку");
    await user.click(logErrorButton);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Помилка системи")
    );
    logSpy.mockRestore();
  });
});
