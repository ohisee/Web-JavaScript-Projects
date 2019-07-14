import React from 'react';
import classes from './Burger.css';
import { BurgerIngredient } from './BurgerIngredient/BurgerIngredient';

/**
 * Burger funtional component using ES6 
 * @param {*} props 
 */
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
      }) // [ , ] array of burger ingredients, and key must be same as defined in BurgerIngredient
    })
    .reduce((arr, currentValue) => {
      return arr.concat(currentValue);
    }, []); // [] empty array as initial value
  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  // console.log('Ingredients ', transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  // else {
  //   transformedIngredients.sort((a, b) => {
  //     return ingredientsDisplayOrder[a.props.type] - ingredientsDisplayOrder[b.props.type];
  //   });
  // }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
