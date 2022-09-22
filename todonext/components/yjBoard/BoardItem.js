import classes from "./Board.module.css";

function BoardItem(props) {
  console.log(props.todos);

  return (
    <div className={classes.table}>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BoardItem;
