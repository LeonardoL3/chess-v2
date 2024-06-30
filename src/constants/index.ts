import { Colors, PieceTypes } from '@/helpers/types';
import { POSSIBLE_BISHOP_MOVES_RELATIVE_TO_SELECTED_SQUARE } from './bishop';
import { POSSIBLE_QUEEN_MOVES_RELATIVE_TO_SELECTED_SQUARE } from './queen';
import { POSSIBLE_PAWN_MOVES_RELATIVE_TO_SELECTED_SQUARE } from './pawn';
import { POSSIBLE_ROOK_MOVES_RELATIVE_TO_SELECTED_SQUARE } from './rook';
import { POSSIBLE_KING_MOVES_RELATIVE_TO_SELECTED_SQUARE } from './king';
import { POSSIBLE_KNIGHT_MOVES_RELATIVE_TO_SELECTED_SQUARE } from './knight';

export type RelativePosition = {
  row: number;
  col: number;
  isFirstMoveRequired?: boolean;
  isOnlyToAttack?: boolean;
};

export interface RelativePositions {
  [Colors.WHITE]: RelativePosition[];
  [Colors.BLACK]: RelativePosition[];
}

export const POSSIBLE_POSITIONS_RELATIVE_TO_SELECTED_SQUARE = {
  [PieceTypes.PAWN]: POSSIBLE_PAWN_MOVES_RELATIVE_TO_SELECTED_SQUARE,
  [PieceTypes.ROOK]: POSSIBLE_ROOK_MOVES_RELATIVE_TO_SELECTED_SQUARE,
  [PieceTypes.BISHOP]: POSSIBLE_BISHOP_MOVES_RELATIVE_TO_SELECTED_SQUARE,
  [PieceTypes.KNIGHT]: POSSIBLE_KNIGHT_MOVES_RELATIVE_TO_SELECTED_SQUARE,
  [PieceTypes.QUEEN]: POSSIBLE_QUEEN_MOVES_RELATIVE_TO_SELECTED_SQUARE,
  [PieceTypes.KING]: POSSIBLE_KING_MOVES_RELATIVE_TO_SELECTED_SQUARE,
};
