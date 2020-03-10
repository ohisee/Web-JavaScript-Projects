import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

// function id(): string {
//   return (Math.random() * 9871332).toString(36).replace('.', '');
// }

// const todoList = [
//   {
//     id: id(),
//     text: 'do something'
//   },
//   {
//     id: id(),
//     text: 'do something new'
//   }
// ]

interface TodoListProps {
  items: { id: string, text: string }[],
  onTodoItemDropped(source: string, target: string): void;
  onTodoItemDeleted(id: string): void;
}

const TodoList: React.FC<TodoListProps> = (props) => {

  const [dropped, setDropped] = useState<boolean>(false);

  const onDragOverHandler = (event: React.DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  }

  const onDragLeaveHandler = (event: React.DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  }

  const onTodoItemDroppedHandler = (source: string, target: string) => {
    setDropped(true);
    props.onTodoItemDropped(source, target);
  }

  const onTodoItemDeletedHandler = (id: string) => {
    props.onTodoItemDeleted(id);
  }

  return (
    <ul
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}>
      {
        props.items.map(todo =>
          <TodoListItem
            itemDropped={dropped}
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onTodoItemDropped={onTodoItemDroppedHandler}
            onTodoItemDeleted={onTodoItemDeletedHandler} />)
      }
    </ul>
  );
};

export default TodoList;
