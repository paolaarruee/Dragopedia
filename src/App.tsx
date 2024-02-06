import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./global-styles";
import Login from "./pages/login";

export const App = () => (
  <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
