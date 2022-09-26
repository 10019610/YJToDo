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
  };

  async function removeTodo(removeId) {
    const response = await fetch("/api/yjTodo/read", {
      method: "DELETE",
      body: JSON.stringify(removeId),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //  const data = await response.json();

    console.log(response);
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <div className={classes.grid}>
      <h1>To do it!!!!!</h1>
      <TodoCreate read={read} />
      <TodoList todos={tododata} removeTodo={removeTodo} />
    </div>
  );
}
export default TodoTemplate;
