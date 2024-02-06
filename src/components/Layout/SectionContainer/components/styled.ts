import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgba(255, 254, 235, 0.85);
  border-radius: 8px;
  overflow-y: auto;
`;

export const SectionTitle = styled.h1`
  margin: 0;
  font-family: "Enchanted Land", "Montserrat", sans-serif;
  font-size: 64px;
  letter-spacing: 4px;
  align-self: flex-start;
  user-select: none;
`;

export const SectionTitleWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 32px 48px;
  background-color: #fffeeb;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const SectionContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: auto;

  @media (max-width: 1120px) {
    padding: 0;
  }
`;
