import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  UserProvider,
  useUserContext,
} from "../../../shared/context/UserContext/UserContext";
import LoginForm from "./LoginForm";

const TestLoginTC = () => {
  const { user } = useUserContext();
  return (
    <div>
      {user && <h1 data-testid="userLogin">{user}</h1>}
      <LoginForm />
    </div>
  );
};

describe("LoginForm tests", () => {
  it("should render 1 heading, 1 inputs, 1 password and 1 button", () => {
    render(<LoginForm />, { wrapper: UserProvider });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should set user value", async () => {
    render(<TestLoginTC />, { wrapper: UserProvider });

    expect(screen.queryByTestId("userLogin")).not.toBeInTheDocument();

    const login = screen.getByRole("button", { name: "Login" });
    await userEvent.click(login);

    expect(screen.getByTestId("userLogin")).toHaveTextContent("Manuel");
  });
});
