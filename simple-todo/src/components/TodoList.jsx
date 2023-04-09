import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ data, handleStatus }) => {
    // console.log(data);
    return (
        <div>
            {data.map((element) => {
                return <TodoItem element={element} handleStatus={handleStatus} />
            })}
        </div>
    )
}

export default TodoList