'use client';

import { executeMove } from '@/helpers/executeMove';
import { mountSquare } from '@/helpers/mountSquare';
import { resetBoard } from '@/helpers/resetBoard';
import { ISquareConfig, PieceColors, States } from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import type { ReactNode } from 'react';
import { useState, createContext } from 'react';

const EMPTY_CHESSBOARD = Array.from({ length: 8 }, (_, rowIdx) =>
  Array.from({ length: 8 }, (_, colIdx) => mountSquare(rowIdx, colIdx))
);

const initial_metrics = {
  player: PieceColors.WHITE,
  round: 0,
  checkmate: false,
};

type IChessContextInitialValues = {
  startGame: () => void;
  startRound: (selectedPiece: ISquareConfig) => void;
  state: States;
  metrics: typeof initial_metrics;
  chessboard: ISquareConfig[][];
  previousSelectedSquare: ISquareConfig | undefined;
};
export const ChessContext = createContext({} as IChessContextInitialValues);

export function ChessContextWrapper({ children }: { children: ReactNode }) {
  const [metrics, setMetrics] = useState(initial_metrics);
  const [state, setState] = useState<States>(States.TO_VALIDATE);
  const [previousSelectedSquare, setPreviousSelectedSquare] = useState<
    ISquareConfig | undefined
  >(undefined);
  const [chessboard, setChessboard] = useState(EMPTY_CHESSBOARD);

  const startGame = () => {
    console.log('Happy');
  };

  const startRound = (selectedSquare: ISquareConfig) => {
    switch (state) {
      case States.TO_VALIDATE:
        console.log('Validating move...');
        const [validatedChessboard, state] = validateMove(
          metrics.player,
          chessboard,
          selectedSquare
        );
        setState(state);
        setPreviousSelectedSquare(selectedSquare);
        setChessboard(validatedChessboard);
        break;
      case States.TO_EXECUTE:
        console.log('Executing move...');
        const resettedChessboard = resetBoard(chessboard);
        if (
          selectedSquare.positionOnChessNotation ==
          previousSelectedSquare?.positionOnChessNotation
        ) {
          setState(States.TO_VALIDATE);
          setChessboard(resettedChessboard);
          return;
        }
        const executedChessboard = executeMove(
          resettedChessboard,
          selectedSquare,
          previousSelectedSquare as ISquareConfig
        );
        setChessboard(executedChessboard);
        setState(States.TO_VALIDATE);
        setMetrics((prevState) => ({
          ...prevState,
          player:
            prevState.player === PieceColors.WHITE
              ? PieceColors.BLACK
              : PieceColors.WHITE,
          round: prevState.round + 1,
        }));
        break;
    }
  };

  return (
    <ChessContext.Provider
      value={{
        startGame,
        startRound,
        chessboard,
        previousSelectedSquare,
        metrics,
        state,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
}
