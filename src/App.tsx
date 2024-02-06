import { RouterProvider } from "react-router-dom";

import Navbar from "./layouts/navbar";
import RouterConfig from "./routes";
import GlobalStyle from "./global-styles";
import MainContainer from "./layouts/main-container";

export const App = () => (
  <>
    <GlobalStyle />

    {false && <Navbar />}

    <MainContainer loggedIn={false}>
      <RouterProvider router={RouterConfig} />
    </MainContainer>
  </>
);

export default App;
