import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  it("should render toggleTheme component and username", () => {
    render(<Navbar />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
