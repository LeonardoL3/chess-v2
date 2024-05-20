'use client';

import { mountSquare } from '@/helpers/mountSquare';
import {
  ISquareContext,
  Colors,
  States,
  SquareColors,
  IPiece,
} from '@/helpers/types';
import { validateMove } from '@/helpers/validateMove';
import type { ReactNode } from 'react';
import { useState, createContext } from 'react';

const EMPTY_CHESSBOARD = Array.from({ length: 8 }, (_, rowIdx) =>
  Array.from({ length: 8 }, (_, colIdx) => mountSquare(rowIdx, colIdx))
);

const initial_metrics = {
  player: Colors.WHITE,
  round: 0,
  checkmate: false,
};

type IChessContextInitialValues = {
  startGame: () => void;
  startRound: (selectedPiece: ISquareContext) => void;
  state: States;
  metrics: typeof initial_metrics;
  chessboard: ISquareContext[][];
  currentlySelectedPieceToMove: ISquareContext | undefined;
};
export const ChessContext = createContext({} as IChessContextInitialValues);

export function ChessContextWrapper({ children }: { children: ReactNode }) {
  const [metrics, setMetrics] = useState(initial_metrics);
  const [state, setState] = useState<States>(States.TO_VALIDATE);
  const [currentlySelectedPieceToMove, setCurrentlySelectedPieceToMove] =
    useState<ISquareContext | undefined>(undefined);
  const [chessboard, setChessboard] = useState(EMPTY_CHESSBOARD);

  const startGame = () => {
    console.log('Happy');
  };

  const startRound = (selectedSquare: ISquareContext) => {
    switch (state) {
      case States.TO_VALIDATE:
        console.log('Validating move...');
        const [possibleMoves, possibleAttacks] = validateMove({
          chessboard,
          selectedSquare,
          playerColor: metrics.player,
        });

        if (!possibleMoves.length && !possibleAttacks.length) break;

        setState(States.TO_EXECUTE);
        setCurrentlySelectedPieceToMove(selectedSquare);
        setChessboard((prevChessboard) =>
          prevChessboard.map((row) =>
            row.map((square) => {
              if (possibleMoves.includes(square.positionOnChessNotation)) {
                return {
                  ...square,
                  isPossibleMove: true,
                  color: SquareColors.POSSIBLE_MOVE,
                };
              }
              if (possibleAttacks.includes(square.positionOnChessNotation)) {
                return {
                  ...square,
                  isAttackable: true,
                  color: SquareColors.ATTACKABLE,
                };
              }
              return square;
            })
          )
        );
        break;
      case States.TO_EXECUTE:
        console.log('Executing move...');
        if (
          selectedSquare.positionOnChessNotation ==
          currentlySelectedPieceToMove?.positionOnChessNotation
        ) {
          setState(States.TO_VALIDATE);
          setChessboard((prevState) =>
            prevState.map((row) =>
              row.map((square) => ({
                ...square,
                isAttackable: false,
                isPossibleMove: false,
                color:
                  (square.position.row + square.position.col) % 2 === 0
                    ? SquareColors.BLACK
                    : SquareColors.WHITE,
              }))
            )
          );
          return;
        }
        setChessboard((prevChessboard) =>
          prevChessboard.map((row, rowIdx) =>
            row.map((square, colIdx) => {
              const { row: currentRow, col: currentCol } =
                currentlySelectedPieceToMove?.position as ISquareContext['position'];
              if (rowIdx === currentRow && colIdx === currentCol) {
                return {
                  ...square,
                  isAttackable: false,
                  isPossibleMove: false,
                  color:
                    (square.position.row + square.position.col) % 2 === 0
                      ? SquareColors.BLACK
                      : SquareColors.WHITE,
                  piece: undefined,
                };
              } else if (
                rowIdx === selectedSquare.position.row &&
                colIdx === selectedSquare.position.col
              ) {
                return {
                  ...square,
                  isAttackable: false,
                  isPossibleMove: false,
                  color:
                    (square.position.row + square.position.col) % 2 === 0
                      ? SquareColors.BLACK
                      : SquareColors.WHITE,
                  piece: {
                    ...currentlySelectedPieceToMove?.piece,
                    isFirstMove: false,
                  } as IPiece,
                };
              }
              return {
                ...square,
                isAttackable: false,
                isPossibleMove: false,
                color:
                  (square.position.row + square.position.col) % 2 === 0
                    ? SquareColors.BLACK
                    : SquareColors.WHITE,
              };
            })
          )
        );
        setState(States.TO_VALIDATE);
        setMetrics((prevState) => ({
          ...prevState,
          player:
            prevState.player === Colors.WHITE ? Colors.BLACK : Colors.WHITE,
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
        currentlySelectedPieceToMove,
        metrics,
        state,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
}
