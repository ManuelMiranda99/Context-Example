import { createContext, FC, useContext, useEffect, useState } from "react";
import { recipesData } from "../../../shared/constants/recipes";
import {
  RecipesContextInterface,
  RecipesProviderProps,
} from "../../../shared/interfaces/Contexts.interface";
import { Recipe } from "../../../shared/interfaces/Recipe.interface";

const RecipesContext = createContext<RecipesContextInterface>(undefined!);

export const useRecipesContext = () => {
  return useContext(RecipesContext);
};

export const RecipesProvider: FC<RecipesProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
