import React from 'react'

const TodoItem = ({ element, handleStatus }) => {
    // console.log(element);
    return (
        <div>
            <h4>{element.id}</h4>
            <h2>
                {element.title} - {element.status ? "Done" : "Not done"}
                <button onClick={() => handleStatus(element.id)}>Toggle</button>
            </h2>
        </div>
    )
}

export default TodoItem