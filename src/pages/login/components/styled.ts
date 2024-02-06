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

    @media (max-width: 800px) {
      rotate: 90deg;
      top: initial;
      right: initial;
      bottom: -898px;
      width: 899px;
      height: 899px;
    }
  }

  > button {
    margin-top: 72px;
  }

  @media (max-width: 2450px) {
    width: 30%;
  }

  @media (max-width: 1550px) {
    padding-top: 118px;
    width: 40%;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    height: 60%;
    width: 100%;
    padding: 48px 32px;
  }

  @media (max-height: 820px) and (max-width: 800px) {
    height: 70%;

    > button {
      margin-top: 32px;
    }
  }

  @media (max-height: 650px) {
    height: 100%;
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

  @media (max-width: 800px) {
    margin-top: 64px;
  }
`;

export const LoginFormAreaLogo = styled.h1`
  font-family: "Enchanted Land", sans-serif;
  font-size: 92px;
  letter-spacing: 4px;
  margin: 0;
  user-select: none;
`;
