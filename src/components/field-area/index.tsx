import * as S from "./styled";
import { FieldAreaProps } from "./types";

export const FieldArea = ({ label, type }: FieldAreaProps) => (
  <S.FieldAreaWrapper>
    <S.Input id={label} type={type} placeholder=""/>
    <S.Label htmlFor={label}>{label}</S.Label>
  </S.FieldAreaWrapper>
);

export default FieldArea;
