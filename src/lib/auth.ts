import { UserCredentials } from "@/types";
import { generateRandomHash } from "@/utils";

const STORAGE_USER_TOKEN_KEY = "user_token";
const STORAGE_USER_LIST_KEY = "registered_users";

export const initializeDatabase = (): void => {
  const toRegisterUser: UserCredentials[] = [
    { username: "paola", password: "paola123" },
  ];

  const stringifiedToRegisterUser: string = JSON.stringify(toRegisterUser);

  localStorage.setItem(STORAGE_USER_LIST_KEY, stringifiedToRegisterUser);
};

export const fakeAuthenticate = (
  toAuthUser: UserCredentials
): Promise<string> => {
  const FAKE_DELAY_TIME = 1000;

  const stringifiedUserList: string | null = localStorage.getItem(
    STORAGE_USER_LIST_KEY
  );

  const userList: UserCredentials[] =
    (stringifiedUserList && JSON.parse(stringifiedUserList)) ?? [];

  const foundUser: UserCredentials | undefined = userList.find(
    ({ username, password }: UserCredentials) =>
      username === toAuthUser.username && password === toAuthUser.password
  );

  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (!foundUser) {
        reject();
        return;
      }

      const randomHash: string = generateRandomHash();

      resolve(randomHash);
    }, FAKE_DELAY_TIME);
  });
};

export const setUserToken = (userToken: string) =>
  localStorage.setItem(STORAGE_USER_TOKEN_KEY, userToken);

export const removeUserToken = () =>
  localStorage.removeItem(STORAGE_USER_TOKEN_KEY);

export const getUserToken = () => localStorage.getItem(STORAGE_USER_TOKEN_KEY);
