import Cell from 'src/features/tic-tac-toe/cell';
import type { ReactElement } from 'react';
import React, { useCallback, useState } from 'react';
import { checkWinner } from './utils';
import styles from './style.module.css';

const Table: React.FC = () => {
  const [table, setTable] = useState({
    field: Array.from<null | string>({ length: 9 }).fill(null),
    nextStep: true,
  });
  const winner = checkWinner(table.field);

  const handleClick = useCallback(
    (num: number) => {
      const copyField = [...table.field];

      if (checkWinner(copyField) || copyField[num]) {
        return;
      }

      copyField[num] = table.nextStep ? 'O' : 'X';
      setTable(prevState => ({
        ...prevState,
        field: copyField,
        nextStep: !prevState.nextStep,
      }));
    },
    [table.field, table.nextStep]
  );

  const renderCell = (num: number) => (
    <Cell key={num} onClick={() => handleClick(num)} value={table.field[num]} />
  );

  const fullTable: Array<ReactElement | null> = [];
  let cells: Array<ReactElement | null> = [];

  table.field.reduce((acc, item, index) => {
    cells.push(renderCell(index));
    if (acc % 3 === 0) {
      fullTable.push(
        <div key={`${acc}${index}`} className={styles.row}>
          {cells}
        </div>
      );
      cells = [];
    }
    return acc + 1;
  }, 1);

  return (
    <>
      {winner ? `Победил ${winner}` : `Ходит ${table.nextStep ? 'O' : 'X'}`}
      {fullTable}
    </>
  );
};

export default Table;
