function TodoItem(props) {
  const todos = props.todo;
  return <div>{todos.content}</div>;
}
export default TodoItem;
