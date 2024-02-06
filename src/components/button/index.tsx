import * as S from "./styled";
import { ButtonProps } from "./types";

export const Button = ({ label, onClick }: ButtonProps) => (
  <S.Button onClick={onClick}>{label}</S.Button>
);

export default Button;
