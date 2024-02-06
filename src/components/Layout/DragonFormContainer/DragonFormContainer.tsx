import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Input, TextArea } from "@/components/Elements";
import { DragonFormContainerProps } from ".";
import * as S from "./components";
import { DragonStory } from "@/types";

export const DragonFormContainer = ({
  handleFormSubmit,
  name,
  type,
  disabledSubmit,
  isLoading,
  storiesList,
  handleNameChange,
  handleTypeChange,
  handleStoryDelete,
  handleStoryNameChange,
  handleStoryDescriptionChange,
  handleNewStory,
  handleFormReset,
}: DragonFormContainerProps) => (
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
);
