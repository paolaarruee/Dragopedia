interface MenuItemParams {
  to: string;
  onClick: () => void;
}

export interface MenuItem {
  label: string;
  params: MenuItemParams;
}

export interface UseNavbarParams {
  handleLogout: () => void;
}

export interface UseNavbarReturn {
  showingBurgerMenu: boolean;
  toggleBurgerMenu: () => void;
  menuItems: MenuItem[];
}
