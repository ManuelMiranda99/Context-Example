import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../../shared/testUtils/wrapper";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  it("should render toggleTheme component and username", () => {
    render(<Navbar />, { wrapper: TestWrapper });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
