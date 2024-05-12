import { cloneDeep } from 'lodash'
import { IPiece, ISquareConfig, IValidMove, PieceColors, PiecePositions, PieceTypes, SquareColors, States } from "./types";


export function validateMove(
        player: PieceColors,
        chessboard: ISquareConfig[][],
        selectedSquare: ISquareConfig
    ): [ISquareConfig[][], States] {

    const newChessboard = cloneDeep(chessboard)

    if (!selectedSquare?.piece) {
        console.error("Invalid move: square has no piece!")
        return [newChessboard, States.TO_VALIDATE]
    }

    const { row, col } = selectedSquare.position
    const { type, color } = selectedSquare?.piece

    if (selectedSquare.piece.color !== player) {
        console.error(`Invalid Move: you can only move ${player} pieces!`)
        return [newChessboard, States.TO_VALIDATE]
    }

    const sum = (number1: number, number2: number) => {
        return color === PieceColors.WHITE ? number1-number2 : number1+number2
    }

    const isInsideBoard = (row: number, col: number): boolean => {
        if (newChessboard[row]?.[col]) {
            return true
        }
        return false
    }

    const hasPiece = (row: number, col: number): boolean => {
        if (newChessboard[row]?.[col]?.piece) {
            return true 
        }
        return false
    }

    const isPieceOfSameColor = (piece: IPiece): boolean => {
        if (piece.color === player) {
            return true
        }
        return false
    }
    
    const results: [number, number][] = []
    switch(type) {
        case PieceTypes.PAWN:
            if (!hasPiece(row, sum(col, 1))){
                results.push([row, sum(col, 1)])
            }

            if (selectedSquare.piece.isFirstMove) {
                if (!hasPiece(row, sum(col, 2))) {
                    results.push([row, sum(col, 2)])
                }
            }

            if (
                    hasPiece(row+1, sum(col, 1)) &&
                    !isPieceOfSameColor(newChessboard[row+1][sum(col, 1)].piece as IPiece)
                ) results.push([row+1, sum(col, 1)])

            if (
                    hasPiece(row-1, sum(col, 1)) &&
                    !isPieceOfSameColor(newChessboard[row-1][sum(col, 1)].piece as IPiece)
                ) results.push([row-1, sum(col, 1)])
            
            if (results.length === 0) {
                return [newChessboard, States.TO_VALIDATE]
            }
            break
        case PieceTypes.ROOK:
            for (let positiveRow = 1; positiveRow < 8-row; positiveRow++) {
                if (isInsideBoard(row+positiveRow, col) && !hasPiece(row+positiveRow, col)) {
                    results.push([row+positiveRow, col])
                } else {
                    break
                }
            }

            for (let negativeRow = 1; negativeRow <= row; negativeRow++) {
                if (isInsideBoard(row-negativeRow, col) && !hasPiece(row-negativeRow, col)) {
                    results.push([row-negativeRow, col])
                } else {
                    break
                }
            }

            for (let positiveCol = 1; positiveCol < 8-col; positiveCol++) {
                if (isInsideBoard(row, col+positiveCol) && !hasPiece(row, col+positiveCol)) {
                    results.push([row, col+positiveCol])
                } else {
                    break
                }
            }

            for (let negativeCol = 1; negativeCol <= col; negativeCol++) {
                if (isInsideBoard(row, col-negativeCol) && !hasPiece(row, col-negativeCol)) {
                    results.push([row, col-negativeCol])
                } else {
                    break
                }
            }

            if (results.length === 0) {
                return [newChessboard, States.TO_VALIDATE]
            }
            
    }

    for (const [newRow, newCol] of results) {
        newChessboard[newRow][newCol].isAttackable = true
        newChessboard[newRow][newCol].color = SquareColors.ATTACKABLE
    }


    return [newChessboard, States.TO_EXECUTE]
}