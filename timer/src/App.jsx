import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  const initial = 2
  const final = 8
  return (
    <div className="App">
      <Timer initial={initial} final={final} />
    </div>
  )
}

export default App
