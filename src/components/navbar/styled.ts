import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  height: 500px;
  width: 100%;
  padding: 64px;
  background-image: linear-gradient(to bottom, black, transparent);
`;

export const Menu = styled.ul`
  display: flex;
  margin: 0 256px;
  list-style: none;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  margin: 0;
  color: white;

  &:not(:first-of-type) {
    margin-left: 64px;
  }
`;

export const Logo = styled.span``;
