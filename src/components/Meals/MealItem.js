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
        <li className="meal-item">
            <article>
                <img src={require(`../../assets/${image}`)} alt={name}/>
                <div>
                    <h3 className="meal-item-name">{name}</h3>
                    <p className="meal-item-price">{Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(price)}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <div className="meal-item-actions">
                    <Button onClick={() => handleOrder(props)}>Add to cart</Button>
                </div>
            </article>
        </li>
    )
}

export default MealItem