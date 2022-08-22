import React, { useState, useEffect } from "react";
import "./Todo.css";

const TodoHeader = (props) => {
  // console.log(props);

  const totalCount = props.totalCount;
  const checkedCount = props.checkedCount;
  const leftItem = totalCount - checkedCount;
  let date = new Date();
  let weekday = new Array(7);
  weekday[0] = "일요일";
  weekday[1] = "월요일";
  weekday[2] = "화요일";
  weekday[3] = "수요일";
  weekday[4] = "목요일";
  weekday[5] = "금요일";
  weekday[6] = "토요일";

  let today = weekday[date.getDay()];

  // useEffect 이용한 실시간 시간 업데이트
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const date = setInterval(() => {
      // setInterval은 1초마다 setTime실행하고 이후 종료시 clearInterval 실행
      setTime(new Date());
    }, 1000);
    return () => clearInterval(date);
  }, []);
  return (
    <div>
      <div className="todo-header">
        <h1>TO - DO!</h1>
        <div className="todo-header-date">
          {/* {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 */}
          {/* {time.toLocaleTimeString()} */}
        </div>
        {/* <div className="todo-header-day">{today}</div> */}
        <br></br>
        <div className="todo-item-count">
          <div>Total : {totalCount}</div>
          <div>Checked {checkedCount}</div>
          <div> Left : {leftItem}</div>
        </div>
        <span className="completed_btn">
          <button onClick={props.showCompletedModal}>완료목록</button>
        </span>
      </div>
    </div>
  );
};

export default TodoHeader;
