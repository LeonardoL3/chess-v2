export enum PieceTypes {
  PAWN = 'pawn',
  ROOK = 'rook',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  QUEEN = 'queen',
  KING = 'king',
}

export enum Colors {
  WHITE = 'white',
  BLACK = 'black',
}

export enum SquareColors {
  WHITE = 'white',
  BLACK = 'black',
  POSSIBLE_MOVE = 'bg-cyan-500',
  ATTACKABLE = 'bg-rose-600',
}

export enum PiecePositions {
  a1 = 'a1',
  a2 = 'a2',
  a3 = 'a3',
  a4 = 'a4',
  a5 = 'a5',
  a6 = 'a6',
  a7 = 'a7',
  a8 = 'a8',
  b1 = 'b1',
  b2 = 'b2',
  b3 = 'b3',
  b4 = 'b4',
  b5 = 'b5',
  b6 = 'b6',
  b7 = 'b7',
  b8 = 'b8',
  c1 = 'c1',
  c2 = 'c2',
  c3 = 'c3',
  c4 = 'c4',
  c5 = 'c5',
  c6 = 'c6',
  c7 = 'c7',
  c8 = 'c8',
  d1 = 'd1',
  d2 = 'd2',
  d3 = 'd3',
  d4 = 'd4',
  d5 = 'd5',
  d6 = 'd6',
  d7 = 'd7',
  d8 = 'd8',
  e1 = 'e1',
  e2 = 'e2',
  e3 = 'e3',
  e4 = 'e4',
  e5 = 'e5',
  e6 = 'e6',
  e7 = 'e7',
  e8 = 'e8',
  f1 = 'f1',
  f2 = 'f2',
  f3 = 'f3',
  f4 = 'f4',
  f5 = 'f5',
  f6 = 'f6',
  f7 = 'f7',
  f8 = 'f8',
  g1 = 'g1',
  g2 = 'g2',
  g3 = 'g3',
  g4 = 'g4',
  g5 = 'g5',
  g6 = 'g6',
  g7 = 'g7',
  g8 = 'g8',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  h7 = 'h7',
  h8 = 'h8',
}

export enum States {
  TO_VALIDATE = 'to_validate',
  TO_EXECUTE = 'to_execute',
}

export type IPiece = {
  type: PieceTypes;
  color: Colors;
  isFirstMove: boolean;
};

export interface ISquareContext {
  position: { row: number; col: number };
  positionOnChessNotation: PiecePositions;
  color: SquareColors;
  isAttackable: boolean;
  isPossibleMove: boolean;
  isOccupied: boolean;
  isOccupiedBy?: PieceTypes;
  isEnemy: boolean;
  piece?: IPiece;
}

export interface IValidMove {
  row: number;
  col: number;
}
