import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  console.log(props);
  return (
    <div className="">
      {props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          showTodoModal={props.showTodoModal}
        />
      ))}
    </div>
  );
};

export default TodoList;
