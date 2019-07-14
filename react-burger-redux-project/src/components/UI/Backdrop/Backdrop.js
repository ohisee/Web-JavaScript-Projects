import React from 'react';
import classes from './Backdrop.css';

/**
 * Backdrop funtional component using ES6 
 * @param {*} props 
 */
const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
