import { Navigate } from "react-router-dom";

import { AuthContextData, useAuth } from "@/providers/auth";
import * as S from "./components";
import { LoginForm } from "./components";

export const Login = () => {
  const { loggedIn }: AuthContextData = useAuth();

  if (loggedIn) {
    return <Navigate to="/inicio" />;
  }

  return (
    <S.LoginContainer>
      <LoginForm />
    </S.LoginContainer>
  );
};
