import React, { useState } from "react";
import axios from "axios";

function TodoCreate(props) {
  return (
    <div>
      <div>
        <span className="todo-create">
          <input type="text" name="text" placeholder="To do It !" />
        </span>
        <span className="todo-create">
          <button className="">추가</button>
        </span>
      </div>
    </div>
  );
}

export default TodoCreate;
