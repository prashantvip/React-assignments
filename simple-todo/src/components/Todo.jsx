import React, { useState } from 'react'
import TodoList from './TodoList'
import { nanoid } from 'nanoid'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])

    const addTodo = () => {
        const payload = {
            id: nanoid(5),
            title: todo,
            status: false
        }
        setList([...list, payload])
    }

    const handleStatus = (id) => {
        setList([...list.map((e) => (e.id === id ? { ...e, status: !e.status } : e))])
    }
    return (
        <div>
            <input type="text" placeholder='enter todo' onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add todo</button>
            <TodoList list={list} handleStatus={handleStatus} />
        </div>
    )
}

export default Todo