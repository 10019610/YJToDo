import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
