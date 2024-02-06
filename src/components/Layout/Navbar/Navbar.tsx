import { Link } from "react-router-dom";

import * as S from "./styled";
import { AuthContextData, useAuth } from "@/providers/auth";

export const Navbar = () => {
  const { handleLogout }: AuthContextData = useAuth();

  return (
    <S.NavbarContainer>
      <S.Logo>Logo</S.Logo>

      <S.Menu>
        <S.MenuItem>
          <Link to="/home">Início</Link>
        </S.MenuItem>

        <S.MenuItem>
          <Link to="/lista-dragoes">Dragões</Link>
        </S.MenuItem>

        <S.MenuItem onClick={handleLogout}>Sair</S.MenuItem>
      </S.Menu>
    </S.NavbarContainer>
  );
};

export default Navbar;
