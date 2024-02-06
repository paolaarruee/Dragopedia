import { ChangeEvent, FormEvent } from "react";

export type UseLoginReturn = {
  invalidForm: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
