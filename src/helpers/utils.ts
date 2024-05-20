import { PiecePositions } from './types';

type IConvertPosition = [number, number] | PiecePositions;

export function convertPosition(position: IConvertPosition): IConvertPosition {
  const relation = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  if (position instanceof Array) {
    const [row, col] = position;
    const groupedPosition =
      `${relation[row]}${col + 1}` as keyof typeof PiecePositions;
    const positionOnChessNotation = PiecePositions[groupedPosition];

    return positionOnChessNotation;
  }

  return [relation.indexOf(position[0]), Number(position[1]) - 1];
}
