import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducer } from './reducer/combineReducer';
import thunk from 'redux-thunk';
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(combineReducer,composeEnhancer(applyMiddleware(thunk)))
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
