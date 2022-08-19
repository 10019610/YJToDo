import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../../common/Modal";
import classes from "./TodoModal.module.css";

const TodoCompleted = (props) => {
  // console.log(props);
  const [items, setItems] = useState([]);

  const completedList = async () => {
    const response = await axios.get(
      "http://localhost:8090/yjTodo/completedList"
    );
    setItems(response.data);
    // console.log(response);
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

  useEffect(() => {
    completedList();
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className={classes.completed_modal}>
          <button onClick={props.onClose}>cancel</button>
        </div>
        <table className="list_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>UpdateTime</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {items.map((listItem, index) => {
              return (
                <tr key={index}>
                  <th>{listItem.id}</th>
                  <td>{listItem.todoContent}</td>
                  <td>{todoDate(listItem.updateDateTime)}</td>
                  <td>{listItem.completedYn}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};
export default TodoCompleted;
