import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserProvider } from "../../../shared/context/UserContext/UserContext";
import { TestWrapper } from "../../../shared/testUtils/TestWrapper";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  it("should render toggleTheme component and username", () => {
    render(<Navbar />, { wrapper: TestWrapper });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should show user value", () => {
    render(
      <TestWrapper initialUser="TEST">
        <Navbar />
      </TestWrapper>
    );
    expect(screen.getByRole("heading", { name: "TEST" })).toBeInTheDocument();
  });

  it("should set user to ''", async () => {
    render(
      <TestWrapper initialUser="TEST">
        <Navbar />
      </TestWrapper>
    );
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    await userEvent.click(logoutBtn);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
