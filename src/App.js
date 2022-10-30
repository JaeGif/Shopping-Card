import Main from './components/Main/Main';
import NavBar from './components/Nav/NavBar';
import './reset.css';
import { useState } from 'react';
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <div>
      <RouteSwitch></RouteSwitch>
    </div>
  );
}

export default App;
