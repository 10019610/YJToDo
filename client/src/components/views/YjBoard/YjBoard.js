import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
import axios from "axios";

// import { useParams } from "react-router-dom";

function YjBoard() {
  const [title, setTitle] = useState(null);

  const readHandler = () => {
    axios.get("http://localhost:8090/yjBoard/read").then((response) => {
      setTitle(response.data);
      console.log(response);
      console.log(title);
    });
    // .catch(console.error("ss"));
  };

  return (
    <React.Fragment>
      <div className={styles.base_form}>
        <h2>게시물 리스트</h2>
        <div>
          <button>
            <Link to="/yjBoard/write">게시물 추가</Link>
          </button>
        </div>
        <div className="">
          <button onClick={readHandler}>test</button>
        </div>
        <div>{title && title.title}</div>
      </div>
    </React.Fragment>
  );
}

export default YjBoard;
