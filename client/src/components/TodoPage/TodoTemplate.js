import React, { useEffect, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import axios from "axios";
import "./Todo.css";

const TodoTemplate = (props) => {
  const [todos, setTodos] = useState([]);

  const searchTodo = async () => {
    const response = await axios.get("http://localhost:8090/yjTodo/list");
    setTodos(response.data);
    console.log(response);
  };

  useEffect(() => {
    searchTodo();
  }, [props]);

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
