import { Button } from "..";
import * as S from "./components/styled";

export const ConfirmModal = () => {
  return (
    <S.Backdrop>
      <S.Dialog>
        <S.DialogBody>
            Você tem certeza de que deseja executar essa ação?
        </S.DialogBody>
        <S.DialogFooter>
            <Button>Cancelar</Button>
            <Button>Confirmar</Button>
        </S.DialogFooter>
      </S.Dialog>
    </S.Backdrop>
  );
};
