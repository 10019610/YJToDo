import { useState, useEffect } from "react";

function TodoCreate(props) {
  const [content, setContent] = useState("");

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  function sendTodo(event) {
    // event.preventDefault();
    fetch("/api/yjTodo/create", {
      method: "POST",
      body: JSON.stringify({
        content: content,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  useEffect(() => {}, []);
  return (
    <div>
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
