import { Link } from "react-router-dom";

import * as S from "./styled";
import { AuthContextData, useAuth } from "@/providers/auth";
import { useNavbar } from "./hooks/useNavbar";
import { MenuItem } from "./types";

export const Navbar = () => {
  const { handleLogout }: AuthContextData = useAuth();
  const { showingBurgerMenu, toggleBurgerMenu, menuItems } = useNavbar({
    handleLogout,
  });

  return (
    <S.NavbarWrapper>
      <S.NavbarContainer>
        <S.NavbarLogo>
          <S.NavbarLogoImage src="src/assets/images/logo.png" />
          <S.NavbarLogoText>Dragopédia</S.NavbarLogoText>
        </S.NavbarLogo>

        <S.Menu>
          {menuItems.map(({ label, params }: MenuItem) => (
            <S.DefaultMenuItem>
              <Link {...params}>{label}</Link>
            </S.DefaultMenuItem>
          ))}
        </S.Menu>

        <S.BurgerMenu onClick={toggleBurgerMenu}>
          <S.BurgerMenuIcon>
            <S.BurgerMenuLine />
            <S.BurgerMenuLine />
            <S.BurgerMenuLine />
          </S.BurgerMenuIcon>
        </S.BurgerMenu>
      </S.NavbarContainer>

      {showingBurgerMenu && (
        <S.BurgerMenuOptions>
          {menuItems.map(({ label, params }: MenuItem) => (
            <S.BurgerMenuItem>
              <Link {...params}>{label}</Link>
            </S.BurgerMenuItem>
          ))}
        </S.BurgerMenuOptions>
      )}
    </S.NavbarWrapper>
  );
};
