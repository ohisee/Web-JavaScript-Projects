/**
 * @fileoverview Ingridient component using custom hook
 */
import React, { useEffect, useCallback, useReducer, useMemo } from "react";
import Search from "./Search";
import IngridientForm from "./IngredientForm";
import IngridientList from "./IngridientList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../hooks/http";

function id() {
  return ((Math.random() + Math.random()) * 2836674389).toString(36).replace(/\./, '');
}

function ingridientReducer(currentIngridientState, action) {
  switch (action.type) {
    case 'SET':
      return {
        adjusted: action.ingridients,
        holder: action.ingridients,
        counterToShowModal: 0,
      };
    case 'UPDATE':
      return {
        ...currentIngridientState,
        adjusted: action.ingridients,
      };
    case 'ADD':
      return {
        ...currentIngridientState,
        adjusted: [...currentIngridientState.adjusted, action.ingridient],
        holder: [...currentIngridientState.holder, action.ingridient],
      };
    case 'DELETE':
      return {
        adjusted: currentIngridientState.adjusted.filter(ig => ig.id !== action.id),
        holder: currentIngridientState.holder.filter(ig => ig.id !== action.id),
        counterToShowModal: currentIngridientState.counterToShowModal + 1,
      };
    case 'CLEAR':
      return {
        ...currentIngridientState,
        counterToShowModal: 0,
      };
    default:
      throw new Error('Incorrect state');
  }
}

function IngridientsUseCustomHook() {
  // [] as initial state
  const [userIngridients, dispatch] = useReducer(
    ingridientReducer, { adjusted: [], holder: [], counterToShowModal: 0 });
  const {
    isLoading,
    data,
    error,
    requestExtra,
    operation,
    sendRequest,
    clear } = useHttp();

  // Initial load
  useEffect(() => {
    console.log("Get init list");
    sendRequest(
      'https://jsonplaceholder.typicode.com/posts',
      'GET',
      null,
      null,
      'load_init');
  }, [sendRequest]);

  // useHttp's sendRequest function updates dispatchState, so it triggers re-rendering.
  // After re-rendering is done, useEffect should be called.
  // Set useHttp's data as dependency.
  useEffect(() => {
    if (data && !error && operation === 'delete_ingridient') {
      dispatch({ type: 'DELETE', id: requestExtra });
    } else if (data && !error && operation === 'add_ingridient') {
      dispatch({
        type: 'ADD',
        ingridient: { id: id(), title: data.title, amount: data.body }
      });
    } else if (data && !error && operation === 'load_init') {
      const result = data.slice(0, 11);
      const ingridients = [].concat(result.map(d => (
        {
          id: id(),
          title: d.title.slice(0, 20) + '...',
          amount: Math.floor(Math.random() * 100)
        })));
      dispatch({ type: 'SET', ingridients: ingridients });
    }
  }, [data, error, requestExtra, operation]);

  // Add one ingridient
  const addIngridientHandler = useCallback(ingrident => {
    sendRequest('https://jsonplaceholder.typicode.com/posts',
      'POST',
      JSON.stringify({
        title: ingrident.title,
        body: ingrident.amount,
        userId: 1,
      }),
      null,
      'add_ingridient');
  }, [sendRequest]);

  // Remove one ingridient
  const removeIngridientHandler = useCallback(id => {
    sendRequest(
      'https://jsonplaceholder.typicode.com/posts/1',
      'DELETE',
      null,
      id,
      'delete_ingridient');
  }, [sendRequest]);

  const filteredIngridientsHandler = useCallback(filteredIngridients => {
    dispatch({ type: 'UPDATE', ingridients: filteredIngridients });
  }, []);

  // Store data that no need to re-create after every rendering
  // cycle of hosting component
  const ingridientList = useMemo(() => {
    return (
      <IngridientList
        ingridients={userIngridients.adjusted}
        onRemoveItem={removeIngridientHandler} />
    );
    // Re-render this function when userIngridients change
    // or onRemoveIngridientHandler change
  }, [userIngridients.adjusted, removeIngridientHandler]);

  return (
    <div>
      {(error || userIngridients.counterToShowModal > 3)
        && <ErrorModal
          onClose={() => { clear(); dispatch({ type: 'CLEAR' }); }}>{'Something went wrong'}</ErrorModal>}
      <section>
        <IngridientForm
          onAddIngridient={addIngridientHandler}
          loading={isLoading} />
        <Search
          ingridients={userIngridients.holder}
          onLoadIngridents={filteredIngridientsHandler} />
        {ingridientList}
      </section>
    </div>
  );
}

export default IngridientsUseCustomHook;
