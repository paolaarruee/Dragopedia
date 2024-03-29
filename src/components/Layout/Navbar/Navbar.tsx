import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { AuthContextData, useAuth } from "@/providers/auth";
import * as S from "./components";
import { useNavbar } from "./hooks";
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
              <NavLink {...params}>{label}</NavLink>
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
              <NavLink {...params}>{label}</NavLink>
            </S.BurgerMenuItem>
          ))}
        </S.BurgerMenuOptions>
      )}
    </S.NavbarWrapper>
  );
};
