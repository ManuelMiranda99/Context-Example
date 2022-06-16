import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserProvider, useUserContext } from "./UserContext";

const UserContextTC = () => {
  const { user, setUser } = useUserContext();
  return (
    <div>
      <h1>UserContextTC</h1>
      {user && <h2>user: {user}</h2>}
      <button onClick={() => setUser("user1")}>setUser("user1")</button>
    </div>
  );
};

describe("UserContext tests", () => {
  it("should show user default value", () => {
    render(
      <UserProvider>
        <UserContextTC />
      </UserProvider>
    );
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });

  it("should render prop value", () => {
    render(
      <UserProvider initialUser="user1">
        <UserContextTC />
      </UserProvider>
    );
    expect(
      screen.getByRole("heading", { name: "user: user1" })
    ).toBeInTheDocument();
  });

  it("should set userName", async () => {
    render(
      <UserProvider>
        <UserContextTC />
      </UserProvider>
    );
    const button = screen.getByText('setUser("user1")');
    await userEvent.click(button);
    expect(
      screen.getByRole("heading", { name: "user: user1" })
    ).toBeInTheDocument();
  });
});
