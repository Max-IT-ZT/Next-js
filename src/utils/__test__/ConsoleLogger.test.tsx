import ConsoleLogger from "@/components/ConsoleLogger";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ConsoleLoger component", () => {
  describe("Виводить вірний console в залежності від натиснутої кнопки", () => {
    let logSpy: ReturnType<typeof vi.spyOn>;
    let infoSpy: ReturnType<typeof vi.spyOn>;
    let warnSpy: ReturnType<typeof vi.spyOn>;
    let errorSpy: ReturnType<typeof vi.spyOn>;
    beforeEach(() => {
      logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    });
    afterEach(() => {
      vi.restoreAllMocks();
    });
    const user = userEvent.setup();
    it("Виводить Info", async () => {
      render(<ConsoleLogger />);
      const button = screen.getByText("Інфо");
      await user.click(button);
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith("Це інформаційне повідомлення");
    });
    it("Виводить Warn", async () => {
      render(<ConsoleLogger />);
      const button = screen.getByText("Попередження");
      await user.click(button);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith("Це попередження");
    });
    it("Виводить Error", async () => {
      render(<ConsoleLogger />);
      const button = screen.getByText("Помилка");
      await user.click(button);
      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy).toHaveBeenCalledWith("Це помилка");
    });
    it("Виводить Debug - ОБА методи", async () => {
      render(<ConsoleLogger />);
      const button = screen.getByText("Debug");
      await user.click(button);
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith("Debug: користувач натиснув кнопку");
      expect(infoSpy).toHaveBeenCalledWith("Info: операція виконана");
    });
  });
});
