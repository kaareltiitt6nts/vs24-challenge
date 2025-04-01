import { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import CartContext from '../context/CartContext'
import Button from './UI/Button'

const Header = () => {
    const {cartContents, addToCart} = useContext(CartContext)
    const [cartCount, setCartCount] = useState(0)
    
    useEffect(() => {
        const newCount = cartContents.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
        setCartCount(newCount)
    }, [cartContents])
    

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button onClick={() => {}}>Cart ({cartCount})</Button>
            </nav>
        </header>
    )
}

export default Header