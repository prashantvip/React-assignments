import React, { useState, useEffect } from 'react'

const Timer = ({ initial, final }) => {
    const [time, setTime] = useState(initial)

    useEffect(() => {
        let id = setInterval(() => {
            setTime((e) => {
                if (e >= final) {
                    clearInterval(id)
                    return e
                }
                return e + 1
            })
        }, 1000);

        return () => {
            clearInterval(id)
        }
    }, [time])
    return (
        <div>{time}</div>
    )
}

export default Timer