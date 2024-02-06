import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Loader } from "..";
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
          <Button type="button" onClick={handleCancel} disabled={isLoading}>
            Cancelar
          </Button>
          
          <Button type="button" onClick={handleConfirm} disabled={isLoading}>
            {isLoading && (
              <S.DialogLoaderWrapper>
                <Loader size="24px" />
              </S.DialogLoaderWrapper>
            )}
            Confirmar
          </Button>
        </S.DialogFooter>
      </S.Dialog>
    </S.Backdrop>
  );
};
