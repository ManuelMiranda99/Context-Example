import { BackgroundThemes } from "../../components/organisms/Background/BackgroundContext/BackgroundContext";
import { Recipe } from "./Recipe.interface";

export interface UserContextInterface {
  user: string;
  setUser: (user: string) => void;
}

export interface UserProviderProps {
  children: React.ReactNode;
  initialUser?: string;
}

export interface RecipesContextInterface {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

export interface RecipesProviderProps {
  children: React.ReactNode;
}

export interface BackgroundContextInterface {
  theme: BackgroundThemes;
  setTheme: (theme: BackgroundThemes) => void;
}

export interface BackgroundProviderProps {
  children: React.ReactNode;
  initialBackgroundTheme?: BackgroundThemes;
}
