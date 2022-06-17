import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  BackgroundProvider,
  BackgroundThemes,
  useBackgroundContext,
} from "../../organisms/CardList/Background/BackgroundContext/BackgroundContext";
import ToggleTheme from "./ToggleTheme";

const ToggleThemeTest = () => {
  const { theme } = useBackgroundContext();
  return (
    <div>
      {theme === "light" ? <h1>LIGHT</h1> : <h1>DARK</h1>}
      <ToggleTheme />
    </div>
  );
};

describe("ToggleTheme tests", () => {
  it("should render checkbox", () => {
    render(<ToggleTheme />, { wrapper: BackgroundProvider });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render light theme by default", () => {
    render(<ToggleThemeTest />, { wrapper: BackgroundProvider });
    expect(screen.getByRole("heading", { name: "LIGHT" })).toBeInTheDocument();
  });

  it("should change to dark theme when click on Toggle", async () => {
    render(<ToggleThemeTest />, { wrapper: BackgroundProvider });
    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    expect(screen.getByRole("heading", { name: "DARK" })).toBeInTheDocument();
  });

  it("should change to light theme when click on Toggle and is in dark theme", async () => {
    render(
      <BackgroundProvider initialTheme={BackgroundThemes.Dark}>
        <ToggleThemeTest />
      </BackgroundProvider>
    );
    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    expect(screen.getByRole("heading", { name: "LIGHT" })).toBeInTheDocument();
  });
});
