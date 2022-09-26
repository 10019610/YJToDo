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
  async function removeTodo(objId) {
    const response = await fetch("/api/yjTodo/remove", {
      method: "DELETE",
      body: JSON.stringify(objId),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  }
  const deleteParam = {
    id: objId,
  };

  async function removeHandler() {
    deleteParam.id = objId;
    console.log(objId);

    try {
      const result = await removeTodo(deleteParam);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.todoBox}>
      <div className={classes.todoContent}>{todos.content}</div>
      <hr className={classes.hr} />
      <div>{todoDate(dateTime)}</div>
      <button onClick={removeHandler}>삭제</button>
    </div>
  );
}
export default TodoItem;
