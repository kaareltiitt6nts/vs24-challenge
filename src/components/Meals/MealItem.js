
import "./MealItem.css"
import Button from "../UI/Button"
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const MealItem = (props) => {
    const {id, image, name, price, description} = props
    const {dispatchCart} = useContext(CartContext)

    const handleOrder = (productData) => {
        dispatchCart({type: "INPUT_ADD_TO_CART", data: productData})
    }

    return (
        <li className="product">
            <article className="product-content">
                <img src={require(`../../assets/${image}`)} alt={name} className="product-thumbnail"/>
                <div>
                    <h3 className="product-name">{name}</h3>
                    <p className="product-price">{Intl.NumberFormat("en-ee", {style:"currency", currency:"EUR"}).format(price)}</p>
                    <p className="product-description">{description}</p>
                </div>
                <div>
                    <Button onClick={() => handleOrder(props)}>Place an order</Button>
                </div>
            </article>
        </li>
    )
}

export default MealItem