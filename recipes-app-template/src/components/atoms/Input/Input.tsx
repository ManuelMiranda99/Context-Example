import { FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  position?: "TOP" | "BOTTOM";
}

const Input: FC<InputProps> = ({ placeholder, type, position = "TOP" }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-400 rounded-none appearance-none rounded-${
        position === "TOP" ? "t" : "b"
      }-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
    />
  );
};

export default Input;
