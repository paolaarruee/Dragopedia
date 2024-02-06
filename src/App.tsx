import { RouterProvider } from "react-router-dom";

import { Navbar, MainContainer } from "@/components/Layout";
import { RouterConfig } from "@/routes";
import { GlobalStyle } from "@/styles";

export const App = () => (
  <>
    <GlobalStyle />

    {false && <Navbar />}

    <MainContainer loggedIn={false}>
      <RouterProvider router={RouterConfig} />
    </MainContainer>
  </>
);
