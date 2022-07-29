import React, { useState } from "react";
import axios from "axios";
import styles from "../../../css/Common.module.css";
import "./YjBoardwrite.css";
import { Link } from "react-router-dom";

const YjBoardwrite = () => {
  const createParam = {
    title: "",
    content: "",
    author: "",
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const createTitleHandler = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
    // console.log(e.target);
  };

  const createContentHandler = (e) => {
    setContent(e.target.value);
    // console.log(e.target.value);
    // console.log(e.target);
  };

  const createAuthorHandler = (e) => {
    setAuthor(e.target.value);
    console.log(e.target.value);
    console.log(e.target);
  };

  const writeHandler = async () => {
    createParam.title = title;
    createParam.content = content;
    createParam.author = author;

    console.log(createParam);

    const response = await axios.post(
      "http://localhost:8090/yjBoard/write",
      createParam
    );
    console.log(response);
  };

  return (
    <div className={styles.base_form}>
      <main className="board">
        <label name="boardTitle" id="boardTitle">
          제목
        </label>
        <div>
          <input
            type="text"
            name="boardTitle"
            id="boardTitle"
            required
            onChange={createTitleHandler}
            value={title}
          />
        </div>
        <label name="boardAuthor" id="boardAuthor">
          작성자
        </label>
        <div>
          <input
            type="text"
            name="boardAuthor"
            id="boardAuthor"
            required
            onChange={createAuthorHandler}
            value={author}
          />
        </div>
        <label className="" name="boardContent" id="boardContent">
          내용
        </label>
        <span>
          <input
            onChange={createContentHandler}
            name="boardContent"
            id="boardContent"
            required
            rows="5"
            value={content}
          ></input>
        </span>
        <button onClick={writeHandler}>
          <Link to="/yjBoard">글 추가</Link>
        </button>
      </main>
    </div>
  );
};

export default YjBoardwrite;
