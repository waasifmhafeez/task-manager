import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Sqaure from "./Sqaure";

import { handleChangeSymbol, checkWinner, handleChangeName } from './store/slices/boardSlice'
import { useSelector, useDispatch } from "react-redux";

const Form = (props) => {
  const dispatch = useDispatch()
  console.log("Item=>", props)
  const {player, name, symbol,index } = props;
  return (
    <div className="container">
      <h2 className="mt-3">{player }</h2>
        {/* <form> */}
          <label name='playerOne' for='playerOne' >Name</label>
          <input
            className="form-control"
            name={`name ${player}` }
            type='text'
            placeholder='Enter name..'
          value={name}
          onChange={(e) => {
            dispatch(handleChangeName({name: e.target.value, index}))
          }}
          />
          <label name='playerOne' for='playerOne' >Symbol</label>
          <input
            className="form-control"
            name={`symbol ${player}`}
            type='text'
            placeholder='Enter symbol..'
          value={symbol}
          maxLength={1}
          onChange={(e) => {
            dispatch(handleChangeSymbol({ symbol: e.target.value, index }))
          }}
        />
        
        {/* </form> */}
      </div>
  )
}

export default Form
