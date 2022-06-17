import { render, screen } from "@testing-library/react";
import App from "./App";
import { TestWrapper } from "./shared/testUtils/TestWrapper";

describe("App tests", () => {
  it("renders learn react link", () => {
    render(<App />, { wrapper: TestWrapper });
    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();
  });

  it("should render recipes list when user is logged in", () => {
    render(
      <TestWrapper initialUser="USER">
        <App />
      </TestWrapper>
    );
    expect(
      screen.getByRole("heading", { name: /Recetas/i })
    ).toBeInTheDocument();
  });
});
