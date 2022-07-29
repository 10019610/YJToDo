import React from "react";
import "./YjBoard.css";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";

const YjBoardList = ({ list }) => {
  return (
    <div>
      <div className={styles.base_form}>
        <div className="list_styles">
          <button>
            <Link to="/yjBoard/write" style={{ textDecoration: "none" }}>
              게시물 추가
            </Link>
          </button>
          <div>
            <table className="list_table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {list.map((list, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{list.title}</td>
                      <td>{list.author}</td>
                      <td>{list.createDateTime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YjBoardList;
