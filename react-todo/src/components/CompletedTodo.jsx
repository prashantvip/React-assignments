import React, { useState } from 'react'
import CompletedResults from './CompletedResults'

const CompletedTodo = ({ list }) => {
    const [completeTodo, setCompleteTodo] = useState(false)
    return (
        <div>
            <button onClick={() => setCompleteTodo(!completeTodo)}>completed todos</button>
            {completeTodo ? <CompletedResults list={list} /> : null}
        </div>
    )
}

export default CompletedTodo