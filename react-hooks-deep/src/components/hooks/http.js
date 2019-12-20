/**
 * @fileoverview Http custom hook
 */
import { useReducer, useCallback } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  operation: null,
};

function httpReducer(currentHttpState, action) {
  switch (action.type) {
    case 'SEND':
      return {
        ...currentHttpState,
        loading: true,
        error: null,
        data: null,
        operation: action.operation
      };
    case 'RESPONSE':
      return {
        ...currentHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
        operation: action.operation,
      };
    case 'ERROR':
      return { loading: false, error: action.error, data: null };
    case 'CLEAR':
      return initialState;
    default:
      throw new Error('Http error state');
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => {
    dispatchHttp({ type: 'CLEAR' });
  }, []);

  // Use useCallback to avoid unnecessary re-render
  const sendRequest = useCallback(
    (url, method, body, requestExtra, operation) => {
      dispatchHttp({ type: 'SEND', operation: operation });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json())
        .then(responseData => {
          dispatchHttp({
            type: 'RESPONSE',
            responseData: responseData,
            extra: requestExtra,
            operation: operation
          });
        }).catch(error => {
          dispatchHttp({ type: 'ERROR', error: error });
        });
    }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    requestExtra: httpState.extra,
    operation: httpState.operation,
    sendRequest: sendRequest,
    clear: clear,
  };
};

export default useHttp;
