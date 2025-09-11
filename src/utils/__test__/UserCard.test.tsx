import UserCard from "@/components/UserCard";
import { render, screen } from "@testing-library/react";

describe("UserCard component", () => {
  it("Вірно відображає всі данні на екрані", async () => {
    render(<UserCard name="Max" age={29} email="babuskomax@gmail.com" />);

    expect(screen.getByText("Name: Max")).toBeInTheDocument();
    expect(screen.getByText("Age: 29")).toBeInTheDocument();
    expect(screen.getByText("Email: babuskomax@gmail.com")).toBeInTheDocument();
  });
});
