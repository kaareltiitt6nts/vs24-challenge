import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./context/CartContext";

const App = () => {
  const [cartContents, setCartContents] = useState([])

  const addToCart = (productData) => {
    const product = cartContents.find(product => product.id === productData.id)

    if (product) {
      product.quantity += 1
    }
    else {
      setCartContents(cartContents => [...cartContents, {...productData, quantity: 1}])
    }

    console.log(cartContents)
  }

  return (
    <CartContext.Provider value={{cartContents, addToCart}}>
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;