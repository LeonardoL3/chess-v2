import { cloneDeep } from 'lodash'
import { IPiece, ISquareConfig, PieceTypes } from "./types";

export function executeMove(
    chessboard: ISquareConfig[][],
    selectedSquare: ISquareConfig,
    previousSelectedSquare: ISquareConfig): ISquareConfig[][] {
    const { row, col } = selectedSquare.position
    const {row: currentRow, col: currentCol } = previousSelectedSquare.position
    
    const newChessboard = cloneDeep(chessboard)

    newChessboard[currentRow][currentCol].piece = undefined
    newChessboard[row][col].piece = {
        ...previousSelectedSquare.piece,
        isFirstMove: false
    } as IPiece
    

    return newChessboard
}