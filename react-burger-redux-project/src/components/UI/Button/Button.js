import React from 'react';
import classes from './Button.css';

/**
 * Functional component as Button
 * @param {*} props 
 */
const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

export default button;
