import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

/**
 * Higher order component return an anonymous class
 * @param {*} WrappedComponent 
 */
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    /**
     * Call before child components complete mounting
     * No side effect included because only registering HTTP req and res interceptors
     */
    componentWillMount = () => {
      this.reqInterceptor = axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      }, (error) => {
        return Promise.reject(error);
      });
      // response => response, meaning just return the response
      this.resInterceptor = axios.interceptors.response.use(response => response,
        (error) => {
          this.setState({ error: error });
        });
    }

    /**
     * Release interceptors to avoid memory leak
     */
    componentWillUnmount = () => {
      // console.log('Error Handler will unmount ', this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
      // console.log('Error Handler ----- eject interceptor -----');
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? 'Error Occured, try again' : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
