import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/futuremoon.ttf';
import './index.css';
import RouteSwitch from './RouteSwitch';
import './reset.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch></RouteSwitch>
  </React.StrictMode>
);
