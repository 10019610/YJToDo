import React, { useState, useEffect } from "react";
// import styles from "../../../css/Common.module.css";
import axios from "axios";
import "./YjBoard.css";
import YjBoardList from "./YjBoardList";
import YjBoardUpdate from "./YjBoardUpdate";

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

  return (
    <React.Fragment>
      <div>{/* <li>{searched}</li> */}</div>
      <YjBoardList bind={bind} list={list} search={search} />
    </React.Fragment>
  );
};

export default YjBoard;
