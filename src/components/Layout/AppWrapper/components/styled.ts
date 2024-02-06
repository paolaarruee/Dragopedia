import styled from "styled-components";

const navbarSpacing: string = '48px';

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
  padding: calc(72px - ${navbarSpacing}) 72px 72px;
  overflow-y: auto;

  @media (max-width: 1560px) {
   padding: calc(32px - ${navbarSpacing}) 32px 32px; 
  }

  @media (max-width: 550px) {
   padding: 0; 
  }
`;
