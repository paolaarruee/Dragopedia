import { UserCredentials } from "@/types";
import { authenticateUser } from "@/utils/fakeDatabase";

const FAKE_DELAY_TIME = 1000;

export const doFakeLogin = (credentials: UserCredentials): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const userExists: boolean = authenticateUser(credentials);

      if (!userExists) {
        reject();
      }

      resolve();
    }, FAKE_DELAY_TIME);
  });

