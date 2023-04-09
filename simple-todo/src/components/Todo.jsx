import React, { useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")

    const handleClick = () => {
        setData([...data, text])
    }
    return (
        <div>
            <input type="text" placeholder='enter todo' onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={handleClick}>Add</button>
            <TodoList data={data} />
        </div>
    )
}

export default Todo