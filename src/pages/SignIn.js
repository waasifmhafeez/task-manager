import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='h-screen w-full bg-gray-200 flex flex-col items-center justify-center'>
      <h1 className='font-serif mr-3 text-6xl m-3'>Pepify</h1>
      <div className='h-[75%] w-96 bg-gray-50 rounded-2xl p-3 flex flex-col items-center'>
        <h1 className='font-serif mr-3 text-4xl m-3'>Sign In</h1>
        {/* <label name='name' for='name' >Name</label>
        <input type='text' /> */}

        <div className='flex flex-col  justify-center my-5 w-[75%]'>
          <label for="username" className='m-2 font-mono text-md'>Name :</label>
          <input type="text" id="username" name="username" className='w-full h-10 my-2 p-1 text-[14px] rounded-lg shadow-md '/>
          <br />

          <label for="email" className=''>Email :</label>
          <input type="email" id="email" name="email" autoComplete="off" className='w-full h-10 my-2 p-1 text-[14px] rounded-lg shadow-md' />
          <br />

          <label for="password" className=''>Password :</label>
          <input type="password" id="password" name="password" autoComplete="off" className='w-full h-10 my-2 p-1 text-[14px] rounded-lg shadow-md' />
          <br />
          <div className='flex justify-between'>
            <button className='bg-green-300 py-2 w-20 rounded-lg shadow-md font-serif text-lg text-white' >Sign In</button>
            <Link to='/login' className='bg-blue-300 py-2 w-20 rounded-lg shadow-md text-white text-lg font-serif no-underline text-center' >Log In</Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SignIn
