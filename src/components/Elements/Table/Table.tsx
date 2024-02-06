import styled from "styled-components";

const tableRadius: string = "6px";

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  background-color: rgba(255, 254, 235, .8);
`;

export const TableBody = styled.tbody`
  background-color: rgba(255, 254, 235, .8);
`;

export const TableRow = styled.tr`
  &:last-of-type {
    td {
      &:first-of-type {
        border-bottom-left-radius: ${tableRadius};
      }

      &:last-of-type {
        border-bottom-right-radius: ${tableRadius};
      }
    }
  }
`;

export const TableHeadCell = styled.th`
  text-align: left;
  padding: 32px;

  &:first-of-type {
    border-top-left-radius: ${tableRadius};
  }

  &:last-of-type {
    border-top-right-radius: ${tableRadius};
  }
`;

export const TableBodyCell = styled.td`
  padding: 16px 32px;
`;
