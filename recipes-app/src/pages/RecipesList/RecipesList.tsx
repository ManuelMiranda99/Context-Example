import Input from "../../components/atoms/Input/Input";
import Navbar from "../../components/molecules/Navbar/Navbar";
import CardList from "../../components/organisms/CardList/CardList";

const RecipesList = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center w-2/6 mt-20 ml-72">
        <Input placeholder="Search" type="text" />
      </div>
      <CardList />
    </>
  );
};

export default RecipesList;
