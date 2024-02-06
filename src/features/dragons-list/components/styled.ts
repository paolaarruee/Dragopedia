import styled from "styled-components";

export const DragonsListContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: flex-start;
  padding: 24px;
  overflow-x: auto;
`;

export const DeleteDragonButtonWrapper = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    padding: 0;
  }
`;

export const DragonHistoryCell = styled.span`
  display: block;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
