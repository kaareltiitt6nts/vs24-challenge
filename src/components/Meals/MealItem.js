import "./MealItem.css"
import Button from "../UI/Button"

const MealItem = (props) => {
    const {image, name, price, description} = props

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
                    <Button onClick={() => console.log("hi")}>Place an order</Button>
                </div>
            </article>
        </li>
    )
}

export default MealItem