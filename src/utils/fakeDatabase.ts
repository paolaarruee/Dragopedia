import { UserCredentials } from "@/types";

const STORAGE_USER_LIST_KEY = "registered_users";

export const initializeDatabase = (): void => {
  const toRegisterUser: Array<UserCredentials> = [
    { username: "paola", password: "paola123" },
  ];
  
  const stringifiedToRegisterUser: string = JSON.stringify(toRegisterUser);

  localStorage.setItem(STORAGE_USER_LIST_KEY, stringifiedToRegisterUser);
};

export const authenticateUser = (toAuthUser: UserCredentials): boolean => {
  const stringifiedUserList: string | null = localStorage.getItem(
    STORAGE_USER_LIST_KEY
  );

  const userList: Array<UserCredentials> =
    (stringifiedUserList && JSON.parse(stringifiedUserList)) ?? [];

  const foundUser: UserCredentials | undefined = userList.find(
    ({ username, password }: UserCredentials) =>
      username === toAuthUser.username && password === toAuthUser.password
  );

  return !!foundUser;
};
