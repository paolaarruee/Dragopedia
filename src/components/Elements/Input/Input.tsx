import * as S from "./components";
import { InputProps } from "./types";

export const Input = ({ label, type, value, onChange }: InputProps) => (
  <S.InputWrapper>
    <S.Input id={label} type={type} placeholder="" onChange={onChange} value={value} />
    <S.Label htmlFor={label}>{label}</S.Label>
  </S.InputWrapper>
);