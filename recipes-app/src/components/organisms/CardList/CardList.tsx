import { useRecipesContext } from "../../../pages/RecipesList/RecipesContext/RecipesContext";
import Card from "../../molecules/Card/Card";

const CardList = () => {
  const { recipes } = useRecipesContext();
  return (
    <div>
      <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Recetas
      </h2>
      <div className="flex flex-col items-center">
        {recipes.map((recipe, key) => (
          <Card key={key} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
