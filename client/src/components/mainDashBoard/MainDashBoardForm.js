import { useState } from "react";
import axios from "axios";

import "./MainDashBoard.css";
import styles from "../../css/Common.module.css";

const MainDashBoardForm = () => {
  const createParam = {
    content: "",
  };

  // 입력받은 글 내용 셋팅
  const [content, setContent] = useState("");

  //
  const onChangeContent = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const create = async () => {
    createParam.content = content;
    const response = await axios.post(
      "http://localhost:8090/mainDashBoard/create",
      createParam
    );
    console.log(response);
  };

  //   function errorHandler() {
  //     alert("기능 구현중입니다.");
  //   }

  return (
    <div className={styles.base_form}>
      <div className="board-form">
        <span className="board-form-input">
          <textarea onChange={onChangeContent} value={content}></textarea>
        </span>
        <span>
          <button onClick={create}>등록</button>
        </span>
      </div>
    </div>
  );
};

export default MainDashBoardForm;
