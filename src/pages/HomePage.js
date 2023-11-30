import React,{useEffect} from 'react'
import TopHeader from '../components/TopHeader'
import Main from '../components/Main'
import { getData } from '../store/slices/taskSlice'
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const task = useSelector(state => state.Task)
  console.log('Task=> ',task)
  useEffect(() => {
    console.log('hello')
    // getData()
    const foo = async () => {
      try {
        const res = await fetch('https://localhost:3000/people')
        console.log('Rs=>', res);
      } catch {
        console.log('cant get res')
      }
    };
    foo()
  },[])
  return (
    <div>
      <TopHeader />
      <Main/>
    </div>
  )
}

export default HomePage
