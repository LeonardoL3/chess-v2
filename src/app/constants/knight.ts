import { RelativePositions } from ".";
import { Colors } from "@/helpers/types";

const ALL_KNIGHT_MOVES = [
    [1, -2],
    [-1, -2],
    [2, -1],
    [-2, -1],
    [-1, 2],
    [1, 2],
    [-2, 1],
    [2, 1]
]

function generate_knight_moves(row: number, col: number): RelativePositions {
    return {
        [Colors.WHITE]: [
		{row, col},
	],
	[Colors.BLACK]: [
		{row, col},
	]
    }
}


export const POSSIBLE_KNIGHT_MOVES_RELATIVE_TO_SELECTED_SQUARE = ALL_KNIGHT_MOVES
.map(([row, col]) => generate_knight_moves(row, col))