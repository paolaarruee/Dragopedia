import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url("src/assets/images/default-background.jpg");
  background-size: cover;
`;

export const GradientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, black, transparent);
`;

export const ContentWrapper = styled.div`
  /* background: red; */
  flex: 1;
  padding: 72px;
`;
