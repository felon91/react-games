import { victoryLines } from './core';
import Cell from 'src/features/tic-tac-toe/cell';

export const checkWinner = (table: Array<string | null>) => {
  for (const [a, b, c] of victoryLines) {
    if (table[a] && table[a] === table[b] && table[a] === table[c]) {
      return table[a];
    }
  }
  return null;
};
