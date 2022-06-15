import { FC } from "react";
import { RecipeInterface } from "../../../shared/interfaces/RecipeInterface";

const Card: FC<RecipeInterface> = ({ description, image, title }) => {
  return (
    <div className="w-3/6 max-w-sm my-3 lg:max-w-full lg:flex">
      <div
        className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        style={{ backgroundImage: `url(${image})` }}
        title="Woman holding a mug"
      ></div>
      <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
        <div className="mb-8">
          <div className="mb-2 text-xl font-bold text-gray-900">{title}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
