import React from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import "./Todo.css";

const TodoTemplate = () => {
  return (
    <div className="todo-template1">
      <div className="todo-template">
        <TodoHeader></TodoHeader>
        <TodoCreate></TodoCreate>
        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default TodoTemplate;
