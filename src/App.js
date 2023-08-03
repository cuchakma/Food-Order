import Header from "./components/Layout/Header";
import React from 'react';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";
import useGlobalStore from "./customHook/useGlobalStore";
import { cartReducer } from "./store/cartReducer";
import { defaultState } from "./store/defaultState";

function App() {
  const [updatedCartState, dispatch] = useGlobalStore(cartReducer, defaultState);
  const { modalState }               = updatedCartState;

  return (
    <CartProvider state={updatedCartState}>
      {modalState && <Cart dispatcher={dispatch}/>}
      <Header dispatcher={dispatch}/>
      <Meals dispatcher={dispatch}/>
    </CartProvider>
  );
}

export default App;
