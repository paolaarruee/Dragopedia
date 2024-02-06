import { createContext, useContext, useEffect, useState } from "react";

import { UserCredentials } from "@/types";
import { getUserToken, removeUserToken, setUserToken } from "@/lib/auth";
import { login } from "@/features/login/api";

export interface AuthContextData {
  loggedIn: boolean;
  handleLogin: (credentials: UserCredentials) => Promise<void>;
  handleLogout: () => void;
}

interface AuthProviderParams {
  children: JSX.Element;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderParams) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const alreadyLoggedIn: boolean = !!getUserToken();

    if (!alreadyLoggedIn) {
      return;
    }

    setLoggedIn(alreadyLoggedIn);
  }, []);

  const handleLogin = (credentials: UserCredentials) =>
    new Promise<void>((resolve, reject) => {
      login(credentials)
        .then((token: string) => {
          setUserToken(token);
          setLoggedIn(true);
          resolve();
        })
        .catch(() => {
          setLoggedIn(false);
          reject();
        });
    });

  const handleLogout = () => {
    removeUserToken();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextData => {
  const context: AuthContextData = useContext(AuthContext);
  return context;
};
