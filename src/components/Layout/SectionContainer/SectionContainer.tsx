import { SectionContainerProps } from "./types";
import * as S from './components/styled';

export const SectionContainer = ({ title, children }: SectionContainerProps) => (
  <S.SectionContainer>
    <S.SectionTitleWrapper>
      <S.SectionTitle>{title}</S.SectionTitle>
    </S.SectionTitleWrapper>

    <S.SectionContentWrapper>{children}</S.SectionContentWrapper>
  </S.SectionContainer>
);
