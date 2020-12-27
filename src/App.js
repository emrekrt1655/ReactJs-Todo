import React, { useState, useEffect, useRef } from "react";
import TodoList from "./components/TodoList";
import { useTodoLayerValue } from "./context/TodoContext";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const countTodo = [];
  const countDone = [];
  todos &&
    todos.map((todo) => {
      !todo?.isCompleted && countTodo.push(todo);
      todo?.isCompleted && countDone.push(todo);
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content) {
      const newTodo = {
        id: Math.floor(Math.random() * 39399393),
        content,
        isCompleted: false,
      };

      dispatch({
        type: "ADD_TODO",
        payload: newTodo,
      });

      setContent("");
    }
  };

  return (
    <div className="container">
      <div className='countPart'>
        <h1 className="count">
          <span>Todos :</span> {countTodo.length}{" "}
        </h1>
        <h1 className="count">
          <span>Done :</span> {countDone.length}{" "}
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={content}
          className="todo-input"
          placeholder="What Are you plaining?"
          ref={inputRef}
          onChange={(event) => setContent(event.target.value)}
        />

        <button className="todo-button">Add</button>
      </form>

      <TodoList todos={todos} />
    </div>
  );
};

export default App;
