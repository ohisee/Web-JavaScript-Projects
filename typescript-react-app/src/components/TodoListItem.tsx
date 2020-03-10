/**
 * @fileoverview todo list item
 */
import React, { useRef } from "react";

interface TodoListItemProps {
  id: string;
  text: string;
  itemDropped: boolean;
  onTodoItemDropped(source: string, target: string): void;
  onTodoItemDeleted(id: string): void;
}

const TodoListItem: React.FC<TodoListItemProps> = (props) => {

  const liElement = useRef<HTMLLIElement>(null);

  if (props.itemDropped && liElement.current) {
    liElement.current.classList.remove('dragStartBackground');
  }

  const onDragStartHandler = (event: React.DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData('text/plain', props.id);
    event.dataTransfer.effectAllowed = 'move';
    liElement.current?.classList.add('dragStartBackground');
  };

  const onDragEndHandler = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  }

  const onDropHandler = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    const sourceid = event.dataTransfer.getData('text/plain');
    const targetId = event.currentTarget.getAttribute('id');
    if (targetId) {
      props.onTodoItemDropped(sourceid, targetId);
    }
  }

  const onDeleteButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onTodoItemDeleted(props.id);
  }

  return (
    <li
      ref={liElement}
      id={props.id}
      draggable="true"
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
      onDrop={onDropHandler}
    ><span>{props.text}</span><button onClick={onDeleteButtonClicked}>Delete</button></li>
  );
};

export default TodoListItem;
