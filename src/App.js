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
      const tempArray = [...cartContents]
      setCartContents(null) // imelik hack, ilmselt kaob kunagi ära kuid isiklikult kahtlen selles
      setCartContents(tempArray)
    }
    else {
      setCartContents(cartContents => [...cartContents, {...productData, quantity: 1}])
    }
  }

  return (
    <CartContext.Provider value={{cartContents, addToCart}}>
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;