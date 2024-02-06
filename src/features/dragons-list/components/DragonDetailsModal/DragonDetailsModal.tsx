import { Button, Loader } from "@/components/Elements";
import * as S from "./components";
import { DragonDetailsModalProps, UseDragonDetailsModalReturn } from ".";
import { useDragonDetailsModal } from "./hooks";
import { DragonStory } from "@/types";

export const DragonDetailsModal = ({
  dragonId,
  handleClose,
}: DragonDetailsModalProps) => {
  const { dragonData, isLoading }: UseDragonDetailsModalReturn =
    useDragonDetailsModal({
      dragonId,
    });

  return (
    <S.Backdrop>
      <S.Dialog>
        {!isLoading && (
          <>
            <S.DialogBody>
              <S.DragonInfoWrapper>
                <S.DragonInfoTitle>Data de criação</S.DragonInfoTitle>
                <S.DragonInfoContent>
                  {dragonData.createdAt}
                </S.DragonInfoContent>
              </S.DragonInfoWrapper>

              <S.DragonInfoWrapper>
                <S.DragonInfoTitle>Nome</S.DragonInfoTitle>
                <S.DragonInfoContent>{dragonData.name}</S.DragonInfoContent>
              </S.DragonInfoWrapper>

              <S.DragonInfoWrapper>
                <S.DragonInfoTitle>Tipo</S.DragonInfoTitle>
                <S.DragonInfoContent>{dragonData.type}</S.DragonInfoContent>
              </S.DragonInfoWrapper>

              <S.DragonInfoWrapper>
                <S.DragonInfoTitle>Histórias</S.DragonInfoTitle>
                <S.DragonInfoContent>
                  {dragonData.histories?.map(
                    ({ title, story }: DragonStory, index: number) => (
                      <S.DragonInfoWrapper key={index}>
                        <S.DragonInfoSubtitle>{title}</S.DragonInfoSubtitle>
                        <S.DragonInfoSubContent>{story}</S.DragonInfoSubContent>
                      </S.DragonInfoWrapper>
                    )
                  )}
                </S.DragonInfoContent>
              </S.DragonInfoWrapper>

              <S.DragonInfoWrapper>
                <S.DragonInfoTitle>Identificador</S.DragonInfoTitle>
                <S.DragonInfoContent>{dragonData.id}</S.DragonInfoContent>
              </S.DragonInfoWrapper>
            </S.DialogBody>

            <S.DialogFooter>
              <Button label="Fechar" type="button" onClick={handleClose} />
            </S.DialogFooter>
          </>
        )}

        {isLoading && (
          <S.DialogLoaderWrapper>
            <Loader size="100px" />
          </S.DialogLoaderWrapper>
        )}
      </S.Dialog>
    </S.Backdrop>
  );
};
