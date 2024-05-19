import { PieceColors, PieceTypes, SquareColors } from "@/helpers/types";

export function makeFakeChessboard(){
    return [[
    {
      position: {
        row: 0,
        col: 0,
      },
      positionOnChessNotation: 'A 1',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.ROOK,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 0,
        col: 1,
      },
      positionOnChessNotation: 'A 2',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 0,
        col: 2,
      },
      positionOnChessNotation: 'A 3',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 0,
        col: 3,
      },
      positionOnChessNotation: 'A 4',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 0,
        col: 4,
      },
      positionOnChessNotation: 'A 5',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 0,
        col: 5,
      },
      positionOnChessNotation: 'A 6',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 0,
        col: 6,
      },
      positionOnChessNotation: 'A 7',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 0,
        col: 7,
      },
      positionOnChessNotation: 'A 8',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.ROOK,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 1,
        col: 0,
      },
      positionOnChessNotation: 'B1',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.BISHOP,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 1,
        col: 1,
      },
      positionOnChessNotation: 'B2',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 1,
        col: 2,
      },
      positionOnChessNotation: 'B3',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 1,
        col: 3,
      },
      positionOnChessNotation: 'B4',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 1,
        col: 4,
      },
      positionOnChessNotation: 'B5',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 1,
        col: 5,
      },
      positionOnChessNotation: 'B6',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 1,
        col: 6,
      },
      positionOnChessNotation: 'B7',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 1,
        col: 7,
      },
      positionOnChessNotation: 'B8',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.BISHOP,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 2,
        col: 0,
      },
      positionOnChessNotation: 'C1',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.KNIGHT,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 2,
        col: 1,
      },
      positionOnChessNotation: 'C2',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 2,
        col: 2,
      },
      positionOnChessNotation: 'C3',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 2,
        col: 3,
      },
      positionOnChessNotation: 'C4',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 2,
        col: 4,
      },
      positionOnChessNotation: 'C5',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 2,
        col: 5,
      },
      positionOnChessNotation: 'C6',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 2,
        col: 6,
      },
      positionOnChessNotation: 'C7',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 2,
        col: 7,
      },
      positionOnChessNotation: 'C8',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.KNIGHT,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 3,
        col: 0,
      },
      positionOnChessNotation: 'D1',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.QUEEN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 3,
        col: 1,
      },
      positionOnChessNotation: 'D2',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 3,
        col: 2,
      },
      positionOnChessNotation: 'D3',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 3,
        col: 3,
      },
      positionOnChessNotation: 'D4',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 3,
        col: 4,
      },
      positionOnChessNotation: 'D5',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 3,
        col: 5,
      },
      positionOnChessNotation: 'D6',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 3,
        col: 6,
      },
      positionOnChessNotation: 'D7',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 3,
        col: 7,
      },
      positionOnChessNotation: 'D8',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.QUEEN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 4,
        col: 0,
      },
      positionOnChessNotation: 'E1',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.KING,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 4,
        col: 1,
      },
      positionOnChessNotation: 'E2',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 4,
        col: 2,
      },
      positionOnChessNotation: 'E3',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 4,
        col: 3,
      },
      positionOnChessNotation: 'E4',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 4,
        col: 4,
      },
      positionOnChessNotation: 'E5',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 4,
        col: 5,
      },
      positionOnChessNotation: 'E6',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 4,
        col: 6,
      },
      positionOnChessNotation: 'E7',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 4,
        col: 7,
      },
      positionOnChessNotation: 'E8',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.KING,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 5,
        col: 0,
      },
      positionOnChessNotation: 'F1',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.KNIGHT,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 5,
        col: 1,
      },
      positionOnChessNotation: 'F2',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 5,
        col: 2,
      },
      positionOnChessNotation: 'F3',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 5,
        col: 3,
      },
      positionOnChessNotation: 'F4',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 5,
        col: 4,
      },
      positionOnChessNotation: 'F5',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 5,
        col: 5,
      },
      positionOnChessNotation: 'F6',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 5,
        col: 6,
      },
      positionOnChessNotation: 'F7',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 5,
        col: 7,
      },
      positionOnChessNotation: 'F8',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.KNIGHT,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 6,
        col: 0,
      },
      positionOnChessNotation: 'G1',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.BISHOP,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 6,
        col: 1,
      },
      positionOnChessNotation: 'G2',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 6,
        col: 2,
      },
      positionOnChessNotation: 'G3',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 6,
        col: 3,
      },
      positionOnChessNotation: 'G4',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 6,
        col: 4,
      },
      positionOnChessNotation: 'G5',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 6,
        col: 5,
      },
      positionOnChessNotation: 'G6',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 6,
        col: 6,
      },
      positionOnChessNotation: 'G7',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 6,
        col: 7,
      },
      positionOnChessNotation: 'G8',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.BISHOP,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
  [
    {
      position: {
        row: 7,
        col: 0,
      },
      positionOnChessNotation: 'H1',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.ROOK,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 7,
        col: 1,
      },
      positionOnChessNotation: 'H2',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.BLACK,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 7,
        col: 2,
      },
      positionOnChessNotation: 'H3',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 7,
        col: 3,
      },
      positionOnChessNotation: 'H4',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 7,
        col: 4,
      },
      positionOnChessNotation: 'H5',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 7,
        col: 5,
      },
      positionOnChessNotation: 'H6',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
    },
    {
      position: {
        row: 7,
        col: 6,
      },
      positionOnChessNotation: 'H7',
      color: SquareColors.WHITE,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.PAWN,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
    {
      position: {
        row: 7,
        col: 7,
      },
      positionOnChessNotation: 'H8',
      color: SquareColors.BLACK,
      isEnemy: false,
      isAttackable: false,
      isOccupied: false,
      piece: {
        type: PieceTypes.ROOK,
        color: PieceColors.WHITE,
        isFirstMove: true,
      },
    },
  ],
];
}