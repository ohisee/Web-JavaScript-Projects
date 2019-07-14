import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

/**
 * Initially, this is a stateless component using functional form
 * Updated to use class component in order to leverage React PropTypes
 * @param {*} props 
 */
export class BurgerIngredient extends Component {

  /**
   * Render ()
   * @returns ingredient
   */
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case ('onion'):
        ingredient = <div className={classes.Onion}></div>;
        break;
      case ('tomato'):
        ingredient = <div className={classes.Tomato}></div>;
        break;
      default:
        ingredient = null;
        break;
    };

    return ingredient;
  };

}

/**
 * Props type validation
 */
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
