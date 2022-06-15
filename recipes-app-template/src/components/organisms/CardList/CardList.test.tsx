import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList tests", () => {
  it("should render a list of cards", () => {
    render(<CardList />);
    expect(
      screen.getByRole("heading", { name: "Recetas" })
    ).toBeInTheDocument();
  });
});
