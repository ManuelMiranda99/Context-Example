import { FC } from "react";
import { ButtonProps } from "../../../shared/interfaces/Button.interface";

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
