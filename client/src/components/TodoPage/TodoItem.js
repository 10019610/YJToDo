import axios from "axios";
import React from "react";

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
    // todoCheckParam.yjTodoId = todo.id;
    // const response = await axios.put(
    //   "http://localhost:8090/yjTodo/check",
    //   todoCheckParam
    // );
    // console.log(response);
    alert("구현 준비중!");
  };

  return (
    <div>
      <span>{todoDate(todo.createDateTime)} || </span>
      <span>{todo.todoContent}</span>
      <span> || check 여부 (임시){todo.completedYn}</span>
      <span>
        <button onClick={todoDeleteHandler}>삭제</button>
      </span>
      <span>
        <button onClick={todoCheckHandler}>체크</button>
      </span>
      {/* <li>
        1
        <span>
          <button>수정</button>
        </span>
        <span>
          <button>삭제</button>
        </span>
      </li> */}
    </div>
  );
};

export default TodoItem;
