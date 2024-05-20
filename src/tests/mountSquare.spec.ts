import { mountSquare } from '@/helpers/mountSquare';
import { PieceTypes } from '@/helpers/types';
import { describe, it, expect } from 'vitest'

describe('Mount Square', () => {
    it('should mount squares correctly', () => {
        const EMPTY_CHESSBOARD = Array.from({ length: 8 }, (_, rowIdx) =>
            Array.from({ length: 8 }, (_, colIdx) => mountSquare(rowIdx, colIdx))
        );

        expect(EMPTY_CHESSBOARD.length).toBe(8)
        expect(EMPTY_CHESSBOARD[0][0].piece?.type).toBe(PieceTypes.ROOK)
        expect(EMPTY_CHESSBOARD[0][7].piece?.type).toBe(PieceTypes.ROOK)
        expect(EMPTY_CHESSBOARD[1][0].piece?.type).toBe(PieceTypes.BISHOP)
        expect(EMPTY_CHESSBOARD[1][7].piece?.type).toBe(PieceTypes.BISHOP)
        expect(EMPTY_CHESSBOARD[2][0].piece?.type).toBe(PieceTypes.KNIGHT)
        expect(EMPTY_CHESSBOARD[2][7].piece?.type).toBe(PieceTypes.KNIGHT)
    })
})