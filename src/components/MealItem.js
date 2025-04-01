const MealItem = (props) => {
    const {image, name, price, description} = props

    return (
        <li>
            <article>
                <img src={require(`../assets/${image}`)} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
                <p>
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem