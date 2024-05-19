import { executeMove } from '@/helpers/executeMove';
import { PieceColors, PieceTypes, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import { describe, it, expect } from 'vitest';
import { makeFakeChessboard } from './factories/makeFakeChessboard';


describe("Bishop", () => {
    it('should return all valid moves', () => {
        const fakeChessboard = makeFakeChessboard()
        fakeChessboard[3][4].piece = fakeChessboard[1][7].piece // placing white bishop on the middle of the board
        const selectedSquare = fakeChessboard[3][4]
        const [validatedChessboard, state] = validateMove(
            PieceColors.WHITE,
            fakeChessboard,
            selectedSquare
        )

        expect(validatedChessboard[4][5].isAttackable).toBe(true)
        expect(validatedChessboard[2][5].isAttackable).toBe(true)
        expect(validatedChessboard[2][3].isAttackable).toBe(true)
        expect(validatedChessboard[1][2].isAttackable).toBe(true)
        expect(validatedChessboard[0][1].isAttackable).toBe(true)
        expect(validatedChessboard[4][3].isAttackable).toBe(true)
        expect(validatedChessboard[5][2].isAttackable).toBe(true)
        expect(validatedChessboard[6][1].isAttackable).toBe(true)
        expect(state).toBe(States.TO_EXECUTE)

    })

    it('should execute move correctly', () => {
        const fakeChessboard = makeFakeChessboard()
        fakeChessboard[3][4].piece = fakeChessboard[1][7].piece // placing white bishop on the middle of the board
        
        const previousSelectedSquare = fakeChessboard[3][4] // rook selected to execute
        const selectedSquare = fakeChessboard[6][1] // black pawn to destroy

        const newChessboard = executeMove(fakeChessboard, selectedSquare, previousSelectedSquare)
        expect(newChessboard[3][4].piece).toBe(undefined)
        expect(newChessboard[6][1].piece?.type).toBe(PieceTypes.BISHOP)
        expect(newChessboard[6][1].piece?.color).toBe(PieceColors.WHITE)
    })

    it('should not change state if there are no valid moves', () => {
    const fakeChessboard = makeFakeChessboard()
    const selectedSquare = fakeChessboard[1][7] // white bishop

    const [validatedChessboard, state] = validateMove(PieceColors.WHITE, fakeChessboard, selectedSquare)

    expect(fakeChessboard).toEqual(validatedChessboard)
    expect(state).toBe(States.TO_VALIDATE)
  })
})

