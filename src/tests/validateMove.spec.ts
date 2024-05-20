import { Colors, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { makeFakeChessboard } from './factories/makeFakeChessboard';


describe("Validate move function", () => {
    const consoleErrorMock = vi
    .spyOn(console, 'error')
    .mockImplementation(() => undefined);

    beforeEach(() => {
        consoleErrorMock.mockReset();
    });

    it('should handle invalid moves', () => {
        const fakeChessboard = makeFakeChessboard()
        const selectedSquare = fakeChessboard[3][3]; // invalid move cause square has no piece
        const [validatedChessboard, state] = validateMove(
        Colors.WHITE,
        fakeChessboard,
        selectedSquare
        );

        expect(selectedSquare.piece).toBe(undefined);
        expect(fakeChessboard).toEqual(validatedChessboard);
        expect(state).toBe(States.TO_VALIDATE);
        expect(consoleErrorMock).toHaveBeenCalledOnce();
        expect(consoleErrorMock).toHaveBeenCalledWith(
        'Invalid move: square has no piece!'
        );
    });

    it('should move only the correct piece color', () => {
    const fakeChessboard = makeFakeChessboard()
    const selectedSquare = fakeChessboard[0][6]; // white pawn
    const [validatedChessboard, state] = validateMove(
      Colors.BLACK,
      fakeChessboard,
      selectedSquare
    );

    expect(fakeChessboard).toEqual(validatedChessboard);
    expect(state).toBe(States.TO_VALIDATE);
    expect(consoleErrorMock).toHaveBeenCalledOnce();
    expect(consoleErrorMock).toHaveBeenCalledWith(
      'Invalid Move: you can only move black pieces!'
    );
  });
})

