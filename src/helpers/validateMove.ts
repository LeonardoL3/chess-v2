import { cloneDeep } from 'lodash';
import {
  IPiece,
  ISquareConfig,
  PieceColors,
  PieceTypes,
  SquareColors,
  States,
} from './types';

export function validateMove(
  player: PieceColors,
  chessboard: ISquareConfig[][],
  selectedSquare: ISquareConfig
): [ISquareConfig[][], States] {
	const newChessboard = cloneDeep(chessboard);

	if (!selectedSquare?.piece) {
		console.error('Invalid move: square has no piece!');
		return [newChessboard, States.TO_VALIDATE];
	}

	const { row, col } = selectedSquare.position;
	const { type, color } = selectedSquare?.piece;

	if (selectedSquare.piece.color !== player) {
		console.error(`Invalid Move: you can only move ${player} pieces!`);
		return [newChessboard, States.TO_VALIDATE];
	}

	const sum = (number1: number, number2: number) => {
		return color === PieceColors.WHITE ? number1 - number2 : number1 + number2;
	};

	const isInsideBoard = (row: number, col: number): boolean => {
		if (newChessboard[row]?.[col]) {
		return true;
		}
		return false;
	};

	const hasPiece = (row: number, col: number): boolean => {
		if (newChessboard[row]?.[col]?.piece) {
		return true;
		}
		return false;
	};

	const isPieceOfSameColor = (piece: IPiece): boolean => {
		if (piece.color === player) {
		return true;
		}
		return false;
	};

	const results: [number, number][] = [];
	switch (type) {
		case PieceTypes.PAWN:
		if (!hasPiece(row, sum(col, 1))) {
			results.push([row, sum(col, 1)]);

			if (selectedSquare.piece.isFirstMove && !hasPiece(row, sum(col, 2))) results.push([row, sum(col, 2)]);
		}

		if (
			hasPiece(row + 1, sum(col, 1)) &&
			!isPieceOfSameColor(newChessboard[row + 1][sum(col, 1)].piece as IPiece)
		)
			results.push([row + 1, sum(col, 1)]);

		if (
			hasPiece(row - 1, sum(col, 1)) &&
			!isPieceOfSameColor(newChessboard[row - 1][sum(col, 1)].piece as IPiece)
		)
			results.push([row - 1, sum(col, 1)]);

		break;
		case PieceTypes.ROOK:
		for (let positiveRow = 1; positiveRow < 8 - row; positiveRow++) {
			if (!isInsideBoard(row + positiveRow, col)) break

			if (!hasPiece(row + positiveRow, col)) results.push([row + positiveRow, col])
			else if (!isPieceOfSameColor(newChessboard[row + positiveRow][col].piece as IPiece)) {
				results.push([row + positiveRow, col])
				break
			}
			else break
			
		}

		for (let negativeRow = 1; negativeRow <= row; negativeRow++) {
			if (!isInsideBoard(row - negativeRow, col)) break

			if (!hasPiece(row - negativeRow, col)) results.push([row - negativeRow, col])
			else if (!isPieceOfSameColor(newChessboard[row - negativeRow][col].piece as IPiece)) {
				results.push([row - negativeRow, col])
				break
			}
			else break
			
		}

		for (let positiveCol = 1; positiveCol < 8 - col; positiveCol++) {
			if (!isInsideBoard(row, col + positiveCol)) break

			if (!hasPiece(row, col + positiveCol)) results.push([row, col + positiveCol]) 
			else if (!isPieceOfSameColor(newChessboard[row][col+positiveCol].piece as IPiece)) {
			results.push([row, col + positiveCol]) 
			break;
			}
			else break
		}

		for (let negativeCol = 1; negativeCol <= col; negativeCol++) {
			if (!isInsideBoard(row, col - negativeCol)) break

			if (!hasPiece(row, col - negativeCol)) results.push([row, col - negativeCol])
			else if (!isPieceOfSameColor(newChessboard[row][col-negativeCol].piece as IPiece)) {
				results.push([row, col - negativeCol])
				break
			}
			else break
		}
		break
		case PieceTypes.BISHOP:
			for (let topRightIdx = 1; topRightIdx < 8 - row; topRightIdx++) {
				if (!isInsideBoard(row + topRightIdx, col - topRightIdx)) break

				if (!hasPiece(row + topRightIdx, col - topRightIdx)) results.push([row + topRightIdx, col - topRightIdx])
				else if (!isPieceOfSameColor(newChessboard[row + topRightIdx][col - topRightIdx].piece as IPiece)) {
					results.push([row + topRightIdx, col - topRightIdx])
					break
				}
				else break
			}

			for (let bottomRightIdx = 1; bottomRightIdx < 8 - row; bottomRightIdx++) {
				if (!isInsideBoard(row + bottomRightIdx, col + bottomRightIdx)) break

				if (!hasPiece(row + bottomRightIdx, col + bottomRightIdx)) results.push([row + bottomRightIdx, col + bottomRightIdx])
				else if (!isPieceOfSameColor(newChessboard[row + bottomRightIdx][col + bottomRightIdx].piece as IPiece)) {
					results.push([row + bottomRightIdx, col + bottomRightIdx])
					break
				}
				else break
			}

			for (let topLeftIdx = 1; topLeftIdx <= row; topLeftIdx++) {
				if (!isInsideBoard(row - topLeftIdx, col - topLeftIdx)) break

				if (!hasPiece(row - topLeftIdx, col - topLeftIdx)) results.push([row - topLeftIdx, col - topLeftIdx])
				else if (!isPieceOfSameColor(newChessboard[row - topLeftIdx][col - topLeftIdx].piece as IPiece)) {
					results.push([row - topLeftIdx, col - topLeftIdx])
					break
				}
				else break
			}

			for (let bottomLeftIdx = 1; bottomLeftIdx <= row; bottomLeftIdx++) {
				if (!isInsideBoard(row - bottomLeftIdx, col + bottomLeftIdx)) break

				if (!hasPiece(row - bottomLeftIdx, col + bottomLeftIdx)) results.push([row - bottomLeftIdx, col + bottomLeftIdx])
				else if (!isPieceOfSameColor(newChessboard[row - bottomLeftIdx][col + bottomLeftIdx].piece as IPiece)) {
					results.push([row - bottomLeftIdx, col + bottomLeftIdx])
					break
				}
				else break
			}
		break
		}

	if (results.length === 0) {
		return [newChessboard, States.TO_VALIDATE];
	}

	for (const [newRow, newCol] of results) {
		newChessboard[newRow][newCol].isAttackable = true;
		newChessboard[newRow][newCol].color = SquareColors.ATTACKABLE;
	}

	return [newChessboard, States.TO_EXECUTE];
}
