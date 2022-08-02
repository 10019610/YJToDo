import { useState } from "react";
import MainDashBoardForm from "../../mainDashBoard/MainDashBoardForm";
import MainDashBoardList from "../../mainDashBoard/MainDashBoardList";

const MainDashBoardPage = () => {

  const [message, setMessage] = useState(false);

  // Form에서 등록한 것을 받아서 리스트로 전달
  const completeCreateHandler = (message) => {
    if(message === true){
      setMessage(true);
    }
    onAddBoardHandler(message);
  };

  const onAddBoardHandler = (msg) => {
    const message = msg;
    return message;
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <MainDashBoardForm completeCreateBoard={completeCreateHandler}></MainDashBoardForm>
      <MainDashBoardList onAddBoard={message}></MainDashBoardList>
    </div>
  );
};

export default MainDashBoardPage;
