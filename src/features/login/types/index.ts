export type LoginCredentials = {
  username: string;
  password: string;
};

export type UseLoginParams = {
  credentials: LoginCredentials;
};

export type UseLoginReturn = {
    doLogin: (credentials: LoginCredentials) => void;
};
