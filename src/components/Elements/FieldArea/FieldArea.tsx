import * as S from "./components";
import { FieldAreaProps } from "./types";

export const FieldArea = ({ label, type, value, onChange }: FieldAreaProps) => (
  <S.FieldAreaWrapper>
    <S.Input id={label} type={type} placeholder="" onChange={onChange} value={value} />
    <S.Label htmlFor={label}>{label}</S.Label>
  </S.FieldAreaWrapper>
);