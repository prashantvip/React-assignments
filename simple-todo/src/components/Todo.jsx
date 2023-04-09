import React, { useState } from 'react'
import TodoList from './TodoList'
import { nanoid } from "nanoid"

const Todo = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")

    const handleClick = () => {
        const payload = {
            title: text,
            status: false,
            id: nanoid(5)
        }
        setData([...data, payload])
    }

    const handleStatus = (id) => {
        setData([...data.map((e) => (e.id === id ? { ...e, status: !e.status } : e))])
    }
    return (
        <div>
            <input type="text" placeholder='enter todo' onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={handleClick}>Add</button>
            <TodoList data={data} handleStatus={handleStatus} />
        </div>
    )
}

export default Todo