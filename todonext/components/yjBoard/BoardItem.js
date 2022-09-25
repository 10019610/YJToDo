import classes from "./Board.module.css";

function BoardItem(props) {
  const todos = props.todos;

  const dateFromObjectId = function (objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  };
  const dateTime = (objId) => {
    return dateFromObjectId(objId).toISOString();
  };

  const createTime = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };

  return (
    <div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{createTime(dateTime(item._id))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BoardItem;
