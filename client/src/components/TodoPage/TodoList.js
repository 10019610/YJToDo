import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="">
      {props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          showTodoModal={props.showTodoModal}
          searchTodo={props.searchTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
