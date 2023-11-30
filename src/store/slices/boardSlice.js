import { createSlice } from "@reduxjs/toolkit"



const boardSlice = createSlice({
  name: 'board',
  initialState: {
    squares: Array(9).fill('-'),
    winList: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    xIsNext: true, 
    isWinner: false,
    winner: '',
    players: [
      {
        name: '',
        symbol: '',
        player: 'Player One'
      },
      {
        name: '',
        symbol: '',
        player: 'Player Two'
      },
    ],
    playerAreSet: false,

  },
  reducers: {
    handleSubmit: (state, { payload }) => {
      state.playerAreSet = true
    },
    handleChangeName: (state, { payload }) => {
      console.log('payload=>', payload)
      const { name, index} = payload
      state.players[index].name = name
    },
    handleChangeSymbol: (state, { payload }) => {
      console.log('payload=>', payload)
      const {symbol, index} = payload
      state.players[index].symbol = symbol
    },
    handleClick: (state, { payload }) => {
      const { index } = payload;
      console.log("i got clicked", payload)
      if (state.isWinner==false) {
        if (state.squares[index] != '-') {
          return
        }
        if (state.xIsNext) {
          state.squares[index] = state.players[0].symbol
          state.xIsNext = false;
        }
        else {
          state.squares[index] = state.players[1].symbol
          state.xIsNext = true;
        }
        console.log('here..',state.squares[0])
      }
      return

    },
    checkWinner: (state, { payload }) => {
      console.log("Winlsi=>",state.winList[0])
      state.winList.map((item, i) => {
        const [ a, b, c ] = item;
        console.log('h==>>',item)
        if (state.squares[a] !== '-' && state.squares[b] != '-' && state.squares != '-') {
          if (state.squares[a] === state.squares[b] && state.squares[a] == state.squares[c]){
            state.isWinner = true;
            // state.winner = state.squares[a];
            if (state.squares[a] === state.players[0].symbol) {
              state.winner = state.players[0].name
            } else {
              state.winner = state.players[1].name
            }
          }
          console.log('hello')
        }
      })
    }
  },
})

export const { handleClick, checkWinner, handleChangeName, handleChangeSymbol, handleSubmit } = boardSlice.actions;
export default boardSlice.reducer;