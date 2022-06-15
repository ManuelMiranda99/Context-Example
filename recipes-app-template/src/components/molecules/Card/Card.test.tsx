import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card tests", () => {
  it("should render card with props", () => {
    render(<Card description="TEST DESCRIPTION" image="TEST" title="TEST" />);
    expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByText("TEST DESCRIPTION")).toBeInTheDocument();
  });
});
