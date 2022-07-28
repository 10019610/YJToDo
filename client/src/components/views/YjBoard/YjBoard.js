import React, { useState, useEffect } from "react";
// import styles from "../../../css/Common.module.css";
import axios from "axios";
import "./YjBoard.css";
import YjBoardList from "./YjBoardList";

// import { useParams } from "react-router-dom";

const YjBoard = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/yjBoard/read").then((response) => {
      setList(response.data);
    });
  }, []);

  // const readHandler = () => {
  //   axios.get("http://localhost:8090/yjBoard/read").then((response) => {
  //     setTitle(response.data);
  //     console.log(response);
  //     console.log(response.data);
  //   });

  // };

  return (
    <React.Fragment>
      <YjBoardList list={list} />
      {/* <div className={styles.base_form}>
        <h2>게시물 리스트</h2>
        <div>
        </div>
        <div className={styles.base_form}>
          <button onClick={title}>test</button>
          <div>{title && title.title}</div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default YjBoard;
