import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import { useState } from 'react';
import Overview from './components/Overview/Overview';
import Home from './components/Home/Home';

const RouteSwitch = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  return (
    <BrowserRouter>
      <NavBar items={itemsInCart}></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
