import axios from "axios";
import { useEffect, useState } from "react";

function YjBoardList() {
  const [boardList, setBoardList] = useState([]);

  console.log(boardList);

  const handler = async () => {
    console.log("ddd");
    const data = await axios.get("/api/board");
    console.log(data);
    setBoardList(data.data.data);
  };
  // function loadBoard() {
  //   fetch.
  // }

  useEffect(() => {
    handler();
  }, []);

  return (
    <div>
      {boardList.map((board, index) => (
        <div key={index}>{board.title}</div>
      ))}
    </div>
  );
}

export default YjBoardList;
