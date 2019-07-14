import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import reducers from './reducers';
import Feature from './components/Feature';

const store = createStore(reducers, {
  auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/feature" component={Feature}></Route>
        <Route path="/signout" component={Signout}></Route>
        <Route path="/signin" component={Signin}></Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'));