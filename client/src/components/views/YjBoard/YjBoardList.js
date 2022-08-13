import React, { useState } from "react";
import "./YjBoard.css";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
// import { useParams } from "react-router-dom";
// import YjBoardDetail from "./YjBoardDetail";

const YjBoardList = ({ list, setSearched, searched, boardSearch }) => {
  // let { listItem_id } = useParams();

  const createTime = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };

  const param = {
    title: "",
    author: "",
  };

  const [titles, setTitle] = useState("");
  param.title = titles;

  const [authors, setAuthor] = useState("");
  param.author = authors;

  const searchChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
    // doSearch = search;
  };
  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  // const boardSearchHandler = () => {
  //   searched = search;
  //   console.log(searched);
  //   boardSearch(searched);
  // };

  const searchTitle = list.filter((a) => {
    // const aa = a.title.includes(titles);
    // const bb = a.author.includes(authors);
    // return [aa, bb];
    return a.title.includes(titles);
  });

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
              <select>
                <option value={titles}>제목</option>
                <option value={authors}>작성자</option>
              </select>
            </span>
            <span>
              <input
                type="text"
                maxLength="50"
                required
                onChange={searchChange}
                value={titles}
                placeholder="Search!"
              />
            </span>
            {/* <span>
              <button onClick={boardSearchHandler}>검색</button>
            </span> */}
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
                {searchTitle.map((listItem, index) => {
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
