import styled from "styled-components";

export const NewDragonFormContainer = styled.form`
  width: 100%;
  min-height: 100%;
  align-self: flex-start;
  background-color: #fffeeb;
  border-radius: 6px;
  padding: 24px;
`;

export const NewDragonFieldWrapper = styled.div`
  width: 400px;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const NewDragonActionButtons = styled.div`
  display: flex;
  width: 400px;
  margin-top: 64px;

  @media (max-width: 490px) {
    width: 100%;
  }

  > *:not(:first-child) {
    margin-left: 32px;
  }
`;
