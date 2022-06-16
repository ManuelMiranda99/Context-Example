import Navbar from "../../components/molecules/Navbar/Navbar";
import CardList from "../../components/organisms/CardList/CardList";
import { RecipesProvider } from "./RecipesContext/RecipesContext";

const RecipesList = () => {
  return (
    <RecipesProvider>
      <Navbar />
      <CardList />
    </RecipesProvider>
  );
};

export default RecipesList;
