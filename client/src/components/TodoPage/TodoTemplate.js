import React, { useEffect, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import axios from "axios";
import TodoEdit from "../modal/yjTodo/TodoEdit";
import "./Todo.css";

const TodoTemplate = (props) => {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [todoEditIsShown, setTodoEditIsShown] = useState(false);

  const [todoItems, setTodoItems] = useState({});
  // console.log(todoItems);

  const showTodoEditHandler = (todoItems) => {
    console.log(todoItems);
    setTodoEditIsShown(true);
    setTodoItems(todoItems);
  };

  const hideTodoEditHandler = () => {
    setTodoEditIsShown(false);
    searchTodo();
  };

  const searchTodo = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:8090/yjTodo/list");

    setTodos(response.data);
    setIsLoading(false);
    // console.log(response);
  };

  useEffect(() => {
    searchTodo();
  }, []);

  return (
    <div className="todo-template">
      {todoEditIsShown && (
        <TodoEdit
          todos={todoItems}
          onClose={hideTodoEditHandler}
          onUpdate={searchTodo}
        ></TodoEdit>
      )}
      <TodoHeader></TodoHeader>
      <TodoCreate searchTodo={searchTodo}></TodoCreate>
      <TodoList
        todos={todos}
        showTodoModal={showTodoEditHandler}
        searchTodo={searchTodo}
      ></TodoList>
    </div>
  );
};

export default TodoTemplate;
