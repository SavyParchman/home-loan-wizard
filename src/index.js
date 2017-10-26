import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ADDED IMPORTS
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();

