import React from 'react'

const TodoList = ({ list, setList }) => {
    return (
        <div>
            {list.map((todo, i) => (
                <div key={i}>
                    <input type="checkbox" onClick={() => {
                        todo.status = !todo.status
                        setList([...list])
                    }} />
                    <span className={todo.status === true ? "lineThrough" : "simple"}>{todo.title}</span>
                    <button onClick={() => {
                        list.splice(i, 1)
                        setList([...list])
                    }}>remove</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList