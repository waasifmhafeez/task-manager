import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Sqaure from "./Sqaure";
import { handleClick, checkWinner } from './store/slices/boardSlice'
import { useSelector, useDispatch } from "react-redux";


function Board() {

  const { winList, squares, xIsNext, isWinner, winner , players} = useSelector(state => state.Board)
  const dispatch = useDispatch();



  console.log("win=>", squares)
  console.log("won=>", winList)
  console.log('iswinner=>', isWinner)

  useEffect(() => {
    dispatch(checkWinner())
  }, squares)


  return (
    <div className="container ">
      
      <p>Now player <bold className='player-move'>{xIsNext ? players[0].symbol : players[1].symbol}</bold> move:</p>
      <div className="board-center">
        <div className="board-row">
          <Sqaure value={squares[0]} handleClick={() => { dispatch(handleClick({ index: 0 })) }} />
          <Sqaure value={squares[1]} handleClick={() => { dispatch(handleClick({ index: 1 })) }} />
          <Sqaure value={squares[2]} handleClick={() => { dispatch(handleClick({ index: 2 })) }} />
        </div>
        <div className="board-row">
          <Sqaure value={squares[3]} handleClick={() => { dispatch(handleClick({ index: 3 })) }} />
          <Sqaure value={squares[4]} handleClick={() => { dispatch(handleClick({ index: 4 })) }} />
          <Sqaure value={squares[5]} handleClick={() => { dispatch(handleClick({ index: 5 })) }} />
        </div>
        <div className="board-row">
          <Sqaure value={squares[6]} handleClick={() => { dispatch(handleClick({ index: 6 })) }} />
          <Sqaure value={squares[7]} handleClick={() => { dispatch(handleClick({ index: 7 })) }} />
          <Sqaure value={squares[8]} handleClick={() => { dispatch(handleClick({ index: 8 })) }} />
        </div>
      </div>

      <p style={{ fontSize: '23px', marginTop: '20px' }}>Player <span style={{ fontWeight: '800' }}>{winner}</span> is winner..!!</p>

    </div>
  );
}

export default Board;

