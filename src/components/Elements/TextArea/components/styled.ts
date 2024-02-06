import styled from "styled-components";

import { BaseInput, BaseInputWrapper, BaseLabel } from "@/styles";

export const TextArea = styled.textarea`
  ${BaseInput}
  
  resize: none;
`;

export const Label = styled.label`
  ${BaseLabel}
`;

export const TextAreaWrapper = styled.div`
  ${BaseInputWrapper}
`;
