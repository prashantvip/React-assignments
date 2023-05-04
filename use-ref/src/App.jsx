
import { useRef, useState } from 'react';
import './App.css'
import Test from './Test';

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(10) // it will give an object {current : 10}

  console.log(ref);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => {
        ref.current += 1
        console.log(ref)
      }}>change X</button>
      <button onClick={() => setCount(count + 1)}>add</button>
      <Test />
    </>
  )
}

export default App

// store the value and do not lose it when the component is re-rendered.
// change in this value should not cause re-render.

