import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ data }) => {
    // console.log(data);
    return (
        <div>
            {data.map((element) => {
                return <TodoItem element={element} />
            })}
        </div>
    )
}

export default TodoList