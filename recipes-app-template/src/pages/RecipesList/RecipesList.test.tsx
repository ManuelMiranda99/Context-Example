import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../shared/testUtils/TestWrapper";
import RecipesList from "./RecipesList";

describe("RecipesList.test tests", () => {
  it("should render search input, nabvbar and recipes list", () => {
    render(<RecipesList />, { wrapper: TestWrapper });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Recetas")).toBeInTheDocument();
  });
});
