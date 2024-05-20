import { describe, it, expect } from 'vitest';

import { ISquareContext, Colors, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import { executeMove } from '@/helpers/executeMove';
import { makeFakeChessboard } from './factories/makeFakeChessboard';

describe('Pawn', () => {
  it('should return valid pawn moves', () => {
    const fakeChessboard = makeFakeChessboard()
    const selectedSquare = fakeChessboard[0][6]; // white pawn
    const [validatedChessboard, state] = validateMove(
      Colors.WHITE,
      fakeChessboard,
      selectedSquare
    );

    expect(selectedSquare.piece).not.toBe(undefined);
    expect(validatedChessboard[0][6].isAttackable).not.toBe(true);
    expect(validatedChessboard[0][5].isAttackable).toBe(true);
    expect(validatedChessboard[0][4].isAttackable).toBe(true);
    expect(state).toBe(States.TO_EXECUTE);
  });
  
  it('should execute pawn move', () => {
    const fakeChessboard = makeFakeChessboard()
    const selectedSquare = fakeChessboard[0][6]; // white pawn
    const [validatedChessboard, state] = validateMove(
      Colors.WHITE,
      fakeChessboard,
      selectedSquare
    );
    const randomAttackableSquare = validatedChessboard[0].find(
      (cb) => cb.isAttackable
    ) as ISquareContext;

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
    
    const result = executedChessboard[attackableRow][attackableCol]
    expect(result.piece?.type).toBe(selectedSquare.piece?.type);
    expect(result.piece?.color).toBe(selectedSquare.piece?.color);
    expect(result.piece?.isFirstMove).toBe(false);
    expect(executedChessboard[row][col].piece).toBe(undefined);
  });

  it('should not change state if there are no valid moves', () => {
    const fakeChessboard = makeFakeChessboard()
    fakeChessboard[0][5].piece = fakeChessboard[0][1].piece // placing pawn in front of chosen pawn to block all moves
    
    const selectedSquare = fakeChessboard[0][6]
    const [validatedChessboard, state] = validateMove(Colors.WHITE, fakeChessboard, selectedSquare)

    expect(fakeChessboard).toEqual(validatedChessboard)
    expect(validatedChessboard[0][6].piece?.isFirstMove).toBe(true)
    expect(state).toBe(States.TO_VALIDATE)
  })

});
