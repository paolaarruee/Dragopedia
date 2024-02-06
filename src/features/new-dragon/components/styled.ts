import styled from "styled-components";

export const NewDragonFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-self: flex-start;
  background-color: #fffeeb;
  border-radius: 6px;
  padding: 24px;
`;

export const NewDragonFormFieldsWrapper = styled.div`
  flex: 1;
  max-height: 100%;
  overflow-y: auto;
`;

export const NewDragonFieldWrapper = styled.div`
  width: 400px;

  @media (max-width: 670px) {
    width: 100%;
  }

  &:not(:first-of-type) {
    margin-left: 16px;

    @media (max-width: 670px) {
      margin-top: 16px;
      margin-left: 0;
    }
  }
`;

export const NewDragonActionButtonsWrapper = styled.div`
  width: calc(100% + 48px);
  padding: 24px;
  margin: 0 -24px -24px -24px;
  background-color: #fffeeb;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const NewDragonActionButtons = styled.div`
  display: flex;
  width: 400px;

  @media (max-width: 490px) {
    width: 100%;
  }

  > *:not(:first-child) {
    margin-left: 32px;
  }
`;

export const NewDragonFieldRow = styled.div`
  display: flex;

  @media (max-width: 670px) {
    flex-direction: column;
  }

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const AddStoryButtonWrapper = styled.div`
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
