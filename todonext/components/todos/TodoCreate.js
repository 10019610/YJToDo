import React, { useState } from "react";

function TodoCreate() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  function sendInput(event) {
    event.preventDefault();

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

  return (
    <section>
      <form onSubmit={sendInput}>
        <div>
          <div>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              required
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">CONTENT</label>
            <textarea
              id="content"
              rows="5"
              required
              value={enteredContent}
              onChange={(event) => setEnteredContent(event.target.value)}
            ></textarea>
          </div>
          <div>
            <span>
              <button className="">추가</button>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}

export default TodoCreate;
