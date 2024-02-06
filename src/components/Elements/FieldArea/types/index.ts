import { ChangeEvent } from "react";

export type FieldAreaProps = {
  label: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
