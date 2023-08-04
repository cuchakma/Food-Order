import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";
import DispatchProvider from "./store/DispatchProvider";
import { useGlobalStore } from "./customHook/customHooks";

function App() {
  //state, dispatcher
  const [updatedCartState, dispatcher] = useGlobalStore();

  //state from global store
  const { modalState } = updatedCartState;
  
  return (
    <CartProvider state={updatedCartState}>
      <DispatchProvider state={dispatcher}>
        {modalState && <Cart/>}
        <Header/>
        <Meals/>
      </DispatchProvider>
    </CartProvider>
  );
}

export default App;
