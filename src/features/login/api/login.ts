import { fakeAuthenticate, initializeDatabase } from "@/lib/auth";
import { UserCredentials } from "@/types";

initializeDatabase();

export const login = (credentials: UserCredentials): Promise<string> =>
  fakeAuthenticate(credentials);
