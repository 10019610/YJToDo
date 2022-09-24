import React, { useEffect, useState } from "react";
import classes from "./Board.module.css";

function BoardCreate() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  // const history = useHistory();
  // const addBoardHandler = () => {
  //   history.push("/todos");
  // };

  function sendInput(event) {
    event.preventDefault(); //버튼을 누를 때마다 페이지 이동을 막으려면, 함수에 e.preventDefault()를 실행

    fetch("/api/yjBoard", {
      method: "POST",
      body: JSON.stringify({
        title: enteredTitle,
        author: enteredAuthor,
        content: enteredContent,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    window.location.replace("/yjBoard");
  }

  return (
    <section>
      <form>
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
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              required
              value={enteredAuthor}
              onChange={(event) => setEnteredAuthor(event.target.value)}
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
              <button type="submit" className={classes.box} onClick={sendInput}>
                추가
              </button>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}

export default BoardCreate;
