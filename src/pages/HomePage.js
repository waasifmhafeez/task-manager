import React, { useEffect } from 'react'
import TopHeader from '../components/TopHeader'
import { getData } from '../store/slices/taskSlice'
import { useSelector, useDispatch } from "react-redux";
import Main from '../components/MainUI';

const HomePage = () => {

  const dispatch = useDispatch();
  const task = useSelector(state => state.Task)
  
  useEffect(() => {

    console.log('Hello =>>');
    //api call to get all data..
    dispatch(getData())

    // try {
    //   const res = fetch('http://localhost:3000/people').then((res) => {
    //     return res.json();
    //   }).then((data) => {
    //     console.log('Data=>>', data)
    //   });
    // } catch (error) {
    //   console.log("error", error)
    // }

    // const foo = async () => {
    //   try {
    //     const res = await fetch('http://localhost:3000/people');
    //     const data = await res.json();
    //     console.log('Data =>> ', data);
    //   } catch (error) {
    //     console.log("error", error)
    //   }
    // }
    // foo()
  }, [])

    


  return (
    <div>
      <TopHeader />
      <Main />
    </div>
  )
}

export default HomePage
