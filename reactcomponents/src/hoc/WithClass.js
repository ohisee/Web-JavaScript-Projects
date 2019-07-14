import React from 'react';

/**
 * A higher order component
 * @param {*} props 
 */
const withClass = (props) => (
  <div className={props.classes}>
    {props.children}
  </div>
);

export default withClass;