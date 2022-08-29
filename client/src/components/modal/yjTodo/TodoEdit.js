import axios from "axios";
import React, { useState } from "react";
import Modal from "../../common/Modal";
// import "./Todo.css";
import classes from "./TodoModal.module.css";
import common from "../../../css/Common.module.css";

const TodoEdit = (props) => {
  const todoItem = {
    todoId: props.todos.todoId,
    todoContent: props.todos.todoContent,
  };
  console.log(todoItem);

  const [contentEdit, setContentEdit] = useState("");

  const onChangeContent = (e) => {
    // console.log(e.target.value);
    setContentEdit(e.target.value);
  };

  const todoEditHandler = async () => {
    todoItem.todoContent = contentEdit;

    const response = await axios.put(
      "http://localhost:8090/yjTodo/edit",
      todoItem
    );

    // console.log(response);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.body}>
        <h2>ToDo - Edit</h2>
        <div>
          <textarea
            className={classes.edit_textarea}
            type="text"
            placeholder="todo!"
            defaultValue={todoItem.todoContent}
            onChange={onChangeContent}
          />
        </div>
        <div>
          <button className={common.button_confirm} onClick={todoEditHandler}>
            수정
          </button>
          <button className={common.button_cancel} onClick={props.onClose}>
            cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TodoEdit;
