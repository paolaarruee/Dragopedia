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
  position: relative;
  width: 100%;
  padding: 48px;
  background-color: #fffeeb;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const DragonsContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 48px 0;

  overflow-y: auto;

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
