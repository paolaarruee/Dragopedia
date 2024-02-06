import { useState } from "react";

import { MenuItem, UseNavbarParams, UseNavbarReturn } from "../types";

export const useNavbar = ({
  handleLogout,
}: UseNavbarParams): UseNavbarReturn => {
  const [showingBurgerMenu, setShowingBurgerMenu] = useState<boolean>(false);

  const toggleBurgerMenu = () => setShowingBurgerMenu(!showingBurgerMenu);

  const menuItems: MenuItem[] = [
    {
      label: "Início",
      params: { to: "/inicio", onClick: () => setShowingBurgerMenu(false) },
    },
    {
      label: "Dragões",
      params: { to: "/dragoes", onClick: () => setShowingBurgerMenu(false) },
    },
    {
      label: "Sair",
      params: { to: "#", onClick: handleLogout },
    },
  ];

  return {
    showingBurgerMenu,
    toggleBurgerMenu,
    menuItems,
  };
};