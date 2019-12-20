/**
 * @fileoverview Card component.
 */
import React from "react";
import Styles from './Card.module.css';

const Card = props => {
  return (
    <div className={Styles['card']} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
