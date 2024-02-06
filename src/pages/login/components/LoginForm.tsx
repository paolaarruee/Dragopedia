import { FieldArea, Button } from "@/components/Elements";
import { useLogin } from "../hooks/useLogin";
import * as S from "./styled";

export const LoginForm = () => {
  const {
    handleSubmit,
    invalidForm,
    handleUsernameChange,
    handlePasswordChange,
  } = useLogin();

  return (
    <S.LoginFormArea onSubmit={handleSubmit}>
      <S.LoginFormAreaLogo>Dragopédia</S.LoginFormAreaLogo>

      <S.LoginFormAreaFieldsWrapper>
        <FieldArea
          label="Nome de usuário"
          type="text"
          onChange={handleUsernameChange}
        />
        <FieldArea
          label="Senha"
          type="password"
          onChange={handlePasswordChange}
        />
      </S.LoginFormAreaFieldsWrapper>

      <Button type="submit" disabled={invalidForm}>
        Entrar
      </Button>
    </S.LoginFormArea>
  );
};
