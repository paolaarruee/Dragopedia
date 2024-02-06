import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled from "styled-components";

import GlobalStyle from "./global-styles";
import Login from "./pages/login";
import Home from "./pages/home/components";
import DragonList from "./pages/dragon-list";
import NewDragon from "./pages/new-dragon";
import Navbar from "./components/navbar";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 64px;
`;

export const App = () => (
  <>
    <GlobalStyle />

    <Navbar />

    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listagem" element={<DragonList />} />
          <Route path="/cadastrar" element={<NewDragon />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  </>
);

export default App;
