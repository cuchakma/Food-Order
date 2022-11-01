import Header from "./components/Layout/Header";
import React, {useState} from 'react';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';

  
function App() {
  const [ModalState, SetModalState] = useState(false);

  let modalStateTrue = () => {
    SetModalState(true);
  }

  let modalStateFalse = (value) => {
    SetModalState(false);
  }
  
  return (
    <React.Fragment>
      {ModalState && <Cart onClick={modalStateFalse}/>}
      <Header onClick={modalStateTrue}/>
      <main>
      <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
