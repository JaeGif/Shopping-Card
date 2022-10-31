import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import { useEffect, useState } from 'react';
import Overview from './components/Overview/Overview';
import Home from './components/Home/Home';
import uniqid from 'uniqid';

const App = () => {
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const onAddItemNumUpdate = () => {
    setNumItemsInCart(numItemsInCart + 1);
  };
  const onRemoveItemNumUpdate = () => {
    if (numItemsInCart === 0) {
      return;
    }
    setNumItemsInCart(numItemsInCart - 1);
  };
  const removeItemFromCart = (id) => {
    console.log(id);
    let removeFirstMatchingID = cartItems.findIndex((el) => el.id === id);
    if (removeFirstMatchingID === -1) {
      return;
    } else {
      cartItems.splice(removeFirstMatchingID, 1);
      setCartItems(cartItems);
      onRemoveItemNumUpdate();
      console.log(cartItems);
    }
  };
  const addItemToCart = (itemObject) => {
    setCartItems([...cartItems, itemObject]);
    console.log(cartItems);
    onAddItemNumUpdate();
  };

  return (
    <BrowserRouter>
      <NavBar items={numItemsInCart}></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/store'
          element={
            <Overview
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
