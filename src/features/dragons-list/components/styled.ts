import { Link } from "react-router-dom";
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

export const ShowDragonDetailsButtonWrapper = styled.div`
  button {
    ${DragonsListActionButton};

    background-color: rgba(0, 0, 255, 0.8);
  }
`;

export const DeleteDragonButtonWrapper = styled.div`
  button {
    ${DragonsListActionButton};

    background-color: rgba(255, 0, 0, 0.7);
  }
`;

export const EditDragonButtonWrapper = styled(Link)`
  button {
    ${DragonsListActionButton};

    background-color: rgba(255, 150, 50, 0.7);
  }
`;

export const DragonHistoryCellWrapper = styled.span`
  display: block;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DragonActionsCellWrapper = styled.span`
  display: flex;
  justify-content: flex-end;

  > *:not(:first-child) {
    margin-left: 16px;
  }
`;
