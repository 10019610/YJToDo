import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = props.todos;
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}
export default TodoList;
