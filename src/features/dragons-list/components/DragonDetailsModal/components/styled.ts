import styled from "styled-components";

import {
  BaseBackdrop,
  BaseDialog,
  BaseDialogBody,
  BaseDialogFooter,
} from "@/styles/partials/dialog";

export const Backdrop = styled.div`
  ${BaseBackdrop}
`;

export const Dialog = styled.div`
  ${BaseDialog}

  justify-content: initial;
  height: 700px;
  width: 600px;
  overflow: auto;

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-height: 735px) {
    height: 500px;
  }

  @media (max-height: 550px) {
    height: 100%;
  }
`;

export const DialogBody = styled.div`
  ${BaseDialogBody}

  align-items: flex-start;
  padding-bottom: 24px;
`;

export const DialogFooter = styled.div`
  ${BaseDialogFooter}
`;

export const DragonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  &:not(:first-of-type) {
    margin-top: 32px;
  }
`;

export const DragonInfoTitle = styled.h3`
  margin: 0;
  font-size: 19px;
  font-weight: 600;
`;

export const DragonInfoContent = styled.span`
  margin-top: 2px;
  font-size: 14px;
  font-weight: 400;
`;

export const DragonInfoSubtitle = styled.h5`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

export const DragonInfoSubContent = styled.span`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 300;
`;

export const DialogLoaderWrapper = styled.div`
  margin: auto 0;
`;
