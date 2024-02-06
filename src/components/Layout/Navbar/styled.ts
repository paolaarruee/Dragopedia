import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  height: 70%;
  width: 100%;
  padding: 48px;
  background-image: linear-gradient(to bottom, black, transparent);
`;

export const NavbarContainer = styled.nav`
  display: flex;
  user-select: none;
`;

export const Menu = styled.ul`
  width: 100%;
  height: 42px;
  margin: 0;
  margin-left: 128px;
  display: flex;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  margin: 0;

  &,
  > a {
    text-decoration: none;
    color: white;
    margin-bottom: -8px;
    padding-bottom: 8px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: border 0.1s ease-in-out;

    &:hover {
      border-bottom: 1px solid white;
    }
  }

  &:not(:first-of-type) {
    margin-left: 40px;
  }

  &:last-of-type {
    margin-left: auto;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLogoImage = styled.img`
  width: 42px;
  height: 42px;
`;

export const NavbarLogoText = styled.span`
  margin-left: 16px;
  color: white;
  font-family: "Enchanted Land";
  font-size: 32px;
  letter-spacing: 2px;
`;
