import Header from "./components/Layout/Header";
import React, {useState} from 'react';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  const [ModalState, SetModalState] = useState(false);

  let modalStateTrue = () => {
    SetModalState(true);
  }

  let modalStateFalse = (value) => {
    SetModalState(false);
  }
  
  return (
    <CartProvider>
      {ModalState && <Cart onClick={modalStateFalse}/>}
      <Header onClick={modalStateTrue}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
