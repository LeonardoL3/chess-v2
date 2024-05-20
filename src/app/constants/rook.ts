import { Colors } from '@/helpers/types';
import { RelativePositions } from '.';

const ROOK_POSITIVE_HORIZONTAL_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: 1, col: 0 },
    { row: 2, col: 0 },
    { row: 3, col: 0 },
    { row: 4, col: 0 },
    { row: 5, col: 0 },
    { row: 6, col: 0 },
    { row: 7, col: 0 },
  ],
  [Colors.BLACK]: [
    { row: 1, col: 0 },
    { row: 2, col: 0 },
    { row: 3, col: 0 },
    { row: 4, col: 0 },
    { row: 5, col: 0 },
    { row: 6, col: 0 },
    { row: 7, col: 0 },
  ],
};

const ROOK_NEGATIVE_HORIZONTAL_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: -1, col: 0 },
    { row: -2, col: 0 },
    { row: -3, col: 0 },
    { row: -4, col: 0 },
    { row: -5, col: 0 },
    { row: -6, col: 0 },
    { row: -7, col: 0 },
  ],
  [Colors.BLACK]: [
    { row: -1, col: 0 },
    { row: -2, col: 0 },
    { row: -3, col: 0 },
    { row: -4, col: 0 },
    { row: -5, col: 0 },
    { row: -6, col: 0 },
    { row: -7, col: 0 },
  ],
};

const ROOK_POSITIVE_VERTICAL_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 3 },
    { row: 0, col: 4 },
    { row: 0, col: 5 },
    { row: 0, col: 6 },
    { row: 0, col: 7 },
  ],
  [Colors.BLACK]: [
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 3 },
    { row: 0, col: 4 },
    { row: 0, col: 5 },
    { row: 0, col: 6 },
    { row: 0, col: 7 },
  ],
};

const ROOK_NEGATIVE_VERTICAL_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: 0, col: -1 },
    { row: 0, col: -2 },
    { row: 0, col: -3 },
    { row: 0, col: -4 },
    { row: 0, col: -5 },
    { row: 0, col: -6 },
    { row: 0, col: -7 },
  ],
  [Colors.BLACK]: [
    { row: 0, col: -1 },
    { row: 0, col: -2 },
    { row: 0, col: -3 },
    { row: 0, col: -4 },
    { row: 0, col: -5 },
    { row: 0, col: -6 },
    { row: 0, col: -7 },
  ],
};

export const POSSIBLE_ROOK_MOVES_RELATIVE_TO_SELECTED_SQUARE = [
  ROOK_POSITIVE_HORIZONTAL_MOVES,
  ROOK_NEGATIVE_HORIZONTAL_MOVES,
  ROOK_POSITIVE_VERTICAL_MOVES,
  ROOK_NEGATIVE_VERTICAL_MOVES,
];
