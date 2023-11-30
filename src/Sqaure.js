import React from 'react'

const Sqaure = ({value, handleClick}) => {
  return (
    <>
      <button style={{height:'34px',width:'34px', fontWeight:'800'}} className='sqaure' onClick={handleClick}>{value}</button>
    </>
  )
}

export default Sqaure
