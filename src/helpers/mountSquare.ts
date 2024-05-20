import {
  ISquareContext,
  PieceTypes,
  Colors,
  PiecePositions,
  SquareColors,
} from './types';

const INITIAL_PAWN_POSITIONS = {
  type: PieceTypes.PAWN,
  WHITE: ['0-6', '1-6', '2-6', '3-6', '4-6', '5-6', '6-6', '7-6'],
  BLACK: ['0-1', '1-1', '2-1', '3-1', '4-1', '5-1', '6-1', '7-1'],
};

const INITIAL_ROOK_POSITIONS = {
  type: PieceTypes.ROOK,
  WHITE: ['0-7', '7-7'],
  BLACK: ['0-0', '7-0'],
};

const INITIAL_BISHOP_POSITIONS = {
  type: PieceTypes.BISHOP,
  WHITE: ['1-7', '6-7'],
  BLACK: ['1-0', '6-0'],
};

const INITIAL_KNIGHT_POSITIONS = {
  type: PieceTypes.KNIGHT,
  WHITE: ['2-7', '5-7'],
  BLACK: ['2-0', '5-0'],
};

const INITIAL_QUEEN_POSITIONS = {
  type: PieceTypes.QUEEN,
  WHITE: ['3-7'],
  BLACK: ['3-0'],
};

const INITIAL_KING_POSITIONS = {
  type: PieceTypes.KING,
  WHITE: ['4-7'],
  BLACK: ['4-0'],
};

const relation = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export function mountSquare(rowIdx: number, colIdx: number): ISquareContext {
  const key = `${rowIdx}-${colIdx}`;
  const position =
    `${relation[rowIdx]}${colIdx + 1}` as keyof typeof PiecePositions;
  const chessNotationPosition = PiecePositions[position];

  const getPieceInfo = () => {
    const INITIAL_PIECES = [
      INITIAL_PAWN_POSITIONS,
      INITIAL_ROOK_POSITIONS,
      INITIAL_BISHOP_POSITIONS,
      INITIAL_KNIGHT_POSITIONS,
      INITIAL_QUEEN_POSITIONS,
      INITIAL_KING_POSITIONS,
    ];

    for (const init_piece of INITIAL_PIECES) {
      if (init_piece.WHITE.includes(key))
        return {
          type: init_piece.type,
          color: Colors.WHITE,
          isFirstMove: true,
        };
      else if (init_piece.BLACK.includes(key))
        return {
          type: init_piece.type,
          color: Colors.BLACK,
          isFirstMove: true,
        };
    }

    return undefined;
  };

  const pieceInfo = getPieceInfo();

  return {
    position: { row: rowIdx, col: colIdx },
    positionOnChessNotation: chessNotationPosition,
    color:
      (rowIdx + colIdx) % 2 === 0 ? SquareColors.BLACK : SquareColors.WHITE,
    isEnemy: false,
    isAttackable: false,
    isPossibleMove: false,
    isOccupied: false,
    isOccupiedBy: undefined,
    piece: pieceInfo || undefined,
  };
}
