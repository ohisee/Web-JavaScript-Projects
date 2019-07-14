import React from 'react';
import logoImg from '../../assets/images/logo1.png';
import classes from './Logo.css';

/**
 * Logo funtional component using ES6 
 * @param {*} props 
 */
const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={logoImg} alt="Burger Logo"/>
  </div>
);

export default logo;
