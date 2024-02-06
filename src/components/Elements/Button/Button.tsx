import { Loader } from "..";
import * as S from "./components";
import { ButtonProps } from "./types";

export const Button = ({
  type,
  onClick,
  isLoading,
  disabled,
  label,
  children,
}: ButtonProps) => (
  <S.ButtonWrapper type={type} onClick={onClick} disabled={disabled}>
    {isLoading && (
      <S.ButtonLoader>
        <Loader size="24px" />
      </S.ButtonLoader>
    )}

    {children}

    {label}
  </S.ButtonWrapper>
);
