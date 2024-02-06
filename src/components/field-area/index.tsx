import * as S from "./styled";
import { FieldAreaProps } from "./types";

export const FieldArea = ({ label }: FieldAreaProps) => (
  <>
    <S.Label htmlFor={label}>{label}</S.Label>
    <S.Input id={label} />
  </>
);

export default FieldArea;
