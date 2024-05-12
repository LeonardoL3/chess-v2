import { ISquareConfig, PieceTypes, PieceColors, PiecePositions, SquareColors } from "./types";

const INITIAL_PAWN_POSITIONS = {
    type: PieceTypes.PAWN,
    WHITE: ["0-6", "1-6", "2-6", "3-6", "4-6", "5-6", "6-6", "7-6"],
    BLACK: ["0-1", "1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"]
}

const INITIAL_ROOK_POSITIONS = {
    type: PieceTypes.ROOK,
    WHITE: ["0-7", "7-7"],
    BLACK: ["0-0", "7-0"]
}

const INITIAL_BISHOP_POSITIONS = {
    type: PieceTypes.BISHOP,
    WHITE: ["1-7", "6-7"],
    BLACK: ["1-0", "6-0"]
}

const INITIAL_KNIGHT_POSITIONS = {
    type: PieceTypes.KNIGHT,
    WHITE: ["2-7", "5-7"],
    BLACK: ["2-0", "5-0"]
}

const INITIAL_QUEEN_POSITIONS = {
    type: PieceTypes.QUEEN,
    WHITE: ["3-7"],
    BLACK: ["3-0"]
}

const INITIAL_KING_POSITIONS = {
    type: PieceTypes.KING,
    WHITE: ["4-7"],
    BLACK: ["4-0"]
}

const relation = ["A ","B", "C", "D", "E", "F", "G", "H"]


export function mountSquare(rowIdx: number, colIdx: number): ISquareConfig {
    const key = `${rowIdx}-${colIdx}`
    const chessNotationPosition = `${relation[rowIdx]}${colIdx + 1}`

    const getPieceInfo = () => {
        const INITIAL_PIECES = [
            INITIAL_PAWN_POSITIONS,
            INITIAL_ROOK_POSITIONS,
            INITIAL_BISHOP_POSITIONS,
            INITIAL_KNIGHT_POSITIONS,
            INITIAL_QUEEN_POSITIONS,
            INITIAL_KING_POSITIONS
        ]

        for (const init_piece of INITIAL_PIECES) {
            if (init_piece.WHITE.includes(key)) return {type: init_piece.type, color: PieceColors.WHITE, isFirstMove: true}
            else if (init_piece.BLACK.includes(key)) return {type: init_piece.type, color: PieceColors.BLACK, isFirstMove: true}

        }

        return undefined
    }

    const pieceInfo = getPieceInfo()

    return {
        position: { row: rowIdx, col: colIdx },
        positionOnChessNotation: chessNotationPosition,
        color: (rowIdx + colIdx) % 2 === 0 ? SquareColors.BLACK : SquareColors.WHITE,
        isEnemy: false,
        isAttackable: false,
        isOccupied: false,
        isOccupiedBy: undefined,
        piece: pieceInfo || undefined
    }
}