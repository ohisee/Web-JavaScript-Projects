import React, { useState, useEffect, useReducer } from "react";
import { randomId } from "./random";
import axios from "axios";

type TodoType = { id: string, name: string };
type PayloadType = { type: string, payload: TodoType, payloads: TodoType[] };

/**
 * Typescript React functional component,
 * Functional component name must be in Upper case
 * @param props
 */
const Todo: React.FC = (props: {}) => {

  // Set an initial state, using Hook, must be at top level, cannot be inside another function
  const inputState:
    [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');

  const [inputToDo, setToDoValue] = inputState;

  const [todoList, setTodoList] = useState<TodoType[]>([]);

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
      setTodoList(todos);

      dispatch({ type: 'SET_LIST', payload: todos[0], payloads: todos });

      console.log(todos);
    });
    // Cleanup
    return () => {
      console.log('Cleanup');
    };
  }, []);

  const mouseMoveHandler = (event: MouseEvent) => {
    console.log(event.clientX, event.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setToDoValue(event.currentTarget.value);
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat({ id: randomId(), name: inputToDo }));
    dispatch({ type: 'ADD', payload: { id: randomId(), name: inputToDo }, payloads: [] });
    axios.post('https://jsonplaceholder.typicode.com/posts', { name: inputToDo })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const todoRemoveHandler = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id: id, name: '' }, payloads: [] });
  };

  // Merge into one state. more codes, use separate useState
  /*const [todoState, setTodoState] =
    useState<{userInput: string, todoList: string[]}>({userInput: '', todoList: []});

  const inputToDoChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodoState({
      userInput: event.currentTarget.value,
      todoList: todoState.todoList
    });
  };

  const addTodoHandler = () => {
    setTodoState({
      userInput: todoState.userInput,
      todoList: todoState.todoList.concat(todoState.userInput)
    });
  };*/

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="to do"
        value={inputToDo}
        onChange={inputChangeHandler} />
      <button type="button" onClick={todoAddHandler}>Add</button>
      <ul>
        {/* {todoList.map((todo: TodoType) => (<li key={todo.id}>{todo.name}</li>))} */}
        {reducerTodoList.map((todo: TodoType) => (
          <li key={todo.id} onClick={() => todoRemoveHandler(todo.id)}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
