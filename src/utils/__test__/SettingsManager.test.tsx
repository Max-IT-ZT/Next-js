import SettingsManager from "@/components/SettingsManager";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("SettingsManager component", () => {
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  const removeItemSpy = vi.spyOn(Storage.prototype, "removeItem");

  beforeEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    removeItemSpy.mockClear();
  });

  it("повинен викликати localStorage.setItem при збереженні теми і бути з правильними параметрами", async () => {
    const user = userEvent.setup();
    render(<SettingsManager />);
    const darkButton = screen.getByText("Темна");
    await user.click(darkButton);
    expect(setItemSpy).toHaveBeenCalledWith("theme", "dark");
    expect(setItemSpy).toHaveBeenCalledTimes(1);
  });
  it("повинен викликати localStorage.removeItem при очищенні налаштувань", async () => {
    const user = userEvent.setup();
    render(<SettingsManager />);
    const clearButton = screen.getByText("Очистити все");
    await user.click(clearButton);
    expect(removeItemSpy).toHaveBeenCalledWith("theme");
    expect(removeItemSpy).toHaveBeenCalledWith("username");
    expect(removeItemSpy).toHaveBeenCalledTimes(2);
  });

  it("повинен викликати localStorage.getItem при завантаженні компонента", () => {
    render(<SettingsManager />);
    expect(getItemSpy).toHaveBeenCalledWith("theme");
    expect(getItemSpy).toHaveBeenCalledWith("username");
    expect(getItemSpy).toHaveBeenCalledTimes(2);
  });
});
