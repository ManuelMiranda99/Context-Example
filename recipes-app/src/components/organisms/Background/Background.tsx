import { FC } from "react";
import { WrapperProps } from "../../../shared/interfaces/Wrappers.interface";

const Background: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="transition-all bg-white dark:bg-gray-400">{children}</div>
  );
};

export default Background;
