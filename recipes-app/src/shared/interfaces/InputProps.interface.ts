import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  position?: "TOP" | "BOTTOM";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
