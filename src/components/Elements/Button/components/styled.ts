import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1d504c;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fffeeb;
  border: none;
  border-radius: 4px;
  transition: 100ms ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(130%);
    cursor: pointer;
  }

  &:active:not(:disabled) {
    filter: brightness(110%);
  }

  &:disabled {
    background-color: #e4e4e4;
    color: #c5c5c5;
  }
`;

export const ButtonLoader = styled.div`
  > span {
    border-left-color: #fffeeb;
  }

  margin-right: 16px;
`;
