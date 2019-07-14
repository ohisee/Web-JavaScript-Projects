/**
 * @fileoverview Error handler
 */
import React, { FC, useState, useEffect } from 'react';
import { AxiosInstance, AxiosError } from 'axios';

/**
 * This is a higher order component, HOC, for HTTP error handling.
 * @param WrappedComponent please be aware this is a functional component
 * @param axios axios HTTP client instance
 */
const withErrorHandler = (WrappedComponent: FC<any>, axios: AxiosInstance) => {

  return (props: any) => {

    const [error, setError] = useState<AxiosError>();

    const requestInterceptor = axios.interceptors.request.use(req => {
      setError(undefined);
      return req;
    });

    const responseInterceptor = axios.interceptors.response.use(res => res, err => {
      setError(err);
      return err;
    });

    useEffect(() => {
      // Clean up
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor] /** Unmount */);

    const errorConfirmedHandler = () => {
      setError(undefined);
    };

    return (
      <React.Fragment>
        <WrappedComponent {...props} />
        <div onClick={errorConfirmedHandler}>{error ? error.message : null}</div>
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
