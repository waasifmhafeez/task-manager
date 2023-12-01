import React from 'react'
import {useSelector} from 'react-redux'

const Cards = ({ name, colName, title, description, date, dueDate, priorityLevel, status, }) => {

  return (
    <>
      {(status == colName) && (
        <div div className='max-w-full h-56 bg-white rounded-md my-2 p-2' >
          <div className='bg-red-500 w-12 px-2 py-0 rounded-2xl text-white font-serif text-[12px] text-center'>{priorityLevel}</div>
          <p className='text-[18px] font-serif font-bold m-0 '>{title}</p>
          <p className='text-[12px] '>{description}</p>
          <div className='bg-gray-200 w-auto px-2 py-1 rounded-2xl text-gray-400 font-serif text-[14px] text-center shadow-sm mb-2'>{name}</div>
          <div className='flex justify-between my-1'>
            <div className='bg-gray-400 w-20 px-2 py-1 rounded-2xl text-white font-serif text-[14px] text-center'>{date}</div>
            <div className='bg-red-500 w-20 px-2 py-1 rounded-2xl text-white font-serif text-[14px] text-center'>{dueDate}</div>
          </div>
          <div className='flex justify-end mt-3'>
            <button className='bg-gray-300 py-1 px-2 rounded-md font-serif mr-2 shadow-md'>Edit</button>
            <button className='bg-red-400 py-1 px-2 rounded-md font-serif mr-2 shadow-md' >Delete</button>
          </div>
        </div> 
      )}
    </>
  )
}

export default Cards
