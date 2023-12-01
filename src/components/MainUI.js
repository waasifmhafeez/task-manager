import React from 'react'
import Bars from './bars'
import {useSelector} from 'react-redux'

const Main = () => {

  const task = useSelector(state => state.Task.list);

  console.log('Task=> ', task);

  return (
    <div className=' max-h-screen h-screen p-3 m-2 grid grid-cols-5 gap-10'>
      {task && task.map(({ colName, color, text }) => {
        return (<Bars colName={colName} color={color} text={text} />)
      })}
      
      
      
      
      {/* <div>
        <div className='h-12 w-full bg-gray-50 my-3 border-t-4 rounded-sm border-red-400 shadow-sm'>hello</div>
        <div className='bg-gray-100 rounded-md shadow-md  h-full w-full' ></div>
      </div> */}
      {/* <div className='bg-gray-100 rounded-md shadow-md  h-full w-full' ></div>
      <div className='bg-gray-100 rounded-md shadow-md border-2 border-[#e8dada] h-full w-full' ></div>
      <div className='bg-gray-100 rounded-md shadow-md border-2 border-[#e8dada] h-full w-full' ></div>
      <div className='bg-gray-100 rounded-md shadow-md border-2 border-[#e8dada] h-full w-full' ></div>
      <div className=' h-full w-48' ></div> */}
    </div>
  )
}

export default Main