import styled, { css } from "styled-components";

const baseContainer = css`
  width: 100%;
  height: 100%;
`;

export const LoggedInMainContainer = styled.div`
  ${baseContainer};
  padding: 64px;
`;

export const LoggedOutMainContainer = styled.main`
  ${baseContainer};
`;
