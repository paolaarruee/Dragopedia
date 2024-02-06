import { ChangeEvent } from "react";

export interface TextAreaProps {
  label: string;
  cols?: number;
  rows?: number;
  value?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
