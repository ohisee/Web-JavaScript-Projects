import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import productReducer from "./store/reducers/products";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ProductsProvider from "./context/product-context";

import configureProductsStore from "./hooks-store/product-store";

/**
 * Set up store, keep for looking up syntax and future reference.
 */
const rootReducer = combineReducers({
  shop: productReducer
});
const store = createStore(rootReducer);
const storeReducerProvider = (<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>);

/**
 * Use React context approach
 */
const useContextApi = (<ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ProductsProvider>);

/**
 * Use custom hook store
 */
configureProductsStore();

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
