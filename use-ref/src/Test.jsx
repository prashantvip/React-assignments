import { useEffect, useRef, useState } from "react"

const Test = () => {
    const [counter, setCounter] = useState(10)
    const counterRef = useRef(null)
    useEffect(() => {
        counterRef.current = setInterval(() => {
            setCounter((p) => p + 1)
        }, 1000)

        return () => {
            clearInterval(counterRef.current)
        }
    }, [])
    return (
        <div>
            {counter}
            <button onClick={() => { clearInterval(counterRef.current) }}>pause</button>
        </div>
    )
}

export default Test