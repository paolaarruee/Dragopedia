import * as S from "./styled";

export const Navbar = () => (
  <S.NavbarContainer>
    <S.Logo>Logo</S.Logo>

    <S.Menu>
      <S.MenuItem>Início</S.MenuItem>
      <S.MenuItem>Dragões</S.MenuItem>
    </S.Menu>
  </S.NavbarContainer>
);

export default Navbar;
