import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import TodoList from './TodoList'
import CompletedTodo from './CompletedTodo'

const Todo = () => {
    const [text, setText] = useState('')
    const [list, setList] = useState([])

    const addTodo = () => {
        const payload = {
            id: nanoid(5),
            title: text,
            status: false
        }
        setList([...list, payload])
    }
    return (
        <div>
            <input type="text" placeholder='enter todo' onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <TodoList list={list} setList={setList} />
            <div>
                <CompletedTodo list={list} />
            </div>
        </div>
    )
}

export default Todo