import "./MealItem.css"
import Button from "../UI/Button"

const MealItem = (props) => {
    const {image, name, price, description} = props

    return (
        <li>
            <article>
                <img src={require(`../../assets/${image}`)} alt={name} className="product-thumbnail"/>
                <div>
                    <h3>{name}</h3>
                    <p>{Intl.NumberFormat("en-ee", {style:"currency", currency:"EUR"}).format(price)}</p>
                    <p>{description}</p>
                </div>
                <Button onClick={() => console.log("hi")}>Place an order</Button>
            </article>
        </li>
    )
}

export default MealItem