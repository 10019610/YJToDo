import React, { useState } from "react";
import axios from "axios";
import "./Todo.css";

const TodoCreate = (props) => {
  const [content, setContent] = useState("");

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  let createParam = {
    todoContent: "",
  };

  const createHandler = async () => {
    createParam.todoContent = content;
    // console.log(createParam);
    const response = await axios.post(
      "http://localhost:8090/yjTodo/create",
      createParam
    );
    if (response.status === 200) {
      props.searchTodo();
    }
    setContent("");
  };
  const onSubmit = () => {
    createHandler();
  };
  const onKeyUp = (event) => {
    // 'enter'키의 keycode는 13
    if (event.keyCode === 13) {
      let boardCreateCheck = window.confirm("Todo it!");
      if (boardCreateCheck === true) {
        onSubmit();
      }
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
          onKeyUp={onKeyUp}
        />
      </span>
      <span className="todo-create">
        <button onClick={createHandler} className="">
          추가
        </button>
      </span>
    </div>
  );
};

export default TodoCreate;
