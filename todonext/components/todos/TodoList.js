import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { useEffect, useState } from "react";

function TodoList() {
  const [tododata, setData] = useState([]);

  const read = async () => {
    const response = await fetch("/api/todoCreate", {
      method: "GET",
    });
    const json = await response.json();
    setData(json.message);

    console.log("dd");
    console.log(json.message);
    console.log(tododata);
  };
  useEffect(() => {
    read();
  }, []);
  return (
    <div className={classes.grid}>
      {/* <ul>
        {props.todos.map((item) => (
          <TodoItem key={item.slug} item={item} />
        ))}
      </ul> */}
      <div>
        <ul>
          {/* {tododata.map((todos) => ( */}
          <TodoItem todos={tododata} />
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
