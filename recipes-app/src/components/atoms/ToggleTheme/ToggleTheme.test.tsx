import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BackgroundProvider } from "../../organisms/Background/BackgroundContext/BackgroundContext";
import ToggleTheme from "./ToggleTheme";

describe("ToggleTheme tests", () => {
  it("should render checkbox", () => {
    render(<ToggleTheme />, { wrapper: BackgroundProvider });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should change background when checkbox is checked", async () => {
    render(<ToggleTheme />, { wrapper: BackgroundProvider });
    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
