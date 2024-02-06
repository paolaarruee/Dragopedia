import { FieldArea, Button } from "@/components/Elements";
import * as S from "./styled";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { doLogin } = useLogin();

  return (
    <S.LoginContainer>
      <S.LoginFormArea onSubmit={(a) => console.log(a)}>
        <S.LoginFormAreaLogo>Dragopédia</S.LoginFormAreaLogo>

        <S.LoginFormAreaFieldsWrapper>
          <FieldArea label="Nome de usuário" type="text" />
          <FieldArea label="Senha" type="password" />
        </S.LoginFormAreaFieldsWrapper>

        <Button label="Entrar" onClick={() => alert("Login action")} />
      </S.LoginFormArea>
    </S.LoginContainer>
  );
};
