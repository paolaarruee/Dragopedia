import styled from "styled-components";

export const DragonsListContainer = styled.div`
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

export const DragonHistoryCell = styled.span`
  display: block;
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
