'use client';

import { ChessContext } from '@/contexts/Chess';
import { States } from '@/helpers/types';
import { useContext } from 'react';
import { Checkmate } from './Checkmate';

export function ChessBoard() {
  const {
    startGame,
    startRound,
    chessboard,
    previousSelectedSquare,
    metrics,
    state,
  } = useContext(ChessContext);

  return (
    <main className='flex items-center justify-around'>
      <section
        id='metrics'
        className='fixed left-0 top-0 h-40 w-40 bg-black p-4 text-white opacity-60'
      >
        <h1 className='mb-4 text-center'> Metrics </h1>
        <p className='text-sm'> player: {metrics.player} </p>
        <p className='text-sm'> rounds: {metrics.round} </p>
      </section>
      <section>
        <button
          className='rounded bg-indigo-600 p-4 text-white shadow-lg shadow-indigo-500/50 duration-150 hover:bg-indigo-500'
          onClick={startGame}
        >
          Start Game
        </button>
      </section>
      <section
        id='chessboard-container'
        className='flex h-screen items-center justify-center'
      >
        {chessboard.map((row, idx) => (
          <section data-chess='chessboard-row' key={idx}>
            {row.map((square, colIdx) => {
              const { isAttackable, positionOnChessNotation, color } = square;
              return (
                <button
                  disabled={
                    state == States.TO_EXECUTE &&
                    !isAttackable &&
                    positionOnChessNotation !==
                      previousSelectedSquare?.positionOnChessNotation
                  }
                  data-chess='chessboard-square'
                  key={colIdx}
                  className={`flex h-20 w-20 items-center justify-center ${color} border border-solid border-black`}
                  onClick={() => startRound(square)}
                >
                  {/* <span className='text-center'>{square.piece?.type}</span> */}
                  <span className="text-center">Row: {square.position.row} Col: {square.position.col} {square.piece?.type}</span>
                </button>
              );
            })}
          </section>
        ))}
      </section>
    </main>
  );
}
