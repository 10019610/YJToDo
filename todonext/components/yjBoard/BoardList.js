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
