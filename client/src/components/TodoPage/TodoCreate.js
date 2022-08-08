const TodoCreate = () => {
  const createHandler = () => {
    alert("todoItem 추가 버튼 구현중");
  };

  return (
    <div>
      <span className="todo-create">
        <input />
      </span>
      <span>
        <button onClick={createHandler}>추가</button>
      </span>
    </div>
  );
};

export default TodoCreate;
