
import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './components/contexts/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={theme.main}>
      <Navbar />
    </div>
  )
}

export default App
