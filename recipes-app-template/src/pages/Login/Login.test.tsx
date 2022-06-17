import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../shared/testUtils/TestWrapper";
import Login from "./Login";

describe("Login tests", () => {
  it("should render navbar and login", () => {
    render(<Login />, { wrapper: TestWrapper });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });
});
