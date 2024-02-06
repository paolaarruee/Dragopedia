import { Button, FieldArea, Loader } from "@/components/Elements";
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
        <S.NewDragonFieldWrapper>
          <FieldArea
            label="Nome"
            type="text"
            onChange={handleNameChange}
            value={name}
          />
        </S.NewDragonFieldWrapper>

        <S.NewDragonFieldWrapper>
          <FieldArea
            label="Tipo"
            type="text"
            onChange={handleTypeChange}
            value={type}
          />
        </S.NewDragonFieldWrapper>

        <S.NewDragonFieldWrapper>
          <FieldArea
            label="Título da História"
            type="text"
            onChange={handleStoryNameChange}
            value={storyName}
          />
        </S.NewDragonFieldWrapper>

        <S.NewDragonFieldWrapper>
          <FieldArea
            label="História"
            type="text"
            onChange={handleStoryDescriptionChange}
            value={storyDescription}
          />
        </S.NewDragonFieldWrapper>

        <S.NewDragonActionButtons>
          <Button type="reset" onClick={handleFormReset}>
            Limpar
          </Button>

          <Button type="submit" disabled={disabledSubmit}>
            {isLoading && (
              <S.ButtonLoaderWrapper>
                <Loader size="24px" />
              </S.ButtonLoaderWrapper>
            )}
            Cadastrar
          </Button>
        </S.NewDragonActionButtons>
      </S.NewDragonFormContainer>
    </SectionContainer>
  );
};
