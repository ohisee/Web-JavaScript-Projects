/**
 * @fileoverview List FC
 */
import React, { FC } from "react";

type TodoType = { id: string, name: string };
type Props = { items: TodoType[], onClick: (id: string) => void };

const TodoList: FC<Props> = (props: Props) => {
  console.log('rendering List');
  return (
    <ul>
      {props.items.map((todo: TodoType) => (
        <li key={todo.id} onClick={() => props.onClick(todo.id)}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
