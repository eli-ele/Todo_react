import React from 'react'

const Todo = ({todoId,checkTodoFunction,todo,deleteTodoFunction}) => {
  return (
    <div className='listdiv'
        key={todoId}>
      <input
         type="checkbox"
         checked={todo.completed}
         onChange={()=>checkTodoFunction(todoId)}
       />
      <li
        className='lilist'
        style={{
        listStyle: 'none', 
        textDecoration: todo.completed ? "line-through" : "none",
        color:todo.completed?"grey":"grey",
    }}>
        {todo.text}
     </li>
  <button className="delete"onClick={()=>deleteTodoFunction(todo.text)}>X</button>
  </div>

  )
}

export default Todo