import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the placeholder page with Ant Design content", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "TypeScript + Vite + React + Ant Design",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ant Design 按钮" }),
    ).toBeInTheDocument();
  });
});
