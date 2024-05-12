import { cloneDeep } from 'lodash'
import { ISquareConfig, SquareColors } from "./types";

export function resetBoard(chessboard: ISquareConfig[][]): ISquareConfig[][] {
    return cloneDeep(chessboard).map(row => row.map(square => ({
        ...square,
        isAttackable: false,
        color: (square.position.row + square.position.col) % 2 === 0 ? SquareColors.BLACK : SquareColors.WHITE
    })))
}