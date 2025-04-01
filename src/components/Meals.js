import { useEffect, useState } from "react"
import MealItem from "./MealItem"

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
      const fetchMeals = async () => {
        fetch("http://localhost:3001/meals")
        .then(response => response.json())
        .then(data => setMeals(data))
      }

      fetchMeals()
    }, [])

    return (
        <ul id="meals">
            {meals.map(meal => {
                return <MealItem name={meal.name} image={meal.image} description={meal.description} price={meal.price}/>
            })}
        </ul>
    )
}

export default Meals