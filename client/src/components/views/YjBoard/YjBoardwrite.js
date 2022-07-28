import React, { useState } from "react";
import axios from "axios";
import styles from "../../../css/Common.module.css";
import "./YjBoardwrite.css";
import { Redirect } from "react-router-dom";

const YjBoardwrite = () => {
  const createParam = {
    title: "",
  };

  const [title, setTitle] = useState("");

  const createHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const writeHandler = async () => {
    createParam.title = title;
    console.log(createParam);

    const response = await axios.post(
      "http://localhost:8090/yjBoard/write",
      createParam
    );
    console.log(response);
    Redirect("http://localhost:3002/yjBoard");
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
            onChange={createHandler}
            value={title}
          />
        </div>
        <label className="" name="boardContent" id="boardContent">
          내용
        </label>
        <span>
          <input
            name="boardContent"
            id="boardContent"
            required
            rows="5"
          ></input>
        </span>
        <button onClick={writeHandler}>글 추가</button>
      </main>
    </div>
  );
};

export default YjBoardwrite;
