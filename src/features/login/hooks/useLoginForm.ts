import { ChangeEvent, FormEvent, useState } from "react";

import { UseLoginFormReturn } from "../types";
import { AuthContextData, useAuth } from "@/providers/auth";

export const useLoginForm = (): UseLoginFormReturn => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleLogin }: AuthContextData = useAuth();

  const disabledSubmit = !username.length || !password.length || isLoading;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setIsLoading(true);

    handleLogin({ username, password })
      .then()
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
