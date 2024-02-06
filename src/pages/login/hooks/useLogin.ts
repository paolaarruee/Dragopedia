import { ChangeEvent, FormEvent, useState } from "react";

import { UseLoginReturn } from "../types";
import { doFakeLogin } from "../api/login";

export const useLogin = (): UseLoginReturn => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const invalidForm = !username.length || !password.length;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    doFakeLogin({ username, password }).then(
      (res) => alert("AUTENTICADO COM SUCESSO"),
      (err) => alert(alert("USUÁRIO INCORRETO OU INEXISTENTE")),
    );
  };

  const handleUsernameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => setUsername(value);

  const handlePasswordChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => setPassword(value);

  return {
    handleSubmit,
    invalidForm,
    handleUsernameChange,
    handlePasswordChange,
  };
};
