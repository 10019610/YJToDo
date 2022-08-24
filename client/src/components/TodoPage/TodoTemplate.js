import React, { useEffect, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import axios from "axios";
import TodoEdit from "../modal/yjTodo/TodoEdit";
import TodoCompleted from "../modal/yjTodo/TodoCompleted";
import "./Todo.css";

const TodoTemplate = (props) => {
  const [todos, setTodos] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);

  const [todoEditIsShown, setTodoEditIsShown] = useState(false);

  const [completedListIsShown, setCompletedListIsShown] = useState(false);

  const [todoItems, setTodoItems] = useState({});

  const [totalCount, setTotalCount] = useState(0);
  const [checkedCount, setCheckedCount] = useState(0);

  const showTodoEditHandler = (todoItems) => {
    console.log(todoItems);
    setTodoEditIsShown(true);
    setTodoItems(todoItems);
  };
  const showCompletedModal = (todoItems) => {
    setCompletedListIsShown(todoItems);
    setTodoItems(todoItems);
  };

  const hideTodoEditHandler = () => {
    setTodoEditIsShown(false);
    setCompletedListIsShown(false);
    searchTodo();
  };

  const searchTodo = async () => {
    // setIsLoading(true);
    const response = await axios.get("http://localhost:8090/yjTodo/list");

    setTodos(response.data.list);
    setTotalCount(response.data.totalCount);
    setCheckedCount(response.data.checkedCount);
    // setIsLoading(false);
  };

  useEffect(() => {
    searchTodo();
  }, []);

  return (
    <div className="todo-template">
      {completedListIsShown && (
        <TodoCompleted
          onClose={hideTodoEditHandler}
          todos={todos}
        ></TodoCompleted>
      )}
      {todoEditIsShown && (
        <TodoEdit
          todos={todoItems}
          onClose={hideTodoEditHandler}
          onUpdate={searchTodo}
        ></TodoEdit>
      )}
      <TodoHeader
        showCompletedModal={showCompletedModal}
        todos={todos}
        totalCount={totalCount}
        checkedCount={checkedCount}
      ></TodoHeader>
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
