import { recipesData } from "../../../shared/constants/recipes";
import Card from "../../molecules/Card/Card";

const CardList = () => {
  return (
    <div>
      <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Recetas
      </h2>
      <div className="flex flex-col items-center">
        {recipesData.map((recipe, key) => (
          <Card key={key} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
