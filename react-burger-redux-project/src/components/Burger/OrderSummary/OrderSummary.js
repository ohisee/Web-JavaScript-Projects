import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

/**
 * Updated to a class component to leverage React life cycle hook
 * @param {*} props 
 */
class OrderSummary extends Component {

  /**
   * OrderSummary is wrapped inside Modal meaning it can be a functional component
   * the following is for debugging purpose
   * @see Modal component
   */
  componentWillUpdate() {
    // console.log('[OrderSummary] componentWillUpdate');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igkey => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: 'capitalize' }}>{igkey}</span>: {this.props.ingredients[igkey]}
          </li>
        )
      });

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        {this.props.isAuth
          ? <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
          : <Auxiliary>
            <Button btnType="Success" clicked={this.props.authToPurchase}>SIGNIN TO ORDER</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>ORDER AS GUEST</Button>
          </Auxiliary>}

      </Auxiliary>
    );
  }


};

export default OrderSummary;