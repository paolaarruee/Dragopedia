import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useDragon } from "./hooks";
import * as S from "./components";
import { UseDragonReturn } from "./types";
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
import { DragonDetailsModal } from "./components";
import { Dragon } from "@/types";

export const DragonsList = () => {
  const {
    dragonList,
    isFetching,
    isDeleting,
    toShowDetailsId,
    showingConfirmModal,
    showingDetailsModal,
    closeConfirmModal,
    closeDetailsModal,
    confirmDelete,
    getStoriesFullText,
    handleDelete,
    handleShowDetails,
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

      {showingDetailsModal && (
        <DragonDetailsModal
          dragonId={toShowDetailsId}
          handleClose={closeDetailsModal}
        />
      )}

      <SectionContainer title="Lista de Dragões">
        <>
          {!isFetching && (
            <S.DragonsListContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadCell>Data de criação</TableHeadCell>
                    <TableHeadCell>Nome</TableHeadCell>
                    <TableHeadCell>Tipo</TableHeadCell>
                    <TableHeadCell>Histórias</TableHeadCell>
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
                          <S.DragonHistoryCellWrapper
                            title={getStoriesFullText(histories)}
                          >
                            {getStoriesFullText(histories)}
                          </S.DragonHistoryCellWrapper>
                        </TableBodyCell>

                        <TableBodyCell>
                          <S.DragonActionsCellWrapper>
                            <S.ShowDragonDetailsButtonWrapper title="Detalhes">
                              <Button
                                type="button"
                                onClick={handleShowDetails(id)}
                              >
                                <FontAwesomeIcon icon={faInfo} />
                              </Button>
                            </S.ShowDragonDetailsButtonWrapper>

                            <S.EditDragonButtonWrapper
                              to={`/editar-dragao/${id}`}
                              title="Editar"
                            >
                              <Button type="button">
                                <FontAwesomeIcon icon={faEdit} />
                              </Button>
                            </S.EditDragonButtonWrapper>

                            <S.DeleteDragonButtonWrapper title="Excluir">
                              <Button type="button" onClick={handleDelete(id)}>
                                <FontAwesomeIcon icon={faTrash} />
                              </Button>
                            </S.DeleteDragonButtonWrapper>
                          </S.DragonActionsCellWrapper>
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

          {isFetching && <Loader size="100px" />}
        </>
      </SectionContainer>
    </>
  );
};
