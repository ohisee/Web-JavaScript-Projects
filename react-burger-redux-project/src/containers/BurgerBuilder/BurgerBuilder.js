import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../axiosOrder';
import * as actionCreators from '../../store/actions/index';

/**
 * Stateful component as a container
 */
export class BurgerBuilder extends Component {

  state = {
    purchasing: false,
    // loading: false,
    // error: false
  };

  componentDidMount = () => {
    this.props.onInitIngredients();
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
    return (sum > 0);
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.setState({ purchasing: true });
      this.props.onSetRedirectPath('/checkout');
      // this.props.history.push('/auth');
    }
  }

  /**
   * Used by Modal, handle Cancel button 
   */
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  /**
   * Used by Modal, Handle route to checkout page
   */
  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    // const searchParams = [];
    // for (let ikey in this.props.ings) {
    //   searchParams.push(`${encodeURIComponent(ikey)}=${encodeURIComponent(this.props.ings[ikey])}`);
    // }
    // searchParams.push(`price=${this.props.price}`);
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + searchParams.join('&')
    // });
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }

  /**
   * Used by Modal, Handle route to auth and then checkout page after success auth
   */
  purchaseContinueAuthHandler = () => {
    this.props.onSetRedirectPath('/checkout');
    this.props.history.push('/auth');
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients cannot be loaded</p> : <Spinner />;
    if (this.props.ings != null) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated} />
        </Auxiliary>
      );
      orderSummary = (<OrderSummary
        ingredients={this.props.ings}
        price={this.props.price}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        authToPurchase={this.purchaseContinueAuthHandler}
        isAuth={this.props.isAuthenticated} />);
    }
    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Auxiliary>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actionCreators.addIngredients(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actionCreators.removeIngredients(ingName)),
    onInitIngredients: () => dispatch(actionCreators.initIngredients()),
    onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
    onSetRedirectPath: (path) => dispatch(actionCreators.setAuthRedirectPath(path))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, Order));
