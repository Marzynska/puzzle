import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
