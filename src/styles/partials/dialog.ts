import { css } from "styled-components";

export const BaseBackdrop = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const BaseDialog = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fffeeb;
  padding: 24px;
  font-weight: 600;
  font-size: 22px;
  border-radius: 8px;
  text-align: center;
`;

export const BaseDialogBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BaseDialogFooter = css`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: auto;

  > *:not(:first-of-type) {
    margin-left: 16px;
  }
`;

export const BaseDialogIcon = css`
  margin-bottom: 28px;

  svg {
    font-size: 64px;

    path {
      color: orange;
    }
  }
`;
