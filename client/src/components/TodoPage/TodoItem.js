import axios from "axios";
import React from "react";
// import Modal from "react-modal";
// import TodoEdit from "./TodoEdit";

const TodoItem = ({ todo }) => {
  const todoDate = (craeteDateTime) => {
    let date = new Date(craeteDateTime);
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
  console.log(todo);

  const todoDeleteParam = {
    yjTodoId: 0,
  };

  const todoDeleteHandler = async () => {
    todoDeleteParam.yjTodoId = todo.id;
    const response = await axios.put(
      "http://localhost:8090/yjTodo/delete",
      todoDeleteParam
    );
    console.log(response);
  };

  const todoCheckParam = {
    yjTodoId: 0,
  };
  const todoCheckHandler = async () => {
    todoCheckParam.yjTodoId = todo.id;
    const response = await axios.put(
      "http://localhost:8090/yjTodo/check",
      todoCheckParam
    );
    console.log(response);
  };

  const todoEditHandler = () => {
    alert("수정 모달 구현중입니다.");
  };

  // const styled = {};

  // const handleChange = () => {
  //   colorChange.current.style = "background:red;";
  // };

  // const colorChange = useRef();
  // const completed = () => {
  //   if(todo.completedYn === "Y"){

  //   }
  // }

  return (
    <div>
      <div
        style={{
          color: todo.completedYn === "Y" ? "#808080" : "black",
          textDecoration: todo.completedYn === "Y" ? "line-through" : "none",
        }}
      >
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* <TodoEdit> </TodoEdit> */}
                <button onClick={todoCheckHandler}>체크</button>
              </td>
              <th>{todoDate(todo.createDateTime)} </th>
              <td>{todo.todoContent} </td>
              <td>
                <button onClick={todoDeleteHandler}>삭제</button>
              </td>

              <td>
                <button onClick={todoEditHandler}>수정</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoItem;
