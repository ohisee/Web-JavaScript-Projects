import React, { Component } from 'react';

/**
 * Implement lazy loading in React using higher 
 * order component approach
 * @param {*} importComponent - a function which uses dynamic import that returns a Promise
 */
const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }

    componentDidMount = () => {
      importComponent()
        .then(cmp => {
          this.setState({ component: cmp.default })
        });
    }

    render() {
      const Cmp = this.state.component;
      return Cmp ? <Cmp {...this.props} /> : null;
    }
  }
};

export default asyncComponent;
