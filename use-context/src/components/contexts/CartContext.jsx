import { createContext, useState } from "react";


export const CartContext = createContext() //creates the box

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(0)

    const handleChange = () => {
        setCart(cart + 1)
    }
    // connects to the box
    return <CartContext.Provider value={{ cart, handleChange }}>{children}</CartContext.Provider>
}