import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../shared/testUtils/wrapper";
import RecipesList from "./RecipesList";

describe("RecipesList.test tests", () => {
  it("should render nabvbar and recipes list", () => {
    render(<RecipesList />, { wrapper: TestWrapper });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Recetas")).toBeInTheDocument();
  });
});
