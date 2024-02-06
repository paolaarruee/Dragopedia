import { LoginCredentials, UseLoginReturn } from "../types";

export const useLogin = (): UseLoginReturn => {
  const doLogin = (credentials: LoginCredentials): void => {
    console.log(credentials)
  };

  return { doLogin };
};
