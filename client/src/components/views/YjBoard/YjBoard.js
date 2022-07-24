import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";

const YjBoard = () => {
  const boardDate = new Date(2022, 7, 21);

  // useState test
  const data = "Hello";
  const [state, setState] = useState(data);

  const alertHandler = () => {
    let newState;
    if (state === "Hello") {
      alert("Hello World!");
    } else {
      alert("What?");
    }
    setState(newState);
  };
  // console.log("dddd");

  return (
    <React.Fragment>
      <div className={styles.base_form}>
        <h2>게시물 리스트</h2>
        <div>
          <button>
            <Link to="/yjBoard/write">게시물 추가</Link>
            <Link to="/approval/approvalRequest">기안</Link>
          </button>
        </div>
        <div>
          <div>{state}</div>
          <button onClick={alertHandler}>test!</button>
        </div>
        <div className="">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>게시글</td>
              <td>yj</td>
              <td>2022-07-18</td>
            </tr>
            <tr>
              <td>2</td>
              <td>게시글</td>
              <td>yj</td>
              <td>2022-07-18</td>
            </tr>
            <tr>
              <td>3</td>
              <td>게시글</td>
              <td>yj</td>
              <td>{boardDate.toISOString()}</td>
            </tr>
          </tbody>
        </div>
      </div>
    </React.Fragment>
  );
};

export default YjBoard;
