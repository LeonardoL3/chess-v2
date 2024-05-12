import { vi, beforeEach, describe, it, expect } from 'vitest';

import { ISquareConfig, PieceColors, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import { executeMove } from '@/helpers/executeMove';
import { fakeChessboard } from './mocks/fakeChessboard';

describe('Pawn validation', () => {
  const consoleErrorMock = vi
    .spyOn(console, 'error')
    .mockImplementation(() => undefined);

  beforeEach(() => {
    consoleErrorMock.mockReset();
  });

  it('should validate pawn move', () => {
    const selectedSquare = fakeChessboard[1][6]; // white pawn
    const [validatedChessboard, state] = validateMove(
      PieceColors.WHITE,
      fakeChessboard,
      selectedSquare
    );

    expect(selectedSquare.piece).toBeTruthy();
    expect(validatedChessboard[1][6].isAttackable).not.toBe(true);
    expect(validatedChessboard[1][5].isAttackable).toBe(true);
    expect(validatedChessboard[1][4].isAttackable).toBe(true);
    expect(state).toBe(States.TO_EXECUTE);
  });
  it('should handle invalid moves', () => {
    const selectedSquare = fakeChessboard[3][3]; // invalid move cause square has no piece
    const [validatedChessboard, state] = validateMove(
      PieceColors.WHITE,
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
  it('should move the only the correct piece color', () => {
    const selectedSquare = fakeChessboard[1][6]; // white pawn
    const [validatedChessboard, state] = validateMove(
      PieceColors.BLACK,
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
  it('should move execute pawn move', () => {
    const selectedSquare = fakeChessboard[1][6]; // white pawn
    const [validatedChessboard, state] = validateMove(
      PieceColors.WHITE,
      fakeChessboard,
      selectedSquare
    );
    const randomAttackableSquare = validatedChessboard[1].find(
      (cb) => cb.isAttackable
    ) as ISquareConfig;

    expect(selectedSquare.piece).toBeTruthy();
    expect(randomAttackableSquare).toBeTruthy();
    expect(state).toBe(States.TO_EXECUTE);

    const {
      position: { row, col },
    } = selectedSquare;
    const {
      position: { row: attackableRow, col: attackableCol },
    } = randomAttackableSquare;

    randomAttackableSquare.piece === selectedSquare.piece;

    const executedChessboard = executeMove(
      fakeChessboard,
      randomAttackableSquare,
      selectedSquare
    );

    expect(executedChessboard[attackableRow][attackableCol].piece?.type).toBe(
      selectedSquare.piece?.type
    );
    expect(executedChessboard[attackableRow][attackableCol].piece?.color).toBe(
      selectedSquare.piece?.color
    );
    expect(
      executedChessboard[attackableRow][attackableCol].piece?.isFirstMove
    ).toBe(false);
    expect(executedChessboard[row][col].piece).toBe(undefined);
  });
});
