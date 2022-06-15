import { render, screen } from "@testing-library/react";
import RecipesList from "./RecipesList";

describe("RecipesList.test tests", () => {
  it("should render search input, nabvbar and recipes list", () => {
    render(<RecipesList />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Recetas")).toBeInTheDocument();
  });
});
