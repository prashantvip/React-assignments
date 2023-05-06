import { useContext } from "react"
import { CartContext } from "./contexts/CartContext"


const Navbar = () => {
    const { cart } = useContext(CartContext)
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'end',
            padding: '15px',
            fontSize: '28px',
            border: '1px solid red',
            margin: '10px'
        }}>
            Cart : {cart}
        </nav>
    )
}

export default Navbar