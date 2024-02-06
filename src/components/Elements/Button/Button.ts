import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: #1d504c;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fffeeb;
  border: none;
  border-radius: 4px;
  transition: 0.1s ease-in-out;

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
