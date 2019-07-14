import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Onion', type: 'onion' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

/**
 * Build controls consisting control using function form 
 * Using ES6 function return format without return keyword
 * @param {*} props 
 */
const buildControls = (props) => (
  <Auxiliary>
    <div className={classes.Price}>
      <span>Current Price: {props.price.toFixed(2)}</span>
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'ORDER'}</button>
    </div>
    <div className={classes.BuildControls}>
      {controls.map((el) => (
        <BuildControl
          key={el.label}
          label={el.label}
          added={() => props.ingredientAdded(el.type)}
          removed={() => props.ingredientRemoved(el.type)}
          disabled={props.disabled[el.type]} />
      ))}
    </div>
  </Auxiliary>
);

export default buildControls;
