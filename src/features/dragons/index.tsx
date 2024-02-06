import moment from "moment";

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
} from "@/components/Elements";

export const Dragons = () => {
  const { dragonList, isLoading }: UseDragonListReturn = useDragonList();

  // createdAt: string;
  // name: string;
  // type: string;
  // histories: string;
  // id: string;
  // data: DragonExtraData;

  return (
    <S.DragonsContainer>
      {false && (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Data de criação</TableHeadCell>
              <TableHeadCell>Nome</TableHeadCell>
              <TableHeadCell>Tipo</TableHeadCell>
              <TableHeadCell>Histórias</TableHeadCell>
              <TableHeadCell>Identificador</TableHeadCell>
              <TableHeadCell>Dados adicionais</TableHeadCell>
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
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}

      {true && <Loader size="100px" />}
    </S.DragonsContainer>
  );
};
