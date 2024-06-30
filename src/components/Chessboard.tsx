'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { ChessContext } from '@/contexts/Chess';
import { Colors, States } from '@/helpers/types';


export function ChessBoard() {
  const {
    startGame,
    startRound,
    chessboard,
    currentlySelectedPieceToMove,
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
            {row.map((square) => {
              const {
                isPossibleMove,
                isAttackable,
                positionOnChessNotation,
                color,
              } = square;
              const isDisabled =
                state === States.TO_EXECUTE &&
                !(isAttackable || isPossibleMove) &&
                positionOnChessNotation !==
                  currentlySelectedPieceToMove?.positionOnChessNotation;
              return (
                <button
                  key={positionOnChessNotation}
                  disabled={isDisabled}
                  data-chess='chessboard-square'
                  className={`${color} flex h-20 w-20 cursor-pointer items-center justify-center border border-solid border-black`}
                  onClick={() => startRound(square)}
                >
                  {square.piece && (
                    <span className='text-center'>
                      <Image 
                        src={`/${square.piece.type}.png`}
                        alt={square.piece.type}  
                        style={{filter: `invert(${square.piece.color == Colors.WHITE ? '1' : '0'})`}}
                        width={50}
                        height={50}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </section>
        ))}
      </section>
    </main>
  );
}
