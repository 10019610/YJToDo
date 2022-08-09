import React, { useState } from "react";

const TodoCreate = () => {
  const [content, setContent] = useState("");

  const changeContentHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  };
  const [author, setAuthor] = useState("");

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
    console.log(author);
  };

  const createHandler = () => {
    alert("todoItem 추가 버튼 구현중");
  };

  return (
    <div>
      <span className="todo-create">
        <input
          type="text"
          name="text"
          placeholder="To do It !"
          value={content}
          onChange={changeContentHandler}
        />
      </span>
      <span className="todo-create">
        {/* <input
          type="text"
          name="text"
          placeholder="author"
          value={author}
          onChange={changeAuthorHandler}
        /> */}
      </span>
      <span>
        <button onClick={createHandler}>추가</button>
      </span>
    </div>
  );
};

export default TodoCreate;
