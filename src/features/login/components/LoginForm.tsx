import { FieldArea, Button } from "@/components/Elements";
import { useLoginForm } from "../hooks/useLoginForm";
import * as S from "./styled";

export const LoginForm = () => {
  const {
    handleSubmit,
    disabledSubmit,
    loginError,
    handleUsernameChange,
    handlePasswordChange,
  } = useLoginForm();

  return (
    <S.LoginFormArea onSubmit={handleSubmit}>
      <S.LoginFormAreaLogo>
        <S.LoginFormAreaLogoImage
          src="src/assets/images/logo.png"
          alt="Dragopédia Logo Image"
        />
        <S.LoginFormAreaLogoText>Dragopédia</S.LoginFormAreaLogoText>
      </S.LoginFormAreaLogo>

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

        {loginError && (
          <S.LoginFormAreaFieldsWrapperErrorMessage>
            Usuário ou senha inválidos!
          </S.LoginFormAreaFieldsWrapperErrorMessage>
        )}
      </S.LoginFormAreaFieldsWrapper>

      <Button type="submit" disabled={disabledSubmit}>
        Entrar
      </Button>
    </S.LoginFormArea>
  );
};
