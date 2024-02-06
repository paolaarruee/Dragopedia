import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url("assets/img/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const LoginFormArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 176px 32px 0 72px;
  height: 100%;
  width: 20%;
  background: #fffeeb;

  &::before {
    content: "";
    position: absolute;
    background-image: url("assets/img/login-waves.svg");
    top: 0;
    right: -898px;
    height: 100%;
    width: 899px;
  }
`;

export const LoginFormAreaFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  width: 100%;

  > * + * {
    margin-top: 24px;
  }
`;

export const LoginFormAreaLogo = styled.h1`
  font-family: "Enchanted Land", sans-serif;
  font-size: 100px;
  letter-spacing: 4px;
  margin: 0;
  user-select: none;
`;
