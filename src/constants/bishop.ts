import { Colors } from '@/helpers/types';
import { RelativePositions } from '.';

const BISHOP_RIGHT_POSITIVE_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: 1, col: -1 },
    { row: 2, col: -2 },
    { row: 3, col: -3 },
    { row: 4, col: -4 },
    { row: 5, col: -5 },
    { row: 6, col: -6 },
    { row: 7, col: -7 },
  ],
  [Colors.BLACK]: [
    { row: 1, col: -1 },
    { row: 2, col: -2 },
    { row: 3, col: -3 },
    { row: 4, col: -4 },
    { row: 5, col: -5 },
    { row: 6, col: -6 },
    { row: 7, col: -7 },
  ],
};

const BISHOP_RIGHT_NEGATIVE_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
    { row: 5, col: 5 },
    { row: 6, col: 6 },
    { row: 7, col: 7 },
  ],
  [Colors.BLACK]: [
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
    { row: 5, col: 5 },
    { row: 6, col: 6 },
    { row: 7, col: 7 },
  ],
};

const BISHOP_LEFT_POSITIVE_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: -1, col: -1 },
    { row: -2, col: -2 },
    { row: -3, col: -3 },
    { row: -4, col: -4 },
    { row: -5, col: -5 },
    { row: -6, col: -6 },
    { row: -7, col: -7 },
  ],
  [Colors.BLACK]: [
    { row: -1, col: -1 },
    { row: -2, col: -2 },
    { row: -3, col: -3 },
    { row: -4, col: -4 },
    { row: -5, col: -5 },
    { row: -6, col: -6 },
    { row: -7, col: -7 },
  ],
};

const BISHOP_LEFT_NEGATIVE_MOVES: RelativePositions = {
  [Colors.WHITE]: [
    { row: -1, col: 1 },
    { row: -2, col: 2 },
    { row: -3, col: 3 },
    { row: -4, col: 4 },
    { row: -5, col: 5 },
    { row: -6, col: 6 },
    { row: -7, col: 7 },
  ],
  [Colors.BLACK]: [
    { row: -1, col: 1 },
    { row: -2, col: 2 },
    { row: -3, col: 3 },
    { row: -4, col: 4 },
    { row: -5, col: 5 },
    { row: -6, col: 6 },
    { row: -7, col: 7 },
  ],
};

export const POSSIBLE_BISHOP_MOVES_RELATIVE_TO_SELECTED_SQUARE = [
  BISHOP_RIGHT_POSITIVE_MOVES,
  BISHOP_RIGHT_NEGATIVE_MOVES,
  BISHOP_LEFT_POSITIVE_MOVES,
  BISHOP_LEFT_NEGATIVE_MOVES,
];
