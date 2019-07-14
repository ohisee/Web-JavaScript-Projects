import React from 'react';
import classes from './DrawerToggle.css';

/**
 * DrawToggler funtional component using ES6 return without return keyword
 * @param {*} props 
 */
const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;