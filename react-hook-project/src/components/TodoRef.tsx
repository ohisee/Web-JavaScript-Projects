/**
 * @fileoverview Todo using useRef hook
 */
import React, { useEffect, useReducer, useRef, useState, useMemo } from "react";
import { randomId } from "./random";
import axios from "axios";
import TodoList from "./TodoList";

type TodoType = { id: string, name: string };
type PayloadType = { type: string, payload: TodoType, payloads: TodoType[] };

/**
 * Typescript React functional component,
 * Functional component name must be in Upper case
 */
const TodoRef: React.FC = () => {

  const [inputIsValid, setInputIsValid] = useState(false);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const todoListReducer = (state: TodoType[], action: PayloadType) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET_LIST':
        return action.payloads;
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [reducerTodoList, dispatch] = useReducer(todoListReducer, []);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      const todos: TodoType[] = [];
      const td: TodoType[] = res.data.map((d: any) => ({ id: randomId(), name: d.title }));
      todos.push(...td.slice(0, 10));

      dispatch({ type: 'SET_LIST', payload: todos[0], payloads: todos });
      console.log(todos);
    });

    // Cleanup
    return () => {
      console.log('Cleanup');
    };
  }, []);

  const todoAddHandler = () => {
    // todoInputRef.current holds the html element
    if (todoInputRef.current) {
      const inputTodo = todoInputRef.current.value;

      dispatch({ type: 'ADD', payload: { id: randomId(), name: inputTodo }, payloads: [] });
      axios.post('https://jsonplaceholder.typicode.com/posts', { name: inputTodo })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  const todoRemoveHandler = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id: id, name: '' }, payloads: [] });
  };

  const inputValidationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim() === '') {
      setInputIsValid(false)
    } else {
      setInputIsValid(true);
    }
  };

  return (
    <React.Fragment>
      <h3>Using React useRef hook</h3>
      <input
        type="text"
        placeholder="to do"
        ref={todoInputRef}
        onChange={inputValidationHandler}
        style={{ backgroundColor: inputIsValid ? 'transparent' : '#ff6347' }}
      />
      <button type="button" onClick={todoAddHandler}>Add</button>
      {useMemo(() =>
        (<TodoList items={reducerTodoList} onClick={todoRemoveHandler} />),
        [reducerTodoList])}
    </React.Fragment>
  );
};

export default TodoRef;
