import React from 'react'

const TodoItem = ({ element, handleStatus }) => {
    return (
        <div>
            {element.title} - {element.status ? "Done" : "Not done"}
            <button onClick={() => handleStatus(element.id)}>toggle</button>
        </div>
    )
}

export default TodoItem