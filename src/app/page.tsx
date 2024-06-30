"use client"

import { useState, useEffect } from 'react'

import { ChessContextWrapper } from '@/contexts/Chess';
import { ChessBoard } from '@/components/Chessboard';
import { Checkmate } from '@/components/Checkmate';

import { connect } from 'socket.io-client'

const socket = connect('http://localhost:5000');

export default function Home() {
  return (
    <ChessContextWrapper>
      <ChessBoard />
      <Checkmate />
      <button onClick={() => {
        socket.disconnect();

        console.log(socket.connected)
      }}> 
        test
      </button>
    </ChessContextWrapper>
  );
}
