// DEPRECATED -- REMOVE LATER

// import { cloneDeep } from 'lodash';
// import { ISquareContext, SquareColors } from './types';

// export function resetBoard(chessboard: ISquareContext[][]): ISquareContext[][] {
//   return cloneDeep(chessboard).map((row) =>
//     row.map((square) => ({
//       ...square,
//       isAttackable: false,
//       isPossibleMove: false,
//       color:
//         (square.position.row + square.position.col) % 2 === 0
//           ? SquareColors.BLACK
//           : SquareColors.WHITE,
//     }))
//   );
// }

export {};
