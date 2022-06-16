import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../../shared/testUtils/wrapper";
import LoginForm from "./LoginForm";

describe("LoginForm tests", () => {
  it("should render 1 heading, 1 inputs, 1 password and 1 button", () => {
    render(<LoginForm />, { wrapper: TestWrapper });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
