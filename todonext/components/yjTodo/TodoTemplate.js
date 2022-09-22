import TodoCreate from "./TodoCreate";
import { useState } from "react";
import { useEffect } from "react";
import TodoList from "./TodoList";
import classes from "./Todo.module.css";

function TodoTemplate() {
  const [tododata, setData] = useState([]);

  const read = async () => {
    const response = await fetch("/api/yjTodo/read", {
      method: "GET",
    });
    const json = await response.json();
    setData(json.message);
    console.log(json);
  };
  useEffect(() => {
    read();
  }, []);

  return (
    <div className={classes.grid}>
      <h1>To do it!!!!!</h1>
      <TodoCreate />
      <TodoList todos={tododata} />
    </div>
  );
}
export default TodoTemplate;
