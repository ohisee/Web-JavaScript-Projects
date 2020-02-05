/**
 * @fileoverview todo controller
 */
import { RequestHandler } from "express";
import { Todo } from "../models/todo";

function id(): string {
  return (Math.random() * 9871332).toString(36).replace('.', '');
}

const TODOs: Todo[] = [{
  id: id(),
  text: 'learn something new'
}];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(id(), text);
  TODOs.push(newTodo);
  res.status(201).json({ message: 'created a todo', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ todos: TODOs });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const text = (req.body as { text: string }).text;
  const todoIndex = TODOs.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Unable to find todo');
  }

  TODOs[todoIndex] = new Todo(TODOs[todoIndex].id, text);
  res.status(201).json({ message: 'Updated', updatedTodo: TODOs[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOs.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Unable to find todo');
  }

  const [d] = TODOs.splice(todoIndex, 1);
  res.status(201).json({ message: 'Deleted todo', deletedTodo: d });
};
