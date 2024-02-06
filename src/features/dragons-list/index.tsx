import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useDragon } from "./hooks";
import * as S from "./components";
import { Dragon, UseDragonReturn } from "./types";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableBodyCell,
  TableRow,
  Loader,
  ConfirmModal,
  EmptyTable,
  Button,
} from "@/components/Elements";
import { SectionContainer } from "@/components/Layout";

export const DragonsList = () => {
  const {
    dragonList,
    isLoading,
    isDeleting,
    showingConfirmModal,
    handleDelete,
    closeConfirmModal,
    confirmDelete,
    parseStoryList,
  }: UseDragonReturn = useDragon();

  return (
    <>
      {showingConfirmModal && (
        <ConfirmModal
          handleCancel={closeConfirmModal}
          handleConfirm={confirmDelete}
          isLoading={isDeleting}
        />
      )}

      <SectionContainer title="Lista de Dragões">
        <>
          {!isLoading && (
            <S.DragonsListContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadCell>Data de criação</TableHeadCell>
                    <TableHeadCell>Nome</TableHeadCell>
                    <TableHeadCell>Tipo</TableHeadCell>
                    <TableHeadCell>Histórias</TableHeadCell>
                    <TableHeadCell>Identificador</TableHeadCell>
                    <TableHeadCell></TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dragonList.map(
                    ({ createdAt, name, type, histories, id }: Dragon) => (
                      <TableRow key={id}>
                        <TableBodyCell>
                          {moment(createdAt).format("DD/MM/yyyy")}
                        </TableBodyCell>
                        <TableBodyCell>{name}</TableBodyCell>
                        <TableBodyCell>{type}</TableBodyCell>
                        <TableBodyCell>
                          <S.DragonHistoryCell>
                            {parseStoryList(histories)}
                          </S.DragonHistoryCell>
                        </TableBodyCell>
                        <TableBodyCell>{id}</TableBodyCell>
                        <TableBodyCell>
                          <S.DeleteDragonButtonWrapper title="Excluir">
                            <Button type="button" onClick={handleDelete(id)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </S.DeleteDragonButtonWrapper>
                        </TableBodyCell>
                      </TableRow>
                    )
                  )}

                  {!dragonList.length && (
                    <TableRow>
                      <TableBodyCell colSpan={7}>
                        <EmptyTable>Nenhum dragão cadastado</EmptyTable>
                      </TableBodyCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </S.DragonsListContainer>
          )}

          {isLoading && <Loader size="100px" />}
        </>
      </SectionContainer>
    </>
  );
};
