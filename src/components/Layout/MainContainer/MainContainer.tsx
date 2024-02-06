import { Navigate, Outlet } from "react-router-dom";

import { Navbar } from "..";
import * as S from "./styled";
import { AuthContextData, useAuth } from "@/providers/auth";

export const MainContainer = () => {
  const { loggedIn }: AuthContextData = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <S.MainWrapper>
      <Navbar />

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default MainContainer;
