import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoCreate = () => {
  const [content, setContent] = useState("");

  const changeContentHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  let createParam = {
    todoContent: "",
  };

  const createHandler = async () => {
    createParam.todoContent = content;
    console.log(createParam);
    if (content === "") {
      return alert("Todo it!");
    } else {
      const response = await axios.post(
        "http://localhost:8090/yjTodo/create",
        createParam
      );
      console.log(response);
    }
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
