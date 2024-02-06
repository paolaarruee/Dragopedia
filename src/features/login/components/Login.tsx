import { FieldArea, Button } from "@/components/Elements";
import * as S from "./styled";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { handleSubmit, invalidUsername, invalidPassword, handleUsernameChange, handlePasswordChange } = useLogin();

  return (
    <S.LoginContainer>
      <S.LoginFormArea onSubmit={handleSubmit}>
        <S.LoginFormAreaLogo>Dragopédia</S.LoginFormAreaLogo>

        <S.LoginFormAreaFieldsWrapper>
          <FieldArea label="Nome de usuário" type="text" onChange={handleUsernameChange} />
          <FieldArea label="Senha" type="password" onChange={handlePasswordChange} />
        </S.LoginFormAreaFieldsWrapper>

        <Button type="submit" disabled={invalidUsername || invalidPassword}>Entrar</Button>
      </S.LoginFormArea>
    </S.LoginContainer>
  );
};
