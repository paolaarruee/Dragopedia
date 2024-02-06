import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "..";
import { ConfirmModalProps } from "./types";
import * as S from "./components";

export const ConfirmModal = ({
  handleCancel,
  handleConfirm,
  isLoading,
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
          <Button
            label="Cancelar"
            type="button"
            disabled={isLoading}
            onClick={handleCancel}
          />

          <Button
            label="Confirmar"
            type="button"
            disabled={isLoading}
            onClick={handleConfirm}
            isLoading={isLoading}
          />
        </S.DialogFooter>
      </S.Dialog>
    </S.Backdrop>
  );
};
