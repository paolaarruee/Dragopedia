import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Loader } from "..";
import { ConfirmModalProps } from "./types";
import * as S from "./components/styled";

export const ConfirmModal = ({
  handleCancel,
  handleConfirm,
  loading,
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
          <Button onClick={handleCancel} disabled={loading}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm} disabled={loading}>
            {loading && (
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
