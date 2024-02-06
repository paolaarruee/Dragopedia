import * as S from "./components";
import { FieldAreaProps } from "./types";

export const FieldArea = ({ label, type, onChange }: FieldAreaProps) => (
  <S.FieldAreaWrapper>
    <S.Input id={label} type={type} placeholder="" onChange={onChange} />
    <S.Label htmlFor={label}>{label}</S.Label>
  </S.FieldAreaWrapper>
);