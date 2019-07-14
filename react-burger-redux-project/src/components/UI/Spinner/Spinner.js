import React from 'react';
import classes from './Spinner.css';

/**
 * Spinner component using functional form
 * @param {*} props 
 */
const spinner = (props) => (
  <div className={classes.Loader}>Loading...</div>
);

export default spinner;
