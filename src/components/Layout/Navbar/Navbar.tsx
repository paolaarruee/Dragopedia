import { Link } from "react-router-dom";

import * as S from "./styled";
import { AuthContextData, useAuth } from "@/providers/auth";

export const Navbar = () => {
  const { handleLogout }: AuthContextData = useAuth();

  return (
    <S.NavbarWrapper>
      <S.NavbarContainer>
        <S.NavbarLogo>
          <S.NavbarLogoImage src="src/assets/images/logo.png" />
          <S.NavbarLogoText>Dragopédia</S.NavbarLogoText>
        </S.NavbarLogo>

        <S.Menu>
          <S.MenuItem>
            <Link to="/inicio">Início</Link>
          </S.MenuItem>

          <S.MenuItem>
            <Link to="/lista-dragoes">Dragões</Link>
          </S.MenuItem>

          <S.MenuItem onClick={handleLogout}>Sair</S.MenuItem>
        </S.Menu>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  );
};

export default Navbar;
