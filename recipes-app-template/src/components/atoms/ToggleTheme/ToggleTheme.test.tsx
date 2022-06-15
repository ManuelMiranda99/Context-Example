import { render, screen } from "@testing-library/react";
import ToggleTheme from "./ToggleTheme";

describe("ToggleTheme tests", () => {
  it("should render checkbox", () => {
    render(<ToggleTheme />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
