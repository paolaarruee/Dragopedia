import { ChangeEvent, FormEvent } from "react";

export interface UseLoginFormReturn {
  disabledSubmit: boolean;
  loginError: boolean;
  isLoading: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
