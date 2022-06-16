import { FC } from "react";
import { InputProps } from "../../../shared/interfaces/InputProps.interface";

const Input: FC<InputProps> = ({
  placeholder,
  type,
  onChange,
  position = "TOP",
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-400 rounded-none appearance-none rounded-${
        position === "TOP" ? "t" : "b"
      }-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
    />
  );
};

export default Input;
