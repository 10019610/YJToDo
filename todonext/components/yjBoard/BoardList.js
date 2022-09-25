import BoardItem from "./BoardItem";
import classes from "./Board.module.css";

import { useEffect, useState } from "react";

function BoardList() {
  const [tododata, setData] = useState([]);

  const read = async () => {
    const response = await fetch("/api/yjBoard", {
      method: "GET",
    });
    const json = await response.json();
    setData(json.message);
    console.log(json.message);
  };

  // const dateFromObjectId = function (objectId) {
  //   return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  // };

  // const dateTime = dateFromObjectId(objId).toISOString();
  //2022-09-22T13:45:33.000Z 의 형식으로 출력됨

  useEffect(() => {
    read();
  }, []);
  return (
    <div>
      <div className={classes.ulul}>
        <ul>
          {/* {tododata.map((todos) => ( */}
          <BoardItem todos={tododata} />
        </ul>
      </div>
    </div>
  );
}

export default BoardList;
