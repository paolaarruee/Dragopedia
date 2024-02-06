import styled, { css } from "styled-components";

export const NavbarWrapper = styled.nav`
  height: 138px;
  width: 100%;
  padding: 48px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  user-select: none;
`;

export const Menu = styled.ul`
  width: 100%;
  margin-left: 128px;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    margin: 0;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

export const BurgerMenu = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 840px) {
    display: initial;
  }
`;

export const BurgerMenuIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 28px;
`;

export const BurgerMenuOptions = styled.ul`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  top: 138px;
  left: 0;
  width: 100%;
  background-color: #fffeeb;
  padding: 48px;
  height: calc(100% - 138px);
`;

export const BaseMenuItem = css`
  cursor: pointer;
  margin: 0;
  font-weight: 600;

  a {
    text-decoration: none;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    padding-bottom: 4px;
    margin-bottom: -5px;
    transition: 200ms ease-in-out;
  }
`;

export const DefaultMenuItem = styled.li`
  ${BaseMenuItem}

  &, > a {
    color: white;
  }

  &:not(:first-of-type) {
    margin-left: 56px;
  }

  &:last-of-type {
    margin-left: auto;
  }

  a {
    &:hover,
    &.active {
      border-bottom-color: white;
    }
  }
`;

export const BurgerMenuItem = styled.li`
  ${BaseMenuItem}

  width: fit-content;

  &:not(:first-of-type) {
    margin-top: 32px;
  }
  
  a {
    &:hover,
    &.active {
      border-bottom-color: #1d504c;
    }
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
  font-family: "Enchanted Land", "Montserrat", sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
`;
