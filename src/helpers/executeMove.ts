// DEPRECATED -- REMOVE LATER

// import { cloneDeep } from 'lodash';
// import { IPiece, ISquareContext, PieceTypes } from './types';

// export function executeMove(
//   chessboard: ISquareContext[][],
//   selectedSquare: ISquareContext,
//   previousSelectedSquare: ISquareContext
// ): ISquareContext[][] {
//   const { row, col } = selectedSquare.position;
//   const { row: currentRow, col: currentCol } = previousSelectedSquare.position;

//   const newChessboard = cloneDeep(chessboard);

//   newChessboard[currentRow][currentCol].piece = undefined;
//   newChessboard[row][col].piece = {
//     ...previousSelectedSquare.piece,
//     isFirstMove: false
//   } as IPiece;

//   return newChessboard;
// }

export {};
