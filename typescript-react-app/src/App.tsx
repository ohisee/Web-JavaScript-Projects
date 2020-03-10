import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function id(): string {
  return (Math.random() * 9871332).toString(36).replace('.', '');
}

const initialTodoList = [
  {
    id: id(),
    text: 'do something'
  },
  {
    id: id(),
    text: 'do something new'
  },
  {
    id: id(),
    text: 'learn how to code'
  }
];

const App: React.FC = () => {

  const [todolist, setTodoList] = useState<{ id: string, text: string }[]>(initialTodoList);

  const onTextEnteredHandler = (text: string) => {
    const exist = todolist.some(td => td.text === text);
    if (!exist) {
      setTodoList(todolist.concat({ id: id(), text: text }));
    };
  }

  const onTodoItemDroppedHandler = (source: string, target: string) => {
    const s = todolist.find(todo => todo.id === source);
    const t = todolist.find(todo => todo.id === target);
    if (s && t) {
      const originalS = s.text;
      const originalT = t.text;
      s.text = originalT;
      t.text = originalS;
      setTodoList(todolist.slice());
    }
  }

  const onTodoItemDeletedHandler = (id: string) => {
    const remainingItems = todolist.filter(todo => todo.id !== id);
    setTodoList(remainingItems);
  }

  return (
    <div>
      <NewTodo onTextEntered={onTextEnteredHandler} />
      <TodoList
        items={todolist}
        onTodoItemDropped={onTodoItemDroppedHandler}
        onTodoItemDeleted={onTodoItemDeletedHandler} />
    </div>
  );
}

export default App;
