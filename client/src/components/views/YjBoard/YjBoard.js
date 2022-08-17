import React, { useState, useEffect } from "react";
// import styles from "../../../css/Common.module.css";
import axios from "axios";
import "./YjBoard.css";
import YjBoardList from "./YjBoardList";

const YjBoard = (props) => {
  const [list, setList] = useState([]);

  // const [searched, setSearched] = useState("");

  // const boardSearch = (searched) => {
  //   setSearched(searched);
  // };
  // console.log(searched);
  // const params = searched;
  // console.log(params);

  const bind = async () => {
    const response = await axios.get("http://localhost:8090/yjBoard/read");
    setList(response.data);
  };

  const params = {
    searchKeyword: "",
    searchType: "",
  };
  const search = async (keyword, type) => {
    console.log(keyword);
    console.log(type);
    params.searchKeyword = keyword;
    params.searchType = type;
    console.log(params);
    const response = await axios.get("http://localhost:8090/yjBoard/search", {
      params: {
        searchKeyword: params.searchKeyword,
        searchType: params.searchType,
      },
    });
    console.log("sdds");
    setList(response.data);
    console.log(response);
  };
  useEffect(() => {
    bind();
  }, [props]);

  // useEffect(() => {
  //   axios.get("http://localhost:8090/yjBoard/read").then((response) => {
  //     console.log(response);
  //     console.log(response.data);
  //     setList(response.data);
  //   });
  // }, []);

  // alert(searched);

  // if (title === "" || content === "" || author === "") {
  //     return alert("제목, 내용, 작성자를 입력하세요.");
  //   } else {
  //     const response = await axios.post(
  //       "http://localhost:8090/yjBoard/write",
  //       createParam
  //     );
  //     console.log(response);
  //     props.addBoard(response);
  //   }

  // const bindSearch = (searched) => {
  //   setSearched();
  // };

  return (
    <React.Fragment>
      <div>{/* <li>{searched}</li> */}</div>
      <YjBoardList
        list={list}
        search={search}
        // searched={searched}
        // setSearched={setSearched}
        // boardSearch={boardSearch}
      />
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
