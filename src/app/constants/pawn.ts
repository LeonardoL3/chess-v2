import { RelativePositions } from ".";
import { Colors } from "@/helpers/types";

const PAWN_MOVES: RelativePositions = {
	[Colors.WHITE]: [
		{row: 0, col: -1},
		{row: 0, col: -2, isFirstMoveRequired: true},
		{row: 1, col: -1, isOnlyToAttack: true},
		{row: -1, col: -1, isOnlyToAttack: true},
	],
	[Colors.BLACK]: [
		{row: 0, col: 1},
		{row: 0, col: 2, isFirstMoveRequired: true},
		{row: -1, col: 1, isOnlyToAttack: true},
		{row: 1, col: 1, isOnlyToAttack: true},
	]
}

export const POSSIBLE_PAWN_MOVES_RELATIVE_TO_SELECTED_SQUARE = [PAWN_MOVES]