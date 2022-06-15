import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input tests", () => {
  it("should render an input with props and default values", () => {
    render(<Input placeholder="TEST" type="text" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("rounded-t-md");
  });

  it("should render a bottom input when position is BOTTOM", () => {
    render(<Input placeholder="TEST" type="text" position="BOTTOM" />);
    expect(screen.getByRole("textbox")).toHaveClass("rounded-b-md");
  });
});
