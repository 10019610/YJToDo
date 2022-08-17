import axios from "axios";
import React, { useState, useRef } from "react";
import Modal from "../../common/Modal";
// import "./Todo.css";

const TodoEdit = (props) => {
  console.log(props);
  const todoItem = {
    todoId: props.todos.todoId,
    todoContent: props.todos.todoContent,
  };
  console.log(todoItem);
  const items = props.todoItems;

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
    <Modal>
      <div className="edit-modal">
        <h2>todo - edit</h2>
        <div>
          <input
            type="text"
            placeholder="todo!"
            defaultValue={todoItem.todoContent}
            onChange={onChangeContent}
          />
        </div>
        <div>
          <button onClick={todoEditHandler}>수정</button>
          <button onClick={props.onClose}>cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default TodoEdit;
