import { Navigate } from "react-router-dom";

import { AuthContextData, useAuth } from "@/providers/auth";
import { LoginForm } from "./components/LoginForm";
import * as S from "./components/styled";

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
