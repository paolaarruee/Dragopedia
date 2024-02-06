import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";

import { Button, Input, TextArea } from "@/components/Elements";
import { SectionContainer } from "@/components/Layout";
import * as S from "./components";
import { useNewDragon } from "./hooks";
import { DragonStory } from "@/types";
import { UseNewDragonReturn } from "./types";

export const NewDragon = () => {
  const {
    disabledSubmit,
    name,
    handleTypeChange,
    type,
    storiesList,
    isLoading,
    handleFormReset,
    handleFormSubmit,
    handleNameChange,
    handleStoryNameChange,
    handleStoryDescriptionChange,
    handleNewStory,
    handleStoryDelete,
  }: UseNewDragonReturn = useNewDragon();

  return (
    <SectionContainer title="Cadastrar Dragão">
      <S.NewDragonContainer>
        <S.NewDragonForm onSubmit={handleFormSubmit}>
          <S.NewDragonFieldsRow>
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
          </S.NewDragonFieldsRow>

          <S.NewDragonFieldsRow>
            {storiesList.map(({ title, story }: DragonStory, index: number) => (
              <S.NewDragonStoryFieldsWrapper key={index}>
                <S.NewDragonStoryFieldsDeleteButtonWrapper>
                  <Button type="button" onClick={handleStoryDelete(index)}>
                    <FontAwesomeIcon icon={faClose} />
                  </Button>
                </S.NewDragonStoryFieldsDeleteButtonWrapper>

                <S.NewDragonFieldWrapper>
                  <Input
                    label="Título da História"
                    type="text"
                    onChange={handleStoryNameChange(index)}
                    value={title}
                  />
                </S.NewDragonFieldWrapper>

                <S.NewDragonFieldWrapper>
                  <TextArea
                    label="História"
                    onChange={handleStoryDescriptionChange(index)}
                    value={story}
                    rows={5}
                  ></TextArea>
                </S.NewDragonFieldWrapper>
              </S.NewDragonStoryFieldsWrapper>
            ))}

            <S.NewDragonStoryFieldsWrapper>
              <S.AddStoryButtonWrapper title="Adicionar história">
                <Button type="button" onClick={handleNewStory}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </S.AddStoryButtonWrapper>
            </S.NewDragonStoryFieldsWrapper>
          </S.NewDragonFieldsRow>

          <S.NewDragonActionButtons>
            <Button type="reset" onClick={handleFormReset} label="Limpar" />

            <Button
              type="submit"
              disabled={disabledSubmit}
              label="Cadastrar"
              isLoading={isLoading}
            />
          </S.NewDragonActionButtons>
        </S.NewDragonForm>
      </S.NewDragonContainer>
    </SectionContainer>
  );
};
