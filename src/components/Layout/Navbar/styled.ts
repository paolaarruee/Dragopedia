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

  @media (max-width: 760px) {
    margin: 0;
  }

  @media (max-width: 568px) {
    display: none;
  }
`;

export const BurgerMenu = styled.ul`
  display: none;
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 568px) {
    display: initial;
  }
`;

export const BurgerMenuIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 42px;
  width: 48px;
  padding: 12px;
`;

export const BurgerMenuLine = styled.span`
  width: 100%;
  height: 1px;
  background-color: white;
`;

export const BurgerMenuOptions = styled.ul`
  position: absolute;
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
  }

  & {
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    padding-bottom: 4px;
    margin-bottom: -5px;
    transition: 0.2s ease-in-out;
  }
`;

export const DefaultMenuItem = styled.li`
  ${BaseMenuItem}

  &, > a {
    color: white;
  }

  &:hover {
    border-bottom-color: white;
  }

  &:not(:first-of-type) {
    margin-left: 56px;
  }

  &:last-of-type {
    margin-left: auto;
  }
`;

export const BurgerMenuItem = styled.li`
  ${BaseMenuItem}

  width: fit-content;

  &:hover {
    border-bottom-color: #1d504c;
  }

  &:not(:first-of-type) {
    margin-top: 32px;
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
