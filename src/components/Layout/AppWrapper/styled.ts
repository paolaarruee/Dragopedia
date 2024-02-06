import styled from "styled-components";

export const BackgroundWrapper = styled.main`
  height: 100%;
  width: 100%;
  background-color: black;
  background-image: url("src/assets/images/default-background.jpg");
  background-size: cover;
`;

export const GradientWrapper = styled.div`
  width: 100%;
  height: 40%;
  background-image: linear-gradient(to bottom, black, transparent);
`;

export const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  padding: 0 48px 48px;
  overflow-y: auto;
`;
