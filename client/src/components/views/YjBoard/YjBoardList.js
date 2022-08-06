import React from "react";
import "./YjBoard.css";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
// import { useParams } from "react-router-dom";
// import YjBoardDetail from "./YjBoardDetail";

const YjBoardList = ({ list }) => {
  // let { listItem_id } = useParams();

  const createTime = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };

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
                {list.map((listItem, index) => {
                  return (
                    <tr key={index}>
                      <th>{list.length - index + 1}</th>
                      <td>
                        <Link
                          to={`/yjBoard/detail/${listItem.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {listItem.title}
                        </Link>
                      </td>
                      <td>{listItem.author}</td>
                      <td>{createTime(listItem.createDateTime)}</td>
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
