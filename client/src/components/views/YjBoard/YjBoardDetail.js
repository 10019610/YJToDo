import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const YjBoardDetail = ({ match }) => {
  const [detailBoardData, setDetailBoard] = useState([]);
  const params = match.params.id;
  // const params = useParams();
  console.log(params);

  useEffect(() => {
    axios.get("http://localhost:8090/yjBoard/detail").then((response) => {
      setDetailBoard(response.data);
      console.log(response);
    });
  }, []);

  return <div>{detailBoardData}</div>;
};

export default YjBoardDetail;
