import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../../shared/testUtils/wrapper";
import CardList from "./CardList";

describe("CardList tests", () => {
  it("should render a list of cards", () => {
    render(<CardList />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: "Recetas" })
    ).toBeInTheDocument();
  });
});
