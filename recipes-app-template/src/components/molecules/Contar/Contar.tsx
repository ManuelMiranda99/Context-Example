import Button from "../../atoms/Button/Button";
import { useContarState } from "./useContarState/useContarState";

const Contar = () => {
  const { handleCount, value } = useContarState();
  return (
    <>
      <h1>{value}</h1>
      <Button text="Contar" onClick={handleCount} />
    </>
  );
};
