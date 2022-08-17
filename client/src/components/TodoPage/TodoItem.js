import axios from "axios";
import React, { useState } from "react";
// import Modal from "react-modal";
import styled from "../../css/Common.module.css";

const TodoItem = (props) => {
  const todoItem = {
    todoId: props.todo.id,
    todoContent: props.todo.todoContent,
  };

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

  const todoDeleteParam = {
    yjTodoId: 0,
  };

  const todoDeleteHandler = async () => {
    todoDeleteParam.yjTodoId = props.todo.id;
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
    todoCheckParam.yjTodoId = props.todo.id;

    const response = await axios.put(
      "http://localhost:8090/yjTodo/check",
      todoCheckParam
    );
    console.log(response);
  };

  // const [modala, setModal] = useState(false);

  // const todoEditHandler = () => {
  //   alert("수정 모달 구현중입니다.");
  // };

  return (
    <div>
      <div
        className={styled.base_form}
        style={{
          color: props.todo.completedYn === "Y" ? "#808080" : "black",
          textDecoration:
            props.todo.completedYn === "Y" ? "line-through" : "none",
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
                <button onClick={todoCheckHandler} className="checkbox">
                  ✔
                </button>
              </td>
              <th>{todoDate(props.todo.createDateTime)}</th>
              <td>{props.todo.todoContent} </td>
              <td>
                <button
                  onClick={todoDeleteHandler}
                  className={styled.button_cancel}
                >
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
      </div>
    </div>
  );
};

export default TodoItem;
