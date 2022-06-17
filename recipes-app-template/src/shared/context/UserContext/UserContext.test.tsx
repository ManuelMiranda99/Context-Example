import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserProvider, useUserContext } from "./UserContext";

const UserContextTC = () => {
  const { user, setUser } = useUserContext();

  return (
    <div>
      {user && <h1>{user}</h1>}
      <button onClick={() => setUser("userTest")}>Login</button>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
};

describe("UserContext.test tests", () => {
  it("should set default user value", () => {
    render(
      <UserProvider>
        <UserContextTC />
      </UserProvider>
    );
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("should show prop user value", () => {
    render(
      <UserProvider initialUser="TEST">
        <UserContextTC />
      </UserProvider>
    );
    expect(screen.getByRole("heading", { name: "TEST" })).toBeInTheDocument();
  });

  it("should set user value", async () => {
    render(
      <UserProvider>
        <UserContextTC />
      </UserProvider>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    await userEvent.click(loginButton);
    expect(
      screen.getByRole("heading", { name: "userTest" })
    ).toBeInTheDocument();
  });

  it("should logout user", async () => {
    render(
      <UserProvider initialUser="TEST">
        <UserContextTC />
      </UserProvider>
    );
    expect(screen.getByRole("heading", { name: "TEST" })).toBeInTheDocument();

    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    await userEvent.click(logoutBtn);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
