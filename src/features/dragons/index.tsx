import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { useDragonList } from "./hooks/useDragonList";
import * as S from "./components/styled";
import { Dragon, UseDragonListReturn } from "./types";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableBodyCell,
  TableRow,
  Loader,
  IconButton,
} from "@/components/Elements";

export const Dragons = () => {
  const { dragonList, isLoading }: UseDragonListReturn = useDragonList();

  return (
    <S.DragonsContainer>
      <S.DragonsTitleWrapper>
        <S.DragonsTitle>Lista de Dragões</S.DragonsTitle>
      </S.DragonsTitleWrapper>

      <S.DragonsContentWrapper>
        {!isLoading && (
          <S.DragonsContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Data de criação</TableHeadCell>
                  <TableHeadCell>Nome</TableHeadCell>
                  <TableHeadCell>Tipo</TableHeadCell>
                  <TableHeadCell>Histórias</TableHeadCell>
                  <TableHeadCell>Identificador</TableHeadCell>
                  <TableHeadCell>Dados adicionais</TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dragonList.map(
                  ({ createdAt, name, type, histories, id, data }: Dragon) => (
                    <TableRow key={id}>
                      <TableBodyCell>
                        {moment(createdAt).format("DD/MM/yyyy")}
                      </TableBodyCell>
                      <TableBodyCell>{name}</TableBodyCell>
                      <TableBodyCell>{type}</TableBodyCell>
                      <TableBodyCell>{histories}</TableBodyCell>
                      <TableBodyCell>{id}</TableBodyCell>
                      <TableBodyCell>{}</TableBodyCell>
                      <TableBodyCell>
                        <S.DeleteDragonButtonWrapper>
                          <IconButton>
                            <FontAwesomeIcon icon={faTrashCan} />
                          </IconButton>
                        </S.DeleteDragonButtonWrapper>
                      </TableBodyCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </S.DragonsContent>
        )}

        {isLoading && <Loader size="100px" />}
      </S.DragonsContentWrapper>
    </S.DragonsContainer>
  );
};
