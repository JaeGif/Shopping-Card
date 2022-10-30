import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Main from './components/Main/Main';
import NavBar from './components/Nav/NavBar';
import Store from './components/Store';
import { useState } from 'react';

const RouteSwitch = () => {
  const [itemsInCart, setItemsInCart] = useState(1);

  return (
    <BrowserRouter>
      <NavBar items={itemsInCart}></NavBar>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
