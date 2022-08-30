import React, { useState } from "react";
import "./YjBoard.css";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
// import { useParams } from "react-router-dom";
// import YjBoardDetail from "./YjBoardDetail";

const YjBoardList = ({ list, search, bind }) => {
  // let { listItem_id } = useParams();
  // console.log(search);

  const createTime = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };
  const [searchKeyword, setSearchKeyword] = useState("");

  const [searchType, setSearchType] = useState("TITLE");

  const searchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchHandler = () => {
    search(searchKeyword, searchType);
  };

  const onChangeTypeHandler = (e) => {
    setSearchType(e.target.value);
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
          <div className="search-styles">
            <span>
              <select value={searchType} onChange={onChangeTypeHandler}>
                <option name="TITLE" value="TITLE">
                  제목
                </option>
                <option name="AUTHOR" value="AUTHOR">
                  작성자
                </option>
              </select>
            </span>
            <span>
              <input
                type="text"
                maxLength="50"
                required
                onChange={searchChange}
                value={searchKeyword}
                placeholder="Search!"
              />
              <button onClick={searchHandler}>검색</button>
            </span>
          </div>
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
              <tbody></tbody>
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
