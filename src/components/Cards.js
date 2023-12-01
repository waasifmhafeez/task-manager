import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-full h-56 bg-white rounded-md my-2 p-2'>
      <div className='bg-red-500 w-12 px-2 py-0 rounded-2xl text-white font-serif text-[12px] text-center'>high</div>
      <p className='text-[18px] font-bold m-0 '>title</p>
      <p>description</p>
      <div className='bg-gray-400 w-12 px-2 py-1 rounded-2xl text-white font-serif text-[14px] text-center'>high</div>
      <div className='flex justify-between my-1'>
        <div className='bg-red-500 w-20 px-2 py-1 rounded-2xl text-white font-serif text-[14px] text-center'>01-11-23</div>
        <div className='bg-green-500 w-20 px-2 py-1 rounded-2xl text-white font-serif text-[14px] text-center'>29-11-23</div>
      </div>
      <div className='flex justify-end mt-3'>
        <button className='bg-gray-300 py-1 px-2 rounded-md font-serif mr-2 shadow-md'>Edit</button>
        <button className='bg-red-400 py-1 px-2 rounded-md font-serif mr-2 shadow-md' >Delete</button>
      </div>
    </div>
  )
}

export default Cards
