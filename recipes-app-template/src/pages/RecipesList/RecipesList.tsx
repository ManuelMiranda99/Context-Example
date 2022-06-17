import Navbar from "../../components/molecules/Navbar/Navbar";
import CardList from "../../components/organisms/CardList/CardList";
import { RecipesListProvider } from "./RecipesListContext/RecipesListContext";

const RecipesList = () => {
  return (
    <>
      <Navbar />
      <RecipesListProvider>
        <CardList />
      </RecipesListProvider>
    </>
  );
};

export default RecipesList;
