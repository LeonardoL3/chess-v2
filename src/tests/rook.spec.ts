import { executeMove } from '@/helpers/executeMove';
import { Colors, PieceTypes, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import { describe, it, expect } from 'vitest';
import { makeFakeChessboard } from './factories/makeFakeChessboard';

describe('Rook', () => {
  it('should return all valid horizontal moves', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[0][6].piece = undefined; // removing white pawn to allow rook to move
    const selectedSquare = fakeChessboard[0][7];
    const [validatedChessboard, state] = validateMove(
      Colors.WHITE,
      fakeChessboard,
      selectedSquare
    );

    expect(validatedChessboard[0][6].isAttackable).toBe(true);
    expect(validatedChessboard[0][5].isAttackable).toBe(true);
    expect(validatedChessboard[0][4].isAttackable).toBe(true);
    expect(validatedChessboard[0][3].isAttackable).toBe(true);
    expect(validatedChessboard[0][2].isAttackable).toBe(true);
    expect(state).toBe(States.TO_EXECUTE);
  });

  it('should return all valid vertical moves', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[0][4].piece = fakeChessboard[0][7].piece; // replacing rook piece to the middle of the board
    fakeChessboard[4][4].piece = fakeChessboard[0][0].piece; // placing white pawn on same vertical column as the rook
    const selectedSquare = fakeChessboard[0][4];
    const [validatedChessboard, state] = validateMove(
      Colors.WHITE,
      fakeChessboard,
      selectedSquare
    );

    expect(validatedChessboard[1][4].isAttackable).toBe(true);
    expect(validatedChessboard[2][4].isAttackable).toBe(true);
    expect(validatedChessboard[3][4].isAttackable).toBe(true);
    expect(validatedChessboard[4][4].isAttackable).toBe(true);
    expect(state).toBe(States.TO_EXECUTE);
  });

  it('should execute rook move', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[0][6].piece = undefined; // removing white pawn to allow rook to move
    const previousSelectedSquare = fakeChessboard[0][7]; // rook selected to execute
    const selectedSquare = fakeChessboard[0][1]; // black pawn to destroy

    const newChessboard = executeMove(
      fakeChessboard,
      selectedSquare,
      previousSelectedSquare
    );
    expect(newChessboard[0][7].piece).toBe(undefined);
    expect(newChessboard[0][1].piece?.type).toBe(PieceTypes.ROOK);
    expect(newChessboard[0][1].piece?.color).toBe(Colors.WHITE);
  });

  it('should not change state if there are no valid moves', () => {
    const fakeChessboard = makeFakeChessboard();
    const selectedSquare = fakeChessboard[0][7]; // white rook

    const [validatedChessboard, state] = validateMove(
      Colors.WHITE,
      fakeChessboard,
      selectedSquare
    );

    expect(fakeChessboard).toEqual(validatedChessboard);
    expect(state).toBe(States.TO_VALIDATE);
  });
});
