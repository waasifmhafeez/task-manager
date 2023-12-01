import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux'

const Bars = ({ colName, color, text }) => {
  
  const task = useSelector(state => state.Task.people[0])
  console.log('task===>> ', task.tasks)

  return (
      <div>
        <div className={`h-12 w-full bg-gray-50 my-3 border-t-4 rounded-sm border-${color}-400 shadow-sm p-2 font-semibold`}>{colName}</div>
      <div className='bg-gray-100 rounded-md shadow-md  h-full w-full p-2' >
        {task?.tasks ? (
          task.tasks.map(item => (
            <Cards key={item.TaskId} name={task.name} colName={colName} {...item} />
          ))
        ) : (
          ''
        )}
          <div className='text-center text-[12px] font-mono text-gray-400'>{text}</div>
        </div>
      </div>
  )
}

export default Bars

// {
//   task && task?.tasks.map((item) => {
//     return (
//       <Cards key={item.TaskId} name={task?.name} colName={colName} {...item} />
//     )
//   })
// }