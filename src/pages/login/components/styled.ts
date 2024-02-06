import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url("assets/img/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
`;

export const LoginFormArea = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  rotate: 0deg;
  background-color: #0b0b34;

  &::before {
    content: '';
    position: absolute;
    border-right: 100vw solid transparent;
    border-bottom: 5vw solid #0b0b34;
    top: -4.9vw;
  }
`;
