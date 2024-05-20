import { POSSIBLE_POSITIONS_RELATIVE_TO_SELECTED_SQUARE } from '@/app/constants';
import { ISquareContext, Colors, PiecePositions } from './types';
import { convertPosition } from './utils';

interface IValidateMoveProps {
  chessboard: ISquareContext[][];
  selectedSquare: ISquareContext;
  playerColor: Colors;
}

export function validateMove({
  chessboard,
  selectedSquare,
  playerColor,
}: IValidateMoveProps): [PiecePositions[], PiecePositions[]] {
  if (!selectedSquare?.piece) {
    console.error('Invalid move: square has no piece!');
    return [[], []];
  }

  const { type, color, isFirstMove } = selectedSquare.piece;

  if (color !== playerColor) {
    console.error(`Invalid Move: you can only move ${playerColor} pieces!`);
    return [[], []];
  }

  const isInsideBoard = (row: number, col: number): boolean => {
    if (chessboard[row]?.[col]) {
      return true;
    }
    return false;
  };

  const checkIfHasPiece = (row: number, col: number): boolean => {
    if (chessboard[row]?.[col]?.piece) {
      return true;
    }
    return false;
  };

  const checkIfPieceIsOfSameColor = (row: number, col: number): boolean => {
    if (chessboard[row]?.[col]?.piece?.color === playerColor) {
      return true;
    }
    return false;
  };

  const {
    position: { row: currRow, col: currCol },
  } = selectedSquare;

  const possibleMoves: PiecePositions[] = [];
  const possibleAttacks: PiecePositions[] = [];
  for (const moves of POSSIBLE_POSITIONS_RELATIVE_TO_SELECTED_SQUARE[type]) {
    for (const { row, col, isFirstMoveRequired, isOnlyToAttack } of moves[
      color
    ]) {
      const possibleRowPosition = currRow + row;
      const possibleColPosition = currCol + col;

      if (!isInsideBoard(possibleRowPosition, possibleColPosition)) continue;

      if (isFirstMoveRequired && !isFirstMove) continue;

      const positionOnChessNotation = convertPosition([
        possibleRowPosition,
        possibleColPosition,
      ]) as PiecePositions;

      const hasPiece = checkIfHasPiece(
        possibleRowPosition,
        possibleColPosition
      );
      const isPieceOfSameColor = checkIfPieceIsOfSameColor(
        possibleRowPosition,
        possibleColPosition
      );

      if (!isOnlyToAttack && !hasPiece) {
        possibleMoves.push(positionOnChessNotation);
      } else if (hasPiece && !isPieceOfSameColor) {
        possibleAttacks.push(positionOnChessNotation);
        break;
      } else {
        break;
      }
    }
  }

  return [possibleMoves, possibleAttacks];
}
