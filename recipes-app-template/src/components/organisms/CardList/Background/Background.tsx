import { FC } from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="transition-all bg-white dark:bg-gray-400">{children}</div>
  );
};

export default Background;
