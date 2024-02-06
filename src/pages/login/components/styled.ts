import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url("src/assets/images/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const LoginFormArea = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 176px 32px 0 72px;
  height: 100%;
  width: 25%;
  background: #fffeeb;

  &::before {
    content: "";
    position: absolute;
    background-image: url("src/assets/images/login-waves.svg");
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
      margin-top: 56px;
    }
  }

  @media (max-height: 650px) {
    height: 100%;
  }
`;

export const LoginFormAreaFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 128px;
  width: 100%;

  > * + * {
    margin-top: 24px;
  }

  @media (max-width: 800px) {
    margin-top: 24px;
  }
`;

export const LoginFormAreaLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormAreaLogoImage = styled.img`
  width: 90px;
  height: 90px;

  @media (max-width: 950px) {
    width: 70px;
    height: 70px;
  }
`;

export const LoginFormAreaLogoText = styled.h1`
  font-family: "Enchanted Land", sans-serif;
  font-size: 92px;
  letter-spacing: 4px;
  margin: 0;
  margin-left: 16px;
  user-select: none;

  @media (max-width: 950px) {
    font-size: 72px;
  }
`;

export const LoginFormAreaFieldsWrapperErrorMessage = styled.small`
  position: absolute;
  bottom: -32px;
  color: red;
`;
