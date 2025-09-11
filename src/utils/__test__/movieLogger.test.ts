import { logMovieAction, clearMovieLogs } from "../movieLogger";

describe("Movie Logger Utils", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    clearMovieLogs();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("виводить лог в консоль", () => {
    logMovieAction("VIEWED", "Batman", "user123");
    expect(consoleSpy).toBeCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "📝 Movie logs cleared");

    const logMessage = consoleSpy.mock.calls[1][0] as string;
    expect(logMessage.startsWith("🎬 MOVIE LOG:")).toBeTruthy();
    expect(logMessage).toContain('VIEWED: "Batman" by user user123');
  });
  it("використовує поточну дату в логах", () => {
    const mockDate = new Date("2024-01-15T10:30:00.000Z");
    const dateSpy = vi.spyOn(global, "Date").mockImplementation(() => mockDate);

    const result = logMovieAction("RATED", "Avengers");

    expect(result).toContain("2024-01-15T10:30:00.000Z");

    dateSpy.mockRestore();
  });
});
