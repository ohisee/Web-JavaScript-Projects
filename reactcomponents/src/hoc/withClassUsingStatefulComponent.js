import React, { Component } from 'react';

/**
 * Another implementation of higher order component using stateful component
 * added ref as forwarded ref
 * @param {*} WrappedComponent 
 * @param {*} className 
 */
const withClassUsingStatefulComponent = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return (
      <WithClass {...props} forwardedRef={ref} />
    );
  });
};

export default withClassUsingStatefulComponent;