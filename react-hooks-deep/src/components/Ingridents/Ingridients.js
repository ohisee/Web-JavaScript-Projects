/**
 * @fileoverview Ingridient component
 */
import React, { useState, useEffect, useCallback } from "react";
import Search from "./Search";
import IngridientForm from "./IngredientForm";
import IngridientList from "./IngridientList";
import ErrorModal from "../UI/ErrorModal";

function id() {
  return ((Math.random() + Math.random()) * 2836674389).toString(36).replace(/\./, '');
}

function Ingridients() {
  const [ingridients, setIngridients] = useState([]);
  const [userAddedIngridients, setUserAddedIngridients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countToShowModal, setCountToShowModal] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        setIsLoading(false);
        const result = json.slice(0, 11);
        const ingridients = [].concat(result.map(d => (
          {
            id: id(),
            title: d.title.slice(0, 20) + '...',
            amount: Math.floor(Math.random() * 100)
          })));
        setIngridients(ingridients);
        setUserAddedIngridients(ingridients);
      });
  }, []);

  const addIngridientHandler = useCallback(ingrident => {
    setIsLoading(true);
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
        setIsLoading(false);
        const ing = { id: id(), title: json.title, amount: json.body };
        setIngridients(prevIngridients => {
          // return [...prevIngridients, { id: id(), ...ingrident }];
          return [...prevIngridients, ing];
        });
        setUserAddedIngridients(prevIngridients => [...prevIngridients, ing]);
      });
  }, []);

  const onRemoveIngridientHandler = useCallback(id => {
    // let adjusted = ingridients.filter(ig => ig.id !== id);
    // if (adjusted) {
    //   setIngridients(adjusted);
    // }
    // Must set as new array into setState
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    }).then(response => {
      setIsLoading(false);
      setIngridients(prevIngridients =>
        prevIngridients.filter(ig => ig.id !== id)
      );
      setUserAddedIngridients(prevIngridients =>
        prevIngridients.filter(ig => ig.id !== id)
      );
      setCountToShowModal(prevCount => prevCount + 1);
    }).catch(error => {
      setError('Something went wrong');
    });
  }, []);

  const filteredIngridientsHandler = useCallback(filteredIngridients => {
    setIngridients(filteredIngridients);
  }, []);

  const clearError = useCallback(() => {
    // React state batching, all set states are executed in one synchronous call
    setError(null);
    setIsLoading(false);
    setCountToShowModal(0);
  }, []);

  return (
    <div>
      {(error || countToShowModal > 3)
        && <ErrorModal onClose={clearError}>{'Something went wrong'}</ErrorModal>}
      <section>
        <IngridientForm
          onAddIngridient={addIngridientHandler}
          loading={isLoading} />
        <Search
          ingridients={userAddedIngridients}
          onLoadIngridents={filteredIngridientsHandler} />
        <IngridientList
          ingridients={ingridients}
          onRemoveItem={onRemoveIngridientHandler}></IngridientList>
      </section>
    </div>
  );
}

export default Ingridients;
