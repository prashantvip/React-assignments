import { createContext, useState } from "react";
import { styles } from "../styles";


export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(styles.dark)

    // console.log(styles.dark)

    const toggleTheme = () => {
        theme === styles.dark ? setTheme(styles.light) : setTheme(styles.dark)
    }
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
