import "./Todo.css";

const TodoHeader = () => {
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
  return (
    <div>
      <div className="todo-header">
        <h1>TO - DO!</h1>
        <div className="todo-header-date">
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
        </div>
        <div className="todo-header-day">{today}</div>
        <br></br>
        <div className="todo-lefttodo">남아있는 할 일 목록은 2개 입니다!</div>
      </div>
    </div>
  );
};

export default TodoHeader;
