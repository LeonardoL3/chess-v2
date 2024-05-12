import { ChessContextWrapper } from '@/contexts/Chess';
import { ChessBoard } from '@/components/Chessboard';
import { Checkmate } from '@/components/Checkmate';

export default function Home() {
  return (
    <ChessContextWrapper>
      <ChessBoard />
      <Checkmate />
    </ChessContextWrapper>
  );
}
