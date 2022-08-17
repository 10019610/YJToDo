<div
  className={styled.base_form}
  style={{
    color: props.todo.completedYn === "Y" ? "#808080" : "black",
    textDecoration: props.todo.completedYn === "Y" ? "line-through" : "none",
  }}
>
  <th>{todoDate(props.todo.updateDateTime)}</th>
  <td>{props.todo.todoContent} </td>
  <table>
    <thead>
      <tr></tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {/* <TodoEdit> </TodoEdit> */}
          <button onClick={todoCheckHandler} className="checkbox">
            ✔
          </button>
        </td>
        <th>{todoDate(props.todo.updateDateTime)}</th>
        <td>{props.todo.todoContent} </td>
        <td>
          <button onClick={todoDeleteHandler} className={styled.button_cancel}>
            삭제
          </button>
        </td>

        <td>
          <button
            className={styled.button_confirm}
            onClick={props.showTodoModal.bind(this, todoItem)}
          >
            수정
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
