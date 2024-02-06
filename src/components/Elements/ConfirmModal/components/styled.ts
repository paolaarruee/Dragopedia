import styled from "styled-components";

const modalHeight: string = "350px";
const modalWidth: string = "500px";

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Dialog = styled.div`
  position: absolute;
  top: calc(50% - ${modalHeight} / 2);
  left: calc(50% - ${modalWidth} / 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${modalHeight};
  width: ${modalWidth};
  background-color: #fffeeb;
  padding: 48px;
  font-weight: 600;
  font-size: 22px;
  border-radius: 8px;
  text-align: center;
`;

export const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;

  > *:not(:first-of-type) {
    margin-left: 16px;
  }
`;

export const DialogIcon = styled.div`
  margin-bottom: 28px;

  svg {
    font-size: 64px;

    path {
      color: orange;
    }
  }
`;
