import styled from "styled-components";

export const NewDragonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-self: flex-start;
  background-color: #fffeeb;
  border-radius: 6px;
  padding: 24px;
`;

export const NewDragonForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const NewDragonActionButtons = styled.div`
  display: flex;
  width: 400px;
  padding-top: 24px;
  margin-top: auto;

  @media (max-width: 670px) {
    width: 100%;
  }

  > *:not(:first-child) {
    margin-left: 32px;
  }
`;

export const NewDragonFieldsRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:not(:first-of-type) {
    margin-top: 48px;
  }

  > * {
    margin-right: 24px;
  }

  @media (max-width: 993px) {
    > * {
      margin: 0;
      margin-top: 24px;
    }
  }
`;

export const NewDragonStoryFieldsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  > *:not(:first-child) {
    margin-top: 12px;
  }

  @media (max-width: 993px) {
    width: 100%;
  }
`;

export const NewDragonStoryFieldsDeleteButtonWrapper = styled.div`
  position: absolute;
  z-index: 101;
  top: -6px;
  right: -6px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: 14px;
    border-radius: 50%;
  }
`;

export const NewDragonFieldColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewDragonFieldWrapper = styled.div`
  width: 400px;

  @media (max-width: 993px) {
    width: 100%;
  }
`;

export const AddStoryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 190px;
  border: 6px dashed rgba(29, 80, 76, 0.6);
  border-radius: 4px;

  @media (max-width: 993px) {
    width: 100%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    padding: 0;
  }
`;
