import { ChangeEvent, FormEvent } from "react";

export type UseLoginReturn = {
  invalidUsername: boolean;
  invalidPassword: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
