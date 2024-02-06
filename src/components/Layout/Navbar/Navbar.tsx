import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { AuthContextData, useAuth } from "@/providers/auth";
import * as S from "./components/styled";
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
            <S.DefaultMenuItem key={label}>
              <Link {...params}>{label}</Link>
            </S.DefaultMenuItem>
          ))}
        </S.Menu>

        <S.BurgerMenu onClick={toggleBurgerMenu}>
          <S.BurgerMenuIcon>
            <FontAwesomeIcon icon={faBars} />
          </S.BurgerMenuIcon>
        </S.BurgerMenu>
      </S.NavbarContainer>

      {showingBurgerMenu && (
        <S.BurgerMenuOptions>
          {menuItems.map(({ label, params }: MenuItem) => (
            <S.BurgerMenuItem key={label}>
              <Link {...params}>{label}</Link>
            </S.BurgerMenuItem>
          ))}
        </S.BurgerMenuOptions>
      )}
    </S.NavbarWrapper>
  );
};
