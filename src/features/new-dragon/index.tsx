import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button, Input, TextArea } from "@/components/Elements";
import { SectionContainer } from "@/components/Layout";
import * as S from "./components";
import { useNewDragon } from "./hooks";

export const NewDragon = () => {
  const {
    disabledSubmit,
    handleFormReset,
    handleFormSubmit,
    handleNameChange,
    name,
    handleTypeChange,
    type,
    handleStoryNameChange,
    storyName,
    handleStoryDescriptionChange,
    storyDescription,
    isLoading,
  } = useNewDragon();

  return (
    <SectionContainer title="Cadastrar Dragão">
      <S.NewDragonFormContainer onSubmit={handleFormSubmit}>
        <S.NewDragonFormFieldsWrapper>
          <S.NewDragonFieldRow>
            <S.NewDragonFieldWrapper>
              <Input
                label="Nome"
                type="text"
                onChange={handleNameChange}
                value={name}
              />
            </S.NewDragonFieldWrapper>

            <S.NewDragonFieldWrapper>
              <Input
                label="Tipo"
                type="text"
                onChange={handleTypeChange}
                value={type}
              />
            </S.NewDragonFieldWrapper>
          </S.NewDragonFieldRow>

          <S.NewDragonFieldRow>
            <S.NewDragonFieldWrapper>
              <Input
                label="Título da História"
                type="text"
                onChange={handleStoryNameChange}
                value={storyName}
              />
            </S.NewDragonFieldWrapper>

            <S.NewDragonFieldWrapper>
              <TextArea
                label="História"
                onChange={handleStoryDescriptionChange}
                value={storyDescription}
              ></TextArea>
            </S.NewDragonFieldWrapper>
          </S.NewDragonFieldRow>

          <S.NewDragonFieldRow>
            <S.AddStoryButtonWrapper title="Adicionar história">
              <Button type="button" onClick={() => {}}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </S.AddStoryButtonWrapper>
          </S.NewDragonFieldRow>
        </S.NewDragonFormFieldsWrapper>

        <S.NewDragonActionButtonsWrapper>
          <S.NewDragonActionButtons>
            <Button type="reset" onClick={handleFormReset} label="Limpar" />

            <Button
              type="submit"
              disabled={disabledSubmit}
              label="Cadastrar"
              isLoading={isLoading}
            />
          </S.NewDragonActionButtons>
        </S.NewDragonActionButtonsWrapper>
      </S.NewDragonFormContainer>
    </SectionContainer>
  );
};
