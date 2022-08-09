import React, { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import "./Todo.css";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      author: "Yang",
      text: "JavaTPC",
      checked: true,
    },
    {
      id: 2,
      author: "Yang",
      text: "React-Bootcamp",
      checked: true,
    },
    {
      id: 3,
      author: "Yang",
      text: "Spring-inflearn",
      checked: true,
    },
  ]);
  // console.log(setTodos);
  return (
    <div className="todo-template1">
      <div className="todo-template">
        <TodoHeader></TodoHeader>
        <TodoCreate></TodoCreate>
        <TodoList todos={todos}></TodoList>
      </div>
    </div>
  );
};

export default TodoTemplate;
