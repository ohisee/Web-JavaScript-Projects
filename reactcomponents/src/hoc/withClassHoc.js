import React from 'react';

/**
 * Another implementation of higher order component
 * @param {*} WrappedComponent 
 * @param {*} className 
 */
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;