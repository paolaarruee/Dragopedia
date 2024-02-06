import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "..";
import { ConfirmModalProps } from "./types";
import * as S from "./components/styled";

export const ConfirmModal = ({
  handleCancel,
  handleConfirm,
  disableActions
}: ConfirmModalProps) => {
  return (
    <S.Backdrop>
      <S.Dialog>
        <S.DialogBody>
          <S.DialogIcon>
            <FontAwesomeIcon icon={faWarning} />
          </S.DialogIcon>
          Você tem certeza de que deseja executar essa ação?
        </S.DialogBody>
        
        <S.DialogFooter>
          <Button onClick={handleCancel} disabled={disableActions}>Cancelar</Button>
          <Button onClick={handleConfirm} disabled={disableActions}>Confirmar</Button>
        </S.DialogFooter>
      </S.Dialog>
    </S.Backdrop>
  );
};
