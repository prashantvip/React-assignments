import { useContext } from "react"
import { ThemeContext } from "./contexts/ThemeContext"


const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    console.log(toggleTheme)
    return (
        <div>
            <button style={theme.button} onClick={toggleTheme}>change theme</button>
        </div>
    )
}

export default Navbar