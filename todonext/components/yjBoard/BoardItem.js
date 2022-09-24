import classes from "./Board.module.css";

function BoardItem(props) {
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
          {props.todos.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>2012-02-02</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BoardItem;
