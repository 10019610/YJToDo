import classes from "./Todo.module.css";

function TodoItem(props) {
  const todos = props.todo;

  // const remove = async () => {
  //   const response = await fetch("/api/yjTodo/delete", {
  //     method
  //   })
  // }
  const objId = todos._id;

  const dateFromObjectId = function (objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  };

  const dateTime = dateFromObjectId(objId).toISOString();
  //2022-09-22T13:45:33.000Z 의 형식으로 출력됨

  const todoDate = (time) => {
    const date = new Date(time);
    date =
      date.getFullYear() +
      "년 " +
      (date.getMonth() + 1) +
      "월 " +
      date.getDate() +
      "일 " +
      date.getHours() +
      "시 " +
      date.getMinutes() +
      "분";
    return date;
  };

  return (
    <div className={classes.todoBox}>
      <div className={classes.todoContent}>{todos.content}</div>
      <hr className={classes.hr} />
      <div>{todoDate(dateTime)}</div>
      <button>삭제</button>
    </div>
  );
}
export default TodoItem;
