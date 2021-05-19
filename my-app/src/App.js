import {useState} from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals';
function App() {

  const [showModal,setShowModal]=useState(false);

  const showModalHandler=()=>{
       setShowModal(true);
  }
  const hideModalHandler=()=>{
    setShowModal(false);
  }
  return (
    <div className="App">
      <Header showModal={showModalHandler}/>
      <br/>
      <main>
     {showModal && <Cart hideModal={hideModalHandler} />}
      <Meals/>
      </main>

    </div>
  );
}

export default App;
