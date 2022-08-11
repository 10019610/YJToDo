import React, { useState } from "react";
import "./Todo.css";

const TodoEdit = (todo) => {
  console.log(todo);
  return (
    <div className="edit-modal">
      <h2>todo - edit</h2>
      <div>todoContent</div>
      <div>작성일</div>
    </div>
  );
};

export default TodoEdit;
