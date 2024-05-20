import { RelativePositions } from "."
import { Colors } from "@/helpers/types"

const ALL_KING_MOVES = [
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, 1],
    [-1, -1]
]

function generate_king_moves(row: number, col: number): RelativePositions {
    return {
        [Colors.WHITE]: [
		{row, col},
	],
	[Colors.BLACK]: [
		{row, col},
	]
    }
}


export const POSSIBLE_KING_MOVES_RELATIVE_TO_SELECTED_SQUARE = ALL_KING_MOVES
    .map(([row, col]) => generate_king_moves(row, col))