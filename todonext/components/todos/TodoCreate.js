import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./Todo.module.css";

function TodoCreate() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  // const history = useHistory();
  // const addBoardHandler = () => {
  //   history.push("/todos");
  // };

  function sendInput(event) {
    // event.preventDefault(); //버튼을 누를 때마다 페이지 이동을 막으려면, 함수에 e.preventDefault()를 실행

    fetch("/api/todoCreate", {
      method: "POST",
      body: JSON.stringify({
        title: enteredTitle,
        content: enteredContent,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  const goTodos = () => {
    document.location.href("/todos");
  };
  useEffect;

  return (
    <section>
      <form onSubmit={sendInput}>
        <div>
          <div className={classes.grid}>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              required
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            />
          </div>
          <div className={classes.grid}>
            <label htmlFor="content">CONTENT</label>
            <textarea
              id="content"
              rows="5"
              required
              value={enteredContent}
              onChange={(event) => setEnteredContent(event.target.value)}
            ></textarea>
          </div>
          <div className={classes.box}>
            <span>
              <button type="submit" className={classes.box}>
                추가
              </button>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}

export default TodoCreate;
