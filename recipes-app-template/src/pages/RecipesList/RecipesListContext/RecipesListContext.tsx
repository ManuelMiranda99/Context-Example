import { createContext, FC, useContext, useEffect, useState } from "react";
import { recipesData } from "../../../shared/constants/recipes";
import { RecipeInterface } from "../../../shared/interfaces/RecipeInterface";

interface IRecipesListContext {
  recipes: RecipeInterface[];
}

const RecipesListContext = createContext<IRecipesListContext>(undefined!);

export const useRecipesListContext = () => useContext(RecipesListContext);

interface IRecipesListProviderProps {
  children: React.ReactNode;
  recipesList?: RecipeInterface[];
}

export const RecipesListProvider: FC<IRecipesListProviderProps> = ({
  children,
  recipesList = [],
}) => {
  const [recipes, setRecipes] = useState<RecipeInterface[]>(recipesList);

  useEffect(() => {
    try {
      if (recipesList.length)
        throw new Error("RecipesListProvider: recipesList is not empty");
      setRecipes(recipesData);
    } catch (error) {}
  }, [recipesList]);

  return (
    <RecipesListContext.Provider value={{ recipes }}>
      {children}
    </RecipesListContext.Provider>
  );
};
