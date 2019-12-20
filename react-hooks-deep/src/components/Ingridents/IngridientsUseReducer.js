/**
 * @fileoverview Ingridient component using useReducer hook
 */
import React, { useState, useEffect, useCallback, useReducer, useMemo } from "react";
import Search from "./Search";
import IngridientForm from "./IngredientForm";
import IngridientList from "./IngridientList";
import ErrorModal from "../UI/ErrorModal";

function id() {
  return ((Math.random() + Math.random()) * 2836674389).toString(36).replace(/\./, '');
}

function ingridientReducer(currentIngridientState, action) {
  switch (action.type) {
    case 'SET':
      return {
        adjusted: action.ingridients,
        holder: action.ingridients,
      };
    case 'UPDATE':
      return {
        ...currentIngridientState,
        adjusted: action.ingridients,
      };
    case 'ADD':
      return {
        adjusted: [...currentIngridientState.adjusted, action.ingridient],
        holder: [...currentIngridientState.holder, action.ingridient],
      };
    case 'DELETE':
      return {
        adjusted: currentIngridientState.adjusted.filter(ig => ig.id !== action.id),
        holder: currentIngridientState.holder.filter(ig => ig.id !== action.id),
      };
    default:
      throw new Error('Incorrect state');
  }
}

function httpReducer(currentHttpState, action) {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...currentHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.error };
    case 'CLEAR':
      return { loading: false, error: null };
    default:
      throw new Error('Http error state');
  }
}

function IngridientsUseReducer() {
  const [countToShowModal, setCountToShowModal] = useState(0);
  // [] as initial state
  const [userIngridients, dispatch] = useReducer(
    ingridientReducer, { adjusted: [], holder: [] });
  const [httpState, dispatchHttp] = useReducer(
    httpReducer, { loading: false, error: null });

  useEffect(() => {
    dispatchHttp({ type: 'SEND' });
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        dispatchHttp({ type: 'RESPONSE' });
        const result = json.slice(0, 11);
        const ingridients = [].concat(result.map(d => (
          {
            id: id(),
            title: d.title.slice(0, 20) + '...',
            amount: Math.floor(Math.random() * 100)
          })));
        dispatch({ type: 'SET', ingridients: ingridients });
      });
  }, []);

  const addIngridientHandler = useCallback(ingrident => {
    dispatchHttp({ type: 'SEND' });
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: ingrident.title,
        body: ingrident.amount,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(json => {
        dispatchHttp({ type: 'RESPONSE' });
        dispatch({
          type: 'ADD',
          ingridient: { id: id(), title: json.title, amount: json.body }
        });
      });
  }, []);

  const onRemoveIngridientHandler = useCallback(id => {
    // Must set as new array into setState
    dispatchHttp({ type: 'SEND' });
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    }).then(response => {
      dispatchHttp({ type: 'RESPONSE' });
      dispatch({ type: 'DELETE', id: id });
      setCountToShowModal(prevCount => prevCount + 1);
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', error: error });
    });
  }, []);

  const filteredIngridientsHandler = useCallback(filteredIngridients => {
    dispatch({ type: 'UPDATE', ingridients: filteredIngridients });
  }, []);

  const clearError = useCallback(() => {
    dispatchHttp({ type: 'CLEAR' });
    setCountToShowModal(0);
  }, []);

  // Store data that no need to re-create after every rendering
  // cycle of hosting component
  const ingridientList = useMemo(() => {
    return (
      <IngridientList
        ingridients={userIngridients.adjusted}
        onRemoveItem={onRemoveIngridientHandler} />
    );
    // Re-render this function when userIngridients change
    // or onRemoveIngridientHandler change
  }, [userIngridients.adjusted, onRemoveIngridientHandler]);

  return (
    <div>
      {(httpState.error || countToShowModal > 3)
        && <ErrorModal onClose={clearError}>{'Something went wrong'}</ErrorModal>}
      <section>
        <IngridientForm
          onAddIngridient={addIngridientHandler}
          loading={httpState.loading} />
        <Search
          ingridients={userIngridients.holder}
          onLoadIngridents={filteredIngridientsHandler} />
        {ingridientList}
      </section>
    </div>
  );
}

export default IngridientsUseReducer;
