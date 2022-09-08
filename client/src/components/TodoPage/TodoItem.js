import axios from "axios";
import React from "react";
// import Modal from "react-modal";
import styled from "../../css/Common.module.css";
import "./Todo.css";

const TodoItem = (props) => {
  const todoItem = {
    todoId: props.todo.id,
    todoContent: props.todo.todoContent,
  };

  const todoDate = (updateDateTime) => {
    let date = new Date(updateDateTime);
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
    if (props.todo.completedYn === "Y") {
      const response = await axios.put(
        "http://localhost:8090/yjTodo/delete",
        todoDeleteParam
      );
      if (response.status === 200) {
        props.searchTodo();
      }
    } else {
      alert("체크 이후 삭제 가능");
    }
  };

  const todoRealDelete = async () => {
    todoDeleteParam.yjTodoId = props.todo.id;
    const response = await axios.put(
      "http://localhost:8090/yjTodo/delete",
      todoDeleteParam
    );
    console.log(response);
    if (response.status === 200) {
      props.searchTodo();
    }
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
    if (response.status === 200) {
      props.searchTodo();
    } else {
      alert("체크기능을 수행할 수 없습니다.");
    }
  };
  // const todoOnGoing = async () => {
  //   todoDeleteParam.yjTodoId = props.todo.id;
  //   const response = await axios.put(
  //     "http://localhost:8090/yjTodo/delete",
  //     todoDeleteParam
  //   );
  //   if (response.status === 200) {
  //     props.searchTodo();
  //   }
  // };

  return (
    <div>
      {/* <div>{todoDate(props.todo.updateDateTime)}</div>
      <div>{props.todo.todoContent} </div> */}
      <div
        className="base_form"
        style={{
          color: props.todo.completedYn === "Y" ? "#808080" : "black",
          textDecoration:
            props.todo.completedYn === "Y" ? "line-through" : "none",
        }}
      >
        <div>
          <ul>
            <li>
              <span>
                <button onClick={todoCheckHandler} className="checkbox">
                  ✔
                </button>
              </span>
              <div className="type">{props.todo.yjTodoType}</div>
              <div className="content">
                <span>{props.todo.todoContent}</span>
              </div>
              <div>
                <span>{todoDate(props.todo.updateDateTime)}</span>
                <span className="todo-button">
                  <span>
                    <button
                      onClick={todoDeleteHandler}
                      className={styled.button_cancel}
                    >
                      완료
                    </button>
                  </span>
                  <span>
                    <button
                      className={styled.button_confirm}
                      onClick={props.showTodoModal.bind(this, todoItem)}
                    >
                      수정
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={todoRealDelete}
                      className={styled.button_delete}
                    >
                      X
                    </button>
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
