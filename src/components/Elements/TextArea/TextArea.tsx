import { TextAreaProps } from ".";
import * as S from "./components";

export const TextArea = ({
  label,
  value,
  onChange,
  cols,
  rows,
}: TextAreaProps) => (
  <S.TextAreaWrapper>
    <S.TextArea
      id={label}
      placeholder=""
      onChange={onChange}
      value={value}
      cols={cols}
      rows={rows}
    />
    
    <S.Label htmlFor={label}>{label}</S.Label>
  </S.TextAreaWrapper>
);
