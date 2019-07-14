import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

/**
 * NavigationItems funtional component using ES6 return without return keyword 
 * @param {*} props 
 */
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {/* <NavigationItem link="/" active>Burger Builder</NavigationItem> */}
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
    {props.isAuthenticated
      ? <NavigationItem link="/logout">Logout</NavigationItem>
      : <NavigationItem link="/auth">Authenticate</NavigationItem>}
  </ul>
);

export default navigationItems;