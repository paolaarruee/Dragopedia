import styled, { css } from "styled-components";

const DragonsListActionButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
`;

export const DragonsListContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: flex-start;
  padding: 24px;
  overflow-x: auto;
`;

export const ShowDetailsDragonButtonWrapper = styled.div`
  button {
    ${DragonsListActionButton};

    background-color: rgba(0, 0, 255, .8);
  }
`;

export const DeleteDragonButtonWrapper = styled.div`
  button {
    ${DragonsListActionButton};

    background-color: rgba(255, 0, 0, .7);
  }
`;

export const DragonHistoryCell = styled.span`
  display: block;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
