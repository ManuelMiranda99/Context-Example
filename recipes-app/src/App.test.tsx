import { render, screen } from "@testing-library/react";
import { FC } from "react";
import App from "./App";
import { BackgroundProvider } from "./components/organisms/Background/BackgroundContext/BackgroundContext";
import { UserProvider } from "./shared/contexts/UserContext";
import { UserProviderProps } from "./shared/interfaces/Contexts.interface";

describe("App tests", () => {
  let user: string = "";
  const AppWrapper: FC<UserProviderProps> = ({ children }) => (
    <UserProvider initialUser={user}>
      <BackgroundProvider>{children}</BackgroundProvider>
    </UserProvider>
  );

  it("should render Login with default Context", () => {
    render(<App />, { wrapper: AppWrapper });
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render RecipesList when user is logged in", () => {
    user = "TEST";
    render(<App />, { wrapper: AppWrapper });

    expect(screen.getByText("Recetas")).toBeInTheDocument();
  });
});
