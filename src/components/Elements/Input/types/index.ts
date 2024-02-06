import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  type: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
