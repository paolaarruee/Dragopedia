import { RouterProvider } from "react-router-dom";

import { GlobalStyle } from "@/styles";
import { AuthProvider } from "@/providers/auth";
import { router } from "./routes";

export const App = () => (
  <>
    <GlobalStyle />

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
