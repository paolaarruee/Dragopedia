import styled from "styled-components";

export const DragonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgba(255, 254, 235, 0.85);
  border-radius: 8px;
  overflow-y: auto;
`;

export const DragonsTitle = styled.h1`
  margin: 0;
  font-family: "Enchanted Land", "Montserrat", sans-serif;
  font-size: 64px;
  letter-spacing: 4px;
  align-self: flex-start;
  user-select: none;
`;

export const DragonsTitleWrapper = styled.div`
  width: 100%;
  padding: 48px;
  background-color: #fffeeb;
`;

export const DragonsContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 48px 0;

  @media (max-width: 1060px) {
    padding: 0;
  }
`;

export const DragonsContent = styled.div`
  width: 100%;
  align-self: flex-start;
  padding-bottom: 48px;
  overflow-x: auto;

  @media (max-width: 1060px) {
    padding: 0;
  }
`;

export const DeleteDragonButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
