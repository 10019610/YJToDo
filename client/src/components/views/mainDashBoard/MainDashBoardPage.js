import { useState, useRef, useEffect } from "react";

import MainDashBoardForm from "../../mainDashBoard/MainDashBoardForm";
import MainDashBoardList from "../../mainDashBoard/MainDashBoardList";

const MainDashBoardPage = () => {
  const listRef = useRef();

  useEffect(() => {
    listRef.current.searchBoardList();
  }, [])

  const [complete, setComplete] = useState('start');
  console.log(complete);

  // const changeStatus = () => {
  //   if (complete) {
  //     setComplete(complete);
  //   }
  // }

  return (
    <div>
      <h1>DashBoard</h1>
      <MainDashBoardForm setComplete={setComplete}></MainDashBoardForm>
      <MainDashBoardList ref={listRef}></MainDashBoardList>
    </div>
  );
};

export default MainDashBoardPage;
