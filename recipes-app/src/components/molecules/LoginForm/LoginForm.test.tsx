import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useUserContext } from "../../../shared/contexts/UserContext";
import { TestWrapper } from "../../../shared/testUtils/wrapper";
import LoginForm from "./LoginForm";

const LoginTC = () => {
  const { user } = useUserContext();
  return (
    <div>
      <h1>LoginTC</h1>
      {user && <h2>{user}</h2>}
      <LoginForm />
    </div>
  );
};

describe("LoginForm tests", () => {
  it("should render 1 heading, 1 inputs, 1 password and 1 button", () => {
    render(<LoginForm />, { wrapper: TestWrapper });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should set userName when button is clicked and textbox changed", async () => {
    render(<LoginTC />, { wrapper: TestWrapper });
    const button = screen.getByRole("button", { name: "Login" });
    const textbox = screen.getByRole("textbox");

    await userEvent.type(textbox, "user1");
    await userEvent.click(button);

    expect(screen.getByRole("heading", { name: "user1" })).toBeInTheDocument();
  });
});
