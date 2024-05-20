import { Colors, IPiece, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { makeFakeChessboard } from './factories/makeFakeChessboard';

describe('Validate move function', () => {
  const consoleErrorMock = vi
    .spyOn(console, 'error')
    .mockImplementation(() => undefined);

  beforeEach(() => {
    consoleErrorMock.mockReset();
  });

  it('should handle invalid move: square has no piece', () => {
    const fakeChessboard = makeFakeChessboard();
    const selectedSquare = fakeChessboard[3][3]; // invalid move cause square has no piece
    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );

    expect(possibleMoves.length).toBe(0)
    expect(possibleAttacks.length).toBe(0)
    expect(consoleErrorMock).toHaveBeenCalledOnce();
    expect(consoleErrorMock).toHaveBeenCalledWith(
      'Invalid move: square has no piece!'
    );
  });

  it('should move only the correct piece color', () => {
    const fakeChessboard = makeFakeChessboard();
    const selectedSquare = fakeChessboard[0][6]; // white pawn
    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.BLACK
      }
    );
    
    expect(possibleMoves.length).toBe(0)
    expect(possibleAttacks.length).toBe(0)
    expect(consoleErrorMock).toHaveBeenCalledOnce();
    expect(consoleErrorMock).toHaveBeenCalledWith(
      'Invalid Move: you can only move black pieces!'
    );
  });

  it('should validate pawn moves correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    const selectedSquare = fakeChessboard[0][6]; // white pawn
    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );
    
    expect(possibleMoves).toEqual(['a6', 'a5'])
    expect(possibleAttacks.length).toBe(0)
  });

  it('should validate pawn attacks correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[1][5].piece = fakeChessboard[1][1].piece // placing black pawn to simulate attack
    fakeChessboard[0][6].piece = {
      ...fakeChessboard[0][6]?.piece,
      isFirstMove: false
    } as IPiece
    const selectedSquare = fakeChessboard[0][6]; // white pawn
    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );
    
    expect(possibleMoves).toEqual(['a6'])
    expect(possibleAttacks).toEqual(['b6'])
  });

  it('should validate rook moves correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[2][4].piece = fakeChessboard[0][7].piece  // placing white rook close to the middle of the board
    const selectedSquare = fakeChessboard[2][4] // white rook

    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );
    expect(possibleMoves).toEqual(['d5', 'e5', 'f5', 'g5', 'h5', 'b5', 'a5', 'c6', 'c4', 'c3'])
    expect(possibleAttacks).toEqual(['c2'])
  });

  it('should validate bishop moves correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[2][4].piece = fakeChessboard[1][7].piece  // placing white bishop close to the middle of the board
    const selectedSquare = fakeChessboard[2][4] // white bishop

    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );
    
    expect(possibleMoves).toEqual([ 'd4', 'e3', 'd6', 'b4', 'a3', 'b6' ])
    expect(possibleAttacks).toEqual(['f2'])
  });

  it('should validate knight moves correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[2][4].piece = fakeChessboard[2][7].piece  // placing white knight close to the middle of the board
    fakeChessboard[1][2].piece = fakeChessboard[1][1].piece  // placing black knight one square
    const selectedSquare = fakeChessboard[2][4] // white bishop

    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );
    
    expect(possibleMoves).toEqual(['d3', 'e4', 'a4', 'a6', 'e6'])
    expect(possibleAttacks).toEqual(['b3'])
  });

  it('should validate queen moves correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[2][4].piece = fakeChessboard[3][7].piece  // placing white queen close to the middle of the board
    const selectedSquare = fakeChessboard[2][4] // white bishop

    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );

    expect(possibleMoves).toEqual([
      'd5', 'e5', 'f5', 'g5',
      'h5', 'b5', 'a5', 'c6',
      'c4', 'c3', 'd4', 'e3',
      'd6', 'b4', 'a3', 'b6'
    ])
    expect(possibleAttacks).toEqual(['c2', 'f2'])
  });

  it('should validate king moves correctly', () => {
    const fakeChessboard = makeFakeChessboard();
    fakeChessboard[2][4].piece = fakeChessboard[4][7].piece  // placing white king close to the middle of the board
    const selectedSquare = fakeChessboard[2][4] // white king

    const [possibleMoves, possibleAttacks] = validateMove(
      {
        chessboard: fakeChessboard,
        selectedSquare,
        playerColor: Colors.WHITE
      }
    );
    
    expect(possibleMoves).toEqual([
      'd5', 'b5', 'd4',
      'd6', 'c4', 'c6',
      'b6', 'b4'
    ])
    expect(possibleAttacks.length).toBe(0)
  });
});
