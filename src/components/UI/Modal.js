import { Fragment, useEffect, useRef, useState, useContext } from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import CartContext from "../../context/CartContext"

const Modal = () => {
    const {state, dispatchCart, showCart, setShowCart} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const modal = useRef() // ???????

    useEffect(() => {
        if (showCart === true) {
            modal.current.showModal()
        }
    }, [showCart])

    const orderHandler = () => {
        dispatchCart({type: "INPUT_EMPTY_CART"})
        setShowCart(false) // ideaalis peaks ta ka midagi tegema aga see selleks
    }

    const cancelHandler = () => {
        setShowCart(false)
    }

    const formatPrice = (price) => {
        return Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(price)
    }

    const ModalOverlay = () => {
        return (
            <dialog className="modal cart" ref={modal}>
                <h2>Your cart</h2>
                {
                    state.length === 0 ? (<p>The cart is empty!</p>) :
                    <ul>
                        {state.map((item, index) => {
                            return (
                                <li className="cart-item" key={index}>
                                    <p>{item.name} - {item.quantity}</p>
                                </li>
                            )
                        })}
                    </ul>
                }
                <p className="cart-total">{formatPrice(state.reduce((acc, item) => acc + item.price * item.quantity, 0))}</p>
                <div className="modal-actions">
                        <Button onClick={() => cancelHandler()}>Cancel</Button>
                        <Button onClick={() => orderHandler()}>Place order</Button>
                </div>
            </dialog>
        )
    }

    return ( 
        <Fragment>
            {
                ReactDOM.createPortal(
                    <ModalOverlay/>,
                    document.getElementById("modal")
                )
            }
        </Fragment>
    )
}

export default Modal