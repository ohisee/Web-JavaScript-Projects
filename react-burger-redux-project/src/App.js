import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actionCreators from './store/actions/index';

/**
 * Async lazy loading component
 */
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

/**
 * Async lazy loading component
 */
const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

/**
 * Async lazy loading component
 */
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount = () => {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        {/* <Route path='/auth' component={Auth} /> */}
        <Route path='/auth' component={asyncAuth} />
        <Route path='/checkout' component={asyncCheckout} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          {/* <Route path='/checkout' component={Checkout} /> */}
          <Route path='/checkout' component={asyncCheckout} />
          {/* <Route path='/orders' component={Orders} /> */}
          <Route path='/orders' component={asyncOrders} />
          <Route path='/logout' component={Logout} />
          {/* <Route path='/auth' component={Auth} /> */}
          <Route path='/auth' component={asyncAuth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {/* <BurgerBuilder />
          <Checkout /> */}
          {/* <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path='/logout' component={Logout} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch> */}
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actionCreators.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(App));
