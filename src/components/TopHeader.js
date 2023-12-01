import React from 'react'

const TopHeader = () => {
  return (
    <div className='w-full h-20 border border-gray-400 bg-gray-50 shadow-sm grid grid-cols-5'>
      <div className='col-span-3 border border-gray-300 flex' >
        <h1 className='font-serif'>Pepify</h1>
        <div className=' h-10 w-[2px] bg-gray-400 mt-2 mx-3' ></div>
        <h1 className='font-medium'>Task Management</h1>
      </div>
      <div className='flex items-end pb-2 border border-gray-300 bg-gray-100 col-span-2'>
        <input type='text' placeholder='Search..' className="bg-gray-50 rounded-lg border-2 border-gray-200 shadow-sm h-12 w-60 p-2 mx-3" />
        <button className='bg-green-400 px-3 py-2 rounded-xl border-2 border-green-500 shadow-md text-white font-serif '>Search</button>
        <button className='bg-red-600 px-3 py-2 mx-3 rounded-xl border-2 border-green-700 shadow-md text-white font-serif '>Logout</button>
        <button className='bg-gray-400 px-3 py-2 mx-2 rounded-xl border-2 border-green-700 shadow-md text-white font-serif w-full '>Add Task</button>
      </div>
    </div>
  )
}

export default TopHeader
