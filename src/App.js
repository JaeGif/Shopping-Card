import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import { useState } from 'react';
import Store from './components/Overview/Store';
import Home from './components/Home/About';
import Cart from './components/Cart/Cart';

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
    let removeFirstMatchingID = cartItems.findIndex((el) => el.id === id);
    if (removeFirstMatchingID === -1) {
      return;
    } else {
      cartItems.splice(removeFirstMatchingID, 1);
      setCartItems(cartItems);
      onRemoveItemNumUpdate();
    }
  };
  const addItemToCart = (itemObject) => {
    setCartItems([...cartItems, itemObject]);
    onAddItemNumUpdate();
  };

  return (
    <BrowserRouter basename='/Shopping-Card'>
      <NavBar
        removeItemFromCart={removeItemFromCart}
        cart={cartItems}
        items={numItemsInCart}
      ></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/store'
          element={
            <Store
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            />
          }
        />
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
