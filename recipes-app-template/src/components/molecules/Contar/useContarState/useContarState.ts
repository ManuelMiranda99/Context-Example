import { useState } from "react";

export const useContarState = (initialValue?: number) => {
  const [value, setValue] = useState(initialValue || 0);

  const handleCount = () => {
    setValue(value + 1);
  };

  return {
    value,
    handleCount,
  };
};
