import { FC } from "react";
import { BackgroundProvider } from "../../components/organisms/Background/BackgroundContext/BackgroundContext";
import { RecipesProvider } from "../../pages/RecipesList/RecipesContext/RecipesContext";
import { UserProvider } from "../contexts/UserContext";
import { WrapperProps } from "../interfaces/Wrappers.interface";

export const TestWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <UserProvider>
      <BackgroundProvider>
        <RecipesProvider>{children}</RecipesProvider>
      </BackgroundProvider>
    </UserProvider>
  );
};
