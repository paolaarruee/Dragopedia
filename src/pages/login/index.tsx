import Button from "../../components/button";
import FieldArea from "../../components/field-area";
import * as S from "./components/styled";

export const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginFormArea>
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

export default Login;
