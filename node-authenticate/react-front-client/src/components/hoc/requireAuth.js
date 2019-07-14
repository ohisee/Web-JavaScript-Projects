import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (WrappedElement) => {

  class ComposedComponent extends Component {

    /**
     * Component creation life cycle hook, component just rendered
     */
    componentDidMount() {
      this.shouldNavigateAway();
    }

    /**
     * Component update life cycle hook, component just received new props
     */
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return (
        <WrappedElement {...this.props}></WrappedElement>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth.authenticated
    }
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;