/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Best Professor List';
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
