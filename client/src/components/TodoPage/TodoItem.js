import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.text}</span>
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
