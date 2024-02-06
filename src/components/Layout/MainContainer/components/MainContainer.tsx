import * as S from "./styled";
import { MainContainerProps } from "../types";

export const MainContainer = ({ loggedIn, children }: MainContainerProps) => {
  if (!loggedIn) {
    return <S.LoggedOutMainContainer>{children}</S.LoggedOutMainContainer>;
  }

  return <S.LoggedInMainContainer>{children}</S.LoggedInMainContainer>;
};

export default MainContainer;
