import { Navigate, Outlet } from "react-router-dom";

import { Navbar } from "..";
import * as S from "./components";
import { AuthContextData, useAuth } from "@/providers/auth";

export const AppWrapper = () => {
  const { loggedIn }: AuthContextData = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <S.BackgroundWrapper>
      <S.GradientWrapper>
        <S.ContentWrapper>
          <Navbar />

          <S.Container>
            <Outlet />
          </S.Container>
        </S.ContentWrapper>
      </S.GradientWrapper>
    </S.BackgroundWrapper>
  );
};
