import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"


const Card = () => {
    const { handleChange } = useContext(CartContext)
    return (
        <div style={{
            width: '200px',
            height: '300px',
            padding: '10px',
            backgroundColor: 'teal'
        }}>
            <button onClick={handleChange}>Add to Cart</button>
        </div>
    )
}

export default Card