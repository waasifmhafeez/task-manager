import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
  name: "task",
  initialState: {
    list: [
      {
        colName: 'Completed',
        color: 'green',
        text: 'Completed tasks'
      },
      {
        colName: 'Not Completed',
        color: 'yellow',
        text: 'Unfinished tasks'
      },
      {
        colName: 'Processing',
        color: 'blue',
        text: 'Task being actively worked on'
      },
      {
        colName: 'Expired',
        color: 'red',
        text: 'Expired tasks'
      },
    ],
    people: [
      {
        id: 1,
        name: 'John',
        Email: 'demo@prac.com',
        password: 'abc',
        details: [
          
        ]
      },
    ]
  },
  reducers: {
    setData: (state, { payload }) => {
      console.log('Payload ==>>', payload);
      console.log('state ==>>', state.people);
      state.people = payload;
    }
  }
})

export const getData = () => async (dispatch) => {
  console.log('world')
  try {
    const res = await fetch('http://localhost:3000/people');
    const data = await res.json();
    console.log('D=>> ', data);
    dispatch(setData(data))
  }
  catch(error) {
    console.warn('get all data api error=>>',error)
  }
}

export const {setData} = taskSlice.actions
export default taskSlice.reducer;