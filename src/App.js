import { useReducer, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./context/CartContext";
import Modal from "./components/UI/Modal";

const cartReducer = (state, action) => {
  // tuleks teha switch case... too võib veidi oodata
  switch (action.type) {
    case "INPUT_ADD_TO_CART":
      const existingProduct = state.find(item => item.id === action.data.id)

      if (existingProduct) {
        return state.map(
          product => product.id === action.data.id
          ? {...product, quantity: product.quantity + 1} // kui õige product on leitud, siis tõsta quantity 1 võrra
          : product // kui producti id ei ole see, mis vaja, siis ära tee midagi ning tagasta see mis enne juba oli
        )
      } 
      else {
        return [...state, { ...action.data, quantity: 1 }];
      }
    case "INPUT_EMPTY_CART":
      return []
    default:
      return state
  }
}

const App = () => {
  const [state, dispatchCart] = useReducer(cartReducer, [])
  const [showCart, setShowCart] = useState(false)

  return (
    <CartContext.Provider value={{state, dispatchCart, showCart, setShowCart}}>
      {showCart === true && <Modal />}
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;