import { render, screen } from "@testing-library/react";
import { RecipesListProvider } from "../../../pages/RecipesList/RecipesListContext/RecipesListContext";
import { TestRecipes } from "../../../pages/RecipesList/RecipesListContext/RecipesListContext.test";
import CardList from "./CardList";

describe("CardList tests", () => {
  it("should render a list of cards", () => {
    render(<CardList />, { wrapper: RecipesListProvider });
    expect(
      screen.getByRole("heading", { name: "Recetas" })
    ).toBeInTheDocument();
  });
  it("should render cardList from Context Provider", () => {
    render(
      <RecipesListProvider recipesList={TestRecipes}>
        <CardList />
      </RecipesListProvider>
    );
    expect(screen.getByText(TestRecipes[0].title)).toBeInTheDocument();
    expect(screen.getByText(TestRecipes[1].title)).toBeInTheDocument();
  });
});
