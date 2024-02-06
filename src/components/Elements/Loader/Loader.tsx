import styled, { keyframes } from "styled-components";

import { LoaderProps } from ".";

const SpinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span<LoaderProps>`
  display: block;
  width: ${({ size }) => size || "100px"};
  height: ${({ size }) => size || "100px"};
  border-radius: 50%;
  border: 4px solid rgba(29, 80, 76, 0.2);
  border-left: 4px solid #1d504c;
  animation: ${SpinnerAnimation} 800ms linear infinite;
`;

export const LoaderButtonWrapper = styled.div`
  > span {
    border-left-color: #fffeeb;
  }

  margin-right: 16px;
`;
