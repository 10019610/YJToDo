import { useState, useEffect } from "react";
import classes from "./Todo.module.css";

function TodoCreate(props) {
  const [content, setContent] = useState("");

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  async function sendTodo(event) {
    event.preventDefault();
    const response = await fetch("/api/yjTodo/create", {
      method: "POST",
      body: JSON.stringify({
        content: content,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    // const result = await response.json()
    props.read();
  }
  useEffect(() => {}, []);
  return (
    <div className={classes.createBtn}>
      <form onSubmit={sendTodo}>
        <span>
          <input
            type="text"
            name="text"
            placeholder="To do It !"
            value={content}
            onChange={changeContentHandler}
          />
        </span>
        <span>
          <button>추가</button>
        </span>
      </form>
    </div>
  );
}
export default TodoCreate;
