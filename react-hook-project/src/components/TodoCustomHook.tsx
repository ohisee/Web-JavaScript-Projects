/**
 * @fileoverview Todo using custom React hook
 */
import React, { useEffect, useReducer, useMemo } from "react";
import { randomId } from "./random";
import axios from "axios";
import TodoList from "./TodoList";
import { useFormInput } from "./hooks/from-input-hook";

type TodoType = { id: string, name: string };
type PayloadType = { type: string, payload: TodoType, payloads: TodoType[] };

/**
 * Typescript React functional component,
 * Functional component name must be in Upper case
 */
const TodoCustomHook: React.FC = () => {

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

  const todoInputCustomHook = useFormInput();

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
    const inputTodo = todoInputCustomHook.value;
    dispatch({ type: 'ADD', payload: { id: randomId(), name: inputTodo }, payloads: [] });
    axios.post('https://jsonplaceholder.typicode.com/posts', { name: inputTodo })
      .then(res => console.log(res))
      .catch(err => console.log(err));

  };

  const todoRemoveHandler = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id: id, name: '' }, payloads: [] });
  };

  return (
    <React.Fragment>
      <h3>Using custom hook</h3>
      <input
        type="text"
        placeholder="to do"
        value={todoInputCustomHook.value}
        onChange={todoInputCustomHook.onChange}
        style={{ backgroundColor: todoInputCustomHook.validity ? 'transparent' : '#ff6347' }}
      />
      <button type="button" onClick={todoAddHandler}>Add</button>
      {useMemo(() =>
        (<TodoList items={reducerTodoList} onClick={todoRemoveHandler} />),
        [reducerTodoList])}
    </React.Fragment>
  );
};

export default TodoCustomHook;
