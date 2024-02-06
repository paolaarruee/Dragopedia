import { ChangeEvent, FormEvent, useState } from "react";

import { UseLoginReturn } from "../types";

export const useLogin = (): UseLoginReturn => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const invalidForm = !username.length || !password.length;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('LOGIN: ', username, password)
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
