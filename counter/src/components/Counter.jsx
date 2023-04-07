import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleChange = (value) => {
        return value === 2
            ? setCounter(counter * 2)
            : setCounter(counter + value);
    }
    return (
        <div>
            <h3 className={counter % 2 === 0 ? "green" : "red"}>Counter : {counter}</h3>
            <button onClick={() => { handleChange(1) }}>Add 1</button>
            <button onClick={() => { handleChange(-1) }}>Subtract 1</button>
            <button onClick={() => { handleChange(2) }}>Double</button>
        </div>
    )
}

export default Counter