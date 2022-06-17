import { render, screen } from "@testing-library/react";
import { RecipeInterface } from "../../../shared/interfaces/RecipeInterface";
import {
  RecipesListProvider,
  useRecipesListContext,
} from "./RecipesListContext";

const RecipesListContextTest = () => {
  const { recipes } = useRecipesListContext();
  return (
    <div>
      {recipes.map((recipe) => (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt={recipe.title} />
        </>
      ))}
    </div>
  );
};

export const TestRecipes: RecipeInterface[] = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300",
    title: "Recipe 1",
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300",
    title: "Recipe 2",
  },
];

describe("RecipesListContext.test tests", () => {
  it("should return the list of recipes by props", async () => {
    render(
      <RecipesListProvider recipesList={TestRecipes}>
        <RecipesListContextTest />
      </RecipesListProvider>
    );
    expect(await screen.findAllByRole("heading")).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: "Recipe 1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Recipe 2" })
    ).toBeInTheDocument();
  });

  it("should return default recipes", () => {
    render(<RecipesListContextTest />, { wrapper: RecipesListProvider });
    expect(screen.getAllByRole("heading")).toHaveLength(4);
  });
});
