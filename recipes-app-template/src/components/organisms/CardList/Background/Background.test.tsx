import { render, screen } from "@testing-library/react";
import Background from "./Background";

describe("Background.test tests", () => {
  it("should render child component", () => {
    render(<Background>Hello</Background>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
