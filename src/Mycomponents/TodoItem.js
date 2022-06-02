import React from 'react'
// import { Todos } from './Todos'

export const TodoItem = ({todo,onDelete}) => {
  let color={
    backgroundColor:'black'
  }
  return (
    <div className='my-2'>
        <p>{todo.sno}</p>
        <h4>{todo.title}</h4>
        <h4>{todo.desc}</h4>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        <hr style={color} />
    </div>
  )
}
