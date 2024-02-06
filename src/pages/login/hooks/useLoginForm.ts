import { ChangeEvent, FormEvent, useState } from "react";

import { UseLoginFormReturn } from "../types";
import { doFakeLogin } from "../api/login";

export const useLoginForm = (): UseLoginFormReturn => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const disabledSubmit =
    !username.length || !password.length || isLoading;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setIsLoading(true);

    doFakeLogin({ username, password })
      .then(() => alert("AUTENTICADO COM SUCESSO"))
      .catch(() => setLoginError(true))
      .finally(() => setIsLoading(false));
  };

  const handleUsernameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setUsername(value);
    setLoginError(false);
  };

  const handlePasswordChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setPassword(value);
    setLoginError(false);
  };

  return {
    handleSubmit,
    disabledSubmit,
    loginError,
    isLoading,
    handleUsernameChange,
    handlePasswordChange,
  };
};
