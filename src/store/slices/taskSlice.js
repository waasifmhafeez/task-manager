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

  }
})

export const getData = () => async (dispatch) => {
  console.log('world')
  try {
    const res = await fetch('https://localhost:3000/people')
    console.log("Res=> ",res)
  }
  catch {
    console.log('error')
  }
}

export default taskSlice.reducer;