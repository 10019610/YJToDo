import React, { useState } from "react";
import "./Todo.css";

const TodoEdit = (todo) => {
  console.log(todo);

  return (
    <div className="edit-modal">
      <h2>todo - edit</h2>
      <div>
        <input type="text" placeholder="todo!" />
      </div>
      <div>
        <button>수정</button>
      </div>
    </div>
  );
};

export default TodoEdit;
