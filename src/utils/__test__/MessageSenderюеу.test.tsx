import MessageSender from "@/components/MessageSender";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("MessageSender component", () => {
  it("Перевірка виклику функції", async () => {
    const mockFunction = vi.fn();
    const user = userEvent.setup();

    render(<MessageSender onSendMessage={mockFunction} />);
    const input = screen.getByPlaceholderText("Текст повідомлення");
    await userEvent.type(input, "Hello Max");

    const button = screen.getByText("Відправити");
    await user.click(button);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith("Hello Max");
  });
});
