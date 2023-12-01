import React, { useEffect } from 'react'
import TopHeader from '../components/TopHeader'
import { getData } from '../store/slices/taskSlice'
import { useSelector, useDispatch } from "react-redux";
import Main from '../components/MainUI';

const HomePage = () => {
  const task = useSelector(state => state.Task)
  console.log('Task=> ', task)
  // useEffect(() => {
  //   console.log('hello')
  // getData()
  //   foo()
  // }, [])

  const foo = async () => {
    try {
      const res = await fetch('https://localhost:3000/people')
      const data = await res.json();
      console.log('Rs=>', data);
    } catch (error) {
      console.log("error", error)
    }
  };

  foo();

  return (
    <div>
      <TopHeader />
      <Main />
    </div>
  )
}

export default HomePage
