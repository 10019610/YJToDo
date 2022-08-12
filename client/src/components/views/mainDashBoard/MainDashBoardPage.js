import { useState } from "react";
import MainDashBoardForm from "../../mainDashBoard/MainDashBoardForm";
import MainDashBoardList from "../../mainDashBoard/MainDashBoardList";

const MainDashBoardPage = (props) => {

  const [message, setMessage] = useState(false);

  // Form에서 등록한 것을 받아서 리스트로 전달
  const completeCreateHandler = (msg) => {
    console.log(message);
    console.log(msg);
    if (msg === true) {
      setMessage(true);
    }
    onAddBoardHandler(msg);

  };

  const onAddBoardHandler = (msg) => {
    const sendMessage = msg;
    return sendMessage;
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <MainDashBoardForm completeCreateBoard={completeCreateHandler}></MainDashBoardForm>
      <MainDashBoardList completeCreateBoard={completeCreateHandler} onAddBoard={message} onShowUpdateModal={props.onShowUpdateModal}></MainDashBoardList>
    </div>
  );
};

export default MainDashBoardPage;
