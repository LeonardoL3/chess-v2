'use client';

import { ChessContext } from '@/contexts/Chess';
import { useContext } from 'react';

export function Checkmate() {
  const {
    metrics: { player, checkmate },
  } = useContext(ChessContext);

  if (!checkmate) return null;

  return (
    <div id='checkmate' className=''>
      <h2 className=''> Checkmate </h2>
      <p> {player} Won! </p>
    </div>
  );
}
