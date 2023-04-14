import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ list, handleStatus }) => {
    return (
        <div>
            {list.map((element, index) => {
                return <TodoItem element={element} key={index} handleStatus={handleStatus} />
            })}
        </div>
    )
}

export default TodoList