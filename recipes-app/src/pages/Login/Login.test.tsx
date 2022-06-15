import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login tests", () => {
  it("should render navbar and login", () => {
    render(<Login />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });
});
