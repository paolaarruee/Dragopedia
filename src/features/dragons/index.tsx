import { useDragonList } from "./hooks/useDragonList";
import * as S from "./components/styled";
import { UseDragonListReturn } from "./types";

export const Dragons = () => {
  const { getAllDragons }: UseDragonListReturn = useDragonList();

  return (
    <S.ListContainer>
      Listagem de Dragões
    </S.ListContainer>
  );
};
