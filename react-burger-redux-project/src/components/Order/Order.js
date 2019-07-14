import React from 'react';

import classes from './Order.css';

/**
 * Order functional component
 * @param {*} props 
 */
const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={
          {
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            padding: '2px',
            boxShadow: '5px 8px 10px #cccccc'
          }}>{ig.name} ({ig.amount})</span>
    )
  });

  return (
    <div className={classes.Order}>
      {/* <p>{props.ingredients}</p> */}
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  );
};

export default order;
