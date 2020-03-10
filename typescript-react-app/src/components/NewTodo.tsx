import React, { useRef } from "react";

interface NewTodoProps {
  onTextEntered(text: string): void;
}

type NewTodoPropsType = {
  ononTextEntered: (text: string) => void
}

// interface TodoInputAction {
//   text: string;
//   pre: string;
//   changed: boolean;
// }

// const usePreviousValue = (preText: string) => {
//   const ref = useRef<string>();
//   useEffect(() => {
//     ref.current = preText;
//   });
//   return ref.current;
// }

const NewTodo: React.FC<NewTodoProps> = (props) => {

  const inputTodoElRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const text = inputTodoElRef.current?.value;
    if (text) {
      props.onTextEntered(text);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="add-todo">Todo Text</label>
        <input type="text" id="add-todo" ref={inputTodoElRef} />
      </div>
      <button type="submit">Add to list</button>
    </form>
  );
};

export default NewTodo;
